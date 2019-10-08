import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'

import LoginForm from './LoginForm'

export default class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
    };
  }

  onChangeName = (input) => {
    this.setState({
      name: input
    })
  }

  onChangePassword = (input) => {
    this.setState({
      password: input
    })
  }

  onLogin = () => {
    const { name, password } = this.state

    console.log(name, password)
  }

  render() {
    return (
      <LoginForm
        text={this.state}
        onChangeName={this.onChangeName}
        onChangePassword={this.onChangePassword}
        onLogin={this.onLogin}
      />
    )
  }
}