import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    themesContainer: {
        maxWidth: 200,
    },
    themesDescription: {
        fontSize: 16,
        color: '#525252',
        padding: 15,
    },
    themeButton: {
        marginTop: 0,
        backgroundColor: '#5577B6',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 12,
    },
    textThemeButton: {
        padding: 7,
        color: '#EEEEEE',
        fontSize: 18,
    },
});

export default styles;
