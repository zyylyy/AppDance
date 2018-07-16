<template>
	<div class="recommended">
		<div class="v_swiper">
			<vue-swiper :imgList="imgList"></vue-swiper>
		</div>
		<div class="box">
			<div class="" v-for="item in iconList">
                <img class="icon" :src="item.imgUrl" alt="">
				<p class="text font13">{{ item.name }}</p>
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
import starUrl01 from '../../assets/images/star01.png'
import starUrl02 from '../../assets/images/star02.png'
import starUrl03 from '../../assets/images/star03.png'
import starUrl04 from '../../assets/images/star04.png'
import starUrl05 from '../../assets/images/star05.png'


import { demo as ajax } from '../../services/index.js'

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
            iconList: [{
                path: '',
                name: '明星',
                imgUrl: starUrl01
            },{
                path: '',
                name: '会员',
                imgUrl: starUrl02
            },{
                path: '',
                name: '赛事',
                imgUrl: starUrl03
            },{
                path: '',
                name: '音乐',
                imgUrl: starUrl04
            },{
                path: '',
                name: '照片',
                imgUrl: starUrl05
            }]
		}
	},
	watch: {

	},
    computed: {  

    },
	mounted(){
        // this.$store.commit("setTipMsg",{
        //     tipState: true,
        //     tipMsgText: '99999999999',
        // });
        ajax.getDanceListType().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        
        ajax.getDanceinfo().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })

        console.log('ajax')
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
                position: relative;
                .icon {
                    width: 1.2rem;
                    height: 1.2rem;
                }
                .text {
                    color: #666;
                    position: absolute;
                    margin: auto;
                    left: 0;
                    right: 0;
                    bottom: 0rem;
                }
            }
        }
    }
</style>