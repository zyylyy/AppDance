<template>
	<div class="panel">
        <div class="panel-header font18">{{ title }}</div>
        <div class="panel-body">
        	<ul class="data_ul">
        		<li class="data_li clearfix" v-for="item in dataTable">
        			<div class="left">
        				<img src="../../assets/images/res_banner_2.jpg" alt="">
        			</div>
        			<div class="right">
        				<p class="top font16">
        					<span class="type_name font11" :class="{ 'bg_type0': item.type }">{{ item.type_name }}</span>
        				    <span class="type_describe font16">{{ item.type_describe }}</span>
        			    </p>
        				<p class="top font16">
        					<span class="level font12">等级</span>
        					<i>icon</i>
        					<span class="level font12">金牌</span>
        				</p>
        				<p class="top font16"><span class="level font12">{{ item.learn }}次学习</span></p>
        				<p class="top font16"><span class="level font12">{{ item.review }}人评论</span></p>
        			</div>
        			<div class="btn font14" @click="start(item)">开始学习</div>
        		</li>
        		<li></li>
        	</ul>
        </div>
	</div>
</template>
<script type="text/babel">

export default {
	name: 'vueTable',
	props: {
		dataTable: {
			type: Array,
			default:()=>{
				return []
			}
		},
		title: {
			type: String,
			default: ()=>{
				return '最热教学'
			}
		}
	},
	data(){
		return {

		}
	},
	methods: {
		start(item){
			this.$emit('start', item)
		}
	},

}
</script>
<style lang="less" scoped>
	.panel {
		background-color: #fff;
		.panel-header {
    		color: #222;
    		text-align: left;
    		padding-left: .3rem;
    		padding-top: .4rem;
    		padding-bottom: .4rem;
		}
		.panel-body {
			.data_ul {
				padding: 0 .3rem 0 ;
				.data_li {
					position: relative;
					margin-top: 0.2rem;
					padding-bottom: 0.2rem;
					&:first-child {
					    margin-top: 0;
					}
					.left {
						float: left;
						width: 1.6rem;
						height: 2rem;
						img {
							width: 100%;
							height: 100%;
						}
					}
					.right {
						float: left;
						margin-left: .2rem;
						.top {
							text-align: left;
							padding-bottom: 0.18rem;
							span {
								display: inline-block;
							}
							.type_name {
								padding: 0.05rem 0.1rem;
								color: #fff;
								background-color: #4DBC00;
							}
							.level {
								color: #666;
							}
							&:last-child {
								padding-bottom: 0;
				            }
				            .bg_type0 {
				            	background-color: #6D6D6D;
				            }
						}
					}
					.btn {
						width: 1.6rem;
						height: .6rem;
						position: absolute;
						bottom: 0.2rem;
						right: 0;
						line-height: .6rem;
						border-radius: 0.4rem;
						background-color: #FFDA3E;
						-moz-box-shadow: 0px 2px 5px #333333;
						-webkit-box-shadow: 0px 2px 5px #333333;
						box-shadow: 0px 2px 5px #333333;
					}
				}
			}
		}
		.between {
			height: 1.7rem;
			padding-left: .3rem;
			padding-bottom: .4rem;
		}
	}
</style>