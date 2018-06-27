<template>
     <swiper :options="swiperOption"  ref="mySwiper" id="freemode">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <swiper-slide v-for="(item, index) in imgList"> 
            <img :src="item.itemUrl" >
<!--             <div class="model"></div>
            <span class="text font18">{{ index }}</span> -->
        </swiper-slide>  
    </swiper>  
</template>
<script type="text/babel">

import slide01 from '../../assets/images/img/slide01.png'
import slide02 from '../../assets/images/img/slide02.png'
import slide03 from '../../assets/images/img/slide03.png'
import slide04 from '../../assets/images/img/slide04.png'
import slide05 from '../../assets/images/img/slide05.png'

import { swiper, swiperSlide } from 'vue-awesome-swiper'  

    export default {
    	name: "vueSwiperFreemode",
    	// props:{
    	// 	imgList:{
    	// 		type: Array,
    	// 		default:function(){
    	// 			return []
    	// 		}
    	// 	},
    	// },
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
                },
                imgList: [{
                    itemUrl: slide01,
                    name: '',
                    path: '',
                },{
                    itemUrl: slide02,
                    name: '',
                    path: '',
                },{
                    itemUrl: slide03,
                    name: '',
                    path: '',
                },{
                    itemUrl: slide04,
                    name: '',
                    path: '',
                },{
                    itemUrl: slide05,
                    name: '',
                    path: '',
                }],
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
            border-radius: .05rem;
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
                width: 2.4rem !important;
                position: relative;
                .model {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    margin: auto;
                    background-color: #000;
                    opacity: 0.3;
                    border-radius: .05rem;
                }
                .text {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    margin: auto;
                    color: #fff;
                    height: .4rem;
                    line-height: 0.4rem;
                }
            }
        }
    }        


</style>