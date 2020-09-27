<template>
    <div class="detail-nav-bar">
        <span class="back" @click="backHome">
            <img src="../../../assets/img/common/back.svg" alt />
        </span>

        <span
            v-for="(items, index) in title"
            :key="index"
            :class="{'active': currentIndex === index}"
            @click="navBarClick(index)"
        >{{ items }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    methods: {
        backHome() {
            // 回退到home组件页面，有历史缓存，不会被重新刷新
            window.history.back()
        },
        navBarClick(index) {
            this.currentIndex = index
            this.$emit('tabBarClick', index)
        }
    },
};
</script>

<style scoped>
.detail-nav-bar {
    position: relative;
    display: flex;
    height: 44px;
    line-height: 44px;
    padding: 0 60px;
    background-color: white;
    text-align: center;
}

.detail-nav-bar span {
    flex: 1;
}

.detail-nav-bar .back {
    position: absolute;
    left: 5px;
}
.detail-nav-bar .back img {
    vertical-align: middle;
}

.detail-nav-bar .active {
    color: pink;
}
</style>
