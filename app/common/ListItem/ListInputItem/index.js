import React from 'react';
import {
  Text,
  StyleSheet,
} from "react-native";
import {
  InputItem,
} from '@ant-design/react-native';

/**
 * 定制List组件的输入组件
 * @param config = {
    title: '号码号牌',
    stateProperty: 'ID',
    type: 'input',
    placeholder: '请输入车牌号',
  }
 * @param state 父组件的 state
 */
 export default ListInputItem = ({config, state, onChange}) => {
  const extra = config.extra ? <Text style={styles.inputExtra}>{config.extra}</Text> : null;
  return (
    <InputItem
      key={config.stateProperty}
      clear
      textAlign='right'
      value={state[config.stateProperty]}
      onChange={value => {
        if (onChange instanceof Function) {
          onChange(value, config.stateProperty);
        }
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

const styles = StyleSheet.create({
  title: {
    color: '#222',
    fontSize: 18,
    textAlignVertical: 'center',
  },
  inputExtra: {
    width: 40,
    color: '#222',
    textAlign: 'right',
  }
})