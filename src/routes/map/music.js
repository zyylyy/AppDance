const music_home = resolve => require(['views/music/music_home.vue'], resolve)
const my_music = resolve => require(['views/music/my_music.vue'], resolve)
const today_recommended = resolve => require(['views/music/today_recommended.vue'], resolve)
const hottest_music = resolve => require(['views/music/hottest_music.vue'], resolve)
const add_music = resolve => require(['views/music/add_music.vue'], resolve)

export default [
	{
		path: '/music_home',
		name: 'music_home',
		component: music_home,
		meta: {
			title: '音乐'
		}
	},{
		path: '/my_music',
		name: 'my_music',
		component: my_music,
		meta: {
			title: '我的音乐'
		}
	},{
		path: '/today_recommended',
		name: 'today_recommended',
		component: today_recommended,
		meta: {
			title: '今日推荐'
		}
	},{
		path: '/hottest_music',
		name: 'hottest_music',
		component: hottest_music,
		meta: {
			title: '最热音乐'
		}
	},{
		path: '/add_music',
		name: 'add_music',
		component: add_music,
		meta: {
			title: '新建歌单'
		}
	}
]