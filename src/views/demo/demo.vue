<template>
    <div>
<!--         <aPage @isLogFn = "lisLogFn"></aPage>
        <bPage :isLog = "login"></bPage> -->
    </div>
</template>
<script type="text/babel">

import aPage from './components/a.vue'
import bPage from './components/b.vue'

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
        // this.$store.commit("setTipMsg",{
        //     tipState: true,
        //     tipMsgText: '99999',
        // });
    },
    methods: {
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