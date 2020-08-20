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

const SignupScreen = ({navigation, ...props}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterPressAsync = async () => {
    try {
      const data = await auth().createUserWithEmailAndPassword(email, password);
      await data.user.updateProfile({displayName: firstName + ' ' + lastName});
      await auth().currentUser.reload();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }

      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.root} behavior="padding">
      <View style={styles.containerView}>
        <View style={styles.loginFormPadding}>
          <PublicHeader title="Seus dados" />
        </View>
        <View style={styles.loginScreenContainer}>
          <Text style={styles.loginFormLabel}>Nome</Text>
          <TextInput
            style={styles.loginFormTextInput}
            value={firstName}
            onChangeText={setFirstName}
          />
          <Text style={styles.loginFormLabel}>Sobrenome</Text>
          <TextInput
            style={styles.loginFormTextInput}
            value={lastName}
            onChangeText={setLastName}
          />
          <Text style={styles.loginFormLabel}>E-mail</Text>
          <TextInput
            style={styles.loginFormTextInput}
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.loginFormLabel}>Senha</Text>
          <TextInput
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.loginButton}>
            <Icon.Button
              name="lock"
              backgroundColor="#3b5998"
              onPress={onRegisterPressAsync}>
              <Text style={styles.loginLabel}>Acessar</Text>
            </Icon.Button>
          </View>
        </View>
        <View style={styles.loginFormSignup}></View>
      </View>
    </KeyboardAvoidingView>
  );
};

export {SignupScreen};
