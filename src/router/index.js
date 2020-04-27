import Vue from 'vue';
import Main from '_c/Main'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/login'
//加载条
// import { Loading } from 'element-ui';
//工具类
import {getToken, setToken} from '@/util/index'
import store from "@/store";
import {Loading,Message} from "element-ui";


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'admin_index',
        redirect: '/admin/index',
        component: Main,
        meta: {
            icon: 'md-home',
            title: "首页",
            notCache: true
        },
        children: [
            {
                path: '/admin/index',
                name: 'admin_index_index', //name 一定要对应默认的
                meta: {
                    // hideInMenu: true,
                    icon: 'md-home',
                    title: '首页',
                    notCache: true,
                },
                component: Home
            },
        ]
    },
    {
        path: '/admin/about',
        name: 'admin_about',
        redirect: '/admin/about',
        component: Main,
        meta: {
            icon: 'md-about',
            title: "关于",
            notCache: true
        },
        children: [
            {
                path: '/admin/about',
                name: 'admin_index_about', //name 一定要对应默认的
                meta: {
                    // hideInMenu: true,
                    icon: 'md-home',
                    title: '关于',
                    notCache: true,
                },
                component: About
            },
        ]
    },
    {
        path: '/admin/login',
        name: 'login',
        title: '登录',
        component: Login,
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
});
const options = {
    text: '拼命加载中',
    background: 'rgba(0, 0, 0, 0.8)',
    spinner: 'el-icon-loading',

}
router.beforeEach((to, from, next) => {
    let loadingInstance = Loading.service(options);
    Loading.service(options);
    // console.log(to.path)
    // store.dispatch('createRule').then((res) => {
    //     if (res.code == 200){
    //         console.log("成功")
    //     }
    // })
    store.dispatch('getRules',to.path).then((res) => {
        // 获取页面登录权限 查看是否需要登录权限
        if (res.code === 200){
            let rules = null
            rules = res.data;
            if (rules != null && rules.type > 0) {
                const token = getToken();
                //判断是否存在该路由
                if (!token && to.name !== 'login') {
                    //未登陆且要跳转的页面不是登录页
                    console.log(store.state.system.previous)
                    if (store.state.system.previous !== '' && store.state.system.previous !== undefined) {
                        Message({message: "登录过期！请重新登录！", type: 'error'});
                        store.dispatch('delPrevious','')
                    }

                    next({
                        name: 'login'
                    })


                } else if (!token && to.name === 'login') {
                    // 未登陆且要跳转的页面是登录页
                    next() // 跳转
                } else if (token && to.name === 'login') {
                    // 已登录且要跳转的页面是登录页

                    // store.state.system.previous = to.path
                    next({
                        name: 'admin_index' // 跳转到homeName页
                    })

                } else if (to.matched.length > 0) {
                    store.dispatch('setPrevious',to.path)
                    //正常路由跳转
                    // store.dispatch('getAdminInfo').then(() => {
                    //     // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
                    next()

                    // }).catch(() => {
                    //     // Message.s(this.$t(res.msg));
                    //     setToken('')
                    //     next({
                    //         name: 'admin_index_index'
                    //     })
                    // })
                } else {
                    // store.dispatch('setPrevious',to.path)
                    store.dispatch('setPrevious',to.path)
                    next('admin_index');
                }
            } else {
                next()
            }
        }else {
            Message({
                message: res.msg, type: 'error'
            })
        }
    }).catch((error) => {
        Message({
            message: error, type: 'error'
        })
    })
    loadingInstance.close();

});

export default router
