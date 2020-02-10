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
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
      />
      <Tab.Screen 
        name="Process" 
        component={Process}
      />
      <Tab.Screen 
        name="Mine" 
        component={Mine} 
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;