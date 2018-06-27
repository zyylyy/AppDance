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

const router = new VueRouter ({
	mode: 'hash',//history
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

// router.beforeEach((to, from, next) => {
//     /* 路由发生变化修改页面title */
//     if (to.meta.title) {
//       document.title = to.meta.title
//     }
//     next();
// });
/**
* [路由监控-没有登录的情况下跳转到登录页面]
* @param  {[type]} (to,from,next [description]
* @return {[type]}               [description]
*/
// router.beforeEach((to, from, next) => {
// 	if (to.matched.some(record => record.meta.auth)) {
// 		if (cookie.get('login')) {
// 			if (!store.getters.authToken || store.getters.authToken == '') {
//                 if (to.fullPath == '/gesture') {
//                     next()
//                 }
//                 else {
//                     next('gesture')
//                 }
// 			}
// 			else {
//                 if (to.fullPath == '/') {
//                     next('home')
//                 }
//                 else {
//                     next()
//                 }
// 			}
// 		}
// 		else {
// 			next('login')
// 		}
// 	}
// 	else {
//         if (to.fullPath == '/') {
//             if (cookie.get('login')) {
//                 next('gesture')
//             }
//             else {
//                 next('login')
//             }
//         }
//         else {
//             next()
//         }
// 	}
// })

new Vue({
	store,
	router,
	el: "#app",
	render: h => h(App)
})
