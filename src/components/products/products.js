export default {
    computed: {
        products() {
            return this.$store.state.product.list
        }
    },
    methods: {
        addToCart(id) {
            this.$store.dispatch('addToCart', id);
        }
    }
}