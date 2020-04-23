import Vue from 'vue'
import Vuex from 'vuex'
import { login,getValidateCode } from '@/api/login'
// import util from  '../../util'
import {setToken,getToken} from "@/util";
import {getRule,createRule} from "@/api/base";

Vue.use(Vuex)
/**
 * @description 用于记录后台信息状态，如用户名称等
 */
export default {
    //单一状态树
    state: {
        token: getToken(),
        name: '',
        avatar: '',
        roles: []
    },
    //变更状态 必須為同步
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        }
    },
    //异步发行
    actions: {
        // 登录
        Login({ commit }, userInfo) {
            // console.log(123456789)
            const username = userInfo.username.trim()
            // console.log(username);
            // console.log(commit)
            return new Promise((resolve, reject) => {
                login(username, userInfo.password,userInfo.varify,userInfo.varifyCode).then(response => {
                    const data = response.data
                    // console.log(data)
                    setToken(data.adminToken)
                    commit('SET_TOKEN', data.adminToken)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getValidateCode() {
            return new Promise((resolve, reject) => {
                getValidateCode().then(res => {
                    // const data = res.data
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // eslint-disable-next-line no-unused-vars
        getRules({ commit },path) {
            return new Promise((resolve, reject) => {
                getRule(path).then(res => {
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        createRule() {
            // console.log(1111)
            return new Promise((resolve, reject) => {
                createRule().then(res => {
                    // const data = res.data
                    resolve(res)
                }).catch(error => {
                    reject(error)
                })
            })
        },
    },
    modules: {}
}
