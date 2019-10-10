import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

// import { getCourses } from '../../actions/courses'
// import CourseList from './CourseList'

export default class RecipeListContainer extends Component {
  static navigationOptions = {
    title: `recipes`,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  // componentDidMount() {
  //   this.props.getCourses()
  // }

  render() {
    return <View>
      <Text>
        hi
        {/* id: {JSON.stringify(navigation.getParam('id', 'no id'))} */}
      </Text>
      <Text>
        {/* name: {JSON.stringify(navigation.getParam('name', 'no name'))} */}
      </Text>
    </View>
  }
}