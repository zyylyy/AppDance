<template>
	<div class="tip_msg font14" v-if="true">
		<span class="msgwarp">{{ 'tipMsgText' }}</span>
	</div>
</template>
<script>

import { mapGetters, mapMutations, mapActions } from 'vuex'

import $ from 'jquery'

export default {
	name: 'vueTipMsg',
	data() {
		return {}
	},
	watch: {
		'tipState'() {	
			if(this.tipState){
				$(".tip_msg").fadeIn()
				setTimeout(()=>{
					this.setTipMsg({
				        tipState: false,
				        tipMsgText: '',
					})
				},1500)
			}else{
				$(".tip_msg").fadeOut()
			}
		}
	},
	computed: {
      ...mapGetters([
           'tipState',
           'tipMsgText'
        ])
	},
	methods: {
		...mapMutations(['setTipMsg']),
	},
	mounted() {
		console.log(this.$store)
		// mapActions
	    // this.$store.dispatch("getTipMsg",{
	    //   tipState: true,
	    //   tipMsgText: '99999',
	    // });
	    // mapMutations
	    // this.$store.commit("setTipMsg",{
	    //   tipState: true,
	    //   tipMsgText: '99999',
	    // });
	}

}
</script>
<style lang="less"  scoped>
	.tip_msg {
		width: 100%;
		top: 45%;
		z-index: 99999;
		text-align: center;
		display: none;
		.msgwarp {
			padding:5px 10px;
			display: inline-block;
			background-color: rgba(0,0,0,0.65);
			color: #FFFFFF;
			border-radius: 5px;
		}
	}
</style>