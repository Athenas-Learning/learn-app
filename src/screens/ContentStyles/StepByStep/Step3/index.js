import React, { useRef } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import styles from './styles';

function EndToEndVolcanism({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Vulcanismo" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            </ScrollView>
            <FixedMenuBar />
        </SafeAreaView>

    );
};

export default EndToEndVolcanism;