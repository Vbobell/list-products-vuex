import Vue from 'vue';

export default {
    state: {
        list: []
    },

    getters: {
        cart: state => {
            return state.list
        }
    },

    mutations: {
        addToCart(state, { products, id }) {
            let productNow;

            productNow = products.filter((product) => product.id == id);
            
            if (productNow.length > 0) {
                state.list.push(productNow[0]);
            }
        }
    },

    actions: {
        addToCart({ commit, rootGetters }, id) {
            let { products } = rootGetters;

            commit('addToCart', { products, id });
        }
    }
}