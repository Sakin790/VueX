import { createStore } from 'vuex';
import axios from 'axios';


export default createStore({
    state: {
        data: null, // Holds API response data
        loading: false, // Flag for loading state
        error: null, // Stores any error during API call
    },
    actions: {
        fetchData({ commit }) {
            commit('setLoading', true); // Set loading flag to true
            axios.get('https://catfact.ninja/fact') // Replace with your actual API URL
                .then(response => {
                    commit('setData', response.data); // Commit data to store
                })
                .catch(error => {
                    commit('setError', error); // Commit error to store
                })
                .finally(() => {
                    commit('setLoading', false); // Set loading flag to false
                });
        },
    },
    mutations: {
        setData(state, data) {
            state.data = data;
        },
        setLoading(state, loading) {
            state.loading = loading;
        },
        setError(state, error) {
            state.error = error;
        },
    },
    getters: {
        getData(state) {
            return state.data;
        },
        getLoading(state) {
            return state.loading;
        },
        getError(state) {
            return state.error;
        },
    },
});
