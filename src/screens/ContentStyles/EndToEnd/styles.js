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
    complementaryVideosTitle: {
        backgroundColor: '#6fcf97',
        width: 215,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -145
    },
    complementaryVideosTitleText: {
        fontSize: 16,
        color: '#efefef',
    }
});

export default styles;