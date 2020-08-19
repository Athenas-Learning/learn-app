import React, {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from './CustomDrawer';
import ChooseClass from '../ChooseClass';
import ChooseTheme from '../ChooseTheme';

import {AuthContext} from '../../services/AuthService';

const Drawer = createDrawerNavigator();

const LearnScreen = () => {
  const user = useContext(AuthContext);

  if(!user)
    return <></>;
  
  const DrawerMenu = CustomDrawer(user);

  return (
    <Drawer.Navigator initialRouteName="Categories" drawerContent={DrawerMenu}>
      <Drawer.Screen name="ChooseClass" component={ChooseClass} />
      <Drawer.Screen name="ChooseTheme" component={ChooseTheme} />
    </Drawer.Navigator>
  );
};

export { LearnScreen };
