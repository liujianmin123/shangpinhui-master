import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api';
// home 模块的小仓库

const state = {
	// home仓库中存储三级菜单的数据
	categoryList:[],
	// 轮播图的数据
	bannerList:[],
	// floor组件的数据
	floorList:[],
	
}

const mutations = {
	CATEGORYLIST(state,categoryList){
		state.categoryList = categoryList;
	},
	GETBANNERLIST(state,bannerList){
		state.bannerList = bannerList;
	},
	GETFLOORLIST(state,floorList){
		state.floorList = floorList;
	}
}

const actions = {
	async categoryList({commit}){
		let result = await reqCategoryList();
		if(result.code === 200){ //代码只要走到这一行，就证明响应一定是成功的！需要进一步判断，业务逻辑是否成功！
			// 若获取成功，联系mutation，将数据存入state
			commit('CATEGORYLIST',result.data)
		}else{
			// 若获取失败，提示失败的原因
			alert(result.message)
		}
	},
	// 获取首页轮播图的数据
	async getBannerList({commit}){
		let result = await reqGetBannerList();
		if(result.code === 200){ //代码只要走到这一行，就证明响应一定是成功的！需要进一步判断，业务逻辑是否成功！
			// 若获取成功，联系mutation，将数据存入state
			commit('GETBANNERLIST',result.data)
		}else{
			// 若获取失败，提示失败的原因
			alert(result.message)
		}
	},
	// 获取floor数据
	async getFloorList({commit}){
		let result = await reqFloorList();
		if(result.code === 200){ //代码只要走到这一行，就证明响应一定是成功的！需要进一步判断，业务逻辑是否成功！
			// 若获取成功，联系mutation，将数据存入state
			commit('GETFLOORLIST',result.data)
		}else{
			// 若获取失败，提示失败的原因
			alert(result.message)
		}
	},
}

const getters = {}

export default {
	actions,
	mutations,
	state,
	getters,
}