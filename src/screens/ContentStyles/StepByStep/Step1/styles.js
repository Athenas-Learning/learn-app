import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    endToEndContainer: {
        marginHorizontal: 15,
        alignItems: 'center'
    },
    contentText: {
        fontSize: 16,
    },
    contentSeparator: {
        marginTop: 15,
    },
    textBold: {
        fontWeight: 'bold',
    },
    textTextSeparator: {
        marginTop: 10,
    },
    lastImageSeparator: {
        marginBottom: 15
    },
    nextStepButton: {
        backgroundColor: '#5577B6',
        height: 30,
        width: '40%',
        borderRadius: 5,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextStepButtonText: {
        color: '#efefef'
    }
});

export default styles;