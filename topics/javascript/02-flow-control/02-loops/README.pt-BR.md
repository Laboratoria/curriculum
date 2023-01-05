---
type: read
duration: 15min
---

# Laços (Loops)

## Mecanismos que podem ser usados como laços

Os seguintes mecanismos podem ser usados como laços:

### `break [label]`

Sai do laço.

### `continue [label]`

Para a iteração atual e imediatamente executa a seguinte.

### `Labels`

Uma `label` (etiqueta) é um identificador seguido por `:`. No início de um laço,
uma label pode fazer `break` ou `continue` inclusive se está dentro de um outro
laço aninhado. Quanto está no início do bloco, te permite sair do mesmo com a
palavra `break`. Em ambos os casos, o nome da _label_ se converte em um
argumento de `break` ou `continue`. Aqui um exemplo de `break`:

```js
const findEvenNumber = arr => {
  loop: { // label
    for (let i = 0, l = arr.length; i < l; i++) {
      let element = arr[i];
      if (element % 2 === 0) {
        console.log(`Found: ${element}`);
        break loop;
      }
    }
    console.log('No even number found.');
  }
  console.log('DONE');
};
```

## Tipos de laços (loops)

### while

Um laço `while`:

```js
while (condition) {
  // statement
}
```

Executa `statement` até que a condição não seja mais satisfeita. Se a condição é
sempre `true`, então entra em um `infinite loop` (laço infinito).

```js
// infinite loop
while (1 === 1) { }
```

No próximo exemplo, eliminamos todos os elemento do `array` e os mostramos no
console:

```js
const arr = ['a', 'b', 'c'];

while (arr.length > 0) {
  console.log(arr.shift());
}

/*
 *
 * A saída do código será:
 * a
 * b
 * c
 *
 */
```

### do-while

Um laço `do-while`:

```js
do {
  // statements
} while (condition);
```

Executa os `statements` pelo menos uma vez e continua enquanto a condição for
satisfeita. Por exemplo:

```js
const pattern = /^[0-9]+$/;
let line;
do {
  line = prompt('Enter a number:');
} while(!pattern.test(line));
```

### for

Um laço `for`:

```js
for ([init]; [condition]; [post_iteration]) {
  // statements
}
```

`init` é executado uma vez antes de iniciar o laço, que depois executa
`statements` enquanto a `condition` retorne `true`. Pode usar `let` para
declarar variáveis, mas o escopo dela será apenas dentro do laço.
`post_iteration` é executado logo após cada interação. Exemplo:

```js
const arr = ['a', 'b', 'c'];

for (let i = 0, l = arr.length; i < l; i++) {
  console.log(arr[i]);
}

/*
 *
 * O resultado será esse:
 * a
 * b
 * c
 *
 */
```
