# PropTypes

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Intro

En la unidad anterior vimos como, a través de los beneficios de la asignación
desestructurada en `ES6`, podíamos definir de una manera descriptiva los nombres
de las propiedades que recibe nuestro componente.

En esta unidad veremos como ir más allá y definir además el tipo de esas
`props`, así como si son requeridas u opcionales. Para esto utilizaremos el
paquete [`prop-types`](https://github.com/facebook/prop-types).

## Uso

Lo primero que debemos hacer, es instalar la dependencia a `prop-types`:

```sh
yarn add prop-types
```

Instalada la dependencia, tomemos como ejemplo el siguiente componente de la
unidad anterior.

```js
const Header = ({ titulo, descripcion }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{descripcion}</p>
  </header>
);
```

Queremos establecer que la propiedad `titulo` es obligatoria y la `descripcion`
es opcional y que ambas propiedades son de tipo `String`. Ahora veamos cómo
expresamos eso con `prop-types`

```js
// primero y antes que nada, importamos la dependencia
import PropTypes from 'prop-types';

const Header = ({ titulo, descripcion }) => (
  <header>
    <h1>{titulo}</h1>
    {/*
      Como `descripcion` es opcional, vamos a crear el nodo `<p>`
      solamente cuando `descripcion` tenga un valor
    */}
    {descripcion && <p>{descripcion}</p>}
  </header>
);

// Y ahora realizamos la definición de los tipos

Header.propTypes = {
  // `titulo` es de tipo `string` y es requerido
  titulo: PropTypes.string.isRequired,
  // `descripcion` tb es de tipo `string`
  // y es opcional (solo omitimos el `isRequired`)
  descripcion: PropTypes.string,
};

Header.defaultProps = {
  // Como `descripcion` es opcional, es una práctica recomendada establecerle
  // un valor por defecto, en nuestro caso "string vacio"
  descripcion: '',
};
```

Y bien, ¿qué tipo de estructuras podemos definir con `PropTypes`? En sentido
estricto, la que necesites. Veamos más ejemplos.

```js
const unBooleano = true;
const unObjeto = {
  texto: 'un texto',
  numero: 8,
};
const unColorComoString = 'red';
const unaFuncionQueDuplica = it => it * 2;
const unArrayDeObjetos = [
  { otroTexto: 'otro texto', otroNumero: 3 },
  { otroTexto: 'nuevo texto', otroNumero: 5 },
];

// ... definimos nuestro `Componente` ...

Componente.propTypes = {
  unBooleano: PropTypes.bool.isRequired,
  unObjeto: PropTypes.shape({
    // tb podemos definir si una propiedad interna es requerida o no
    texto: PropTypes.string.isRequired,
    numero: PropTypes.number,
  }),
  // de una lista de valores fijos
  unColorComoString: PropTypes.oneOf(['red', 'white', 'black']),
  unaFuncion: PropTypes.func,
  unArrayDeObjetos: PropTypes.arrayOf(
    PropTypes.shape({
      otroTexto: PropTypes.string.isRequired,
      otroNumero: PropTypes.number,
    }),
  ),
};
```

Ten en cuenta que `PropTypes` es solamente un mecanismo de control no
intrusivo, es decir que no interfiere en la ejecución de tu aplicación, sólo
notifica `error`s y `warning`s por consola.

Por ejemplo, si a la propiedad `unBooleano` que hemos definido como requerida,
no le pasas un valor tu aplicación seguirá ejecutándose, aunque ahora en la
consola de tu navegador encontrarás un mensaje como el siguiente:

```text
Warning: Failed prop type: The prop `unBooleano` is marked as required in
`Componente`, but its value is `undefined`.
```

Y si por ejemplo le pasas un número en lugar de un booleano, el mensaje será
el siguiente:

```text
Warning: Failed prop type: Invalid prop `unBooleano` of type `number` supplied
to `Componente`, expected `boolean`
```

Chequea la lista completa de tipos chequeables con `PropTypes` en la
documentación [oficial de `React`](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
