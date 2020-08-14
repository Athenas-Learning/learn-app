import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
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
  googleLabel: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  signupButton: {
    backgroundColor: '#F2C94C',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  forgotPasswordButton: {
    marginBottom: 5,
    padding: 8,
    textAlign: 'center',
    color: '#DB2D45',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export { styles };
