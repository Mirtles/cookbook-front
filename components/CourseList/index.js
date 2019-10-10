import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, StyleSheet } from 'react-native'

import { getCourses } from '../../actions/courses'
import CourseList from './CourseList'

class CourseListContainer extends Component {
  static navigationOptions = {
    title: 'Recipe types',
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.getCourses()
  }

  render() {
    return <ScrollView style={styles.scrollView}>
      {this.props.courses.length === 0
        ? <Text style={styles.text}>"loading"</Text>
        : <CourseList
          navigation={this.props.navigation}
          style={styles}
          courses={this.props.courses}
        />}
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
  }
})

const mapStateToProps = state => ({
  courses: state.courses
})

const mapDispatchToProps = {
  getCourses,
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListContainer)