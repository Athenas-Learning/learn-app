import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import crashlytics from '@react-native-firebase/crashlytics';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen} from './src/screens/SplashScreen/SplashScreen';
import {IntroScreen} from './src/screens/IntroScreen/IntroScreen';
import {LoginScreen} from './src/screens/LoginScreen/LoginScreen';
import {SignupScreen} from './src/screens/SignupScreen/SignupScreen';
import {PasswordRecoveryScreen} from './src/screens/PasswordRecoveryScreen/PasswordRecoveryScreen';
import {LearnScreen} from './src/screens/LearnScreen/LearnScreen';
import {AuthContext} from './src/services/AuthService';
import {navigationRef, isReadyRef} from './src/services/NavigationService';
import {requestUserPermission} from './src/services/NotificationService';
import {initializeErrorHandler} from './src/services/ErrorService';
import {ErrorHandler} from './src/components/ErrorBoundary';

const Stack = createStackNavigator();
initializeErrorHandler();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [initialRoute, setInitialRoute] = useState('Intro');
  const [notificationToken, setNotificationToken] = useState(null);

  const onUserChangedAsync = async (userData) => {
    setUser(userData);
    if (userData && userData.uid) {
      const data = {
        displayName: userData.displayName,
        email: userData.email,
        emailVerified: userData.emailVerified,
        isAnonymous: userData.isAnonymous,
        metadata: userData.metadata,
        phoneNumber: userData.phoneNumber,
        photoURL: userData.photoURL,
        providerId: userData.providerId,
        uid: userData.uid,
      };
      await firestore()
        .collection('users')
        .doc(data.uid)
        .set(data, {merge: true});
    }
  };

  const onAuthStateChangedAsync = async (authData) => {
    if (authData && authData.uid) {
      setIsAuthenticated(true);
      setInitialRoute('Learn');

      crashlytics().log('User signed in.');
      await Promise.all([
        crashlytics().setUserId(authData.uid),
        crashlytics().setAttributes({
          email: authData.email,
          displayName: authData.displayName,
        }),
      ]);
    } else setIsAuthenticated(false);
    setUser(authData);
  };

  const initializeNotifications = async () => {
    await requestUserPermission();

    messaging().onNotificationOpenedApp((remoteMessage) => {
      if (remoteMessage?.data?.action === 'navigate') {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        navigationRef.current.navigate(remoteMessage.data.type);
      }
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage?.data?.action === 'navigate') {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          if (isAuthenticated) setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
      });

    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('FCM Message Data:', remoteMessage.data);
    });

    const token = await messaging().getToken();
    setNotificationToken(token);

    return unsubscribe;
  };

  useEffect(() => {
    const asyncRun = async () => {
      return await initializeNotifications();
    };
    asyncRun();
  }, []);

  useEffect(() => {
    const asyncRun = async () => {
      if (notificationToken && user?.id) {
        try {
          await firestore()
            .collection('users')
            .doc(user.uid)
            .set({messagingToken: notificationToken}, {merge: true});
        } catch (error) {
          console.log(error);
        }
      }
    };
    asyncRun();
    return () => {};
  }, [notificationToken, user]);

  useEffect(() => {
    return auth().onUserChanged(onUserChangedAsync);
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChangedAsync);
    setIsLoading(false);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (isLoading || (isAuthenticated && !user)) return <SplashScreen />;

  return (
    <ErrorHandler>
      <AuthContext.Provider value={user}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            isReadyRef.current = true;
          }}>
          <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#fff',
              },
              headerTintColor: '#000',
            }}>
            {!isAuthenticated ? (
              <>
                <Stack.Screen
                  name="Intro"
                  options={{
                    headerShown: false,
                  }}
                  component={IntroScreen}
                />
                <Stack.Screen
                  name="Login"
                  options={{
                    headerShown: false,
                  }}
                  component={LoginScreen}
                />
                <Stack.Screen
                  name="Signup"
                  options={{
                    headerShown: false,
                  }}
                  component={SignupScreen}
                />
                <Stack.Screen
                  name="PasswordRecovery"
                  options={{
                    headerShown: false,
                  }}
                  component={PasswordRecoveryScreen}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Learn"
                  options={{
                    headerShown: false,
                  }}
                  component={LearnScreen}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </ErrorHandler>
  );
};

export default App;
