import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    complementaryVideosContainer: {
        width: '100%',
        alignSelf: 'flex-start',
    },
    endToEndContainer: {
        marginHorizontal: 15,
        alignItems: 'center'
    },
    contentSeparator: {
        marginTop: 15,
    },
    complementaryVideosTitle: {
        backgroundColor: '#6fcf97',
        width: 215,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    complementaryVideosTitleText: {
        fontSize: 16,
        color: '#efefef',
    },
    complementaryVideosTextSeparator: {
        marginTop: 5,
        fontSize: 14,
    },
    complementaryVideosVideoChannel: {
        color: '#525252',
        fontWeight: 'bold',
    },
    nextStepButton: {
        backgroundColor: '#5577B6',
        height: 30,
        width: '40%',
        borderRadius: 5,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    nextStepButtonText: {
        color: '#efefef'
    }
});

export default styles;