<template>
    <div class="my_profile_home">
        <div class="header">
            <div class="header_box">
                <img :src="user_img" alt="">
            </div>
            <div></div>
        </div>
    </div>
</template>
<script>

import user_img from '../../../assets/images/user_img.png'

export default {
    name: 'my_profile_home',
    data() {
        return {
            user_img,
        }
    },
    mounted() {
        
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
    .my_profile_home {
        .header {
            padding: 0 .3rem;
            color: #181818;
        }
    }
</style>
