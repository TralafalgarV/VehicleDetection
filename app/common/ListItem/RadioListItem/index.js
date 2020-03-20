import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import {
  List,
} from '@ant-design/react-native';

/**
 * 定制List组件的单选列表
 * @param config = {
    title: 'OBD灯是否正常',
    stateProperty: 'isOBDnormal',
    type: 'radioList',
    options: [0, 1, ...],    
  }
 * @param state 父组件的 state
 */
export default RadioListItem = ({config, state, onChange}) => {
  return (
    <List.Item key={config.stateProperty}>
      <View style={styles.radioListContainer}>
        <Text style={styles.title}>{config.title}</Text>
        <View style={styles.radioListExtra}>
        {
          config.options && config.options.map(item => {
            // 判断 item 是否被选中
            const selectd = state[config.stateProperty] == item.value;
            return (
              <TouchableWithoutFeedback 
                key={item.value}
                onPress={() => {
                  if (onChange instanceof Function) {
                    onChange(item.value, config.stateProperty);
                  }
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
});