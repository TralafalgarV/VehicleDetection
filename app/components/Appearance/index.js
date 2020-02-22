import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import HeaderBar from "../../common/HeaderBar";
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
          title='外观检测'
          rightItemHidden={true}
        />
        {/* 基本信息 */}
          <BaseInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default Home;