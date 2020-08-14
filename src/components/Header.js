import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({navigation, ...props}) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.openDrawer()}>
              <Icon name="bars" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.logo}>
            <Image style={styles.logoImage} source={require('./logo.png')} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  menu: {},
  menuButton: {
    padding: 15,
  },
  logo: {
    padding: 15,
  },
  logoImage: {
    width: 51,
    height: 45,
  },
});

export {Header};
