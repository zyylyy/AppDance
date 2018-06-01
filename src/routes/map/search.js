const search = resolve => require(['views/search/index.vue'], resolve)

export default [
	{
		path: '/search',
		name: 'search',
		component: search,
		meta: {
			title: '热门搜索'
		}
	}
]