import React, {useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {RectButton, BorderlessButton} from 'react-native-gesture-handler';

import {Header} from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';

import blackHoleImg from '../../assets/images/black-hole.png';

import {AuthContext} from '../../services/AuthService';

import styles from './styles';

function Dashboard({navigation, ...props}) {
  const user = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Header
        title={'Bem vindo, ' + user.displayName + '!'}
        navigation={navigation}
      />
      <Text>Escolha uma aventura para aprender</Text>

      <ScrollView>
        <View style={styles.themesContainer}>
          <View style={styles.themesItems}>
            <Text>Ciências</Text>
            <ScrollView horizontal={true}>
              <RectButton style={styles.themeButton}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
              <RectButton style={styles.themeButton}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
              <RectButton
                style={styles.themeButton}
                onPress={() => navigation.navigate('ChooseContentStyle')}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
            </ScrollView>
          </View>
          <View style={styles.themesItems}>
            <Text>Geografia</Text>
            <ScrollView horizontal={true}>
              <RectButton style={styles.themeButton}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
              <RectButton style={styles.themeButton}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
              <RectButton
                style={styles.themeButton}
                onPress={() => navigation.navigate('ChooseContentStyle')}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
            </ScrollView>
          </View>
          <View style={styles.themesItems}>
            <Text>História</Text>
            <ScrollView horizontal={true}>
              <RectButton style={styles.themeButton}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
              <RectButton style={styles.themeButton}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
              <RectButton
                style={styles.themeButton}
                onPress={() => navigation.navigate('ChooseContentStyle')}>
                <Image source={blackHoleImg} style={styles.imageThemeButton} />
                <Text style={styles.textThemeButton}>Buraco Negro</Text>
              </RectButton>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <FixedMenuBar />
    </View>
  );
}

export default Dashboard;
