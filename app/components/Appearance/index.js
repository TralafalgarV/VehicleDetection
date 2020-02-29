import React, { Component } from 'react';
import { View, StyleSheet, Text } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import BaseInfo from "./Component/BaseInfo";
import { WhiteSpace, Toast, Modal } from '@ant-design/react-native';
import { fetchRequest } from "../../utils/fetchUtils";

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.result = 0; // 0 失败；1 成功
  }

  // 提交信息
  submitInfo = () => {
    const state = this._baseInfo.state;
    state.result = this.result; // 结果状态
    state.ID = state.licenseNum; // licenseNum 赋值给 ID

    // fetchRequest('inputCarData', state).
    //   then(res => console.log(res)).
    //   catch((error) => console.log(error));

    Toast.loading('正在提交', 0.5, () => {
      Toast.success('提交成功', 0.5, ()=> {
        const { navigation } = this.props;
        navigation && navigation.navigate('AppearanceList');
      }, true);
    }, true);
  }

  // 弹框选择是否通过
  showModal = () => {
    // 0 未通过；1 已通过
    Modal.alert(
    <Text style={styles.modalTitle}>检测结果</Text>, 
    <Text style={styles.modalContext}>外观检测是否已通过？</Text>, 
    [{
        text: '未通过',
        onPress: () => this.resultPress(0),
        style: {
          textAlign: 'center',
          color: '#ed5655'
        }
      },
      {
        text: '已通过',
        onPress: () => this.resultPress(1),
        style: {
          textAlign: 'center',
          color: '#5695D2'
        }
      },
    ]);
  };

  resultPress = result => {
    this.result = result;
    this.submitInfo();
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
          <BaseInfo ref={ref => this._baseInfo = ref}/>
          <WhiteSpace size='xl' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 18,
    color: '#222',
    margin: 3,
  },
  modalContext: {
    fontSize: 14,
    color: '#666',
    margin: 3,
  },
});

export default Home;