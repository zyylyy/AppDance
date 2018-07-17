<template>
    <div class="edit_profile">
        <div class="box">
            <img :src="user_img" alt="">
        </div>
        <div class="box">
            <p  class="right" @click="selectGender('male')">
                <img :src="params.gender == 'male' ? male_yes : male_no" alt="">
                <span class="font12">男</span>
            </p>
            <p @click="selectGender('woman')">
                <img :src="params.gender == 'woman' ? woman_yes : woman_no" alt="">
                <span class="font12">女</span>
            </p>
        </div>
        <div class="box">
            <div class='sertext font18'>
                <p v-if="isName" @click="isName=false">{{ params.userName ? `昵称：${params.userName}` : '输入您的昵称' }}</p>
                <input v-else type="text" @blur="editUserName" placeholder="输入动作名称" v-model.trim="params.userName" autofocus="autofocus" />
            </div>
        </div>
        <div class="box" @click="openPicker">
            <p class="font18">{{ params.dateTime ? `出生日期：${params.dateTime}` : '选择出生日期' }}</p>
        </div>

        <button type="button" class="font16">完成</button>

        <mt-datetime-picker
          ref="picker"
          type="date"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          @confirm="handleConfirm">
        </mt-datetime-picker>
    </div>
</template>
<script>

import user_img from '../../../assets/images/user_img.png'
import male_yes from '../../../assets/images/male_yes.png'
import male_no from '../../../assets/images/male_no.png'
import woman_no from '../../../assets/images/woman_no.png'
import woman_yes from '../../../assets/images/woman_yes.png'

import { DatetimePicker } from 'mint-ui'
import moment from 'moment'// 格式化时间

export default {
    name: 'edit_profile',
    components: {
        DatetimePicker
    },
    data() {
        return {
            male_yes,
            male_no,
            woman_yes,
            woman_no,
            user_img,

            params: {
                userName: '',
                dateTime: '',
                userImgUrl: '',
                gender: 'male',
            },
            isName: true,
            startDate: new Date()
        }
    },
    mounted() {

    },
    methods: {
        editUserName(){
            this.isName = true
        },
        openPicker () {
          this.$refs.picker.open()
        },
        handleConfirm (data) {
          let date = moment(data).format('YYYY-MM-DD')
          this.params.dateTime = date
        },
        selectGender(status){
            this.params.gender = status
        },
    }
}
</script>
<style lang="less" scoped>
    .edit_profile {
        .box {
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            img {
                width: 2rem;
                height: 2rem;
                margin: 1rem 0;
            }
            p {
                position: relative;
                img {
                    width: 1rem;
                    height: 1rem;
                }
                span {
                    position: absolute;
                    margin: auto;
                    bottom: .5rem;
                    right: 0;
                    left: 0;
                }
            }
            .right {
                margin-right: 2rem;
            }
            .sertext {
                flex:1;
                background-size: 0.3rem 0.3rem;
                padding: 1rem .4rem;
                border-radius: 0.1rem;
                position: relative;
                input {
                    width: 88%;
                    height: 0.7rem;
                    -webkit-user-select: auto;
                }
                p{
                    height: 0.7rem;
                    line-height: 0.7rem;
                }
            }
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
