// incrementar y decrementar.js
import { generateCartHTML } from "./carrito de compras.js";


export function attachQuantityHandlers() {
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    const decreaseButtons = document.querySelectorAll('.quantity-decrease');
    const increaseButtons = document.querySelectorAll('.quantity-increase');
    const quantityInputs = document.querySelectorAll('.quantity-input');

    decreaseButtons.forEach((button, index) => {
        // Eliminar todos los controladores de eventos existentes, es decir que si hay un evento anterior lo elimina ara que no se repitan
        let newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    
        // Adjuntar el nuevo controlador de eventos
        newButton.addEventListener('click', function() {
            let quantity = parseInt(quantityInputs[index].textContent);
            if (quantity > 1) {
                quantityInputs[index].textContent = quantity - 1;
            }
        });
    });
    
    increaseButtons.forEach((button, index) => {
        // Eliminar todos los controladores de eventos existentes
        let newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    
        // Adjuntar el nuevo controlador de eventos
        newButton.addEventListener('click', function() {
            let quantity = parseInt(quantityInputs[index].textContent,10);
            quantityInputs[index].textContent = quantity + 1;
        });
    });

    
    //? 1. Eliminar el producto del carrito, por  lo que solo se deberia guardar un mismo producto una vez

    removeButtons.forEach((button, index) => {
        // Eliminar todos los controladores de eventos existentes
        let newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
    
        // Adjuntar el nuevo controlador de eventos
        newButton.addEventListener('click', function() {
            // Eliminar el producto del carrito
            let index = cart.findIndex(item => item.id === product.id);
            if (index !== -1) {
                cart.splice(index, 1);
            }
        
            // Actualizar el localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        
            // Actualizar el carrito de compras
            generateCartHTML(cart);
        });
    });
}

/* Documentación

En el código proporcionado, button e index son parámetros de la función de callback que se pasa a forEach.

forEach es un método de los arrays en JavaScript que ejecuta una función proporcionada una vez por cada elemento del array, en orden.

Los parámetros de la función de callback son:

button: El elemento actual que se está procesando en el array. En este caso, es el botón de incremento o decremento actual que se está procesando.

index: El índice del elemento actual que se está procesando en el array. En este caso, es el índice del botón de incremento o decremento actual que se está procesando.


*/