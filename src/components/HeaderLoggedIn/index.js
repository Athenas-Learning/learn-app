import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';

import menuImg from '../../assets/images/menu-icon.png';
import goBackIcon from '../../assets/images/goBackImg.png';

import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function HeaderLoggedIn({ title, navigation, ...props }) {
    return (
        <View style={styles.headerContainer}>
            <BorderlessButton onPress={() => navigation.navigate('content')}>
                <Image style={styles.goBackButton} source={goBackIcon} />
            </BorderlessButton>
            <Text style={styles.headerTitle}>{title}</Text>
            <BorderlessButton>
                <Image source={menuImg} style={styles.menuHeader} />
            </BorderlessButton>
        </View>
    );
}

export default HeaderLoggedIn;