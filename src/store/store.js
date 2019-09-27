import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [{
            'id': 1,
            'name': 'TV',
            'amount': 4
        }, {
            'id': 2,
            'name': 'Computer',
            'amount': 2
        }]
    },

    getters: {

    },

    mutations: {
        buyProduct(state, id) {
            let productNow;

            state.products = state.products.map((product) => {
                if (product.id == id) {
                    product.amount--;
                }

                return product;
            });
            
            productNow = state.products.filter((product) => product.id == id);

            if (productNow.length > 0 && productNow[0].amount == 0) {
                state.products = state.products.filter((product) => product.id != id);
            }
        }
    },

    actions: {
        buyProduct(context, id) {
            context.commit('buyProduct', id);
        }
    }
});