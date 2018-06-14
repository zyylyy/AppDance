<!-- 新增音乐 -->
<template>
	<div class="add_music">
		<div class="search_bax font15">
            <div class='sertext'>
                <input type="text" placeholder="新建歌单" v-model.trim="add_value" />
            </div>
		</div>
		<div class="footer">
			<div class="btn font15" :class="{ 'active': add_value}" @click="addMusicName">保存</div>
		</div>
	</div>
</template>
<script type="text/babel">

export default {
	name: "add_music",
	data(){
		return {
			add_value: '',
		}
	},
	methods: {
		//添加歌单
		addMusicName(){
			if(!this.add_value) return 
			console.log(this.add_value)
		}
	},
}
</script>
<style lang="less" scoped>
    .add_music {
    	background-color: #f5f5f5;
        .search_bax {
        	background-color: #fff;
            color: #999;
            position: fixed;
            top: 0.2rem;
            z-index: 100;
            width: 100%;
            padding: 0.1rem 0;
            display:flex;
            justify-content:center;
            align-items:center;
            .sertext {
                flex:1;
                padding: 0 0.3rem ;
                input {
                	width: 100%;
                    height: 0.7rem;
                    -webkit-user-select: auto;
                }
            }
        }
        .footer {
        	position: fixed;
        	top: 2.2rem;
        	padding: 0 0.5rem;
        	width: 100%;
        	.btn {
        		height: 1rem;
        		color: #fff;
        		line-height: 1rem;
        		background-color: #ccc;
        		border-radius: 0.06rem;
        	}
	        .active {
	        	color: #FFBB3E;
	        	background-color: #181818;
	        }
        }
    }
</style>
