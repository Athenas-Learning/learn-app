import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollContainer: {
        marginHorizontal: 15,
        alignItems: 'center',
    },
    titleTextSize: {
        fontSize: 16,
    },
    textColorAndWeight: {
        color: '#414141',
        fontWeight: "500",
    },
    adjustingContentToRow: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    rewardTitleContainer: {
        backgroundColor: '#04d361',
        height: 20,
        width: '30%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '35%',
        marginTop: 10
    },
    rewardTitleText: {
        color: '#eee'
    },
    trophyContainer: {
        backgroundColor: '#e5e5e5',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rewardTextDescription: {
        fontWeight: "500",
        color: '#747474',
        marginTop: 20
    },
    rewardImageTextVerticalSeparator: {
        marginTop: 15
    },
    rewardImageTextSeparator: {
        marginLeft: 15,
    }

});

export default styles;