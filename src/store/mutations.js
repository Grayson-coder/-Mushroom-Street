const mutations = {
    // loading组件的状态更新
    loadingShow(state, show) {
        state.loadingShow = show
    },

    // 增加已有商品数量
    addCartCount(state, good) {
        good.count++
    },

    // 购物车商品的数据（cartList）更新
    addToCart(state, payload) {
        state.cartList.push(payload)
    },


    // 全选按钮
    allSelect(state, isAllSelect) {
        // isAllSelect为全选按钮的状态
        if (isAllSelect) {
            // 将cartList中所有的商品的checked都设为true
            state.cartList.forEach(val => val.checked = true)

        } else { // 将cartList中所有的商品的checked都设为false
            state.cartList.forEach(val => val.checked = false)
        }
    },

    // 修改按钮的选中状态
    checkedClick(state, items) {
        // items 为当前点击按钮时的商品对象
        items.checked = !items.checked
    },

    foo() {
        console.log('foo');
    }
}


export {
    mutations
}