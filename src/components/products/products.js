export default {
    computed: {
        products() {
            return this.$store.state.product.list
        }
    },
    methods: {
        buyProduct(id) {
            this.$store.dispatch('buyProduct', id);
        }
    }
}