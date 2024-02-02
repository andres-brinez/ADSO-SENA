// import { addToCart } from "./localStorage";

import { attachQuantityHandlers } from "./events.js";
import { addToCart } from "./storageLocal.js";
import { getCartData } from "./storageLocal.js";
import { openSidebar } from "./sidebar.js";

const buttonCesta = document.getElementsByClassName('nav-item')[0];
let addToCartButtons = document.querySelectorAll('.cart-button');


// Agregar evento click al texto de "Mi cesta " para abrir el sidebar y mostrar los productos agregados al carrito
buttonCesta.addEventListener('click', function (event) {
    // Trae los productos del carrito
    let cart = getCartData();

    // Abre el sidebar después de agregar el producto al carrito
    openSidebar();

    // Actualiza el HTML del sidebar con los productos del carrito
    generateCartHTML(cart);


});

addToCartButtons.forEach(button => {
    button.addEventListener('click', function (event) {

        // closest  devuelve el ancestro más cercano al elemento actual (o el elemento actual) que en este caso tiene la información del producto .
        let productContainer = this.closest('.product') || this.closest('.product-detail');

        let productId = productContainer.querySelector('.product-id').textContent;
        let productImage = productContainer.querySelector('img').src;
        let productTitle = productContainer.querySelector('h1, h3').textContent;
        let productPrice = productContainer.querySelector('.product-price').textContent;
        let productQuantity = productContainer.querySelector('.quantity-input') ? productContainer.querySelector('.quantity-input').textContent : 1;

        let product = {
            id: productId,
            image: productImage,
            title: productTitle,
            price: productPrice,
            quantity: productQuantity
        };


        // Agrega el producto al carrito
        addToCart(product);

        // Trae los productos del carrito
        let cart = getCartData();

        // Abre el sidebar después de agregar el producto al carrito
        openSidebar();

        // Actualiza el HTML del sidebar con los productos del carrito
        generateCartHTML(cart);


    });


});

// Seria bueno guardar esta funcion en otro archivo que se encargue solo del localstorage

function createElement(type, classes = [], content = '') {
    let element = document.createElement(type);
    classes.forEach(className => element.classList.add(className));
    element.innerHTML = content;
    return element;
}

export function generateCartHTML(cart) {

    let cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = ''; // Limpiar el contenedor del carrito

    cart.forEach(product => {
        // Crear los elementos del DOM para el producto
        let productElement = createElement('div', ['cart-item']);

        let removeButton = createElement('button', ['cart-item-remove'], `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m6 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                </svg>`);

        let imageContainerElement = createElement('div', ['cart-item-image-container']);

        let imageElement = createElement('img', ['cart-item-image'], '');
        imageElement.src = product.image;
        imageElement.alt = 'Producto';

        imageContainerElement.appendChild(imageElement);

        let infoElement = createElement('div', ['cart-item-info']);

        let titleElement = createElement('p', ['cart-item-title'], product.title);

        let priceElement = createElement('p', ['cart-item-price'], product.price);

        let quantityElement = createElement('div', ['cart-item-quantity']);

        let decreaseButton = createElement('button', ['quantity-decrease'], '-');

        let quantityInput = createElement('p', ['quantity-input'], product.quantity);

        let increaseButton = createElement('button', ['quantity-increase'], '+');

        quantityElement.appendChild(decreaseButton);
        quantityElement.appendChild(quantityInput);
        quantityElement.appendChild(increaseButton);

        infoElement.appendChild(titleElement);
        infoElement.appendChild(priceElement);
        infoElement.appendChild(quantityElement);

        productElement.appendChild(removeButton);
        productElement.appendChild(imageContainerElement);
        productElement.appendChild(infoElement);

        // Añadir el contenedor del producto al contenedor del carrito
        cartContainer.appendChild(productElement);


        // Llama a attachQuantityHandlers después de que los productos se hayan añadido al carrito
        attachQuantityHandlers();

        //Se agrega el evento click al boton de eliminar
        attachQuantityHandlers();

    });

    // Actualizar el span de basket-container con el número de productos en el carrito
    let basketContainer = document.querySelector('.basket-container span');
    basketContainer.textContent = cart.length;
}