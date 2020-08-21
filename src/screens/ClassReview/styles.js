import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    retakeContentDescription: {
        fontSize: 16,
        color: '#414141',
        textAlign: 'center'
    },
    retakeContentContainer: {
        flexDirection: 'row',
        marginHorizontal: 15,
        alignSelf: 'center'
    },
    retakeButtonWrapper: {
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionDescriptionText: {
        fontSize: 16,
        color: '#414141',
        marginBottom: 16
    },
    retakeQuizButton: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        alignSelf: 'center'
    },
    textAsAButton: {
        marginRight: 65
    },
    finishThisContentButton: {
        width: '80%',
        backgroundColor: '#6fcf97',
        height: 40,
        alignSelf: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#eee',
        fontSize: 18
    }
})

export default styles;