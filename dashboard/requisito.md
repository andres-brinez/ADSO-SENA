# Control de Acceso en Farmacia Medigood

El sistema de Farmacia Medigood implementa un control de acceso para garantizar la seguridad y la correcta asignación de funcionalidades a los usuarios. Aquí se describe cómo se cumple el requisito del sistema (ID RF-05):

## Acceso al Dashboard
- **Precondición:** Solo los usuarios logeados pueden acceder al dashboard.
- **Proceso:** Al intentar acceder al dashboard, el sistema verifica la autenticación del usuario y valida su Rol consultando la base de datos.
- **Salida:** Si la autenticación y validación son exitosas, se permite el acceso al dashboard, donde los usuarios podrán ver información personalizada según su Rol (por ejemplo, pedidos, compras, etc.).
- **Notas:** Si un usuario intenta acceder al dashboard sin iniciar sesión, se le redirige a la página de inicio de sesión. En caso de que un usuario logeado no tenga permisos suficientes, se muestra un mensaje indicando que no tiene acceso a esas funcionalidades.

## Acceso para Comprar Productos
- **Precondición:** Solo los usuarios logeados pueden comprar productos.
- **Proceso:** Al intentar realizar una compra, el sistema verifica la autenticación del usuario y valida su Rol consultando la base de datos.
- **Salida:** Si la autenticación y validación son exitosas, se permite al usuario realizar compras y acceder a la funcionalidad de compra de productos.
- **Notas:** Si un usuario no logeado intenta comprar un producto, se le redirige a la página de inicio de sesión antes de permitirle continuar con la compra.

**Funcionalidad:**
- El sistema asegura que solo los usuarios logeados y autorizados accedan a ciertas áreas y funcionalidades.
- Se muestra un mensaje claro en caso de intento de acceso no autorizado, redirigiendo a los usuarios a las páginas correspondientes para autenticación o notificación de falta de permisos.

**Nota:**
- Este control de acceso contribuye a la seguridad y privacidad, garantizando que las funcionalidades estén disponibles solo para usuarios autorizados, cumpliendo así con el requisito RF-05.