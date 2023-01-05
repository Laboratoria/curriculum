---
type: read
duration: 30min
---

# Frameworks

Já vimos um pouco o que fazemos quando testamos e porque testamos. Agora vamos
introduzir algumas ferramentas para facilitar esse processo de ter que executar
algo e comprovar se aconteceu o que esperávamos.

Existem vários frameworks e bibliotecas ótimas de _testing_ para JavaScript:
[Mocha](https://mochajs.org/), [Jest](https://facebook.github.io/jest/),
[Jasmine](https://jasmine.github.io/),
[Tape](https://github.com/substack/tape),... para falar só das mais populares.

> Teste unitário envolve quebrar seu programa em pedaços e submeter cada pedaço
>a uma série de testes.
>
>Normalmente testes são executados como programas a parte, mas o método de teste
>varia, dependendo da linguagem e do tipo de software (GUI, linha de comando,
>biblioteca).
>
>A maior parte das linguagens possuem frameworks para testes unitários. Você
>deve olhar o framework que você utiliza.
>
>Testes normalmente são executados periodicamente, frequentemente após cada
>mudança do código fonte. Quando mais frequente melhor, porque mais cedo você
>verá os problemas.
>
>Fonte: [Stack Overflow](https://stackoverflow.com/a/652309/374331)

Neste curso concentraremos os esforços no **Mocha** e em particular à interface
[BDD](https://mochajs.org/#bdd), que implementa uma API para fazer
[Behavior-driven
development](https://pt.wikipedia.org/wiki/Behavior_Driven_Development).

## Instalando Mocha

Para começar, instalaremos o `mocha` globalmente usando `npm`.

```sh
npm install --global mocha
```

Alternativamente, se você prefere abreviaturas, é possível usar este outro
comando que faz exatamente o mesmo que o anterior, mas usando os atalhos.

```sh
npm i -g mocha
```

Se você receber um erro que diz algo como `Error: EACCES: permission denied
...`, provavelmente significa que você não possui permissão na pasta na qual
está instalado `Node.js`. Nesse caso, você pode tentar executar o comando usando
`sudo`:

```sh
sudo npm i -g mocha
```

Se tudo correu bem, você já deve ter o `mocha` instalado como um comando que
você pode executar pelo terminal. Podemos usar o comando `which` para ver se ele
encontra o executável:

```sh
$ which mocha
/usr/local/bin/mocha
```

Se o `mocha` não estivesse instalado no seu `Path` o comando `which` não
mostraria nada. Por outro lado, agora que sabemos que temos o executável de
`mocha` disponível, podemos ver a ajuda executando o comando `mocha --help`:

```sh
$ mocha --help

  Usage: mocha [debug] [options] [files]


  Options:

    -V, --version                           output the version number
    -A, --async-only                        force all tests to take a callback (async) or return a promise
    -c, --colors                            force enabling of colors
    -C, --no-colors                         force disabling of colors
    -G, --growl                             enable growl notification support
    -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
    -R, --reporter <name>                   specify the reporter to use
    -S, --sort                              sort test files
    -b, --bail                              bail after first test failure
    ...


  Commands:

    init <path>  initialize a client-side mocha setup at <path>
```

## Nossos primeiros testes com a interface BDD

Agora que já temos o `mocha` instalado, podemos usar o comando para executar
scripts com nossos testes, usando tudo o que a biblioteca nos oferece.

Para começar vamos nos limitar a duas funções que o `mocha` injeta no ambiente:
`describe()` e `it()`. Estas duas funções permitirão construir a estrutura que
queremos testar.

No exemplo que vínhamos acompanhando, nossos testes dizem algo como: verifique
que _isVowel()_:

* retorna `true` quando é invocada com o valor `a` (`isVowel('a') === true`)
* retorna `false` quando é invocada com o valor `b` (`isVowel('b') === false`)

Esta lógica pode ser expressada usando `describe()` e `it()`. Com `describe()`
vamos dizer o que estamos testando e com `it()` especificaremos quais
características ou comportamentos queremos comprovar/afirmar.

Reescrevamos nossos testes usando esta API (`describe` e `it`). O primeiro passo
é indicar que queremos testar (a função `isVowel()` neste caso) usando uma
chamada `describe()`, que recebe argumentos, um string informativo para lhe dar
um nome ao grupo de testes e uma função que terá todos os testes e `asserts`
para esta coisa que estamos testando.

```js
// Arquivo `isVowel.spec.js`

describe('isVowel()', () => {
  // Aqui vão os testes que descrevem o comportamento de `isVowel()`
});
```

Salve isto no arquivo `isVowel.spec.js` e execute-o com o `mocha`:

```sh
$ mocha ./isVowel.spec.js


  0 passing (2ms)

```

Não recebemos nenhum erro porque tampouco aconteceu algo de interessante. Só
vemos que `0` testes passaram. Na hora de escrever os testes (seja antes ou
depois de implementar o código que queremos testar), é muito comum planejar os
testes sem lhes dar uma implementação. No nosso caso, sabemos que queremos
provar que `isVowel()`:

* retorna `true` quando se invoca com o valor `a`.
* retorna `false` quando se invoca com o valor `b`.

Isto traduzido para a semântica de BDD no Mocha, podemos expressar assim:

```js
// Arquivo `isVowel.spec.js`

describe('isVowel()', () => {
  it('Deveria retornar true para a letra a');
  it('Deveria retornar false para a letra b');
});
```

Votemos a executar os testes com o comando `mocha`:

```sh
$ mocha ./isVowel.spec.js


  isVowel()
    - Deveria retornar true para a letra a.
    - Deveria retornar false para a letra b.


  0 passing (5ms)
  2 pending

```

Você verá que embora não tenhamos especificado como fazer as verificações, fomos
descrevendo igualmente o comportamento esperado. Mais tarde poderemos refinar a
implementação conforme avançamos. Isto é muito útil tanto para _documentar_ o
comportamento de nosso código como para ver o nível de totalidade da
implementação e quais casos consideramos (ou não).

No _snippet_ anterior invocamos `it()` com uma string que permite descrever a
característica ou comportamento esperado. O mais comum é que estas strings
comecem com a palavra _deveria ..._. Desta maneira vamos articulando a semântica
que depois _leremos_ como _isVowel() deveria..._.

Mocha nos mostra os testes que adicionamos com `it()` mas nos diz que estão
_pendentes_. Isto porque demos um nome mas fizemos uma implementação. Para
adicionar o código que de fato executa o teste, `it()` recebe um segundo
argumento, uma função que será invocada para executar o teste em questão.

```js
// Arquivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('Deveria retornar true para a letra a', () => {
    // Aqui invocamos `isVowel()` e verificamos o resultado
  });

  it('Deveria retornar false para a letra b', () => {
    // Aqui invocamos `isVowel()` e verificamos o resultado
  });

});
```

Já temos uma estrutura pronta para implementar nossos testes. Para continuar
gradualmente com o exemplo, simplesmente copie as verificações que fizemos na
primeira versão dos testes (leitura anterior) dentro de nossa nova estrutura:

```js
// Arquivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('Deveria retornar true para a letra a', () => {
    if (isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

  it('Deveria retornar false para a letra b', () => {
    if (isVowel('b') !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

});
```

Executemos os testes outra vez:

```sh
$ mocha ./isVowel.spec.js


  isVowel()
✓ ok
    ✓ Deveria retornar true para a letra a.
✓ ok
    ✓ Deveria retornar false para a letra b.


  2 passing (6ms)

```

Hmmm... como você pode ver nossas verificações foram executadas, mas o Mocha e
nosso código não parecem estar se comunicando. Isso porque o Mocha espera que
façamos as verificações usando _asserts_ que podem comunicar se uma verificação
passou ou não com o Mocha para que ele possa tratar os resultados, ao invés de
ter que _manualmente_ exibir as mensagens no console.

Na leitura seguinte, veremos como utilizar _asserts_ nos seus testes, com
`assert` de Node.js e com `Chai.assert`.
