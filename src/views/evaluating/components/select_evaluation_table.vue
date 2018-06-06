<template>
	<div class="box">
        <div class="title font18">推荐测评</div>
        <div class="box_content">
            <div class="list" v-for="item in 6">
                <div class="left">
                    <img src="../../../assets/images/res_banner_2.jpg" alt="">
                </div>
                <div class="right">
                    <p class="top">
                        <span class="type_name font10" :class="{ 'bg_type0': item.type }">{{ '伦巴' }}</span>
                        <span class="type_describe font14">{{ '右脚并缓步舞蹈' }}</span>
                    </p>
                    <p class="bottom font12">等级： {{ '铜牌' }}</p>
                    <p class="bottom font12">教学： {{ '3321' }}</p>
                    <p class="bottom font12">评测： {{ '3321' }}</p>
                    <div class="btn font12">开始测评</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">

import storage from 'storejs'   

export default {
	name: "select_evaluation_table",
	props: {
		dataList: {
			type: Array,
			default: ()=>{
				return []
			}
		}
	},
	data(){
		return {

		}
	},
	mounted(){
        
	},
	methods: {

	},
}
</script>
<style lang="less" scoped>
    .box {
        padding: 0 0.3rem;
        background-color: #fff;
        margin-top: 1.3rem;
        .title {
            text-align: left;
            padding: 0.4rem 0;
        }
        .box_content {
            .list {
                display:flex;
                justify-content:center;
                padding: 0.3rem 0;
                border-bottom: 1px solid #FAF9F7;
                .left {
                    width: 1.4rem;
                    height: 1.4rem;
                    margin-right: 0.15rem;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .right {
                    height: 1.4rem;
                    flex:1;
                    overflow: hidden;
                    position: relative;
                    .top {
                        display:flex;
                        margin-bottom: 0.2rem;
                        .type_name {
                            height: 0.3rem;
                            line-height: 0.3rem;
                            margin-right: 0.1rem;
                            padding: 0 0.05rem;
                            background-color: #FFAA24;
                        }
                        .type_describe {
                            color: #333;
                        }
                    }
                    .bottom {
                        margin-top: 0.05rem;
                    }
                    p {
                        color: #999;
                        text-align: left;
                    }
                    .btn {
                        width: 1.3rem;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        background: linear-gradient(to right, #FFDA3E, #FFA43E);
                        border-radius: 0.6rem;
                    }
                }
                &:last-child{
                    border-bottom: 0;
                }
                &:first-child {
                    padding-top: 0;
                }
            }
        }
    }
</style>