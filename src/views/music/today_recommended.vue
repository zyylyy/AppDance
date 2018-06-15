<!-- 今日推荐 -->
<template>
	<div class="today_recommended">
        <header>
            <img src="../../assets/images/res_banner.jpg">
        </header>

        <div class="box">
        	<div class="title">
        		<span class="left font16">全部播放</span>
        		<span class="right font12">30首</span>
        		<i class="icon"></i>
        	</div>
        	<div class="lsit">
        		<li class="item font14" v-for="(item, index) in 6">
        			<span class="index">{{ index+1 }}</span>
        			<span class="name">{{ 'Afratican susent' }}</span>
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
</template>
<script type="text/babel">
	export default {
		name: "today_recommended",
		data(){
			return {

			}
		}
	}
</script>
<style lang="less" scoped>
    .today_recommended {
    	background-color: #f5f5f5;
        header{
            position:relative;
            width:100%;
            font-size:0;
            img{
                width:100%;
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
        	z-index: 9999;
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
