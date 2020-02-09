import React, { Component } from 'react';
import { Text, View, Button } from "react-native";
import HeaderBar from "../../common/HeaderBar";

class Home extends Component {
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
          title='首页'
          leftItemHidden={true}
          rightItemHidden={true}
        />
        <Button
          onPress={() => navigation.navigate('Details')}
          title='Go To Details'/>
      </View>
    );
  }
}

export default Home;