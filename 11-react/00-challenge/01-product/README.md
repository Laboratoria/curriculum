# El producto

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

## Sobre el cliente

Somos **Burguer Queen**, una cadena de comida rápida 24hrs.

## Requisitos del negocio

Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
clientes.

Tenemos 2 menús: uno para el desayuno, que es bien sencillo:

| Item                      |Precio|
|---------------------------|------|
| Cafe americano            |    5 |
| Cafe con leche            |    7 |
| Sandwich de jamón y queso |   10 |
| Jugo natural              |    7 |

Y un menú para el resto del dia:

<table width="100%">
  <tbody>
    <tr>
      <td colspan="2" rowspan="1">Hamburguesas</td>
      <td>Acompañamientos (S/.5)</td>
      <td colspan="3" rowspan="1">Bebidas</td>
    </tr>
    <tr>
      <td>Simple</td>
      <td>10</td>
      <td>Papas fritas</td>
      <td></td>
      <td>500ml</td>
      <td>750ml</td>
    </tr>
    <tr>
      <td>Doble</td>
      <td>15</td>
      <td>Onion Rings</td>
      <td>Agua</td>
      <td>5</td>
      <td>8</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>Gaseosa</td>
      <td>7</td>
      <td>10</td>
    </tr>
  </tbody>
</table>

Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
**Y por S/. 1 pueden agregarle queso o huevo.**

Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
pedido varias veces antes de finalizarlo.

## Diseño

Este diseño nos gusta porque nuestros pedidos los tomaremos desde una tablet,
pero no queremos una app nativa. Necesitamos botones grandes para escoger los
productos, y el estado actual del pedido siempre visible para poder confirmar
con el cliente su pedido.

*missing image*

## Adicionales

Una vez que tengamos el sistema básico implementado, nos gustaría explorar
nuevas posibilidades, y estamos abiertos a cualquier sugerencia que tengan.
Algunas de las ideas que nos ha sugerido nuestros clientes son: agregar combos
al menú, cupones de descuento, descuento por pago con efectivo, programa de
fidelidad, etc.

***

## Requisitos técnicos

Tu "Single page app" debe tener las siguientes características:

* Estar desarrollada íntegramente en `ES6` y empaquetada de manera automatizada
  con `babel` o `webpack`
* Utilizar `React` y `Redux`
* Con por lo menos 10 componentes que especifiquen todas sus props, 3 reducers
  no atomicos (JSON) y 3 actions
* Contar con scripts `run`, `build` y `deploy`, que se encarguen de correr,
  empaquetar y desplegar la aplicación respectivamente.
* Diseño *responsive* y *mobile*. El cliente va a usar el sistema en un
  **navegador**, pero en **tablets**.
* Despeglado en Github pages
* Haber administrado y documentado todo el proceso de creación de la aplicación
  en github.
* Al día de la demo, la aplicación deberá estar publicada en una URL accesible
  universalmente.
* No es necesario implementar rutas
* No es necesario implementar persistencia
* No es necesario implementar conexiones remotas

<!--
***

Ejemplos (inspiración):

* [todomvc](https://github.com/reactjs/redux/tree/master/examples/todomvc)
* [tetris](https://github.com/slugo/redux-tetris)
* [pokedex](https://github.com/davidchang/redux-pokedex)
* [solitario 1](https://github.com/gcedo/react-solitaire)
* [solitario 2](https://github.com/pl12133/react-solitaire)
-->
