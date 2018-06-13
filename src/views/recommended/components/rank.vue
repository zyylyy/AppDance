<template>
    <div class="rank">
        <div class="rank_head font18">明星排行</div>
        <div class="rank_box">
             <swiper :options="swiperOptionFreeMode"  ref="mySwiper" id="freemode">  
                <swiper-slide v-for="(item, index) in 6"> 
                    <img src="../../../assets/images/img/slide01.png"> 
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
                    height: 100,     
                    autoplay: false,   
                    notNextTick: true,     
                    centeredSlides: true,     
                    paginationClickable: true, 
                    spaceBetween: 10, 
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