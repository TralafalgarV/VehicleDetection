// 公用样式配置文件
import Platform from 'Platform';
import { isIphoneX } from '../isIphoneX'

const cssConfig = {
  mainColor: '#5696d2', // 主色系一，用于头部，尾部导航ç
  mainColorActive: '#4283c3', // 主色系二，按钮触摸效果
  searchBoxBgColor:'#307AC1',//头部搜索框的背景色
  mianColorSeOPt: (n = 1) => `rgba(86, 150, 210, ${n})`,
  mainColorOpacity: 'rgba(86, 150, 210, 0.5)', // 主色系一，用于头部，尾部导航
  mainColorB: '#4283c3', // 主色系一，用于头部，尾部导航
  mainBgColor: '#f3f3f3', // 主色系2，整体背景色
  moduleColor: '#fff', // 主要用于单个组件，模块的背景色，用于区分整体背景色
  borderColor: {
    b1: '#eee', // 主要的边框颜色
    b2: '#AEAEAE', // 个别，如复选框，单选框等
    b3: '#5696d2',// tab切换，当前tab的下划线颜色
    b5: '#ddd', // 导航底部边边框，安卓版
    b6: '#ed5655',
    b7: '#EBEBEB',
  },
  textInputBgColor:'#f7f7f7',//输入框的内部背景色
  bgSeparate: '#FAFAFA',
  remindColor: '#ed5655', // 用于提示的背景，字体颜色
  screenLeft: 10, // 距离左侧手机边框距离
  screenRight: 10, // 距离右侧手机边框距离
  paddingTop: 10,
  componentTop: 10, // 组件间距
  componentHeight: 45, // 常用组件高度
  headerHeight: Platform.OS === 'android' && Platform.Version <= 19 ? 44 : isIphoneX() ? 88 : 64, // 根据平台，设置不同的头部导航高度
  headerPaddingTop: Platform.OS === 'android' && Platform.Version <= 19 ? 0 : isIphoneX() ? 44 : 20, // 根据平台，设置不同的头部是否具有paddingTop
  footerHeight: isIphoneX() ? 83 : 49, // 根据平台，设置页面底部按钮高度
  paddingBottom: isIphoneX() ? 34 : 0, // 根据平台，设置页面底部按钮paddingBottom
  uploadIMGBgColor: '#F8F9FA', // 上传图片组件的背景颜色
  bgColor: '#f5f5f5',
  secondBgColor: '#50E3C2',
  newGrey: '#F0F2F5',

  textColor: { // 用到的字体颜色
    c1: '#fff',
    c2: '#ddd',
    c3: '#666',
    c4: '#222',
    c5: '#4c5e7c', // 链接类
    c6: '#aeaeae', // 无数据提示,placeholder
    c7: '#999', // 副标题
    c8: '#5696d2', // 多级筛选被选中状态,复选框，单选框，选中状态
    c9: '#fc6e51', // 警告，货币
    c10: '#ed2322', //    货币
    c11: '#1ca1dc',
    c12: '#3f3f3f',
    c13: '#ed5655',
    c14: '#df5c5c',
    c15: '#f6bb42',
    c16: '#2a2a2a',
    c17: '#5695D2',
    c18: '#1AB394',
    c19: '#F5A623',
    c20: '#333',
    c21: '#de5c5c',
    c22: '#F47B61',
    c23: '#f33030',
  },
  textFont: {// 主要的字体颜色
    h1: 18, // 一般用于头部导航和大标题
    h2: 16, // 页面主标题
    h3: 13, // 页面副标题
    h4: 12, // 一般用于正文
    h5: 10, // 系统提示
    h6: 9, // 系统提示
    h7: 8,
    h8: 30,//订单扫码支付显示的总价钱
    h9: 38,//充值的价钱大小
    h10: 11,
    h11: 15,
    h12: 14,
    h13: 5,
  },
  maskBg: 'rgba(0, 0, 0, 0.2)', // 蒙层
  whiteMaskBg: 'rgba(255, 255, 255, 0.9)', // 蒙层
  activeBtnBg: '#f3f3f3', // 点击按钮被激活的颜色
};

export default cssConfig;
