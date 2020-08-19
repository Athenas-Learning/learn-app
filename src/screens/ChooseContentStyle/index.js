import React from 'react';
import { View, Text, Image } from 'react-native';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';

import endToEndImg from '../../assets/images/endToEnd.png';

import styles from './styles';

function ChooseContentStyle({ navigation, ...props }) {
    return (
        <View style={styles.container}>
            <Header title="Escolha sua trilha" navigation={navigation} />

            <View style={styles.contentStylesContainer}>
                <View style={styles.endToEndContainer}>
                    <Text style={styles.contentStyleTitle}>Ponta a Ponta</Text>
                    <Text style={styles.contentStyleDescription}>
                        Desta forma, você verá o conteúdo (texto, imagem e
                        vídeo) completo em uma única página.
                    </Text>
                    <Image source={endToEndImg} style={styles.contentStyleImage} />
                </View>
                <View style={styles.stepByStepContainer}>
                    <Text style={styles.contentStyleTitle}>Ponta a Ponta</Text>
                    <Text style={styles.contentStyleDescription}>
                        Desta forma, você verá o conteúdo (texto, imagem e
                        vídeo) completo em uma única página.
                    </Text>
                    <Image source={endToEndImg} style={styles.contentStyleImage} />
                </View>
            </View>

            <FixedMenuBar />
        </View>
    )
};

export default ChooseContentStyle;