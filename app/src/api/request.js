// 对于axios进行二次封装
import axios from "axios";
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
// 在当前模块中引入store
import store from '@/store';
// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置一下
const requests = axios.create({
	baseURL: '/api', //请求基本路径
	timeout: 5000 //超时时间
})

//请求拦截器
requests.interceptors.request.use((config) => {
	// console.log(config)
	if (store.state.detail.uuid_token) {
		// 添加请求头userTempId,需要和后台商议字段
		config.headers.userTempId = store.state.detail.uuid_token;
	}
	nprogress.start();//进度条开始走
	return config;
})

// 响应拦截器
requests.interceptors.response.use(
	(res) => { //响应成功的回调
		nprogress.done() //进度条停止
		return res.data;
	},
	//响应失败的回调
	(error) => {
		return Promise.reject(new Error('failed'))
	}
)

export default requests;




