import React, { Component } from 'react';
import { View, StyleSheet, Text } from "react-native";
import { Button, InputItem } from '@ant-design/react-native';
import codePush from "react-native-code-push";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  componentDidMount() {
    codePush.checkForUpdate().then((update) => {
      if (update) {
        this.setState({
          message: '有新的更新！'
        })
      } else {
        this.setState({
          message: '已是最新，不需要更新！'
        })
      }
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
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

  // 登录操作
  login = () => {
    const { navigation } = this.props;

    // TODO: 校验登录信息操作
    navigation && navigation.navigate('TabNavigator')
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