import React, { Component } from 'react';
import { Text, View, Button } from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home</Text>
        <Button
          onPress={() => navigation.navigate('Details')}
          title='Go To Details'/>
      </View>
    );
  }
}

export default Home;