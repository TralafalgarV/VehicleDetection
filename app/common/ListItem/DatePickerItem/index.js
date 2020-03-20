import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from "react-native";
import {
  List,
  DatePicker,
} from '@ant-design/react-native';
import moment from 'moment';

/**
 * 定制List组件的日期选择器
 * @param config = {
    title: '检验日期',
    stateProperty: 'checkDate',
    type: 'datePicker',
    placeholder: '请选择检验日期',
  }
 * @param state 父组件的 state
 */
export default DatePickerItem = ({config, state, onChange}) => {
  if (!config || !state) {
    return <View />;
  }

  // 数据保护
  const selectedTime = state[config.stateProperty] ? 
                        moment(state[config.stateProperty], 'YYYYMMDD').toDate() : 
                        '';
  return (
    <DatePicker
      key={config.stateProperty}
      value={selectedTime}
      mode="date"
      defaultDate={new Date()}
      minDate={new Date(1970, 1, 1)}
      maxDate={new Date(2999, 12, 31)}
      onChange={(value) => {
        const time = moment(value).format('YYYYMMDD');
        if (onChange instanceof Function) {
          onChange(time, config.stateProperty);
        }
      }}
      format="YYYY-MM-DD"
    >
      <List.Item arrow="horizontal">
        <Text style={styles.title}>{config.title}</Text>
      </List.Item>
    </DatePicker>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#222',
    fontSize: 18,
    textAlignVertical: 'center',
  }
})