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

export {
  checkTypeArr,
  driverTypeArr,
  gearboxTypeArr,
  oilTypeArr,
  useTypeArr,
  checkMethodArr,
  oilSupplyTypeArr,
  improvedTypeArr,
  airInflowTypeArr,
};