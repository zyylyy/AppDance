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

        <select-table :dataList="[]"></select-table>

        <vueUpLoad style="margin-bottom: 1rem;"></vueUpLoad>
        <vueNoData :isShow="false"></vueNoData>

        <div class="footer_btn">
            <div class="icon"></div>
        </div>
	</div>
</template>
<script type="text/babel">

import storage from 'storejs'   
import selectTable from './components/select_evaluation_table.vue'

export default {
    name: "search",
    components: {
        selectTable,
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
    .footer_btn {
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        border-top: 1px solid #FAF9F7; 
        padding: 0.1rem 0; 
        .icon {
            margin: 0 auto;
            width: 0.68rem;
            height: 0.68rem;
            background: #fff url('../../assets/images/icon_del.svg') no-repeat 0 0;
        }
    }
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
                background-color: #EFEFEF;
                .copy {
                    position: absolute;
                    left: 0;
                    right:0;
                    margin: auto;
                    height: .7rem;
                    line-height: .7rem;
                    width: 2.4rem;
                    background: #EFEFEF url('../../assets/images/sear.png') no-repeat 0.2rem 0.2rem;
                    background-size: 0.3rem 0.3rem;
                    padding-left: 0.4rem;
                    border-radius: 0.5rem;
                }
            }
            .sertext {
                flex:1;
                background: #EFEFEF url('../../assets/images/sear.png') no-repeat 0.2rem 0.2rem;
                background-size: 0.3rem 0.3rem;
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
