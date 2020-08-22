import React from 'react';
import {
    Text,
    View,
    TextInput,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Header } from '../../../../components/Header';
import FixedMenuBar from '../../../../components/FixedMenuBar';

import hexagonImg from '../../../../assets/images/hexagon_blue.png';

import styles from './styles';

function EditProfile({ navigation, ...props }) {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Meu Perfil" navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.titleText}>Atualizar informações</Text>

                <Image source={hexagonImg} style={styles.logoImg} />
                <View style={styles.loginScreenContainer}>
                    <Text style={styles.loginFormLabel}>Nome</Text>
                    <TextInput
                        style={styles.loginFormTextInput}
                        value='firstName'
                    />
                    <Text style={styles.loginFormLabel}>Sobrenome</Text>
                    <TextInput
                        style={styles.loginFormTextInput}
                        value='lastName'
                    />
                    <Text style={styles.loginFormLabel}>E-mail</Text>
                    <TextInput
                        style={styles.loginFormTextInput}
                        value='email'
                    />
                    <Text style={styles.loginFormLabel}>Senha Atual</Text>
                    <TextInput
                        style={styles.loginFormTextInput}
                        secureTextEntry={true}
                        value='previousPassword'
                    />
                    <Text style={styles.loginFormLabel}>Nova senha</Text>
                    <TextInput
                        style={styles.loginFormTextInput}
                        secureTextEntry={true}
                        value='newPassword'
                    />
                    <Text style={styles.loginFormLabel}>Confirmar nova senha</Text>
                    <TextInput
                        style={styles.loginFormTextInput}
                        secureTextEntry={true}
                        value='newPassword'
                    />
                    <RectButton style={styles.confirmProfileChangesButton}><Text style={styles.buttonText}>Confirmar alterações</Text></RectButton>
                </View>
            </ScrollView>
            <FixedMenuBar />
        </SafeAreaView>
    );
};

export default EditProfile;