import * as types from '../mutationTypes'

export default {
    getTipMsg({commit}, data){
        commit([types.SETTIPMSG], data)
    }
}