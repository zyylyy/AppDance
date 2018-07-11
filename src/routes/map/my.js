const my_settings = resolve => require(['views/my/mySettings/my_settings.vue'], resolve)
const my_profile = resolve => require(['views/my/myProfile/my_profile.vue'], resolve)
const edit_profile = resolve => require(['views/my/myProfile/edit_profile.vue'], resolve)
const edit_text = resolve => require(['views/my/myProfile/edit_text.vue'], resolve)
const upload_card = resolve => require(['views/my/myProfile/upload_card.vue'], resolve)

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
		path: '/edit_text',
		name: 'edit_text',
		component: edit_text,
		meta: {
			title: '个人资料'
		}
	},{
		path: '/edit_profile',
		name: 'edit_profile',
		component: edit_profile,
		meta: {
			title: '个人资料'
		}
	},{
		path: '/upload_card',
		name: 'upload_card',
		component: upload_card,
		meta: {
			title: '上传身份证'
		}
	}
]