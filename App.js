import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from "react-redux";

import store from './store'
import LoginFormContainer from './components/LoginForm'
import SignupFormContainer from './components/SignupForm';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <LoginFormContainer />
        <SignupFormContainer />
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
