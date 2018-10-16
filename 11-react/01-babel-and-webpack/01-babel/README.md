# Babel e ES6

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## O que é `Babel` e para que serve?

`Babel` é um **transpilador**. Um **transpilador** é um tipo de compilador que toma como entrada um código escrito em uma linguagem de programação e retorna um código análogo ao original, mas em outra linguagem de programação.

`Babel` em particular é um transpilador que recebe como entrar código `ES6` (linguagens suportadas de maneira parcial pelos navegadores modernos e node.js) e retorna como resultado código `ES5` padrão que podemos executar em qualquer ambiente JavaScript. Isso permite começar a utilizar todas a vantagens e extensões que propõem as novas versões de `EMACScript`, **hoje**.

***

**NOTA:**

Neste curso somente exploramos as características de `ES6`, que são especialmente úteis para o desenvolvimento com `React`, mas `EMACScript` é muito mais que isso. Aqui deixamos algumas referências se você quiser se aprofundar no tema:

* [es6-features.org](http://es6-features.org)
* [Exploring ES6](http://exploringjs.com/es6/index.html)

***

Vejamos alguns exemplos:

* Funções "flecha" _(arrow functions_)

  input:

  ```js
  [1, 2, 3].map(n => n ** 2);
  ```

  output:

  ```js
  [1, 2, 3].map(function (n) {
    return Math.pow(n, 2)
  });
  ```

* Atribuição "desestruturada" (_destructuring_):

  input:

  ```js
  var [a,,b] = [1,2,3];
  ```

  output:

  ```js
  var _ref = [1, 2, 3],
    a = _ref[0],
    b = _ref[2];
  ```

* Operador de propagação (*spread operator*):

  input:

  ```js
  const x = [1, 2, 3];
  foo([...x]);
  ```

  output:

  ```js
  var x = [1, 2, 3];
  foo([].concat(x));
  ```

* Definições abreviadas de Objetos (*shorthand properties*):

  input:

  ```js
  var obj = {
    shorthand,
    method() {
      return '😀';
    }
  };
  ```

  output:

  ```js
  var obj = {
    shorthand: shorthand,
    method: function method() {
      return '😀';
    }
  };
  ```

* Interpolação de `Strings`:

  input:

  ```js
  var nome = 'World';
  var lugar = 'Lima';

  `Olá, ${nome}. vamos para ${lugar}?`;
  ```

  output:

  ```js
  var nome = 'World';
  var lugar = 'Lima';

  'Olá, ' + nome + '. Vamos para ' + lugar + '?';
  ```

* Declaração de variables com `let` e `const`:

  input:

  ```js
  let referenciaVariavel = 'Esta string pode ser modificada';
  const referenciaFixa = 'Esta string não pode ser modificada';
  ```

  output:

  ```js
  var referenciaVariavel = 'Esta string pode ser modificada';
  var referenciaFixa = 'Esta string não pode ser modificada';
  ```

### Presets

Para agrupar as diferentes funcionalidades que queremos que `babel` entenda, utilizamos os _presets_. Os _presets_ permitem especificar qual versão de `EMACScript` queremos utilizar.

Aqui há uma pequena lista de _presets_ populares:

* [env](http://babeljs.io/docs/plugins/preset-env/) (a última versão liberada);
* [es2015](http://babeljs.io/docs/plugins/preset-2015/) (usaremos este);
* [es2016](http://babeljs.io/docs/plugins/preset-2016/);
* [es2017](http://babeljs.io/docs/plugins/preset-2017/);
* [react](http://babeljs.io/docs/plugins/preset-env/) (também usaremos este).

Se você quiser saber mais sobre [babel](http://babeljs.io/), visite sua [documentação](https://babeljs.io/docs/setup/). Para conhecer todos os **features** suportados, veja a [lista de plugins e presets](https://babeljs.io/docs/plugins/).

## Usando `Babel` em nosso exemplo

Você já tem todos os seu componentes declarados no `JSX`. Agora veremos algumas características de `ES6` que serão bem úteis com `React`.

A primeira ferramenta que usaremos é as funções flecha (*arrow functions*). Esta melhoria sintática permite escrever nossas funções de maneira mais concisa.

Então, por exemplo, a seguinte função:

```js
const Header = props => (
  <header>
    <h1>{props.titulo}</h1>
    <p>{props.descricao}</p>
  </header>
);
```

é convertida em

```js
function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.descricao}</p>
    </header>
  );
};
```

As *funções flecha* propiciam principalmente 3 benefícios:

1. Definem uma **sintaxe concisa**;
2. Possuem **retorno implícito** quando o corpo da função é somente uma expressão;
3. **Não efetuam um `re-bind` de `this`** quando são usadas dentro de outra função.

***

**NOTA:**

Para conhecer com mais detalhes os benefícios e características das *funções flecha* recomendamos os seguintes recursos:

* [*Funções Flecha* no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [*JavaScript Arrow Functions Introduction* por Wes Bos](http://wesbos.com/arrow-functions/)

***

Em seguida, para detalhar o cabeçalho de nossos componentes e quais são as `props` que recebe, usaremos parâmetros nomeados (*named parameters*). Utilizando esta técnica, o código anterior é convertido no seguinte:

```js
const Header = ({ titulo, descricao }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{descricao}</p>
  </header>
);
```

Substituímos a definição do parâmetros `props` por uma definição de sua forma, a qual adiciona uma legilibilidade à definição de nosso componente, estabelecendo claramente qual são as `props` que recebe (neste caso, `titulo` e `descricao`).

E por fim usaremos o operador de propagação (*spread operator*) para facilitar a injeção dinâmica de propriedades nos nossos componentes.

Por exemplo, dado o seguinte caso:

```js
const Header = ({ titulo, descricao }) => (
  <header>
    <h1>{titulo}</h1>
    <p>{descricao}</p>
  </header>
);

// Estas são as props que queremos injetar:
const headerProps = { titulo: 'Título', descricao: 'Descrição' };

// A maneira direta de injetar as propriedades no componente seria assim:
<Header titulo={headerProps.titulo} descricao={headerProps.descricao} />

// Uma forma mais direta e menos prolixa de fazer é assim:
<Header {...headerProps} />

// Esta última opção é particularmente útil quando não sabemos a priori qual estrutura possui `headerProps`.
```

Considera que **ambas expressões** são **equivalentes**.

## Exercício

Continuar com a conversão de todos seus componentes usando as características que acabamos de ver.

Na próxima leitura extrairemos nosso código `React` do nosso arquivo `html` e começaremos a modularizar nossa aplicação.
