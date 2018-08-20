# Babel

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

Neste curso usaremos muitas funcionalidades de ES6 e para permitir que nosso código funcione em navegadores que só implementem ES5, podemos usar um transpilador como `babel` que converte nosso código de ES5 de maneira automática.

Babel possui uma ferramenta chamada `babel-cli` que podemos instalar assim:

```sh
npm install --global babel-cli
```

Uma vez que tenhamos instalado `babel-cli` globalmente, podemos executar o comando `babel` na linha de comando para transpilar nosso código. Para tal você terá que instalar também um _preset_ (por exemplo, `babel-preset-env`) e criar um arquivo `.babelrc` com a configuração necessária.

Para mais detalhes sobre `babel` e `babel-cli` veja a [documentação oficial](https://babeljs.io).
