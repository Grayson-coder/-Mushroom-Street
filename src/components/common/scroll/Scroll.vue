<template>
    <div ref="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScorll from 'better-scroll'

export default {
    data() {
        return {
            BScroll: ''
        }
    },
    mounted() {
        // 创建better scroll实例
        // 通过this.$refs.xxx获取DOM元素可以预防类名冲突
        let bs = new BScorll(this.$refs.wrap, {
            click: true,
            probeType: 2,  // 派发scroll事件，检测滚动的坐标位置
            pullUpLoad: true  // 派发pullingUp事件，实现上拉加载更多功能
        })
        // 将better scroll 实例 赋值到当前组件的data数据下
        this.BScroll = bs

    },
    methods: {
        // 滚动到指定位置的方法
        scrollTo(x, y, time) {
            this.BScroll.scrollTo(x, y, time)
        },
        // 重新计算可滚动的区域
        refresh() {
            console.log('----');
            this.BScorll && this.BScroll.refresh()
        }
    },
};
</script>

<style scoped>

</style>
