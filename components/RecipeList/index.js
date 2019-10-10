import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import { getRecipes } from '../../actions/recipes'
import RecipeList from './RecipeList'

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
    const { container, text } = styles
    return <View style={container}>

      <Text style={text}>
        {navigation.getParam('name', 'no name')} dishes
      </Text>

      {this.props.recipes.length === 0
        ? <Text>loading</Text>
        : <RecipeList
          recipes={this.props.recipes}
          navigation={this.props.navigation}
          style={styles}
        />}

    </View>
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
  recipes: state.recipes,
  user: state.user
})

const mapDispatchToProps = {
  getRecipes,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListContainer)