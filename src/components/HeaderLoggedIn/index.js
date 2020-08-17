import React, { useState } from 'react';
import { Text, Image, View } from 'react-native';

import menuImg from '../../assets/images/menu-icon.png';
import goBackIcon from '../../assets/images/goBackImg.png';

import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function HeaderLoggedIn({ title, navigation, ...props }) {
    return (
        <View style={styles.headerContainer}>
            <BorderlessButton>
                <Image source={menuImg} style={styles.menuHeader} />
            </BorderlessButton>
            <Text style={styles.headerTitle}>{title}</Text>
            <BorderlessButton onPress={() => navigation.goBack()}>
                <Text>Voltar</Text>
            </BorderlessButton>
        </View>
    );
}

export default HeaderLoggedIn;