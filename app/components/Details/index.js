import React, { Component } from 'react';
import { Text, View, Button } from "react-native";
import HeaderBar from "../../common/HeaderBar";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <HeaderBar 
          navigation={ this.props.navigation }
          title='详情页'
        />
        <Button
          onPress={() => navigation.navigate('Home')}
          title='Go Back Home'/>
      </View>
    );
  }
}

export default Details;