<template>
    <div class="my_profile">
        <div class="batch-box uerImg">
            <span class="types">头像</span>
            <span class="texts">
                <img :src="bulb" alt="">
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>

        <div class="batch-box" @click="toEdit('昵称', params.val)">
            <span class="types">昵称</span>
            <span class="texts">
                <span v-if="true">请选择</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>
        <div class="batch-box">
            <span class="types">性别</span>
            <span class="texts">
                <span v-if="true">请选择</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>
        <div class="batch-box" style="margin-bottom: 0.2rem;">
            <span class="types">生日</span>
            <span class="texts">
                <span v-if="true">请选择</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>

        <div class="batch-box">
            <span class="types">邀请码</span>
            <span class="texts">
                <span v-if="true">请输入</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>
        <div class="batch-box" style="margin-bottom: 0.2rem;">
            <span class="types">实名认证</span>
            <span class="texts">
                <span v-if="true">未认证</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>

        <div class="batch-box" >
            <span class="types">所在城市</span>
            <span class="texts">
                <span v-if="true">请选择</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>
        <div class="batch-box">
            <span class="types">个性签名</span>
            <span class="texts">
                <span v-if="true">请选择</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>
    </div>
</template>
<script type="text/babel">

import arrow from '../../../assets/images/arrow.png'
import bulb from '../../../assets/images/bulb.png'

export default {
	name: "my_profile",
    data(){
        return {
            arrow,
            bulb,
            params: {
                val: '',
            }
        }
    },
    mounted(){

    },
    methods: {
        toEdit(title, vals){
            this.$router.push(`/edit_profile?title=${title}&vals=${vals}`)
        },
    },
}
</script>
<style lang="less" scoped>
    .my_profile {
        background-color: #f5f5f5;
        .batch-box{
            background:#fff;
            width:100%;
            color:#999;
            font-size:.28rem;
            min-height: 1rem;
            display: -webkit-flex;
            display: flex;
            line-height: .4rem;
            padding:.2rem .3rem;
            align-items:center;
            border-bottom:0.01rem solid #eee;
            .types{
                width: 1.4rem;
                text-align: left;
            }
            .texts{
                flex:1;
                text-align: right;
                .yes_checkbox {
                    color:#333;
                }
            }
            .pic{
                width:.2rem;
                margin-left:.2rem;
                img {
                    width: 0.14rem;
                }
            }
        }
        .uerImg {
            min-height: 1.5rem
        }

    }
    
</style>