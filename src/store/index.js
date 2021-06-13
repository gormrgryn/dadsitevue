// import { Vue } from "vue";
import { createStore } from "vuex";

// Vue.use(Vuex)

const state = {
    formValues: {},
    errors: {
        // name: "Name must be non-empty",
        // email: "Invalid e-mail",
        // message: "Message must be non-empty"
    }
}
const mutations = {
    ADD_VALUE (state, payload) {
        state.formValues[payload.key.toLowerCase()] = payload.value
    },
    ADD_ERROR (state, payload) {
        state.errors[payload.key] = payload.msg
    }
}
const actions = {
    addValue ({ commit }, payload) {
        commit('ADD_VALUE', payload)
    },
    addError({ commit }, payload) {
        commit('ADD_ERROR', payload)
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
