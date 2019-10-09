import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

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
    this.setState({
      name: '',
      password: '',
    })
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