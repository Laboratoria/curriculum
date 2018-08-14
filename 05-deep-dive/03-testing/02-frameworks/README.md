# *Frameworks*

* Tipo: `leitura`
* Formato: `individual`
* Duração: `30min`

***

Já vimos um pouco o que fazemos quando testamos e porque testamos. Agora vamos introduzir algumas ferramentas para facilitar esse processe de ter que executar algo e comprovar se aconteceu o que esperávamos.

Existem vários frameworks e bibliotecas ótimas de *testing* para JavaScript: [Mocha](https://mochajs.org/), [Jest](https://facebook.github.io/jest/), [Jasmine](https://jasmine.github.io/), [Tape](https://github.com/substack/tape),... para falar só das mais populares.

> Teste unitário envolve quebrar seu programa em pedaços e submeter cada pedaço a uma série de testes.
>
> Normalmente testes são executados como programas a parte, mas o método de teste varia, dependendo da linguagem e do tipo de software (GUI, linha de comando, biblioteca).
>
> A maior parte das linguagens possuem frameworks para testes unitários. Você deve olhar o framework da que você utiliza.
>
> Testes normalmente são executados periodicamente, frequentemente após cada mudança do código fonte. Quando mais frequente melhor, porque mais cedo você verá os problemas.
>
> Fonte: [Stack Overflow](https://stackoverflow.com/a/652309/374331)

Neste curso concentraremos os esforços no **Mocha** e em particular à interface [BDD](https://mochajs.org/#bdd), que implementa uma API para fazer [Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development).

## Instalando Mocha

Para começar, instalaremos o `mocha` globalmente usando `npm`.

```sh
npm install --global mocha
```

Alternativamente, se você prefere abreviaturas, é possível usar este outro comando que faz exatamente o mesmo que o anterior, mas usando os atalhos.

```sh
npm i -g mocha
```

Se você receber um erro que diz algo como `Error: EACCES: permission denied ...`, provavelmente significa que você não possui permissão na pasta na qual está instalado `Node.js`. Nesse caso, você pode tentar executar o comando usando `sudo`:

```sh
sudo npm i -g mocha
```

Se tudo correu bem, você já deve ter o `mocha` instanado como um comando que você pode executar pelo terminal. Podemos usar o comando `which` para ver se ele encontrar o executável:

```sh
$ which mocha
/usr/local/bin/mocha
```

Se o `mocha` não estivesse instalado no seu `Path`o comando `which` não mostraria nada. Por outro lado, agora que sabemos que temos o executável de `mocha` disponível, podemos ver a ajuda executando o comanado `mocha --help`:

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

Agora que já temos o `mocha` instalado, podemos usar o comando para executar scripts com nossos testes, usando tudo o que a biblioteca nos oferece.

Para começar vamos nos limitar a duas funções que o `mocha` injeta no ambiente: `describe()` e `it()`. Estas duas funções permitirão construir a estrutura que queremos testar.

No exemplo que vínhamos acompanhando, nossos testes dizem algo como: verifique que _isVowel()_:

* retorna `true` quando é invocada com o valor `a` (`isVowel('a') === true`)
* retornad `false`quando é invocada com o valor `b` (`isVowel('b') === false`)

Esta lógica pode ser expressada usando `describe()` e `it()`. Com `describe()` vamos dizer o que estamos testando e com `it()` especificaremos quais características ou comportamentos queremos conprovar/afirmar.

Reescrevamos nossos testes usando esta API (`describe` e `it`). O primeiro passo é indicar que queremos testar (a função `isVowel()` neste caso) usando uma chamada `describe()`, que recebe argumentos, um string informativo para lhe dar um nome ao grupo de testes e uma função que terá todos os testes e `asserts` para esta coisa que estamos testando.

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

Não recebemos nenhum erro porque tampouco aconteceu algo de interessante. Só vemos que `0` testes passaram. Na hora de escrever os testes (seja antes ou depois de implementar o código que queremos testar), é muito comum planejar os testes sem lhes dar uma implementação. No nosso caso, sabemos que queremos provar que `isVowel()`:

* retorna `true` quando se invoca com o valor `a`
* retorna `false` quando se invoca com o valor `b`

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
    - Deveria retornar true para a letra a
    - Deveria retornar false para a letra b


  0 passing (5ms)
  2 pending

```

Verás de que todavía no hemos especificado cómo hacer las comprobaciones, pero
hemos ido igualmente describiendo el comportamiento esperado, y más tarde
podemos ir rellenando la implementación según avancemos. Esto es super útil
tanto para _documentar_ el comportamiento de nuestro código, como para ver el
nivel de completitud de la implementación y qué casos tiene en cuenta (o no).

En el snippet anterior invocamos `it()` con un string que nos permite describir
la característica o comportamiento esperado. Lo más común es que estos strings
comiencen con la palabra _debería..._. De es forma se va articulando la
semántica que después _leeremos_ como _is isVowel() debería ...._.

Mocha nos muestra los tests que añadimos con `it()` pero nos dice que están
_pendientes_. Esto es porque les dimos un nombre, pero no les dimos una
implementación. Para añadir el código que de verdad ejecuta la prueba en sí,
`it()` recibe un segundo argumento, una función que será invocada para ejecutar
el test en cuestión.

```js
// Archivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    // Acá invocamos `isVowel()` y verificamos el resultado
  });

  it('debería devolver false para letra b', () => {
    // Acá invocamos `isVowel()` y verificamos el resultado
  });

});
```

Bueno, ya tenemos una estructura lista para implementar nuestros tests. Para
continuar gradualmente con el ejemplo, simplemente copia las comprobaciones que
hacíamos en la primera versión de los tests (leitura anterior) dentro de nuestra
nueva estructura:

```js
// Archivo `isVowel.spec.js`

const isVowel = require('./isVowel');

describe('isVowel()', () => {

  it('debería devolver true para letra a', () => {
    if (isVowel('a') !== true) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

  it('debería devolver false para letra b', () => {
    if (isVowel('b') !== false) {
      console.error('✗ fail');
    } else {
      console.log('✓ ok');
    }
  });

});
```

Ejecutemos los tests otra vez:

```sh
$ mocha ./isVowel.spec.js


  isVowel()
✓ ok
    ✓ debería devolver true para letra a
✓ ok
    ✓ debería devolver false para letra b


  2 passing (6ms)

```

Hmmm... como puedes ver se ejecutaron nuestras comprobaciones, pero Mocha y
nuestro código no parecen estar comunicándose. Eso es porque Mocha espera que
hagamos las comprobaciones usando _aserciones_, que puedan comunicar si una
comprobación pasó o no a mocha para que este pueda manejar los resultados, en
vez de tener que _manualmente_ imprimir mensajes a la consola.

En la siguiente leitura veremos como usar _aserciones_ en tus tests, tanto en
versión vanilla, con `assert` de Node.js y con `Chai.assert`.
