export default {
    props: {
        parentData: Object
    },
    methods: {
        buyProduct(id) {
            this.$store.dispatch('buyProduct', id);
        }
    }
}