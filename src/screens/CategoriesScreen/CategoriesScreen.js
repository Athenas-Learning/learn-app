import React from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';

import {Header} from '../../components/Header';

const Separator = () => <View style={styles.separator} />;

const CategoriesScreen = ({navigation, ...props}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.root}>
          <Text style={{color: '#333333', fontSize: 30, marginTop: 15}}>
            <Text style={{fontWeight: 'bold'}}>Estudar</Text>
            <Text> pode </Text>
          </Text>
          <Text style={{color: '#333333', fontSize: 30}}>
            <Text> ser </Text>
            <Text style={{fontWeight: 'bold'}}>como brincar</Text>
          </Text>
          <Text
            style={{
              color: '#333333',
              fontSize: 15,
              width: 300,
              marginTop: 15,
              textAlign: 'center',
            }}>
            Vídeos super divertidos para você interagir e brincar enquanto
            estuda.
          </Text>
          <Separator />
          <Button
            title="Próximo"
            style={{marginVertical: 15}}
            onPress={() => navigation.navigate('Step02')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 7,
  },
  separator: {
    marginVertical: 7,
  },
});

export {CategoriesScreen};
