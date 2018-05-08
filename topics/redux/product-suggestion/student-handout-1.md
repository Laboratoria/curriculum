# Reto 1

## Sobre el cliente

Somos **Rapidito**, una empresa que ofrece medios de pagos para ecommerce.

## Requisitos del negocio

Además de ofrecer nuestros servicios de pagos queremos ofrecer plataformas que
ya tengan nuestro core business integrado. Para esto queremos partir creando un
ecommerce básico en el que nuestros cliente puedan ofrecer sus productos y
utilizar nuestro portal de pago in-app.

La aplicación debe permitir:

- Admin
  * Agregar productos
  * Eliminar productos
  * Editar productos

- Cliente
  * Ver productos
  * Buscar productos

Los administradores deben poder crear/agregar nuevos productos con sus
respectivos de talles (ver Especificaciones de los productos), además de poder
eliminar y editar productos. En cuanto a los clientes estos pueden
seleccionar/agregar productos a un carro de compras y además poder buscar por
nombre de productos. (puntos extras si los ordenan según algún criterio).

## Diseño

Se deben desplegar los productos en una página simple, donde ésta tenga un
buscador, los resultados de las búsquedas deben actualizar la tabla o vista
donde están desplegados los productos. Se debe poder ver el estado de su compra,
para simplificar las cosas solo desplegar los productos que estén agregados en
el carro.

Para el admin, esto debe ser una interfaz simple, estilo formulario donde se
completen las características de cada producto, y una pantalla donde estén
listados de forma simple todos los productos ingresados, con la posibilidad de
eliminarlos o editarlos.

## Aspectos obligatorios

- Se debe utilizar *redux* para el manejo de los datos internos del proyecto,
  llego a oidos que es una tecnología muy buena y fácil de utilizar.
- Se debe utilizar `create-react-app` para crear la aplicación.

## Adicionales

Una vez que tengamos el sistema básico implementado, nos gustaría explorar
nuevas posibilidades, y estamos abiertos a cualquier sugerencia que
tengan.
