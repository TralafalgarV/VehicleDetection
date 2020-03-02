import React, {Component} from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import  { createStore, applyMiddleware } from "../app/redux/store";
import { reducer } from "../app/redux/reducer";
import { Provider, connect } from "../app/redux/react-redux";
import { logger1, logger2, thunk } from "../app/redux/middleware";
import { Text, TouchableWithoutFeedback, View } from "react-native";

const store = createStore(reducer, applyMiddleware(logger1, thunk, logger2));

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App] getDerivedStateFromProps: nextProps', nextProps, 'prevState', prevState);
    return {count: nextProps.count};
  }

  render() {
    console.log('[App] render ');
    return (
      <SafeAreaProvider>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={() => this.props.plusCount()}>
            <Text>{this.state.count} 点击</Text>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaProvider>
    );
  }

  // 这个方法在 render() 之后，componentDidUpdate() 之前调用
  getSnapshotBeforeUpdate(prevProps, prevState) {
    /** 
     * 这个函数的作用是在真实 DOM 更新（componentDidUpdate）前，获取一些需要的信息（类似快照功能），然后作为参数传给 componentDidUpdate。
     * 例如：在 getSnapShotBeforeUpdate 中获取滚动位置，然后作为参数传给 componentDidUpdate，就可以直接在渲染真实的 DOM 时就滚动到需要的位置。
     */    
    console.log('[App] getSnapshotBeforeUpdate: prevProps', prevProps, 'prevState', prevState);
    return {fuck: 'what'}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    /** 
     * 有 getSnapshotBeforeUpdate 时，必须要有 componentDidUpdate。
     * 所以这个方法的一个应用场景就是上面看到的例子，配合 getSnapshotBeforeUpdate 使用 
     */
    console.log('[App] componentDidUpdate: prevProps', prevProps, 'prevState', prevState, 'snapshot', snapshot);
  }
  
  componentWillUnmount() {
    console.log('[App] componentWillUnmount');

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
      <Provider store={store}>
        <AppWithRedux />
      </Provider>
    );
  }
}

export default Root;
