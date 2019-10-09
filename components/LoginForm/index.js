import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Button, TextInput, View } from 'react-native'

import LoginForm from './LoginForm'
import { login } from '../../actions/user'

class LoginFormContainer extends Component {
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
    this.props.login(name, password)
  }

  render() {
    return (
      <View>
        <LoginForm
          text={this.state}
          onChangeName={this.onChangeName}
          onChangePassword={this.onChangePassword}
          onLogin={this.onLogin}
        />
        <Text>
          {this.props.user ? this.props.user : "loading"}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)