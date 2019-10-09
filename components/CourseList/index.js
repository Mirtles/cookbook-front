import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, Text, StyleSheet } from 'react-native'

import { getCourses } from '../../actions/courses'
import CourseList from './CourseList'

class CourseListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.getCourses()
  }

  render() {
    return <ScrollView>
      {this.props.courses.length === 0
        ? <Text style={styles.container}>"loading"</Text>
        : <CourseList
          courses={this.props.courses}
        />}
    </ScrollView>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapStateToProps = state => ({
  courses: state.courses
})

const mapDispatchToProps = {
  getCourses,
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListContainer)