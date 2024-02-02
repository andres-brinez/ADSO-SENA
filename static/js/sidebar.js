// Se encarga del funcionamientode la barra lateral que es el carrito de compra
const sidebar = document.getElementById('sidebar');

const overlay = document.getElementById('overlay'); // Agrega el overlay
const closeSidebarIcon = document.getElementById('close-sidebar');


// Cierra el sidebar
export  function closeSidebar() {

    closeSidebarIcon.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Abre el sidebar
export function openSidebar() {
    sidebar.classList.add('open');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}