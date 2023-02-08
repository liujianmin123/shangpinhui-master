// 当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from './mockRequest';
// 三级联动接口
// /api/product/getBaseCategoryList  请求方式get  没有参数

export const reqCategoryList = () => requests({url:'/product/getBaseCategoryList',method:'get'});

// 获取banner（home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner');

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

// 获取搜索模块数据 地址  /api/list   请求方式post  带参数
// 当前接口给服务器传递一个默认参数{至少是一个空对象}
export const reqGetSearchInfo = (params) => requests({url:"/list",method:'post',data:params});


// 获取产品详情信息的接口  地址  /api/item/{ skuId }  请求方式get 
export const reqGoodsInfo = (skuId) => requests({url:`/item/${ skuId }`,method:'get'});


// 将产品添加到购物车中（获取更新某一个产品的个数）
// 地址 /api/cart/addToCart/{ skuId }/{ skuNum } 请求方式 post 带参数
export const reqAddOrUpdateShopCart = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})

// 获取购物车列表数据接口
// 地址 /api/cart/cartList  请求方式get
export const reqCartList = () => requests({url:'/cart/cartList ',method:'get'});


// 删除购物车产品的接口  地址/api/cart/deleteCart/{skuId} 请求方式delete
export const reqDeleteCartById = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

// 修改商品的选中状态  地址/api/cart/checkCart/{skuId}/{isChecked}  请求方式get
export const reqUpdateCheckedById = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})