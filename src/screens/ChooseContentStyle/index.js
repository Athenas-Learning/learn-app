import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';

import endToEndImg from '../../assets/images/endToEnd.png';

import styles from './styles';

function ChooseContentStyle({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Escolha sua trilha" navigation={navigation} />

            <View style={styles.contentStylesContainer}>
                <BorderlessButton style={styles.endToEndContainer} onPress={() => navigation.navigate('EndToEnd')}>
                    <Text style={styles.contentStyleTitle}>Ponta a Ponta</Text>
                    <Text style={styles.contentStyleDescription}>
                        Desta forma, você verá o conteúdo (texto, imagem e {'\n'}
                        vídeo) completo em uma única página.
                    </Text>
                    <Image source={endToEndImg} style={styles.contentStyleImage} />
                </BorderlessButton>
                <BorderlessButton style={styles.stepByStepContainer}>
                    <Text style={styles.contentStyleTitle}>Passo a passo</Text>
                    <Text style={styles.contentStyleDescription}>
                        Assim, você verá o conteúdo separado por sessões. {'\n'}
                        Textos e imagens estarão separados dos vídeos.
                    </Text>
                    <Image source={endToEndImg} style={styles.contentStyleImage} />
                </BorderlessButton>
            </View>

            <FixedMenuBar />
        </SafeAreaView>
    )
};

export default ChooseContentStyle;