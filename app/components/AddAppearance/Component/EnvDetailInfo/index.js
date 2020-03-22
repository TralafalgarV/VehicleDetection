/** 
 * 环保外观检测信息
*/
import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  View,
} from "react-native";
import {
  List,
  Modal,
  Toast,
  WhiteSpace,
} from '@ant-design/react-native';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import HeaderBar from "../../../../common/HeaderBar";
import { CONFIGINFO } from "./config";
import RadioListItem from "../../../../common/ListItem/RadioListItem";
import { MERGE_APPEARANCE_INFO } from "../../../../redux/actions/appearance.action";

class EnvDetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      machineStatus: 1, // 车辆机械状况
      instrument: 1, // 车上仪表
      mechanicalFailure: 1, // 影响安全或引起测试偏差的机械故障
      exhaustPollutionFailure: 1, // 排气污染控制装置、泄露
      crankcaseVentilate: 1, // 曲轴箱通风系统
      fuelTankAndOils: 1, // 车辆油箱油品
      engine_gearbox_coolingSystem: 1, // 发动机、变速箱和冷却系统等有无泄露
      dry_clean_airPressure: 1, // 排气污染控制装置、泄露
      oilEvaporation: 1, // 燃油蒸发控制系统
      burningEngineOil: 1, // 烧机油或严重冒烟
      ars_esp_epc_aeb: 1, // 中断ARS、ESP、EPC牵引力控制或自动制动系统等
      closeAirConditionerOrWarmBraw: 1, // 关闭空调、暖风等附属设备
      engineBurningSystem: 1, // 发动机燃烧系统采用电控泵（柴）
      env_isOBD: 1, // 是否带 OBD 系统
      isTirePressure: 1, // 轮胎气压是否正常
      isTireDryAndClean: 1, // 轮胎是否干燥、清洁
      isWorkingCondition: 1, // 是否适合工况法检测
      envResult: 1, // 环保外观检测结果 0失败； 1成功
    }, this.props.baseInfo);

    console.log('回显 EnvDetailInfo ==> ', this.props.baseInfo);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='环保外观检验项目'
          rightItemName='保存'
          rightClick={this.showModal}
          leftClick={this.checkEdited}
        />      
        <KeyboardAwareScrollView>
          <List renderHeader={this.renderHeader('不合格项点击：否  ( * 表示: 否决项 )')}>
            <RadioListItem config={CONFIGINFO.machineStatus} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.exhaustPollutionFailure} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.burningEngineOil} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.crankcaseVentilate} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.engineBurningSystem} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.oilEvaporation} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.instrument} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.mechanicalFailure} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.dry_clean_airPressure} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.engine_gearbox_coolingSystem} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.env_isOBD} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.isTirePressure} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.isTireDryAndClean} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.closeAirConditionerOrWarmBraw} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.ars_esp_epc_aeb} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.fuelTankAndOils} state={this.state} onChange={this.commonInputFunc} />
            <RadioListItem config={CONFIGINFO.isWorkingCondition} state={this.state} onChange={this.commonInputFunc} />
          </List>
          <WhiteSpace />
        </KeyboardAwareScrollView>
      </View>
    );
  }

  // section header 标题
  renderHeader = (title) => {
    return (
      <Text style={styles.listHeader}>{title}</Text>
    );
  }

  // 改变state通用方法
  commonInputFunc = (value, stateProperty) => {
    const state = this.state;
    state[stateProperty] = value;
    this.setState(state, () => console.log(this.state));
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
    <Text style={styles.modalContext}>您已经在当前页面进行数据修改，尚未保存，直接返回将丢失这些操作</Text>, 
    [{
        text: '确定返回',
        onPress: () => {
          navigation && navigation.goBack();
        },
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

  /**
   * 弹框选择是否通过
   * @memberof BaseDetailInfo
   */
  showModal = () => {
    // TODO 参数校验

    // 0 未通过；1 已通过
    Modal.alert(
    <Text style={styles.modalTitle}>环保外观检测结果</Text>, 
    <Text style={styles.modalContext}>环保外观检测是否已通过？</Text>, 
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
    this.submitInfo(result);
  }

  // 提交信息
  submitInfo = (result) => {
    const state = Object.assign({}, this.state, {
      envResult: result
    });

    // mock
    Toast.loading('正在提交', 0.5, () => {
      // 将基本外观数据合并到 redux 中
      this.props.mergeApearanceInfo(state);

      Toast.success('提交成功', 0.5, ()=> {
        const { navigation } = this.props;
          navigation && navigation.goBack();
        }, true);
    }, true);
  }  
}

const mapStateToProps = state => {
  return {
    baseInfo: state.appearance.baseInfo,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    // 合并外观检测数据
    mergeApearanceInfo: params => {
      dispatch({
        type: MERGE_APPEARANCE_INFO,
        payload: params
      });
    }
  };
}

const styles = StyleSheet.create({
  listHeader: {
    padding: 10,
    fontSize: 18,
    color: '#999',
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
});

export default connect(mapStateToProps, mapDispatchToProps)(EnvDetailInfo);
