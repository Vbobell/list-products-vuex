import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [{
            'id': 1,
            'name': 'TV'
        }, {
            'id':2,
            'name': 'Computer'
        }]
    },

    getters: {

    },

    mutations: {

    },

    actions: {

    }
});