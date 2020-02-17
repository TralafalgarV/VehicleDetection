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
import {
  checkTypeArr,
  driverTypeArr,
  gearboxTypeArr,
  oilTypeArr,
  useTypeArr,
} from "./config";

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
    };
  }

  render() {
    const {
      licenseNum,
      productionDate,
      mileage,
      checkType,
      driverType,
      gearboxType,
      oilType,
      useType,
      isOBD,
      isOBDnormal,
      checkMethod,
      oilSupplyType,
    } = this.state;

    return (
      <Provider>
        <List renderHeader={this.renderHeader}>
          {/* 车牌号 */}
          <InputItem
            clear
            textAlign='right'
            value={licenseNum}
            onChange={this.inputLicenseNum}
            // extra="元"
            placeholder="请输入车牌号"
          >
            号码号牌
          </InputItem>
          {/* 车辆出厂日期 */}
          <DatePicker
            value={productionDate}
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
          <InputItem
            style={{width: 100}}
            clear
            textAlign='right'
            value={mileage}
            onChange={this.inputMileage}
            // extra="元"
            placeholder="请输里程表读数"
          >
            里程表读数
          </InputItem>
          {/* 检验类别 */}
          <Picker
            data={checkTypeArr}
            cols={1}
            value={[checkType]}
            onChange={this.selectCheckType}
          >
            <List.Item arrow="horizontal">检验类别</List.Item>
          </Picker>
          {/* 传动装置 */}
          <Picker
            data={driverTypeArr}
            cols={1}
            value={[driverType]}
            onChange={this.selectDriverType}
          >
            <List.Item arrow="horizontal">传动装置</List.Item>
          </Picker>
          {/* 变速箱 */}
          <Picker
            data={gearboxTypeArr}
            cols={1}
            value={[gearboxType]}
            onChange={this.selectGearboxType}
          >
            <List.Item arrow="horizontal">变速箱</List.Item>
          </Picker>     
          {/* 燃油类别 */}
          <Picker
            data={oilTypeArr}
            cols={1}
            value={[oilType]}
            onChange={this.selectOilType}
          >
            <List.Item arrow="horizontal">燃油类别</List.Item>
          </Picker>            
          {/* 车辆用处 */}
          <Picker
            data={useTypeArr}
            cols={1}
            value={[useType]}
            onChange={this.selectUseType}
          >
            <List.Item arrow="horizontal">车辆用处</List.Item>
          </Picker> 
          {/* 是否有OBD */}
          <List.Item
            extra={
              <View>
                <Checkbox
                  checked={this.state.checkboxItem1}
                  onChange={event => {
                    this.setState({ checkboxItem1: event.target.checked });
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
                  checked={this.state.checkboxItem1}
                  onChange={event => {
                    this.setState({ checkboxItem1: event.target.checked });
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
          {/* 供油方式 */}
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

  // 输入车牌号
  inputLicenseNum = licenseNum => {
    this.setState({ licenseNum });
  }

  // 输入车辆出厂日期
  inputProductionDate = productionDate => {
    this.setState({ productionDate });
  };

  // 输入里程表读数
  inputMileage = mileage => {
    this.setState({ mileage });
  }

  // 选择检验类别
  selectCheckType = values => {
    if (values instanceof Array && values.length >= 1) {
      value = values[0];
      this.setState({ checkType: value});
    }
  }

  // 选择传动装置
  selectDriverType = values => {
    if (values instanceof Array && values.length >= 1) {
      value = values[0];
      this.setState({ driverType: value});
    }
  }

  // 选择变速箱
  selectGearboxType = values => {
    if (values instanceof Array && values.length >= 1) {
      value = values[0];
      this.setState({ gearboxType: value});
    }
  }

  // 选择燃油类别
  selectOilType = values => {
    if (values instanceof Array && values.length >= 1) {
      value = values[0];
      this.setState({ oilType: value});
    }
  }  

    // 选择车辆用途
    selectUseType = values => {
      if (values instanceof Array && values.length >= 1) {
        value = values[0];
        this.setState({ useType: value});
      }
    } 
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
  }
});

export default BaseInfo;