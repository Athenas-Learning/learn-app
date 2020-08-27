import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { ScrollView, RectButton } from 'react-native-gesture-handler';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';
import QuizQuestion from '../../components/QuizQuestion';

import sunImg from '../../assets/images/sunImg.png';
import venusImg from '../../assets/images/venusImg.png';
import jupiterImg from '../../assets/images/jupiterImg.png';
import neptuneImg from '../../assets/images/neptuneImg.png';

import styles from './styles';

function Quiz({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Sistema Solar" navigation={navigation} />

            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <QuizQuestion
                    questionImg={sunImg}
                    questionNumber={1}
                    totalNumberOfQuestions={4}
                    questionOptions={["Netuno", "Sol", "Urano"]}
                    questionTitle={"Sou a estrela mais conhecida:"}
                    correctAnswer={[0, 1, 0]}
                />
                <QuizQuestion
                    questionImg={venusImg}
                    questionNumber={2}
                    totalNumberOfQuestions={4}
                    questionOptions={["Terra", "Saturno", "Vênus"]}
                    questionTitle={"Sou o planeta mais brilhante:"}
                    correctAnswer={[0, 0, 1]}
                />
                <QuizQuestion
                    questionImg={jupiterImg}
                    questionNumber={3}
                    totalNumberOfQuestions={4}
                    questionOptions={["Júpiter", "Urano", "Saturno"]}
                    questionTitle={"Sou 120 maior do que a Terra:"}
                    correctAnswer={[1, 0, 0]}
                />
                <QuizQuestion
                    questionImg={neptuneImg}
                    questionNumber={4}
                    totalNumberOfQuestions={4}
                    questionOptions={["Marte", "Urano", "Netuno"]}
                    questionTitle={"Sou o planeta com os ventos mais fortes:"}
                    correctAnswer={[0, 0, 1]}
                />

                <RectButton style={styles.buttonNext}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>
            </ScrollView>

            <FixedMenuBar />
        </SafeAreaView>
    )
}

export default Quiz;
