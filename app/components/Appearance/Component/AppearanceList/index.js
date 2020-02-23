import React, { Component } from 'react';
import {
  Text,
  View
} from "react-native";
import {
  Provider,
  List,
} from '@ant-design/react-native';
import HeaderBar from "../../../../common/HeaderBar";

class AppearanceList extends Component {
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
          title='外观检测单'
          rightItemName='新增'
          rightClick={this.addTransferSheet}
        />
        <Provider>
          <List style={{marginTop: 10}}>
            <List.Item
              extra={'进行中'}
              onPress={this.selectedItem}
            >
              京MPN926
            </List.Item>
          </List>
        </Provider>
      </View>
    );
  }
}

export default AppearanceList;