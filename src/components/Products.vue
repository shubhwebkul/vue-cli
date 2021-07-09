<template>
    <div class="products">
        <div class="btn-container mb-4">
            <b-form-input v-model="searchKeyword" placeholder="Search" class="search" @keydown="searchProducts"></b-form-input>

            <router-link to="/add-product" class="btn btn-primary">Add Products</router-link>

            <b-button href="#" variant="primary">{{ currencyCode }}{{ totalCartAmount }}</b-button>
        </div>

        <div class="product-cards">
            <b-card
                :key="key"
                :title="product.name"
                style="max-width: 20rem;"
                v-for="(product, key) in products"
                :class="`mb-2 ${showActive && key + 1 == products.length ? 'recent' : ''}`"
            >
                <b-card-text v-text="product.description"></b-card-text>

                <b-card-text v-text="`${currencyCode}${product.price}`"></b-card-text>

                <b-button href="#" variant="primary" @click="addProduct(product)">Add to cart</b-button>
            </b-card>

            <span v-if="products.length == 0">No Products available</span>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Products',

        data: function () {
            return {
                debounce: null,
                showActive: true,
                searchKeyword: '',
                products : this.$store.state.products,
            }
        },

        computed: {
            ...mapState({
                currencyCode : state => state.currencyCode,
                totalCartAmount : state => state.totalCartAmount,
            }),
        },

        methods: {
            addProduct: function (product) {
                this.$store.state.totalCartAmount += +product.price;
            },

            searchProducts: function () {
                clearTimeout(this.debounce);

                this.debounce = setTimeout(() => {
                    this.showActive = false;

                    if (this.searchKeyword == '') {
                        this.showActive = true;
                    }
                    
                    this.products = this.$store.state.products.filter(product => {
                        return product.name.toLowerCase().includes(this.searchKeyword)
                            || product.description.toLowerCase().includes(this.searchKeyword)
                    });
                }, 1000);
            }
        }
    }
</script>
