import React, { Component } from 'react'
import { View, Text, FlatList, TouchableHighlight } from 'react-native'

export default class RecipeList extends Component {
  render() {
    const { navigate } = this.props.navigation
    const { text, container } = this.props.style

    return (
      <View style={container}>
        <Text style={text}>Recipes:</Text>
        <FlatList
          data={this.props.recipes}
          renderItem={({ item }) => {
            return <TouchableHighlight onPress={() => navigate('Home', {
              // id: item.id,
              // name: item.name,
              // title: `${item.name} recipes`,
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