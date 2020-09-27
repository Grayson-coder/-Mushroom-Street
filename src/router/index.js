import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 注入插件
Vue.use(VueRouter)



// 懒加载引入组件对象
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Shopcart = () => import('../views/shopcart/Shopcart.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/shopcart',
        component: Shopcart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:iid',
        component: Detail
    }
]

// 2. 创建VueRouter实例
const router = new VueRouter({
    // 配置路由映射关系
    routes,
    mode: 'history'
})

// 3. 导出router实例
export default router

