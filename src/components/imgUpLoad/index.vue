<template>
    <div class="imgUpload">
        <button 
            @click="handleClick">
            {{ text }}
            <input 
                type="file" 
                name="file" 
                class="pg-upload_input" 
                @change="handleChange" 
                ref="input" 
                :multiple="multiple" 
                :accept="accept">
        </button>
    </div>
</template>
<script type="text/babel">

export default {
    name: 'imgUpload',
    props: {
        multiple: {
            type: Boolean,
            default: false,
        },
        accept: {
            type: String,
            default: ''
        },
        folderType: {
            type: String,
            default: '11'
        },
        text: {
            type: String,
            default: '上传图片'
        },
        id: String,
        type: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        handleClick() {
            this.$refs.input.click()
        },
        //触发input files
        handleChange(e) {
            const files = e.target.files
            if (!files)
                return

            this.uploadFiles(files)
            this.$refs.input.value = null
        },
        //上传的文件
        uploadFiles(files) {
            let postFiles = Array.prototype.slice.call(files)
            if (postFiles.length === 0)
                return
            if (!this.multiple)
                postFiles = postFiles.slice(0, 1)

            postFiles.forEach(file => {
                this.upload(file)
            })
        },
        //上传
        upload(file) {
            //上传方法需要跟后台对接，在去编写
            // ajax.uploadImg(file, this.folderType).then((result) => {
            //     this.handleSuccess(result, file)
            // })
        },
        //上传成功
        handleSuccess(res, file) {
            if (this.multiple) {
                this.fileList.push(res)
            }
            else {
                this.fileList = []
                this.fileList.push(res)
            }
            if (this.id) {
                this.$emit('upload-success', this.id, this.multiple ? this.fileList : this.fileList[0])
            }
            else {
                this.$emit('upload-success', this.multiple ? this.fileList : this.fileList[0])
            }
        }
    }
}
</script>
<style rel="stylesheet/less" lang="less" scoped>
    .imgUpload {
        button {

        }
        input {
            display: none;
        }
    }
</style>