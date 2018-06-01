<template>
	<div class="search">
		<div class="search_bax font12">
            <div class='sertext'>
                <input type="text" @blur="setSearValue" placeholder="输入动作名称" v-model.trim="searValue" />
                <img v-show='searValue' src="../../assets/images/del.svg" @click.stop='empty'>
            </div>
            <span class="close font14" @click='toBack'>取消</span>
		</div>
		<div class="hot" v-if="!searValue">
			<div class="hot_title font18">热门搜索</div>
			<div class="hot_content clearfix">
				<span @click="hotItem(item)" class="text font12" v-for="item in hotList">{{ item }}</span>
			</div>
		</div>
		<div class="history hot" v-if="searValueList.length">
			<div class="hot_title font18">
				搜索历史
				<div class="clear font12" @click="historyClear">清除记录</div>
			</div>
			<div class="hot_content">
				<p @click="historyItem(item)" class="text_left font14" v-for="item in historyList">{{ item }}</p>
			</div>
		</div>

        <!-- <vue-table :dataTable="dataTable" title="搜索结果" v-if="dataTable.length" style="margin-top: 1.3rem;"></vue-table> -->

	</div>
</template>
<script type="text/babel">

import storage from 'storejs'   

export default {
	name: "search",
	data(){
		return {
			searValue: "",
			hotList: ['华尔兹', '探戈', '狐步', '快币', '维也纳华尔兹', '桑巴', '恰恰', '斗牛'],
			historyList: ['小女孩跳舞', '袋鼠街舞', '热血街舞团', '这就是街舞'],
            searValueList: [],
            dataTable: [{
                type_name: "桑巴",
                type_describe: "右脚缓步快速连击",
                status: 0,
                learn: 999,
                review: 999,
                imgUrl: '',
            },{
                type_name: "街舞",
                type: 1,
                type_describe: "地板舞-托马斯全旋",
                status: 2,
                learn: 666,
                review: 666,
                imgUrl: '',
            },{
                type_name: "桑巴",
                type: 0,
                type_describe: "右脚缓步快速连击",
                status: 2,
                learn: 999,
                review: 999,
                imgUrl: '',
            }]
		}
	},
    watch:{
        searValue(){
            this.getList()
        },
    },
	mounted(){
        this.searValueList = storage.get('searValue') ? storage.get('searValue') : []
	},
	methods: {
        setSearValue(){
            //storage.set('searValue',this.searValueList.push(this.searValue))
        },
        /*
        **
        */
        getList(){

        },
		/*
		** 清空输入框
		*/
		empty(){
            this.searValue = ''
		},
		/*
		** 返回
		*/
		toBack(){
            this.$router.go(-1)
		},
		/*
		** 清空历史
		*/
		historyClear(){

		},
		/*
		** 热门搜索
		*/
		hotItem(){

		},
		/*
		** 搜索历史
		*/
		historyItem(){

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
    .search_bax {
    	color: #999;
        position: fixed;
        top: 0rem;
        z-index: 100;
        width: 100%;
        background: #fff;
        height: 1.3rem;
        padding: 0 0.3rem;
        display:flex;
        justify-content:center;
        align-items:center;
        .close{
        	width:0.8rem;
        	text-align:right;
        	color:#FFAE3E;
        }
        .sertext {
        	flex:1;
            background: #f8f8f8 url('../../assets/images/sear.png') no-repeat 0.2rem 0.15rem;
            background-size: 0.38rem 0.38rem;
            padding-left: 0.4rem;
            border-radius: 0.1rem;
            position:relative;
            input {
                width: 88%;
                height: 0.7rem;
                -webkit-user-select: auto;
            }
            img{
            	position:absolute;
            	width:0.32rem;
            	height:0.32rem;
            	top: 0.2rem;
            	right:0.25rem;
            }
        }
    }
</style>