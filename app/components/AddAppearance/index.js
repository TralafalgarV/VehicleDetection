/** 
 * 外观检测单信息录入组件
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import BaseInfo from "./Component/BaseInfo";
import { WhiteSpace, Toast, Modal } from '@ant-design/react-native';
import { fetchRequest } from "../../utils/fetchUtils";
import { ADD_APPEARANCE, FETCH_APPEARANCE_LIST } from "../../redux/actions/appearance.action";

class AddAppearance extends Component {
  constructor(props) {
    super(props);

    if (this.props.route.params) {
      const { result } = this.props.route.params;
      this.result = result; // 0 失败；1 成功
    }

    // 回显数据
    this.data = this.props.route.params;
  }

  componentDidMount() {
    fetchRequest()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='外观检测'
          rightItemName='提交'
          rightClick={this.showModal}
          rightItemHidden={this.result == 1}
          leftClick={this.checkEdited}
        />
        {/* 基本信息 */}
          <BaseInfo ref={ref => this._baseInfo = ref} defaultState={this.data}/>
          <WhiteSpace size='xl' />
      </View>
    );
  }

  // 提交信息
  submitInfo = () => {
    const state = this._baseInfo.state;
    state.result = this.result; // 结果状态

    // fetchRequest('inputCarData', state).
    //   then(res => console.log(res)).
    //   catch((error) => console.log(error));

    if (state.ID) {
      this.props.addApearance(state);
    }

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
          color: '#666'
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

  // 弹框选择是否放弃修改
  showEditedModal = () => {
    const { navigation } = this.props;
    Modal.alert(
    <Text style={styles.modalTitle}>确定离开吗？</Text>, 
    <Text style={styles.modalContext}>您已经在当前页面进行数据修改，尚未保存，直接返回将丢失这些操作</Text>, 
    [{
        text: '确定返回',
        onPress: () => {navigation && navigation.goBack()},
        style: {
          textAlign: 'center',
          color: '#666'
        }
      },
      {
        text: '继续编辑',
        onPress: () => {},
        style: {
          textAlign: 'center',
          color: '#5695D2'
        }
      },
    ]);
  };  

  // 检查数据是否被修改
  checkEdited = () => {
    if (true) {
      this.showEditedModal()
    } else {
      const { navigation } = this.props;
        navigation && navigation.goBack();
    }
  }
}

const mapStateToProps = state => {
  return {
    list: state.appearance.list,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // 添加一条外观检测记录
    addApearance: params => {
      dispatch({
        type: ADD_APPEARANCE,
        payload: params
      });
    },
    // 获取数据列表
    fetchListSuccess: params => {
      dispatch({
        type: FETCH_APPEARANCE_LIST,
        payload: params,
      })
    }
  };
}

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 20,
    color: '#5695d2',
    margin: 3,
  },
  modalContext: {
    fontSize: 16,
    color: '#666',
    margin: 3,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAppearance);
