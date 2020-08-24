import React, { useRef } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import Icon from 'react-native-vector-icons/Feather';

import smallTeacherImg from '../../../../assets/images/smallArcheologyst.png';
import bigTeacherImg from '../../../../assets/images/bigArcheologyst.png';
import firstVolcanoImg from '../../../../assets/images/volcanoImg.png';
import secondVolcanoImg from '../../../../assets/images/volcano2.png';
import thirdVolcanoImg from '../../../../assets/images/thirdVolcano.png';
import eruptingVolcanoImg from '../../../../assets/images/eruptingVolcano.png';

import styles from './styles';

function EndToEndVolcanism({ navigation, ...props }) {
    const modalizeRef = useRef(null);

    function onOpen() {
        return modalizeRef.current?.open()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Vulcanismo" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={[styles.contentInRow, styles.contentSeparator]}>
                    <Image source={smallTeacherImg} style={styles.teacherAtTheLeftSideOfTheScreen} />
                    <View style={styles.adjustingContentToColumn}>
                        <Text style={[styles.welcomeContentText, styles.textColor]}>
                            Seja bem vindo a nossa aula sobre vulcanismo!
                        </Text>
                        <Text style={styles.textColor}>Mas primeiro, você sabe o que é vulcanismo?</Text>
                    </View>
                </View>
                <Image source={firstVolcanoImg} style={[styles.imageAtTheCenterOfTheScreen, styles.contentSeparator]} />
                <Text style={[styles.textColor, styles.textTitleSize]}>O que é vulcanismo?</Text>
                <Text style={[styles.textColor, styles.contentSeparator]}>É um fenômeno que ocorre de dentro para fora da terra, quando existe muita pressão e altas temperaturas</Text>
                <View style={[styles.contentInRow, styles.contentSeparatorWithLessMargin]}>
                    <Image source={smallTeacherImg} style={styles.teacherAtTheLeftSideOfTheScreen} />
                    <View style={styles.adjustingContentToTheCenter}><Text style={styles.textColor}>Agora, podemos aprender o que são os vulcões e suas partes!</Text></View>
                </View>
                <Image source={secondVolcanoImg} style={styles.imageAtTheCenterOfTheScreen} />
                <View style={[styles.contentInRow, styles.checkedItemsSeparator]}>
                    <View style={[styles.adjustingContentToTheCenter, styles.checkAndTextMargin]}>
                        <Icon name="check" size={30} color="#04d361" />
                    </View>
                    <Text style={styles.textColor}>São criados quando a pressão e a temperatura dentro da Terra são grandes e saem para a superfície;</Text>
                </View>
                <View style={[styles.contentInRow, styles.checkedItemsSeparator]}>
                    <View style={[styles.adjustingContentToTheCenter, styles.checkAndTextMargin]}>
                        <Icon name="check" size={30} color="#04d361" />
                    </View>
                    <Text style={styles.textColor}>O vulcão é o maior poluidor natural do meio ambiente, pois solta diversos tipos de gases no ar;</Text>
                </View>
                <View style={[styles.contentInRow, styles.checkedItemsSeparator]}>
                    <View style={[styles.adjustingContentToTheCenter, styles.checkAndTextMargin]}>
                        <Icon name="check" size={30} color="#04d361" />
                    </View>
                    <Text style={styles.textColor}>Eles podem existir até mesmo em oceanos, e algumas “ilhas” são criadas por causa deles;</Text>
                </View>
                <View style={[styles.contentInRow, styles.checkedItemsSeparator]}>
                    <View style={[styles.adjustingContentToTheCenter, styles.checkAndTextMargin]}>
                        <Icon name="check" size={30} color="#04d361" />
                    </View>
                    <Text style={styles.textColor}>Existem algumas classificações para vulcões, e duas delas são:</Text>
                </View>
                <Text style={[styles.textColor, styles.volcanoClassItem, styles.volcanoClassSeparator]}>Ativo: é como se o vulcão estivesse “acordado”, e a qualquer momento pudesse entrar em erupção;</Text>
                <Text style={[styles.textColor, styles.volcanoClassItem, styles.checkedItemsSeparator]}>Extinto: nesse estado o vulcão está “dormindo”, e não voltará a entrar em erupção.</Text>
                <View style={[styles.contentInRow, styles.checkedItemsSeparator, styles.contentSeparator]}>
                    <View style={[styles.adjustingContentToTheCenter, styles.checkAndTextMargin]}>
                        <Icon name="check" size={30} color="#04d361" />
                    </View>
                    <Text style={styles.textColor}>A maioria dos vulcões se parecem com montanhas, e podemos até visitar alguns caso eles estejam “dormindo”.</Text>
                </View>
                <View style={[styles.contentInRow, styles.contentSeparator]}>
                    <Image source={smallTeacherImg} style={styles.teacherAtTheLeftSideOfTheScreen} />
                    <View style={[styles.adjustingContentToColumn, styles.adjustingContentToTheCenter]}>
                        <Text style={[styles.contentSeparatorWithLessMargin, styles.textColor]}>
                            Vulcões são muito legais, não acha?
                        </Text>
                        <Text style={styles.textColor}>Agora vamos conhecer um pouco mais sobre suas partes!</Text>
                    </View>
                </View>
                <Text style={[styles.textColor, styles.alignTextToTheCenterOfTheScreen]}>Para saber mais, clique na imagem</Text>
                <BorderlessButton onPress={onOpen}>
                    <Image source={thirdVolcanoImg} style={[styles.imageAtTheCenterOfTheScreen, styles.contentSeparator]} />
                </BorderlessButton>
                <View style={[styles.contentInRow, styles.contentSeparator]}>
                    <Image source={smallTeacherImg} style={styles.teacherAtTheLeftSideOfTheScreen} />
                    <View style={[styles.adjustingContentToColumn, styles.adjustingContentToTheCenter]}>
                        <Text style={[styles.contentSeparatorWithLessMargin, styles.textColor]}>
                            Vulcões que estão "dormentes" podem ser muito interessantes.
                        </Text>
                        <Text style={styles.textColor}>Mas quando estão ativos podem também ser perigosos, pois podem entrar em erupção a qualquer momento.</Text>
                    </View>
                </View>
                <Text style={[styles.textColor, styles.textTitleSize, styles.alignTextToTheCenterOfTheScreen]}>O que é uma erupção vulcânica?</Text>
                <Image source={eruptingVolcanoImg} style={[styles.imageAtTheCenterOfTheScreen, styles.contentSeparatorWithLessMargin]} />
                <Text style={[styles.textColor, styles.contentSeparator]}>
                    Quando ocorre muita pressão na câmara magmática, a lava é jogada para fora do vulcão, junto com rochas e as vezes muita fumaça, sendo esse o resultado de uma erupção vulcânica.
                </Text>
                <Image source={bigTeacherImg} style={[styles.imageAtTheCenterOfTheScreen, styles.contentSeparatorWithLessMargin]} />
                <Text style={[styles.textColor, styles.contentSeparatorWithLessMargin, styles.alignTextToTheCenterOfTheScreen]}>Você aprendeu bastante coisa, não é?!</Text>
                <Text style={[styles.textColor, styles.contentSeparatorWithLessMargin, styles.alignTextToTheCenterOfTheScreen]}>Mas eu tenho alguns vídeos bem legais que vão te ajudar a ir muito bem em nossas brincadeiras.</Text>
                <Text style={[styles.textColor, styles.contentSeparatorWithLessMargin, styles.alignTextToTheCenterOfTheScreen]}>Vamos lá dar uma olhada?</Text>
                <RectButton style={[styles.buttonContainer, styles.contentSeparatorWithLessMargin]}>
                    <Text style={styles.buttonText}>Ir para os vídeos</Text>
                </RectButton>
                <Text style={[styles.textColor, styles.contentSeparatorWithLessMargin, styles.alignTextToTheCenterOfTheScreen]}>Mas se você acha que já está muito bom no nosso conteúdo, pode ir direto para as nossas brincadeiras.</Text>
                <RectButton style={[styles.buttonContainer, styles.lastButtonSeparatorFromFixedMenu]}>
                    <Text style={styles.buttonText}>Ir para as brincadeiras</Text>
                </RectButton>
            </ScrollView>
            <FixedMenuBar />

            {/* Modal */}
            <Modalize ref={modalizeRef} modalStyle={{ flex: 1, backgroundColor: '#9871f5' }}>
                <View>
                    <Text style={{
                        color: '#eee',
                        fontWeight: 'bold',
                        fontSize: 22,
                        textAlign: 'center',
                        marginTop: 15
                    }}>Cratera</Text>
                    <Text style={{
                        color: '#eee',
                        fontWeight: '500',
                        marginVertical: 15,
                        marginHorizontal: 30,
                    }}>
                        A cratera é a principal saída de um vulcão. Podemos chamá-la de “boca do vulcão”
                        {'\n'}{'\n'}
                        É por lá que saem os gases, as rochas e principalmente a lava.
                        {'\n'}{'\n'}
                        Se o vulcão for grande demais, ele pode ter mais de uma saída.
                    </Text>
                    <Text style={{
                        color: '#eee',
                        fontWeight: 'bold',
                        fontSize: 22,
                        textAlign: 'center',
                        marginTop: 15
                    }}>Lava e Magma</Text>
                    <Text style={{
                        color: '#eee',
                        fontWeight: '500',
                        marginVertical: 15,
                        marginHorizontal: 30,
                    }}>
                        O magma é um elemento que encontramos lá núcleo do planeta. Sua cor predominante é a vermelha.
                        {'\n'}{'\n'}
                        O magma é também muito quente, e tudo o que ele toca se derrete.
                        {'\n'}{'\n'}
                        Quando o vulcão entra em erupção, e o magma escorre para fora, chamamos de lava. E quando esfria se transforma em rocha ígnea ou magmática.
                    </Text>
                    <Text style={{
                        color: '#eee',
                        fontWeight: 'bold',
                        fontSize: 22,
                        textAlign: 'center',
                        marginTop: 15
                    }}>Nuvem de cinzas</Text>
                    <Text style={{
                        color: '#eee',
                        fontWeight: '500',
                        marginVertical: 15,
                        marginHorizontal: 30,
                    }}>
                        São gases que saem do vulcão quando ele entra em erupção.
                        {'\n'}{'\n'}
                        Esses gases são formados principalmente por pó das rochas queimadas e areia.
                        {'\n'}{'\n'}
                        Com os ventos, os gases podem ser levados para lugares bem longe de onde está o vulcão. E com isso, o céu fica cheio de fumaça. Muitas vezes nem aviões podem voar por ali.
                    </Text>
                    <Text style={{
                        color: '#eee',
                        fontWeight: 'bold',
                        fontSize: 22,
                        textAlign: 'center',
                        marginTop: 15
                    }}>Chaminé</Text>
                    <Text style={{
                        color: '#eee',
                        fontWeight: '500',
                        marginTop: 15,
                        marginHorizontal: 30,
                        marginBottom: 30,
                    }}>
                        A chaminé é o caminho que a lava percorre dentro do vulcão até chegar à “boca”.
                        {'\n'}{'\n'}
                        A chaminé é tão longa que ela inicia na câmara magmática e termina na cratera.
                        {'\n'}{'\n'}
                        Um vulcão pode ter “chaminés secundárias”, onde a lava também poderá encontrar uma forma de sair do vulcão.
                    </Text>
                </View>
            </Modalize>
        </SafeAreaView>

    );
};

export default EndToEndVolcanism;