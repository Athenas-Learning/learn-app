import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from './CustomDrawer';

import ChooseClass from '../ChooseClass';
import ChooseTheme from '../ChooseTheme';
import ChooseContentStyle from '../ChooseContentStyle';
import EndToEnd from '../ContentStyles/EndToEnd';

const Drawer = createDrawerNavigator();

const LearnScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Categories" drawerContent={CustomDrawer}>
      <Drawer.Screen name="ChooseClass" component={ChooseClass} />
      <Drawer.Screen name="ChooseTheme" component={ChooseTheme} />
      <Drawer.Screen name="ChooseContentStyle" component={ChooseContentStyle} />
      <Drawer.Screen name="EndToEnd" component={EndToEnd} />
    </Drawer.Navigator>
  );
};

export { LearnScreen };
