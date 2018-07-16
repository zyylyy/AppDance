import ajax from '../fetch'

export default {
	getDanceListType(){
        return ajax({
            url: `/dance/list/type`,
            method: 'get',
        })
	},
	getDanceinfo(){
        return ajax({
            url: `/dance/list/danceinfo/${9999}`,
            method: 'get',
        })
	},	

}