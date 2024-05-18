import { createStore } from "vuex"
import axios from "axios"

export const store = createStore({
    state: {
        posts: [],
        loading: false,
        error: null
    },
    actions: {
        async fetchPosts({ commit }) {
            commit('SET_LOADING', true);
            try {
                const response = await axios.get('http://localhost:3000/posts');
                commit('SET_POSTS', response.data);
                commit('SET_LOADING', false);
            } catch (error) {
                commit('SET_ERROR', error);
                commit('SET_LOADING', false);
            }
        }
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_ERROR(state, error) {
            state.error = error;
        }
    },
    getters: {
        posts: (state) => state.posts,
        loading: (state) => state.loading,
        error: (state) => state.error
    }
})