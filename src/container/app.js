import Title from '../components/title/Title.vue';
import Products from '../components/products/Products.vue';

export default {
    components: {
        Title,
        Products
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    methods: {
    }
}