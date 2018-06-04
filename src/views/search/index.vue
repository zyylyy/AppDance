<template>
	<div class="search">
		<div class="search_bax font12">
            <div class='sertext'>
                <input type="text" @blur="setSearValue" placeholder="输入动作名称" v-model.trim="searValue" />
                <img v-show='searValue' src="../../assets/images/del.svg" @click.stop='empty'>
            </div>
            <span class="close font14" @click='toBack'>取消</span>
		</div>

        <vue-hot 
          v-if="!searValue" 
          @hotItem="loadList">
        </vue-hot>

        <vue-history  
          v-if="!searValue" 
          ref="vueHistory" 
          @historyItem="loadList">
        </vue-history>


        <vue-table 
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="hasLoading"
          infinite-scroll-distance="10"
          :dataTable="dataTable" 
          title="搜索结果" 
          v-if="dataTable.length && searValue" 
          style="margin-top: 1.3rem;">
        </vue-table>
        <vueUpLoad :isShow="upLoad" v-if="searValue"></vueUpLoad>
        <vueNoData :isShow="noData" v-if="searValue"></vueNoData>  

	</div>
</template>
<script type="text/babel">

import storage from 'storejs'   
import vueHot from './components/hot.vue'
import vueHistory from './components/history.vue'

export default {
	name: "search",
    components: {
        vueHot,
        vueHistory,
    },
	data(){
		return {
			searValue: "",
            searValueList: [],
            hasLoading: false,
            noData: false,
            upLoad: false,
            dataTable: [],

            params: {
                pageSize: 10,
                page: 1,
            }

		}
	},
    watch:{
        searValue(){
            this.getList()
        },
    },
	mounted(){
        this.getList()
	},
	methods: {
        /*子组件调用*/
        loadList(item){
            this.searValue = item
            this.getList()
        },
        /*无缝加载数据*/
        loadMore(){
            this.getList()
        },
        /*获取数据*/
        getList(){

              this.hasLoading = true;
         
              setTimeout(() => {
                for (var i = 0, j = 10; i < j; i++) {
                  this.dataTable.push({
                                        type_name: "桑巴",
                                        type: 0,
                                        type_describe: "右脚缓步快速连击",
                                        status: 2,
                                        learn: 999,
                                        review: 999,
                                        imgUrl: '',
                                    });
                }
                this.hasLoading = true;
              }, 1000);
        },
        setSearValue(){
            let historyList = storage.get('historyList') ? storage.get('historyList') : []
            if(historyList.indexOf(this.searValue) >= 0) historyList.push(this.searValue)
            storage.set('historyList', historyList)
        },
		/*清空输入框*/
		empty(){
            this.searValue = ''
		},
		/*返回*/
		toBack(){
            this.$router.go(-1)
		},
	},
}
</script>
<style lang="less" scoped>
    .search {
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
            .close{
                width:0.8rem;
                text-align:right;
                color:#FFAE3E;
            }
            .sertext {
                flex:1;
                background: #f8f8f8 url('../../assets/images/sear.png') no-repeat 0.2rem 0.15rem;
                background-size: 0.38rem 0.38rem;
                padding-left: 0.4rem;
                border-radius: 0.1rem;
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