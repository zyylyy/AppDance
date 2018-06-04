<template>
    <div class="rank">
        <div class="rank_head font18">明星排行</div>
        <div class="rank_box">
             <swiper :options="swiperOptionFreeMode"  ref="mySwiper" id="freemode">  
                <swiper-slide v-for="(item, index) in 6"> 
                    <img src="../../../assets/images/res_banner.jpg"> 
                    <p class="font18">
                        <em style="color:#FFB63E;">{{ index+1 }}&nbsp;&nbsp;</em>
                        <span class="font14" style="color: #000">第一名</span></p>
                    <p class="font11" style="color:#999;margin-top: .1rem;">伦巴分解动作</p>
                </swiper-slide>  
            </swiper>  
        </div>
    </div>
</template>
<script type="text/babel">

export default {
	name: 'vueRank',
	props: {
		dataList: {
			type: Array,
			default: ()=>{
				return []
			}
		}
	},
	data(){
		return {
            swiperOptionFreeMode :{
                    height: 100,                     //你的slide高度
                    autoplay: false,                  //可选选项，自动滑动
                    notNextTick: true,               //
                    centeredSlides: true,            //若为真，那么活动块会居中，而非默认状态下的居左...
                    paginationClickable: true,       //值为真时，当单击指示器时会执行过渡动画到目标slide...
                    spaceBetween: 10,                //slide之间的距离（单位px）
                    freeMode : true, 
                    width: 215,
                    height: 70,
            },
		}
	},
}
</script>
<style lang="less" scoped>
    .rank {
        padding-left: .3rem;
        padding-bottom: .4rem;
        background-color: #fff;
        .rank_head {
            padding: .5rem .3rem .4rem .3rem;
            text-align: left;
        }
        .rank_box {
            text-align: left;
            p {

            }
        }
    }
    .swiper-container {
        height: 100%;
        img {
            width: 100%;
            height: 100%;
        }
        .swiper-wrapper {
            width: 2.4rem;
            .swiper-slide{
                width: 2.4rem;
            }
        }
    }  
</style>