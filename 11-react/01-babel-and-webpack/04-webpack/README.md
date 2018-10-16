# Webpack

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

## Introdução

Se você olhar pra trás verá as diferentes transformações que fomos fazendo em nosso código. Na leitura anterior e nas seguintes, já não enfocamos o código como tal mas como uma estrutura de nossa aplicação e do processo de desenvolvimento.

Se você analisar, verá que temos uma aplicação fragmentada:

* Por um lado temos um arquivo `js` super moderno, transpilado e empacotado por `babel` com todo o necessário;
* Por outro lado, temos nosso `html` clássico que é encarregado de importar o estilo, o código empacotado, as dependências de `React`, e definir o `container` para os componentes de `React`.

## O que é `Webpack` e para que serve?

`Webpack` é um empacotador (`bundler`) de módulos e arquivos (`assets`) para aplicações JavaScript modernas. Quando `webpack` processa sua aplicação, cria um grafo de dependências no qual estão incluídos módulos utilizados, como também todos os arquivos estáticos referenciados, e cria um único arquivo por tipo, com todo o necessário para executar sua aplicação.

![webpack](../static/images/webpack.jpg)

Desta maneira, proporciona uma única via para importar e transformar todos os recursos de nossa aplicação, independentemente se o código é `js`, uma folha de estilos, `html`, web fonts, dados ou imagens.

`Webpack` é extremamente configurável, mas para o escopo desta lição, faremos somente uma análise de seus 4 conceitos principais:

* ## Entry
  Estes arquivos estabelecem o ponto de entrada da aplicação. São os nós iniciais, a partir dos quais se começa a montar o grafo de dependências. Geralmente são arquivos `js`.

* ## Output
  Permite configurar o destino da aplicação empacotada.

* ## Loaders
  Os `loaders` permitem interpretar e incorporar diferentes tipos de arquivos ao nosso *`bundle`*, como por exemplo estilos em `css`, `sass` ou `less`, imagens de qualquer tipo (`jpg`, `png`, `svg`...), `html`, dados em qualquer formato (`csv`, `json`, `yml`...) etc.

* ## Plugins
  Permitem estender a funcionalidade de `webpack` processando o resultado do empacotamento em quase qualquer formato imaginável, antes de gerar o `output`.

***

**PRO TIP**:

