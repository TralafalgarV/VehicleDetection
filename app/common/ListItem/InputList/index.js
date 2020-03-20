import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import {
  List,
} from '@ant-design/react-native';

/**
 * 定制List组件的输入列表
 * @param config = { title: '汽油车催化剂型号', type: 'inputList', options: [{
    property: 'catalystType_Front',
    label: '前',
  }, ...] }
 * @param state 父组件的 state
 */
export default InputList = ({config, state, onChange}) => {
  return (
    <List.Item key={config.title} >
      <View style={styles.radioListContainer}>
        <Text style={styles.title }>{config.title}</Text>
        <View style={styles.radioListExtra}>
        {
          config.options && config.options.map(item => {
            return (
              <TextInput 
                key={item.label}
                style={styles.inputItem}
                value={state[item.property]}
                onChangeText={(value) => {
                  if (onChange instanceof Function) {
                    onChange(value, item.property);
                  }
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

const styles = StyleSheet.create({
  title: {
    color: '#222',
    fontSize: 18,
    textAlignVertical: 'center',
  },
  radioListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioListExtra: {
    flexDirection: 'row'
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