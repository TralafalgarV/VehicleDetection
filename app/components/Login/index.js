import React, { Component } from 'react';
import { Text, View } from "react-native";
import { Button, InputItem, WingBlank } from '@ant-design/react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <InputItem
            clear
            value={this.state.userName}
            onChange={userName => {
              this.setState({
                userName,
              });
            }}
            placeholder="用户名"
          >
            用户名
          </InputItem>
          <InputItem
            clear
            value={this.state.password}
            onChange={password => {
              this.setState({
                password,
              });
            }}
            placeholder="密码"
          >
            密码
          </InputItem>
      </View>
    );
  }
}



export default Login;