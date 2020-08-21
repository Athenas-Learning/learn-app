import React from 'react';
import { Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '../../../../components/Header';
import { ScrollView, RectButton } from 'react-native-gesture-handler';

import solarSystemImg from '../../../../assets/images/solarSystem.png';
import solarSystemFormationImg from '../../../../assets/images/solarSystemFormation.png';

import styles from './styles';
import FixedMenuBar from '../../../../components/FixedMenuBar';

function Step1({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Sistema Solar" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.endToEndContainer}>
                <Text style={[styles.contentText]}>
                    O <Text style={styles.textBold}>Sistema Solar</Text>, localizado na galáxia <Text style={styles.textBold}>Via Láctea</Text>, consiste no conjunto de planetas, planetas anões e diversos outros astros do Universo, como asteroides, meteoros, cometas, satélites, entre outros. O <Text style={styles.textBold}>Sol</Text> é a estrela central desse sistema, exercendo intenso domínio gravitacional sobre os demais corpos celestes.
                </Text>
                <Image source={solarSystemImg} style={[styles.contentSeparator]} />
                {/* Aqui começa a parte da Origem do Sistema solar */}
                <Text style={[styles.contentText, styles.contentSeparator]}>
                    <Text style={styles.textBold}>Origem</Text>
                    {'\n'}{'\n'}
                    O <Text style={styles.textBold}>Sistema Solar</Text> formou-se há cerca de <Text style={styles.textBold}>4,7 bilhões</Text> de anos. Contudo, sua origem ainda é questionada, visto que não há uma teoria que satisfaça inteiramente todas as questões que perpassam a formação do Sol e dos planetas. Entretanto, atualmente, há uma teoria mais aceita entre a comunidade científica e astronômica: a teoria da <Text style={styles.textBold}>nebulosa solar</Text>.
                </Text>
                <Text style={[styles.contentText, styles.textTextSeparator]}>
                    Essa teoria foi formulada inicialmente por <Text style={styles.textBold}>René Descartes</Text> no ano de <Text style={styles.textBold}>1644</Text>, sendo reformulada por <Text style={styles.textBold}>Immanuel Kant</Text> em <Text style={styles.textBold}>1775</Text> e, depois, por <Text style={styles.textBold}>Pierre-Simon de Laplace</Text> em <Text style={styles.textBold}>1796</Text>. A teoria formulada por Laplace supunha hipoteticamente que o <Text style={styles.textBold}>Sol</Text> formou-se a partir da rotação de uma nuvem que ao se contrair com influência da gravidade, aumentou sua velocidade entrando, então, em colapso. Assim, o Sol formou-se devido à concentração central da <Text style={styles.textBold}>nebulosa</Text> e os planetas formaram-se a partir dos remanescentes da nuvem molecular em colapso.
                </Text>
                {/* E aqui termina o texto sobre a Origem do Sitema solar */}
                <Image source={solarSystemFormationImg} style={[styles.contentSeparator, styles.lastImageSeparator]} />
                <RectButton style={styles.nextStepButton} onPress={() => navigation.navigate('Step2')}>
                    <Text style={styles.nextStepButtonText}>Próximo</Text>
                </RectButton>
            </ScrollView>
            <FixedMenuBar />
        </SafeAreaView>
    );
};

export default Step1;