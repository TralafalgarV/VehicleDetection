// 通过状态
const statusArr = [
  {
    value: 1,
    label: '是',
  }, 
  {
    value: 0,
    label: '否',
  },
];

export const CONFIGINFO = {
  machineStatus: {
    title: '车辆机械状况是否良好',
    stateProperty: 'machineStatus',
    type: 'radioList',
    options: statusArr,   
  },
  exhaustPollutionFailure: {
    title: '*排气污染控制装置是否齐全，正常',
    stateProperty: 'exhaustPollutionFailure',
    type: 'radioList',
    options: statusArr,   
  },
  burningEngineOil: {
    title: '*车辆是否存在明显烧机油或者严重留黑烟现象',
    stateProperty: 'burningEngineOil',
    type: 'radioList',
    options: statusArr,   
  },
  crankcaseVentilate: {
    title: '曲轴箱通风系统是否正常（汽）',
    stateProperty: 'crankcaseVentilate',
    type: 'radioList',
    options: statusArr,   
  },
  engineBurningSystem: {
    title: '发动机燃烧系统采用电控泵（柴）',
    stateProperty: 'engineBurningSystem',
    type: 'radioList',
    options: statusArr,   
  },
  oilEvaporation: {
    title: '*燃烧蒸发控制系统是否正常（汽）',
    stateProperty: 'oilEvaporation',
    type: 'radioList',
    options: statusArr,   
  },   
  instrument: {
    title: '车上仪表工作是否正常',
    stateProperty: 'instrument',
    type: 'radioList',
    options: statusArr,   
  }, 
  mechanicalFailure: {
    title: '有无可能影响安全或引起测试偏差的机械故障',
    stateProperty: 'mechanicalFailure',
    type: 'radioList',
    options: statusArr,   
  },
  dry_clean_airPressure: {
    title: '车辆进、排气系统是否有任何泄露',
    stateProperty: 'dry_clean_airPressure',
    type: 'radioList',
    options: statusArr,   
  },
  engine_gearbox_coolingSystem: {
    title: '车辆的发动机、变速箱和冷却系统等有无明显的液体渗漏',
    stateProperty: 'engine_gearbox_coolingSystem',
    type: 'radioList',
    options: statusArr,   
  },
  env_isOBD: {
    title: '是否带 OBD 系统',
    stateProperty: 'env_isOBD',
    type: 'radioList',
    options: statusArr,    
  },   
  isTirePressure: {
    title: '轮胎气压是否正常',
    stateProperty: 'isTirePressure',
    type: 'radioList',
    options: statusArr,      
  },
  isTireDryAndClean: {
    title: '轮胎是否干燥、清洁',
    stateProperty: 'isTireDryAndClean',
    type: 'radioList',
    options: statusArr,      
  },  
  closeAirConditionerOrWarmBraw: {
    title: '是否关闭车上空调、暖风等附属设备',
    stateProperty: 'closeAirConditionerOrWarmBraw',
    type: 'radioList',
    options: statusArr,   
  },
  ars_esp_epc_aeb: {
    title: '是否已中断ARS、ESP、EPC牵引力控制或自动制动系统等',
    stateProperty: 'ars_esp_epc_aeb',
    type: 'radioList',
    options: statusArr,   
  },
  fuelTankAndOils: {
    title: '车辆油箱和油品是否异常',
    stateProperty: 'fuelTankAndOils',
    type: 'radioList',
    options: statusArr,   
  },
  isWorkingCondition: {
    title: '是否适合工况法检测',
    stateProperty: 'isWorkingCondition',
    type: 'radioList',
    options: statusArr,   
  },    
};