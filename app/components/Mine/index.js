import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import HeaderBar from "../../common/HeaderBar";

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  // 退出登录
  logout = () => {
    const { navigation } = this.props;
    navigation && navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='我的'
          leftItemHidden={true}
          rightItemHidden={true}
        />
        <View style={styles.personContainer}>
          <Image source={require('./imgs/default.png')} style={styles.icon} />
          <View style={styles.personInfo}>
            <Text style={[styles.personName, {fontSize: 24}]}>平谷机动车检测场</Text>
            <Text style={styles.personName}>王小二</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={this.logout}>
          <View style={styles.logoutContainer}>
            <Text style={styles.logoutText}>退出登录</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 140,
    height: 140,
  },
  personContainer: {
    flexDirection: 'row',
    margin: 20,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  personName: {
    color: '#222',
    fontSize: 18,
    marginBottom: 10,
  },
  personInfo: {
    marginLeft: 20,
    marginTop: 15,
  },
  logoutContainer: {
    width: '60%',
    height: 50,
    borderColor: '#ddd',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',

    marginTop: 50,
    marginLeft: '20%'
  },
  logoutText: {
    fontSize: 18,
    color: '#222'
  }
});

export default Mine;