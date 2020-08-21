import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Divider,
  StyleSheet,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import auth from '@react-native-firebase/auth';

const CustomDrawer = (user) => (props) => {

  const onLogoutPressAsync = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.root}>
      <DrawerContentScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}>
          <View style={[styles.containHeader]}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={{ uri: user?.photoURL }} style={{ width: 100, height: 100, borderRadius: 100, marginBottom: 10, marginTop: 10, borderColor: '#eee', borderWidth: 3 }} />
              <Text style={styles.greetingsLabel}>Boa noite,</Text>
              <Text style={styles.usernameLabel}>{user?.displayName}</Text>
              <Text
                style={{
                  color: '#eee',
                  fontFamily: 'sans-serif-condensed',
                  marginBottom: 10,
                }}>
                {user?.email}
              </Text>
            </View>
          </View>

          <View style={styles.menu}>
            <DrawerItem
              activeTintColor="#eee"
              inactiveTintColor="#eee"
              activeBackgroundColor="#EB5757"
              inactiveBackgroundColor="#EB5757"
              labelStyle={styles.itemLabel}
              style={styles.item}
              label="Meu Perfil"
            />

            <DrawerItemList
              activeTintColor="#eee"
              inactiveTintColor="#eee"
              activeBackgroundColor="#EB5757"
              inactiveBackgroundColor="#EB5757"
              labelStyle={styles.itemLabel}
              itemStyle={styles.item}
              {...props}
            />

            <DrawerItem
              label="Sair"
              activeTintColor="#eee"
              inactiveTintColor="#eee"
              activeBackgroundColor="#EB5757"
              inactiveBackgroundColor="#EB5757"
              labelStyle={styles.itemLabel}
              style={styles.item}
              onPress={onLogoutPressAsync}
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
    backgroundColor: '#EB5757',
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
    color: '#eee',
    fontSize: 20,
  },
  usernameLabel: {
    fontWeight: 'bold',
    color: '#eee',
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
    color: '#eee',
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

export { CustomDrawer };
