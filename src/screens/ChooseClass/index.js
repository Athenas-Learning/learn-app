import React from 'react';
import { Text, Image, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import menuImg from '../../assets/images/menu-icon.png';

import physicsIcon from '../../assets/images/physics_blue.png';
import mathIcon from '../../assets/images/math_blue.png';

import styles from './styles';
import { Header } from '../../components/Header';

function ChooseClass({ navigation, ...props }) {
    return (
        <>
            <Header navigation={navigation} title={"Bem vindo, Lucas!"}/>
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>
                    Conteúdos disponíveis para seus estudos
                </Text>
                <View style={styles.contentIconsWrapper}>
                    <BorderlessButton style={styles.contentButton} onPress={() => navigation.navigate('ChooseTheme')}>
                        <Image source={physicsIcon} style={styles.imageContentButton} />
                        <Text style={styles.textContentButton}>Ciências</Text>
                    </BorderlessButton>
                    <View style={styles.contentButton}>
                        <Image source={physicsIcon} style={styles.imageContentButton} />
                        <Text style={styles.textContentButton}>Matemática</Text>
                    </View>
                    <View style={styles.contentButton}>
                        <Image source={physicsIcon} style={styles.imageContentButton} />
                        <Text style={styles.textContentButton}>Ciências</Text>
                    </View>
                    <View style={styles.contentButton}>
                        <Image source={physicsIcon} style={styles.imageContentButton} />
                        <Text style={styles.textContentButton}>Matemática</Text>
                    </View>
                    <View style={styles.contentButton}>
                        <Image source={physicsIcon} style={styles.imageContentButton} />
                        <Text style={styles.textContentButton}>Ciências</Text>
                    </View>
                    <View style={styles.contentButton}>
                        <Image source={physicsIcon} style={styles.imageContentButton} />
                        <Text style={styles.textContentButton}>Matemática</Text>
                    </View>
                </View>
                <View style={styles.footerContainer}>

                </View>
            </View>
        </>
    )
}

export default ChooseClass;