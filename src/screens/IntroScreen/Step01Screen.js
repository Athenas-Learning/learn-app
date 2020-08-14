import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;

const Step01Screen = ({ onNextStepPress, ...props }) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.root}>
          <Image source={require('./Step01.jpg')} />
          <Text style={{ color: '#333333', fontSize: 30, marginTop: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Estudar</Text>
            <Text> pode </Text>
          </Text>
          <Text style={{ color: '#333333', fontSize: 30 }}>
            <Text> ser </Text>
            <Text style={{ fontWeight: 'bold' }}>como brincar</Text>
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
          <RectButton
            title="Próximo"
            style={{
              marginVertical: 15,
              backgroundColor: '#5577b6',
              width: 330,
              borderRadius: 5,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={onNextStepPress}
          >
            <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#eee'
            }}>Próximo</Text>
          </RectButton>
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

export { Step01Screen };
