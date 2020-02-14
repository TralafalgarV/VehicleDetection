import React, { Component } from 'react';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import Home from '../Home';
import Process from '../Process';
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
        name="首页" 
        component={Home}
      />
      <Tab.Screen 
        name="流程" 
        component={Process}
      />
      <Tab.Screen 
        name="我的" 
        component={Mine} 
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;