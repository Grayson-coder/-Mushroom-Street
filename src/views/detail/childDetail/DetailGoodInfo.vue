<template>
    <div class="goods-detail-info">

        <div class="good-desc">
            <p>店家寄语：</p>
            <p>{{ goodsDetailInfo.desc }}</p>
        </div>

        <!-- 穿着效果 + 商品图片列表 -->
        <div class="good-img-list">
            <p class="key">{{ goodsDetailInfo.detailImage && goodsDetailInfo.detailImage[0].key }}</p>
            <div v-for="items in imgList" :key="items">
                <img :src="items" @load="imgLoad" />
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgList: [] // 商品详情数据的图片数据
        }
    },
    props: {
        goodsDetailInfo: Object
    },
    watch: {
        // watch 中可以监听组件中数据的变化
        // 有时网络请求的数据过慢会导致页面虽然渲染成功了，但是控制台会报错,我们可以通过watch来实时监听数据的变化
        goodsDetailInfo(newval) {
            // console.log(newval);
            this.imgList = newval.detailImage[0].list
        }
    },
    updated() {
        // this.imgList = this.goodsDetailInfo.detailImage[0].list
    },
    methods: {
        imgLoad() {
            this.$emit('imgLoad')
        }
    },

};
</script>

<style scoped>
.goods-detail-info {
    padding-bottom: 8px;
    border-bottom: 8px solid rgba(100, 100, 100, 0.1);
}

.goods-detail-info .good-desc p:nth-child(1) {
    margin-bottom: 8px;
}
.goods-detail-info .good-desc {
    color: black;
    padding: 10px 10px 20px;
    font-size: 14px;
    border-top: 2px solid rgba(100, 100, 100, 0.1);
    border-bottom: 2px dashed rgba(100, 100, 100, 0.1);
}
.goods-detail-info .good-desc p:nth-child(2) {
    text-indent: 32px;
}
.goods-detail-info .good-img-list .key {
    margin: 20px 0 10px;
    width: 80px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: rgb(231, 231, 231);
    border: 1px solid rgb(231, 231, 231);
    border-radius: 50%;
    box-shadow: 4px 4px 4px #b4b4b4;
}

.goods-detail-info .good-img-list img {
    width: 100vw;
}
</style>
