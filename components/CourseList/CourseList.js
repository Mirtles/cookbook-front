import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'

export default class CourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { navigate } = this.props.navigation
    const { text, container } = this.props.style

    return (
      <View style={container}>
        <Text style={text}>Recipe types:</Text>
        <FlatList
          data={this.props.courses}
          renderItem={({ item }) => {
            return <TouchableHighlight onPress={() => navigate('RecipeList', {
              id: item.id,
              name: item.name,
              title: `${item.name} recipes`,
            })} >
              <Text style={text}>{item.name}</Text>
            </TouchableHighlight>
          }}
          keyExtractor={(item, index) => `item${item.id}`}
        />
      </View>
    )
  }
}