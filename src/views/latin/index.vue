<template>
	<div class="latin">
		<div class="swiper">
			<vue-swiper :imgList="imgList"></vue-swiper>
		</div>
		<div class="panel">
	        <div class="panel-header font18">拉丁舞种</div>
	        <div class="panel-body between">
	        	<vue-swiperFreemode :imgList="imgList"></vue-swiperFreemode>
	        </div>
		</div>
        <vue-table :dataTable="dataList" title="最热教学" @start="start"  v-if="dataList.length"></vue-table>
	</div>
</template>
<script type="text/babel">

export default {
	name: "latin",
	data(){
		return {
			imgList: [],
			dataList: [{
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
	mounted(){

	},
	methods:{
		start(item){
			console.log(item)
		},
	}
}
</script>
<style lang="less" scoped>
    .latin {
		.panel {
			background-color: #fff;
			.panel-header {
	    		color: #222;
	    		text-align: left;
	    		padding-left: .3rem;
	    		padding-top: .4rem;
	    		padding-bottom: .4rem;
			}
			.between {
				height: 1.7rem;
				padding-left: .3rem;
				padding-bottom: .4rem;
			}
		}
    }
</style>