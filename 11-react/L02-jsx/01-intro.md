# `JSX`

## ¿Qué es y para qué sirve?

`JSX` es una extensión al lenguage JavaScript, que agrega estructuras
sintácticas que nos permiten trabajar más fácilmente y de una manera más natural
con el código de `React`.

Gracias a `JSX,` desarrollar interfaces con componentes se vuelve tan natural
como escribir `HTML`.

## Migrando a JSX

Por ejemplo, si tomamos el siguiente código de la lección anterior:

```javascript
function Cabecera(props) {
  const titulo = 'Saludo';

  return React.DOM.div({ style: { borderColor: 'red' } },
    React.DOM.h2(null, titulo),
    React.DOM.p(null,
      "Hola ", React.DOM.b(null, props.saludo), ".", React.DOM.br(null),
      "Un link? ", React.DOM.br(null),
      React.DOM.a({ href:"http://laboratoria.la" }, "Laboratoria"), "!"
    )
  )
}

ReactDOM.render(
  Cabecera({ nombre: 'Mundo' }),
  document.getElementById('cabecera')
);
```

Con `JSX` lo expresaríamos de la siguiente manera:

```javascript
function Cabecera(props) {
  const titulo = 'Saludo';

  return (
    <div style={{ borderColor: 'red' }}>
      <h2>{titulo}</h2>
      <p>
        Hola <b>{props.saludo}</b>. <br />
        Un link? <br />
        <a href="http://laboratoria.la">Laboratoria</a>
      </p>
    </div>
  )
}

ReactDOM.render(
  <Cabecera nombre="Mundo" />
  document.getElementById('cabecera')
);
```

Mucho más elegante, ¿verdad?

## Expresiones

Fíjate como injectamos [expresiones `javascript`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) dentro de nuestros tags, usando llaves (`{}`), en este caso `titulo`
```javascript
const titulo = 'Saludo';

return (
  // ...
    <h2>{titulo}</h2>
  // ...
)
```

Todas las siguientes son expresiones válidas: `2 + 2`, `user.email`, `formatDate(new Date())`

## Renderizado condicional


¡Ahora vamos a usarlo!

## Ejercicio: Migrar a `JSX`

Nuestro primer paso será configurar nuestra página, para que comience a entender
`JSX`. Hay varias formas de hacer esto, pero nosotros lo que haremos es incluir
una dependencia a un script de `babel`, que entre otras cosas entiende `JSX` y
crearemos nuestro `script`, con una anotación especial, para que `babel`
entienda que es su responsabilidad procesarlo.

Entoces, necesitamos agregar la siguiente dependencia

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
```

Y anotar nuestro tag `script`, como type `text/babel`

```html
<script type="text/babel">
  // aqui el codigo de tus componentes
</script>
```

Si refrescas tu página, nada debería haber cambiado, ya que todo el código ES5
es compatible con ES6.

Terminada la configuración, ahora nuestra tarea será deshacernos de todas las
referencias a `React.DOM` y las llamadas directas a nuestros componentes,
reemplazando todas ellas por código `JSX`.

Entonces, por ejemplo, el siguiente código

```javascript
function Header(props) {
  return DOM.header(null,
    DOM.h1(null, props.titulo),
    DOM.p(null, props.descripcion)
  )
}
```

se convierte en

```javascript
function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.descripcion}</p>
    </header>
  )
}
```

y

```javascript
const articles = props.articles.map(function(it) {
  return Article(it)
})
```

se convierte en

```javascript
const children = props.articles.map(function(a) {
  return <Article titulo={a.titulo} descripcion={a.descripcion} />
})
```
