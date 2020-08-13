import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Step01Screen} from './Step01Screen';
import {Step02Screen} from './Step02Screen';
import {Step03Screen} from './Step03Screen';

const Tab = createMaterialTopTabNavigator();

const IntroScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Step01"
      style={{marginTop:-20}}
      tabBarOptions={{
        showIcon: false,
        showLabel: false,
        tabStyle: {height: 0},
        iconStyle: {height: 0},
        labelStyle: {height: 0},
        tabBarVisible: false,
      }}>
      <Tab.Screen
        name="Step01"
        component={Step01Screen}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="Step02"
        component={Step02Screen}
        options={{tabBarVisible: false}}
      />
      <Tab.Screen
        name="Step03"
        component={Step03Screen}
        options={{tabBarVisible: false}}
      />
    </Tab.Navigator>
  );
};

export {IntroScreen};
