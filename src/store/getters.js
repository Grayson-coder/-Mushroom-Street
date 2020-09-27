const getters = {
    cartList(state) {
        return state.cartList
    },

    // 购物车商品总个数
    cartLength(state) {
        return state.cartList.length
    },

    // 计算当前选中的商品的总价钱
    showPrice(state) {
        let price = 0
        state.cartList.forEach(val => {
            val.checked ? price += Number(val.price) * val.count : ''
        })
        return price.toFixed(2)
    },

    // 获取当前选中的商品的数量
    checkedCount(state) {
        let newArr = state.cartList.filter(val => val.checked)
        return newArr.length
    }
}


export {
    getters
}