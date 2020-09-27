import Vue from 'vue'
import Vuex from 'vuex'

// 1. 注入Vuex插件
Vue.use(Vuex)

// 导入Vuex实例的配置选项
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'

const state = {
    // 存储loading组件是否展示的状态
    loadingShow: false,

    // 存储购物车商品清单
    cartList: [],
}

// 2. 创建Vuex实例
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})

// 3. 导出Vuex实例
export default store