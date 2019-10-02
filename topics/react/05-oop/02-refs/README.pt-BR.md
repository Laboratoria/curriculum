# Referencias

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

En el flujo estándar de `React`, las `props` son la única forma que tienen los
componentes padre, de interactuar con sus `children`. Si quieres modificar un
nodo hijo, lo re-renderizas con nuevas `props` y listo.

Sin embargo, hay ciertas situaciones en las que necesitas poder modificar un
nodo hijo de manera imperativa. El nodo a modificar puede ser tanto una
instancia de un componente definido como clase, como un elemento del DOM.

## Cuándo usar referencias?

Hay un par de casos de uso válidos para usar refs:

* Manejar el foco, la selección de texto, o la reproducción de contenido
  multimedia.
* Disparar animaciones imperativas.
* Integrarnos con librerías externas.

> NOTA:
>
> Evita usar refs para cualquier cosa que puedas hacer de manera declarativa.
>
> Por ejemplo, si tienes un componente `Dialogo` en lugar de exponer métodos
> `abrir()` y `cerrar()`, pásale una `prop` booleana `abierto`.

## Agregar una referencia a un elemento del DOM

`React` soporta un atributo especial que puede ser asignado a cualquier
componente implementado como clase: `ref`. El atributo `ref` recibe una función
callback, la cual se ejecutará inmediatamente después de que el componente se
monte o desmonte.

Cuando el atributo `ref` es usado en un elemento HTML, la función callback
recibe el elemento DOM como argumento:

```js
const CustomTextInput = () => {
  // Usamos `ref` para capturar la referencia al elemnto input del DOM
  // y asi poder utilizarlo luego
  let textInput
  return (
    <div>
      <input
        type="text"
        ref={(input) => { textInput = input; }} />
      <input
        type="button"
        value="Focus the text input"
        onClick={() => {
          if (textInput) {
            textInput.focus();
          }
        }}
      />
    </div>
  );
};
```
