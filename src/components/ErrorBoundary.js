import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import RNRestart from 'react-native-restart';
import { errorHandler } from '../services/ErrorService';

const ErrorFallback = ({error, componentStack, onRetryClick}) => {
  const resetErrorBoundary = () => {
    if (!onRetryClick || !onRetryClick()) {
      RNRestart.Restart();
    }
  };

  return (
    <View style={[styles.container]}>
      <View>
        <Text> Um erro aconteceu: </Text>
        <Button title="Try Again" onPress={resetErrorBoundary} />
      </View>
    </View>
  );
};

export const ErrorHandler = ({children}) => (
  <ErrorBoundary FallbackComponent={ErrorFallback} onError={errorHandler}>
    {children}
  </ErrorBoundary>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 12,
  },
});
