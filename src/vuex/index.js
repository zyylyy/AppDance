import promisePolyfill from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import * as types from './mutationTypes'
import {cloneDeep} from 'lodash'

promisePolyfill.polyfill()
Vue.use(Vuex)

import demo from './modules/demo' // demo

export default new Vuex.Store({
	actions,
	getters,
	modules: {
		demo,
	}
})


// var myStore =  new Vuex.Store({
//     state:{
//         //存放组件之间共享的数据
//     name:"jjk"
//     },
//     mutations:{
//         //显式的更改state里的数据
//     },
//     getters:{
//         //获取数据的方法
//     },
//     actions:{
//         //
//     }
// });
//import { mapGetters, mapActions } from 'vuex'
//需要用 computed 来监听vuex存储的数据变化