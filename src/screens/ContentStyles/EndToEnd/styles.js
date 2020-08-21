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
    complementaryVideosContainer: {
        width: '100%',
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
    rewardContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 229,
        marginTop: 45,
        backgroundColor: '#6dd3c7',
        resizeMode: 'contain',
        marginBottom: 15,
        width: '100%',
    },
    rewardCongratulations: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6b7ea1',
        marginTop: 15,
    },
    rewardContentFinishedTitle: {
        color: '#525252',
        fontSize: 14,
        marginBottom: 15,
    },
    goBackToChooseThemeButton: {
        backgroundColor: '#5577b6',
        height: 25,
        width: '40%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
    },
    goBackToChooseThemeButtonText: {
        color: '#eee',
        fontSize: 14,
    }
});

export default styles;