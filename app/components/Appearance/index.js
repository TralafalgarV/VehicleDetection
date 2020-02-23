import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import BaseInfo from "./Component/BaseInfo";
import { WhiteSpace, Toast } from '@ant-design/react-native';

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

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='外观检测'
          rightItemName='提交'
          rightClick={this.submitInfo}
        />
        {/* 基本信息 */}
          <BaseInfo />
          <WhiteSpace size='xl' />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default Home;