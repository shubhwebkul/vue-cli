<template>
    <div class="login-page">
        <b-form @submit="onSubmit">
            <b-form-group label="Email:" label-for="input-1">
                <b-form-input v-model="form.email" placeholder="Enter email" required></b-form-input>
            </b-form-group>

            <b-form-group label="Password:" label-for="input-2">
                <b-form-input type="password" v-model="form.password" placeholder="Enter password" required></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'Login',

        data: function () {
            return {
                form: {}
            }
        },

        computed: {
            ...mapState({
                isLoggedIn : state => state.isLoggedIn,
            }),
        },

        beforeMount: function () {
            if (this.isLoggedIn) {
                this.$router.push({name: 'AddProduct'});
            }
        },

        methods: {
            onSubmit: function () {
                if (this.form.email == 'admin@example.com' && this.form.password == 'admin123') {
                    this.$store.state.isLoggedIn = true;

                    localStorage.setItem('user', 1);

                    this.$router.push({name: 'AddProduct'});
                } else {
                    this.$bvToast.toast('Wrong Credentials', {
                        title   : 'Error!',
                        variant : 'danger',
                    });
                }
            }
        }
    }
</script>
