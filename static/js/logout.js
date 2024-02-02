function showLogoutConfirmation() {
    var confirmationModal = document.getElementById("logoutConfirmation");
    confirmationModal.style.display = "block";
}

function hideLogoutConfirmation() {
    var confirmationModal = document.getElementById("logoutConfirmation");
    confirmationModal.style.display = "none";
}

function logout() {
    // Se puede agregar más logica 
    window.location.href = "../../landing/landing.html";
}
