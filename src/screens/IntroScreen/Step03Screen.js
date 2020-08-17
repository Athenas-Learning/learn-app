import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';


const Separator = () => <View style={styles.separator} />;

const Step03Screen = ({ onNextStepPress, ...props }) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.root}>
          <Image source={require('./Step03.png')} />
          <Text style={{ color: '#333333', fontSize: 30, marginTop: 15 }}>
            Construa
          </Text>
          <Text style={{ color: '#333333', fontSize: 30, fontWeight: 'bold' }}>
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

export { Step03Screen };
