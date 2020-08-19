import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;

const Step03Screen = ({onPreviousStepPress, onNextStepPress, ...props}) => {
  return (
    <View>
      <View style={styles.root}>
        <View style={styles.content}>
          <Image style={styles.image} source={require('./Step03.png')} />
          <Text style={[styles.title, {marginTop: 15}]}>
            Construa
          </Text>
          <Text style={[styles.title, {fontWeight: 'bold'}]}>
            em sala de aula
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
            Estimule a sua criatividade descobrindo o que da para fazer com o
            que aprendeu.
          </Text>
          <Separator />
        </View>
        <View style={styles.actions}>
          <View style={styles.actionButtons}>
            <RectButton title="Anterior" onPress={onPreviousStepPress}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  padding: 4,
                }}>
                Anterior
              </Text>
            </RectButton>
            <RectButton title="Próximo" onPress={onNextStepPress}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  padding: 4,
                }}>
                Iniciar
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

export {Step03Screen};
