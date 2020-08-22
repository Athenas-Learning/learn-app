import React from 'react';
import {
    Text,
    View,
    TextInput,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import soundIcon from '../../../../assets/images/sound.png';
import endToEndExample from '../../../../assets/images/endToEnd.png';

// import styles from './styles';

function Step3({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Configurações" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.soundConfigContainer}>
                    <Text style={styles.configTitleLabel}>Som das animações</Text>
                    <BorderlessButton style={styles.soundConfigIcon}>
                        <Image source={soundIcon} />
                    </BorderlessButton>
                </View>

                <Text style={styles.configTitleLabel}>Visualização do conteúdo</Text>
                <View style={styles.contentStyleConfigContainer}>
                    <BorderlessButton style={styles.endToEndButtonSelection}>
                        <Text style={styles.contentStyleTitle}>Ponta a Ponta</Text>
                        <Text style={styles.contentStyleDescription}>Você navega pelos textos, imagens e vídeos em uma só tela.</Text>
                        <Image source={endToEndExample} />
                    </BorderlessButton>
                </View>
            </ScrollView>
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
    scrollContainer: {
        justifyContent: 'center',
        marginLeft: 15,
        marginHorizontal: 10,
    },
    soundConfigContainer: {
        flexDirection: 'row',
    },
    configTitleLabel: {
        color: '#414141',
        fontSize: 16
    },
    soundConfigIcon: {
        marginLeft: '49%'
    }
})