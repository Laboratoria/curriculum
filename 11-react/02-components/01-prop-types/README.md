# PropTypes

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## Introdução

Na unidade anterior vimos os benefícios da atribuição desestruturada em `ES6` e como podemos definir os nomes das propriedades que nosso componente recebe.

Nesta unidade veremos como ir além e definir também o tipo dessas `props`, assim como se são obrigatórias ou não. Para isso utilizaremos o pacote [`prop-types`](https://github.com/facebook/prop-types).

## Uso

A primeira coisa a fazer é instalar a dependência de `prop-types`:

```sh
yarn add prop-types
```

Instalada a dependência, tomemos como exemplo o seguinte componente da unidade anterior.

```js
const Header = ({ titulo, descricao }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{descricao}</p>
  </header>
);
```

Queremos estabelecer que a propriedade `titulo` é obrigatória e a `descricao` é opcional e que ambas propriedades são do tipo `String`. Agora vejamos como declará-los usando `prop-types`.

```js
// Primeiramente, importamos a dependência:
import PropTypes from 'prop-types';

const Header = ({ titulo, descricao }) => (
  <header>
    <h1>{titulo}</h1>
    {/*
      Como `descricao` é opcional, vamos criar o nó `<p>`
      somente quando  `descricao` contiver um valor.
    */}
    {descricao && <p>{descricao}</p>}
  </header>
);

// E agora realizamos a definição dos tipos:

Header.propTypes = {
  // `titulo` é do tipo `string` e é obrigatório.
  titulo: PropTypes.string.isRequired,
  // `descricao` também do do tipo `string`.
  // e é opcional (somente omitimos o `isRequired`).
  descricao: PropTypes.string,
};

Header.defaultProps = {
  // Como  `descricao` é opcional, é uma prática recomendada estabelecer
  // um valor padrão. No nosso caso "string vazia".
  descricao: '',
};
```

Muito bem, que tipo de estruturas podemos definir com  `PropTypes`? No sentido estrito, as que você precisar. Vejamos mais exemplos:

```js
const umBooleano = true;
const umObjeto = {
  texto: 'um texto',
  numero: 8,
};
const umaCorComoString = 'red';
const umaFuncaoQueDobra = it => it * 2;
const umArrayDeObjetos = [
  { outroTexto: 'outro texto', outroNumero: 3 },
  { outroTexto: 'novo texto', outroNumero: 5 },
];

// ... Definimos nosso `Componente` ...

Componente.propTypes = {
  umBooleano: PropTypes.bool.isRequired,
  umObjeto: PropTypes.shape({
    // Tb podemos definir se uma propriedade interna é obrigatória ou não.
    texto: PropTypes.string.isRequired,
    numero: PropTypes.number,
  }),
  // De uma lista de valores fixos.
  umaCorComoString: PropTypes.oneOf(['red', 'white', 'black']),
  umaFuncao: PropTypes.func,
  umArrayDeObjetos: PropTypes.arrayOf(
    PropTypes.shape({
      outroTexto: PropTypes.string.isRequired,
      outroNumero: PropTypes.number,
    }),
  ),
};
```

Tenha em mente que `PropTypes` é somente um mecanismo de controle não intrusivo, ele não interfere na execução de sua aplicação, apenas notifica `error`s e `warning`s no console.

Por exemplo, se a propriedade `umBooleano` que definimos como obrigatória não passa um valor, sua aplicação continuará executando, mesmo que aparece a seguinte mensagem no console:

```text
Warning: Failed prop type: The prop `umBooleano` is marked as required in `Componente`, but its value is `undefined`.
```

E se por exemplo você passa um número no lugar de um booleano, a mensagem será a seguinte:

```text
Warning: Failed prop type: Invalid prop `umBooleano` of type `number` supplied to `Componente`, expected `boolean`
```

Verifique a lista completa de tipos validáveis com `PropTypes` na documentação [oficial de `React`]: (https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
