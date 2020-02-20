/** 
 * BaseInfo：用于录入流转单基本信息部分
*/
import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
} from "react-native";
import {
  InputItem,
  List,
  DatePicker,
  Provider,
  Picker,
  Checkbox,
} from '@ant-design/react-native';
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
      isOBD: false, // 是否有OBD
      isOBDnormal: false, // OBD灯是否正常
      checkMethod: 0, // 环保检测方法
      oilSupplyType: 0, // 供油方式
      improvedType: 0, // 是否改造
      airInflowType: 0, // 进气方式
      rpm: 0, // 转速
      power: 0, // 功率
      cylinder: 0, // 缸数
      displacement: 0, // 排量
    };
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

  // 改变state通用方法
  commonInputFunc = (value, stateProperty) => {
    const state = this.state;
    state[stateProperty] = value
    this.setState(state);
  }

  render() {
    return (
      <Provider>
        <List renderHeader={this.renderHeader}>
          {/* 车牌号 */}
          {this.renderInputItem(CONFIGINFO.licenseNum)}
          {/* 车辆出厂日期 */}
          <DatePicker
            value={this.state.productionDate}
            mode="date"
            defaultDate={new Date()}
            minDate={new Date(1970, 1, 1)}
            maxDate={new Date(2999, 12, 31)}
            onChange={this.inputProductionDate}
            format="YYYY-MM-DD"
          >
            <List.Item arrow="horizontal">车辆出厂日期</List.Item>
          </DatePicker>
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
          <List.Item
            extra={
              <View>
                <Checkbox
                  checked={this.state.isOBD}
                  onChange={event => {
                    this.setState({ isOBD: event.target.checked });
                  }}
                >
                  是
                </Checkbox>
              </View>
            }
          >
            是否有OBD
          </List.Item>
          {/* OBD灯是否正常 */}
          <List.Item
            extra={
              <View>
                <Checkbox
                  checked={this.state.isOBDnormal}
                  onChange={event => {
                    this.setState({ isOBDnormal: event.target.checked });
                  }}
                >
                  是
                </Checkbox>
              </View>
            }
          >
            OBD灯是否正常
          </List.Item>
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
        </List>
      </Provider>
    );
  }

  // section header 标题
  renderHeader = () => {
    return (
      <Text style={styles.listHeader}>基本信息</Text>
    );
  }

  // 输入车辆出厂日期
  inputProductionDate = productionDate => {
    this.setState({ productionDate });
  }; 
}

const styles = StyleSheet.create({
  listHeader: {
    padding: 10,
    fontSize: 18,
    color: '#999',
  },
  switch: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: 'red'
  },
  inputExtra: {
    width: 40,
    color: '#666',
    textAlign: 'right',
  }
});

export default BaseInfo;