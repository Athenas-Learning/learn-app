import { StyleSheet } from 'react-native';

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
});

export default styles;
