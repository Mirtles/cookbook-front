import React, { Component } from 'react'
import { View, Text, StyleSheet, WebView, ScrollView } from 'react-native'

export default class RecipePageContainer extends Component {
  static navigationOptions = {
    title: 'Awesome pancakes',
  };

  render() {
    return (
      <View>
        <View style={styles.Container}>
          <WebView
            style={styles.WebViewStyle}
            source={{ uri: 'https://www.youtube.com/embed/zDed1qiwM8E' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>
            2 large eggs, separated{"\n"}
            1 1/2 tablespoons milk{"\n"}
            1/2 teaspoon vanilla extract{"\n"}
            3 tablespoons granulated sugar{"\n"}
            1 tablespoon melted butter{"\n"}
            pinch of salt{"\n"}
            1/4 self-rising flour{"\n"}
            1/8 teaspoon cream of tartar{"\n"}
            2 teaspoons butter for cooking
            {"\n\n"}

            In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.
            {"\n\n"}
            Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container: {
    width: 400,
    height: 250
  },
  WebViewStyle: {
    margin: 20,
    width: 400,
    height: 250
  },
  Text: {
    fontSize: 20
  },
  TextContainer: {
    flex: 1,
    marginHorizontal: 40
  },
});