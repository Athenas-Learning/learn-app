
import React from 'react';
import { View, Image, Text } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

function QuizQuestion({ questionTitle, questionNumber, questionImg, questionOptions, correctAnswer, totalNumberOfQuestions, ...props }) {
    return (
        <View style={styles.quizQuestionContainer}>
            <View style={styles.setFlexDirectionRow}>
                <Text style={styles.questionText}>Quem sou eu?</Text>
                <Text style={styles.questionText}>{questionNumber}/{totalNumberOfQuestions}</Text>
            </View>
            <Text style={styles.questionText}>{questionTitle}</Text>

            <Image source={questionImg} style={styles.questionImg} />

            <RectButton style={styles.answerContainer}>
                <View style={styles.optionLetterContainer}>
                    <Text style={styles.optionLetterText}>A</Text>
                </View>
                <Text style={styles.optionAnswer}>{questionOptions[0]}</Text>
            </RectButton>
            <RectButton style={styles.answerContainer}>
                <View style={styles.optionLetterContainer}>
                    <Text style={styles.optionLetterText}>B</Text>
                </View>
                <Text style={styles.optionAnswer}>{questionOptions[1]}</Text>
            </RectButton>
            <RectButton style={[styles.answerContainer, styles.lastOption]}>
                <View style={styles.optionLetterContainer}>
                    <Text style={styles.optionLetterText}>C</Text>
                </View>
                <Text style={styles.optionAnswer}>{questionOptions[2]}</Text>
            </RectButton>

        </View>
    )
}

export default QuizQuestion;