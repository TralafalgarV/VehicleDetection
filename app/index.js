import React, {Component} from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import  { createStore } from "../app/redux/store";
import { reducer } from "../app/redux/reducer";
import { Provider, connect } from "../app/redux/react-redux";
import { Text, TouchableWithoutFeedback, View } from "react-native";

class App extends Component {

  componentWillReceiveProps(props) {
    console.log('[App] componentWillReceiveProps => ', props);
  }

  render() {
    console.log('[App] render ');
    return (
      <SafeAreaProvider>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={() => this.props.plusCount()}>
            <Text>{this.props.count} 点击</Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {count: state.count};
}

const mapDispatchToProps = (dispatch) => {
  return {
    plusCount: () => {
      dispatch({type: 'plus'});
    }
  }
}

const AppWithRedux = connect(mapStateToProps, mapDispatchToProps)(App);

class Root extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <AppWithRedux />
      </Provider>
    );
  }
}

export default Root;
