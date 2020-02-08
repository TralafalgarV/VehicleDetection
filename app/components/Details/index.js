import React, { Component } from 'react';
import { Text, View, Button } from "react-native";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Details</Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          title='Go Back Home'/>
      </View>
    );
  }
}

export default Details;