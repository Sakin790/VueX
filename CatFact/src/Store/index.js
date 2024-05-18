import { createStore } from 'vuex'

export const store = createStore({
    state: {
        bookList: ["Sherlok", "Feluda", "Bomkesh", "Daroga"],
    },

    actions: {
        addBook({ commit }, data) {
            commit("ADD_BOOK", data)
        },
        deleteTodo({ commit }, data) {
            commit("DELETE_TODO", data)
        }
    },

    mutations: {
        ADD_BOOK(state, data) {
            state.bookList.push(data)
        },
        DELETE_TODO(state, data) {
            state.bookList.splice(data, 1);
        }
    },

})