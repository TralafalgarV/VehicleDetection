import { 
  ADD_APPEARANCE,
  FETCH_APPEARANCE_LIST
 } from "../redux/actions/appearance.action";
// 基础服务映射表
const serviceMappingTable = {
  inputCarData: { // 提交外观检测信息
    path: ADD_APPEARANCE,
    method: 'POST',
  },
  datalist: { // 获取指定车牌的外观信息
    path: FETCH_APPEARANCE_LIST,
    method: 'POST',
  },    
};
export default serviceMappingTable
