<template>
    <div class="shop-info">
        <div class="shop-title">
            <img :src="shopInfo.shopLogo" />
            <span>{{ shopInfo.shopName }}</span>
        </div>
        <div class="shop-des">
            <div class="left">
                <div class="sells">
                    <p>{{ shopInfo.shopSell | showCount }}</p>
                    <span>总销量</span>
                </div>
                <div class="all-goods">
                    <p>{{ shopInfo.shopGoodsCount }}</p>
                    <span>全部宝贝</span>
                </div>
            </div>
            <div class="right">
                <p v-for="(items, index) in shopInfo.shopScore" :key="index">
                    <span class="name">{{ items.name }}</span>
                    <span class="score" :class="items.isBetter ? 'red' : 'green'">{{ items.score }}</span>
                    <span :class="items.isBetter ? 'red' : 'green'">{{ items.isBetter ? '高' : '低' }}</span>
                </p>
            </div>
        </div>
        <div class="stroll">
            <span>进店逛逛</span>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        shopInfo: Object
    },
    filters: {
        showCount(value) {
            if (value > 10000) {
                value = (value / 1000).toFixed(1) + '万'
            }
            return value
        }
    }
};
</script>

<style scoped>
.shop-info {
    border-top: 8px solid rgba(100, 100, 100, 0.1);
    padding-bottom: 25px;
    background-color: white;
}

.shop-info .shop-title {
    position: relative;
    padding: 15px 10px 30px;
}

.shop-info .shop-title img {
    width: 63px;
    height: 63px;
    vertical-align: middle;
    margin-right: 15px;
}

.shop-info  .stroll {
    height: 30px;
    width: 30vh;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    background-color: rgb(234, 234, 240);
    border-radius: 15px;

    font-size: 14px;
}

.shop-info .shop-des {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    margin-bottom: 30px;
}
.shop-info .shop-des .left {
    height: 70px;
    text-align: center;
    padding-right: 8px;
    border-right: 1px solid rgba(100, 100, 100, 0.1);
}
.shop-info .shop-des .left p {
    font-size: 20px;
    margin-bottom: 10px;
}
.shop-info .shop-des .left .all-goods {
    display: inline-block;
    margin-left: 35px;
    font-size: 14px;
    color: black;
}

.shop-info .shop-des .left .sells {
    display: inline-block;
    font-size: 14px;
    color: black;
}

.shop-info .shop-des .right p{
    font-size: 12px;
    margin-bottom: 12px;
    color: black;
}

.shop-info .shop-des .right p .name, .shop-info .shop-des .right p .score {
    margin-right: 13px;
}
.shop-info .shop-des .right p .score {
    display: inline-block;
    width: 30px;
    text-align: center;
}

.red {
    color: #f13e3a;
}

.green {
    color: green;
}
</style>
