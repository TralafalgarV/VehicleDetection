import React, { Component } from 'react';
import { Text, View } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Login</Text>
      </View>
    );
  }
}

export default Login;