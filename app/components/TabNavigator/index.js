import React, { Component } from 'react';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import Home from '../Home';
import TransferList from '../TransferList';
import Mine from '../Mine';

const Tab = createBottomTabNavigator();

function TabNavigator({ navigation, route }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#5695d2',
        inactiveTintColor: 'gray',
        style:{
          
        },
        labelStyle: {
          fontSize: 18,
        }
      }}
    >
      <Tab.Screen 
        name="检测项" 
        component={Home}
      />
      {/* <Tab.Screen 
        name="流转单" 
        component={TransferList}
      /> */}
      <Tab.Screen 
        name="我的" 
        component={Mine} 
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;