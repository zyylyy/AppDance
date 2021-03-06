import Vue from 'vue'                            //vue
import VueRouter from 'vue-router'               //vue路由
import App from './app.vue'                      //main
import AppComponents from './components'         //全局组件
import VueAwesomeSwiper from 'vue-awesome-swiper'//vue-swiper
import VueScroller from 'vue-scroller'           //vue-scroller
import routes from './routes'                    //所有routes
import store from './vuex'                       //vuex
import {sync} from 'vuex-router-sync'            //vue-router 的狀態放進 vuex 的 state 中
import cookie from 'js-cookie'                   //cookie set get ...
import infiniteScroll  from 'vue-infinite-scroll'
// import Tab from 'vue-swipe-tab'

import '!style-loader!css-loader!less-loader!./assets/css/normalize.css'  // normalize重置浏览器样式
import '!style-loader!css-loader!less-loader!./assets/css/common.less'    // 引入公共样式

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueLazyLoad from 'vue-lazyload'          //图片懒加载

Vue.use(VueLazyLoad,{                           //api配置
	//preLoad: 1.3,                             //预加载高度比例
    // error:'./static/error.png',              //图片路径错误时加载图片
    // loading:'./static/loading.png'           //预加载图片
})

import './util/common'
import 'swiper/dist/css/swiper.css'

import FastClick from 'fastclick'               //处理移动端click事件300毫秒延迟
FastClick.attach(document.body)                 //body绑定

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)
Vue.use(AppComponents)
Vue.use(infiniteScroll)
Vue.use(VueScroller)
// Vue.use(Tab)

const router = new VueRouter ({
	mode: 'history',//hash
	routes: [
		...routes,
	]
})

sync(store,router)

/*
* 设置页面的title
*/
router.afterEach((to, from, next) => {
    Vue.prototype.util.setTitle(to.meta.title)
});

new Vue({
	store,
	router,
	el: "#app",
	render: h => h(App)
})
