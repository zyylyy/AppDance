import * as types from '../mutationTypes'

export default {
    setDemo: ({ commit }, token) => {
        commit(types.SETDEMO, token)
    },
    removeDemo: ({ commit }) => {
        commit(types.REMOVEDEMO)
    },
}