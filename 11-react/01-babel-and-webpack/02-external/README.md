# Extraindo o código js para seu próprio arquivo

* Tipo: `leitura`
* Formato: `individual`
* Duração: `5min`

***

## Introdução

Imagine uma aplicação realmente complexa, com centenas de componentes, `css` e imagens. Assim são as aplicações no mundo real, com milhares de linhas de código.

A estrutura de nossa aplicação até agora consta somente com um arquivo `html` que contém nosso código.

Como você pode imaginar, a medida que a complexidade de nossa aplicação aumenta, ter todo nosso código em um único arquivo deixa de ser uma alternativa válida e sustentável.

Nesta leitura veremos como separar nosso código `html` de nosso código `javascript`.


## Setup

Para poder referenciar os arquivos externos a serem utilizados em nossa aplicação, já não podemos carregar o arquivo estaticamente. Precisamos configurar um servidor local para hospedar os arquivos em questão.

Para isso a primeira coisa a fazer é converter nosso projeto em uma aplicação de `node`.

Para isso, a partir da raiz da aplicação executamos o seguinte comando:

```sh
yarn init
```

Siga as instruções e complete a informação que vai sendo solicitada.

Isso criará um arquivo `package.json` que contém a configuração que você acabou de fazer.

Agora, vamos instalar uma dependência que permita subir um servidor local. Para tal, utilizaremos o pacote [`node-static`](https://github.com/cloudhead/node-static) e vamos criar nosso primeiro `npm script` (`start`) que será responsável por chamar o pacote.

Então, instalamos primeiramente a dependência com `yarn`.

```sh
yarn add node-static
```

E em seguida abrimos o arquivo `package.json` e adicionamos a seguinte propriedade:

```json
{
  "scripts": {
    "start": "static"
  }
}
```

E por fim para subir seu servidor, você só tem que executar o seguinte comando:

```sh
yarn start
```

... e acessar a seguinte url: [127.0.0.1:8080](http://127.0.0.1:8080/)

Aqui há alguns recursos para entender mais sobre o arquivo [`package.json`](https://docs.npmjs.com/files/package.json) e os [`npm scripts`](https://docs.npmjs.com/misc/scripts).

## Exercício

Agora que você já tem sua aplicação configurada, extraia todo o código de sua tag `script` para um arquivo `page.js` e referencie-o no seu `html` como você faria com qualquer `js` externo:

```html
<script type="text/babel" src="page.js" ></script>
```

Na próxima leitura veremos como utilizamos `babel` no "mundo real".
