import * as types from '../mutationTypes'

export default {
    /**
     * 
     */
    setDemo: ({ commit }, token) => {
        commit(types.setDemo, token)
    },
    removeDemo: ({ commit }) => {
        commit(types.removeDemo)
    }
}