import { createStore } from "vuex";

const state = {
    formValues: {},
    errors: {}
}
const mutations = {
    ADD_VALUE (state, payload) {
        state.formValues[payload.key.toLowerCase()] = payload.value
    },
    ADD_ERROR (state, payload) {
        state.errors[payload.key] = payload.msg
    },
    CLEAR_FIELDS (state) {
        Object.keys(state.formValues).forEach(i => {
            state.formValues[i] = ''
        })
    }
}
const actions = {
    addValue ({ commit }, payload) {
        commit('ADD_VALUE', payload)
    },
    addError({ commit }, payload) {
        commit('ADD_ERROR', payload)
    },
    clearFields({ commit }) {
        commit('CLEAR_FIELDS')
    }
}
const getters = {
    getValues: state => state.formValues,
    getErrors: state => state.errors
}

export default createStore({
    state,
    mutations,
    actions,
    getters
})
