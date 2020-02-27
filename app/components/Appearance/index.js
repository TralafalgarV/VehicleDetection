import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import BaseInfo from "./Component/BaseInfo";
import { WhiteSpace, Toast, Modal } from '@ant-design/react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  // 提交信息
  submitInfo = () => {
    Toast.loading('正在提交', 0.5, () => {
      Toast.success('提交成功', 0.5, ()=> {
        const { navigation } = this.props;
        navigation && navigation.navigate('AppearanceList');
      }, true);
    }, true);
  }

  // 弹框选择是否通过
  showModal = () => {
    // 0 失败；1 成功
    Modal.operation([
      {
        text: '已通过',
        onPress: () => this.resultPress(1),
        style: {
          textAlign: 'center',
          color: '#5695D2'
        }
      }, {
        text: '未通过',
        onPress: () => this.resultPress(0),
        style: {
          textAlign: 'center',
          color: '#ED5655'
        }
      },
    ]);
  };

  resultPress = result => {
    this.setState({
      result,
    }, () => this.submitInfo());
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='外观检测'
          rightItemName='提交'
          rightClick={this.showModal}
        />
        {/* 基本信息 */}
          <BaseInfo />
          <WhiteSpace size='xl' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  a: {
    textAlign: 'center',
    color: 'red'
  }
});

export default Home;