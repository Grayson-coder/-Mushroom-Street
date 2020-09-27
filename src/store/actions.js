const actions = {
    updataCart({ state, commit }, payload) {
        // 核心：遍历store中的cartList，判断传递过来的商品的iid是否已经存在了

        // 1. find方法会迭代数组，回调函数返回true时，会将当前迭代的元素作为返回值返回
        let item = state.cartList.find(val => val.iid === payload.iid)

        // 2. 如果cartList数组中已经有了要添加的商品，则让cartList中对应的商品的数量 + 1
        // 3. 如果cartList数组中没有当前要添加的商品，则通过push方法将要添加的商品追加到cartlist数组中

        return new Promise(resolve => {
            if (item) {
                commit('addCartCount', item)
                resolve(`加入购物车 + ${item.count}`)
            } else {
                commit('addToCart', payload)
                resolve('加入购物车成功')
            }
        })

    }
}

export {
    actions
}






