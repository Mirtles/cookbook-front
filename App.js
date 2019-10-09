import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";

import store from './store'
import LoginFormContainer from './components/LoginForm'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LoginFormContainer />
      </View>
    </Provider>
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
