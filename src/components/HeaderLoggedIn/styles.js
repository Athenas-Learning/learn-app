import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: -13,
    },
    goBackButton: {
        marginLeft: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#525252',
        borderBottomWidth: 3,
        borderColor: '#f2c94c',
        marginBottom: 5,
        marginLeft: 19
    },
    menuHeader: {
        marginTop: '5%',
        marginRight: 10,
    },
});

export default styles;