# Promesas

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

Até agora vimos o uso de _callbacks_ para manipular tarefas assíncronas. Nesta leitura introduzimos um tipo novo de dado (`Promise`), que é especificamente projetado para encapsular operações assíncronas e poder encadeá-las.

Quando usamos _callbacks_, é comum nos depararmos com situações onde uma operação assíncrona depende de que outra tenha sido completada e assim vamos encadeando _callbacks_ e é fácil perder o fio da meada do que está sendo executado em um momento determinado. Mais ainda assim na vida real começam a existir *callbacks* para tudo:

```js
umProcessoLento(
  (dados) => {
    outroProcessoLento(
      (outrosDados) => {
        eAindaOutroProcessoLento(
          (maisDados) => {
            /*
             * podemos seguir encadeando callbacks...
             */
          }
        );
      }
    );
  }
);
```

Isto se chama **callback hell** e ocorre quando processos lentos dependem do resultado de outros anteriores e acabamos encadeando uma dentro da outra as funções que esperam os dados que vêm desses processos.

Para isso é que desde ES6 se criaram as `promessas` (*Promises* en inglês), que são projetadas para representar esses dados que estão chegando, chegarão ou simplesmente nunca cheguem (no caso de acontecer alguma falha). Vejamos um exemplo delas:

```js
const readFiles = require('read-files-promise');

readFiles([
  'path/to/file0',
  'path/to/file1',
], { encoding: 'utf8' })
  .then((buffers) => {
    buffers;
  })
  .catch((error) => {
    console.log('Falha neste processo muito lento');
  });
```

Muito melhor, embora vejamos mais linhas, há grandes diferenças com a abordagem de *callbacks*. O primeiro é que há um espaço para a função que receberá os dados e outro para a que executará o código de emergência em caso de falha, mas a principal é que as promessas podem ser encadeadas como veremos no próximo exemplo:

```js
const readFiles = require('read-files-promise');

readFiles(['path/to/file0'], { encoding: 'utf8' })
  .then((buffers) => {
    buffers; // [ConteudoDeArquivo0]

    return readFiles(['path/to/file1'], { encoding: 'utf8' });
  })
  .then((buffers) => {
    buffers; // [ConteudoDeArquivo1]
  })
  .catch((error) => {
    console.log("Falhamos em ler os arquivos")
  });
```

Agora sim, muito mais ordenado, claro e mantendo a funcionalidade, em que o `outroProcessoLento` depende dos dados do primeiro processo lento. Observe que mantivemos somente uma função de emergência no caso de um erro acontecer para ambos os processos, o que ajuda em reduzir o código poluído e de ser dependente da função que falhou na cadeia, coisa que teria que ser replicada em cada um dos *callbacks* do **callback hell**.

Agora que sabemos o porquê das promessas, vamos ver como criá-las e usá-las.

## Criação de _Promises_

Nesta seção nos colocamos ao lado do programador de processos lentos, motivo pelo qual precisamos de uma forma de ordenar nosso trabalho para que os outros programadores usem nosso processo lento. Vejamos um processo qualquer por dentro e analisemos as partes que o compõem, para assim entendermos como podemos criá-las.

```js
let processoLento = new Promise((resolve, reject) => {
  let dados = {};
  //...
  //muitas linhas de código
  //...
  if (error) {
    //uh oh, as coisas não foram tão bem
    reject(new Error('Aconteceu um erro, sinto muito.'));
  }
  //...
  resolve(dados);
});
```

### _new Promise_

A primeira coisa é a criação de uma promessa por meio do código `new Promise(...)`. Como você pode ver, é um objeto que representa esse dado que pode estar agora, no futuro ou simplesmente não estar. Para ser criado esse objeto recebe um *callback*, mas não como todos e sim com um especial que tem dois parâmetros que veremos a seguir.

#### Parâmetro _resolve_

O primeiro parâmetro do *callback* da promessa é uma função especial que será invocada quando o trabalho lento que estamos fazendo termina. Com isso a promessa termina e os dados que queremos retornar se toram parâmetros de `resolve`.

#### Parâmetro _reject_

Nosso trabalho lento pode falhar e é óbvio que tudo pode falhar (muito obrigado Murphy) e por isso temos que ter uma forma de comunicar que nosso processo lento teve um erro. As promessas vêm ao resgate e nos fornecem `reject`, uma função que podemos chamar no case de erro e que recebe como parâmetros... se já adivinhou, um erro de JavaScript.

## Uso de promessas

O uso comum é tal qual como mostramos no exemplo anterior de código, mas agora que estamos vendo com mais detalhe, expliquemos cada um dos componentes de uso da promessa que vimos com nosso _processoLento_ e _outroProcessoLento_.

### _then_

`then` é uma função que o usuário da promessa fornece para quando o processo lento termina de ser executado corretamente. O número de parâmetros que recebe são variáveis e depende do criador (é muito importante a comunicação entre vocês programadoras), geralmente retornam um único parâmetro com os dados resultantes. 
Se queremos encadear promessas, tal como vimos anteriormente, é importante ao final desta função retornar outra promessa. Se ao contrário queremos retornar um valor para o passo seguinte, faremos da seguinte forma:

```js
  //... muito código antes...
  return Promise.resolve(dado);
}.then(
  (dado) => {
    // Aqui podemos usar o dado que retornamos no 'then' anterior
  }
);
```

### catch

`catch` no entanto é uma função que será executada no caso de que **haja uma falha em qualquer passo da cadeia**. Isto é muito importante, porque concentra toda a manipulação de erros em só uma parte, aliviando a programadora de ter que tratar erros em cada um dos _callbacks_.

## Estado de promessas

Uma promessa pode estar nestes estados:

* **pending**: Estado inicial, nem terminada com sucesso nem fracassada.
* **fulfilled**: operação ocorreu com sucesso.
* **rejected**: operação com erro ou recusada.
* **settled**: a *Promise* teve sucesso ou fracasso, mas não está pendente.

## Leituras complementares

* [Promises - Jake Archibald - Google Developers](https://developers.google.com/web/fundamentals/primers/promises)
