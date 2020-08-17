import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Divider,
  StyleSheet,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <View style={styles.root}>
      <DrawerContentScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{top: 'always', horizontal: 'never'}}>
          <View style={[styles.containHeader]}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.greetingsLabel}>Boa noite,</Text>
              <Text style={styles.usernameLabel}>Igor Quirino</Text>
              <Text
                style={{
                  color: '#000000',
                  fontFamily: 'sans-serif-condensed',
                }}>
                iquirino91@gmail.com
              </Text>
            </View>
          </View>

          <View style={styles.menu}>
            <DrawerItem
              activeTintColor="#ffffff"
              inactiveTintColor="#ffffff"
              activeBackgroundColor="#8D50F1"
              inactiveBackgroundColor="#8D50F1"
              labelStyle={styles.itemLabel}
              style={styles.item}
              label="Meu Perfil"
            />

            <DrawerItemList
              activeTintColor="#ffffff"
              inactiveTintColor="#ffffff"
              activeBackgroundColor="#8D50F1"
              inactiveBackgroundColor="#8D50F1"
              labelStyle={styles.itemLabel}
              itemStyle={styles.item}
              {...props}
            />

            <DrawerItem
              label="Sair"
              activeTintColor="#ffffff"
              inactiveTintColor="#ffffff"
              activeBackgroundColor="#8D50F1"
              inactiveBackgroundColor="#8D50F1"
              labelStyle={styles.itemLabel}
              style={styles.item}
              onPress={() => props.navigation.navigate('Login')}
            />
          </View>
        </SafeAreaView>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#A176E8',
  },
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  containHeader: {
    flex: 1,
  },
  containDrawerOption: {
    flex: 1,
  },
  greetingsLabel: {
    color: '#000000',
    fontSize: 20,
  },
  usernameLabel: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 20,
  },
  menu: {
    alignContent: 'stretch',
    textAlign: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  itemLabel: {
    marginLeft: 5,
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  item: {
    flex: 1,
    textAlign: 'center',
    borderRadius: 100,
    elevation: 4,
    alignItems: 'stretch',
  },
});

export {CustomDrawer};
