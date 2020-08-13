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

const LoginScreen = ({navigation, ...props}) => {
  const onLoginPress = () => {};

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <ScrollView>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Athenas Learning</Text>
            <TextInput
              placeholder="Username"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Separator />
            <Button title="Entrar"
              onPress={() => navigation.navigate('Learn')}
            />
            <Separator />
            <Button title="Entrar com Facebook"
              onPress={() => navigation.navigate('Learn')}
            />
            <Separator />
            <Button title="Entrar com Google"
              onPress={() => navigation.navigate('Learn')}
            />
            <Separator />
            <Button
              title="Quero me cadastrar"
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export {LoginScreen};
