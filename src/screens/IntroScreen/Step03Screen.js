import React from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const Step03Screen = ({onNextStepPress, ...props}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.root}>
          <Image source={require('./Step01.jpg')} />
          <Text style={{color: '#333333', fontSize: 30, marginTop: 15}}>
            Construa
          </Text>
          <Text style={{color: '#333333', fontSize: 30, fontWeight: 'bold'}}>
            em sala de aula
          </Text>
          <Text
            style={{
              color: '#333333',
              fontSize: 15,
              width: 300,
              marginTop: 15,
              textAlign: 'center',
            }}>
            Estimule a sua criatividade descobrindo o que da para fazer com o
            que aprendeu.
          </Text>
          <Separator />
          <Button
            title="Começar"
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

export {Step03Screen};
