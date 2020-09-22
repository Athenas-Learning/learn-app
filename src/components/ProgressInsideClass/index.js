import React from 'react';
import { View, SafeAreaView, Text, Image, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import loadingHexagonImg from '../../assets/images/loadingHexagons.png';
import thirtyProgressBar from '../../assets/images/thirtyPercentProgressBar.png';
import fiftyProgressBar from '../../assets/images/fiftyProgressBar.png';
import hundredProgressBar from '../../assets/images/hundredProgressBar.png';

import styles from './styles';

function ProgressInsideClass({ navigation, route, backgroundParams, textParams, navigationParams, progressBar, ...props }) {
    const color = route.params.backgroundParams.color
    const text_color = route.params.textParams.color
    const headline = route.params.textParams.headline
    const subtitle = route.params.textParams.subtitle
    const percentage = route.params.textParams.percentage
    const buttonText = route.params.textParams.buttonText
    const routeName = route.params.navigationParams.name
    const actualBar = route.params.progressBar

    const PROGRESS_BAR = [
        thirtyProgressBar,
        fiftyProgressBar,
        hundredProgressBar
    ]

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: `rgba(${color})` }]}>
            <View style={styles.progressContentWrapper}>
                <View style={styles.progressTitle}>
                    <Text style={[styles.mainProgressTitleText, { color: text_color }]}>
                        {headline}
                    </Text>
                    <Text style={[styles.secondaryProgressTitleText, { color: text_color }]}>
                        {subtitle}
                    </Text>
                </View>

                <ImageBackground
                    source={loadingHexagonImg}
                    style={styles.progressImgContainer}
                >
                    <Text style={[styles.mainProgressTitleText, { color: text_color }]}>{percentage}</Text>
                </ImageBackground>
                <View style={styles.progressBarContainer}>
                    <Image source={PROGRESS_BAR[actualBar]} />
                    <BorderlessButton style={styles.nextButton} onPress={() => navigation.navigate({
                        name: routeName
                    })}>
                        <Text style={[styles.nextButtonText, { color: text_color }]}>{buttonText}</Text>
                    </BorderlessButton>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProgressInsideClass;
