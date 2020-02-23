import Login from "../components/Login";
import TabNavigator from '../components/TabNavigator';
import Details from '../components/Details';
import Appearance from '../components/Appearance';
import TransferList from '../components/TransferList';
import AppearanceList from '../components/Appearance/Component/AppearanceList';

// 注意：放在路由堆栈顶部组件优先展示
const RouteConfig = [
  {
    // 登录页面
    name: 'Login',
    component: Login,
  },
  {
    name: 'TabNavigator',
    component: TabNavigator,
  },
  {
    // 详情页面
    name: 'Details',
    component: Details,
  },
  {
    // 外观检测
    name: 'Appearance',
    component: Appearance,
  },
  {
    // 流转单列表
    name: 'TransferList',
    component: TransferList,
  },  
  {
    // 外观流转单列表
    name: 'AppearanceList',
    component: AppearanceList,
  },    
];

export default RouteConfig;
