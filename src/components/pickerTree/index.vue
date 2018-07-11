<template>
    <div class="pickerTree">
        <mt-popup 
          v-model="regionVisible" 
          position="bottom" 
          class="region-popup">
            <li class="box_config">
                <span class="font14" @click="cancel">取消</span>
                <span class="font16">所在城市</span>
                <span class="font14 active" @click="complete">完成</span>
            </li>
            <mt-picker 
              :slots="myAddressSlots" 
              valueKey="name" 
              :visibleItemCount="5" 
              @change="addressChange" 
              :itemHeight="40">
            </mt-picker>
        </mt-popup>
    </div>
</template>
<script  type="text/babel">

import { Popup } from 'mint-ui';
import { Picker } from 'mint-ui';

//引入省市区数据json文件
import threeLevelAddress from '../../static/threeLevelAddress.json'
 
 
export default {
    name: 'pickerTree',
    components:{
        Popup,
        Picker,
    },
    data(){
        return{
            regionArr: [],

            regionVisible: false, //弹出框是否可见
            regionInit: false,    //禁止地区选择器自动初始化，picker组件会默认进行初始化，导致一进入页面就会默认选中一个初始3级地址

            //picker组件插槽
            myAddressSlots: [
                //省
                {
                    flex: 1,
                    values: this.getProvinceArr(), //省份数组
                    className: 'slot1',
                    textAlign: 'center'
                },
                //分隔符
                {
                    divider: true,       //是否显示分隔符
                    content: '',         //分隔符内容
                    className: 'slot2'
                },
                //市
                {
                    flex: 1,
                    values: this.getCityArr("北京市"),
                    className: 'slot3',
                    textAlign: 'center'
                },
                //分隔符
                {
                    divider: true,
                    content: '',
                    className: 'slot4'
                },
                //县
                {
                    flex: 1,
                    values: this.getCountyArr("北京市","北京市"),
                    className: 'slot5',
                    textAlign: 'center'
                }
            ],
        }
    },
    mounted(){

    },
    methods:{
        complete(){
            this.$emit('complete', this.regionArr)
            this.regionVisible = false
        },
        cancel(){
            this.regionVisible = false
        },
        //打开地址选择器
        showAddressPicker(){
            this.regionVisible = true;
        },
        /*
        ** picker实例
        ** values 为当前省市区数组[省,市,区]
        */
        addressChange(picker, values){

            if (this.regionInit){
                //取值并赋值
                this.regionArr = values

                //给市、县赋值
                picker.setSlotValues(1, this.getCityArr(values[0]["name"]));
                picker.setSlotValues(2, this.getCountyArr(values[0]["name"], values[1]["name"]));
            }else {
              this.regionInit = true;
            }
        },
        //省级对象数组
        getProvinceArr() {
            let provinceArr = [];
            threeLevelAddress.forEach(function (item) {
                let obj = {};
                obj.name = item.name;
                obj.code = item.code;
                provinceArr.push(obj);
            });
            return provinceArr;
        },
        //市级对象数组
        getCityArr(province) {
        // console.log("省：" + province);
            let cityArr = [];
            threeLevelAddress.forEach(function (item) {
                if(item.name === province) {
                    item.children.forEach(function (args) {
                        let obj = {};
                        obj.name = args.name;
                        obj.code = args.code;
                        cityArr.push(obj);
                    });
                }
            });
            return cityArr;
        },
        //县级对象数组
        getCountyArr(province,city){
            let countyArr = [];
            threeLevelAddress.forEach(function(item){
                if (item.name === province){
                    item.children.forEach(function (args) {
                        if (args.name === city){
                            args.children.forEach(function (param) {
                                let obj = {};
                                obj.name=param.name;
                                obj.code=param.code;
                                countyArr.push(obj);
                            })
                        }
                    });
                }
            });
            return countyArr;
        },
    },
}
</script>
<style lang="less" scoped>
    .pickerTree {
        font-size: .4rem !important;
        color: #222;
        .mint-popup{
            width: 100%;
        }
        .box_config {
            height: 0.8rem;
            line-height: .8rem;
            border-bottom: 1px solid #eee;
            display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            span{
                flex: 1;
            }
            .active {
                color:#137DFF;
            }
        }
    }
</style>

