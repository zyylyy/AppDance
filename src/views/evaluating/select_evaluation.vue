<template>
	<div class="select_evaluation">
		<div class="search_bax font12">
            <div class='sertext' v-if="isSwitch">
                <input type="text" placeholder="输入动作名称" v-model.trim="searValue" autofocus />
                <img v-show='searValue' src="../../assets/images/del.svg" @click.stop='empty'>
            </div>
            <div v-else class="box" @click="toSwitch">
	            <div class="copy">输入动作名称</div>
            </div>
		</div>
		
	</div>
</template>
<script type="text/babel">

import storage from 'storejs'   

export default {
	name: "search",
    components: {

    },
	data(){
		return {
			isSwitch: false,
			searValue: ''
		}
	},
    watch:{

    },
	mounted(){
        
	},
	methods: {
		empty(){
			this.searValue = ''
		},
		toSwitch(){
			this.isSwitch = !this.isSwitch
		},

	},
}
</script>
<style lang="less" scoped>
    .select_evaluation {
        background-color: #f5f5f5;
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
            .box {
            	height:  .7rem;
				position: absolute;
				left: .3rem;
				right: .3rem;
				margin: auto;
				border-radius: 0.5rem;
				background-color: #f8f8f8;
				.copy {
					position: absolute;
					left: 0;
					right:0;
					margin: auto;
					height: .7rem;
					line-height: .7rem;
					width: 2.4rem;
	                background: #f8f8f8 url('../../assets/images/sear.png') no-repeat 0.2rem 0.15rem;
	                background-size: 0.38rem 0.38rem;
	                padding-left: 0.4rem;
	                border-radius: 0.5rem;
				}
            }
            .sertext {
                flex:1;
                background: #f8f8f8 url('../../assets/images/sear.png') no-repeat 0.2rem 0.15rem;
                background-size: 0.38rem 0.38rem;
                padding-left: 0.4rem;
                border-radius: 0.5rem;
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
    }
</style>