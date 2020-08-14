import React, {Component} from 'react';

import {styles} from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {PublicHeader} from '../../components/PublicHeader';

import Icon from 'react-native-vector-icons/FontAwesome';

const ValidationCodeScreen = ({navigation, ...props}) => {

  return (
    <KeyboardAvoidingView style={styles.rootBlue} behavior="padding">
      <View style={styles.containerView}>
        <View style={styles.loginFormPadding}>
          <PublicHeader title="Recuperar senha" blue />
        </View>
        <View style={styles.loginScreenContainer}>
          <Text style={[styles.loginFormLabel, styles.whiteLoginFormLabel]}>Informe o código</Text>
          <TextInput style={[styles.loginFormTextInput, styles.whiteLoginFormTextInput]} />
          <View style={styles.loginButton}>
            <Icon.Button
              name="lock"
              backgroundColor="#3b5998"
              onPress={() => navigation.navigate('NewPassword')}>
              <Text style={styles.loginLabel}>Continuar</Text>
            </Icon.Button>
          </View>
        </View>
        <View style={styles.loginFormSignup}>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export {ValidationCodeScreen};
