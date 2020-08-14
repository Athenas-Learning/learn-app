import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';

const PublicHeader = ({title, ...props}) => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image style={styles.logoImage} source={require('./logo.png')} />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleLabel}>{title}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  title: {
  },
  titleLabel: {
    margin: 15,
    marginBottom: 12,
    paddingHorizontal: 3,
    paddingBottom: 3,
    color: "#525252",
    borderBottomColor: "#F2C94C",
    borderBottomWidth: 3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    padding: 15,
  },
  logoImage: {
    width: 51,
    height: 45,
  },
});

export {PublicHeader};