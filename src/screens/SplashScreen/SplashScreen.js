import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Athenas Learning</Text>
      <Image style={styles.polygon} source={require('./polygon.png')} />
      <Text>Education</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5577B6',
    color: '#ffffff',
  },
  polygon: {width: 88, height: 98},
});

export {SplashScreen};
