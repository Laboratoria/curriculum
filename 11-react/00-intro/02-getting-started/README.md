# Getting Started

* Tipo: `leitura`
* Formato: `individual`
* Duração: `12min`

***

Vejamos como podemos começar a usar `React` imediatamente dentro de nosso `html` existente.

Neste exemplo, este será nosso `html` base:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React: Getting Started</title>
    <!-- importamos alguns estilos -->
    <!-- TODO: link base.css -->
    <link rel="stylesheet" href="../shared/css/base.css" />
  </head>
  <body>
    <h1>Getting Started</h1>
    <h2>Descrição</h2>
    <p>
      Como integrar react a páginas estáticas existentes:
    </p>
  </body>
</html>
```

> NOTA:
>
> Para continuar nesta leitura, abra seu editor de texto favorito (algo como [JS Bin](https://jsbin.com/) ou [CodePen](https://codepen.io)) e copie o HTML acima. Conforme formos avançando, modifique o código e execute-o para ver os resultados em seu navegador.

Como vimos anteriormente, `React` tem sua própria **cópia inteligente** do `DOM`, o `Virtual DOM`. Para poder mostrar ao usuário o resultado de cada mudança no `Virtual DOM`, precisamos definir um elemento contêiner (`container`). Geralmente utilizamos um elemento `div` com um `id` que nos permita identificá-lo univocamente. 

```html
<body>
  <h1>Getting Started</h1>
  <h2>Descrição</h2>
  <p>
    Como integrar react a páginas estáticas existentes:
  </p>
  <!-- NOSSO CONTAINER -->
  <div id="react-container">

  </div>
</body>
```

Como com qualquer outra biblioteca (por exemplo, `jQuery`), antes de podermos utilizar `React`, precisamos importá-lo em nossa página. Para isso você pode utlizar os []links da CDN](https://reactjs.org/docs/cdn-links.html).

```html
<head>
  ...
  <link rel="stylesheet" href="../shared/css/base.css" />
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
</head>
```

Agora vamos criar nosso primeiro componente!

Assim como o `DOM` possui **tags**, `React` possui **componentes**. Os componentes são as **peça** para construir nossas interfaces a os declaramos por meio de **funções** (ou classes como veremos mais à frente).

```html
<body>
  ...
  <div id="react-container">

  </div>
  <script>
    const div = React.DOM.div;
    const h2 = React.DOM.h2;

    function Cabecalho() {
      const titulo = 'Olá, Mundo';

      const elemento = div(null,
        h2(null, titulo),
      );

      return elemento;
    }

    ReactDOM.render(
      Cabecalho(),
      document.getElementById('react-container')
    );
  </script>
</body>
```

Vejamos o que está acontecendo aqui:

Cada **tag** do DOM possui um componente que o representa no mundo React.

```js
const div = React.DOM.div;
const h2 = React.DOM.h2;
```

Os componentes normalmente são definidos como funções puras. Nosso primeiro componente será o `Cabeçalho` da página.

```js
function Cabecalho() {
  const titulo = 'Olá, Mundo';

  // Criamos um elemento `div` "the React way"
  const elemento = div(null,
    h2(null, titulo),
  );

  // e esse é o resultado de nossa função/componente:
  return elemento;
}
```

As funções `div()` e `h2()` estão esperando dois parâmetros:

* O primeiro é um objeto com atributos de configuração HTML (`className`, `src`, `alt`, `href`, etc) e que por enquanto está nulo.
* O segundo está recebendo o conteúdo (`innerHTML`) que será colocado na tag.

Isso é análogo ao seguinte código HTML:

```html
<div>
  <h2>Olá, Mundo</h2>
