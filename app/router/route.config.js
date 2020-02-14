import Login from "../components/Login";
import TabNavigator from '../components/TabNavigator';
import Details from '../components/Details';

// 注意：放在路由堆栈顶部组件优先展示
const RouteConfig = [
  {
    // 登录页面
    name: 'Login',
    component: Login,
  },
  {
    // 底部 tab 导航栏
    name: 'TabNavigator',
    component: TabNavigator,
  },
  {
    // 详情页面
    name: 'Details',
    component: Details,
  },   
];

export default RouteConfig;
