<template>
    <div class="music">
        <div class="music_head font18">最热音乐</div>
        <div class="music_box">
             <swiper :options="swiperOptionFreeMode"  ref="mySwiper" id="freemode">  
                <swiper-slide v-for="(item, index) in 6"> 
                    <p class="list">
                        <img src="../../../assets/images/music.svg" alt="">
                        <span class="font14">African</span>
                    </p>
                    <p class="list" style="margin-top:.2rem;">
                        <img src="../../../assets/images/music.svg" alt="">
                        <span class="font14">African</span>
                    </p>
                </swiper-slide>  
            </swiper>  
        </div>
    </div>
</template>
<script type="text/babel">

export default {
	name: 'vueMusic',
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
    .music {
        padding-left: .3rem;
        padding-bottom: .4rem;
        background-color: #fff;
        margin-top: 0.2rem;
        .music_head {
            padding: .5rem .3rem .4rem .3rem;
            text-align: left;
        }
        .music_box {
            text-align: left;
            .list {
                width: 100%;
                height: .64rem;
                background-color: #FFCC3E;
                position: relative;
                img {
                    width: .28rem;
                    height: .28rem;
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: .15rem;
                    margin: auto;
                }
                span {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: .7rem;
                    margin: auto;
                    line-height: .64rem;
                    width: 2.1rem;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
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