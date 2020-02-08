import React, { Component } from 'react';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Process from '../Process';
import Mine from '../Mine';

const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : 'Home';
  return routeName;
}

function TabNavigator({ navigation, route }) {
  // 更新 Stack.Navigator 的 option 配置
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Process" component={Process} />
      <Tab.Screen name="Mine" component={Mine} />
    </Tab.Navigator>
  );
}

export default TabNavigator;