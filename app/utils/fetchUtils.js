import { Platform } from 'react-native';
import serviceMappingTable from '../config/serviceMappingTable'
import { getUrl } from "../config/url";
import { uuid } from "./uuid";

/**
 user must implment the catch to handle reject
 */
export const fetchRequest = async (service, params) => {
    // 获取 URL 
    const nowUrl = getUrl();
    const GET_SERVICE_URL = nowUrl.getUrl;
    const POST_SERVICE_URL = nowUrl.postUrl;

    // 校验服务接口编码
    const _service = serviceMappingTable[service];
    if (!(_service instanceof Object || typeof _service === 'object')) {
        throw new Error(`Service ${service} does not exist`);
    }

    // 校验请求数据
    if (!(params instanceof Object || typeof params === 'object')) {
        throw new Error(`params must be 'object'. Actually it's ${typeof params}`);
    }

    // POST 请求方式处理
    let url = POST_SERVICE_URL;

    // GET 方式请求处理
    if (_service.method === 'GET') {
        url = `${GET_SERVICE_URL}?data=${params}`
    }

    // 配置请求头
    const _opts = Object.assign({method: _service.method}, {});

    // 配置载荷
    let body = {
        'data': params,
    };

    // 配置 token
    let accessToken = 'lgjp1234';

    if (typeof accessToken == 'string' && accessToken.length > 0) {
        body = Object.assign({accessToken: accessToken}, params);
    }

    // 配置 body
    _opts.body = JSON.stringify(body);

    // 配置 header
    _opts.headers = Object.assign({
        'Accept': 'application/json; charset=UTF-8',
        'Content-Type': 'application/json; charset=UTF-8',
        'pv': _service.pv,
        'cs': Platform.OS,
        'cv': '1.0.0',
        'uuid': uuid(),
        'source': 'vehicleDetection',
    }, _opts.headers);


    // if (__DEV__) {
    //     _opts.bodyObj = params;
    //     console.info(_service.pv, _opts)
    // }

    return new Promise(function (resolve, reject) {
        fetch(url, _opts)
        // 第一次过滤，网络层过滤
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                if (response.headers.get("content-type").indexOf('application/json') !== -1) {
                    return response.text()
                }
                return Promise.reject(new Error(` reuslt should be in json format, but got ${response.headers.get("content-type")}`))
            }
            return Promise.reject(new Error(` ${JSON.stringify(response)}`))
        })
        .then((responseText) => JSON.parse(responseText))
        .then((responseJSON) => {
            resolve(responseJSON);
        })
        .catch((error) => {
            reject(error);
        });
    })
};
