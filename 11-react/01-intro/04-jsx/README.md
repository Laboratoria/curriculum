# JSX

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `4min`

***

## ¿Qué es y para qué sirve?

`JSX` es una extensión al lenguage JavaScript, que agrega estructuras
sintácticas que nos permiten trabajar más fácilmente y de una manera más natural
con el código de `React`.

Gracias a `JSX,` desarrollar interfaces con componentes se vuelve tan natural
como escribir `HTML`.

## Migrando a JSX

Continuando con el ejemplo con el que empezamos esta unidad, nuestra primera
implementación del componente `Cabecera` era algo así:

```js
function Cabecera(props) {
  const titulo = 'Saludo';

  return React.DOM.div({ style: { borderColor: 'red' } },
    React.DOM.h2(null, titulo),
    React.DOM.p(null,
      "Hola ", React.DOM.b(null, props.nombre), ".", React.DOM.br(null),
      "Un link? ", React.DOM.br(null),
      React.DOM.a({ href:"http://laboratoria.la" }, "Laboratoria")
    )
  );
}

ReactDOM.render(
  Cabecera({ nombre: 'Mundo' }),
  document.getElementById('cabecera')
);
```

Con `JSX` lo expresaríamos de la siguiente manera:

```jsx
function Cabecera(props) {
  const titulo = 'Saludo';

  return (
    <div style={{ borderColor: 'red' }}>
      <h2>{titulo}</h2>
      <p>
        Hola <b>{props.nombre}</b>.<br />
        Un link? <br />
        <a href="http://laboratoria.la">Laboratoria</a>
      </p>
    </div>
  )
}

ReactDOM.render(
  <Cabecera nombre="Mundo" />,
  document.getElementById('cabecera')
);
```

Mucho más elegante, ¿verdad?

## Expresiones

Fíjate como injectamos [expresiones JavasScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)
dentro de nuestros tags, usando llaves (`{}`), en este caso `titulo`:

```jsx
const titulo = 'Saludo';

return (
  // ...
    <h2>{titulo}</h2>
  // ...
)
```

Una expresión es básicamente cualquier unidad de código que resuelva a un valor.
Todas las siguientes son expresiones válidas: `2 + 2`, `user.email`,
`formatDate(new Date())`.
