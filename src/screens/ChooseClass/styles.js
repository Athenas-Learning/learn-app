import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#525252',
        borderBottomWidth: 3,
        borderColor: '#f2c94c',
        marginBottom: 5,
        marginLeft: '30%',
        marginTop: '3%',
    },
    menuHeader: {
        marginLeft: '33%',
        marginTop: '5%',
    },
    contentText: {
        color: '#525252',
        fontSize: 16,
        marginLeft: '12%',
        marginTop: 15
    },
    contentIconsWrapper: {
        flexDirection: 'row',
        maxWidth: 340,
        marginHorizontal: 45,
        flexWrap: 'wrap',
    },
    contentButton: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContentButton: {
        marginBottom: 10,
    },
    textContentButton: {
        backgroundColor: '#5577b6',
        borderRadius: 5,
        color: '#eee',
        fontSize: 18,
        paddingHorizontal: 5,
        paddingVertical: 2,
        textAlign: 'center',
    }
});

export default styles;