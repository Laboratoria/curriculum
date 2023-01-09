---
type: read
duration: 20min
---

# O que é um teste?

Quando falamos de **tests** (testes), poderíamos pensar em ferramentas de testes
como `Mocha`, `Jest`, `Jasmine`, ... ou metodologias de desenvolvimento como TDD
ou BDD. Tudo isso pode ser muito confuso. Nesta unidade trataremos de
desmistificar um pouco este tema começando pelo princípio. Para tal, pensemos em
testes simplesmente como o ato de executar algo no computador e depois verificar
que efetivamente aconteceu o que esperávamos.

O teste mais simples possível:

```js
const a = 5;
console.log(a);
```

Poderíamos dizer que nosso amigo `console.log` é a ferramenta de testes mais
básica de todas. Ao imprimir um valor no console, podemos ver com nossos e olhos
e _comprovar_ que é esse o valor (de uma maneira visual). Estamos provando (ou
comprovando) que efetivamente a variável `a` recebeu o valor `5`, que era
exatamente o que esperávamos.

Este processo nos permite ver o que está acontecendo com o código enquanto o
escrevemos. Utilize o `console.log` e utilize-o muito. Mas obviamente ele possui
limitações. Neste caso dependemos que uma pessoa execute o comando, veja o
_output_ (saída) e na sua cabeça faça a comprovação. Muito útil para a pessoa,
mas não é automatizável nem escalável.

Por sorte, somos programadoras e podemos escrever um pouco de código (e ou usar
código de outras) para resolver estes problemas.

***

Para continuar nesta unidade, recomendamos que você crie uma pasta em algum
lugar de seu computador e vá criando os arquivos e programando conforme
avançamos. Todo o código desta lição pode ser executado com `node`.

***

Agora imaginemos que queiramos uma função que dado um caractere, ela nos diga se
é uma vogal ou não (deveria retornar `true` para as vogais e `false` para
qualquer outro caractere). Antes de implementar a função poderíamos projetar
alguns _tests_. Crie um arquivo com o nome `isVowel.spec.js` e escreva o código
a seguir:

```js
// Arquivo `isVowel.spec.js`:

const isVowel = require('./isVowel');

console.log('Deveria retornar true para a letra a');
if (isVowel('a') === true) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('Deveria retornar false para a letra b');
if (isVowel('b') === false) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}
```

Executemos nossos testes com `node` na linha de comando:

```sh
$ node ./isVowel.spec.js
module.js:557
    throw err;
    ^

Error: Cannot find module './isVowel'
    at Function.Module._resolveFilename (module.js:555:15)
    at Function.Module._load (module.js:482:25)
    at Module.require (module.js:604:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/lupo/work/laboratoria/curricula-js/05-deep-dive/03-testing/01-basics/files/isVowel.spec.js:1:79)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
```

Como podemos ver, recebemos um erro: `Error: Cannot find module './isVowel'`. Os
erros podem ser um pouco enigmáticos no início e você precisa aprender a
_lê-los_. A mensagem de erro em diz que não foi possível encontrar o módulo
`./isVowel` e abaixo temos uma série de linhas com o [_stack
trace_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack),
que nos mostra a pilha de chamadas a partir de onde ocorreu o erro. Neste caso
podemos ver que é mencionado nosso script
(`/Users/lupo/work/laboratoria/curricula-js/05-deep-dive/03-testing/01-basics/files/isVowel.spec.js:1:79`),
e ao final do caminho do arquivo vemos que aparecem dois números separados por
dois pontos (`:`). Estes números nos dizem em qual linha e qual coluna (posição
dentro da linha) está o código em questão. A linha `1` contém
`require('./isVowel')`, que é a responsável pelo erro.

Isso acontece porque importamos um módulo do arquivo `./isVowel.js` no mesmo
diretório que nosso script com os testes, mas ele não existe. Assim que o
criamos e declaramos uma função com o nome `isVowel`:

```js
// Arquivo `isVowel.js`

const isVowel = function (char) {
  // ...
};
```

Se executarmos novamente os testes, agora a saída mostrada no console deveria
aparecer algo assim:

```sh
$ node ./isVowel.spec.js
Deveria retornar true para a letra a
/Users/lupo/work/laboratoria/curricula-js/05-deep-dive/03-testing/01-basics/files/isVowel.spec.js:4
if (isVowel('a') !== true) {
    ^

TypeError: isVowel is not a function
    at Object.<anonymous> (/Users/lupo/work/laboratoria/curricula-js/05-deep-dive/03-testing/01-basics/files/isVowel.spec.js:6:5)
    at Module._compile (module.js:660:30)
    at Object.Module._extensions..js (module.js:671:10)
    at Module.load (module.js:573:32)
    at tryModuleLoad (module.js:513:12)
    at Function.Module._load (module.js:505:3)
    at Function.Module.runMain (module.js:701:10)
    at startup (bootstrap_node.js:194:16)
    at bootstrap_node.js:618:3
```

Isto quer dizer que agora sim foi possível carregar o módulo (o erro de antes já
não aparece), mas agora recebemos um novo erro: `TypeError: isVowel is not a
function` Se olharmos na linha logo abaixo da mensagem de erro, vemos que o erro
foi disparado no arquivo `isVowel.spec.js` na linha `6` e coluna `5`). Se
olharmos no código, veremos que linha `6` e coluna `5` é onde está
`isVowel('a')`. Esta é a linha na qual invocamos a função `isVowel` pela
primeira vez e parece que não é o que esperávamos (uma função, doh!).

O motivo pelo qual vemos esse erro é porque apesar de termos criado o arquivo
`isVowel.js` e termos declarado uma função com o nome `isVowel` não a
_exportamos_.

Mais adiante veremos mais detalhes sobre como _exportar_ usando tanto CommonJS
(`require`, `module`, `module.exports`) como módulos de ES6 (`import`,
`export`). Por enquanto não vamos esmiuçar esses detalhes. O importante por
enquanto é saber que estamos executando nosso código com `node`, com o qual
vamos usar o sistema de módulos de `node` (CommonJS). Quando usamos este
sistemas, podemos _exportar_ qualquer valor atribuindo-o à propriedade `exports`
do objeto global `module` (`module.exports`). `Node.js` se encarrega de que o
`module` exista no âmbito global.

```js
// Arquivo `isVowel.js`

const isVowel = function (char) {
  // ...
};

module.exports = isVowel;
```

Executemos os _tests_ uma vez más:

```sh
$ node ./isVowel.spec.js
Deveria retornar true para a letra a
✗ fail
Deveria retornar false para a letra b
✗ fail
```

Viva! Finalmente nosso script de tests executou sem _erros_, mas vemos que a
implementação de `isVowel()` não passa em nenhum dos testes que escrevemos.

Agora sim, implementamos a funcionalidade esperada em `isVowel()`:

```js
// Arquivo `isVowel.js`

const isVowel = function (char) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
};

module.exports = isVowel;
```

E executemos os testes mais uma vez:

```sh
$ node ./isVowel.spec.js
Deveria retornar true para a letra a
✓ ok
Deveria retornar false para a letra b
✓ ok
```

***

## Leituras complementares

[Unit Test - Martin Fowler](https://martinfowler.com/bliki/UnitTest.html)
