import React from 'react';
import { View, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import hexagonIcon from '../../assets/images/hexagon.png';
import rocketIcon from '../../assets/images/rocket.png';
import userIcon from '../../assets/images/user.png';

import styles from './styles';

function FixedMenuBar() {
    return (
        <View style={styles.fixedMenuBar}>
            <BorderlessButton style={styles.hexagonButton} >
                <Image source={hexagonIcon} />
            </BorderlessButton>
            <BorderlessButton style={styles.rocketButton} >
                <Image source={rocketIcon} />
            </BorderlessButton>
            <BorderlessButton style={styles.userButton} >
                <Image source={userIcon} />
            </BorderlessButton>
        </View>
    );
};

export default FixedMenuBar;