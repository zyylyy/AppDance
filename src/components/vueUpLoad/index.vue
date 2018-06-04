<template>
    <div class="upLoad font12">
        <p v-if="upLoad" class="centers ">
           加载中...
         </p>
        <p v-else class="centers">没有更多</p>
    </div>
</template>
<script type="text/babel">
export default {
	name: 'vueUpLoad',
	props: {
		upLoad:{
			type: Boolean,
			default: ()=>{
				return false
			}
		},
	},
	data(){
		return {

		}
	},
}
</script>
<style lang="less" scoped>
    .upLoad {
    	background-color: #fff;
	    .centers{
	            margin-top: 0.2rem;
	            display: flex;
	            flex-flow: column;
	            text-align: center;
	            color: #999999;
	            line-height:0.4rem;
	            background-color: #ffffff;
	            padding: 0.2rem 0;
	    }
    }
</style>