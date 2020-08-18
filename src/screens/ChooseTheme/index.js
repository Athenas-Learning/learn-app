import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';

import blackHoleImg from '../../assets/images/black-hole.png';

import styles from './styles';

function ChooseTheme({ navigation, ...props }) {
  return (
    <>
      <Header title="Escolha o tema" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.themesDescription}>
          Escolha um dos temas abaixo para iniciarmos nossa aventura
        </Text>
        <View style={styles.themesContainer}>
          <RectButton style={styles.themeButton}>
            <Image source={blackHoleImg} style={styles.imageThemeButton} />
            <Text style={styles.textThemeButton}>Buraco Negro</Text>
          </RectButton>
          <RectButton style={styles.themeButton}>
            <Image source={blackHoleImg} style={styles.imageThemeButton} />
            <Text style={styles.textThemeButton}>Buraco Negro</Text>
          </RectButton>
          <RectButton style={styles.themeButton} onPress={() => navigation.navigate('ChooseContentStyle')}>
            <Image source={blackHoleImg} style={styles.imageThemeButton} />
            <Text style={styles.textThemeButton}>Buraco Negro</Text>
          </RectButton>
        </View>
        <FixedMenuBar />
      </View>
    </>
  );
}

export default ChooseTheme;
