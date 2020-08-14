import React from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const Step02Screen = ({onNextStepPress, ...props}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.root}>
          <Image source={require('./Step01.jpg')} />
          <Text style={{color: '#333333', fontSize: 30, marginTop: 15}}>
            Ensino
          </Text>
          <Text style={{color: '#333333', fontSize: 30, fontWeight: 'bold'}}>
            Personalizado
          </Text>
          <Text
            style={{
              color: '#333333',
              fontSize: 15,
              width: 300,
              marginTop: 15,
              textAlign: 'center',
            }}>
            Jornadas de aprendizagem feitas especialmente para você.
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

export {Step02Screen};
