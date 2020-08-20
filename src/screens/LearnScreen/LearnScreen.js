import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from './CustomDrawer';

import ChooseClass from '../ChooseClass';
import ChooseTheme from '../ChooseTheme';
import ChooseContentStyle from '../ChooseContentStyle';
import EndToEnd from '../ContentStyles/EndToEnd';

import { AuthContext } from '../../services/AuthService';

const Drawer = createDrawerNavigator();

const LearnScreen = () => {
  const user = useContext(AuthContext);

  if (!user)
    return <></>;

  const DrawerMenu = CustomDrawer(user);

  return (
    <Drawer.Navigator initialRouteName="Categories" drawerContent={DrawerMenu}>
      <Drawer.Screen name="ChooseClass" component={ChooseClass} options={{ title: 'Materias' }} />
      <Drawer.Screen name="ChooseTheme" component={ChooseTheme} options={{ title: 'Temas' }} />
      <Drawer.Screen name="ChooseContentStyle" options={{ title: 'Estilos' }} component={ChooseContentStyle} />
      <Drawer.Screen name="EndToEnd" component={EndToEnd} options={{ title: 'Ponta a ponta' }} />
    </Drawer.Navigator>
  );
};

export { LearnScreen };
