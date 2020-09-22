import React, { useCallback } from 'react';
import { Alert, SafeAreaView, View, Text, Image, Linking } from 'react-native';
import { RectButton, ScrollView, BorderlessButton } from 'react-native-gesture-handler';

import videoPlayerImg from '../../../../assets/images/video_player.png';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import styles from './styles';

function Step2({ navigation, ...props }) {
    const youtube_url = 'https://www.youtube.com/watch?v=zQvpKm9dCD0'

    const openYouTubeVideo = useCallback(
        async () => {
            const supported = await Linking.canOpenURL(youtube_url)

            if (supported) {
                await Linking.openURL(youtube_url)
            } else {
                Alert.alert(`Dont know how to open this URL: ${youtube_url}`)
            }
        },
        [youtube_url],
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Sistema Solar" navigation={navigation} />

            <ScrollView contentContainerStyle={styles.endToEndContainer}>
                <View style={[styles.complementaryVideosContainer, styles.contentSeparator]}>
                    <RectButton disabled={true} touchSoundDisabled={true} style={[styles.complementaryVideosTitle]}>
                        <Text style={styles.complementaryVideosTitleText}>Vídeos complementares</Text>
                    </RectButton>
                    <BorderlessButton onPress={openYouTubeVideo}>
                        <Image source={videoPlayerImg} style={styles.contentSeparator} />
                    </BorderlessButton>
                    <Text style={[styles.complementaryVideosVideoChannel, styles.complementaryVideosTextSeparator]}>Canal do Schwarza</Text>
                    <Text style={styles.complementaryVideosTextSeparator}>Conhecendo o Sistema Solar -{'\n'}Descomplicando a Astronomia</Text>
                    <Text style={styles.complementaryVideosTextSeparator}>289.000 visualizações - Postado há 1 ano</Text>
                </View>
                <RectButton style={styles.nextStepButton} onPress={() => navigation.navigate('ProgressInsideClass', {
                    textParams: {
                        color: "#767676",
                        headline: "Vamos lá, Lucas!",
                        subtitle: "Você está indo bem, continue!",
                        percentage: "50%",
                        buttonText: "Continuar",
                    },
                    navigationParams: {
                        name: 'Quiz',
                    },
                    backgroundParams:
                        { color: '255, 204, 47, 0.4' },
                    progressBar: 1
                })}>
                    <Text style={styles.nextStepButtonText}>Próximo</Text>
                </RectButton>
            </ScrollView>
            <FixedMenuBar />
        </SafeAreaView >
    )
}

export default Step2;