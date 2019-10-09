import React, { Component } from 'react'
import { Text, Button, TextInput, View } from 'react-native'

export default class SignupForm extends Component {
  render() {
    return (
      <View>

        <TextInput
          value={this.props.text.name}
          onChangeText={this.props.onChangeName}
          placeholder="Name"
          style={{ height: 40 }}
        />

        <TextInput
          value={this.props.text.password}
          onChangeText={this.props.onChangePassword}
          placeholder="Password"
          secureTextEntry={true}
          style={{ height: 40 }}
        />

        <Button
          title={'Sign up'}
          onPress={this.props.onSignup}
        />

        <Text>
          Already have an account? Login here.
        </Text>

      </View>
    )
  }
}