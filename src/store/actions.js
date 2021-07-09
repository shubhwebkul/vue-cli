const addProduct = ({commit}, payload) => {
    commit('ADD_PRODUCT', payload);
};

export default {
    addProduct
};