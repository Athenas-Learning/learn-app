import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

// import styles from './styles';

function Step3({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Conquistas" navigation={navigation} />
            <Text style={[styles.rewardWarning, styles.textTitleSize, styles.textColor]}>Você desbloqueou 1 conquista!</Text>
            <View style={styles.rewardsDataTitle}>
                <Text style={[styles.textTitleSize, styles.textColor]}>Seus pontos: 50</Text>
                <View style={styles.rewardButton}>
                    <Text style={styles.rewardButtonText}>Recompensas</Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.rewardDataContainer}>
                    <View style={styles.unlockedTrophyBackground}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardDescriptionContainer}>
                        <Text style={[styles.textTitleSize, styles.textColor]}>Completar o cadastro</Text>
                        <Text style={styles.unlockedRewardRewardText}>50 pontos</Text>
                    </View>
                </View>
                <View style={styles.rewardDataContainer}>
                    <View style={styles.unlockedTrophyBackground}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardDescriptionContainer}>
                        <Text style={[styles.textTitleSize, styles.textColor]}>Completar o cadastro</Text>
                        <Text style={styles.unlockedRewardRewardText}>50 pontos</Text>
                    </View>
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
    rewardWarning: {
        marginTop: 15,
        textAlign: 'center'
    },
    textTitleSize: {
        fontSize: 16,
    },
    textColor: {
        color: '#414141'
    },
    rewardsDataTitle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 17,
        marginHorizontal: 15,
    },
    rewardButton: {
        backgroundColor: '#04d361',
        height: 20,
        width: '30%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rewardButtonText: {
        color: '#eee'
    },
    rewardDataContainer: {
        flexDirection: 'row',
    },
    unlockedTrophyBackground: {
        backgroundColor: '#e5e5e5',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
        marginBottom: 30
    },
    rewardDescriptionContainer: {
        justifyContent: 'space-between',
        height: '20%'
    },
    unlockedRewardRewardText: {
        color: '#747474',
        marginTop: 15
    }
})