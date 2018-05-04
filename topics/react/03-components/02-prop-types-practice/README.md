# Ejercicios: propTypes y defaultProps

* Tipo: `práctica`
* Formato: `self-paced`
* Duración: `15min`

***

Define los `propTypes` y `defaultProps` para los componentes declarados en los
ejercicios de las unidades anteriores así como tu proyecto final.

En la unidad anterior probablemente hayas terminado con varios componentes, algo
como: `Article`, `Aside`, `AsideLink`, `Header`, `MainSection` y `Page`. Si, por
ejemplo, la implementación de `Article` es:

```js
const Article = ({ titulo, descripcion }) => (
  <article>
    <h3>{titulo}</h3>
    {descripcion && (<p>{descripcion}</p>)}
    <hr />
  </article>
);
```

Entonces deberíamos añadir los siguientes `propTypes` y `defaultProps`:

```js
Article.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
};

Article.defaultProps = {
  descripcion: '',
};
```

Una vez que hayas implementado `propTypes` y `defaultProps` comprueba que
efectivamente recibimos los _warnings_ esperados en la consola del navegador
cuando nuestros componentes reciben props de tipos inesperados, o cuando no
reciben props que esperaban recibir.

***

Define los `PropTypes` para los siguientes tipos de `props`

* Cualquier tipo
* `String` o `boolean`
* Una fecha
* Un elemento `JSX`
* Alguno de estos tres valores: `'manzanas'`, `'naranjas'`, `'plátanos'` o la
  siguiente forma `{ otro: '[cualquier otra fruta]' }`
* una lista de `items` con identificadores únicos:
  ```js
  // valor valido
  const items = [
    { id: 'id-1', texto: 'Un texto' },
    { id: 'id-2', texto: 'Otro texto' },
    // el texto puede repetirse
    { id: 'id-3', texto: 'Otro texto' },
  ]

  // valor inválido
  const items = [
    { id: 'id-1', texto: 'Un texto' },
    { id: 'id-2', texto: 'Otro texto' },
    // id repetido
    //      ↓
    { id: 'id-2', texto: 'Otro texto' },
  ]
  ```
