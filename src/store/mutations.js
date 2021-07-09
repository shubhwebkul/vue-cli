const ADD_PRODUCT = (state, payload) => {
    state.products.push(payload);

    localStorage.setItem('products', JSON.stringify(state.products));
};

export default {
    ADD_PRODUCT
};