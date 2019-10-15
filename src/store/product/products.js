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

    },

    actions: {

    }
}