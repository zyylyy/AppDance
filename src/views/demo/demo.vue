<template>
    <div>
<!--         <aPage @isLogFn = "lisLogFn"></aPage>
        <bPage :isLog = "login"></bPage> -->
    </div>
</template>
<script type="text/babel">

import aPage from './components/a.vue'
import bPage from './components/b.vue'
import { demo as ajax} from '../../services/index.js'
export default {
	name: "demo",
    data(){
        return {
            login: 'false'
        }
    },
    components: {
        aPage,
        bPage
    },
    computed: {

    },
    watch: {

    },
    created(){

    },
    mounted(){
        this.getCategory();
        this.getCategorySub();
        this.getDanceInfo();
        // this.$store.commit("setTipMsg",{
        //     tipState: true,
        //     tipMsgText: '99999',
        // });
    },
    methods: {
        getDanceInfo:function(){
            ajax.getDanceinfo("68ec26be-7606-4e82-8065-b51085b0b71c").then(function(res){
                console.log(res)
            })
        },
        getCategorySub:function(){
            ajax.getCategorySub('100').then(function(res){
                console.log(res)
            })
        },
        getCategory:function(){
            ajax.getDanceListType().then(function(res){
                console.log(res)
            })
        },
        lisLogFn (data) {
            if (data == 'log') {
                this.login = 'true'
            }
        }
    },
}
</script>
<style lang="less" scoped>
    
</style>