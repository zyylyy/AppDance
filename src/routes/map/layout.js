const Layout = resolve => require(['views/layout/index.vue'], resolve)
const Recommended = resolve => require(['views/recommended/index.vue'], resolve) //推荐
const streetDance = resolve => require(['views/streetDance/index.vue'], resolve) //街舞
const Mv = resolve => require(['views/mv/index.vue'], resolve)                   //mv
const NationalStandard = resolve => require(['views/nationalStandard/index.vue'], resolve) //国标
const Latin = resolve => require(['views/latin/index.vue'], resolve) //拉丁


export default [
	{
		path: '/layout',
		name: 'layout',
		component: Layout,
		meta: {
			title: '首页'
		},
        children:[
            { path: '/recommended', component: Recommended, meta: {title: '首页'}},
            { path: '/streetDance', component: streetDance, meta: {title: '首页'}},
            { path: '/mv', component: Mv, meta: {title: '首页'}},
            { path: '/nationalStandard', component: NationalStandard, meta: {title: '首页'}},
            { path: '/latin', component: Latin, meta: {title: '首页'}}
        ],
	}
]