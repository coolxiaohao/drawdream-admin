import request from '@/plugins/axios/request'

export function login(username, password) {
    return request({
        url: '/admin/login',
        method: 'post',
        data: {
            username,
            password
        }
    })
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