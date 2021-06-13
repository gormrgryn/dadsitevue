// import { Vue } from "vue";
import { createStore } from "vuex";

// Vue.use(Vuex)

const state = {
    formValues: {}
}
const mutations = {
    ADD_VALUE (state, payload) {
        state.formValues[payload.key.toLowerCase()] = payload.value
    }
}
const actions = {
    addValue ({ commit }, payload) {
        commit('ADD_VALUE', payload)
    }
}
const getters = {
    getValues: state => state.formValues
}

export default createStore({
    state,
    mutations,
    actions,
    getters
})
