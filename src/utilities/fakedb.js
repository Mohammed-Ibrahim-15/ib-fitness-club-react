// use local storage to manage cart data
const addToDb = id => {

    let shoppingCart = {};
    shoppingCart[id] = id;
    localStorage.setItem('break-time', JSON.stringify(shoppingCart));
}
const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('break-time');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
export {
    addToDb,
    getStoredCart
}