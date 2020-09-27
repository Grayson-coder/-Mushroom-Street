<template>
    <div class="goodsInfobase">
        <div class="goods-title">{{ goodsInfoBase.title }}</div>
        <div class="price">
            <span class="new-price">￥{{ goodsInfoBase.nowPrice }}</span>
            <span class="old-price">{{ goodsInfoBase.oldPrice }}</span>
            <span class="discount-desc">{{ goodsInfoBase.discountDesc }}</span>
        </div>
        <div class="columns">
            <span v-for="(items, index) in goodsInfoBase.columns" :key="index">
                {{ items }}
            </span>
        </div>
        <div class="services">
            <div v-for="(items, index ) in goodsInfoBase.services" :key="index">
                <img :src="items.icon" >
                <span>{{ items.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goodsInfoBase: Object
    },
};
</script>

<style scoped>
.goodsInfobase {
    margin-top: 13px;
    padding: 0 7px;
    background-color: white;
}
.goodsInfobase .goods-title {
    font-size: 16px;
    color: black;
    margin-bottom: 10px;
}
.goodsInfobase .price .new-price{
    font-size: 25px;
    color: deeppink;
    margin-right: 13px;
}

.goodsInfobase .price .old-price {
    color: gray;
    text-decoration: line-through;
    margin-right: 8px;
}

.goodsInfobase .price .discount-desc {
    position: relative;
    top: -6px;
    padding: 0 3px;
    background-color: deeppink;
    color: white;
    border-radius: 5px;
    font-size: 14px;
}

.goodsInfobase .columns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
}

.goodsInfobase .services {
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    color: black;
    font-size: 12px;
}

.goodsInfobase .services img {
    width: 12px;
    height: 12px;
}
</style>
