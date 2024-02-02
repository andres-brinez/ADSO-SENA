import { attachQuantityHandlers } from "./events.js";
import { closeSidebar } from "./sidebar.js";

let cart = JSON.parse(localStorage.getItem('cart')) || [];

window.onload = function () {


    // Actualizar el span de basket-container con el número de productos en el carrito
    let basketContainer = document.querySelector('.basket-container span');
    basketContainer.textContent = cart.length;

    // Añadir los event listeners a los botones de incrementar y decrementar
    attachQuantityHandlers();


    closeSidebar();


}