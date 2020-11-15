import axios from 'axios'
// 引入Vuex实例
import store from '../store/index'

// 封装axios
function myaxios(opation) {
    // 1. 创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 999999
    })

    // axios实例的请求拦截器
    instance.interceptors.request.use(config => {
        // 当发送请求时，用Vue实例提交对应的mutations，并且传入`true`
        store.commit('loadingShow', true)
        return config
    });

    // 响应拦截器
    instance.interceptors.response.use(res => {
        // 服务器响应数据时，用Vue实例提交对应的mutations，并且传入`false`
        store.commit('loadingShow', false)
        return res.data.data || res.data.result || res.data  // 返回有用的数据
    }, error => {
        return Promise.reject(error);
    });
    // 该函数返回一个Promise对象
    return instance(opation)
}

export {
    myaxios
}