<template>
    <div class="evaluating">
        <header>
            <img src="../../assets/images/res_banner.jpg">
            <i class="back"></i>
            <button class="font12"><i></i>立即观看</button>
        </header>
        <div class="intro">
            <p class="intro-title font20">伦巴-套索转动作</p>
            <p class="font12 intro-detail">
                先把动作做到位置，但并不立刻将重心送到，到下一个节拍快要要到达时，即在该节拍的后一半，才将重心迅速到达，这样形成有缓有急的表现，使舞蹈更具有美感
            </p>
            <p class="font12 intro-footer">
                <span><i class="eye"></i><font>2019</font>次学习</span>
                <span><i class="message"></i><font>508</font>人评价<i class="more"></i></span>

            </p>
        </div>
        <div class="share">
            <p class="font18 share-title">热门分享</p>
            <ul>
                <li class="font12">
                    <div class="img-content">
                        <img src="../../assets/images/res_banner.jpg" alt="">
                        <span class="font12"><i class="eye"></i><font>321</font></span>
                    </div>
                    <div class="share-intro">
                        <p class="font14">跳的还行吧</p>
                        <p class="font11">牛晓静</p>
                    </div>
                </li>
                <li class="font12">
                    <div class="img-content">
                        <img src="../../assets/images/res_banner.jpg" alt="">
                        <span class="font12"><i class="eye"></i><font>321</font></span>
                    </div>
                    <div class="share-intro">
                        <p class="font14">跳的还行吧</p>
                        <p class="font11">牛晓静</p>
                    </div>
                </li>
                <li class="font12">
                     <div class="img-content">
                        <img src="../../assets/images/res_banner.jpg" alt="">
                        <span class="font12"><i class="eye"></i><font>321</font></span>
                    </div>
                     <div class="share-intro">
                        <p class="font14">跳的还行吧</p>
                        <p class="font11">牛晓静</p>
                    </div>
                </li>
                <li class="font12">
                     <div class="img-content">
                        <img src="../../assets/images/res_banner.jpg" alt="">
                        <span class="font12"><i class="eye"></i><font>321</font></span>
                    </div>
                     <div class="share-intro">
                        <p class="font14">跳的还行吧</p>
                        <p class="font11">牛晓静</p>
                    </div>
                </li>
                <li class="font12">
                     <div class="img-content">
                        <img src="../../assets/images/res_banner.jpg" alt="">
                        <span class="font12"><i class="eye"></i><font>321</font></span>
                    </div>
                     <div class="share-intro">
                        <p class="font14">跳的还行吧</p>
                        <p class="font11">牛晓静</p>
                    </div>
                </li>
                <li class="font12">
                     <div class="img-content">
                        <img src="../../assets/images/res_banner.jpg" alt="">
                        <span class="font12"><i class="eye"></i><font>321</font></span>
                    </div>
                     <div class="share-intro">
                        <p class="font14">跳的还行吧</p>
                        <p class="font11">牛晓静</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    
</script>

<style lang="less" scoped>
    .evaluating{
        font-family: PingFangSC-Medium;
        header{
            position:relative;
            width:100%;
            font-size:0;
            img{
                width:100%;
            }
            i.back{
                position:absolute;
                width:0.5rem;
                height:0.5rem;
                left:0.3rem;
                top:0.5rem;
                background:url('../../assets/images/back.png') no-repeat center;
                background-size:100%;
                border-radius:50%;
            }
            button{
                position: absolute;
                width: 1.6rem;
                height: 0.6rem;
                left: 0.3rem;
                bottom: 0.5rem;
                border: none;
                background: linear-gradient(to right, #FFDA3E, #FFA43E);
                border-radius: 0.3rem;
                color: #222;
                i{ 
                    display:inline-block;
                    height:0.15rem;
                    width:0.2rem;
                    background:url('../../assets/images/play.png') no-repeat center;
                    background-size:100%;
                }
            }
        }
        .intro{
            background-color:#fff;
            padding:0.5rem 0.3rem;
            margin-bottom:0.3rem;
            p{
                text-align:left;
                letter-spacing: 0;
                line-height: 18px;
                padding-bottom:0.2rem;
            }
            p.intro-title{
                color: #222222;
            }
            .intro-detail{
                color:#666;
            }
            .intro-footer{
                color:#999;
                padding-bottom:0;
                span{
                    display:inline-block;
                    margin-right:0.3rem;
                    i{
                        display:inline-block;
                        width:0.25rem;
                        height:0.2rem;
                        margin-right:5px;

                    }
                    .eye{
                        background:url('../../assets/images/eye.png') no-repeat center;
                        background-size:100%;
                    }
                    .message{
                        background:url('../../assets/images/message.png') no-repeat center;
                        background-size:100%;
                    }
                    .more{
                        background:url('../../assets/images/more.png') no-repeat center;
                        background-size:100%;
                    }
                }
            }
        }
        .share{
            text-align:left;
            background-color:#fff;
            padding:0.5rem 0.3rem;
            .share-title{
                color:#222;
                margin-bottom:0.4rem;
            }
            ul{
                font-size:0;
                li{
                    float:left;
                    width:32%;
                    box-sizing:border-box;
                    margin-bottom:0.2rem;
                    position:relative;
                    .img-content{
                        margin-bottom:0.2rem;
                        position:relative;
                        font-size:0;
                        img{
                            width:100%;
                        }
                        span{
                            position:absolute;
                            bottom:0.1rem;
                            right:0.2rem;
                            color:#fff;
                            i{
                                display:inline-block;
                                width:0.25rem;
                                height:0.2rem;
                                background:url('../../assets/images/eye.png') no-repeat center;
                                background-size:100%;
                                margin-right:5px;
                            }
                        }
                    }
                    
                    
                    .share-intro{
                        p:nth-child(1){
                            color:#222;
                        }
                        p:nth-child(2){
                            color:#999;
                            padding:0.1rem 0 0.1rem;
                        }
                    }
                }
                li:nth-child(3n+2){
                    margin:0 2%;
                }
            }
            ul:after{
                display:block;
                content:"";
                clear:both;
            }
            
        }
    }
</style>