import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';

import { Header } from '../../components/Header';
import FixedMenuBar from '../../components/FixedMenuBar';

import blackHoleImg from '../../assets/images/black-hole.png';

import { AuthContext } from '../../services/AuthService';

import styles from './styles';

function Dashboard({ navigation, ...props }) {
  const user = useContext(AuthContext);
  const [categories, setCategories] = useState([]);


  return (
    <View style={styles.container}>
      <Header
        title={'Bem vindo, ' + user.displayName.split(' ')[0] + '!'}
        navigation={navigation}
      />
      <Text style={styles.themesDescription}>
        Escolha uma aventura para aprender
      </Text>

      <ScrollView>
        <View style={styles.themesContainer}>
          <View style={styles.themesItems} key='Ciências'>
            <Text style={styles.themeItemTitle}>Ciências</Text>
            <ScrollView horizontal={true}>
              <RectButton
                style={styles.themeButton}
                onPress={() => navigation.navigate('ChooseContentStyle')}>
                <Image
                  source={blackHoleImg}
                  style={styles.imageThemeButton}
                />
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
