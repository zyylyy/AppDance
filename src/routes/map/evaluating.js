const evaluating = resolve => require(['views/evaluating/index.vue'], resolve)

export default [
    {
        path: '/evaluating',
        name: 'evaluating',
        component: evaluating,
        meta: {
            title: '评测'
        }
    }
]