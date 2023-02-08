import Vue from 'vue'
import App from './App.vue'
// 三级联动组件，全局组件
import TypeNav from '@/components/TypeNav';
// 分页器
import Pagination from '@/components/Pagination';
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Pagination.name,Pagination);
//引入路由
import router from '@/router';
// 引入仓库
import store from '@/store';
// 引入mock数据
import '@/mock/mockServe.js';
// 引入swiper样式
import "swiper/css/swiper.css";
// 关闭生产提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
  	Vue.prototype.$bus = this;
  },
  //注册路由信息
  router,
  // 注册仓库
  store,
}).$mount('#app')
