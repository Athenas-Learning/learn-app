import React, {useRef} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import Swiper from 'react-native-swiper';

import {Skip} from '../../components/Skip';

import {Step01Screen} from './Step01Screen';
import {Step02Screen} from './Step02Screen';
import {Step03Screen} from './Step03Screen';

const IntroScreen = ({navigation, ...props}) => {
  const swiperRef = useRef(null);
  const handlePreviousStep = () => {
    swiperRef.current.scrollBy(-1);
  };
  const handleNextStep = () => {
    swiperRef.current.scrollBy(1);
  };
  return (
    <View style={styles.root}>
      <Skip onSkipPress={() => navigation.navigate('Login')} />
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={true}
        //index={step}
        loop={false}>
        <View style={styles.slide}>
          <Step01Screen onNextStepPress={handleNextStep} />
        </View>
        <View style={styles.slide}>
          <Step02Screen
            onPreviousStepPress={handlePreviousStep}
            onNextStepPress={handleNextStep}
          />
        </View>
        <View style={styles.slide}>
          <Step03Screen
            onPreviousStepPress={handlePreviousStep}
            onNextStepPress={() => navigation.navigate('Login')}
          />
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  wrapper: {},
  slide: {
    flex: 1,
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {IntroScreen};
