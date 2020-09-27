<template>
    <div>
        <!-- 根据路由展示不同组件 -->
        <keep-alive include="Home,Category,Profile">
            <router-view></router-view>
        </keep-alive>
        
        <!-- 最底部的选项卡 -->
        <main-tab-bar />
        <!-- loading组件 -->
        <loading v-show="$store.state.loadingShow"></loading>

        
    </div>
</template>

<script>
import MainTabBar from './components/content/mainTabBar/MainTabBar'
import Loading from './components/common/loading/Loading'


export default {
    components: {
        MainTabBar,
        Loading
    },
};
</script>

<style scoped>
@import url("./assets/css/base.css");
</style>
