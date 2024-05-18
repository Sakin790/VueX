import { createStore } from "vuex"

export const store = createStore({
    state: {
        count: 0
    },
    action: {
        increment({ commit }) {
            commit("INCREMENT")

        }
    },

    mutations: {
        INCREMENT(state) {
            state.count++
        }
    }
}) 