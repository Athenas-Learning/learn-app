import React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Avatar,
  Text,
  Divider,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const ripple = TouchableNativeFeedback.Ripple('#adacac', false);

const CustomDrawer = (props) => {
  return (
    <View style={styles.root}>
      <ScrollView>
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
            onPress={() => alert('Finge que saiu, ok?')}
          />
        </SafeAreaView>
      </ScrollView>

      <View elevation={6} style={{backgroundColor: '#ffffff'}}>
        <TouchableNativeFeedback background={ripple}>
          <View style={styles.containDrawerOption}>
            <Text>Logout</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback background={ripple}>
          <View style={styles.containDrawerOption}>
            <Text style={{color: 'black', fontFamily: 'sans-serif-medium'}}>
              Developer
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
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
  itemLabel: {
    marginLeft: 5,
    color: '#ffffff',
    fontSize: 16,
  },
  item: {
    borderRadius: 100,
    elevation: 4,
  },
});

export {CustomDrawer};
