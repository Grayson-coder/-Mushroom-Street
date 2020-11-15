import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import toast from './components/common/toast/index'


Vue.use(toast)

Vue.config.productionTip = false

// 添加中央事件总线
Vue.prototype.$bus = new Vue()

// 解决移动端300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    // 必须通过require导入加载时图片的src
    loading: require('./assets/img/common/lazyloading.png'),
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')