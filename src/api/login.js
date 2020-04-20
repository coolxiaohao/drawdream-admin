import request from '@/plugins/axios/request'
// import {Loading} from "element-ui";
// const options={
//     text:'拼命加载中',
//     background: 'rgba(0, 0, 0, 0.8)',
//     spinner: 'el-icon-loading',
// }

export function login(username, password,varify,varifyCode) {
    // let loadingInstance = Loading.service(options);
    // console.log(username)
    return request({
        url: '/admin/login',
        method: 'post',
        data: {
            username,
            password,
            varify,
            varifyCode,
        }
    })
    // loadingInstance.close()
}

// export function getInfo(token) {
//     return request({
//         url: '/user/info',
//         method: 'get',
//         params: { token }
//     })
// }
//
export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}

/*获取验证码*/
export function getValidateCode() {
    return request({
        url: '/admin/generateValidateCode',
        method: 'get'
    })
}