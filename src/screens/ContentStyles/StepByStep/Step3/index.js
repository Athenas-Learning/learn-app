import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import solarSystemImg from '../../../../assets/images/solarSystemRetakeContent.png';
import solarSystemThumb from '../../../../assets/images/solarSystemThumb.png';
import retakeButtonImg from '../../../../assets/images/retake.png';
import quizImg from '../../../../assets/images/quiz.png';

// import styles from './styles';

function Step3({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Meu Perfil" navigation={navigation} />

            <FixedMenuBar />
        </SafeAreaView>
    );
};

export default Step3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
})