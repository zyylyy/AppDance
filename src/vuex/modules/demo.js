//显式的更改state里的数据
import * as types from '../mutationTypes'

const state = {
    demo: ''
}

const mutations = {
    /**
     * 登录token
     */
    [types.SETDEMO] (state, token) {
        state.demo = token
    },
    [types.REMOVEDEMO] (state) {
        state.demo = ''
    }
} 

export default{
    state,
    mutations
}