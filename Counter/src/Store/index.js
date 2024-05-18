import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        product: {}
    },
    actions: {
        fetchProduct({ commit }) {
            axios.get('https://dummyjson.com/products/2')
                .then(response => commit('setProduct', response.data))
                .catch(error => console.error(error)); // Handle errors appropriately
        }
    },
    mutations: {
        setProduct(state, product) {
            state.product = product;
        }
    }
});

export default store;
