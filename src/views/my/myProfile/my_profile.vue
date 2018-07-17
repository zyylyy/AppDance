<template>
    <div class="my_profile">
        <div @click="toEditProfile">
            <div class="batch-box uerImg">
                <span class="types">头像</span>
                <span class="texts">
                    <img :src="user_img" alt="">
                </span>
                <span class="pic"><img :src="arrow" alt=""></span>
            </div>
            <div class="batch-box">
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
        </div>

        <div class="batch-box" @click="toEdit('邀请码', params.val)">
            <span class="types">邀请码</span>
            <span class="texts">
                <span v-if="true">请输入</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>
        <div class="batch-box" style="margin-bottom: 0.2rem;" @click="toUploadCard">
            <span class="types">实名认证</span>
            <span class="texts">
                <span v-if="true">未认证</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>

        <div class="batch-box" @click="showAddressPicker">
            <span class="types">所在城市</span>
            <span class="texts">
                <span v-if="true">请选择</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>
        <div class="batch-box" @click="toEdit('个性签名', params.val)">
            <span class="types">个性签名</span>
            <span class="texts">
                <span v-if="true">请填写</span>
                <span class="yes_checkbox" v-else>{{  }}</span>
            </span>
            <span class="pic"><img :src="arrow" alt=""></span>
        </div>

        <pickerTree ref="pickerTree" @complete="getRegionArr"></pickerTree>
    </div>
</template>
<script type="text/babel">

import arrow from '../../../assets/images/arrow.png'
import user_img from '../../../assets/images/user_img.png'

export default {
	name: "my_profile",
    data(){
        return {
            arrow,
            user_img,
            params: {
                val: '',
            }
        }
    },
    mounted(){

    },
    methods: {
        toEdit(title, vals){
            this.$router.push(`/edit_text?title=${title}&vals=${vals}`)
        },
        toEditProfile(){
            this.$router.push(`/edit_profile`)
        },
        toUploadCard(){
            this.$router.push(`/upload_card`)
        },
        showAddressPicker(){
            this.$refs.pickerTree.regionVisible = true
        },
        getRegionArr(arr){
            console.log(arr)
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
                img {
                    width: 1rem;
                    height: 1rem;
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