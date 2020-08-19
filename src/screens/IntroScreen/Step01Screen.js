import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;

const Step01Screen = ({onNextStepPress, ...props}) => {
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.content}>
          <Image style={styles.image} source={require('./Step01.jpg')} />
          <Text style={[styles.title, {marginTop: 15}]}>
            <Text style={{fontWeight: 'bold'}}>Estudar</Text>
            <Text> pode </Text>
          </Text>
          <Text style={styles.title}>
            <Text> ser </Text>
            <Text style={{fontWeight: 'bold'}}>como brincar</Text>
          </Text>
          <Text
            style={[
              styles.text,
              {
                width: 300,
                marginTop: 15,
                textAlign: 'center',
              },
            ]}>
            Vídeos super divertidos para você interagir e brincar enquanto
            estuda.
          </Text>
          <Separator />
        </View>
        <View style={styles.actions}>
          <View style={styles.actionButtons}>
            <Text></Text>
            <RectButton title="Próximo" onPress={onNextStepPress}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  padding: 4,
                }}>
                Próximo
              </Text>
            </RectButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    margin: 7,
    textAlign: 'center',
  },
  image:{
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  content: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#333333',
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    color: '#333333',
    fontSize: 15,
    textAlign: 'center',
  },
  actions: {
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  actionButtons: {
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    height: 30,
  },
  separator: {
    marginVertical: 7,
  },
});

export {Step01Screen};
