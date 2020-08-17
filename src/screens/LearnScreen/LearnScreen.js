import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from './CustomDrawer';
import ChooseClass from '../ChooseClass';
import ChooseTheme from '../ChooseTheme';

const Drawer = createDrawerNavigator();

const LearnScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Categories" drawerContent={CustomDrawer}>
      <Drawer.Screen name="ChooseClass" component={ChooseClass} />
      <Drawer.Screen name="ChooseTheme" component={ChooseTheme} />
    </Drawer.Navigator>
  );
};

export { LearnScreen };
