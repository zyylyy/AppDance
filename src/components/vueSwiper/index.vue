<template>
     <swiper :options="swiperOption"  ref="mySwiper">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <swiper-slide v-for="item in 3"> 
            <img src="../../assets/images/res_banner.jpg"> 
        </swiper-slide>  
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>  
</template>
<script type="text/babel">

import { swiper, swiperSlide } from 'vue-awesome-swiper'  

    export default {
    	name: "vueSwiper",
    	props:{
    		imgList:{
    			type: Array,
    			default:function(){
    				return []
    			}
    		},
    	},
    	components: {  
            swiper,  
            swiperSlide  
        },   
    	data(){
    		return {
                swiperOption: {  
                	height: 100,                     //你的slide高度
                	autoplay: 3000,                  //可选选项，自动滑动
	                notNextTick: true,               //
	                pagination: '.swiper-pagination',//
	                centeredSlides: true,            //若为真，那么活动块会居中，而非默认状态下的居左...
	                paginationClickable: true,       //值为真时，当单击指示器时会执行过渡动画到目标slide...
	                spaceBetween: 30,                //slide之间的距离（单位px）
                } 
    		}
    	}, 
    	mounted(){

    	},
    	methods: {

    	},
    }
</script>
<style lang="less" scoped>
    .swiper-container {
        height: 100%;
        background: #fff;
        img {
            width: 100%;
            height: 100%;
        }
        .swiper-pagination {
            .swiper-pagination-bullet {
                width: 0.15rem;
                height: 0.15rem;
            }
            .swiper-pagination-bullet-active {
                background: #fff;
            }
        }
    }

</style>