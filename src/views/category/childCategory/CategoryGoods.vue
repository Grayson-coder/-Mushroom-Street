<template>
    <div class="goods">
        <div
            v-for="(items, index) in goods"
            :key="index"
            class="goods-list-items"
            @click="goodListClick(items.iid)"
        >
            <!-- 商品图片 -->
            <img :src="items.show ? items.show.img : items.image || items.img" @load="imgLoad" />
            <!-- 商品信息 -->
            <div class="info">
                <p class="title">{{ items.title.substr(0, 12) }}...</p>
                <span class="price">{{ items.price }}</span>
                <span class="count">
                    <img src="~assets/img/common/collect.svg" alt />
                    {{ items.cfav }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goods: Array
    },
    methods: {
        imgLoad() {
            this.$emit('imgLoad')
        },
        goodListClick(iid) {
            if (iid) {
                this.$router.push({
                    path: '/detail/' + iid,
                })
            }

        }
    },
};
</script>

<style scoped>
.goods {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.goods .goods-list-items {
    position: relative;
    width: 50%;
    margin-bottom: 8px;
    text-align: center;
}

.goods .goods-list-items .info {
    text-align: center;
    font-size: 12px;
}

.goods .goods-list-items img {
    width: 94%;
    border-radius: 5px;
}

.goods .goods-list-items .info .price {
    color: var(--color-high-text);
    margin-right: 10px;
}

.goods .goods-list-items .info .count img {
    width: 15px;
    height: 15px;
    vertical-align: bottom;
}
</style>
