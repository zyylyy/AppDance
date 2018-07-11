<template>
    <div class="upload_card">
        <li class="card">
            <p class="font12">身份证正面照</p>
            <div class="view_card" @click="uploadCard">
                <img :src="imgUrl" alt="">
            </div>
        </li>
        <li class="card">
            <p class="font12">身份证背面照</p>
            <div class="view_card">
                <img :src="imgUrl" alt="">
            </div>
        </li>
        <p class="text font12">请上传正面清晰照</p>
        <button type="button" class="font16">确认上传</button>

        <imgUpload v-show="false" ref="imgUpload" @upload-success="uploadSuccess" text="上传"></imgUpload>
    </div>
</template>
<script>

import imgUrl from '../../../assets/images/img/slide01.png'

export default {
    name: 'upload_card',
    data() {
        return {
            imgUrl,
        }
    },
    mounted() {
        
    },
    methods: {
        uploadCard(){
            this.$refs.imgUpload.handleClick()
        },
        uploadSuccess(file){

        },
    }
}
</script>
<style lang="less" scoped>
    .upload_card {
        background-color: #f5f5f5;
        text-align: left;
        .card {
           padding: 0 0.6rem; 
           p {
            color: #222;
            margin-top: .5rem;
           }
            .view_card {
                height: 3.75rem;
                background-color: #fff;
                margin-top: 0.2rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .text {
            margin-top: 0.8rem;
            color: #222;
            text-align: center;
        }
        button {
            width: 100%;
            display: block;
            color: #F8BD50;
            height: 1rem;
            line-height: 1rem;
            background: #181818;
            border: none;
            position: fixed;
            bottom: 0;
        }
    }
</style>
