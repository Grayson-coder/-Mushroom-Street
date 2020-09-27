<template>
    <div id="home">
        <!-- 导航栏 -->
        <nav-bar class="nav-bar">购物街</nav-bar>

        <tab-control
            :titles="['流行', '新款', '精选']"
            @itemClick="itemClick"
            v-show="showTabControl"
            class="tab-control-copy"
            ref="tabControlCopy"
        />

        <scroll class="scroll-wrap" ref="scroll">
            <!-- 首页轮播图 -->
            <home-swiper :banner="banner" class="home-swiper" />
            <!-- 推荐区 -->
            <home-recommend :recommend="recommend" />
            <!-- 本周流行区域，只有一张图片 -->
            <home-popular />
            <!-- 选项卡 -->
            <tab-control
                :titles="['流行', '新款', '精选']"
                class="tab-control"
                @itemClick="itemClick"
                ref="tabControl"
            />
            <!-- 商品列表 -->
            <good-list :goods="showGoods" @imgLoad="goodListImgLoad" />
        </scroll>

        <!-- 回到顶部的按钮 -->
        <back-top @click.native="backClick" v-show="showBackTop" />
    </div>
</template>

<script>
// 公共组件
import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodList from 'content/goodList/GoodList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backTop/BackTop'

// 属于首页组件的视图组件
import HomeSwiper from './childHome/HomeSwiper'
import HomeRecommend from './childHome/HomeRecommend'
import HomePopular from './childHome/HomePopular'


// 网络请求
import { getHomeData, getHomeGoods } from '../../network/home'

export default {
    name: 'Home',
    data() {
        return {
            banner: [], // 轮播图数据
            recommend: [], // 推荐区数据
            // 首页商品列表的数据结构，页数默认为第一页
            goods: {
                pop: { page: 1, list: [] },
                new: { page: 1, list: [] },
                sell: { page: 1, list: [] },
            },

            currentType: 'pop',  // 决定要展示什么类型的商品数据
            homeBScroll: '',  // 存储属于home组件的better scroll实例
            showBackTop: false,  // 回到顶部图标的显示和隐藏
            showTabControl: false, // 决定复制的选项卡的显示和隐藏

            TabControlOffsetTop: 0,  // 存储scroll中选项卡的偏移量
            saveY: 0  // 记录home首页离开前的y坐标
        }
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        },
    },
    components: {
        NavBar,
        TabControl,
        GoodList,
        Scroll,
        BackTop,

        HomeSwiper,
        HomeRecommend,
        HomePopular,
    },
    mounted() {
        // 将scroll组件中的BScroll实例赋值到home组件对象上
        this.homeBScroll = this.$refs.scroll.BScroll

        // 调用监听scroll事件，决定BackTop组件是否展示的方法
        this.isShowBackTop()
        // 调用监听pullingUp事件，实现上拉加载更多的方法
        this.loadMore()

        // 调用发送网络请求，请求首页数据的方法
        this.get_HomeData()

        // 调用获取商品数据的方法，并且传入商品类型，用于初始化数据
        this.get_HomeGoods('pop')
        this.get_HomeGoods('new')
        this.get_HomeGoods('sell')

    },
    updated() {
        this.TabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
    },
    activated() {  // 进入home组件时，直接跳转到上次离开时记录的y坐标
        this.homeBScroll.refresh()
        this.homeBScroll.scrollTo(0, this.saveY, 700)
        this.homeBScroll.refresh()
    },
    deactivated() {  // 离开home组件时，记录离开时的滚动的y坐标
        this.saveY = this.homeBScroll.y
    },
    methods: {
        /* 事件监听的相关方法 */
        itemClick(index) { // 商品分类选项卡点击
            index === 0 ? this.currentType = 'pop' : ''
            index === 1 ? this.currentType = 'new' : ''
            index === 2 ? this.currentType = 'sell' : ''

            // 同步两个商品选项卡的状态
            this.$refs.tabControlCopy.currentIndex = index
            this.$refs.tabControl.currentIndex = index
        },

        // 点击之后回到滚动区域顶部
        backClick() {
            this.homeBScroll.scrollTo(0, 0, 700)
        },


        /* 其他方法... */
        // 决定BackTop组件和tab-control-copy组件是否展示
        isShowBackTop() {
            this.homeBScroll.on('scroll', position => {
                this.showBackTop = -(position.y) > 1000
                this.showTabControl = -(position.y) >= this.TabControlOffsetTop
            })
        },

        // 上拉加载更多
        loadMore() {
            // 监听better scroll 滚动区域是否滚动到了最底部
            this.homeBScroll.on('pullingUp', () => {
                // 发送网络请求，获取当前商品类型的商品数据
                this.get_HomeGoods(this.currentType)
                // 结束本次的pullingUp事件，继续下一次的pullingUp事件
                this.homeBScroll.finishPullUp()
                // 由于DOM中加载了新的商品数据，因此需要重新计算最新的可滚动区域
                this.homeBScroll.refresh()
            })
        },

        // 当商品列表图片加载完之后，重新计算可滚动区域高度
        goodListImgLoad() {
            this.homeBScroll.refresh()
        },

        /* 网络请求的相关方法 */
        get_HomeData() {
            // 请求轮播图和推荐区数据
            getHomeData().then(res => {
                this.banner = res.banner.list
                this.recommend = res.recommend.list
            })
        },
        get_HomeGoods(type) {
            // 获取当前商品的页码数
            const page = this.goods[type].page
            // 请求首页商品数据
            getHomeGoods(type, page).then(res => {
                // 保存数据
                this.goods[type].list.push(...res.list)
                // 每次获取对应的商品类型的数据后，就要将该商品类型的页数加1
                // 以便于下一次能够获取页码+1之后的数据
                this.goods[type].page++
            })
        },

    },
};
</script>

<style scoped>
#home .nav-bar {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100vw;
}

#home .home-swiper {
    margin-top: 44px;
}
#home .tab-control {
    position: sticky;
    top: 43px;
    z-index: 200;
}

#home .scroll-wrap {
    position: relative;
    height: calc(100vh - 93px);
}

.tab-control-copy {
    position: absolute !important ;
    top: 44px !important;
    width: 100vw;
}
</style>
