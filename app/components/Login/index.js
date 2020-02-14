import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { Button, InputItem } from '@ant-design/react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  // 登录操作
  login = () => {
    const { navigation } = this.props;

    // TODO: 校验登录信息操作
    navigation.navigate('TabNavigator')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputItem}>
          <InputItem
            clear
            autoFocus={true}
            value={this.state.userName}
            onChange={userName => {
              this.setState({
                userName,
              });
            }}
            placeholder="请输入用户名"
          >
            用户名
          </InputItem>
          <InputItem
            clear
            type={'password'}
            value={this.state.password}
            onChange={password => {
              this.setState({
                password,
              });
            }}
            placeholder="请输入密码"
          >
            密码
          </InputItem>
        </View>
        <Button 
          type={'primary'} 
          size={'large'} 
          style={styles.loginBtn}
          onPress={this.login}>登录</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBtn: {
    marginTop: 50,
    width: 250,
  },
  inputItem: {
    width: 450,
  }
});

export default Login;