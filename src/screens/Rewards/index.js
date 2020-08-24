import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';

import styles from './styles';

function Rewards({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Conquistas" navigation={navigation} />
            <Text style={[styles.rewardWarning, styles.textTitleSize, styles.textColor]}>Você desbloqueou 1 conquista!</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.rewardsDataTitle}>
                    <Text style={[styles.textTitleSize, styles.textColor]}>Seus pontos: 50</Text>
                    <View style={styles.rewardButton}>
                        <Text style={styles.rewardButtonText}>Recompensas</Text>
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

export default Rewards;

