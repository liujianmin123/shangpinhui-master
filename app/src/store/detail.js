import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
// 封装游客身份模块uuid，生成一个随机字符串
import { getUUID } from '@/utils/uuid_token';
const state = {
	goodInfo: {},
	// 游客临时身份
	uuid_token: getUUID(),
};
const mutations = {
	GETGOODINFO(state, goodInfo) {
		state.goodInfo = goodInfo;
	},
};
const actions = {
	// 获取产品信息的action
	async getGoodInfo({ commit }, skuId) {
		let result = await reqGoodsInfo(skuId);
		if (result.code === 200) { //代码只要走到这一行，就证明响应一定是成功的！需要进一步判断，业务逻辑是否成功！
			// 若获取成功，联系mutation，将数据存入state
			commit('GETGOODINFO', result.data);
		} else {
			// 若获取失败，提示失败的原因
			alert(result.message)
		}
	},
	// 将产品添加到购物车中
	async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
		// 加入购物车返回的解构
		let result = await reqAddOrUpdateShopCart(skuId, skuNum);
		// 代表服务器加入购物车成功
		if (result.code == 200) {
			return "ok";
		} else {
			// 代表加入购物车失败
			return Promise.reject(new Error('faile'));
		}
	}
};
// 简化数据
const getters = {
	// 路径导航简化的数据
	categoryView(state) {
		return state.goodInfo.categoryView || {};
	},
	// 产品信息简化的数据
	skuInfo(state) {
		return state.goodInfo.skuInfo || {};
	},
	// 产品售卖属性的简化
	spuSaleAttrList(state) {
		return state.goodInfo.spuSaleAttrList || [];
	}
};
export default {
	state,
	mutations,
	actions,
	getters
}