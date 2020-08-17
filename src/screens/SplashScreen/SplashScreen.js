import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Image, StyleSheet, Animated, Easing} from 'react-native';

import polygon from './polygon.png';
import logo from '../../assets/images/logo-white.png';

const SplashScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.75)).current;
  const opacity = useRef(new Animated.Value(0.75)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const scaleBigger = scale.interpolate({
    inputRange: [0, 1],
    outputRange: [0.1, 1.1],
  });

  const spinReverse = scale.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.sequence([
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(spinValue, {
            toValue: 0,
            duration: 1,
            easing: Easing.step0,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.5,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.75,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.root}>
      <Animated.Image
        style={[
          styles.polygon,
          {
            transform: [{rotate: spin}, {scale}],
            opacity,
          },
        ]}
        source={polygon}
      />
      <Animated.Image
        style={[
          styles.polygon,
          {
            marginTop: -99,
            transform: [{rotate: spinReverse}, {scale: scaleBigger}],
            opacity,
          },
        ]}
        source={polygon}
      />
      <Animated.Image source={logo} style={{marginTop: -75, transform: [{scale: scale}]}} />
      <Text style={{color: '#fff', fontSize: 24, marginTop: 60}}>Athena's Learning</Text>
      <Text style={{color: '#fff', fontSize: 16, marginTop: 10}}>Aprender nunca foi tão divertido</Text>
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
