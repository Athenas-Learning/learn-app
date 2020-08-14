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

const Skip = ({ onSkipPress, ...props }) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoImage} source={require('../assets/images/logo.png')} />
          </View>
          <View style={styles.skip}>
            <TouchableOpacity style={styles.skipButton} onPress={onSkipPress}>
              <Text style={{
                marginTop: 15,
                color: '#868686',
                fontSize: 12,
              }}>Pular</Text>
            </TouchableOpacity>
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
  skip: {},
  skipButton: {
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    padding: 15,
  },
  logoImage: {
    width: 51,
    height: 45,
  },
});

export { Skip };
