import axios from 'axios'
import store from '@/store'
//webpack.config.js
import {getToken} from '@/util'
import qs from 'qs'
// import {Message} from "element-ui";

// create an axios instance
const service = axios.create({
    // baseURL: '/api', //使用代理yarn remove [package]
    baseURL: 'http://localhost:3743', //使用代理yarn remove [package]
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 3000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // qs.parse()

        // do something before request is sent
        // console.log(store)
        if (store.state.admin.token) {
            // let each request carry token --['X-Token'] as a custom key.
            // console.log(getToken())
            config.headers['admin_token'] = getToken()
        }
        config.method === 'post'
            ? config.data = qs.stringify({...config.data})
            : config.params = {...config.params};
        // config.timeout=1000
        return config
    },
    error => {
        // do something with request error
        // console.log(error) // for debug
        return Promise.reject(error)
    }
)
// const options={
//     text:'拼命加载中',
//     background: 'rgba(0, 0, 0, 0.8)',
//     spinner: 'el-icon-loading',
// }
// let loadingInstance = Loading.service(options);
// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get information such as headers or status 如果您想获得诸如头信息或状态信息
     * Please return  response => response 请返回response => response
     */

    /**
     * Determine the request status by custom code 通过自定义代码确定请求状态
     * Here is just an example 这里只是一个例子
     * You can also judge the status by HTTP Status Code. 您还可以通过HTTP状态代码来判断状态。
     */
    response => {

        const res = response.data
        // console.log(response)
        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 200) {
            // Message.error(res.msg || 'error');
            return Promise.reject(res.msg || 'error')
        } else {
            // console.log(res)
            return res;
        }
        // setTimeout(function () {
        //     loadingInstance.close();
        // },700)
    },
    error => {
        // console.log(error.code)
        // Message.error(error.message)
        return Promise.reject(error)
        // setTimeout(function () {
        //     loadingInstance.close();
        // },700)
    }
)

export default service
