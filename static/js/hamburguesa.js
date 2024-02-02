function toggleSideNav() {
    const sideNav = document.querySelector('.side-nav');
    sideNav.classList.toggle('open');

    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('open');

}



/* . Cuando haces clic en el botón de hamburguesa,
 se añade o quita la clase open en la barra lateral (side-nav).  */
