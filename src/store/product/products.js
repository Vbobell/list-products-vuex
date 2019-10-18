import Vue from 'vue';

export default {
    state: {
        list: [{
            'id': 0,
            'name': 'Não há produtos',
            'amount': 0
        }]
    },

    getters: {
        products: state => {
            return state.list
        }
    },

    mutations: {
        decrementProduct(state, { id }) {
            let productNow;

            state.list = state.list.map((product) => {
                if (product.id == id) {
                    product.amount--;
                }

                return product;
            });

            productNow = state.list.filter((product) => product.id == id);

            if (productNow.length > 0 && productNow[0].amount == 0) {
                state.list = state.list.filter((product) => product.id != id);
            }
        },
        setProducts(state, { products }) {
            Vue.set(state, 'list', products);
        }
    },

    actions: {
        decrementProduct({ commit }, id) {
            commit('decrementProduct', { id });
        },
        setProducts({ commit }, products) {
            commit('setProducts', { products });
        }
    }
}