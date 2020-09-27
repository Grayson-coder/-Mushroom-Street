<template>
    <div v-show="cartList">
        <div class="cart-list" v-for="(items, index) in cartList" :key="index">
            <!-- 选中图标 -->
            <div class="select" @click="checked(items)" :class="{active: items.checked}">
                <img src="../../../assets/img/cart/tick.svg" />
            </div>
            <!-- 商品图片 -->
            <div class="good-img">
                <img :src="items.img" alt />
            </div>
            <!-- 商品信息 -->
            <div class="good-info">
                <p class="title">{{ items.title }}</p>
                <p class="desc">商品描述:{{ items.desc }}</p>
                <p class="bottom">
                    <span class="price">￥{{ items.price }}</span>
                    <span class="count">x{{ items.count }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    computed: {
        // 辅助函数：this.$sotre.getters计算属性 映射 到当前组件
        ...mapGetters(['cartList', 'checkedCount', 'cartLength']),
    },
    methods: {
        checked(items) {
            // 当点击选中按钮时，提交mutaions，目的是为了让当前的商品中的chekced 属性取反
            this.$store.commit('checkedClick', items)

            // 每点击一次就判断购物车商品总数是否和选中的商品一致，
            // 如果一致，则通过中央事件总线修改底部导航栏的全选按钮
            let result = this.cartLength === this.checkedCount
            this.$bus.$emit('checked', result)
        }
    },
};
</script>

<style scoped>
.cart-list {
    display: flex;
    position: relative;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.cart-list .good-img img {
    width: 80px;
    height: 100px;
    vertical-align: middle;
    margin-right: 13px;
}

.cart-list .select {
    width: 20px;
    height: 20px;
    border: 1px solid lightgray;
    border-radius: 50%;
    align-self: center;
    margin-right: 8px;
}

.cart-list .good-info {
    width: 60vw;
}

.cart-list .good-info .title {
    color: black;
}

.cart-list .good-info .title,
.cart-list .good-info .desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.cart-list .good-info .desc {
    font-size: 14px;
    margin: 15px 0 25px;
    color: #666;
}

.cart-list .good-info .bottom {
    position: relative;
}

.cart-list .good-info .price {
    color: red;
}
.cart-list .good-info .count {
    position: absolute;
    right: 8px;
}

.cart-list .active {
    background-color: rgb(255, 20, 147);
}
</style>
