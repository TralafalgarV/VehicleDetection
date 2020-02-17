import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from "react-native";
import HeaderBar from "../../common/HeaderBar";
import { Button, InputItem, List } from '@ant-design/react-native';
import BaseInfo from "./Component/BaseInfo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='流转单'
          leftItemHidden={true}
          rightItemHidden={true}
        />
        <View style={{flex: 1}}>
        <ScrollView
          style={{ flex: 1 }}
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <BaseInfo />
        </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default Home;