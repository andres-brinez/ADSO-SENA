export function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function getCartData() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

