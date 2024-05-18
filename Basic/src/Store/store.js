import { createStore } from "vuex"

export const store = createStore({
    state: {
        bookList: ["Sherlok", "Bomkesh", "Feluda"]
    },
    actions: {

        Add_Book_Action({ commit }, data) {
            commit("Add_Book_Mutation", data)
        },
        delete_Book({ commit }, data) {
            commit("delete_Mutation", data)
        }

    },
    mutations: {
        Add_Book_Mutation(state, data) {
            state.bookList.push(data)
        },
        delete_Mutation(state, data) {
            state.bookList.splice(data, 1)
        }

    }


})