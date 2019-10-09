import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'

import url from '../../constants'
import SignupForm from './SignupForm'

class SignupFormContainer extends Component {
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

  onSignup = () => {
    const { name, password } = this.state

    fetch(`${url}/user`, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        password
      })
    })
      .then(this.setState({
        name: '',
        password: '',
      }))
      .catch(console.error)
  }

  render() {
    return (
      <View>
        <SignupForm
          text={this.state}
          onChangeName={this.onChangeName}
          onChangePassword={this.onChangePassword}
          onSignup={this.onSignup}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer)