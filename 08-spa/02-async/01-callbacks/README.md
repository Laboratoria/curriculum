# Callbacks

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

As diferentes linguagens e estilos de programação sempre tiveram um problema com o tempo que as coisas levam para serem realizadas, talvez não no sentido humano, mas sim para um computador, que pode executar milhões de operações por segundo. Em particular isso acontece com operações como buscar informação no disco rígido, buscar informação em alguma API da internet ou também esperar que o usuário faça algo. Um estilo que teve sucesso no passado é o modo `síncrono`:

```js
const fs = require('fs');
const contents = fs.readFileSync('assets/ajson.json').toString();
console.log(contents);
```
Nesse estilo vemos que para imprimir o conteúdo do arquivo, é preciso esperar que `readFileSync` termine de ler, o que não é muito eficiente do ponto de vista do usuário que precisa esperar essa tarefa ser concluída para começar a ver algo na tela. Mas é eficiente do ponto de vista do programador, que só precisa se preocupar que o programa funcione e que com 3 linhas consiga obter os dados. Cada linha é executada uma após a outra, o que torna o programa fácil de acompanhar.

Com a chegada de JavaScript, também se popularizou um novo estilo de programação, chamado `assíncrono`:
```js
const fs = require('fs');

fs.readFile('assets/ajson.json', (err, buf) => {
  console.log(buf.toString());
});

console.log('Aguarde enquanto lemos o arquivo...');
```

Com esta maneira de programar não nos preocupamos em esperar os dados. Podemos fazer outras coisas durante o processo, como informar o usuário que algo está sendo executado por meio de uma mensagem (ou barra de progresso se estivermos em uma página web). Para isso criamos uma função, a qual comumente se chama *callback*, que será executada assim que os dados forem retornados do processo lento.

## Leituras complementares

* [Callback function - MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)
