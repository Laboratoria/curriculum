# Exercício: Migrar para `JSX`

* Tipo: `prática`
* Formato: `individual`
* Duração: `10min`

***

Vamos continuar o exercício anterior, no qual construímos uma interface usando `React` e `ReactDOM` a partir de um HTML. Neste exemplo, a _data_ que estamos representando em nossa interface poderia ser organizada da seguinte forma:

```js
const data = {
  headerTitulo: 'Getting Started',
  headerDescripcion: 'Descrição',
  mainSectionTitulo: 'Main Section',
  articles: [
    { titulo: 'Título 1', descripcion: 'Descrição 1'},
    { titulo: 'Título 2', descripcion: 'Descrição 2'},
    { titulo: 'Título 3', descripcion: 'Descrição 3'}
  ],
  asideTitulo: 'Links',
  links: [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ],
};
```

O desafio agora é reescrever a mesma página do exercício anterior usando esse objeto de dados como ponto de partida e desta vez utilizando `JSX` ao invés de `React.DOM.div` e companhia.

O resultado deveria ser algo similar a isto:

![Screenshot de resultado](https://image.ibb.co/dXaJEc/html.png)

Continuando o exercício anterior, agora temos que configurar a página que comece a entender `JSX`. Há várias formas de fazer isto, mas o faremos incluindo uma dependência de um script de `babel` que, entre outras coisas, entende `JSX` e criaremos nosso `script` com uma notação especial, para que `babel` entenda que é sua responsabilidade processá-lo.

Então, precisamos adicionar a seguinte dependência:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
```

E anotar nossa tag `script` na qual podemos implementar nosso código como type `text/babel`:

```html
<script type="text/babel">
  // Aqui o código de seus componentes:
</script>
```

Se atualizar sua página, nada deve ter mudado, já que todo o código ES5 é compatível com ES6.

Terminada a configuração, agora nossa tarefa será nos livrar de todas as referências a `React.DOM` e às chamadas diretas a nossos componentes, substituindo-as por código `JSX`.

Então, por exemplo, o seguinte código

```js
function Header(props) {
  return DOM.header(null,
    DOM.h1(null, props.titulo),
    DOM.p(null, props.descricao)
  );
}
```

é convertido para

```js
function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
      <p>{props.descricao}</p>
    </header>
  )
}
```

e

```js
const articles = props.articles.map(function (it) {
  return Article(it);
})
```

é convertido para

```jsx
const children = props.articles.map(function (a) {
  return <Article titulo={a.titulo} descripcion={a.descricao} />
})
```

## Boilerplate

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Exemplo básico com JSX</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Exemplo básico com JSX</h1>
    <div>
      <h4>Detalhes</h4>
      <p>
        Esta aplicação é escrita utilizando JSX e transformada pelo Babel em ES5 diretamente no navegador:
      </p>
    </div>
    <hr />
    <div id="container">
      <p>
        Se você vir isto, React <strong>não</strong> está funcionando.
      </p>
    </div>
    <script src="https://unpkg.com/react@15/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
    <script type="text/babel">
      const data = {
        headerTitulo: 'Getting Started',
        headerDescripcion: 'Descrição',
        mainSectionTitulo: 'Main Section',
        articles: [
          { titulo: 'Título 1', descripcion: 'Descrição 1'},
          { titulo: 'Título 2', descripcion: 'Descrição 2'},
          { titulo: 'Título 3', descripcion: 'Descrição 3'}
        ],
        asideTitulo: 'Links',
        links: [
          { href: '#', texto: 'Link 1'},
          { href: '#', texto: 'Link 2'},
          { href: '#', texto: 'Link 3'},
          { href: '#', texto: 'Link 4'},
          { href: '#', texto: 'Link 5'}
        ],
      };

      ReactDOM.render(
        <Page
          headerTitulo={data.headerTitulo}
          headerDescricao={data.headerDescricao}
          mainSectionTitulo={data.mainSectionTitulo}
          mainSectionArticles={data.articles}
          asideTitulo={data.asideTitulo}
          asideLinks={data.links}
        />,
        document.getElementById('container')
      );
    </script>
  </body>
</html>
```
