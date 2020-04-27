import Vue from 'vue'
import Vuex from 'vuex'
import {delLocalStorage, getLocalStorage, setLocalStorage} from "../../util";

Vue.use(Vuex)
/**
 * @description 用与记录系统状态
 */
export default{
    //单一状态树
    state: {
        previous: getLocalStorage('precious')
    },
    //变更状态 必須為同步
    mutations: {
        SET_PRAEIOUS: (state, previous) => {
            state.previous = previous
        },
    },
    //异步发行
    actions: {
        setPrevious({commit},previous){
            console.log(previous)
            commit('SET_PRAEIOUS',previous)
            setLocalStorage('precious',previous)
        },
        delPrevious({commit},previous){
            // console.log(previous)
            commit('SET_PRAEIOUS',previous)
            delLocalStorage('precious')
        },
    },
    modules: {}
}
