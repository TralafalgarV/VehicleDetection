import update from 'immutability-helper';
import { 
  FETCH_APPEARANCE_LIST,
  FETCH_APPEARANCE_LIST_FAIL,
  ADD_APPEARANCE,
  ADD_APPEARANCE_FAIL,
  MERGE_APPEARANCE_INFO,
  CLEAR_APPEARANCE_INFO,
  FILTER_APPEARANCE_INFO,
  REDO_APPEARANCE_INFO,
} from "../../actions/appearance.action";

// 初始化用户权限数据
const initialState = {
  list: [],
  baseInfo: {
    productionDate: '', // 出厂日期
    checkDate: '', // 检测日期

    ID: '', // 车牌号
    mileage: '', // 里程表读数
    rpm: '', // 转速
    power: '', // 功率
    cylinder: '', // 缸数
    displacement: '', // 排量
    outOfTownEngineModel: '', // 外地车发动机型号
    manufacturer: '', // 制造厂商
    catalystType_Front: '', // 催化剂型号
    catalystType_End: '', // 催化剂型号
    catalystType_Left: '', // 催化剂型号
    catalystType_Right: '', // 催化剂型号
    DPF: '', // 柴油车DPF
    SCR: '', // SCR

    checkType: 0, // 检验类别
    driverType: 0, // 传动装置
    gearboxType: 0, // 变速箱
    oilType: 0, // 燃油类别
    useType: 0, // 车辆用处
    checkMethod: 0, // 环保检测方法
    oilSupplyType: 0, // 供油方式
    improvedType: 0, // 是否改造
    airInflowType: 0, // 进气方式

    isOBD: 0, // 是否有OBD
    isOBDnormal: 0, // OBD灯是否正常
    
    machineStatus: 0, // 车辆机械状况
    instrument: 0, // 车上仪表
    mechanicalFailure: 0, // 影响安全或引起测试偏差的机械故障
    exhaustPollutionFailure: 0, // 排气污染控制装置、泄露
    crankcaseVentilate: 0, // 曲轴箱通风系统
    fuelTankAndOils: 0, // 车辆油箱油品
    engine_gearbox_coolingSystem: 0, // 发动机、变速箱和冷却系统等有无泄露
    dry_clean_airPressure: 0, // 排气污染控制装置、泄露
    oilEvaporation: 0, // 燃油蒸发控制系统
    burningEngineOil: 0, // 烧机油或严重冒烟
    ars_esp_epc_aeb: 0, // 中断ARS、ESP、EPC牵引力控制或自动制动系统等
    closeAirConditionerOrWarmBraw: 0, // 关闭空调、暖风等附属设备
    baseResult: 0, // 0 通过； 1：未通过
  },
  backupList: {},
};

export const appearance = (state = initialState, action) => {
  switch (action.type) {
    
    // 获取外观数据列表
    case FETCH_APPEARANCE_LIST:
      return update(state, {
        list: { $set: action.payload },
        backupList: { $set: action.payload },
      });

    case FETCH_APPEARANCE_LIST_FAIL:
      return update(state, {
        list: { $set: [] },
        backupList: { $set: [] },
      });
    
    // 合并外观检测数据
    case MERGE_APPEARANCE_INFO:
      return update(state, {
        baseInfo: { $merge: action.payload }
      });
    
    case CLEAR_APPEARANCE_INFO: 
      return update(state, {
        baseInfo: { $set: [] },
      });

    case FILTER_APPEARANCE_INFO:
      const newList = state.list.filter(item => item.ID.match(action.payload));
      return update(state, {
        list: { $set: newList }
      });
    
    case REDO_APPEARANCE_INFO:
      return update(state, {
        list: { $set: state.backupList },
      });

    // 添加一条 外观检测数据
    case ADD_APPEARANCE:
      const payload = action.payload;
      let newState = Object.assign({}, state);

      // 如果有相同ID，替换对应数据
      for (let index = 0; index < newState.list.length; index++) {
        const element = newState.list[index];
        
        if (element.ID == payload.ID) {
          newState = update(newState, {
            list: {
              $splice: [[index, 1]],
            }
          });
        }
      }

      return update(newState, {
        list: { $unshift: [action.payload] },
        backupList: { $unshift: [action.payload] },
      });

    case ADD_APPEARANCE_FAIL:
      return state;

    default:
      return state;
  }
}