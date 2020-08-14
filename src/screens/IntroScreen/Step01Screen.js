import React from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const Step01Screen = ({onNextStepPress, ...props}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.root}>
          <Image source={require('./Step01.jpg')} />
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
            onPress={onNextStepPress}
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

export {Step01Screen};
