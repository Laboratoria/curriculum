---
type: read
duration: 15min
---

# Bucles (Loops)

## Mecanismos que pueden ser usados con ciclos/bucles

Los siguientes mecanismos pueden ser usados con ciclos:

### `break [label]`

Sale de un ciclo.

### `continue [label]`

Detiene la iteración actual e inmediatamente ejecuta la siguiente.

### `Labels`

Un `label`(etiqueta) es un identificador seguido por `:`. Al inicio de un ciclo,
un label te permite hacer `break` o `continue` incluso si está dentro anidado de
otro ciclo anidado. Cuando está al inicio de un bloque, te permite salir del
mismo con la sentencia `break`. En ambos casos, el nombre del label se convierte
en un argumento de `break` o `continue`. Aquí un ejemplo de `break`:

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

## Tipos de bucles (loops)

### while

Un ciclo while:

```js
while (condition) {
  // statement
}
```

Ejecuta `statement` tantas veces como la condición se cumpla. Si la condición es
siempre `true`, entonces entra en un `infinite loop` (ciclo infinito).

```js
// infinite loop
while (1 === 1) { }
```

En el siguiente ejemplo, eliminamos todos los elementos del arreglo y los
mostramos en la consola:

```js
const arr = ['a', 'b', 'c'];

while (arr.length > 0) {
  console.log(arr.shift());
}

/*
 *
 * La salida de este código será:
 * a
 * b
 * c
 *
 */
```

### do-while

Un ciclo do-while:

```js
do {
  // statements
} while (condition);
```

Ejecuta los `statements` al menos una vez y luego tantas veces como se cumpla la
condición. Por ejemplo:

```js
const pattern = /^[0-9]+$/;
let line;
do {
  line = prompt('Enter a number:');
} while(!pattern.test(line));
```

### for

En un ciclo for:

```js
for ([init]; [condition]; [post_iteration]) {
  // statements
}
```

`init` es ejecuta una vez antes que inicie el ciclo, que ejecuta `statements`
tantas veces como `condition` sea `true`. Puedes usar `let` para declarar
variables, pero el scope de dicha variable solo será dentro del cliclo.
`post_iteration` se ejecuta luego de cada iteración. Por ejemplo:

```js
const arr = ['a', 'b', 'c'];

for (let i = 0, l = arr.length; i < l; i++) {
  console.log(arr[i]);
}

/*
 *
 * El resultado de este código es:
 * a
 * b
 * c
 *
 */
```
