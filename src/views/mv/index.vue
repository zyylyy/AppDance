<template>
	<div class="mv">
		<vue-table 
		  :dataTable="dataList" 
		  title="最热教学" 
		  @start="start" 
		  v-if="dataList.length">
		</vue-table>
		
		<vueUpLoad></vueUpLoad>
		<vueNoData :isShow="false"></vueNoData>
	</div>
</template>
<script type="text/babel">

export default {
	name: "mv",
	data(){
		return {
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
		}
	},
}
</script>
<style lang="less" scoped>
    .mv {
    	background-color: #f5f5f5;
    }
</style>
