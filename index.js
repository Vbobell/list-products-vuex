import Vue from 'vue';
import App from './src/container/App.vue';
import store from './src/store/store';

Vue.config.productionTip = false;

new Vue({
    store,
    el: '#app',
    render: h => h(App)
});