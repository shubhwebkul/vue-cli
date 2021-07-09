<template>
    <div class="add-product">
        <div class="btn-container mb-4">
            <router-link to="/products" class="btn btn-primary">Products</router-link>
        </div>
        
        <b-form @submit="onSubmit">
            <b-form-group label="Name:" label-for="input-1">
                <b-form-input v-model="form.name" placeholder="Enter product name" required></b-form-input>
            </b-form-group>

            <b-form-group label="Description:" label-for="input-2">
                <b-form-textarea v-model="form.description" placeholder="Enter product description" required></b-form-textarea>
            </b-form-group>

            <b-form-group label="Price:" label-for="input-2">
                <b-form-input type="number" v-model="form.price" placeholder="Enter product price" required></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'AddProduct',

        data: function () {
            return {
                form: {}
            }
        },

        methods: {
            ...mapActions([
                'addProduct'
            ]),

            onSubmit: function () {
                this.addProduct(this.form);

                this.$router.push({'name': 'Products'});
            }
        }
    }
</script>
