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

const Separator = () => <View style={styles.separator} />;

const PasswordRecoveryScreen = ({navigation, ...props}) => {

  return (
    <KeyboardAvoidingView style={styles.root} behavior="padding">
      <View style={styles.containerView}>
        <View style={styles.loginFormPadding}>
          <PublicHeader title="Recuperar senha" />
        </View>
        <View style={styles.loginScreenContainer}>
          <Text style={styles.loginFormLabel}>E-mail cadastrado</Text>
          <TextInput style={styles.loginFormTextInput} />
          <View style={styles.loginButton}>
            <Icon.Button
              name="lock"
              backgroundColor="#3b5998"
              onPress={() => navigation.navigate('ValidationCode')}>
              <Text style={styles.loginLabel}>Solicitar</Text>
            </Icon.Button>
          </View>
          <Separator />
          <Text>Enviaremos a você um e-mail com um código para recuperar a sua senha</Text>
        </View>
        <View style={styles.loginFormSignup}>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export {PasswordRecoveryScreen};
