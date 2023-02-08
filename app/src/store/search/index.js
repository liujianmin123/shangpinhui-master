import {reqGetSearchInfo} from '@/api';
// search 模块的小仓库

const state = {
	searchList:{}
};
const mutations = {
	GETSEARCHLIST(state,searchList){
		state.searchList = searchList;
	},
};
const actions = {
	// 获取search数据模块
	async getSearchList({ commit }, params = {}){
		// 当前接口给服务器传递一个默认参数{至少是一个空对象}
		let result = await reqGetSearchInfo(params);
		if(result.code === 200){ //代码只要走到这一行，就证明响应一定是成功的！需要进一步判断，业务逻辑是否成功！
			// 若获取成功，联系mutation，将数据存入state
			commit('GETSEARCHLIST',result.data);
		}else{
			// 若获取失败，提示失败的原因
			alert(result.message)
		}
	}
};
// getters的作用是简化仓库中的数据
const getters = {
	goodsList(state){
		return state.searchList.goodsList||[];
	},
	trademarkList(state){
		return state.searchList.trademarkList;
	},
	attrsList(state){
		return state.searchList.attrsList;
	},
};

export default {
	actions,
	mutations,
	state,
	getters,
}