import Vue from 'vue';
import Main from '_c/Main'
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/login'
//加载条
// import { Loading } from 'element-ui';
//工具类
// import {getToken} from '@/util/index'
// import {Loading} from "element-ui";


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
// const options={
//
// }
// let loadingInstance = Loading.service(options);

// router.beforeEach((to, from, next) => {
//     const token = getToken();
//     //判断是否存在该路由
//     if (!token && to.name !== 'login') {
//         //未登陆且要跳转的页面不是登录页
//         next({
//             name: 'admin_login'
//         })
//     }else if (!token && to.name === 'login') {
//         // 未登陆且要跳转的页面是登录页
//         next() // 跳转
//     }else  if (token && to.name === 'login'){
//         // 已登录且要跳转的页面是登录页
//         next({
//             name: 'index' // 跳转到homeName页
//         })
//     } else if (to.matched.length > 0) {
//         //正常路由跳转
//         // store.dispatch('getAdminInfo').then(() => {
//         //     // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
//         //     next()
//         // }).catch(() => {
//         //     // Message.s(this.$t(res.msg));
//         //     setToken('')
//         //     next({
//         //         name: ADMIN_LOGIN_NAME
//         //     })
//         // })
//     } else if (to.name !== '404') {
//         //页面不存在
//         next({
//             name: '404'
//         })
//     }else {
//         //逻辑500错误
//         next({
//             name: '500'
//         })
//     }
// });
// this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
//     loadingInstance.close();
// });

export default router
