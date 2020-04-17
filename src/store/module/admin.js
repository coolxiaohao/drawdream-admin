import Vue from 'vue'
import Vuex from 'vuex'
import { login, logout, getInfo } from '@/api/login'

import {setToken,getToken} from "@/util";

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
            console.log(123456789)
            const username = userInfo.username.trim()
            console.log(username);
            console.log(commit)
            // return new Promise((resolve, reject) => {
            //     login(username, userInfo.password).then(response => {
            //         const data = response.data
            //         setToken(data.token)
            //         commit('SET_TOKEN', data.token)
            //         resolve()
            //     }).catch(error => {
            //         reject(error)
            //     })
            // })
        },
    },
    modules: {}
}
