export default {
    state: {
        list: [{
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
        }
    },

    actions: {
        decrementProduct({ commit }, id) {
            commit('decrementProduct', { id });
        }
    }
}