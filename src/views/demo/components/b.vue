<template>
    <div class="my_div">
        <p>b组件</p>
        <p>{{ message }}</p>
    </div>
</template>

<script type="text/babel">

import Bus from '../../../util/bus.js'

export default {
    data () {
        return {
            message: ''
        }
    },
    mounted() {
        //这里要注意this的指向问题
        let self = this
        Bus.$on('msg', (e) => {
            self.message = e
            console.log(`传来的数据是：${e}`)
        })
    }
}
</script>

<style  lang="less" scoped>
    .my_div{
        width: 200px;
        height: 200px;
        border: 1px #000 solid;
        margin: 0 auto;
    }

</style>