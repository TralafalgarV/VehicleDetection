// 基础服务映射表
const serviceMappingTable = {
  inputCarData: { // 提交外观检测信息
    path: 'inputCarData',
    method: 'POST',
  },
  logout: { // 退出登录
    pv: 101013,
    method: 'POST',
  },      
};
export default serviceMappingTable
