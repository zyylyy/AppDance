<template>
    <div class="hot">
        <div class="hot_title font18">热门搜索</div>
        <div class="hot_content clearfix">
            <span @click="hotItem(item)" class="text font12" v-for="item in hotList">{{ item }}</span>
        </div>
    </div>
</template>
<script type="text/babel">

import storage from 'storejs'   

export default {
	name: "vueHot",
	data(){
		return {
			hotList: [],
		}
	},
    watch:{

    },
	mounted(){
        this.getHotList()
	},
	methods: {
        /*获取热门搜索数据*/
        getHotList(){
            this.hotList = ['华尔兹', '探戈', '狐步', '快币', '维也纳华尔兹', '桑巴', '恰恰', '斗牛']
        },
        /*选中的热门搜索*/
        hotItem(item){
            this.$emit('hotItem', item)
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
</style>