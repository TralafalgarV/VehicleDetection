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
} from "react-native";
import {
  InputItem,
  List,
  DatePicker,
  Provider,
  Picker,
  Modal,
} from '@ant-design/react-native';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import { CONFIGINFO } from "./config";
import moment from 'moment';

class BaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  // section header 标题
  renderHeader = (title) => {
    return (
      <Text style={styles.listHeader}>{title}</Text>
    );
  }

  // 渲染通用选择器组件
  renderDatePicker = config => {
    // 数据保护
    const selectedTime = this.state[config.stateProperty] ? 
                          moment(this.state[config.stateProperty], 'YYYYMMDD').toDate() : 
                          '';
    return (
      <DatePicker
        value={selectedTime}
        mode="date"
        defaultDate={new Date()}
        minDate={new Date(1970, 1, 1)}
        maxDate={new Date(2999, 12, 31)}
        onChange={(value) => {
          const time = moment(value).format('YYYYMMDD');
          this.commonInputFunc(time, config.stateProperty);
        }}
        format="YYYY-MM-DD"
      >
        <List.Item arrow="horizontal">
          <Text style={styles.title}>{config.title}</Text>
        </List.Item>
      </DatePicker>
    );
  }

  // 渲染输入组件通用方法
  renderInputItem = config => {
    const extra = config.extra ? <Text style={styles.inputExtra}>{config.extra}</Text> : null;
    return (
      <InputItem
        clear
        textAlign='right'
        value={this.state[config.stateProperty]}
        onChange={value => {
          this.commonInputFunc(value, config.stateProperty);
        }}
        placeholder={config.placeholder}
        placeholderTextColor='#999'
        extra={extra}
        labelNumber={config.labelNumber ? config.labelNumber : 8}
      >
        <Text style={styles.title}>{config.title}</Text>
      </InputItem>
    );
  }

  // 渲染通用选择组件
  renderRadioList = config => {
    return (
      <Picker
        data={config.options}
        cols={1}
        value={[this.state[config.stateProperty]]}
        extra={config.extra}
        onChange={values => {
          if (values instanceof Array && values.length >= 1) {
            const value = values[0];
            this.commonInputFunc(value, config.stateProperty);
          }
        }}
      >
        <List.Item arrow="horizontal">
          <Text style={styles.title}>{config.title}</Text>
        </List.Item>
      </Picker>      
    );
  }

  // 渲染单选列表
  renderRadioList = config => {
    return (
      <List.Item>
        <View style={styles.radioListContainer}>
          <Text style={styles.title}>{config.title}</Text>
          <View style={styles.radioListExtra}>
          {
            config.options && config.options.map(item => {
              // 判断 item 是否被选中
              const selectd = this.state[config.stateProperty] == item.value;
              return (
                <TouchableWithoutFeedback 
                  key={item.value}
                  onPress={() => {
                    this.commonInputFunc(item.value, config.stateProperty);
                  }}
                >
                  <View style={[styles.selectionItem, selectd && styles.selectedItem]}>
                    <Text style={[styles.tagText, selectd && {color: '#fff'}]}>{item.label}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )
            })
          }
          </View>
        </View>
      </List.Item>
    );
  }

  // 渲染输入列表组件
  renderInputList = config => {
    return (
      <List.Item>
        <View style={styles.radioListContainer}>
          <Text style={styles.title }>{config.title}</Text>
          <View style={styles.radioListExtra}>
          {
            config.options && config.options.map(item => {
              return (
                <TextInput 
                  key={item.label}
                  style={styles.inputItem}
                  onChangeText={(value) => {
                    this.commonInputFunc(value, item.property);
                  }}
                  placeholder={item.label}
                  placeholderTextColor='#666'
                />
              )
            })
          }
          </View>
        </View>
      </List.Item>
    );
  }

  // 改变state通用方法
  commonInputFunc = (value, stateProperty) => {
    const state = this.state;
    state[stateProperty] = value
    this.setState(state, () => console.log(this.state));
  }

  render() {
    return (
      <Provider>
        <KeyboardAwareScrollView>
          <List renderHeader={this.renderHeader('基本信息')}>
          {/* 检验日期 */}
          {this.renderDatePicker(CONFIGINFO.checkDate)}
          {/* 车牌号 */}
          {this.renderInputItem(CONFIGINFO.ID)}
          {/* 车辆出厂日期 */}
          {this.renderDatePicker(CONFIGINFO.productionDate)}
          {/* 里程表读数 */}
          {this.renderInputItem(CONFIGINFO.mileage)}
          {/* 检验类别 */}
          {this.renderRadioList(CONFIGINFO.checkType)}
          {/* {this.renderRadioList(CONFIGINFO.checkType)} */}
          {/* 传动装置 */}
          {this.renderRadioList(CONFIGINFO.driverType)}
          {/* 变速箱 */}
          {this.renderRadioList(CONFIGINFO.gearboxType)}   
          {/* 燃油类别 */}
          {this.renderRadioList(CONFIGINFO.oilType)}            
          {/* 车辆用处 */}
          {this.renderRadioList(CONFIGINFO.useType)}
          {/* 是否有OBD */}
          {this.renderRadioList(CONFIGINFO.isOBD)}
          {/* OBD灯是否正常 */}
          {this.renderRadioList(CONFIGINFO.isOBDnormal)}
          {/* 环保检测方法 */}
          {this.renderRadioList(CONFIGINFO.checkMethod)}          
          {/* 供油方式 */}
          {this.renderRadioList(CONFIGINFO.oilSupplyType)}
          {/* 是否改造 */}
          {this.renderRadioList(CONFIGINFO.improvedType)}
          {/* 进气方式 */}
          {this.renderRadioList(CONFIGINFO.airInflowType)}
          {/* 转速 */}
          {this.renderInputItem(CONFIGINFO.rpm)}
          {/* 功率 */}
          {this.renderInputItem(CONFIGINFO.power)} 
          {/* 缸数 */}
          {this.renderInputItem(CONFIGINFO.cylinder)} 
          {/* 排量 */}
          {this.renderInputItem(CONFIGINFO.displacement)}      
          {/* 车辆机械状况 start*/}
          {this.renderRadioList(CONFIGINFO.machineStatus)}
          {this.renderRadioList(CONFIGINFO.instrument)}
          {this.renderRadioList(CONFIGINFO.mechanicalFailure)}
          {this.renderRadioList(CONFIGINFO.exhaustPollutionFailure)}
          {this.renderRadioList(CONFIGINFO.crankcaseVentilate)}
          {this.renderRadioList(CONFIGINFO.fuelTankAndOils)}
          {this.renderRadioList(CONFIGINFO.engine_gearbox_coolingSystem)}
          {this.renderRadioList(CONFIGINFO.dry_clean_airPressure)}
          {this.renderRadioList(CONFIGINFO.oilEvaporation)}
          {this.renderRadioList(CONFIGINFO.burningEngineOil)}
          {this.renderRadioList(CONFIGINFO.ars_esp_epc_aeb)}
          {this.renderRadioList(CONFIGINFO.closeAirConditionerOrWarmBraw)}
          {/* 车辆机械状况 end*/}
          {/* 外地车发动机型号 */}
          {this.renderInputItem(CONFIGINFO.outOfTownEngineModel)}
          {/* 制造厂商 */}
          {this.renderInputItem(CONFIGINFO.manufacturer)}
          {/* 催化剂型号 */}
          {this.renderInputList(CONFIGINFO.catalystType)}
          {/* 柴油车DPF */}
          {this.renderInputItem(CONFIGINFO.DPF)}
          {/* SCR */}
          {this.renderInputItem(CONFIGINFO.SCR)}
          </List>
        </KeyboardAwareScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#222',
    fontSize: 18,
    textAlignVertical: 'center',
  },
  listHeader: {
    padding: 10,
    fontSize: 18,
    color: '#999',
  },
  switch: {
    flexDirection: 'row',
    margin: 10,
  },
  inputExtra: {
    width: 40,
    color: '#222',
    textAlign: 'right',
  },
  radioListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioListExtra: {
    flexDirection: 'row'
  },
  selectedItem: {
    borderColor: '#5695d2',
    backgroundColor: '#5695d2'
  },
  tagText: {
    fontSize: 16,
    color: '#222',
  },
  selectionItem: {
    overflow: 'hidden',
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderColor: '#999',
    marginRight: 0,
  },
  inputItem: {
    height: 40,
    width: 100,
    borderColor: '#999',
    borderWidth: 1.5,
    marginLeft: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 16,
    color: '#222',
  },
});

export default BaseInfo;