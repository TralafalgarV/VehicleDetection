/** 
 * 基本外观检测信息
*/
import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
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
import ImagePicker from 'react-native-image-picker';
import DatePickerItem from "../../../../common/ListItem/DatePickerItem";
import ListInputItem from "../../../../common/ListItem/ListInputItem";
import RadioListItem from "../../../../common/ListItem/RadioListItem";
import InputList from "../../../../common/ListItem/InputList";
import { MERGE_APPEARANCE_INFO } from "../../../../redux/actions/appearance.action";

class BaseDetailInfo extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      productionDate: '', // 出厂日期
      checkDate: '', // 检测日期

      ID: '', // 车牌号
      mileage: '', // 里程表读数
      rpm: '', // 转速
      power: '', // 功率
      cylinder: '', // 缸数
      displacement: '', // 排量
      outOfTownEngineModel: '', // 外地车发动机型号
      manufacturer: '', // 制造厂商
      catalystType_Front: '', // 催化剂型号
      catalystType_End: '', // 催化剂型号
      catalystType_Left: '', // 催化剂型号
      catalystType_Right: '', // 催化剂型号
      DPF: '', // 柴油车DPF
      SCR: '', // SCR

      checkType: 0, // 检验类别
      driverType: 0, // 传动装置
      gearboxType: 0, // 变速箱
      oilType: 0, // 燃油类别
      useType: 0, // 车辆用处
      checkMethod: 0, // 环保检测方法
      oilSupplyType: 0, // 供油方式
      improvedType: 0, // 是否改造
      airInflowType: 0, // 进气方式

      isOBD: 1, // 是否有OBD
      isOBDnormal: 1, // OBD灯是否正常
      
      baseResult: 0, // 0 通过； 1：未通过
    }, this.props.baseInfo);

    console.log('回显 BaseDetailInfo ==> ', this.props.baseInfo);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='基础外观检验项目'
          rightItemName='保存'
          rightClick={this.showModal}
          leftClick={this.checkEdited}
        />      
        <KeyboardAwareScrollView>
          <List renderHeader={this.renderHeader('基本信息')}>
          {/* 检验日期 */}
          <DatePickerItem config={CONFIGINFO.checkDate} state={this.state} onChange={this.commonInputFunc} />
          {/* 车牌号 */}
          <ListInputItem config={CONFIGINFO.ID} state={this.state} onChange={this.commonInputFunc} />
          {/* 车辆出厂日期 */}
          <DatePickerItem config={CONFIGINFO.productionDate} state={this.state} onChange={this.commonInputFunc}/>
          {/* 里程表读数 */}
          <ListInputItem config={CONFIGINFO.mileage} state={this.state} onChange={this.commonInputFunc} />
          {/* 检验类别 */}
          <RadioListItem config={CONFIGINFO.checkType} state={this.state} onChange={this.commonInputFunc} />
          {/* 传动装置 */}
          <RadioListItem config={CONFIGINFO.driverType} state={this.state} onChange={this.commonInputFunc} />
          {/* 变速箱 */}
          <RadioListItem config={CONFIGINFO.gearboxType} state={this.state} onChange={this.commonInputFunc} />
          {/* 燃油类别 */}
          <RadioListItem config={CONFIGINFO.oilType} state={this.state} onChange={this.commonInputFunc} />           
          {/* 车辆用处 */}
          <RadioListItem config={CONFIGINFO.useType} state={this.state} onChange={this.commonInputFunc} />           
          {/* 是否有OBD */}
          <RadioListItem config={CONFIGINFO.isOBD} state={this.state} onChange={this.commonInputFunc} />           
          {/* OBD灯是否正常 */}
          <RadioListItem config={CONFIGINFO.isOBDnormal} state={this.state} onChange={this.commonInputFunc} />
          {/* 环保检测方法 */}
          <RadioListItem config={CONFIGINFO.checkMethod} state={this.state} onChange={this.commonInputFunc} />
          {/* 供油方式 */}
          <RadioListItem config={CONFIGINFO.oilSupplyType} state={this.state} onChange={this.commonInputFunc} />
          {/* 是否改造 */}
          <RadioListItem config={CONFIGINFO.improvedType} state={this.state} onChange={this.commonInputFunc} />
          {/* 进气方式 */}
          <RadioListItem config={CONFIGINFO.airInflowType} state={this.state} onChange={this.commonInputFunc} />
          {/* 转速 */}
          <ListInputItem config={CONFIGINFO.rpm} state={this.state} onChange={this.commonInputFunc} />
          {/* 功率 */}
          <ListInputItem config={CONFIGINFO.power} state={this.state} onChange={this.commonInputFunc} />
          {/* 缸数 */}
          <ListInputItem config={CONFIGINFO.cylinder} state={this.state} onChange={this.commonInputFunc} />
          {/* 排量 */}
          <ListInputItem config={CONFIGINFO.displacement} state={this.state} onChange={this.commonInputFunc} />
          {/* 外地车发动机型号 */}
          <ListInputItem config={CONFIGINFO.outOfTownEngineModel} state={this.state} onChange={this.commonInputFunc} />
          {/* 制造厂商 */}
          <ListInputItem config={CONFIGINFO.manufacturer} state={this.state} onChange={this.commonInputFunc} />
          {/* 催化剂型号 */}
          <InputList config={CONFIGINFO.catalystType} state={this.state} onChange={this.commonInputFunc} />
          {/* 柴油车DPF */}
          <ListInputItem config={CONFIGINFO.DPF} state={this.state} onChange={this.commonInputFunc} />
          {/* SCR */}
          <ListInputItem config={CONFIGINFO.SCR} state={this.state} onChange={this.commonInputFunc} />
          {/* 图片选择器 */}
          <List.Item>
            <TouchableWithoutFeedback onPress={this.showImagePicker}>
              <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
            </TouchableWithoutFeedback>
          </List.Item>
          </List>
          <WhiteSpace size='xl' />
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
   * 图片选择器
   * @memberof BaseDetailInfo
   */
  showImagePicker = () => {
    const options = {
      title: '请选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '从相册选择',
      quality: 0.5,
      maxWidth: 300,
      maxHeight: 300,
      storageOptions: {
        skipBackup: true,
        path: 'car_images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
    
        this.setState({
          avatarSource: source,
        });
      }
    });
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
    // 参数校验
    if (!this.state.ID) {
      Toast.fail('车牌ID不能为空');
      return;
    }

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
    this.submitInfo(result);
  }

  // 提交信息
  submitInfo = (result) => {
    const state = Object.assign({}, this.state, {
      baseResult: result
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
  uploadAvatar: {
    width: 30,
    height: 30,
    backgroundColor: '#DDD'
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

export default connect(mapStateToProps, mapDispatchToProps)(BaseDetailInfo);
