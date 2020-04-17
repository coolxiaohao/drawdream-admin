import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * @description 用于记录后台信息状态，如用户名称等
 */
export default new Vuex.Store({
    //单一状态树
    state: {},
    //变更状态 必須為同步
    mutations: {},
    //异步发行
    actions: {},
    modules: {}
})
