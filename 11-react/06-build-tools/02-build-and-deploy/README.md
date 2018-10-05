# _Build_ & _deploy_

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## _Build_

1 - Assim como criamos um `webpack.config.js` para nosso ambiente de *desenvolvimento*, criaremos nosso `webpack.config.prod.js` para nosso ambiente de *produção*.

```js
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // Agora a entrada é exclusivamente o arquivo principal.
  entry: [
    './main.js'
  ],

  // O contexto se mantém o mesmo:
  context: resolve(__dirname, 'src'),

  // Estabelecemos qual pasta e qual nome de arquivos se criará nosso
  // `bundle`; em nosso caso, `./dist/bundle.js`.
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'), // `dist` de "distribution".
    publicPath: '',
  },

  plugins: [
    // Concatena os módulos importados:
    new webpack.optimize.ModuleConcatenationPlugin(),
    // Injeta o código no `index.html`:
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      filename: 'index.html',
      inject: 'body'
    }),
    // Otimização 1
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Otimização 2
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    // Otimização 3
    new webpack.optimize.UglifyJsPlugin({
      beautify: false
    }),
    // Definimos a variável global de **ambiente de produção**:
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  // As regras continuam sendo as mesmas:
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
};

module.exports = config;
```

2 - Criaremos um `npm script` com o nome `build` dentro de `package.json`, que ficará encarregado de executar o `webpack` com a configuração do ponto anterior.

```js
// package.json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack --config webpack.prod.config.js --progress --profile --colors"
}
```

O que fazem esses parâmetros de `progress`, `profile` e `colors`? Para você não ficar com dúvidas recomendamos que faça uma consulta à [documentação oficial da ferramenta de linha de comando (CLI) do `webpack`](https://webpack.js.org/api/cli/).

## _Deploy_

3 - Instalaremos um [módulo](https://github.com/tschaub/gh-pages) que permite implantar facilmente nas `gh-pages` (`yarn add -D gh-pages`). GiHub pages publicará uma URL com a seguinte estrutura `http://username.github.io/repo-name` com o conteúdo que estiver no `branch` `gh-pages` de nosso repositório.

4 -  Criaremos um `npm script` com o nome `deploy` que primeiro executa `build` e em seguida publica o conteúdo da pasta `dist`, usando o módulo `gh-pages`.

```js
// package.json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack --config webpack.prod.config.js --progress --profile --colors",
  "deploy": "yarn build && gh-pages -d dist"
}
```

Execute `yarn deploy` e verifique os resultados no GitHub.

***

**NOTA**:

O processo de desenvolvimento é um ciclo constante de desenvolvimento, teste, empacotamento e implantação. Encapsular esses passos com scripts para `start`, `build` e `deploy` não só contribui com nossa DX como também permite automatizar os processos de `empacotamento` e `implantação` para chegar aos que a indústria chama de ***[delivery contínuo](https://en.wikipedia.org/wiki/Continuous_delivery)***.
