# Exercícios: propTypes e defaultProps

* Tipo: `prática`
* Formato: `individual`
* Duração: `15min`

***

Defina os  `propTypes` e `defaultProps` para os componentes declarados nos exercícios das unidades anteriores como também de seu projeto final.

Na unidade anterior, provavelmente você terminou com vários componentes como: `Article`, `Aside`, `AsideLink`, `Header`, `MainSection` e `Page`. Se, por exemplo, a implementação de `Article` é:

```js
const Article = ({ titulo, descricao }) => (
  <article>
    <h3>{titulo}</h3>
    {descricao && (<p>{descricao}</p>)}
    <hr />
  </article>
);
```

Então deveríamos adicionar as seguintes `propTypes` e `defaultProps`:

```js
Article.propTypes = {
  titulo: PropTypes.string.isRequired,
  descricao: PropTypes.string,
};

Article.defaultProps = {
  descricao: '',
};
```

Assim que você implementar `propTypes` e `defaultProps`, teste se de fato estamos recebendo os _warnings_ esperados no console do navegador quando nossos componentes recebem `props` de tipos inesperados ou quando não recebem `props` que esperavam receber.

***

Defina as `propTypes` para os seguintes tipos de `props`:

* Qualquer tipo;
* `String` ou `boolean`;
* Uma data;
* Um elemento `JSX`;
* Algum destes três valores: `'maçãs'`, `'laranjas'`, `'bananas'` ou a seguinte forma: `{ outro: '[qualquer outra fruta]' }`;
* Uma lista de `items` com identificadores únicos:
  ```js
  // Valor válido:
  const items = [
    { id: 'id-1', texto: 'Um texto' },
    { id: 'id-2', texto: 'Outro texto' },
    // O texto pode ser repetido:
    { id: 'id-3', texto: 'Outro texto' },
  ]

  // Valor inválido:
  const items = [
    { id: 'id-1', texto: 'Um texto' },
    { id: 'id-2', texto: 'Outro texto' },
    // Id repetido:
    //      ↓
    { id: 'id-2', texto: 'Outro texto' },
  ]
  ```
