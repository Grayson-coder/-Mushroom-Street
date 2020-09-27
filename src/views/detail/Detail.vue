<template>
    <div id="detail">
        <!-- 详情页导航栏 -->
        <detail-nav-bar class="detail-nav-bar" @tabBarClick="tabBarClick" ref="detailNavBar" />

        <scroll class="scroll" ref="scroll">
            <!-- 详情页轮播图 -->
            <detail-swiper :banner="topImg" />
            <!-- 商品基本信息 -->
            <detail-base-info :goodsInfoBase="goodsInfoBase" />

            <!-- 商家店铺信息 -->
            <detail-shop-info :shopInfo="shopInfo" />

            <!-- 商品详情数据 -->
            <detail-good-info :goodsDetailInfo="goodsDetailInfo" @imgLoad="imgLoad" />

            <!-- 商品参数视图 -->
            <detail-good-params :goodParams="goodParams" @refresh="imgLoad" ref="goodParams" />

            <!-- 用户评价视图 -->
            <detail-comment :commentInfo="commentInfo" ref="comment" />

            <!-- 推荐的商品列表 -->
            <detail-recommend-info
                :recommendGoods="recommendGoods"
                @imgLoad="imgLoad"
                ref="recommendGoods"
            />
        </scroll>

        <!-- 底部的选项卡 -->
        <detail-bottom-bar @addToCart="addToCart" />

        <!-- 回到顶部 -->
        <back-top @click.native="backTop" v-show="showBackTop" />

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { backTop } from '../../common/mixin'

import Scroll from 'components/common/scroll/Scroll'
import Toast from 'components/common/toast/Toast'

import DetailNavBar from './childDetail/DetailNavBar'
import DetailSwiper from './childDetail/DetailSwiper'
import DetailBaseInfo from './childDetail/DetailBaseInfo'
import DetailShopInfo from './childDetail/DetailShopInfo'
import DetailGoodInfo from './childDetail/DetailGoodInfo'
import DetailGoodParams from './childDetail/DetailGoodParams'
import DetailComment from './childDetail/DetailComment'
import DetailRecommendInfo from './childDetail/DetailRecommendInfo'
import DetailBottomBar from './childDetail/DetailBottomBar'

import { getDetailData, GoodsInfoBase, ShopInfo, getDetailRecommendGoods } from 'network/detail.js'


export default {
    mixins: [backTop],
    data() {
        return {
            topImg: [], // 轮播图数据
            goodsInfoBase: {}, // 商品基本数据
            shopInfo: {},  // 商家店铺数据
            goodsDetailInfo: {},  // 商品详情数据
            goodParams: {},  // 商品参数信息
            commentInfo: {}, // 用户评价数据
            recommendGoods: [], // 推荐商品列表数据

            detailBScroll: '',  // 详情页的滚轮实例
            showBackTop: false,  // 控制回到顶部按钮是否展示

        }
    },
    computed: {
        iid() {
            return this.$route.params.iid
        }
    },
    components: {
        Scroll,

        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodInfo,
        DetailGoodParams,
        DetailComment,
        DetailRecommendInfo,
        DetailBottomBar,
    },
    mounted() {
        // 初始化详情页的BScroll实例
        this.detailBScroll = this.$refs.scroll.BScroll

        // 调用获取详情页的方法
        this.get_DetailData(this.iid)
        // 调用获取详情页中推荐的商品列表的方法
        this.get_DetailRecommendGoods()

        this.backTopShow()
        this.showLedTitle()
    },
    methods: {
        ...mapActions(['updataCart']), 
        /* 监听事件相关方法 */
        imgLoad() {
            // 等DOM重新渲染完成之后在计算可滚动的高度
            this.$nextTick(() => {
                this.detailBScroll.refresh()
            })
        },

        tabBarClick(index) {
            // 根据子组件传递的index，滚动到不同的区域
            if (index === 0) {
                this.detailBScroll.scrollTo(0, 0, 500)

            } else if (index === 1) {
                let paramsTop = this.$refs.goodParams.$el.offsetTop
                this.detailBScroll.scrollTo(0, -paramsTop, 0)

            } else if (index === 2) {
                let commentTop = this.$refs.comment.$el.offsetTop
                this.detailBScroll.scrollTo(0, -commentTop, 0)
            } else {
                let recommendTop = this.$refs.recommendGoods.$el.offsetTop
                this.detailBScroll.scrollTo(0, -recommendTop, 0)
            }
        },

        // 点击加入购物车事件
        addToCart() {
            // 获取当前详情页中商品的数据，并且整合购物车界面需要的数据到一个对象身上
            let good = {
                img: this.topImg[0],  // 商品图片
                title: this.goodsInfoBase.title, // 商品标题
                desc: this.goodsInfoBase.desc,  // 商品描述
                price: this.goodsInfoBase.nowPrice,  // 商品价格
                iid: this.iid,  // 商品独有的iid
                count: 1,  // 商品的数量，默认为1 在Vuex中会判断
                checked: false  // 商品默认不被选中
            }

            // 提交actions 传入要加入购物车的商品数据
            this.updataCart(good).then(res => {
                this.$toast.show(res, 2000)
            })
        },


        // 决定回到顶部的图标是否展示
        backTopShow() {
            this.detailBScroll.on('scroll', position => {
                -position.y > 1000 ? this.showBackTop = true : this.showBackTop = false
            })
        },

        // 根据滚动内容，展示不同的高亮标题
        showLedTitle() {
            this.detailBScroll.on('scroll', position => {
                // 商品区域高度
                let paramsTop = this.$refs.goodParams.$el.offsetTop
                // 评论区域高度
                let commentTop = this.$refs.comment.$el.offsetTop
                // 推荐商品区域高度
                let recommendTop = this.$refs.recommendGoods.$el.offsetTop
                // 根据滚动的范围判断，动态的修改顶部导航栏组件的currentIndex
                if (-position.y >= paramsTop && -position.y < commentTop) {
                    this.$refs.detailNavBar.currentIndex = 1

                } else if (-position.y >= commentTop && -position.y < recommendTop) {
                    this.$refs.detailNavBar.currentIndex = 2

                } else if (-position.y >= recommendTop) {
                    this.$refs.detailNavBar.currentIndex = 3

                } else {
                    this.$refs.detailNavBar.currentIndex = 0
                }
            })
        },


        /* 网络请求相关方法 */
        get_DetailData(iid) {
            getDetailData(iid).then(res => {
                // console.log(res.itemInfo);
                // 1. 请求来的轮播图数据
                this.topImg = res.itemInfo.topImages
                // 2. 商品基本数据
                this.goodsInfoBase = new GoodsInfoBase(res.itemInfo, res.columns, res.shopInfo)
                // 3. 商家店铺数据
                this.shopInfo = new ShopInfo(res.shopInfo)
                // 4. 商品详情数据
                this.goodsDetailInfo = res.detailInfo
                // 5. 商品参数信息
                this.goodParams = res.itemParams
                // 6. 用户评价数据
                this.commentInfo = res.rate
            })
        },

        // 7. 请求 推荐商品列表 的数据
        get_DetailRecommendGoods() {
            getDetailRecommendGoods().then(res => {
                // console.log(res.list[0].image);
                this.recommendGoods = res.list
            })
        }

    },
};
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 202;
    background-color: white;
}
#detail .detail-nav-bar {
    position: relative;
    z-index: 9;
}

#detail .scroll {
    height: calc(100vh - 44px - 49px);
}

#detail .scroll .test {
    background-color: white;
}


</style>
