// 检验类别
const checkTypeArr = [
  {
    value: 1,
    label: '定检',
  },
  {
    value: 2,
    label: '临检',
  },
  {
    value: 3,
    label: '遥感',
  },
  {
    value: 4,
    label: '路检',
  },
  {
    value: 5,
    label: '入户',
  },
  {
    value: 6,
    label: '举报',
  },         
];

// 传动装置
const driverTypeArr = [
  {
    value: 1,
    label: '前驱',
  },
  {
    value: 2,
    label: '后驱',
  },
  {
    value: 3,
    label: '全时四驱',
  },
  {
    value: 4,
    label: '其他',
  },    
];

// 变速箱类型
const gearboxTypeArr = [
  {
    value: 1,
    label: '手动',
  },
  {
    value: 2,
    label: '自动',
  },    
];

// 燃油类型
const oilTypeArr = [
  {
    value: 1,
    label: '汽油',
  },
  {
    value: 2,
    label: '柴油',
  },
  {
    value: 3,
    label: 'LPG',
  },  
  {
    value: 4,
    label: '天然气',
  },   
  {
    value: 5,
    label: '电动',
  }, 
  {
    value: 6,
    label: '油电混合',
  }, 
  {
    value: 7,
    label: '其他',
  },        
];

// 用途类型
const useTypeArr = [
  {
    value: 1,
    label: '公交',
  }, 
  {
    value: 2,
    label: '出租',
  }, 
  {
    value: 3,
    label: '环卫',
  },
  {
    value: 4,
    label: '旅游',
  }, 
  {
    value: 5,
    label: '运输',
  }, 
  {
    value: 6,
    label: '特种',
  },    
  {
    value: 7,
    label: '邮政',
  }, 
  {
    value: 8,
    label: '渣土',
  }, 
  {
    value: 9,
    label: '其他',
  },      
];

// 环保检测方法
const checkMethodArr = [
  {
    value: 1,
    label: '简易工况',
  }, 
  {
    value: 2,
    label: '双怠速',
  }, 
  {
    value: 3,
    label: '自由加速',
  }
];

// 供油方式
const oilSupplyTypeArr = [
  {
    value: 1,
    label: '化油器改造',
  },
  {
    value: 2,
    label: '闭环电喷',
  },
  {
    value: 3,
    label: '高压共轨',
  },
  {
    value: 4,
    label: '泵喷嘴',
  },
  {
    value: 5,
    label: '单体泵',
  },
  {
    value: 6,
    label: '直列泵',
  },  
  {
    value: 7,
    label: '机械泵',
  },
  {
    value: 8,
    label: '其他',
  },
];

// 改造方式
const improvedTypeArr = [
  {
    value: 1,
    label: '无改造',
  },
  {
    value: 2,
    label: '黄改绿',
  },    
];

// 进气方式
const airInflowTypeArr = [
  {
    value: 1,
    label: '自吸',
  },
  {
    value: 2,
    label: '增压',
  },  
];

// OBD灯是否正常
const obdLightStatusArr = [
  {
    value: 1,
    label: '是',
  }, 
  {
    value: 0,
    label: '否',
  },
];

// 是否有OBD
const haveOBDStatusArr = [
  {
    value: 1,
    label: '是',
  }, 
  {
    value: 0,
    label: '否',
  },
];

// 车辆机械状况
const alternativeArr = [
  {
    value: 1,
    label: '是',
  }, 
  {
    value: 0,
    label: '否',
  },
];

// 催化剂型号
const catalystTypeArr = [
  {
    property: 'catalystType_Front',
    label: '前',
  },
  {
    property: 'catalystType_End',
    label: '后',
  },
  {
    property: 'catalystType_Left',
    label: '左',
  },
  {
    property: 'catalystType_Right',
    label: '右',
  },      
];

