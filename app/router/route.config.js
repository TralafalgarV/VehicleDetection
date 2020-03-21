import Login from "../components/Login";
import TabNavigator from '../components/TabNavigator';
import Details from '../components/Details';
import AddAppearance from '../components/AddAppearance';
import AppearanceList from '../components/AppearanceList';
import BaseDetailInfo from "../components/AddAppearance/Component/BaseDetailInfo";

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
    name: 'AddAppearance',
    component: AddAppearance,
  }, 
  {
    // 外观流转单列表
    name: 'AppearanceList',
    component: AppearanceList,
  },
  {
    // 流转单 -- 外观基本信息
    name: 'BaseDetailInfo',
    component: BaseDetailInfo,
  },
];

export default RouteConfig;
