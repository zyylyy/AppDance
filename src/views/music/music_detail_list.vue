<!-- 音乐详情数据 -->
<template>
	<div class="music_detail_list">
        <header>
            <img src="../../assets/images/res_banner.jpg">
            <i class="back"></i>
        </header>
        <div class="intro">
            <p class="intro-title font20">华尔兹(Waltz)</p>
            <p class="font12 intro-detail">
                通过膝、踝、足底、跟掌趾的动作，结合身体的升降、倾斜、摆荡，带动舞步移动，使舞步欺负脸面，舞姿华丽典雅。
            </p>
        </div>
        <div class="navbar font16">
        	<li>推荐音乐</li>
        	<li>热门音乐</li>
        </div>
        <div class="cantent">
	        <div class="box">
	        	<div class="title">
	        		<span class="left font16">全部播放</span>
	        		<span class="right font12">30首</span>
	        		<i class="icon"></i>
	        	</div>
	        	<div class="list">
	        		<li class="item font14" v-for="(item, index) in 6">
	        			<span class="index">{{ index+1 }}</span>
	        			<span class="name">{{ 'Afratican susent' }}</span>
	        			<img class="more_music" :src="more_music" alt="" @click.stop="showHandle">
	        		</li>
	        	</div>
	        </div>
	        <div class="footer clearfix">
	        	<div class="left clearfix">
	        		<img src="../../assets/images/res_banner.jpg" alt="">
	        	</div>
	        	<div class="center font14">Sit doue wwuqkrs</div>
	        	<div class="right font12">
	        		<li>1</li>
	        		<li>2</li>
	        		<li>3</li>
	        	</div>
	        </div>
        </div>

		<mt-popup
		  v-model="popupVisible"
		  position="bottom"
		  popup-transition="popup-fade">
			<div class="popup">
				<li class="font12 box" style="text-indent: -.2rem;color: #999;">更多操作</li>
				<li class="font15 box" v-for="item in headerList" @click="selectHandle">
					<i class="icon"><img :src="item.imgUrl" alt=""></i>
					{{ item.title }}
				</li>
			</div>
		</mt-popup>
	</div>
</template>
<script type="text/babel">

import local_music from '../../assets/images/local_music.svg'
import collection_music from '../../assets/images/collection_music.svg'
import recent_play_music from '../../assets/images/recent_play_music.svg'
import more_music from '../../assets/images/more_music.png'

export default {
	name: "music_detail_list",
	data(){
		return {
			selected: 1,
			more_music,
			popupVisible: false,
			headerList: [{
				imgUrl: local_music,
				title: '下载歌曲',
			},{
				imgUrl: collection_music,
				title: '收藏曲目',
			},{
				imgUrl: recent_play_music,
				title: '加入歌单',
			}],
		}
	},
	methods: {
		//
		showHandle(){
			this.popupVisible = true
		},
		//选中
		selectHandle(item){
			this.popupVisible = false
		},
	},
}
</script>
<style lang="less" scoped>
    .music_detail_list {
    	background-color: #f5f5f5;
    	.navbar {
            display:flex;
            justify-content:center;
            align-items:center;
            padding: 0.5rem 0.3rem 0.3rem 0.3rem;
            background-color: #fff;
            margin-top: 0.2rem;
            li{
            	flex: 1;
            }
    	}
    	.mint-popup-bottom {
    		width: 100%;
    	}
    	.popup {
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
        header{
            position:relative;
            width:100%;
            font-size:0;
            img{
                width:100%;
            }
            i.back{
                position:absolute;
                width:0.5rem;
                height:0.5rem;
                left:0.3rem;
                top:0.5rem;
                background:url('../../assets/images/back.png') no-repeat center;
                background-size:100%;
                border-radius:50%;
            }
        }
        .intro{
            background-color:#fff;
            padding:0.5rem 0.3rem;
            p{
                text-align:left;
                letter-spacing: 0;
                line-height: 18px;
                padding-bottom:0.2rem;
            }
            p.intro-title{
                color: #222222;
            }
            .intro-detail{
                color:#666;
            }
        }
        .footer {
        	border-top: 0.01rem solid #EBEBEB;
        	background-color: #fff;
        	position: fixed;
        	bottom: 0;
        	width: 100%;
        	height: 1rem;
        	padding: 0 0.3rem;
        	z-index: 999;
            .left {
            	float: left;
            	width: 0.72rem;
            	height: 0.72rem;
            	margin-top: 0.1rem;
            	margin-right: 0.15rem;
            	border-radius: 0.72rem;
            	img {
            		width: 100%;
            		height: 100%;
            		float: left;
            		border-radius: 0.72rem;
            	}
            }
            .center {
            	text-align: left;
            	float: left;
            	height: 100%;
            	line-height: 1rem;
            	width: 4rem;
            	color: #222222;
            }
            .right {
            	float: right;
            	height: 100%;
            	width: 2rem;
	            display:flex;
	            justify-content:center;
	            align-items:center;
	            li {
	            	flex: 1;
	            }
            }
        }
        .box {
        	background-color: #fff;
        	text-align: left;
        	.title {
        		margin: 0 .5rem;
        		height: 1.2rem;
	            display:flex;
	            justify-content:center;
	            align-items:center;
	            border-bottom: 0.01rem solid #EBEBEB;
	            text-align: left;
	            position:relative;
	            .left {
	                -webkit-flex-grow: 0.1;
	                flex-grow: 0.1;
	                text-indent: 0.2rem;
	            }
	            .right {
	                -webkit-flex-grow: 3.5;
	                flex-grow: 3.5;
	                color: #999;
	            }
	            .icon {
	            	position: absolute;
	            	left: -.22rem;
	            	width: 0.32rem;
	            	height: 0.32rem;
					background: url('../../assets/images/add_music.svg') no-repeat 0rem 0;
					background-size: 0.32rem .32rem;
	            }
        	}
        	.more_music {
        		height: 0.3rem;
        		width: 0.2rem;
        		right: -0.2rem;
        		position: absolute;
        	}
        	.item {
        	    padding: 0.3rem 0;
        	    margin: 0 .5rem;
        	    border-bottom: 0.01rem solid #EBEBEB;
        	    position:relative;
        	    .index {
        	    	color: #999999;
        	    	position: absolute;
        	    	left: -.2rem;
        	    }
        	    .name {
        	    	color: #222222;
        	    	text-indent: 0.2rem;
        	    	display: inline-block;
        	    }
        	    &:last-child{
        	    	border-bottom: 0;
        	    }
        	}
        }
    }
</style>
