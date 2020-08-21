import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import thirtyProgressStatus from '../../../../assets/images/30progressStatus.png';
import thirtyProgressBar from '../../../../assets/images/thirtyPercentProgressBar.png';

function Step3({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.progressContentWrapper}>
                <View style={styles.progressTitle}>
                    <Text style={styles.mainProgressTitleText}>
                        Vamos lá, Lucas!
                    </Text>
                    <Text style={styles.secondaryProgressTitleText}>
                        Você ainda está começando...
                </Text>
                </View>
                <Image source={thirtyProgressStatus} style={styles.progressImgContainer} />

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

export default Step3;

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