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

const Skip = ({onSkipPress, ...props}) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoImage} source={require('./logo.png')} />
          </View>
          <View style={styles.skip}>
            <TouchableOpacity style={styles.skipButton} onPress={onSkipPress}>
              <Text>Pular</Text>
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
  },
  logo: {
    padding: 15,
  },
  logoImage: {
    width: 29,
    height: 26,
  },
});

export {Skip};
