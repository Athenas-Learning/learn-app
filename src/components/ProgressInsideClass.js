import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import thirtyProgressStatus from '../assets/images/30progressStatus.png';
import loadingHexagonImg from '../assets/images/loadingHexagons.png';
import thirtyProgressBar from '../assets/images/thirtyPercentProgressBar.png';

const test = { uri: "https://imgur.com/9vILMcS" };

function ProgressInsideClass({ navigation, route, headline, subtitle, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.progressContentWrapper}>
                <View style={styles.progressTitle}>
                    <Text style={styles.mainProgressTitleText}>
                        {route.params.headline}
                    </Text>
                    <Text style={styles.secondaryProgressTitleText}>
                        {route.params.subtitle}
                    </Text>
                </View>

                <ImageBackground
                    source={loadingHexagonImg}
                    style={styles.progressImgContainer}
                >
                    <Text>30%</Text>
                </ImageBackground>
                <View style={styles.progressBarContainer}>
                    <Image source={thirtyProgressBar} />
                    <BorderlessButton style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>Continuar</Text>
                    </BorderlessButton>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProgressInsideClass;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb5757',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progressContentWrapper: {
        marginVertical: 80
    },
    progressTitle: {
        alignItems: 'center'
    },
    mainProgressTitleText: {
        fontSize: 22,
        color: '#eee'
    },
    secondaryProgressTitleText: {
        fontSize: 16,
        color: '#eee'
    },
    progressImgContainer: {
        marginVertical: 68,
        alignSelf: 'center',
        height: 240,
        width: 240,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBarContainer: {
        alignItems: 'center',
    },
    nextButton: {
    },
    nextButtonText: {
        color: '#eee',
        fontSize: 16,
        marginTop: 10
    }
})