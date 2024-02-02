# Implementación del Requisito RF-11: Historial de Ventas

El requisito RF-11, que se centra en la visualización del historial de ventas por parte del administrador en la plataforma **MediGood**, ha sido implementado con éxito. A continuación, se describe cómo se cumple este requisito en la interfaz utilizando el formato Markdown:

## Interfaz de Historial de Ventas

1. **Acceso a la Opción de Historial de Ventas:**
   - El administrador puede acceder al historial de ventas seleccionando la opción "Pedidos - Ventas" desde la barra de navegación lateral.
   - Código HTML asociado:

     ```html
     <li><a href="#"><i class="fas fa-shopping-cart"></i> Pedidos - Ventas</a></li>
     ```

2. **Barra de Búsqueda:**
   - Se proporciona una barra de búsqueda que permite al administrador filtrar las ventas por número.
   - Código HTML asociado:

     ```html
     <!-- Barra de búsqueda -->
     <div class="search-bar">
         <input type="text" placeholder="Buscar por número ">
         <button class="search-button">
             <img src="../../static/img/lupa.png" alt="">
         </button>
     </div>
     ```

3. **Tabla de Resumen de Ventas:**
   - Se muestra una tabla que resume las ventas realizadas, con columnas para ID, fecha, cliente, estado y total.
   - Cada fila representa una venta con detalles específicos.
   - Código HTML asociado:

     ```html
     <!-- Tabla de resumen de pedidos -->
     <table class="table">
         <thead>
             <tr>
                 <th></th>
                 <th>ID</th>
                 <th>Fecha</th>
                 <th>Cliente</th>
                 <th>Estado</th>
                 <th>Total</th>
             </tr>
         </thead>
         <tbody>
             <!-- Datos de ejemplo -->
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>1</td>
                 <td>12/10/2024</td>
                 <td>Andres Briñez</td>
                 <td>Enviado</td>
                 <td>$ 100.000</td>
             </tr>
             <!-- Repite este bloque para cada venta y completa con tus datos -->
             <!-- ... -->
         </tbody>
     </table>
     ```

4. **Paginación de la Tabla:**
   - La tabla incluye opciones de paginación para facilitar la navegación a través de las ventas.
   - Código HTML asociado:

     ```html
     <!-- Paginación de la tabla -->
     <div class="pagination">
         <div class="pagination-options">
             <button>Anterior</button>
             <span>1</span>
             <span>2</span>
             <span>3</span>
             <span>4</span>
             <span>...</span>
             <button>Siguiente</button>
         </div>
         <button class="show-all-button">Mostrar Todos</button>
     </div>
     ```

Esta implementación proporciona al administrador una herramienta eficiente para visualizar y analizar el historial de ventas de manera ordenada y detallada, cumpliendo con la prioridad alta establecida para el requisito RF-11. La interfaz es fácil de leer y entender, mejorando la experiencia del usuario.