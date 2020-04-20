//vue 主线程
import Vue from 'vue';
//封装了AJAX的一个组件
import './plugins/axios/axios'
//vue 入口文件
import App from './App.vue';
//服务进程
import './registerServiceWorker';
//路由
import router from './router';
//状态树操作
import store from './store';
//element ui 组件
import './plugins/element';
//粒子动画插件
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false;
//主入口文件
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
