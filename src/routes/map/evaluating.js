const evaluating = resolve => require(['views/evaluating/index.vue'], resolve)
const select_evaluation = resolve => require(['views/evaluating/select_evaluation.vue'], resolve)
const comments = resolve => require(['views/comments.vue'], resolve)

export default [
    {
        path: '/evaluating',
        name: 'evaluating',
        component: evaluating,
        meta: {
            title: '评测'
        }
    },
    {
        path: '/select_evaluation',
        name: 'select_evaluation',
        component: select_evaluation,
        meta: {
            title: '选择测评动作'
        }
    },
    {
        path: '/comments',
        name: 'comments',
        component: comments,
        meta: {
            title: '评论'
        }  
    }
]