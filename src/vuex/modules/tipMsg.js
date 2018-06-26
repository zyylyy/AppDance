import * as types from '../mutationTypes'

const state = {
    tipState: false,
    tipMsgText: '',
};

const mutations = {
    [types.SETTIPMSG] (state, data){
        state.tipState = data.tipState
        state.tipMsgText = data.tipMsgText
    },
};
export default{
    state,
    mutations
}