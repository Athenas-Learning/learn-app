import React from 'react';
import { SafeAreaView, View, Text, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import videoPlayerImg from '../../../../assets/images/video_player.png';

import { Header } from '../../../../components/Header';

import styles from './styles';
import FixedMenuBar from '../../../../components/FixedMenuBar';

function Step2({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Sistema Solar" navigation={navigation} />

            <ScrollView contentContainerStyle={styles.endToEndContainer}>
                <View style={[styles.complementaryVideosContainer, styles.contentSeparator]}>
                    <RectButton disabled={true} touchSoundDisabled={true} style={[styles.complementaryVideosTitle]}>
                        <Text style={styles.complementaryVideosTitleText}>Vídeos complementares</Text>
                    </RectButton>
                    <Image source={videoPlayerImg} style={styles.contentSeparator} />
                    <Text style={[styles.complementaryVideosVideoChannel, styles.complementaryVideosTextSeparator]}>Canal do Schwarza</Text>
                    <Text style={styles.complementaryVideosTextSeparator}>Conhecendo o Sistema Solar -{'\n'}Descomplicando a Astronomia</Text>
                    <Text style={styles.complementaryVideosTextSeparator}>289.000 visualizações - Postado há 1 ano</Text>
                    <RectButton disabled={true} touchSoundDisabled={true} style={[styles.complementaryVideosTitle, styles.contentSeparator]}>
                        <Text style={styles.complementaryVideosTitleText}>Vídeos complementares</Text>
                    </RectButton>
                    <Image source={videoPlayerImg} style={styles.contentSeparator} />
                    <Text style={[styles.complementaryVideosVideoChannel, styles.complementaryVideosTextSeparator]}>Canal do Schwarza</Text>
                    <Text style={styles.complementaryVideosTextSeparator}>Conhecendo o Sistema Solar -{'\n'}Descomplicando a Astronomia</Text>
                    <Text style={styles.complementaryVideosTextSeparator}>289.000 visualizações - Postado há 1 ano</Text>
                </View>
                <RectButton style={styles.nextStepButton} onPress={() => navigation.navigate('ClassStarRating')}>
                    <Text style={styles.nextStepButtonText}>Próximo</Text>
                </RectButton>
            </ScrollView>
            <FixedMenuBar />
        </SafeAreaView>
    )
}

export default Step2;