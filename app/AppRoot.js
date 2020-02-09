import React, {Component} from 'react';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator,
    Assets as StackAssets,
    StackNavigationProp,
    HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerNavigationProp,
} from '@react-navigation/drawer';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import RouteConfig from "./router/route.config";

const Drawer = createDrawerNavigator(); // 侧边栏
const Stack = createStackNavigator();   // 路由stack 

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
          {
            RouteConfig.map(route => (
              <Stack.Screen 
                name={route.name} 
                key={route.name} 
                component={route.component} 
                options={{ 
                  header: () => {} // 隐藏 header
                }}
              />
            ))
          }
          </Stack.Navigator>
        </NavigationContainer>        
      </SafeAreaProvider>
    );
  }
}
