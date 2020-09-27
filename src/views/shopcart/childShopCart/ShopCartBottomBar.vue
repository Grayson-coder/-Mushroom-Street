<template>
    <div class="bottom-bar">
        <div class="all-select" @click="allClick">
            <img src="../../../assets/img/cart/tick.svg" :class="{red: active}" /> 全选
        </div>

        <div class="total-price">总计：￥{{ $store.getters.showPrice }}</div>

        <div class="to-buy">去结算 ({{ $store.getters.checkedCount }})</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: false,  // 控制全选按钮是否高亮
        }
    },
    mounted() {
        // 在mounted生命周期函数中监听checked中央事件总线，根据传递的结果再决定active的值
        this.$bus.$on('checked', result => {
            result ? this.active = true : this.active = false
        })
    },
    methods: {
        allClick() {
            this.active = !this.active
            // 提交mutaions，传入当前全选的状态 目的是为了修改 Vuex -> cartlist 中每个商品的checked属性
            this.$store.commit('allSelect', this.active)
        }
    },
};
</script>

<style scoped>
.bottom-bar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 49px;
    width: 100vw;
    height: 39px;
    line-height: 39px;
    background-color: rgb(248, 248, 255);
    padding-left: 8px;
}

.bottom-bar .all-select {
    color: black;
}
.bottom-bar .all-select img {
    width: 20px;
    height: 20px;
    border: 1px solid lightgray;
    border-radius: 50%;
    vertical-align: middle;
}
.bottom-bar .to-buy {
    width: 110px;
    text-align: center;
    background-color: rgb(255, 182, 193);
}

.bottom-bar .red {
    background-color: rgb(255, 20, 147);
}
</style>
