import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'

//全局统一配置VueRouter,避免在router.js里面重复引入vue和vue-router
Vue.use(VueRouter)

const router = new VueRouter(
{
    routes: routes
})
router.beforeEach((to, from, next) => {
    next()
})
router.afterEach((to, from) => {})

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})