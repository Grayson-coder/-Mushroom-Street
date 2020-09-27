import { myaxios } from './request'


// 获取首页展示数据
function getHomeData() {
    return myaxios({
        url: '/home/multidata'
    })
}

// 获取首页中的商品列表数据
function getHomeGoods(type, page) {
    return myaxios({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}


export {
    getHomeData,
    getHomeGoods
}




