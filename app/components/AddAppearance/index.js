/** 
 * 外观检测单信息录入组件
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import HeaderBar from "../../common/HeaderBar";
import { WhiteSpace, Toast, Modal, List } from '@ant-design/react-native';
import { fetchRequest } from "../../utils/fetchUtils";
import {
  ADD_APPEARANCE,
  CLEAR_APPEARANCE_INFO
} from "../../redux/actions/appearance.action";

const itemArr = [
  {
    key: 'base',
    name: '基础外观检验项目',
  },
  {
    key: 'env',
    name: '环保外观检验项目',
  },
  {
    key: 'sec',
    name: '安检外观检验项目',
  },    
];

class AddAppearance extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseInfo: this.props.baseInfo,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.baseInfo !== nextProps.baseInfo) {
      return { baseInfo: nextProps.baseInfo };
    } else {
      return null;
    }
  }

  // 渲染外观检测单项目列表
  renderItem = data => {
    let status = '';
    let color = '#fff';
    const {
      baseResult, // 基础检测结果
      envResult,  // 环保检测结果
    } = this.state.baseInfo;

    switch (data.key) {
      case 'base':
        status = baseResult ? '已通过' : '不通过';
        color = baseResult ? '#5695D2' : '#ED5655';
        break;
      case 'env':
        status = envResult ? '已通过' : '不通过';
        color = envResult ? '#5695D2' : '#ED5655';
      default:
        break;
    }

    return (
      <TouchableWithoutFeedback key={data.key} onPress={() => this.navToDetectDetail(data.key)}>
        <View style={styles.listItem} >
          <Text style={styles.text}>{data.name}</Text>
          <Text style={[styles.status, {color}]}>{status}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='外观检测'
          rightItemName='提交'
          rightClick={this.showModal}
          leftClick={this.checkEdited}
        />
          { itemArr.map(this.renderItem) }
          <WhiteSpace size='xl' />
      </View>
    );
  }

  // 跳转到检测项目详情页
  navToDetectDetail = (key) => {
    const { navigation } = this.props;

    if (!navigation) return;

    switch (key) {
      case 'base':
        navigation.navigate('BaseDetailInfo');
        break;
      case 'env':
        navigation.navigate('EnvDetailInfo');
        break;
      case 'sec':
        navigation.navigate('SecDetailInfo');
        break;
      default:
        break;
    }
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

  // 选择弹框选项
  resultPress = result => {
    this.result = result;
    this.submitInfo();
  }

  // 提交信息
  submitInfo = () => {
    const state = Object.assign({}, this.props.baseInfo);
    state.result = this.result; // 结果状态

    // mock
    Toast.loading('正在提交', 0.5, () => {
      Toast.success('提交成功', 0.5, ()=> {
        const { navigation } = this.props;
        navigation && navigation.navigate('AppearanceList');

        // [TEMP]将外观数据存储到 redux 中
        this.props.addApearance(state);

        // 清除当前记录的流转单数据
        this.props.clearAppearanceInfo();
      }, true);
    }, true);

    // 
    // fetchRequest(ADD_APPEARANCE, state).
    //   then(res => {
    //     console.log(res);
    //     Toast.success('提交成功', 0.5, ()=> {
    //       const { navigation } = this.props;
    //       navigation && navigation.navigate('AppearanceList');
    //     }, true);
    //   }).
    //   catch(error => console.log(error));
  }  

/**
   * 检查数据是否被修改
   * @memberof BaseDetailInfo
   */  
  checkEdited = () => {
    if (true) {
      this.showEditedModal()
    } else {
      const { navigation } = this.props;
        navigation && navigation.goBack();
    }
  }  

  // 弹框选择是否放弃修改
  showEditedModal = () => {
    const { navigation } = this.props;
    Modal.alert(
    <Text style={styles.modalTitle}>确定离开吗？</Text>, 
    <Text style={styles.modalContext}>您已经在当前页面进行数据修改，且尚未提交，直接返回将丢失这些数据</Text>, 
    [{
        text: '确定返回',
        onPress: () => {
          navigation && navigation.goBack();
          // 清除当前记录的流转单数据
          this.props.clearAppearanceInfo();
        },
        style: {
          textAlign: 'center',
          color: '#666'
        }
      },
      {
        text: '我再看看',
        onPress: () => {},
        style: {
          textAlign: 'center',
          color: '#5695D2'
        }
      },
    ]);
  };  
}

const mapStateToProps = state => {
  return {
    baseInfo: state.appearance.baseInfo,
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
    // 清除基本外观数据
    clearAppearanceInfo: () => {
      dispatch({
        type: CLEAR_APPEARANCE_INFO,
      });
    },
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  status: {
    fontSize: 22,
    color: '#666',
  },
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
  listItem: {
    height: 80,
    marginTop: 10,
    marginHorizontal: 14,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
  },
  text: {
    fontSize: 22,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAppearance);
