import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    congratsText: {
        fontWeight: 'bold',
        color: '#414141',
        fontSize: 18,
        alignSelf: 'center'
    },
    descriptionRatingText: {
        color: '#414141',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 15,
    },
    finishClassButton: {
        backgroundColor: '#6fcf97',
        borderRadius: 5,
        width: '80%',
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '35%'
    },
    buttonText: {
        fontSize: 18,
        color: '#eee'
    }
});

export default styles;