Assim como `babel` e `ES6`, `webpack` é uma ferramenta que vai muito além do `React`. Se você quiser saber mais sobre `webpack`, visite sua [página oficial](https://webpack.js.org) que contém toda a informação necessária para entender e dominar esta ferramenta tão útil e versátil.

Se você quiser saber tudo o que pode ser feito com `webpack`, verifique a lista de [`loaders`](https://webpack.js.org/loaders/) e [`plugins`](https://webpack.js.org/plugins/)

***

## Setup

`Webpack` é uma grande ferramenta mas requer um pouco mais de trabalho para colocá-la funcionando. Sendo assim, é melhor começarmos. 

1. A primeira coisa a fazer é instalar as dependências de `React` como `node` manda.

   ```sh
   yarn add react react-dom
   ```
2. Na sequência, instalamos `babel` e seus `presets` como dependências de desenvolvimento (somadas às que já tínhamos anteriormente).

   ```sh
   yarn add -D babel-core babel-preset-es2015 babel-preset-react-boilerplate
   ```
3. Instalamos `webpack`, seus `plugins`, `loaders` e `utils`, também como dependências de desenvolvimento.

   ```sh
   yarn add -D \
     webpack \
     babel-loader \
     style-loader \
     css-loader \
     html-webpack-plugin \
     open-browser-webpack-plugin \
     webpack-dev-server \
     react-hot-loader@3.0.0-beta.6
   ```
4. Para dizer ao `babel` quais `presets` devem ser utilizados, criamos um arquivos `babelrc` na raiz de nossa aplicação com o seguinte conteúdo:

   ```json
   {
     "presets": [
       "es2015",
       "react",
       "react-boilerplate"
     ],
     "plugins": [
       "react-hot-loader/babel"
     ]
   }
   ```
5. Limpamos nosso `html` até que fique desta forma:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title>Exemplo básico empacotado com Webpack</title>
     </head>
     <body>
       <div id="container"></div>
     </body>
   </html>
   ```
6. Modificamos `page.js` para que importe o `React` no escopo, para que *não* se encarregue de injetar o resultado no DOM e para que se converta em um módulo independente, que exporte `Page` e `defaultPageProps`. Por convenção, no React os arquivos em que estão os componentes são chamadas da mesma forma que os componentes que contém. Então vamos renomear `page.js` para `Page.js`.

   ```js
   // page.js
   import React from 'react'

   // ... Aqui vai a definição de seus componentes
   // e as `pageProps` por padrão.

   // Eliminamos o seguinte código:
   /*
   ReactDOM.render(
     <Page {...pageProps} />,
     document.getElementById('container')
   );
   */

   // Exportamos as propriedades dinâmicas por padrão da página
   // com o nome "defaultPageProps".
   export const defaultPageProps = pageProps

   // Exportamos por padrão o componente `Page`.
   export default Page
   ```
7. Criamos um arquivo `index.js` que configuraremos como `entry` de `webpack`. Ele é responsável por renderizar `Page` e injetar o resultado no `DOM`.

   ```js
   // main.js
   import React from 'react';
   import ReactDOM from 'react-dom';

   // Usamos um componente pai, para poder desenvolver mas agilmente.
   import { AppContainer } from 'react-hot-loader';

   // Importamos o componente `Page` e as `defaultPageProps`.
   import Page, { defaultPageProps  } from './page';

   // Aqui vemos um pouco da magia de webpack:
   // Esta instrução será encarregada de injetar o código de `styles.css`
   // dentro de uma tag `<style>` no nosso `html` resultante.
   require("./styles.css");

   // Criamos uma função auxiliar para renderizar todos nossos componentes
   // usando o componente pai, previamente importado:
   const render = (Component, props = {}) => {
     ReactDOM.render(
       <AppContainer>
         <Component {...props} />
       </AppContainer>,
       document.getElementById('container'),
     );
   };

   // Renderizamos a página
   render(Page, defaultPageProps);

   // E se houver alguma mudança, recarregamos a página "on-the-fly"
   // sem necessidade de atualizar o navegador.
   if (module.hot) {
     module.hot.accept('./page', () => {
       const newApp = require('./page').default;
       render(newApp);
     });
   }
   ```
8. Criamos o arquivo de configuração de `webpack`: `webpack.config.js`

   ```js
   // webpack.config.js

   const { resolve } = require('path');

   // Importamos webpack
   const webpack = require('webpack');
   // ... e os plugins que havíamos instalado:
   const OpenBrowserPlugin = require('open-browser-webpack-plugin');
   const HtmlWebpackPlugin = require('html-webpack-plugin');

   const config = {
     devtool: 'cheap-module-eval-source-map',

     // Definimos as entradas de nossa aplicação:
     entry: [
       // As 3 primeiras são para o *hot reload*.
       'react-hot-loader/patch',
       'webpack-dev-server/client?http://localhost:8080',
       'webpack/hot/only-dev-server',
       // Este é o que definimos anteriormente:
       './main.js'
     ],

     // Estabelecemos o output:
     output: {
       filename: 'bundle.js',
       path: resolve(__dirname, 'build'),
       publicPath: '/',
     },

     // Configuramos o servidor local de desenvolvimento:
     devServer: {
       hot: true,
       contentBase: resolve(__dirname, 'build'),
       publicPath: '/'
     },

     // E definimos que tipos de arquivos processaremos e como:
     module: {
       rules: [
         {
           test: /\.js$/, // todos os `js`
           loaders: [
             'babel-loader', // Processamos com o loader de `babel`.
           ],
           exclude: /node_modules/, // Ignoramos arquivos dentro de node_modules.
         },

         // Logo:
         {
           test: /\.css$/, // Todos os arquivos `csss`.
           use: [
             { loader: "style-loader" }, // Primeiro criamos uma tag `style`
             { loader: "css-loader" } // e injetamos o `css`.
           ]
         }
       ]
     },

     // ... Finalmente:
     plugins: [
       // Concatena os módulos importados:
       new webpack.optimize.ModuleConcatenationPlugin(),
       // Abre um navegador com o caminho de desenvolvimento:
       new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
       // Habilita a opção de hot module replacement (hot reload):
       new webpack.HotModuleReplacementPlugin(),
       // E por fim, injeta o código dentro do `index.html`:
       new HtmlWebpackPlugin({
         template: './index.html',
         filename: 'index.html',
         inject: 'body'
       })
     ]
   };

   module.exports = config;
   ```
9. Substitua o `npm script` `start`, com o seguinte comando
   `webpack-dev-server`.
10. Acesse seu terminal e execute `yarn start`.

## Exercício

Esta foi difícil, mas você conseguiu. Agora verifique no seu navegador por meio dos `devtools` (`ctrl + shift + i`) qual formato tem seu `DOM`, como foram injetados os estilos e qual é a forma de seu `bundle`.

Na próxima e última leitura veremos como organizar seu código de uma maneira mais ordenada.
