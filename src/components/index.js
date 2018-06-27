import vueSwiper from './vueSwiper/index.vue'
import vueSwiperFreemode from './vueSwiperFreemode/index.vue'
import vueTable from './vueTable/index.vue'       //列表
import vueNoData from './vueNoData/index.vue'     //暂无数据 ui
import vueUpLoad from './vueUpLoad/index.vue'     //没有信息 ui
import vueTipMsg from './vueTipMsg/index.vue'     //全局提示信息 
import vueLazyLoad from './vueLazyLoad/index.vue' //img 懒加载处理

const install = Vue => {
	Vue.component(vueSwiper.name, vueSwiper) //轮播
	Vue.component(vueSwiperFreemode.name, vueSwiperFreemode) //轮播-freemode
	Vue.component(vueTable.name, vueTable)   //列表展示
	Vue.component(vueNoData.name, vueNoData) //暂无数据
	Vue.component(vueUpLoad.name, vueUpLoad) //没有更多
	Vue.component(vueTipMsg.name, vueTipMsg) //提示信息
	Vue.component(vueLazyLoad.name, vueLazyLoad)
}

export default install