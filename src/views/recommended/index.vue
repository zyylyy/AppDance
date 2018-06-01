<template>
	<div class="recommended">
		<div>
			<vue-swiper :imgList="imgList"></vue-swiper>
		</div>
		<div class="box">
			<div class="" v-for="item in iconList">
				<img class="icon" src="../../assets/images/res_banner.jpg" alt="">
				<p class="text font13">{{ item }}</p>
			</div>
		</div>
		<div class="swiper">
			<div class="title">
				<p class="font14">icon</p>
				<p class="font16">快报</p>
				<span class="font14">桑巴国际扭扭腰大赛2018冠军…</span>
				<p class="font12">更多</p>
				<p class="font14">icon</p>
			</div>
			<div class="swiper_box">
			     <swiper :options="swiperOption"  ref="mySwiper">  
			        <!-- 这部分放你要渲染的那些内容 -->  
			        <swiper-slide v-for="item in swiper_boxList"> 
			            <img src="../../assets/images/res_banner.jpg">
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
			        <div class="swiper-pagination" slot="pagination"></div>  
			    </swiper>  
			</div>
		</div>

	</div>
</template>
<script type="text/babel">

import { swiper, swiperSlide } from 'vue-awesome-swiper'  

export default {
	name: "recommended",
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
			imgList: [],
			iconList: ['明星', '会员', '赛事', '音乐', '照片'],
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
	watch: {

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
    	.title {
    		height: 1.12rem;
    		line-height: 1.12rem;
    		padding: 0 0.3rem;
			display:flex;
			text-align: left;
			justify-content:center;
			p {
				flex:1;
			}
    	}
    	.swiper_box {
    		    background-color: #f5f5f5;
    		height: 4.2rem;
    		padding: 0.2rem 0;
    	}
    }
    .box {
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 0.3rem;
        border-bottom: 0.01rem solid #f5f5f5;
        div {
        	flex:1;
        	.icon {
        		width: 0.88rem;
        		height: 0.88rem;
        		border-radius: 0.34rem;
        		display: inline-block;
        	}
        	.text {
        		color: #666;
        	}
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