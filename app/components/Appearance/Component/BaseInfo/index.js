/** 
 * BaseInfo：用于录入流转单基本信息部分
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
} from '@ant-design/react-native';
import {
  KeyboardAwareScrollView
} from 'react-native-keyboard-aware-scroll-view';
import { CONFIGINFO } from "./config";

class BaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      licenseNum: '', // 车牌号
      productionDate: '', // 出厂日期
      mileage: '', // 里程表读数
      checkType: 0, // 检验类别
      driverType: 0, // 传动装置
      gearboxType: 0, // 变速箱
      oilType: 0, // 燃油类别
      useType: 0, // 车辆用处
      isOBD: 1, // 是否有OBD
      isOBDnormal: 1, // OBD灯是否正常
      checkMethod: 0, // 环保检测方法
      oilSupplyType: 0, // 供油方式
      improvedType: 0, // 是否改造
      airInflowType: 0, // 进气方式
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
    return (
      <DatePicker
        value={this.state[config.stateProperty]}
        mode="date"
        defaultDate={new Date()}
        minDate={new Date(1970, 1, 1)}
        maxDate={new Date(2999, 12, 31)}
        onChange={(value) => {
          this.commonInputFunc(value, config.stateProperty);
        }}
        format="YYYY-MM-DD"
      >
        <List.Item arrow="horizontal">{config.title}</List.Item>
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
        extra={extra}
        labelNumber={config.labelNumber ? config.labelNumber : 6}
      >
        {config.title}
      </InputItem>
    );
  }

  // 渲染通用选择组件
  renderPickerItem = config => {
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
        <List.Item arrow="horizontal">{config.title}</List.Item>
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
              const selectd = this.state[config.stateProperty] == item.value;
              return (
                <TouchableWithoutFeedback 
                  key={item.value}
                  onPress={() => {
                    this.commonInputFunc(item.value, config.stateProperty);
                  }}
                >
                  <View style={[styles.selectionItem, selectd && {borderColor: '#5695d2'}]}>
                    <Text style={styles.tagText}>{item.label}</Text>
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
          {this.renderInputItem(CONFIGINFO.licenseNum)}
          {/* 车辆出厂日期 */}
          {this.renderDatePicker(CONFIGINFO.productionDate)}
          {/* 里程表读数 */}
          {this.renderInputItem(CONFIGINFO.mileage)}
          {/* 检验类别 */}
          {this.renderPickerItem(CONFIGINFO.checkType)}
          {/* 传动装置 */}
          {this.renderPickerItem(CONFIGINFO.driverType)}
          {/* 变速箱 */}
          {this.renderPickerItem(CONFIGINFO.gearboxType)}   
          {/* 燃油类别 */}
          {this.renderPickerItem(CONFIGINFO.oilType)}            
          {/* 车辆用处 */}
          {this.renderPickerItem(CONFIGINFO.useType)}
          {/* 是否有OBD */}
          {this.renderRadioList(CONFIGINFO.isOBD)}
          {/* OBD灯是否正常 */}
          {this.renderRadioList(CONFIGINFO.isOBDnormal)}
          {/* 环保检测方法 */}
          {this.renderPickerItem(CONFIGINFO.checkMethod)}          
          {/* 供油方式 */}
          {this.renderPickerItem(CONFIGINFO.oilSupplyType)}
          {/* 是否改造 */}
          {this.renderPickerItem(CONFIGINFO.improvedType)}
          {/* 进气方式 */}
          {this.renderPickerItem(CONFIGINFO.airInflowType)}
          {/* 转速 */}
          {this.renderInputItem(CONFIGINFO.rpm)}
          {/* 功率 */}
          {this.renderInputItem(CONFIGINFO.power)} 
          {/* 缸数 */}
          {this.renderInputItem(CONFIGINFO.cylinder)} 
          {/* 排量 */}
          {this.renderInputItem(CONFIGINFO.displacement)}      
          {/* 车辆机械状况 */}
          {/* 车上仪表 */}
          {/* 影响安全或引起测试偏差的机械故障 */}
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
    color: '#000',
    fontSize: 17,
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
    color: '#666',
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
  tagText: {
    fontSize: 14,
    color: '#222',
  },
  selectionItem: {
    overflow: 'hidden',
    borderRadius: 3,
    borderWidth: 0.5,
    borderStyle: 'solid',
    paddingVertical: 6,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  inputItem: {
    height: 40,
    width: 100,
    borderColor: '#999',
    borderWidth: 1.5,
    marginLeft: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontSize: 14,
    color: '#222',
  },
});

export default BaseInfo;