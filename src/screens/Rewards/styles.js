import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollContainer: {
        marginLeft: 15,
        marginHorizontal: 10,
        backgroundColor: '#e30'
    },
    rewardWarning: {
        marginTop: 15,
        textAlign: 'center'
    },
    textTitleSize: {
        fontSize: 16,
    },
    textColor: {
        color: '#414141'
    },
    rewardsDataTitle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 17,
        marginHorizontal: 15,
    },
    rewardButton: {
        backgroundColor: '#04d361',
        height: 20,
        width: '30%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rewardButtonText: {
        color: '#eee'
    },
    rewardDataContainer: {
        flexDirection: 'row',
    },
    unlockedTrophyBackground: {
        backgroundColor: '#e5e5e5',
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    rewardDescriptionContainer: {
        justifyContent: 'space-between',
        height: '20%'
    },
    unlockedRewardRewardText: {
        color: '#747474',
        marginTop: 15
    }
})

export default styles;