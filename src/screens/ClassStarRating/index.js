import React from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';

import styles from './styles';
import GeneralStarExample from './StarRating';

function ClassStarRating({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Avaliação" navigation={navigation} />

            <Text style={styles.congratsText}>Parabéns!</Text>

            <Text style={styles.descriptionRatingText}>
                Você finalizou todo o conteúdo sobre sistema solar e está pronto para novas aventuras! {'\n'}{'\n'}{'\n'}
                Mas antes, você poderia deixar uma nota sobre o que achou? É bem rapidinho.
            </Text>
            <GeneralStarExample />
            <RectButton style={styles.finishClassButton}>
                <Text style={styles.buttonText}>Finalizar</Text>
            </RectButton>
            <FixedMenuBar />
        </SafeAreaView>
    );
};

export default ClassStarRating;