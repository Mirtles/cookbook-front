import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

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
    return <View>
      {this.props.courses.length === 0
        ? <Text>"loading"</Text>
        : <CourseList
          courses={this.props.courses}
        />}
    </View>
  }
}

const mapStateToProps = state => ({
  courses: state.courses
})

const mapDispatchToProps = {
  getCourses,
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListContainer)