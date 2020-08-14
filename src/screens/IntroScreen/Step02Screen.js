import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Separator = () => <View style={styles.separator} />;

const Step02Screen = ({ onNextStepPress, ...props }) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.root}>
          <Image source={require('./Step02.png')} />
          <Text style={{ color: '#333333', fontSize: 30, marginTop: 15 }}>
            Ensino
          </Text>
          <Text style={{ color: '#333333', fontSize: 30, fontWeight: 'bold' }}>
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

export { Step02Screen };
