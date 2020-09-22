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
    buttonNext1: {
        borderRadius: 5,
        backgroundColor: '#b893f5',
        width: '27%',
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40
    },
    buttonNext2: {
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
    },
    buttonCheckAnswers1: {
        borderRadius: 5,
        backgroundColor: '#8d50f1',
        width: '27%',
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    buttonCheckAnswers2: {
        borderRadius: 5,
        backgroundColor: '#b893f5',
        width: '27%',
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    modalText: {
        color: '#eee',
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "500"
    },
    questionAnswerModal: {
        fontWeight: 'bold'
    },
    modalTitle: {
        color: '#eee',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    }
})

export default styles;