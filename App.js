import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginFormContainer from './components/LoginForm'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginFormContainer />
      <Text style={{ color: 'white', backgroundColor: 'skyblue', height: 50 }}>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
