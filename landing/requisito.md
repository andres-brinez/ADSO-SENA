## Cumplimiento de Requisitos Funcionales RF-06 y RF-07 en la Interfaz de Medigood

### RF-06: Landing Page

**Descripción del Requisito:**
El sistema debe tener una sección (página principal) donde se puedan ver todos los productos disponibles y los servicios que se ofrecen, además de información de la empresa como el logo, teléfono de contacto, correo electrónico, dirección y una barra de navegación.

**Propósito:**
Convertir a los visitantes en clientes proporcionando información de la empresa atractiva que les permita conocer los productos ofrecidos y generar motivación para realizar compras.

#### Cumplimiento en la Interfaz:

1. **Encabezado:**
   - El logo de Medigood y la información sobre la entrega de productos se presentan en la parte superior del encabezado, proporcionando una identidad visual clara.
   - Se incluye un área con información de contacto, mostrando el número de teléfono, número de WhatsApp y horarios de atención, estableciendo una comunicación directa con los usuarios.

2. **Barra de Navegación:**
   - La barra de navegación facilita el acceso a diferentes secciones del sitio, permitiendo a los usuarios explorar productos y servicios de manera intuitiva.

3. **Banner Principal:**
   - Se presenta un banner atractivo que destaca productos y servicios principales, capturando la atención de los visitantes.

4. **Descuentos, Categorías, Recomendados, Marcas:**
   - Secciones específicas como Descuentos, Categorías, Recomendados, y Marcas se presentan de manera clara y visualmente atractiva, brindando a los usuarios opciones para explorar productos según sus intereses.

5. **Equipo y Footer:**
   - Información sobre el equipo de Medigood y datos adicionales se incluyen en secciones específicas, personalizando la experiencia del usuario y proporcionando información clave.

6. **Funcionalidades Destacadas:**
   - Una barra de búsqueda y el carrito de compras facilitan a los usuarios encontrar productos y gestionar sus compras.

7. **Inicio de Sesión:**
   - Aunque no se menciona explícitamente en la descripción del requisito, se incluye un enlace para iniciar sesión, indicando que la interfaz proporciona opciones para que los usuarios autenticados accedan a funcionalidades específicas.

### RF-07: Vista Previa de Productos

**Descripción del Requisito:**
Mostrar una vista previa de los productos en la landing page en forma de tarjeta, incluyendo imagen, nombre, precio y cantidad disponible.

**Propósito:**
Ayudar a los usuarios a explorar rápidamente los productos disponibles.

#### Cumplimiento en la Interfaz:

1. **Vista Previa de Productos:**
   - En la sección de "Recomendados para ti", se presentan productos en tarjetas individuales.
   - Cada tarjeta incluye una imagen del producto, el nombre del producto, el precio y un botón de "Añadir al carrito".

2. **Cantidad Disponible y Paginación:**
   - Junto al precio, se muestra la cantidad disponible del producto.
   - Aunque no se visualiza directamente en el ejemplo proporcionado, la implementación real podría incluir botones de paginación para una navegación más eficiente.

3. **Enlace a Detalles:**
   - Cada tarjeta incluye un enlace que redirige a la página de detalle correspondiente al producto, permitiendo a los usuarios obtener más información y realizar compras.

**Ejemplo de Implementación:**
```markdown
### Recomendados para ti

#### Producto 1
![Producto 1](../static/img/image-tech-image-23.png)
- **Nombre del Producto:** Nombre Ejemplo
- **Precio:** $10.00
- **Cantidad Disponible:** 15 unidades
- [Añadir al carrito](ruta/a/la/pagina/del/detalle/del/producto)

#### Producto 2
![Producto 2](https://upload.wikimedia.org/wikipedia/commons/7/7a/Ritalin-SR-20mg-full.jpg)
- **Nombre del Producto:** Otro Ejemplo
- **Precio:** $12.00
- **Cantidad Disponible:** 20 unidades
- [Añadir al carrito](ruta/a/la/pagina/del/detalle/del/producto)
```

**Conclusión:**
La interfaz de Medigood cumple con los requisitos funcionales RF-06 y RF-07 al proporcionar una Landing Page atractiva y funcional, que presenta información clave de la empresa, productos destacados y una vista previa visual de productos, facilitando así la exploración y toma de decisiones de los usuarios.