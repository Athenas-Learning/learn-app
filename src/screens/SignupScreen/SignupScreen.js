import React, {Component} from 'react';

import {styles} from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const SignupScreen = ({navigation, ...props}) => {

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <ScrollView>
        <View style={styles.signupScreenContainer}>
          <View style={styles.signupFormView}>
            <Text style={styles.logoText}>Athenas Learning</Text>
            <TextInput
              placeholder="Nome completo"
              placeholderColor="#c4c3cb"
              style={styles.signupFormTextInput}
            />
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.signupFormTextInput}
            />
            <TextInput
              placeholder="Data de nascimento"
              placeholderColor="#c4c3cb"
              style={styles.signupFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.signupFormTextInput}
              secureTextEntry={true}
            />
            <Separator />
            <Button title="Concluir cadastro"
              onPress={() => navigation.navigate('Learn')}
            />
            <Separator />
            <Button
              title="Já sou cadastrado"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export {SignupScreen};
