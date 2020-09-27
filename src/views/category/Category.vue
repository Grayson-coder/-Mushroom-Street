<template>
    <div id="category">
        <!-- 分类导航栏 -->
        <nav-bar class="nav-bar">商品分类</nav-bar>

        <!-- 分类左侧菜单栏 -->
        <category-left-menu :category="category" @menuClick="menuClick" />

        <!-- 分类右侧信息 -->
        <category-right-info
            :recommendList="recommendList"
            :goods="goods[currentType]"
            ref="rightInfo"
            @tabClick="tabClick"
        />
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CategoryLeftMenu from './childCategory/CategoryLeftMenu'
import CategoryRightInfo from './childCategory/CategoryRightInfo'

import { getCategoryData, getCategoryMaitKey, getCategoryGoods } from '../../network/category'

export default {
    name: 'Category',
    data() {
        return {
            category: [], // 分类数据
            recommendList: [], // 分类推荐数据
            goods: {  // 右下角商品数据
                pop: [],
                sell: [],
                new: [],
            },

            leftIndex: 0,  //记录左边菜单栏的索引值
            maitKey: '',   // 记录当前的matiKey
            miniWallkey: '',  // 记录当前的miniWallkey
            currentType: 'pop'  // 控制显示的商品类型，默认显示'pop'类型
        }
    },
    components: {
        NavBar,
        CategoryLeftMenu,
        CategoryRightInfo
    },
    mounted() {
        // 请求分类页面基本数据（左边菜单数据）
        this.get_CategoryData().then(res => {
            // 必须等到请求基本数据结束后，才能初始化右边的数据，否则将获取不到category
            this.get_CategoryMaitKey(this.leftIndex)
        })
    },
    methods: {
        /* 
         * 事件监听相关 
         */
        // 左侧菜单栏点击事件
        menuClick(index) {
            this.leftIndex = index
            // 点击左侧菜单栏时，根据菜单栏的索引，发送网络请求，获取右边的数据
            this.get_CategoryMaitKey(this.leftIndex)
            // 回到右侧顶部
            this.$refs.rightInfo.rightScroll.scrollTo(0, 0, 0)
        },

        // 监听选项卡的点击事件,根据传递的索引，动态的决定currentType的值，渲染不同类型的商品数据
        tabClick(index) {
            index === 0 ? this.currentType = 'pop' : ''
            index === 1 ? this.currentType = 'new' : ''
            index === 2 ? this.currentType = 'sell' : ''
        },



        /* 
         * 网络请求相关
         */
        // 请求分类页面基本数据
        get_CategoryData() {
            return new Promise(resolve => {
                getCategoryData().then(res => {
                    this.category = res.category.list
                    resolve()  // 请求分类页面基本数据结束
                })
            })
        },

        // 请求分类页面右边的所有数据
        get_CategoryMaitKey(index) {
            // 根据左边菜单栏索引值，获取到当前的maitKey
            this.maitKey = this.category[index].maitKey
            // 根据左边菜单栏索引值，获取到当前的miniWallkey
            this.miniWallkey = this.category[index].miniWallkey

            // 根据maitKey 获取当前分类页的推荐数据
            getCategoryMaitKey(this.maitKey).then(res => {
                this.recommendList = res.list
            })

            // 调用获取商品数据的方法，根据当前分类页面的miniWallkey来初始化各个商品数据
            this.get_CategoryGoods(this.miniWallkey, 'pop')
            this.get_CategoryGoods(this.miniWallkey, 'sell')
            this.get_CategoryGoods(this.miniWallkey, 'new')
        },

        // 请求分类页面右下角的商品数据
        get_CategoryGoods(miniWallkey, type) {
            getCategoryGoods(miniWallkey, type).then(res => {
                this.goods[type] = res
            })
        }
    },
};
</script>

<style scoped>
#category .nav-bar {
    position: relative;
    z-index: 10;
}
</style>
