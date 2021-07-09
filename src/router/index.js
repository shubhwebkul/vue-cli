import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Products from '../components/Products.vue';
import AddProduct from '../components/AddProduct.vue';

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/add-product',
        name: 'AddProduct',
        component: AddProduct,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
        meta: {
            requiresAuth: true
        }
    },
];

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('user') == null) {
            next({name: 'Login'});
        } else {
            next();
        }
    }

    next();
})

Vue.use(VueRouter)

export default router;
