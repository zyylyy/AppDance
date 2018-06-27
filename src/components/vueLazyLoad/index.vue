<template>
	<img class="item-pic" v-lazy="imgUrl"/>
</template>
<script type="text/babel">

// 引入默认文件

export default {
	name: "vueLazyLoad",
	props: {
		imgUrl: {
			type: String,
			default: ()=>{
				return ''
			}
		}
	},
    data(){
        return {}
    }
}
</script>