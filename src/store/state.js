var state = {
    currencyCode: '$',
    totalCartAmount: 0,
    isLoggedIn: localStorage.getItem('user'),
    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
};

export default state;