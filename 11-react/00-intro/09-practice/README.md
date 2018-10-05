# Exercícios livres

* Tipo: `prática`
* Formato: `individual`
* Duração: `40min`

***

Deixamo-lhe também com uma série de exercícios abertos para que você siga explorando por conta própria ;-)

***

Dado o seguinte código:

```html
<body>
  <div id="react-container">
    <p>
      Se você vir isto, React <strong>não</strong> está funcionando.
    </p>
  </div>

  <script>
    const DOM = React.DOM

    function Saudacao(props) {
      return DOM.h1(null, 'Olá, '+props.nome)
    }

    ReactDOM.render(
      Saudacao({ nome: 'Mundo' }),
      document.getElementById('react-container')
    );
  </script>
</body>
```

Explique por que não se vê a mensagem: *Se você vir isto, React **não** está funcionando.*

***

Dado o seguinte código em `React`

```html
<body>
  <div id="react-container">
  </div>

  <script>
    const DOM = React.DOM

    function Cabecalho(props) {
      const saudacao = props.saudacao;

      return DOM.div(null,
        DOM.h2(null, 'Cabecalho'),
        DOM.h3(null, saudacao)
        DOM.p(null,
          saudacao,
          DOM.hr(null)
        )
        DOM.div(null, 'Tchau!')
      )
    }

    const saudacao = 'Mundo'

    ReactDOM.render(
      Cabecalho({ saudacao }),
      document.getElementById('react-container')
    );
  </script>
</body>
```

Desenvolva em `HTML` o `DOM` resultante

***

Se no código anterior modificarmos

```js
const Saudacao = 'Mundo'
```

por

```js
const Saudacao = 'Amiga'
```

indique quais sub-árvores serão substituídas no processo de "reconciliação".

***

Implemente um exemplo de composição com `React`.

***

Suponhamos que administremos uma página web simples que possui a seguinte estrutura:

```html
<div id="main">
  <p>
    <h3>Título 1</h3>
    Descrição 1
  </p>
  <p>
    <h3>Título 2</h3>
    Descrição 2
  </p>
  <p>
    <h3>Título 3</h3>
    Descrição 3
  </p>
</div>
```

Após alguns meses, nosso cliente disse que quer atualizar seu sítio web para que seja mais semântico e solicita que o convertamos para esta outra estrutura:

```html
<section id="main">
  <article>
    <h3>Título 1</h3>
    <p>Descrição 1</p>
  </article>
  <article>
    <h3>Título 2</h3>
    <p>Descrição 2</p>
  </article>
  <article>
    <h3>Título 3</h3>
    <p>Descrição 3</p>
  </article>
</section>
```

Com qual problema nos deparamos? E se em lugar de 3 `articles` em uma `section` fossem 100 `articles` em 40 `sections`? 

Proponha uma solução para esse problema com `React`.

***

Adicione comentários no código dos exercícios desta unidade para esclarecer o que está acontecendo.
