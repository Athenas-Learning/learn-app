import React from 'react';
import { Text, Image, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import menuImg from '../../assets/images/menu-icon.png';

import physicsIcon from '../../assets/images/physics_blue.png';
import mathIcon from '../../assets/images/math_blue.png';

import styles from './styles';

function ChooseClass({ navigation, ...props }) {
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    Bem vindo, Lucas!
                </Text>
                <BorderlessButton>
                    <Image source={menuImg} style={styles.menuHeader} />
                </BorderlessButton>
            </View>

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