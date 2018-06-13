<template>
    <div class="my_div">
        <p>a组件</p>
        <button @click="onBus">按钮</button>
    </div>
</template>

<script type="text/babel">

import Bus from '../../../util/bus.js'

export default {
    methods: {
        onBus () {
            Bus.$emit('msg', '我要传给兄弟组件们，你收到没有')
        }
    }
}
</script>

<style   lang="less" scoped>
    .my_div{
        width: 400px;
        height: 200px;
        border: 1px solid #000;
        margin: 0 auto;
    }
</style>