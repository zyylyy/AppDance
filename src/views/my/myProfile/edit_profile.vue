<template>
    <div class="edit_profile">
        <li><span>{{title}}：</span>
            <input v-model="vals" placeholder="请填写" :maxlength="test_length" />
            <img :src='delete_img' @click='del'/>
        </li>
        <div class="len-box">
            <span :class="{'black': vals.length > 0}">{{ vals.length }}</span>/{{ test_length }}
        </div>
        <button>保存</button>
    </div>
</template>
<script>

import delete_img from '../../../assets/images/del.svg'

export default {
    name: 'edit_profile',
    data() {
        return {
            delete_img : delete_img,
            vals: this.$route.query.vals || '',
            title: this.$route.query.title || '',
            test_length: 15,
        }
    },
    mounted() {
        this.util.setTitle(`${this.title}修改`)
    },
    methods: {
        del(){
            this.vals = ''
        },
        save(){

        },
    }
}
</script>
<style lang="less" scoped>
    .edit_profile {
    	input {
            -webkit-user-select: auto;
            width: 4.5rem;
        }
        margin-top: 0.2rem;
        background: #f4f4f4;
        font-size: 0.28rem;
        li {
            display: block;
            margin-bottom: 0.2rem;
            height: 1rem;
            overflow: hidden;
            background-color: #fff;
            list-style-type: none;
            border-bottom: 0.01rem solid #eee;
            line-height: 1rem;
            padding: 0 0.25rem;
            span {
                color: #666
            }
            img{
                width: 0.32rem;
                float: right;
                margin-top: 0.35rem;
            }
        }
        .len-box{
            display: flex;
            justify-content: flex-end;
            color: #999;
            font-size: 0.3rem;
            height: 0.3rem;
            vertical-align: top;
            margin-bottom: 1.3rem;
            padding-right: 0.3rem;
            .black{
                color: #333;
            }
        }
        button {
            width: 80%;
            display: block;
            color: #fff;
            font-size: 0.32rem;
            margin-top: 1.2rem;
            margin: auto;
            text-align: center;
            height: 0.88rem;
            line-height: 0.88rem;
            background: #867ae4;
            border-radius: 0.08rem;
            border: none;
        }
    }
</style>
