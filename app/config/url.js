export const release = true;

const hostConfig = {
  now: release ? 0 : 1,
  release,
  all: [{
      postUrl: `http://106.13.43.153:5002/chejian/chejian/`,
      getUrl: `http://192.168.0.103:5002/chejian/chejian/`,
      msgUrl: `http://test.22city.cn/shopmall/post/req`,
      title: '正式环境',
    },
    {
      postUrl: `http://test.22city.cn/shopmall/post/req/`,
      getUrl: `http://test.22city.cn/shopmall/get/req/`,
      msgUrl: `http://test.22city.cn/shopmall/post/req`,
      title: '测试环境',
    }
  ]
}

export const getUrl = () => {
  return hostConfig.all[hostConfig.now];
}
