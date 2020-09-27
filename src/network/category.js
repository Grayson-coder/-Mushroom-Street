import { myaxios } from './request'

// 获取分类页面数据
function getCategoryData() {
    return myaxios({
        url: 'category'
    })
}

// 获取分类页面右上角的推荐数据
function getCategoryMaitKey(maitKey) {
	return myaxios({
		url: '/subcategory',
		params: {
			maitKey
		}
	})
}

// 获取分类页面右下角的商品数据
function getCategoryGoods(miniWallkey, type) {
	return myaxios({
		url: '/subcategory/detail',
		params: {
			miniWallkey,
			type
		}
	})
}




export {
    getCategoryData,
	getCategoryMaitKey,
	getCategoryGoods
}