import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from "react-redux";

import store from './store'
import LoginFormContainer from './components/LoginForm'
import SignupFormContainer from './components/SignupForm';
import CourseListContainer from './components/CourseList';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginFormContainer />
        <Button
          title="To recipes"
          onPress={() => {
            this.props.navigation.navigate('CourseList');
          }}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    CourseList: CourseListContainer,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
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

// class DetailsScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => {
//     return {
//       title: navigation.getParam('otherParam', 'A Nested Details Screen'),
//     };
//   };

//   render() {
//     const { navigation } = this.props;
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>
//           itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
//         </Text>
//         <Text>
//           otherParam:
//           {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
//         </Text>
//         <Button
//           title="Update the title"
//           onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
//         />
//         <Button
//           title="Go to Details... again"
//           onPress={() =>
//             navigation.push('Details', {
//               itemId: Math.floor(Math.random() * 100),
//             })
//           }
//         />
//       </View>
//     );
//   }
// }