export const CONFIGINFO = {
  checkDate: {
    title: '检验日期',
    stateProperty: 'checkDate',
    type: 'datePicker',
    placeholder: '请选择检验日期',
  },
  productionDate: {
    title: '车辆出厂日期',
    stateProperty: 'productionDate',
    type: 'datePicker',
    placeholder: '请选择车辆出厂日期',
  },    
  licenseNum: {
    title: '号码号牌',
    stateProperty: 'licenseNum',
    type: 'input',
    placeholder: '请输入车牌号',
  },
  mileage: {
    title: '里程表读数',
    stateProperty: 'mileage',
    type: 'input',
    placeholder: '请输入里程表读数',
  },
  rpm: {
    title: '转速',
    stateProperty: 'rpm',
    type: 'input',
    placeholder: '请输入转速',
    extra: 'rpm'
  },
  power: {
    title: '功率',
    stateProperty: 'power',
    type: 'input',
    placeholder: '请输入功率',
    extra: 'kW'
  },
  cylinder: {
    title: '缸数',
    stateProperty: 'cylinder',
    type: 'input',
    placeholder: '请输入缸数',
    extra: '缸'
  }, 
  displacement: {
    title: '排量',
    stateProperty: 'displacement',
    type: 'input',
    placeholder: '请输入排量',
    extra: 'L'
  },

  checkType: {
    title: '检验类别',
    stateProperty: 'checkType',
    type: 'picker',
    extra: '请选择类别',
    options: checkTypeArr,
  },
  driverType: {
    title: '传动装置',
    stateProperty: 'driverType',
    type: 'picker',
    extra: '请选择传动装置',
    options: driverTypeArr,    
  },
  gearboxType: {
    title: '变速箱',
    stateProperty: 'gearboxType',
    type: 'picker',
    extra: '请选择变速箱',
    options: gearboxTypeArr,    
  },
  oilType: {
    title: '燃油类别',
    stateProperty: 'oilType',
    type: 'picker',
    extra: '请选择燃油类别',
    options: oilTypeArr,    
  },
  useType: {
    title: '车辆用处',
    stateProperty: 'useType',
    type: 'picker',
    extra: '请选择车辆用处',
    options: useTypeArr,    
  },
  checkMethod: {
    title: '环保检测方法',
    stateProperty: 'checkMethod',
    type: 'picker',
    extra: '请选择环保检测方法',
    options: checkMethodArr,    
  },  
  oilSupplyType: {
    title: '供油方式',
    stateProperty: 'oilSupplyType',
    type: 'picker',
    extra: '请选择供油方式',
    options: oilSupplyTypeArr,    
  },  
  improvedType: {
    title: '是否改造',
    stateProperty: 'improvedType',
    type: 'picker',
    extra: '是否改造',
    options: improvedTypeArr,    
  },  
  airInflowType: {
    title: '进气方式',
    stateProperty: 'airInflowType',
    type: 'picker',
    extra: '请选择进气方式',
    options: airInflowTypeArr,    
  },
  isOBDnormal: {
    title: 'OBD灯是否正常',
    stateProperty: 'isOBDnormal',
    type: 'radioList',
    options: obdLightStatusArr,    
  },   
  isOBD: {
    title: '是否有OBD',
    stateProperty: 'isOBD',
    type: 'radioList',
    options: haveOBDStatusArr,    
  }, 
  outOfTownEngineModel: {
    title: '外地车发动机型号',
    stateProperty: 'outOfTownEngineModel',
    type: 'input',
    placeholder: '请输入发动机型号',
    labelNumber: 8,
  },
  manufacturer: {
    title: '制造厂商',
    stateProperty: 'manufacturer',
    type: 'input',
    placeholder: '请输入制造厂商',
  },
  DPF: {
    title: '柴油车DPF',
    stateProperty: 'DPF',
    type: 'input',
    placeholder: '请输入柴油车DPF',
  },
  SCR: {
    title: 'SCR',
    stateProperty: 'SCR',
    type: 'input',
    placeholder: '请输入SCR',
  },
  catalystType: {
    title: '汽油车催化剂型号',
    type: 'inputList',
    options: catalystTypeArr,  
  },

  machineStatus: {
    title: '车辆机械状况',
    stateProperty: 'machineStatus',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  instrument: {
    title: '车上仪表',
    stateProperty: 'instrument',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  mechanicalFailure: {
    title: '影响安全或引起测试偏差的机械故障',
    stateProperty: 'mechanicalFailure',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  exhaustPollutionFailure: {
    title: '排气污染控制装置、泄露',
    stateProperty: 'exhaustPollutionFailure',
    type: 'radioList',
    options: alternativeArr,   
  },  
  
  crankcaseVentilate: {
    title: '曲轴箱通风系统',
    stateProperty: 'crankcaseVentilate',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  fuelTankAndOils: {
    title: '车辆油箱油品',
    stateProperty: 'fuelTankAndOils',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  engine_gearbox_coolingSystem: {
    title: '发动机、变速箱和冷却系统等有无泄露',
    stateProperty: 'engine_gearbox_coolingSystem',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  dry_clean_airPressure: {
    title: '排气污染控制装置、泄露',
    stateProperty: 'dry_clean_airPressure',
    type: 'radioList',
    options: alternativeArr,   
  }, 

  oilEvaporation: {
    title: '燃油蒸发控制系统',
    stateProperty: 'oilEvaporation',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  burningEngineOil: {
    title: '烧机油或严重冒烟',
    stateProperty: 'burningEngineOil',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  ars_esp_epc_aeb: {
    title: '中断ARS、ESP、EPC牵引力控制或自动制动系统等',
    stateProperty: 'ars_esp_epc_aeb',
    type: 'radioList',
    options: alternativeArr,   
  }, 
  closeAirConditionerOrWarmBraw: {
    title: '关闭空调、暖风等附属设备',
    stateProperty: 'closeAirConditionerOrWarmBraw',
    type: 'radioList',
    options: alternativeArr,   
  }, 

}