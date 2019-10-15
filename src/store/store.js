import Vuex from 'vuex';
import Vue from 'vue';
import Products from './product/products.js';
import Cart from './cart/cart.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        product: Products,
        cart: Cart
    }
});