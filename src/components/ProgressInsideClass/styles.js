import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    progressContentWrapper: {
        marginVertical: 80
    },
    progressTitle: {
        alignItems: 'center'
    },
    mainProgressTitleText: {
        fontSize: 22,
    },
    secondaryProgressTitleText: {
        fontSize: 16,
    },
    progressImgContainer: {
        marginVertical: 68,
        alignSelf: 'center',
        height: 240,
        width: 240,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressBarContainer: {
        alignItems: 'center',
    },
    nextButton: {
    },
    nextButtonText: {
        fontSize: 16,
        marginTop: 10
    }
})

export default styles;