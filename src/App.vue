<template>
    <div id="app">
        <b-button v-if="isLoggedIn" type="submit" class="logout" variant="primary" @click="logout">Logout</b-button>

        <router-view/>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    
    export default {
        name: 'App',

        computed: {
            ...mapState({
                isLoggedIn : state => state.isLoggedIn,
            }),
        },

        methods: {
            logout: function () {
                this.$store.state.isLoggedIn = false;

                localStorage.removeItem('user');

                this.$router.push({'name': 'Login'});
            }
        }
    }
</script>

<style>
    body {
        display: grid;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('/background.jpg');
    }

    #app {
        padding: 20px;
        border-radius: 5px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .logout {
        top: 10px;
        right: 10px;
        position: absolute;
    }

    .toast {
        opacity: 1 !important;
    }

    .toast .close {
        display: none;
    }

    .btn-container {
        width: 100%;
        text-align: right;
    }

    .products .btn-container {
        display: grid;
        grid-gap: 20px;
        align-items: center;
        grid-template-columns: auto auto auto;
    }

    .products .btn-container a:first-child {
        margin-right: 20px;
    }

    .product-cards {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(4, auto);
    }

    .product-cards .card {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .product-cards .card.recent {
        background-color: #f7efef;
    }

    .form-group {
        margin-bottom: 1rem;
    }
</style>