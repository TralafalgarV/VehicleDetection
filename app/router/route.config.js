import Login from "../components/Login";
import TabNavigator from '../components/TabNavigator';
import Details from '../components/Details';

const RouteConfig = [
  {
    // 底部 tab 导航栏
    name: 'TabNavigator',
    component: TabNavigator,
  },
  {
    // 登录页面
    name: 'Login',
    component: Login,
  },
  {
    // 详情页面
    name: 'Details',
    component: Details,
  },   
];

export default RouteConfig;
