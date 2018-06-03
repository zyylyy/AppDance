<template>
     <swiper :options="swiperOption"  ref="mySwiper" id="freemode">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <swiper-slide v-for="item in 6"> 
            <img src="../../assets/images/res_banner.jpg"> 
        </swiper-slide>  
    </swiper>  
</template>
<script type="text/babel">

import { swiper, swiperSlide } from 'vue-awesome-swiper'  

    export default {
    	name: "vueSwiperFreemode",
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
                	autoplay: false,                  //可选选项，自动滑动
	                notNextTick: true,               //
	                centeredSlides: true,            //若为真，那么活动块会居中，而非默认状态下的居左...
	                paginationClickable: true,       //值为真时，当单击指示器时会执行过渡动画到目标slide...
	                spaceBetween: 10,                //slide之间的距离（单位px）
                    freeMode : true, 
                    width: 120,
                    height: 70,

                } 
    		}
    	},
        computed: {  

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
        img {
            width: 100%;
            height: 100%;
            border-radius: 5px;
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

        .swiper-wrapper {
            width: 2.4rem;
            .swiper-slide{
                width: 2.4rem;
            }
        }
    }        


</style>