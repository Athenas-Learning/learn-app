import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen} from './src/screens/SplashScreen/SplashScreen';
import {IntroScreen} from './src/screens/IntroScreen/IntroScreen';
import {LoginScreen} from './src/screens/LoginScreen/LoginScreen';
import {SignupScreen} from './src/screens/SignupScreen/SignupScreen';
import {LearnScreen} from './src/screens/LearnScreen/LearnScreen';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    //setTimeout(() => {
      setIsLoading(false);
    //}, 1000);
  });

  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
        }}>
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
          name="Learn"
          options={{
            headerShown: false,
          }}
          component={LearnScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
