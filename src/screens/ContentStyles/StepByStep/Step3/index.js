import React, { useState } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Image,
} from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import endToEndModeExample from '../../../../assets/images/endToEnd.png';
import stepByStepModeFirstExample from '../../../../assets/images/unselectedContentVisualizationModeExample.png';
import stepByStepModeSecondExample from '../../../../assets/images/stepByStepModeSecondExample.png';
import arrowNext from '../../../../assets/images/arrow.png';

// import styles from './styles';

function Step3({ navigation, ...props }) {
    const [sound, setSound] = useState(true);
    const [contentVisualizationMode, setContentVisualizationMode] = useState('endToEnd');

    function handleSoundState() {
        if (sound) {
            return setSound(false);
        } else {
            return setSound(true);
        }
    }

    function handleContentVisualizationMode() {
        if (contentVisualizationMode == 'endToEnd') {
            return setContentVisualizationMode('stepByStep');
        } else if (contentVisualizationMode == 'stepByStep') {
            return setContentVisualizationMode('endToEnd');
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Configurações" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.soundConfigContainer}>
                    <Text style={[styles.textTitleSize, styles.textColor]}>Som das animações</Text>
                    <BorderlessButton style={styles.soundConfigIcon} onPress={handleSoundState}>
                        {sound ?
                            <Icon name="sound" size={30} color="#414141" /> :
                            <Icon name="sound-mute" size={30} color="#aaa" />
                        }
                    </BorderlessButton>
                </View>

                {contentVisualizationMode == ''}

                <Text style={[styles.textTitleSize, styles.textColor]}>Visualização do conteúdo</Text>
                <View style={styles.contentStyleConfigContainer}>
                    <BorderlessButton style={styles.endToEndButtonSelection} onPress={handleContentVisualizationMode}>
                        {contentVisualizationMode == 'endToEnd' ?
                            <Text style={styles.contentVisualizationModeTextSelectedColor}>Ponta a Ponta</Text> :
                            <Text style={styles.contentVisualizationModeTextUnselectedColor}>Ponta a Ponta</Text>}
                        {contentVisualizationMode == 'endToEnd' ?
                            <Text style={[styles.buttonDescription, styles.contentVisualizationModeTextSelectedColor]}>Você navega pelos textos, imagens e vídeos em uma só tela.</Text> :
                            <Text style={[styles.buttonDescription, styles.contentVisualizationModeTextUnselectedColor]}>Você navega pelos textos, imagens e vídeos em uma só tela.</Text>}
                        {contentVisualizationMode == 'endToEnd' ?
                            <Image source={endToEndModeExample} style={styles.contentVisualizationModeSelectedExample} /> :
                            <Image source={endToEndModeExample} style={styles.contentVisualizationModeUnselectedExample} />
                        }


                    </BorderlessButton>
                </View>
                <View style={styles.contentStyleConfigContainer}>
                    <BorderlessButton style={styles.endToEndButtonSelection} onPress={handleContentVisualizationMode}>
                        {contentVisualizationMode == 'stepByStep' ?
                            <Text style={styles.contentVisualizationModeTextSelectedColor}>Passo a Passo</Text> :
                            <Text style={styles.contentVisualizationModeTextUnselectedColor}>Passo a Passo</Text>}
                        {contentVisualizationMode == 'stepByStep' ?
                            <Text style={[styles.buttonDescription, styles.contentVisualizationModeTextSelectedColor]}>Você navega por telas diferentes entre textos e vídeos.</Text> :

                            <Text style={[styles.buttonDescription, styles.contentVisualizationModeTextUnselectedColor]}>Você navega por telas diferentes entre textos e vídeos.</Text>}
                        {contentVisualizationMode == 'stepByStep' ?
                            <View style={styles.stepByStepContainer}>
                                <Image source={stepByStepModeFirstExample} style={[styles.contentVisualizationModeSelectedExample, styles.stepByStepExampleImageSeparator]} />
                                <Image source={arrowNext} style={[styles.contentVisualizationModeSelectedExample, styles.stepByStepExampleImageSeparator]} />
                                <Image source={stepByStepModeSecondExample} style={styles.contentVisualizationModeSelectedExample} />
                            </View> :
                            <View style={styles.stepByStepContainer}>
                                <Image source={stepByStepModeFirstExample} style={[styles.contentVisualizationModeUnselectedExample, styles.stepByStepExampleImageSeparator]} />
                                <Image source={arrowNext} style={[styles.contentVisualizationModeUnselectedExample, styles.stepByStepExampleImageSeparator]} />
                                <Image source={stepByStepModeSecondExample} style={styles.contentVisualizationModeUnselectedExample} />
                            </View>
                        }
                    </BorderlessButton>
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
    soundConfigContainer: {
        flexDirection: 'row',
    },
    textTitleSize: {
        fontSize: 16,
    },
    textColor: {
        color: '#414141',
    },
    soundConfigIcon: {
        marginLeft: '49%'
    },
    endToEndButtonSelection: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDescription: {
        maxWidth: '80%',
        marginBottom: 15,
        marginTop: 10,
    },
    stepByStepContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    stepByStepExampleImageSeparator: {
        marginRight: 12,
    },
    contentVisualizationModeTextSelectedColor: {
        color: '#414141'
    },
    contentVisualizationModeTextUnselectedColor: {
        color: '#aaa',
    },
    contentVisualizationModeSelectedExample: {
        tintColor: '#414141'
    },
    contentVisualizationModeUnselectedExample: {
        tintColor: '#aaa'
    }
})