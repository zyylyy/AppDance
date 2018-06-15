<!-- 音乐首页 -->
<template>
	<div class="music_home">
		<div class="swiper">
			<vue-swiper :imgList="imgList"></vue-swiper>
		</div>
		<div class="meun font13">
			<li v-for="item in meunList" @click="$router.push(item.path)">
				<span>{{ item.title }}</span>
			</li>
		</div>
		<div class="box">
			<div class="box_title font18">
				分类舞种
			</div>
			<div class="box_list clearfix">
				<li class="item" v-for="item in 10" @click="$router.push('/music_detail_list/top')">
					<img src="../../assets/images/img/slide01.png" alt="">
				</li>
			</div>
		</div>
	</div>
</template>
<script type="text/babel">
	export default {
		name: "music_home",
		data(){
			return {
				meunList: [{
					title: '今日推荐',
					path: '/today_recommended',
				},{
					title: '最热音乐',
					path: '/hottest_music',
				},{
					title: '我的音乐',
					path: '/my_music',
				}],

			}
		},
        methods:{
        }
	}
</script>
<style lang="less" scoped>
    .music_home {
    	background-color: #f5f5f5;
    	.box {
    		margin-top: 0.2rem;
    		background-color: #fff;
    		padding: 0 0.3rem;
    		.box_title {
    			text-align: left;
    			padding: 0.5rem 0;
    		}
    		.box_list {
    			.item {
    				float: left;
    				width: 3.3rem;
    				height: 1.04rem;
    				margin-bottom: 0.3rem;
    				img {
    					width: 100%;
    					height: 100%;
    				}
					&:nth-child(odd){
						margin-right: 0.3rem;
					}
    			}
    		}
    	}
    	.meun {
    		background-color: #fff;
    		padding: 0.5rem 0rem 0.9rem 0rem;
            display:flex;
            justify-content:center;
            align-items:center;
            li {
            	flex:1;
            	height: 0.88rem;
            	position: relative;
				background: url('../../assets/images/add_music.svg') no-repeat 0.8rem 0;
				background-size: 0.88rem .88rem;
            	span {
            		color: #666;
            		position: absolute;
            		left: 50%;
            		transform: translateX(-50%);
            		bottom: -.5rem;
            	}
            }
    	}
    }
</style>
