import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

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

const PasswordResetScreen = ({navigation, ...props}) => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onPasswordResetPressAsync = async () => {
    try {
      if (password.length < 0) alert('You need to inform a password');
      if (password !== passwordConfirmation)
        alert('Password confirmation does not match');
      await auth().confirmPasswordReset(code, password);
      navigation.navigate("Login");
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found');
      } else if (error.code === 'auth/expired-action-code') {
        alert('Expired code');
      } else if (error.code === 'auth/invalid-action-code') {
        alert('Invalid code');
      } else if (error.code === 'auth/user-disabled') {
        alert('User disabled');
      } else if (error.code === 'auth/weak-password') {
        alert('Weak password');
      } else console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.rootBlue} behavior="padding">
      <View style={styles.containerView}>
        <View style={styles.loginFormPadding}>
          <PublicHeader title="Redefinição de senha" blue />
        </View>
        <View style={styles.loginScreenContainer}>
          <Text>
            Você recebeu um email com o código de validação para redefinir sua
            senha
          </Text>
          <Text style={[styles.loginFormLabel, styles.whiteLoginFormLabel]}>
            Informe o código
          </Text>
          <TextInput
            style={[styles.loginFormTextInput, styles.whiteLoginFormTextInput]}
          />
          <Text style={[styles.loginFormLabel, styles.whiteLoginFormLabel]}>
            Nova senha
          </Text>
          <TextInput
            style={[styles.loginFormTextInput, styles.whiteLoginFormTextInput]}
          />
          <Text style={[styles.loginFormLabel, styles.whiteLoginFormLabel]}>
            Repita a senha
          </Text>
          <TextInput
            style={[styles.loginFormTextInput, styles.whiteLoginFormTextInput]}
          />
          <View style={styles.loginButton}>
            <Icon.Button
              name="lock"
              backgroundColor="#3b5998"
              onPress={onPasswordResetPressAsync}>
              <Text style={styles.loginLabel}>Continuar</Text>
            </Icon.Button>
          </View>
        </View>
        <View style={styles.loginFormSignup}></View>
      </View>
    </KeyboardAvoidingView>
  );
};

export {PasswordResetScreen};
