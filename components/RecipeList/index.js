import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import { getRecipes } from '../../actions/recipes'

class RecipeListContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Recipes'),
    };
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    const { navigation } = this.props
    const id = navigation.getParam('id', 'no id')
    this.props.getRecipes(id, this.props.user)
  }

  render() {
    const { navigation } = this.props
    return <View>
      <Text>
        {navigation.getParam('name', 'no name')} dishes
      </Text>
      <Text>
        {this.props.recipes.length === 0
          ? "loading"
          : this.props.recipes[0].name}
      </Text>
    </View>
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  user: state.user
})

const mapDispatchToProps = {
  getRecipes,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer)