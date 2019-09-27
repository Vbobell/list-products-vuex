export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    methods: {
        buyProduct(id) {
            this.$store.dispatch('buyProduct', id);
        }
    }
}