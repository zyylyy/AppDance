//vueSwiper
import vueSwiper from './vueSwiper/index.vue'
import vueSwiperFreemode from './vueSwiperFreemode/index.vue'
import vueTable from './vueTable/index.vue'




const install = Vue => {
	Vue.component(vueSwiper.name, vueSwiper) //vueSwiper
	Vue.component(vueSwiperFreemode.name, vueSwiperFreemode) //vueSwiper
	Vue.component(vueTable.name, vueTable) //vueSwiper
}

export default install