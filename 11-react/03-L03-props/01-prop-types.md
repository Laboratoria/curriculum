# `PropTypes`

## Intro
En la lección anterior vimos como, a través de los beneficios de `ES6`, podíamos definir de una manera descriptiva, los nombres de las propiedades que recibe nuestro componente.

En esta lección veremos como ir más allá y definiremos el tipo de esas `props`, así como si son requeridas u opcionales. Para ello utilizaremos el paquete `prop-types`.

## Uso

Lo primero que debemos hacer, es instalar la dependencia a `prop-types`:
```
yarn add prop-types
```

Instalada la dependencia, tomemos el siguiente componente de la lección anterior como ejemplo.

```javascript
const Header = ({ titulo, descripcion }) => {
  return (
    <header>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </header>
  )
}
```

Supongamos que establecemos que la propiedad `titulo` es obligatoria y la `descripcion` es opcional y que ambas propiedades son de tipo `String`. Ahora veamos cómo expresamos eso con `prop-types`

```javascript
// primero y antes que nada, importamos la dependencia
import PropTypes from 'prop-types'

const Header = ({ titulo, descripcion }) => {
  return (
    <header>
      <h1>{titulo}</h1>
      {/*
        Como `descripcion` es opcional, vamos a crear el nodo `<p>`
        solamente cuando `descripcion` tenga un valor
      */}
      {descripcion && <p>{descripcion}</p>}
    </header>
  )
}

// Y ahora realizamos la definición de los tipos

Header.propTypes = {
  // `titulo` es de tipo `string` y es requerido
  titulo: PropTypes.string.isRequired,
  // `descripcion` tb es de tipo `string` y es opcional (solo omitimos el `isRequired`)
  descripcion: PropTypes.string
}

Header.defaultProps = {
  // Como `descripcion` es opcional, es una práctica recomendad establecerle
  // un valor por defecto, en nuestro caso "string vacio"
  descripcion: ''
}

```

Y bien, ¿qué tipo de estructuras podemos definir con `PropTypes`? En sentido estricto, la que necesites. Veamos más ejemplos.

```javascript
const unBooleano = true
const unObjeto = {
  texto: 'un texto',
  numero: 8
}
const unColorComoString = 'red'
const unaFuncionQueDuplica = it => it*2
const unArrayDeObjetos = [
  { otroTexto: 'otro texto', otroNumero: 3 },
  { otroTexto: 'nuevo texto', otroNumero: 5 }
]

const Ejemplo = ({
  unBooleano,
  unColorComoString,
  unObjeto,
  unaFuncionQueDuplica,
  unArrayDeObjetos
}) => (
  <div>Solo un ejemplo</div>
)

Ejemplo.propTypes = {
  unBooleano: PropTypes.bool.isRequired,
  unObjeto: PropTypes.shape({
    texto: PropTypes.string.isRequired, // tb podemos definir si una propiedad es requerida o no
    numero: PropTypes.number
  }),
  unColorComoString: PropTypes.oneOf(['red', 'white', 'black']), // de una lista de valores
  unaFuncion: PropTypes.func,
  unArrayDeObjetos: PropTypes.arrayOf(
    PropTypes.shape({
     otroTexto: PropTypes.string.isRequired,
     otroNumero: PropTypes.number
   })
  )
}
```

Te en cuenta que `PropTypes` es solamente un mecanismo de control no intrusivo, es decir que no interfiere en la ejecución de tu aplicación.

Por ejemplo, si a la propiedad `unBooleano` que hemos definido como requerida, no le pasas un valor tu aplicación seguirá ejecutándose, aunque ahora en la consola de tu navegador encontrarás un mensaje como el siguiente:

```
Warning: Failed prop type: The prop `unBooleano` is marked as required in `Ejemplo`, but its value is `undefined`.
```

Y si por ejemplo le pasas un número en lugar de un booleano, el mensaje será el siguiente:

```
Warning: Failed prop type: Invalid prop `unBooleano` of type `number` supplied to `Ejemplo`, expected `boolean`
```

> Chequea la lista completa de tipos chequeables con `PropTypes` en la documentación [oficial de `React`](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)


## Ejercicio

Define los `propTypes` para los componentes declarados en nuestra aplicación de ejemplo, que hemos ido creando en las lecciones anteriores.

