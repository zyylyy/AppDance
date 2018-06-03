<template>
    <div class="students">
        <div class="students_head font18">学员明星</div>
        <div class="students_box">
             <swiper :options="swiperOptionFreeMode">  
                <swiper-slide v-for="(item, index) in 6"> 
                    <img src="../../../assets/images/res_banner.jpg"> 
                </swiper-slide>  
            </swiper>  
        </div>
    </div>
</template>
<script type="text/babel">

export default {
	name: 'vueStudents',
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
                    width: 100,
            },
		}
	},
}
</script>
<style lang="less" scoped>
    .students {
        padding-left: .3rem;
        padding-bottom: .4rem;
        .students_head {
            padding: .5rem .3rem .4rem .3rem;
            text-align: left;
        }
        .students_box {
            text-align: left;
            p {

            }
        }
    }
    .swiper-container {
        height: 100%;
        img {
            width: 2rem;
            height: 2rem;
        }
        .swiper-wrapper {
            width: 2.4rem;
            .swiper-slide{
                width: 2.4rem;
            }
        }
    }  
</style>