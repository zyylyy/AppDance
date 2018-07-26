import ajax from '../fetch'

export default {
    getCategorySub(parentCode){
        return ajax({
            url: '/dance/list/category/sub/'+parentCode,
            method: 'get',
        })
    },
	getDanceListType(){
        return ajax({
            url: `/dance/list/category`,
            method: 'get',
        })
	},
	getDanceinfo(id){
        return ajax({
            //url: '/dance/get/{danceinfo}/id/info?danceinfo='+id,//正确
            url: '/dance/get/'+id+'/id/info',//错误
            method: 'get',
        })
	},	

}