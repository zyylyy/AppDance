<template>
    <div class="noData" v-if="isShow">
        <div><img src="../../assets/images/no_data.svg"/></div>
        <div>{{ noDataTitle }}</div>
    </div>
</template>
<script type="text/babel">
export default {
	name: 'vueNoData',
	props: {
		isShow:{
			type: Boolean,
			default: ()=>{
				return false
			}
		},
		noDataTitle: {
			type: String,
			default: ()=>{
				return '暂无数据'
			}
		}
	},
	data(){
		return {

		}
	},
}
</script>
<style lang="less" scoped>
    .noData {
        display: flex;
        flex-flow: column;
        text-align: center;
        font-size: 0.28rem;
        color:#999999;
        line-height:0.4rem;
        background-color: #ffffff;
        padding-top: 1.61rem;
        padding-bottom: 10.5rem;
        img {
            width: 2.94rem;
            height: 2.2rem;
        }
    }
</style>