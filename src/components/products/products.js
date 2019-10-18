export default {
    computed: {
        products() {
            return this.$store.state.product.list
        }
    },
    methods: {
        addToCart(id) {
            this.$store.dispatch('addToCart', id);
            this.$store.dispatch('decrementProduct', id);
        }
    },
    mounted() {
        const products = [{
            'id': 1,
            'name': 'TV',
            'amount': 4
        }, {
            'id': 2,
            'name': 'Computer',
            'amount': 2
        }];

        setTimeout(() => {
            this.$store.dispatch('setProducts', products);
        }, 2000);
    }
}