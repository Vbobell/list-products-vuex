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
            let productNow, productCart;

            productNow = products.filter((product) => product.id == id);
            
            if (productNow.length > 0) {
                productCart = state.list.filter((product) => product.id == id);

                if (productCart.length > 0) {
                    state.list = state.list.map((product) => {
                        if (product.id == id) {
                            Vue.set(product, 'amount', product.amount+=1);
                        }

                        return product;
                    });
                } else {
                    let { id, name } = productNow[0];

                    state.list.push({
                        id,
                        name,
                        amount: 1
                    });
                }
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