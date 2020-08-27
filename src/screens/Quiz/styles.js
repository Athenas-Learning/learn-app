import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollContainer: {
        marginLeft: 15,
        marginHorizontal: 10,
    },
    buttonNext: {
        borderRadius: 5,
        backgroundColor: '#8d50f1',
        width: '27%',
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    buttonText: {
        color: '#eee',
        fontWeight: '500',
        fontSize: 16
    }
})

export default styles;