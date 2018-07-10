<template>
    <div class="my_settings">
        <div class="store_info">
                <li><span>帮助中心</span><img :src='arrow' /></li>
                <li><span>用户反馈</span><img :src='arrow' /></li>
                <li><span>清楚缓存</span>
                    <img :src='arrow' />
                    <span style="float:right;margin-right: 0.15rem;">{{ '12.28M' }}</span>
                </li>
        </div>
        <div class="store_info between">
            <li>
                <span class="title">非WiFi化解播放提示</span>
                <input type="checkbox" v-model="val" class="al-toggle-button">
            </li>
            <li><span>帐号安全</span><img :src='arrow' /></li>
        </div>
        <div class="store_info">
                <li><span>关于我们</span><img :src='arrow' /></li>
        </div>
    </div>
</template>
<script type="text/babel">

import arrow from '../../../assets/images/arrow.png'

export default {
	name: "my_settings",
    data(){
        return {
            val: 1,
            arrow,
        }
    },
    mounted(){

    },
    methods: {

    },
}
</script>
<style lang="less" scoped>
    .my_settings {
        background-color: #f5f5f5;
        .store_info {
            margin-top: 0.2rem;
            background: #f4f4f4;
            font-size: 0.28rem;
            li{
                text-align: left;
                height: 1rem;
                overflow: hidden;
                background-color: #fff;
                list-style-type: none;
                border-bottom:0.01rem solid #eee;
                line-height: 1rem;
                padding: 0 0.25rem;
                span{
                    color: #999;
                }
                input {
                    margin-top: 0.15rem;
                }
                img{
                    width: 0.14rem;
                    float: right;
                    margin-top: 0.4rem;
                }
            }
        }
    }
    
</style>