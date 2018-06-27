<template>
	<div class="ui-dialog">
	    <div class="ui-dialog-cnt font14">
	    	{{ tipMsg.tipMsgText }}
	    </div>
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
		'tipMsg.tipState'() {	
			if(this.tipMsg.tipState){
				$(".ui-dialog").fadeIn()
				setTimeout(()=>{
					this.setTipMsg({
				        tipState: false,
				        tipMsgText: '',
					})
				},1500)
			}else{
				$(".ui-dialog").fadeOut()
			}
		}
	},
	computed: {
      ...mapGetters([
           'tipMsg',
        ])
	},
	methods: {
		...mapMutations(['setTipMsg']),
	},
	mounted() {
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

	.ui-dialog.show {
	    display: -webkit-box;
	    display: box;
	}
	.ui-dialog {
	    position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: 9999;
	    display: -webkit-box;
	    -webkit-box-orient: horizontal;
	    -webkit-box-pack: center;
	    -webkit-box-align: center;
	    display: none;
		.ui-dialog-cnt {
			margin-top: 45%;
			display: inline-block;
			padding: 0.05rem 0.1rem;
			background-color: rgba(0,0,0,0.65);
			color: #FFFFFF;
			border-radius: 5px;
		}
	}
</style>