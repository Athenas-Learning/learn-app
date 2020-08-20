import React from 'react';
import { View, SafeAreaView } from 'react-native';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import styles from './styles';

function Step3({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Sistema Solar" navigation={navigation} />
            <FixedMenuBar />
        </SafeAreaView>
    );
};

export default Step3;