</div>
```

E por último, para que o usuário possa vê-lo, inserimos o resultado no DOM:

```js
ReactDOM.render(
  Cabecalho(),
  document.getElementById('react-container')
);
```

Você verá que nosso componente é uma função sem parâmetros. Um dos maiores benefícios que oferece a abordagem de componentes como funções é que por meio dos parâmetros que passamos para a função podemos modificar dinamicamente o comportamento do componente, permitindo reutilizá-lo.

No mundo `React` os parâmetros dos componentes são denominados **propriedades** (`props`).

```html
<body>
  ...
  <!-- agora teremos 2 contêineres -->
  <div id="cabecalho-1"></div>
  <div id="cabecalho-2"></div>

  <script>
    const div = React.DOM.div;
    const h2 = React.DOM.h2;

    function Cabecalho(props) {
      const titulo = 'Olá, ' + props.saudacao;

      const elemento = div(null,
        h2(null, titulo),
      );

      return elemento;
    }

    ReactDOM.render(
      Cabecalho({ saudacao: 'Mundo' }),
      document.getElementById('cabecalho-1')
    );

    ReactDOM.render(
      Cabecalho({ saudacao: 'Amiga' }),
      document.getElementById('cabecalho-2')
    );
  </script>
</body>
```

Agora nossa função recebe um parâmetro `props` que é um objeto. Cada chave de `props` é uma propriedade de nosso componente.

Assim como o `DOM` as tags têm **atributos**, em `React` os componentes têm **propriedades**:

```js
function Cabecalho(props) {
  // usamos a propriedade "saudacao":
  const titulo = 'Olá, ' + props.saudacao;

  const elemento = div(null,
    h2(null, titulo),
  );

  return elemento;
}
```

Uma vez que nosso componente está parametrizado, podemos reutilizá-lo modificando o valor de `saudacao`:

```js
ReactDOM.render(
  Cabecalho({ saudacao: 'Mundo' }),
  document.getElementById('cabecalho-1')
);

ReactDOM.render(
  Cabecalho({ saudacao: 'Amiga' }),
  document.getElementById('cabecalho-2')
);
```

## Exemplos

E por fim lhe deixamos 2 exemplos mais completos para que você analise como funcionam. Copie ou escreva o código de cada exemplo em seu editor favorito, execute-o, utilize o `console.log` para ver o que está acontecendo. Tome nota de suas dúvidas para compartilhá-las com o restante da turma mais adiante no fechamento desta unidade.

### Elementos nativos aninhados

```html
<body>
  <div id="cabecalho">
    <p>
      Se você vir isto, React <strong>não</strong> está funcionando.
    </p>
  </div>

  <script>
    const div = React.DOM.div;
    const h2 = React.DOM.h2;
    const p = React.DOM.p;
    const a = React.DOM.a;
    const b = React.DOM.b;
    const br = React.DOM.br;

    function Cabecalho(props) {
      const titulo = 'Saudação';

      return div(null,
        h2(null, titulo),
        p(null,
          "Olá, ", b(null, props.saudacao), ".", br(null),
          "Um link? ", br(null),
          a({href:"http://laboratoria.la"}, "Laboratoria"), "!"
        )
      );
    }

    ReactDOM.render(
      Cabecalho({ saudacao: 'Mundo' }),
      document.getElementById('cabecalho')
    );
  </script>
</body>
```

### Renderizado dinâmico com atributos

```html
<body>
  <div id="timer">
    <p>
      Se você vir isto, React <strong>não</strong> está funcionando.
    </p>
  </div>

  <script>
    const div = React.DOM.div;
    const h2 = React.DOM.h2;
    const p = React.DOM.p;

    function Timer(props) {
      const transcorrido = Math.round(props.transcorrido  / 100);
      const segundos = transcorrido / 10 + (transcorrido % 10 ? '' : '.0' );
      const mensagem = 'React está executando por ' + segundos + ' segundos.';

      const borderColor = transcorrido % 2 === 0 ? 'red' : 'blue';
      const containerStyle = {
        border: '3px solid ' + borderColor,
        padding: 10
      };

      return div({ style: containerStyle },
        h2(null, "Timer"),
        p(null, mensagem)
      );
    }

    const start = new Date().getTime();
    setInterval(function () {
      ReactDOM.render(
        Timer({ transcorrido: new Date().getTime() - start }),
        document.getElementById('timer')
      );
    }, 50);
  </script>
</body>
```

## Referências

* [Documentação oficial](https://facebook.github.io/react/) (em inglês)
