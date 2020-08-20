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

const Separator = () => <View style={styles.separator} />;

const PasswordRecoveryScreen = ({navigation, ...props}) => {
  const [email, setEmail] = useState('');

  const onResetPasswordPressAsync = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      alert("Você irá receber um email com as instruções para redefinir sua senha.");
      navigation.navigate("Login");
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found');
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email');
      } else console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.root} behavior="padding">
      <View style={styles.containerView}>
        <View style={styles.loginFormPadding}>
          <PublicHeader title="Esqueci minha senha" />
        </View>
        <View style={styles.loginScreenContainer}>
          <Text style={styles.loginFormLabel}>E-mail cadastrado</Text>
          <TextInput style={styles.loginFormTextInput} value={email} onChangeText={setEmail} />
          <View style={styles.loginButton}>
            <Icon.Button
              name="lock"
              backgroundColor="#3b5998"
              onPress={onResetPasswordPressAsync}>
              <Text style={styles.loginLabel}>Solicitar</Text>
            </Icon.Button>
          </View>
          <Separator />
          <Text>
            Enviaremos a você um e-mail com um código para redefinir a sua senha
          </Text>
        </View>
        <View style={styles.loginFormSignup}></View>
      </View>
    </KeyboardAvoidingView>
  );
};

export {PasswordRecoveryScreen};
