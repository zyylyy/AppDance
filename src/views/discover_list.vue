<template>
    <div class="discover_list">
        <li v-for="item in 6">
            <div>
                <p class="font18">在舞蹈的移动过程中推动流动的重要性</p>
                <p class="font12">张三的诗</p>
                <p class="font12">2018.05.15</p>
            </div>
            <img :src="imgUrl" alt="">
        </li>
    </div>
</template>
<script>

import imgUrl from '../assets/images/img/slide01.png'

export default {
    name: 'discover_list',
    components: {
        
    },
    data() {
        return {
            imgUrl,
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
    .discover_list {
        li {
            padding: 0.3rem;
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: left;
            div{
                flex: 1;
                p:nth-child(1){
                    display: -webkit-box;  
                    -webkit-box-orient: vertical;  
                    -webkit-line-clamp: 2;  
                    overflow: hidden;  
                    /* autoprefixer: off */  
                    -webkit-box-orient: vertical;  
                    /* autoprefixer: on */
                }
                p:nth-child(2){
                    margin-top: .3rem;
                    color: #666;
                }
                p:nth-child(3){
                    margin-top: .3rem;
                    color: #666;
                }
            }
            img {
                margin-left: .3rem;
                height: 2rem;
                width: 1.6rem;
            }
        }
    }
</style>
