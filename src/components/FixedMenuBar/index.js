import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import hexagonIcon from '../../assets/images/hexagon.png';
import rocketIcon from '../../assets/images/rocket.png';
import userIcon from '../../assets/images/user.png';

import styles from './styles';
import { navigate, navigationRef } from '../../services/NavigationService';

const FixedMenuBar = () => {

  return (
    <View style={styles.fixedMenuBar}>
      <BorderlessButton style={styles.hexagonButton} onPress={() => navigate('Dashboard')}>
        <Image source={hexagonIcon} />
      </BorderlessButton>
      <BorderlessButton style={styles.rocketButton} onPress={() => navigate('ConfigurationScreen')}>
        <Image source={rocketIcon} />
      </BorderlessButton>
      <BorderlessButton style={styles.userButton} onPress={() => navigate('EditProfile')}>
        <Image source={userIcon} />
      </BorderlessButton>
    </View>
  );
};

export default FixedMenuBar;
