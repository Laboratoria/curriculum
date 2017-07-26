# `JSX`

## ¿Qué es y para qué sirve?

`JSX` es una extensión al lenguage JavaScript, para agregar estructuras sintácticas que nos permitan trabajar mas facilmente y de una manera más natural con el código de `React`.

Gracias a `JSX,` desarrollar interfaces con componentes se vuelve tan natural como escribir `HTML`.

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

Muchos mas elegante, ¿verdad?

¡Ahora vamos a usarlo!


## Migrando a `JSX`

Para comenzar con esta serie de lecturas / ejercicios, vamos a usar como insumo el resultado del ejercicio de la lección anterior.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React: Getting Started</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="react-container">
      <p>
        Si ves esto React <strong>no</strong> está funcionando.
      </p>
    </div>
    <script src="https://unpkg.com/react@15/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
    <script>
      const DOM = React.DOM
      
      // HEADER
      function Header(props) {
        return DOM.header(null,
          DOM.h1(null, props.titulo),
          DOM.p(null, props.descripcion)
        )
      }
      
      // MAIN SECTION
      function Article(props) {
        return DOM.article(null,
          DOM.h3(null, props.titulo),
          DOM.p(null, props.descripcion),
          DOM.hr(null)
        )
      }
      
      function MainSection(props) {
        const style = {
          width: '70%',
          float: 'left'
        }

        const articles = props.articles.map(function(it) {
          return Article(it)
        })

        return DOM.section({ style: style },
          DOM.h2(null, props.titulo),
          articles
        )
      }
      
      // ASIDE
      function AsideLink(props) {
        return DOM.li(null,
          DOM.a({ href: props.href }, props.texto)
        )
      }
      
      function Aside(props) {
        const style = {
          width: '25%',
          float: 'right'
        }

        const links = props.links.map(function(it) {
          return AsideLink(it)
        })

        return DOM.section({ style: style },
          DOM.h4(null, props.titulo),
          DOM.ul(null, links)
        )
      }
      
      // Integramos todo en un PAGE
      function Page(props) {
        return DOM.div(null,
          Header({
            titulo: props.headerTitulo,
            descripcion: props.headerDescripcion
          }),
          MainSection({
            titulo: props.mainSectionTitulo,
            articles: props.mainSectionArticles
          }),
          Aside({
            titulo: props.asideTitulo,
            links: props.asideLinks
          })
        )
      }
      
      const page = Page({
        headerTitulo: 'Getting Started',
        headerDescripcion: 'Descripcion',
        mainSectionTitulo: 'Main Section',
        mainSectionArticles: [
          { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
          { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
          { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
        ],
        asideTitulo: 'Links',
        asideLinks: [
          { href: '#', texto: 'Link 1'},
          { href: '#', texto: 'Link 2'},
          { href: '#', texto: 'Link 3'},
          { href: '#', texto: 'Link 4'},
          { href: '#', texto: 'Link 5'}
        ]
      })
      
      ReactDOM.render(
        page,
        document.getElementById('react-container')
      );
    </script>
  </body>
</html>
```

Nuestro primer paso será configurar nuestra página, para que comience a entender `JSX`. Hay varias formas de hacer esto, pero nosotros lo que haremos es incluir una dependencia a un script de `babel`, que entre otras cosas entiende `JSX` y crearemos nuestro `script`, con una anotación especial, para que babel entienda que es su menester procesarlo.

Entoces, necesitamos agregar la siguiente dependencia
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
```

Y anotar nuestro type `script`, como tipo `babel`
```html
<script type="text/babel">
  // aqui el codigo de tus componentes
</script>
```

Si refrescas tu página, nada debería haber cambiado, ya que todo el código ES5 es compatible con ES6.

Terminada la configuración, ahora nuestra tarea será deshacernos de todas las referencias a `React.DOM` y las llamadas directas a nuestros componentes, reemplazando todas ellas por código `JSX`.

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

> Para entender más a detalle las posibilidades de `JSX` por favor tómate 5 minutos para revisar la [documentación de `React`](https://facebook.github.io/react/docs/introducing-jsx.html) sobre el tema.

## Ejercicio

Continua con la conversión de todos tus componentes a `JSX`.

> En la próxima lectura veremos algunas características de ES6 que, sumadas a `JSX`, nos permitirán desarrollar nuestra aplicaciones, de una manera mucho mas "natural".
