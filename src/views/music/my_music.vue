<!-- 我的音乐 -->
<template>
	<div class="my_music">
		<header class="header">
			<li class="font15 box" v-for="item in headerList">
				<i class="icon"><img :src="item.imgUrl" alt=""></i>
				{{ item.title }}
			</li>
		</header>

		<div class="box">
			<div class="title font18">3个歌单<div class="btn font12" @click="toAddMusic">新建<i class="btn_icon" @click.stop="toAddMusic"></i></div></div>
			<div class="box_content">
				<li class="box_list" v-for="item in 3">
					<div class="left">
						<img v-for="item in 4" class="img_p" src="../../assets/images/del.svg" alt="">
					</div>
					<div class="right">
						<p class="font16 text_t">我最爱听</p>
						<p class="font12 text_b">25首</p>
						<i class="arrow"></i>
					</div>
				</li>
			</div>
		</div> 
	</div>
</template>
<script type="text/babel">

import local_music from '../../assets/images/local_music.svg'
import collection_music from '../../assets/images/collection_music.svg'
import recent_play_music from '../../assets/images/recent_play_music.svg'

export default {
	name: "my_music",
	data(){
		return {
			headerList: [{
				imgUrl: local_music,
				title: '本地音乐',
			},{
				imgUrl: collection_music,
				title: '收藏曲目',
			},{
				imgUrl: recent_play_music,
				title: '最近播放',
			}],
		}
	},
	methods: {
		toAddMusic(){
			this.$router.push('/add_music')
		}
	},
}
</script>
<style lang="less" scoped>
    .my_music {
    	background-color: #f5f5f5;
    	.header {
    		padding: 0 0.5rem;
    		margin-bottom: 0.2rem;
    		background-color: #fff;
    		text-align: left;
    		.box {
    			position: relative;
    			padding: 0.3rem 0;
    			border-bottom: 0.01rem solid #EBEBEB;
    			text-indent: 0.2rem;
    			.icon {
    				position: absolute;
    				margin: auto;
    				top: 0;
    				left: -0.2rem;
    				bottom: 0;
    				width: 0.32rem;
    				height: 0.32rem;
    				img {
    					width: 100%;
    					height: 100%;
    					float: left;
    				}
    			}
    			&:last-child {
    				border-bottom:0;
    			}
    		}
    	}
    	.box {
    		padding: 0 0.3rem;
    		background-color: #fff;
    		.title {
    			text-align: left;
    			padding: 0.5rem 0;
    			position: relative;
    			.btn {
    				position: absolute;
    				margin: auto;
    				top: 0;
    				right: 0;
    				bottom: 0;
    				height: 0.24rem;
    				.btn_icon {
	    				position: absolute;
	    				margin: auto;
	    				top: 0;
	    				left: -0.34rem;
	    				bottom: 0;
	    				height: 0.24rem;
	    				width: 0.24rem;
	                    background: url('../../assets/images/add_music.svg') no-repeat 0 0;
	                    background-size: 0.24rem .24rem;
    				}
    			}
    		}
    		.box_content {
    			padding-bottom: 0.2rem;
	    		.box_list {
	    			padding: 0.15rem 0;
	                display:flex;
	                justify-content:center;
	                .left {
	                    width: 1rem;
	                    height: 1rem;
	                    margin-right: 0.15rem;
	                    .img_p {
	                    	width: 50%;
	                    	height: 50%;
	                    	float: left;
	                    	img {
	                    		width: 100%;
	                    		height: 100%;
	                    	}
	                    }
	                }
	                .right {
	                	flex: 1;
	                	text-align: left;
	                	position: relative;
	                	.text_t {
	                		position: absolute;
	                		top: 0;
	                	}
	                	.text_b {
	                		position: absolute;
	                		bottom: 0;
	                		color: #999;
	                	}
		                .arrow {
		                    width: 0.088rem;
		                    height: 0.16rem;
		                    background: url('../../assets/images/arrow.png') no-repeat 0 0;
		                    background-size: 0.088rem .16rem;
		                    position: absolute;
		    				margin: auto;
		    				top: 0;
		    				right: 0;
		    				bottom: 0;
		                }
	                }
	                &:first-child {
    				    padding-top:0;
    			    }
	    		}
    		}
    	}
    }
</style>
