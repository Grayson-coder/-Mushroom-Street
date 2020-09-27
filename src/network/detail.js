import { myaxios } from './request'


// 获取详情页数据
function getDetailData(iid) {
    return myaxios({
        url: '/detail',
        params: {  // 携带查询字符串参数
            iid
        }
    })
}

// 整合DetailBaseInfo组件需要的数据
class GoodsInfoBase {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title  // 商品的标题信息
        this.nowPrice = itemInfo.lowNowPrice // 商品的新价格
        this.oldPrice = itemInfo.oldPrice // 商品的老价格
        this.discountDesc = itemInfo.discountDesc // 商品的折扣信息
        this.columns = columns  // 销量、收藏等数据 是一个数组
        this.services = shopInfo.services // 商品的服务信息，是个数组

        this.desc = itemInfo.desc  // 商品描述，用于添加到购物车渲染
    }
}

// 整合商家店铺数据
class ShopInfo {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo // 店铺logo
        this.shopName = shopInfo.name // 店铺名称
        this.shopSell = shopInfo.cFans // 销售量
        this.shopGoodsCount = shopInfo.cGoods // 店铺的商品数量
        this.shopScore = shopInfo.score  // 店铺的评分信息  是个数组
    }
}

// 获取详情页中的推荐商品列表的数据
function getDetailRecommendGoods() {
    return myaxios({
        url: '/recommend',
    })
}

export {
    getDetailData,
    GoodsInfoBase,
    ShopInfo,
    getDetailRecommendGoods
}