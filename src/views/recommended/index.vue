<template>
	<div class="recommended">
		<div class="v_swiper">
			<vue-swiper :imgList="imgList"></vue-swiper>
		</div>
		<div class="box">
			<div class="" v-for="item in iconList">
				<img class="icon" src="../../assets/images/res_banner.jpg" alt="">
				<p class="text font13">{{ item }}</p>
			</div>
		</div>

        <vue-letters :dataList="[]"></vue-letters>
        <vue-rank :dataList="[]"></vue-rank>
        <vue-music :dataList="[]"></vue-music>
        <vue-students :dataList="[]"></vue-students>

	</div>
</template>
<script type="text/babel">

import vueLetters from './components/letters.vue'  //快报
import VueRank from './components/rank.vue'        //明星排行
import vueMusic from './components/music.vue'      //最热音乐
import vueStudents from './components/students.vue'//学员明星

export default {
	name: "recommended",
    components:{
        vueLetters,
        VueRank,
        vueMusic,
        vueStudents,
    },
	data(){
		return {
			iconList: ['明星', '会员', '赛事', '音乐', '照片'],
		}
	},
	watch: {

	},
    computed: {  

    },
	mounted(){
		
	},
	methods: {

	}  
}
</script>
<style lang="less" scoped>
    .recommended {
        background-color: #f5f5f5;
        .box {
            display:flex;
            justify-content:center;
            align-items:center;
            padding: 0.3rem;
            border-bottom: 0.01rem solid #f5f5f5;
            background-color: #fff;
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
    }
</style>