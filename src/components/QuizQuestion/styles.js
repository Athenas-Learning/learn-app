import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    setFlexDirectionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: '#777777',
        marginBottom: 5.5
    },
    questionText: {
        fontSize: 16,
        fontWeight: "500",
        color: '#414141',
    },
    questionImg: {
        alignSelf: 'center'
    },
    answerContainer: {
        width: '90%',
        height: 35,
        backgroundColor: '#04d361',
        borderRadius: 50,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    wrongAnswerSelected: {
        width: '90%',
        height: 35,
        backgroundColor: '#eb5757',
        borderRadius: 50,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    optionLetterContainer: {
        width: 30,
        height: 30,
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 3,
        marginRight: 10,
    },
    optionLetterText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    optionAnswer: {
        fontSize: 16,
        fontWeight: "500",
        color: '#eee'
    },
    lastOption: {
        marginBottom: 45
    },
})

export default styles;