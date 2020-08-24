import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

import menuImg from '../assets/images/menu-icon.png';

const Header = ({ navigation, title, blue, ...props }) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => navigation.openDrawer()}>
              <Image source={menuImg} style={styles.menuHeader} />
            </TouchableOpacity>
          </View>
          {title && title.trim && title.trim() !== '' && (
            <View style={styles.title}>
              <Text
                style={[styles.titleLabel, blue ? styles.titleLabelBlue : {}]}>
                {title}
              </Text>
            </View>
          )}
          <View style={styles.logo}>
            <Image
              style={styles.logoImage}
              source={require('../assets/images/logo.png')}
            />
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
    alignSelf: 'stretch',
  },
  menu: {
  },
  menuButton: {
    padding: 15,
  },
  title: {},
  titleLabel: {
    margin: 15,
    marginBottom: 12,
    paddingHorizontal: 3,
    paddingBottom: 3,
    color: '#525252',
    borderBottomColor: '#F2C94C',
    borderBottomWidth: 3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleLabelBlue: {
    color: '#fff',
  },
  logo: {
    padding: 15,
  },
  logoImage: {
    width: 51,
    height: 45,
  },
});

export { Header };
