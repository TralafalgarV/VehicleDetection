// 基础服务映射表
const serviceMappingTable = {
  inputCarData: { // 提交外观检测信息
    path: '/inputCarData',
    method: 'POST',
  },
  datalist: { // 获取指定车牌的外观信息
    path: '/datalist',
    method: 'POST',
  },    
};
export default serviceMappingTable
