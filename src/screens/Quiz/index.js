import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { ScrollView, RectButton } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';
import QuizQuestion from '../../components/QuizQuestion';

import sunImg from '../../assets/images/sunImg.png';
import venusImg from '../../assets/images/venusImg.png';
import jupiterImg from '../../assets/images/jupiterImg.png';
import neptuneImg from '../../assets/images/neptuneImg.png';

import styles from './styles';

function Quiz({ navigation, ...props }) {
    const modalizeRef = useRef(null);
    const [click, setClick] = useState(true)

    function onOpen() {
        setClick(false)
        modalizeRef.current?.open();
    }

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
                />
                <QuizQuestion
                    questionImg={venusImg}
                    questionNumber={2}
                    totalNumberOfQuestions={4}
                    questionOptions={["Terra", "Saturno", "Vênus"]}
                    questionTitle={"Sou o planeta mais brilhante:"}
                />
                <QuizQuestion
                    questionImg={jupiterImg}
                    questionNumber={3}
                    totalNumberOfQuestions={4}
                    questionOptions={["Júpiter", "Urano", "Saturno"]}
                    questionTitle={"Sou 120 maior do que a Terra:"}
                />
                <QuizQuestion
                    questionImg={neptuneImg}
                    questionNumber={4}
                    totalNumberOfQuestions={4}
                    questionOptions={["Marte", "Urano", "Netuno"]}
                    questionTitle={"Sou o planeta com os ventos mais fortes:"}
                />
                {click
                    ? <RectButton style={styles.buttonCheckAnswers1} onPress={onOpen}>
                        <Text style={styles.buttonText}>Respostas</Text>
                    </RectButton>
                    : <RectButton style={styles.buttonCheckAnswers2} onPress={onOpen}>
                        <Text style={styles.buttonText}>Respostas</Text>
                    </RectButton>
                }

                {click
                    ? <RectButton style={styles.buttonNext1} onPress={() => navigation.navigate('ProgressInsideClass', {
                        textParams: {
                            color: "#eee",
                            headline: "Parabéns, Lucas!",
                            subtitle: "Você completou todo o conteúdo!",
                            percentage: "100%",
                            buttonText: "É hora de embarcar em uma nova aventura",
                        },
                        navigationParams: {
                            name: 'ClassReview',
                        },
                        backgroundParams:
                            { color: '111, 207, 151, 0.7' },
                        progressBar: 2
                    })}>
                        <Text style={styles.buttonText}>Avançar</Text>
                    </RectButton>

                    : <RectButton style={styles.buttonNext2} onPress={() => navigation.navigate('ProgressInsideClass', {
                        textParams: {
                            color: "#eee",
                            headline: "Parabéns, Lucas!",
                            subtitle: "Você completou todo o conteúdo!",
                            percentage: "100%",
                            buttonText: "É hora de embarcar em uma nova aventura",
                        },
                        navigationParams: {
                            name: 'ClassReview',
                        },
                        backgroundParams:
                            { color: '111, 207, 151, 0.7' },
                        progressBar: 2
                    })}>
                        <Text style={styles.buttonText}>Avançar</Text>
                    </RectButton>}
                <RectButton style={styles.buttonNext} onPress={() => navigation.navigate('ProgressInsideClass', {
                    textParams: {
                        color: "#eee",
                        headline: "Parabéns, Lucas!",
                        subtitle: "Você completou todo o conteúdo!",
                        percentage: "100%",
                        buttonText: "É hora de embarcar em uma nova aventura",
                    },
                    navigationParams: {
                        name: 'ClassReview',
                    },
                    backgroundParams:
                        { color: '111, 207, 151, 0.7' },
                    progressBar: 2
                })}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>
            </ScrollView>

            <FixedMenuBar />

            <Modalize
                ref={modalizeRef}
                snapPoint={180}
                modalStyle={{
                    backgroundColor: '#8d50f1',
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: 15,
                }}
            >
                <Text style={styles.modalTitle}>Respostas das questões</Text>
                <Text style={styles.modalText}>1. Estrela mais conhecida: <Text style={styles.questionAnswerModal}>B) Sol</Text></Text>
                <Text style={styles.modalText}>2. Planeta mais brilhante: <Text style={styles.questionAnswerModal}>C) Vênus</Text></Text>
                <Text style={styles.modalText}>3. Planeta 120 vezes maior que a Terra: <Text style={styles.questionAnswerModal}>A) Júpiter</Text></Text>
                <Text style={styles.modalText}>4. Planeta com os ventos mais fontes: <Text style={styles.questionAnswerModal}>C) Netuno</Text></Text>
            </Modalize>

        </SafeAreaView>
    )
}

export default Quiz;
