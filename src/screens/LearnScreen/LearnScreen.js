import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {CustomDrawer} from './CustomDrawer';
import {CategoriesScreen} from '../CategoriesScreen/CategoriesScreen';

const Drawer = createDrawerNavigator();

const LearnScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Categories" drawerContent={CustomDrawer}>
      <Drawer.Screen name="Categories" component={CategoriesScreen}/>
    </Drawer.Navigator>
  );
};

export {LearnScreen};
