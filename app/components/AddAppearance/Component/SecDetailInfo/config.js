// 通过状态
const statusArr = [
  {
    value: 1,
    label: '通过',
  }, 
  {
    value: 0,
    label: '否决',
  },
];

export const CONFIGINFO = [
  {
    key: 'uniqueness',
    name: '车辆唯一性检查',
    subitems: [
      {
        title: '号牌号码/号牌类型',
        stateProperty: 'licencePlateNumOrType',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '车辆品牌/型号',
        stateProperty: 'brandOrType',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '车辆识别码',
        stateProperty: 'identificationCode',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '发动机号',
        stateProperty: 'engineNumber',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '车辆颜色和外形',
        stateProperty: 'color_appearance',
        type: 'radioList',
        options: statusArr,
      },            
    ]       
  },
  {
    key: 'characteristic',
    name: '车辆特征参数检查',
    subitems: [
      {
        title: '外廓尺寸',
        stateProperty: 'externalContour',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '轴距',
        stateProperty: 'wheelBase',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '整备质量',
        stateProperty: 'carQuality',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '核定载人数',
        stateProperty: 'personsCapacity',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '核定载质量',
        stateProperty: 'qualityCapacity',
        type: 'radioList',
        options: statusArr,
      },    
      {
        title: '栏板高度',
        stateProperty: 'breastBoardHeight',
        type: 'radioList',
        options: statusArr,
      }, 
      {
        title: '后轴钢板弹簧片数',
        stateProperty: 'aftShaftSpringCount',
        type: 'radioList',
        options: statusArr,
      }, 
      {
        title: '客车应急出口',
        stateProperty: 'emergencyExit',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '客车乘客通道和引道',
        stateProperty: 'aisleAndApproach',
        type: 'radioList',
        options: statusArr,
      }, 
      {
        title: '货箱',
        stateProperty: 'packingBox',
        type: 'radioList',
        options: statusArr,
      },             
    ]       
  },
  {
    key: 'appearance',
    name: '车辆外观检查',
    subitems: [
      {
        title: '车身外观',
        stateProperty: 'carBody',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '外观标识、标注和标牌',
        stateProperty: 'carLabel',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '外部照明和信号灯具',
        stateProperty: 'signalLamp',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '轮胎',
        stateProperty: 'refitTyre',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '号牌及号牌安装',
        stateProperty: 'plateNumberType',
        type: 'radioList',
        options: statusArr,
      },            
      {
        title: '加装/改装灯具',
        stateProperty: 'refitLamps',
        type: 'radioList',
        options: statusArr,
      },      
    ]       
  },
  {
    key: 'safetyDeviceCheck',
    name: '安全装置检查',
    subitems: [
      {
        title: '汽车安全带',
        stateProperty: 'safetyBelt',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '机动车用三角警告牌',
        stateProperty: 'warndreieck',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '灭火器',
        stateProperty: 'extinguisher',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '行车记录装置',
        stateProperty: 'automobileDataRecorder',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '车身反光标识',
        stateProperty: 'reflectingMarking',
        type: 'radioList',
        options: statusArr,
      },            
      {
        title: '车辆尾部标志板',
        stateProperty: 'rearMarkingPlate',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '侧后防护装置',
        stateProperty: 'flankProtectiveDevice',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '应急锤',
        stateProperty: 'emergencyHammer',
        type: 'radioList',
        options: statusArr,
      },            
      {
        title: '急救箱',
        stateProperty: 'firstAidCase',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '限速功能或限速装置',
        stateProperty: 'rateLimitingEq',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '防抱死制动系统',
        stateProperty: 'sec_abs',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '辅助制动系统',
        stateProperty: 'sec_ba',
        type: 'radioList',
        options: statusArr,
      },            
      {
        title: '盘式制动器',
        stateProperty: 'discBrake',
        type: 'radioList',
        options: statusArr,
      },   
      {
        title: '紧急切断装置',
        stateProperty: 'emergencyShutoffDevice',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '发动机舱自动灭火装置',
        stateProperty: 'automaticFireExtinguisher',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '手动机械断电开关',
        stateProperty: 'mechanicallyShutDown',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '副制动踏板',
        stateProperty: 'subBrakePedal',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '校车标志灯和校车停车指示标志牌',
        stateProperty: 'schoolMarkerLampAndLabel',
        type: 'radioList',
        options: statusArr,
      }, 
      {
        title: '危险货物运输车标志',
        stateProperty: 'dangerousGoods',
        type: 'radioList',
        options: statusArr,
      }, 
      {
        title: '肢体残疾人操纵辅助装置',
        stateProperty: 'physicallyDisabledDevice',
        type: 'radioList',
        options: statusArr,
      },                   
    ]       
  },
  {
    key: 'searchInfoFromNetwork',
    name: '联网查询车辆事故/违法信息',
    subitems: [],
  },
  {
    key: 'chassisDymCheck',
    name: '底盘动态检验',
    subitems: [
      {
        title: '转向系',
        stateProperty: 'steering',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '传动系',
        stateProperty: 'drive',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '制动系',
        stateProperty: 'braking',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '仪表和指示器',
        stateProperty: 'instrumentDym',
        type: 'radioList',
        options: statusArr,
      },           
    ]       
  },
  {
    key: 'chassisPartsCheck',
    name: '车辆底盘部件检验',
    subitems: [
      {
        title: '转向系部件',
        stateProperty: 'steeringParts',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '传动系部件',
        stateProperty: 'driveParts',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '行驶系部件',
        stateProperty: 'runningParts',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '制动系部件',
        stateProperty: 'brakingParts',
        type: 'radioList',
        options: statusArr,
      },
      {
        title: '其他部件',
        stateProperty: 'otherParts',
        type: 'radioList',
        options: statusArr,
      },       
    ]       
  },    
];
