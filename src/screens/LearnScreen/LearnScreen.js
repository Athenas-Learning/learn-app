import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from './CustomDrawer';

import Dashboard from '../Dashboard';
import ChooseClass from '../ChooseClass';
import ChooseTheme from '../ChooseTheme';
import ChooseContentStyle from '../ChooseContentStyle';
import EndToEnd from '../ContentStyles/EndToEnd';
import Step1 from '../ContentStyles/StepByStep/Step1';
import Step2 from '../ContentStyles/StepByStep/Step2';
import Step3 from '../ContentStyles/StepByStep/Step3';
import EditProfile from '../EditProfile/index';
import Rewards from '../Rewards/index';

import { AuthContext } from '../../services/AuthService';

const Drawer = createDrawerNavigator();

const LearnScreen = () => {
  const user = useContext(AuthContext);

  if (!user)
    return <></>;

  const DrawerMenu = CustomDrawer(user);

  return (
    <Drawer.Navigator initialRouteName="Dashboard" drawerContent={DrawerMenu}>
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{ title: 'Início' }} />
      <Drawer.Screen name="ChooseClass" component={ChooseClass} options={{ title: 'Materias' }} />
      <Drawer.Screen name="ChooseTheme" component={ChooseTheme} options={{ title: 'Temas' }} />
      <Drawer.Screen name="ChooseContentStyle" options={{ title: 'Estilos' }} component={ChooseContentStyle} />
      <Drawer.Screen name="EndToEnd" component={EndToEnd} options={{ title: 'Ponta a ponta' }} />
      <Drawer.Screen name="Step1" component={Step1} options={{ title: 'Passo a passo' }} />
      <Drawer.Screen name="Step2" component={Step2} options={{ title: 'Passo a passo' }} />
      <Drawer.Screen name="Step3" component={Step3} options={{ title: 'Passo a passo' }} />
      <Drawer.Screen name="EditProfile" component={EditProfile} options={{ title: 'Passo a passo' }} />
      <Drawer.Screen name="Rewards" component={Rewards} options={{ title: 'Passo a passo' }} />
    </Drawer.Navigator>
  );
};

export { LearnScreen };
