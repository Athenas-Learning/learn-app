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

// import styles from './styles';

function Step3({ navigation, ...props }) {
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

export default Step3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        color: '#414141',
        fontSize: 24,
        marginVertical: 15
    },
    loginFormPadding: {},
    loginScreenContainer: {
        width: '90%',
        marginTop: 15,
    },
    loginFormSignup: {
    },
    loginFormLabel: {
        fontSize: 18,
    },
    loginFormTextInput: {
        height: 40,
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 5,
        marginBottom: 5,
    },
    confirmProfileChangesButton: {
        width: '80%',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#5577b6',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        marginBottom: 60
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#eee',
    }
})