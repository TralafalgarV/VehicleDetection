// 基础服务映射表
const serviceMappingTable = {
  login: { // 登录服务
    pv: 101002,
    method: 'POST',
  },
  logout: { // 退出登录
    pv: 101013,
    method: 'POST',
  },      
};
export default serviceMappingTable
