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
    contentInRow: {
        flexDirection: 'row',
        maxWidth: '75%'
    },
    adjustingContentToColumn: {
        flexDirection: 'column',
    },
    welcomeContentText: {
        marginBottom: 30
    },
    textColor: {
        color: '#414141'
    },
    contentSeparator: {
        marginBottom: 30
    },
    imageAtTheCenterOfTheScreen: {
        alignSelf: 'center'
    },
    textTitleSize: {
        fontSize: 16,
        marginBottom: 15
    },
    adjustingContentToTheCenter: {
        justifyContent: 'center'
    },
    contentSeparatorWithLessMargin: {
        marginBottom: 15
    },
    checkAndTextMargin: {
        marginRight: 15,
    },
    checkedItemsSeparator: {
        marginBottom: 15
    },
    volcanoClassItem: {
        marginLeft: 75
    },
    volcanoClassSeparator: {
        marginBottom: 10
    },
    alignTextToTheCenterOfTheScreen: {
        textAlign: 'center'
    },
    buttonContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: '#04d361',
        width: '45%',
        borderRadius: 5
    },
    buttonText: {
        color: '#eee'
    },
    lastButtonSeparatorFromFixedMenu: {
        marginBottom: 50
    }
})

export default styles;