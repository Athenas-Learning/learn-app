import React, {useEffect} from 'react';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '1016457017031-j99qnbmj482nd3pj9jadchnts6e4g1d9.apps.googleusercontent.com'
});

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

const LoginScreen = ({navigation, ...props}) => {
  const onGoogleButtonPressAsync = async () => {
    const data = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(data.idToken);
    return auth().signInWithCredential(googleCredential);
  };

  const onGoogleButtonPress = () => {
    onGoogleButtonPressAsync().then(() => {
    }).catch((error)=>{
      alert('erro');
    });
  };

  return (
    <KeyboardAvoidingView style={styles.root} behavior="padding">
      <View style={styles.containerView}>
        <View style={styles.loginFormPadding}>
          <PublicHeader title="Acesse sua conta!" />
        </View>
        <View style={styles.loginScreenContainer}>
          <Text style={styles.loginFormLabel}>Usuário</Text>
          <TextInput
            style={styles.loginFormTextInput}
            placeholder="Digite aqui seu usuário"
          />
          <Text style={styles.loginFormLabel}>Senha</Text>
          <TextInput
            style={styles.loginFormTextInput}
            secureTextEntry={true}
            placeholder="********"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('PasswordRecovery')}>
            <Text style={styles.forgotPasswordButton}>Esqueci minha senha</Text>
          </TouchableOpacity>
          <View style={styles.loginButton}>
            <Icon.Button
              name="lock"
              backgroundColor="#3b5998"
              onPress={() => navigation.navigate('Learn')}>
              <Text style={styles.loginLabel}>Acessar</Text>
            </Icon.Button>
          </View>
          <Separator />
          <View style={styles.loginButton}>
            <Icon.Button
              name="google"
              backgroundColor="#EFEFEF"
              color="#EB5757"
              onPress={onGoogleButtonPress}>
              <Text style={styles.googleLabel}>Login com Google</Text>
            </Icon.Button>
          </View>
          <Separator />
          <View style={styles.loginButton}>
            <Icon.Button
              name="facebook"
              backgroundColor="#3b5998"
              onPress={() => navigation.navigate('Learn')}>
              <Text style={styles.loginLabel}>Login com Facebook</Text>
            </Icon.Button>
          </View>
        </View>
        <View style={styles.loginFormSignup}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupButton}>Ainda não tenho cadastro</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export {LoginScreen};
