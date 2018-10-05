# Babel: caso de uso real

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

## Introdução

Tomemos um segundo para analisar o que faz e como o `babel` está funcionando:

1. Primeiro importamos a versão para navegadores de `babel`:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
   ```
   Isso carrega uma versão de `babel` que fica encarregada de "escutar" qualquer tag `script` que esteja marcada como `text/babel`. Tenha em conta que essas tags não serão processadas por seu navegador, já que seu tipo não está configurado como uma dos "interpretáveis" por padrão.

2. Em seguida carregamos um arquivo externo processando-o com a versão de `babel` importada anteriormente:
   ```html
   <script type="text/babel" src="page.js" ></script>
   ```
   Quando o parser encontra uma tag `script` marcada como `text/babel` o deixa para o `babel` que se encarrega de transpilá-lo e executá-lo.

Se você pensar, verá que esse processo é pouco eficiente já que cada vez que carregar a página, `babel` volta a transpilar o script apesar de nada ter mudado entre os dois carregamentos seguidos da página.

Nesta leitura vamos configurar nossa aplicação para _re-transpilar_ nosso código somente quando haja uma alteração e nossa página `html` só carregue o arquivo gerado por `babel`.

## Setup

1. Primeiro vamos eliminar do `html` o _import_ de `babel`.

2. Em seguida, convertemos o `babel` para uma dependência de nossa aplicação por meio de `package.json`

   ```sh
   yarn add -D babel-cli babel-preset-react
   ```

   > o parâmetro `-D` indica que são dependências de desenvolvimento.

3. Criamos um `npm script` `build` para que:

   - execute `babel` sobre nosso arquivo `page.js`;
   - usando o [--preset `react`](https://babeljs.io/docs/plugins/preset-react/);
   - e coloque o resultado na pasta `build` ([`our-dir`];(https://babeljs.io/docs/usage/cli/#babel-compile-files)).

   Tudo isso expressamos com o seguinte comando:

   ```sh
   babel page.js --presets react --out-dir=build
   ```

4. E por fim vamos modificar nosso `html` para que importe o arquivo transpilado e não o original, substituindo:

   ```html
   <script type="text/babel" src="page.js" ></script>
   ```

   por

   ```html
   <script src="build/page.js"></script>
   ```

5. Execute `yarn start` e acesse sua aplicação.

Agora cada vez que você faça uma mudança no código da página, você deve executar `yarn build` para a última versão seja refletida na sua página.

## Exercício

Pesquise sobre o parâmetro `--watch` de `babel-cli` e use-o para não ter que executar `yarn build` cada vez que fizer uma mudança e poder desfazer a dependência de `node-static`.

Na próxima leitura veremos como podemos utilizar `webpack` para que nossa experiência de desenvolvimento seja mais agradável.