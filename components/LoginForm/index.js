import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button } from 'react-native'

import LoginForm from './LoginForm'
import { login } from '../../actions/user'

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      isLoggedIn: false,
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
      isLoggedIn: true,
    })
  }

  render() {
    return (
      <View>
        {!this.state.isLoggedIn
          ? <LoginForm
            text={this.state}
            onChangeName={this.onChangeName}
            onChangePassword={this.onChangePassword}
            onLogin={this.onLogin}
          />
          : <Button
            title="To recipes"
            onPress={() => {
              this.props.navigation.navigate('CourseList');
            }}
          />}
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