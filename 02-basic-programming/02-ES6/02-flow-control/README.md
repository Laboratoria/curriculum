# Controle de Fluxo

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

## Loops

### Mecanismos que podem ser usados com repetições

Os mecanismos a seguir podem ser utilizados com repetições:

#### `break [label]`

Sai de uma repetição.

#### `continue [label]`

Interrompe a repetição (iteração) atual e é imediatamente executada a seguir.

#### `Labels`

Um `label`(etiqueta) é um identificador seguido por `:`. Ao iniciar uma repetição, um *label* permite executar `break` ou `continue` inclusive quando estiver aninhado dentro de outro ciclo aninhado. Quando estamos no início de um bloco, é possível sair dele com o comando `break`. Em ambos os casos, o nome do *label* é convertido em argumento de `break` ou `continue`. Aqui temos um exemplo de `break`:

```js
const findEvenNumber = arr => {
  loop: { // label
    for (let i = 0, l = arr.length; i < l; i++) {
      let element = arr[i];
      if (element % 2 === 0) {
        console.log(`Encontrado: ${element}`);
        break loop;
      }
    }
    console.log('Nenhum número par encontrado');
  }
  console.log('TERMINADO');
};
```

### while

Uma repetição *while*:

```js
while (condição) {
  // instruções
}
```
Executa `instruções` pelo número de vezes que a condição seja verdadeira. Se a condição é sempre `true`, então acontece um `infinite loop` (repetição infinita).

```js
// repetição infinita
while (1 === 1) { }
```
No exemplo a seguir, eliminados todos os elementos do vetor e os exibimos no console:

```js
const arr = ['a', 'b', 'c'];

while (arr.length > 0) {
  console.log(arr.shift());
}

/*
 *
 * A saída deste código será:
 * a
 * b
 * c
 *
 */
```

### do-while

Uma repetição *do-while*:

```js
do {
  // instruções
} while (condition);
```

Executa as `statements` ao menos uma vez e depois tantas vezes enquanto a condição for verdadeira. Por exemplo:

```js
const pattern = /^[0-9]+$/;
let line;
do {
  line = prompt('Digite um número:');
} while(!pattern.test(line));
```

### for

Em uma repetição *for*:


```js
for ([init]; [condition]; [post_iteration]) {
  // instruções
}
```

`init` é executado uma vez antes que a repetição comece; as `instruções` serão executadas o número de vezes que a `condition` seja `true`. Você pode utilizar `let` para declarar variáveis, mas o escopo dessa variável será somente o interior da repetição. `post_iteration` é executado após cada iteração. Por exemplo:

```js
const arr = ['a', 'b', 'c'];

for (let i = 0, l = arr.length; i < l; i++) {
  console.log(arr[i]);
}

/*
 *
 * O resultado deste código é:
 * a
 * b
 * c
 *
 */
```
