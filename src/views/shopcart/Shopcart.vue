<template>
    <div id="shop-cart">
        <!-- 购物车顶部导航栏 -->
        <nav-bar class="nav-bar">购物车 ({{ cartCount }})</nav-bar>

        <scroll class="scroll" ref="scroll">
            <!-- 购物车商品列表 -->
            <cart-list />
        </scroll>

        <!-- 购物车计算底部 -->
        <shop-cart-bottom-bar />
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childShopCart/ShopCartList'
import ShopCartBottomBar from './childShopCart/ShopCartBottomBar'

// 导入Vuex辅助函数
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            cartCount: 'cartLength'
        }),
    },
    components: {
        NavBar,
        Scroll,
        CartList,
        ShopCartBottomBar,
    },
};
</script>

<style scoped>
#shop-cart .scroll {
    position: fixed;
    top: 44px;
    height: calc(100vh - 44px - 49px - 39px);
}
#shop-cart .nav-bar {
    position: relative;
    z-index: 300;
}
</style>
