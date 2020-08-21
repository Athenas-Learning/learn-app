import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  themesContainer: {},
  themesItems: {
    margin: 6,
  },
  themesDescription: {
    fontSize: 16,
    color: '#525252',
    padding: 3,
  },
  themeItemTitle: {
    fontSize: 24,
    marginHorizontal: 3,
    marginVertical: 7,
  },
  themeButton: {
    backgroundColor: '#5577B6',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 3,
  },
  textThemeButton: {
    padding: 7,
    color: '#EEEEEE',
    fontSize: 18,
  },
});

export default styles;
