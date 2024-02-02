// Función para cambiar entre las pestañas
function openTab(tabName) {
    // Oculta todos los contenidos de pestañas
    const tabContents = document.getElementsByClassName("tab-content");
    for (const content of tabContents) {
        content.style.display = "none";
    }

    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(tabName).style.display = "block";
}

// Manejador de clics para las pestañas "Ver" y "Editar"
document.addEventListener("DOMContentLoaded", function () {
    const tabVer = document.querySelector(".tab-ver");
    const tabEditar = document.querySelector(".tab-editar");

    // Agrega estilos y muestra la pestaña "Ver" por defecto
    tabVer.classList.add("active-tab");
    openTab("contenido-ver");

    // Agrega oyentes de clic para cambiar a la pestaña correspondiente
    tabVer.addEventListener("click", function () {
        // Para agregar estilos
        tabVer.classList.add("active-tab");
        tabEditar.classList.remove("active-tab");

        openTab("contenido-ver");
    });

    tabEditar.addEventListener("click", function () {
        // Para agregar estilos
        tabEditar.classList.add("active-tab");
        tabVer.classList.remove("active-tab");

        openTab("contenido-editar");
    });
});

// cuando se hace clic en "Ver" se ocult el contenido de editar
document.querySelector(".tab-ver").addEventListener("click", function () {
    document.getElementById("contenido-editar").style.display = "none";
});
