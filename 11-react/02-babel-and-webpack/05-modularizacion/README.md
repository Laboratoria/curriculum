# Modularização

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## Introdução

Analisemos um instante a estrutura de nossa aplicação:

```text
├── .babelrc
├── index.html
├── index.js
├── package.json
├── Page.js
├── styles.css
├── webpack.config.js
└── yarn.lock
```

Não há algo que está estranho? Não lhe parece algo bagunçado que os arquivos de configuração e o código fonte estejam todos misturados?

## Exercício

Modifique sua aplicação para que fique com a seguinte estrutura:

```text
├── src
│   ├── lib
│   │   └──components
│   │      ├── Aside.js
│   │      ├── Header.js
│   │      ├── MainSection.js
│   │      └── Page.js
│   ├── index.html
│   ├── index.js
│   └── styles.css
├── .babelrc
├── package.json
├── webpack.config.js
└── yarn.lock
```

### Ajuda

Configure dentro do `webpack` a pasta `src` como seu *root*.

```js
const config = {
  context: resolve(__dirname, 'src'),

  // ... O resto da configuração.
}
```
