<template>
    <div class="tab-bar">
        
        <div class="tab-bar-item" @click="itemClick('/home')">
            <img src='~assets/img/tabbar/home_active.svg' alt="" v-if="currentLink === '/home'">
            <img src="~assets/img/tabbar/home.svg" alt="" v-else>
            <p :style="{color: currentLink === '/home' ? textColor : ''}">首页</p>
        </div>

        <div class="tab-bar-item" @click="itemClick('/category')">
            <img src="~assets/img/tabbar/category_active.svg" alt="" v-if="currentLink === '/category'">
            <img src="~assets/img/tabbar/category.svg" alt="" v-else>
            <p :style="{color: currentLink === '/category' ? textColor : ''}">分类</p>
        </div>

        <div class="tab-bar-item" @click="itemClick('/shopcart')">
            <img src="~assets/img/tabbar/shopcart_active.svg" alt="" v-if="currentLink === '/shopcart'">
            <img src="~assets/img/tabbar/shopcart.svg" alt="" v-else>
            <p :style="{color: currentLink === '/shopcart' ? textColor : ''}">购物车</p>
        </div>

        <div class="tab-bar-item" @click="itemClick('/profile')">
            <img src="~assets/img/tabbar/profile_active.svg" alt="" v-if="currentLink === '/profile'">
            <img src="~assets/img/tabbar/profile.svg" alt="" v-else>
            <p :style="{color: currentLink === '/profile' ? textColor : ''}">我的</p>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            // 用于记录当前页面的路由，如果路由为'/'，则设置为'/home'路由
            currentLink: window.location.pathname === '/' ? '/home' : window.location.pathname 
        }
    },
    props: {
        // 接收父组件传递过来的数据
        textColor: {
            default: 'red'
        }
    },
    methods: {
        itemClick(link) {
            if (link === window.location.pathname) { // 阻止同一路由重复跳转
                return
            } else {
                // 跳转路由
                this.$router.replace(link)
                this.currentLink = link // 记录跳转的路由
            }
        }
    },
}
</script>

<style scoped>
    .tab-bar {
        position: fixed;
        bottom: 0;
        z-index: 201;

        display: flex;
        height: 49px;
        /* vw：相对于当前视口的宽度 */
        width: 100vw;
        font-size: 14px;
        background-color: rgba(245,244,245);
    }

    .tab-bar-item {
        flex: 1;
        text-align: center;
    }

    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        /* 减去图片默认的3px */
        vertical-align: middle;
    }

    .active {
        color: red;
    }
</style>
