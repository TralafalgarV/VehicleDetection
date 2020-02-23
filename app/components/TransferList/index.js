import React, { Component } from 'react';
import {
  Text,
  View
} from "react-native";
import {
  Provider,
  List,
} from '@ant-design/react-native';
import HeaderBar from "../../common/HeaderBar";

class TransferList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  selectedItem = () => {
    const { navigation } = this.props;
    navigation && navigation.navigate('Appearance');
  }

  addTransferSheet = () => {
    const { navigation } = this.props;
    navigation && navigation.navigate('Appearance');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='流转单'
          rightItemHidden={true}
        />
        <Provider>
          <List style={{marginTop: 10}}>
            <List.Item
              extra={'进行中'}
              onPress={this.selectedItem}
            >
              京MPN926
            </List.Item>
            <List.Item
              extra={'完成'}
              onPress={this.selectedItem}
            >
              京MPN922
            </List.Item>
            <List.Item
              extra={'完成'}
              onPress={this.selectedItem}
            >
              京MPN923
            </List.Item>
          </List>
        </Provider>
      </View>
    );
  }
}

export default TransferList;