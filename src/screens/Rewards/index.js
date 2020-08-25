import React from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, RectButton } from 'react-native-gesture-handler';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';

import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

function EndToEnd({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Sistema Solar" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>Parabens! Você desbloqueou uma conquista.</Text>
                <View style={styles.adjustingContentToRow}>
                    <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                        Seus pontos: 50
                    </Text>
                    <View style={[styles.rewardTitleContainer]}>
                        <Text style={styles.rewardTitleText}>Recompensas</Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
                <View style={[styles.adjustingContentToRow, styles.rewardImageTextVerticalSeparator]}>
                    <View style={styles.trophyContainer}>
                        <Icon name="trophy" size={40} color="#f2c94c" />
                    </View>
                    <View style={styles.rewardImageTextSeparator}>
                        <Text style={[styles.titleTextSize, styles.textColorAndWeight]}>
                            Completar o cadastro
                        </Text>
                        <Text style={styles.rewardTextDescription}>
                            50 pontos
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <FixedMenuBar />
        </SafeAreaView>
    );
};

export default EndToEnd;