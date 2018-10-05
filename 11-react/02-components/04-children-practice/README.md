# Exercício: `children`

* Tipo: `prática`
* Formato: `individual`
* Duração: `30min`

***

Implemente uma composição por meio de `children` nos componentes que você considera necessário no exemplo que vínhamos trabalhando. Por exemplo, imagine que tenhamos um componente `Page` que renderiza un `<div>` com outros componentes dentro. Algo assim:


```js
const Page = ({
  headerTitulo,
  headerDescricao,
  mainSectionTitulo,
  mainSectionArticles,
  asideTitulo,
  asideLinks,
}) => (
  <div style={{ background: 'pink', padding: 20 }}>
    <Header titulo={headerTitulo} descricao={headerDescricao} />
    <MainSection titulo={mainSectionTitulo} articles={mainSectionArticles} />
    <Aside titulo={asideTitulo} links={asideLinks} />
  </div>
);
```

Agora queremos que `Page` possa na verdade mostrar qualquer coisa e não somente a estrutura que temos de `Header`, `MainSection` e `Aside`. Para isso podemos refatorar o componente em um contêiner que receba o _conteúdo_ dinamicamente como `children`. Desta forma podemos aninhar tags `JSX` de maneira natural e definir o conteúdo de `Page` de fora (neste exemplo a partir de um componente chamado `Main`):
```js
const Main = ({
  headerTitulo,
  headerDescricao,
  mainSectionTitulo,
  mainSectionArticles,
  asideTitulo,
  asideLinks,
}) => (
  <Page>
    <Header titulo={headerTitulo} descricao={headerDescricao} />
    <MainSection titulo={mainSectionTitulo} articles={mainSectionArticles} />
    <Aside titulo={asideTitulo} links={asideLinks} />
  </Page>
);
```

A implementação do componente `Page` ficaria assim:

```js
const Page = ({ children }) => (
  <div style={{ background: 'pink', padding: 20 }}>
    {children}
  </div>
);
```

***

## `Filhos` diferentes com comportamento similar

Desenvolva um componente `Lista` que dado o seguinte código `JSX`:

```jsx
  <Lista>
    <span>Child 1</span>
    <strong>Child 2</strong>
    <a href="#">Child 3</a>
    <em>Child 4</em>
  </Lista>
```

retorne:

```html
<ul>
  <li><span>Child 1</span></li>
  <li><strong>Child 2</strong></li>
  <li><a href="#">Child 3</a></li>
  <li><em>Child 4</em></li>
</ul>
```

***

## Template

Desenvolva um *template* que permita criar múltiplas `Paginas` distintas que compartilhem um `Header` e um `Footer`, somente definindo o conteúdo que é diferente. Por exemplo:

```jsx
<Pagina titulo="Secao">
  <section>
    <h3>Título de uma seção</h3>
    <p>Lorem...</p>
  </section>
</Pagina>
```

retorna algo assim:

```html
  <div class="pagina">
    <header>
      <h1 class="brand">Nome fixo</h1>
      <h2 class="titulo">Seção</h2>
    </header>
    <section>
      <h3>Título de uma seção</h3>
      <p>Lorem...</p>
    </section>
    <footer>
      <small>Alguns direitos reservados</small>
    </footer>
  </div>
```

e o seguinte:

```jsx
<Pagina titulo="Lista de elementos">
  <ul>
    <li>elemento 1</li>
    <li>elemento 2</li>
    <li>elemento 3</li>
  </ul>
</Pagina>
```

retorna:

```html
  <div class="pagina">
    <header>
      <h1 class="brand">Nome fixo</h1>
      <h2 class="titulo">Seção</h2>
    </header>
    <ul>
      <li>elemento 1</li>
      <li>elemento 2</li>
      <li>elemento 3</li>
    </ul>
    <footer>
      <small>Alguns direitos reservados</small>
    </footer>
  </div>
```
