<template>
	<div class="layout">
		<div class="nav">
			<li  class="item font15" v-for="item in meun_lits" @click="toView(item)">
				<span>
                    {{ item.name }}
                    <i :class="[$route.path == item.path ? 'border_bottom' : '' ]"></i>
                </span>
		    </li>
            <span @click="toSearch" class="search font14"></span>
		</div>
		<div class="content">
            <router-view></router-view>
<!--             <transition name="fade">
                <router-view></router-view>
            </transition> -->
		</div>
	</div>
</template>
<script type="text/babel">


export default {
	name: "layout",
	data(){
		return {
			meun_lits: [
    			{
    				name: "推荐",
    				path: "/recommended",
    			},
    			{
    				name: "国标舞",
    				path: "/nationalStandard",
    			},
    			{
    				name: "拉丁舞",
    				path: "/latin",
    			},
    			{
    				name: "MV舞",
    				path: "/mv",
    			},
    			{
    				name: "街舞",
    				path: "/streetDance",
    			},
			],
		}
	},
	mounted(){

	},
	methods:{
		toView(item){
			this.$router.push(item.path)
		},
        toSearch(){
            this.$router.push('/search')
        },
	},
}
</script>
<style lang="less" scoped>
    .layout {
        background-color: #fff;
        .nav {
            padding: 0 .3rem;
            display:flex;
            justify-content:center;
            align-items:center;
            height: 0.64rem; 
            .search {
                width: 1rem;
                height: 100%;
                background: #fff url('../../assets/images/sear.png') no-repeat 0.2rem 0.15rem;
                background-size: 0.38rem 0.38rem;
            }
            .item {
                flex:1;
                height: 100%;
                line-height: .64rem;
                span {
                    position: relative;
                }
                 .border_bottom {
                        position: absolute;
                        margin: auto;
                        left: 0;
                        right: 0;
                        bottom: -0.05rem;
                        height: .04rem;
                        background-color: #FFB63E;
                        width: .36rem; 
                 }
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>