import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from './CustomDrawer';

import Dashboard from '../Dashboard';
import ChooseContentStyle from '../ChooseContentStyle';
import EndToEnd from '../ContentStyles/EndToEnd';
import Step1 from '../ContentStyles/StepByStep/Step1';
import Step2 from '../ContentStyles/StepByStep/Step2';
import EditProfile from '../EditProfile/index';
import Rewards from '../Rewards/index';
import ClassStarRating from '../ClassStarRating/index';
import Quiz from '../Quiz/index';
import ClassReview from '../ClassReview/index';
import ConfigurationScreen from '../ConfigurationScreen/index';

import ProgressInsideClass from '../../components/ProgressInsideClass/index';

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
      <Drawer.Screen name="ChooseContentStyle" options={{ title: 'Estilos' }} component={ChooseContentStyle} />
      <Drawer.Screen name="EndToEnd" component={EndToEnd} options={{ title: 'Ponta a ponta' }} />
      <Drawer.Screen name="Step1" component={Step1} options={{ title: 'Passo a passo 1' }} />
      <Drawer.Screen name="Step2" component={Step2} options={{ title: 'Passo a passo 2' }} />
      <Drawer.Screen name="EditProfile" component={EditProfile} options={{ title: 'Editar perfil' }} />
      <Drawer.Screen name="Rewards" component={Rewards} options={{ title: 'Recompensas' }} />
      <Drawer.Screen name="ClassStarRating" component={ClassStarRating} options={{ title: 'Avaliar aula' }} />
      <Drawer.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }} />
      <Drawer.Screen name="ProgressInsideClass" component={ProgressInsideClass} options={{ title: 'Progresso' }} />
      <Drawer.Screen name="ClassReview" component={ClassReview} options={{ title: 'Revisar aula' }} />
      <Drawer.Screen name="ConfigurationScreen" component={ConfigurationScreen} options={{ title: 'Configurações gerais' }} />
    </Drawer.Navigator>
  );
};

export { LearnScreen };
