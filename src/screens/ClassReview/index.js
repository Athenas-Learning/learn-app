import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import solarSystemImg from '../../../../assets/images/solarSystemRetakeContent.png';
import solarSystemThumb from '../../../../assets/images/solarSystemThumb.png';
import retakeButtonImg from '../../../../assets/images/retake.png';
import quizImg from '../../../../assets/images/quiz.png';

import styles from './styles';

function ClassReview({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Sistema Solar" navigation={navigation} />
            <Text style={styles.retakeContentDescription}>Agora que você terminou sua aventura, você pode voltar e rever o que foi aprendido.</Text>
            <View style={styles.retakeContentContainer}>
                <View style={styles.retakeButtonWrapper}>
                    <Text style={styles.actionDescriptionText}>Ler o conteúdo</Text>
                    <BorderlessButton>
                        <Image source={retakeButtonImg} />
                    </BorderlessButton>
                </View>
                <Image source={solarSystemImg} />
            </View>
            <View style={styles.retakeContentContainer}>
                <View style={styles.retakeButtonWrapper}>
                    <Text style={styles.actionDescriptionText}>Ler o conteúdo</Text>
                    <BorderlessButton>
                        <Image source={retakeButtonImg} />
                    </BorderlessButton>
                </View>
                <Image source={solarSystemThumb} />
            </View>
            <View style={styles.retakeContentContainer}>
                <BorderlessButton style={styles.retakeQuizButton}>
                    <Text style={[styles.actionDescriptionText, styles.textAsAButton]}>Refazer o quiz</Text>

                    <Image source={quizImg} style={styles.quizButtonImg} />
                </BorderlessButton>
            </View>
            <RectButton style={styles.finishThisContentButton}><Text style={styles.buttonText}>Avançar</Text></RectButton>
            <FixedMenuBar />
        </SafeAreaView>
    );
};

export default ClassReview;

