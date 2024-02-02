# Diseño Frontend para Cierre de Sesión en Farmacia Medigood

La página web de Farmacia Medigood está diseñada para permitir a los usuarios cerrar sesión de manera segura. Aquí se detalla cómo se refleja el requisito del sistema (ID RF-04) en el diseño frontend:

## Barra de Navegación Superior
- La barra superior muestra el nombre del usuario autenticado ("Andres Briñez") y el logo de la plataforma.

## Barra de Navegación Lateral
- La barra lateral de navegación presenta opciones como "Pedidos", "Compras", "Perfil", "Usuarios" y "Cerrar sesión".
- Al hacer clic en "Cerrar sesión", se muestra una ventana emergente de confirmación.

## Contenido Principal del Dashboard
- El contenido principal muestra un título de "Cerrar sesión".

## Ventana Emergente de Confirmación
- Al hacer clic en "Cerrar sesión", se muestra una ventana emergente que solicita la confirmación del usuario.
- La ventana tiene dos botones, "Aceptar" y "Cancelar".
- Si el usuario hace clic en "Aceptar", se ejecuta la función `logout()` que cierra la sesión y redirige a la página de inicio de sesión, mostrando el mensaje "Sesión cerrada".
- Si el usuario hace clic en "Cancelar", la ventana emergente se cierra sin realizar ninguna acción.

## Footer
- El footer incluye el año de copyright y el nombre de la empresa para mantener la coherencia en la marca.

## Script Adicional
- Se incluye un script (`logout.js`) que gestiona las funciones para mostrar y ocultar la ventana emergente de confirmación y realizar el cierre de sesión.

**Funcionalidad:**
- Los usuarios pueden cerrar sesión de manera segura.
- Se solicita la confirmación del usuario antes de cerrar la sesión para evitar cierres accidentales.
- Se proporciona un mensaje de "Sesión cerrada" después de cerrar sesión con éxito.

**Nota:**
- El diseño frontend cumple con el requisito RF-04 al ofrecer una opción clara y segura para que los usuarios cierren sesión en la plataforma Farmacia Medigood.