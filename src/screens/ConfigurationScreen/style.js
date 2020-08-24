import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    configContainer: {
        justifyContent: 'center',
        marginLeft: 15,
        marginHorizontal: 10,
    },
    soundConfigContainer: {
        flexDirection: 'row',
    },
    textTitleSize: {
        fontSize: 16,
    },
    textColor: {
        color: '#414141',
    },
    soundConfigIcon: {
        marginLeft: '49%'
    },
    endToEndButtonSelection: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDescription: {
        maxWidth: '80%',
        marginBottom: 15,
        marginTop: 10,
    },
    stepByStepContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    stepByStepExampleImageSeparator: {
        marginRight: 12,
    },
    contentVisualizationModeTextSelectedColor: {
        color: '#414141'
    },
    contentVisualizationModeTextUnselectedColor: {
        color: '#aaa',
    },
    contentVisualizationModeSelectedExample: {
        tintColor: '#414141'
    },
    contentVisualizationModeUnselectedExample: {
        tintColor: '#aaa'
    }
});

export default styles;