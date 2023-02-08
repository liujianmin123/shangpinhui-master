//配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
import routes from './routes.js';
// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写replace|push
// 第一个参数：告诉第原来push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三个参数：失败的回调
VueRouter.prototype.push = function(location,resolve,reject){
	if(resolve && reject){
		originPush.call(this,location,resolve,reject);
	}else{
		originPush.call(this,location,()=>{},()=>{});
	}
}
VueRouter.prototype.replace = function(location,resolve,reject){
	if(resolve && reject){
		originReplace.call(this,location,resolve,reject);
	}else{
		originReplace.call(this,location,()=>{},()=>{});
	}
}

//配置路由
export default new VueRouter({
	//配置路由
	routes,
	// 滚动行为
	scrollBehavior(to,from,savedPosition) {
		return{x:0,y:0}
	}
})