import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from "react-redux";

import store from './store'
import LoginFormContainer from './components/LoginForm'
import SignupFormContainer from './components/SignupForm';
import CourseListContainer from './components/CourseList';
import RecipeListContainer from './components/RecipeList'
import RecipePageContainer from './components/RecipePage'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginFormContainer navigation={this.props.navigation} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    CourseList: {
      screen: CourseListContainer,
    },
    RecipeList: {
      screen: RecipeListContainer,
    },
    RecipePage: {
      screen: RecipePageContainer,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'midnightblue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider
        store={store}>
        <AppContainer />
      </Provider >)
  }
}