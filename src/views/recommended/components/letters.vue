<template>
	<div class="swiper">
		<div class="title">
			<p class="font14" style="width: 0.5rem;">
                <i class="bulb_icon"></i>            
            </p>
			<p class="font16 font_w600" style="margin-left: 0.1rem">快报</p>
			<p class="font14" style="margin-left: 0.15rem;width: 4.2rem;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">桑巴国际扭扭腰大赛2018冠11111111111</p>
			<span class="font12"  style="float: right;width:1.2rem;">
                <span>更多</span>
                <i class="arrow" style="float: right;margin-top: 0.5rem;"></i>              
            </span>
		</div>
		<div class="swiper_box">
		     <swiper :options="swiperOption"  ref="mySwiper">  
		        <swiper-slide v-for="item in swiper_boxList"> 
		            <img src="../../../assets/images/res_banner.jpg">
		            <div class="img_box">
			            <p class="text font22">{{ item.title }}</p>
			            <p class="con font11">{{ item.text }}</p>
			            <p class="btn font12" @click="toCheck(item)">立即观看</p>
			            <p class="index font18">
			            	{{ page}}
			            	<span class="font12">/{{ swiper_boxList.length }}</span>
			            </p>
		            </div>
		        </swiper-slide>  
		    </swiper>  
		</div>
	</div>
</template>
<script type="text/babel">

export default {
	name: "vueLetters",
	data(){
		return {
			page: 1,
            swiperOption: {  
            	height: 100,          
            	autoplay: 5000,          
                notNextTick: true,      
                centeredSlides: true,        
                paginationClickable: true,      
                spaceBetween: 30,      
                onSlideChangeEnd: swiper => {
                    this.page = swiper.realIndex + 1;
                },
            },
			swiper_boxList: [{
				title: "国际巨星陪你练伦巴",
				text: "测评一下和她的距离吧",
			},{
				title: "123456",
				text: "789",
			},{
				title: "654321",
				text: "987",
			}],
		}
	},
	props: {
		dataList: {
			type: Array,
			default:()=>{
				return []
			}
		}
	},
    computed: {  
        swiper() {  
          return this.$refs.mySwiper.swiper;  
        }  
    },
	mounted(){
		
	},
	methods: {
		toCheck(){
			console.log('立即观看')
		},
	}  
}
</script>
<style lang="less" scoped>
    .swiper {
        background-color: #fff;
        .title {
            height: 1.12rem;
            line-height: 1.12rem;
            padding: 0 0.3rem;
            p {
                float: left;
                .bulb_icon {
                    width: 0.5rem;
                    height: 0.6rem;
                    display: inline-block;
                    background-image: url('../../../assets/images/bulb.svg');
                    background-repeat: no-repeat;
                    background-position: 0 0;
                    background-size: 0.5rem .6rem;;
                    margin-top: 50%;
                }

            }
            span {
                .arrow {
                    width: 0.06rem;
                    height: 0.12rem;
                    display: inline-block;
                    background-image: url('../../../assets/images/arrow.png');
                    background-repeat: no-repeat;
                    background-position: 0 0;
                    background-size: 0.06rem .12rem;; 
                } 
            }
            .font_w600 {
                font-weight: 600;
            }
        }
        .swiper_box {
            background-color: #f5f5f5;
            height: 4.2rem;
            padding: 0.2rem 0;
        }
    }
    .swiper-container {
        height: 100%;
        background-color: #fff;
        position: relative;
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
        .img_box {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            padding: 0 0.3rem;
            text-align: left;
            padding-top: 1.2rem;
            .text {
                color: #fff;
            }
            .con {
                margin-top: 0.1rem;
                color: #fff;
            }
            .btn {
                width: 1.4rem;
                height: 0.6rem;
                line-height: 0.6rem;
                text-align: center;
                border-radius: 0.3rem;
                background-color: #FFBB3E;
                margin-top: 0.5rem;
            }
            .index {
                position: absolute;
                bottom: 0.3rem;
                right: 0.3rem;
                color: #fff;
            }
        }
    }
</style>