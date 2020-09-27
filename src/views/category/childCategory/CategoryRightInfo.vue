<template>
    <div class="right-info" v-show="recommendList">
        <!-- 右边的选项卡 -->
        <tab-control
            :titles="['流行', '最新', '推荐']"
            @itemClick="tabClick"
            class="tab-control-copy"
            v-show="tabControlShow"
            ref="tabControlCopy"
        />

        <scroll class="scroll" ref="scroll">
            <!-- 推荐区 -->
            <category-recommend :recommendList="recommendList" @imgLoad="imgLoad" />
            <!-- 选项卡 -->
            <tab-control :titles="['流行', '最新', '推荐']" @itemClick="tabClick" ref="tabControl" />
            <!-- 商品列表 -->
            <category-goods :goods="goods" @imgLoad="imgLoad" />
        </scroll>

        <!-- 回到顶部 -->
        <back-top @click.native="backTop" />
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backTop/BackTop'
import TabControl from 'components/content/tabControl/TabControl'

import CategoryRecommend from './CategoryRecommend'
import CategoryGoods from './CategoryGoods'

export default {
    data() {
        return {
            rightScroll: '',
            tabControlShow: false , // 控制拷贝的tabcontrol是否展示
            tabControlTop: ''  // 记录tabcontrol偏移量
        }
    },
    props: {
        recommendList: Array,
        goods: Array
    },
    mounted() {
        // 初始化右半区域的scroll实例
        this.rightScroll = this.$refs.scroll.BScroll
        // 监听滚动位置，实现tabcontrol的隐藏与显示
        this.rightScroll.on('scroll', postion =>  {
            -postion.y >= this.tabControlTop ? this.tabControlShow = true : this.tabControlShow = false
        })
    },

    updated() {
        // 在updated中获取选项卡的top值会比较准确
        this.tabControlTop = this.$refs.tabControl.$el.offsetTop
    },
    components: {
        Scroll,
        TabControl,
        BackTop,
        CategoryRecommend,
        CategoryGoods,
    },
    methods: {
        imgLoad() {
            // 重新计算可滚动高度
            this.rightScroll.refresh()
        },
        // 点击回到顶部
        backTop() {
            this.rightScroll.scrollTo(0, 0, 500)
        },
        // 监听选项卡的点击事件
        tabClick(index) {
            // 发射给父组件tabClick事件，让父组件决定渲染什么类型的数据
            this.$emit('tabClick', index)
            // 让两个选项卡的状态保持一致
            this.$refs.tabControlCopy.currentIndex = index
            this.$refs.tabControl.currentIndex = index
        }
    },
};
</script>

<style scoped>
.right-info {
    position: fixed;
    right: 0;
    width: 75vw;
}

.right-info .scroll {
    height: calc(100vh - 44px - 49px);
}

.right-info .tab-control-copy {
    position: fixed;
    width: 75vw;
    
    z-index: 301;
}


</style>
