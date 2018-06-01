<template>
	<div class="recommended">
		<div class="swiper">
			<vue-swiper :imgList="imgList"></vue-swiper>
		</div>
	</div>
</template>
<script type="text/babel">
	export default {
		name: "recommended",
		data(){
			return {
				imgList: [],
			}
		}
	}
</script>
<style lang="less" scoped>
    .swiper {
    	
    }
</style>