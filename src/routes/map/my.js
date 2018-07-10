const my_settings = resolve => require(['views/my/mySettings/my_settings.vue'], resolve)
const my_profile = resolve => require(['views/my/myProfile/my_profile.vue'], resolve)
const edit_profile = resolve => require(['views/my/myProfile/edit_profile.vue'], resolve)

export default [
	{
		path: '/my_settings',
		name: 'my_settings',
		component: my_settings,
		meta: {
			title: '我的设置'
		}
	},{
		path: '/my_profile',
		name: 'my_profile',
		component: my_profile,
		meta: {
			title: '我的帐号'
		}
	},{
		path: '/edit_profile',
		name: 'edit_profile',
		component: edit_profile,
		meta: {
			title: '编辑资料'
		}
	}
]