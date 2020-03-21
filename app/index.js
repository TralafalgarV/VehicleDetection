import React, {
  Component
} from 'react';
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
import codePush from "react-native-code-push";
import {
  Provider
} from 'react-redux';
import { Provider as PV } from '@ant-design/react-native'; // 用来支持 Modal 弹窗
import Spinner from './common/Spinner'

import store from './redux/createStore';

const Drawer = createDrawerNavigator(); // 侧边栏
const Stack = createStackNavigator();   // 路由stack 

class App extends Component {

  /**
   * 热更弹窗提示稳态
   * @param {totalBytes, receivedBytes}
   */
  updateJSUpdateProcess = ({totalBytes, receivedBytes}) => {
    // 显示进度百分比
    const process = Math.floor(receivedBytes / totalBytes * 100);
    this._spinner.show('update', `系统更新中 ${process}%`)
  }

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
        <Spinner ref={(ref) => this._spinner = ref}/>      
      </SafeAreaProvider>
    );
  }
}

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  codePushStatusDidChange(status) {
    switch (status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
        console.log("Checking for updates.");
        break;
      case codePush.SyncStatus.DOWNLOADING_PACKAGE:
        console.log("Downloading package.");
        break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
        console.log("Installing update.");
        break;
      case codePush.SyncStatus.UP_TO_DATE:
        console.log("Up-to-date.");
        break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
        console.log("Update installed.");
        break;
    }
  }

  codePushDownloadDidProgress(progress) {
    this._app.updateJSUpdateProcess(progress);
  }

  render() {
    return (
      <Provider store={store}>
        <PV>
          <App ref={ref => this._app = ref}/>
        </PV>
      </Provider>
    );
  }
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
})(Root);
