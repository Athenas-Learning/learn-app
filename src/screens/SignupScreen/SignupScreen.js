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

const SignupScreen = ({navigation, ...props}) => {
  const onLoginPress = () => {};

  return (
    <KeyboardAvoidingView style={styles.root} behavior="padding">
      <View style={styles.containerView}>
        <View style={styles.loginFormPadding}>
          <PublicHeader title="Seus dados" />
        </View>
        <View style={styles.loginScreenContainer}>
          <Text style={styles.loginFormLabel}>Nome</Text>
          <TextInput style={styles.loginFormTextInput} />
          <Text style={styles.loginFormLabel}>Sobrenome</Text>
          <TextInput style={styles.loginFormTextInput} />
          <Text style={styles.loginFormLabel}>E-mail</Text>
          <TextInput style={styles.loginFormTextInput} />
          <Text style={styles.loginFormLabel}>Ano escolar</Text>
          <TextInput style={styles.loginFormTextInput} />
          <Text style={styles.loginFormLabel}>Usuário</Text>
          <TextInput style={styles.loginFormTextInput} />
          <Text style={styles.loginFormLabel}>Senha</Text>
          <TextInput style={styles.loginFormTextInput} secureTextEntry={true} />
          <View style={styles.loginButton}>
            <Icon.Button
              name="lock"
              backgroundColor="#3b5998"
              onPress={() => navigation.navigate('Learn')}>
              <Text style={styles.loginLabel}>Acessar</Text>
            </Icon.Button>
          </View>
        </View>
        <View style={styles.loginFormSignup}>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export {SignupScreen};
