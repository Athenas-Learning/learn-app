import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen} from './src/screens/SplashScreen/SplashScreen';
import {IntroScreen} from './src/screens/IntroScreen/IntroScreen';
import {LoginScreen} from './src/screens/LoginScreen/LoginScreen';
import {SignupScreen} from './src/screens/SignupScreen/SignupScreen';
import {PasswordRecoveryScreen} from './src/screens/PasswordRecoveryScreen/PasswordRecoveryScreen';
import {ValidationCodeScreen} from './src/screens/PasswordRecoveryScreen/ValidationCodeScreen';
import {NewPasswordScreen} from './src/screens/PasswordRecoveryScreen/NewPasswordScreen';
import {LearnScreen} from './src/screens/LearnScreen/LearnScreen';
import {AuthContext} from './src/services/AuthService';

const Stack = createStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const onUserChangedAsync = async (userData) => {
    try {
      if (userData && userData.uid) {
        setUser(userData);
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
        await firestore().collection('users').doc(data.uid).set(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onAuthStateChangedAsync = async (authData) => {
    if (authData && authData.uid) setIsAuthenticated(true);
    else setIsAuthenticated(false);
    setUser(authData);
  };

  useEffect(() => {
    return auth().onUserChanged(onUserChangedAsync);
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChangedAsync);
    setIsLoading(false);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <AuthContext.Provider value={user}>
      <NavigationContainer>
        <Stack.Navigator
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
              <Stack.Screen
                name="NewPassword"
                options={{
                  headerShown: false,
                }}
                component={NewPasswordScreen}
              />
              <Stack.Screen
                name="ValidationCode"
                options={{
                  headerShown: false,
                }}
                component={ValidationCodeScreen}
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
  );
};

export default App;
