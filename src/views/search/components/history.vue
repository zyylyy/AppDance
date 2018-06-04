<template>
	<div class="history hot" v-if="historyList.length">
		<div class="hot_title font18">
			搜索历史
			<div class="clear font12" @click="historyClear">
                <img src="../../../assets/images/recycling.svg" alt="">
                <span>清除记录</span>
            </div>
		</div>
		<div class="hot_content">
			<p @click="historyItem(item)" class="text_left font14" v-for="item in historyList">{{ item }}</p>
		</div>
	</div>
</template>
<script type="text/babel">

import storage from 'storejs'   

export default {
	name: "vueHistory",
	data(){
		return {
			historyList: [],
		}
	},
	mounted(){
        this.historyList = storage.get('historyList') ? storage.get('historyList') : []
	},
	methods: {
		/*选中的历史信息*/
		historyItem(item){
			this.$emit('historyItem', item)
		},
		/*清空历史信息*/
		historyClear(){
			storage.set('historyList', [])
		},
	},
}
</script>
<style lang="less" scoped>
    .hot {
    	background-color: #fff;
    	margin-top: 1.3rem;
    	padding: 0 .3rem 0.3rem;
    	.hot_title {
    		padding: .3rem 0;
    		text-align: left;
    		position: relative;
    		.clear {
		        display:flex;
		        justify-content:center;
    			color: #999;
    			width: 1.4rem;
    			height: 0.24rem;
    			position: absolute;
    			top: 0;
    			right: 0;
    			bottom: 0;
    			margin: auto;
                img {
                    width: .24rem;
                    height: .24rem;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                span {
                    margin-left: .2rem;
                }
    		}
    	}
    	.hot_content {
    		.text {
    			float: left;
    			height: 0.6rem;
    			line-height: 0.6rem;
    			background-color: #EBEBEB;
    			display: inline-block;
    			padding: 0 0.3rem;
    			border-radius: 0.3rem;
    			margin-right: 0.4rem;
    			margin-top: 0.2rem;
    		}
    		.text_left {
    			text-align: left;
    			height: 0.88rem;
    			line-height: 0.88rem;
    		}
    	}
    }
    .history {
    	margin-top: 0;
    }
</style>