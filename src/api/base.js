import request from '@/plugins/axios/request'

export function getRule(path) {
    // console.log(path)
    // let loadingInstance = Loading.service(options);
    // console.log(path)
    return request({
        url: '/rules/getLoginRules',
        method: 'post',
        data: {
            path
        }
    })
}
export function createRule() {
    return request({
        url: '/rules/createRule',
        method: 'post',
        // data: {
        //     path
        // }
    })
}
