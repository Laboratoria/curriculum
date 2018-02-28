# Componentes presentacionales vs. Componentes contenedores

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

La forma en la que se integran `React` y `Redux`, adopta la idea de la
**separación entre componentes meramente presentacionales y componentes
contenedores**.

Con la práctica en `React`, notarás que es mucho más fácil reusar y diseñar tus
componentes si los clasificas en dos categorías. Formalmente estas categorías
son los *Componentes presentacionales* y los *Componentes contendores*, pero
también se habla de componentes *Flacos y Gordos (Fat and Skinny), Tontos y
Listos (Smart and Dumb), Stateless y Stateful, Componentes y Screens*, etc. No
todos se refieren exáctamente a lo mismo, pero la idea central es la misma.

## Componentes presentacionales

¿Qué características tiene un componente presentacional?

* Se ocupan de cómo **se ven** las cosas
* Suelen componerse usando otros componentes (presentacionales o contenedores) y
  generalmente contiene markup y estilos.
* Suelen hacer uso de la prop `children`
* No tienen dependencias con el resto de la aplicación
* No especifican cómo se obtiene la información que usan ni cómo se modifica,
  sólo la usan.
* Todo lo que saben y pueden hacer lo hacen a través de sus `props`
* Predomina el código **JSX**

## Componentes contenedores

¿Y cómo puedo reconocer a un componente contenedor?

* Se ocupan de cómo **funcionan** las cosas
* Suelen componerse usando otros componentes (presentacionales o contenedores),
  pero generalmente no contienen markup (exceptuando quizás divs para wrapping)
  y nunca nunca contienen estilos.
* Proveen la data y el comportamiento a componentes presentacionales o a otros
  contenedores.
* Usa actions de Redux para injectar callbacks a los eventos de los componentes
  presentacionales
* Son stateful al conectarse al `state` de Redux
* Y en nuestro caso, se generan usando la función `connect()` de `Redux`
* Predomina el código **JavaScript**

## Beneficios de este enfoque

* **Mejor separación de intereses (separation of concerns):** Tienes un mejor
  entendimiento de tu aplicación y tu interfaz desarrollando de esta manera.
* **Mayor reusabilidad:** Puedes reutilizar tus componentes presentacionales con
  diferentes data sources y crear así nuevos componentes que a su vez pueden ser
  reutilizados...
* **Los componentes presentacionales son la "cara" de tu aplicación.** Puedes
  extraerlos todos en una sólo pantalla, y así los diseñadores pueden modificar
  la plantilla sin alterar la lógica de tu aplicación.
* Te fuerza a extraer componetes puramente de *layout* como los Sidebar, Header
  o Footer y usar `children`, en lugar de duplicar ese markup en diferentes
  contenedores.

Es importante que recuerdes que los componentes no tienen la obligación de
retornar markup, sólo una función que siga las reglas de `React`.

## Componentes presentacionales vs. Componentes contenedores

<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col" style="text-align:left">Presentacionales (components)</th>
      <th scope="col" style="text-align:left">Contenedores (containers)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="text-align:right">Propósito</th>
      <td>Como **se ven** las cosas  (markup, estilos)</td>
      <td>Como **funcionan** las cosas (data fetching, state updates)</td>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">Saben de Redux</th>
      <td>No</th>
      <td>Si</th>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">Data sourcing</th>
      <td>props</td>
      <td>Redux state</td>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">Para modificar la data</th>
      <td>Callbacks oftenidas a través de las props</td>
      <td>Dispatch Redux actions</td>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">Definición</th>
      <td>Desarrolladas "a mano"</td>
      <td>Generadas con `react-redux`</td>
    </tr>
  </tbody>
</table>

Cuando un contenedor se vuelva muy complejo (por ejemplo si tiene muchos
componentes anidados, y recibe una gran cantidad de props para sólo traspasarlas
a sus múltiples children), introduce un nuevo container en algún punto del sub
árbol para reducir la complejidad como se explica en el
[FAQ de Redux](http://redux.js.org/docs/faq/ReactRedux.html#react-multiple-components).

***

Fuentes:

* [Documentación oficial de Redux - Usage with React](http://redux.js.org/docs/basics/UsageWithReact.html)
* [Smart and dump components - @dan_abramov en Medium](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
