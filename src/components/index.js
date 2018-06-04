import vueSwiper from './vueSwiper/index.vue'
import vueSwiperFreemode from './vueSwiperFreemode/index.vue'
import vueTable from './vueTable/index.vue'
import vueNoData from './vueNoData/index.vue'
import vueUpLoad from './vueUpLoad/index.vue'


const install = Vue => {
	Vue.component(vueSwiper.name, vueSwiper) //轮播
	Vue.component(vueSwiperFreemode.name, vueSwiperFreemode) //轮播-freemode
	Vue.component(vueTable.name, vueTable)   //列表展示
	Vue.component(vueNoData.name, vueNoData) //暂无数据
	Vue.component(vueUpLoad.name, vueUpLoad) //没有更多
}

export default install