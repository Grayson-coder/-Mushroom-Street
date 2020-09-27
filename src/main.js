import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import toast from './components/common/toast/index'


Vue.use(toast)

Vue.config.productionTip = false

// 添加中央事件总线
Vue.prototype.$bus = new Vue()

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')