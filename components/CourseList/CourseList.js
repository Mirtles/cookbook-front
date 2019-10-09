import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

export default class CourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return <View>
      <Text>Recipe types:</Text>
      <FlatList
        data={this.props.courses}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item, index) => `item${item.id}`}
      />

    </View>
  }
}