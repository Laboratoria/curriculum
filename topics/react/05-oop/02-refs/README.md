# Referencias

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

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
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitamente hacemos focos en el input a través de la API de DOM
    this.textInput.focus();
  }

  render() {
    // Usamos `ref` para capturar la referencia al elemnto input del DOM
    // en un campo de esta instancia de `CustomTextInput`
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}
```

`React` se encargará de ejecutar el callback con el elemento DOM correspondiente
cuando el componente se monte, y lo reemplazará por `null` cuando se desmonte.

## Agregando una referencia a un componente `statefull`

Cuando usamos `ref` en un componente declarado con una clase, el callback recibe
como argumento la instancia montada del componente. Por ejemplo, si queremos
hacer autofocus en el componente `CustomTextInput`, podemos renderizarlo dentro
de un componente padre, que ejecute el método `CustomTextInput.focus()` cuando
se monte:

```js
class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <CustomTextInput
        ref={(input) => { this.textInput = input; }} />
    );
  }
}
```

***

**NOTA**:

Ten en cuenta que esto **solo funciona** si `CustomTextInput` está declarado
como clase.

**Nunca** deberías usar `ref` en un componente `stateless` porque **no tienen
instancias**. Si necesitas usar `ref` con un componente `stateless`, debes
convertirlo en `statefull`.
