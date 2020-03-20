/** 
 * 录入外观检测基本信息
*/
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from "react-native";
import {
  List,
  Provider,
} from '@ant-design/react-native';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import { CONFIGINFO } from "./config";
import ImagePicker from 'react-native-image-picker';
import DatePickerItem from "../../../../common/ListItem/DatePickerItem";
import ListInputItem from "../../../../common/ListItem/ListInputItem";
import RadioListItem from "../../../../common/ListItem/RadioListItem";
import InputList from "../../../../common/ListItem/InputList";

class BaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, {
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
      
      machineStatus: 0, // 车辆机械状况
      instrument: 0, // 车上仪表
      mechanicalFailure: 0, // 影响安全或引起测试偏差的机械故障
      exhaustPollutionFailure: 0, // 排气污染控制装置、泄露
      crankcaseVentilate: 0, // 曲轴箱通风系统
      fuelTankAndOils: 0, // 车辆油箱油品
      engine_gearbox_coolingSystem: 0, // 发动机、变速箱和冷却系统等有无泄露
      dry_clean_airPressure: 0, // 排气污染控制装置、泄露
      oilEvaporation: 0, // 燃油蒸发控制系统
      burningEngineOil: 0, // 烧机油或严重冒烟
      ars_esp_epc_aeb: 0, // 中断ARS、ESP、EPC牵引力控制或自动制动系统等
      closeAirConditionerOrWarmBraw: 0, // 关闭空调、暖风等附属设备
    }, this.props.defaultState);

    console.log('回显', this.props.defaultState);
  }

  render() {
    return (
      <Provider>
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
          {/* 车辆机械状况 start*/}
          <RadioListItem config={CONFIGINFO.machineStatus} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.instrument} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.mechanicalFailure} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.exhaustPollutionFailure} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.crankcaseVentilate} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.fuelTankAndOils} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.engine_gearbox_coolingSystem} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.dry_clean_airPressure} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.oilEvaporation} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.burningEngineOil} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.ars_esp_epc_aeb} state={this.state} onChange={this.commonInputFunc} />
          <RadioListItem config={CONFIGINFO.closeAirConditionerOrWarmBraw} state={this.state} onChange={this.commonInputFunc} />
          {/* 车辆机械状况 end*/}
          {/* 外地车发动机型号 */}
          <ListInputItem config={CONFIGINFO.outOfTownEngineModel} state={this.state} onChange={this.commonInputFunc} />
          {/* 制造厂商 */}
          <ListInputItem config={CONFIGINFO.displacement} state={this.state} onChange={this.commonInputFunc} />
          {/* 催化剂型号 */}
          <InputList config={CONFIGINFO.catalystType} state={this.state} onChange={this.commonInputFunc} />
          {/* 柴油车DPF */}
          <ListInputItem config={CONFIGINFO.displacement} state={this.state} onChange={this.commonInputFunc} />
          {/* SCR */}
          <ListInputItem config={CONFIGINFO.displacement} state={this.state} onChange={this.commonInputFunc} />
          {/* 图片选择器 */}
          <List.Item>
            <TouchableWithoutFeedback onPress={this.showImagePicker}>
              <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
            </TouchableWithoutFeedback>
          </List.Item>
          </List>
        </KeyboardAwareScrollView>
      </Provider>
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

  // 图片选择器
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
  }
});

export default BaseInfo;