import Cookies from 'js-cookie'
// cookie保存的天数
import config from '@/defaultConfig'
const {cookieExpires} = config

export const TOKEN_KEY = 'admin_token'
export const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, {expires: cookieExpires || 1})
}

export const delToken = () =>{
    Cookies.remove(TOKEN_KEY)
}

export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}
/**
 * 添加cookie值
 * @param key
 * @param value
 * @returns {*}
 */
export const setCookie=(key,value)=> {
    return Cookies.set(key,value,{expires: 7 || 1}) //默认七天
}
/**
 * 读取cookie
 * @param key
 * @returns {boolean|*}
 */
export const getCookie=(key)=>{
    const value = Cookies.get(key)
    if (value) return value
    else return false
}