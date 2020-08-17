import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import HeaderLoggedIn from '../../components/HeaderLoggedIn';

import blackHoleImg from '../../assets/images/black-hole.png';

import styles from './styles';

function ChooseTheme({ navigation, ...props }) {
    return (
        <View style={styles.container}>
            <HeaderLoggedIn
                title="Escolha o tema"
            />

            <Text style={styles.themesDescription}>
                Escolha um dos temas abaixo para iniciarmos nossa aventura
            </Text>

            <View style={styles.themesContainer}>
                <RectButton style={styles.themeButton}>
                    <Image source={blackHoleImg} style={styles.imageThemeButton} />
                    <Text style={styles.textThemeButton}>Buraco Negro</Text>
                </RectButton>
            </View>
        </View>
    )
}

export default ChooseTheme;