import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    loginFormPadding: {},
    loginScreenContainer: {
        marginLeft: 15,
        marginRight: 15,
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
    separator: {
        marginVertical: 7,
    },
    loginButton: {
        elevation: 3,
        borderColor: '#000',
    },
    loginLabel: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default styles;