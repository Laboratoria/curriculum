# Operadores

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

En esta lectura vamos a ver algunas peculiaridades sobre los operadoradores de
igualdad (`==`, `!=`, `===`, `!==`). Al final de la lectura te dejamos como
referencia el link a la documentación oficial de operadores y expresiones en MDN
que recomendamos _leer_ (o por lo menos ojear).

## Diferencia entre `==` y `===`

### Algoritmo de `==`

Cuando se evalúan dos valores con este operador, se sigue la secuencia a
continuación para determinar el resultado:

* Si son del mismo tipo, entonces, se prueban con ===.
* Si son de diferente tipo.
  - Si uno es null y otro undefined, retorna true.
  - Si uno es string y otro number, se convierte el string, y se evalúan como
    números.
  - Si uno es booleano, se transforma, true en 1 y false en 0, y se evalúan.
  - Si uno es un object y otro un number o string, convierte el objeto a
    primitivo.
  - En otros casos, devuelve false.

```js
null == undefined // true
10 == '10'        // true
true == 1         // true
[10] == 10        // true
[] == []          // false
```

### Algoritmo de `===`

Esta igualdad es más estricta con sus resultados, utilizando la siguiente
secuencia para determinar el resultado:

* Si tienen diferentes tipos, devuelve false.
* Si ambos son null, devuelve true.
* Si ambos son undefined, devuelve true.
* Si uno o ambos son NaN, devuelve false.
* Si ambos son true o false, devuelve true.
* Si ambos son number y tienen el mismo valor, devuelve true.
* Si ambos son string y tienen el mismo valor, devuelve true.
* En otros casos, devuelve false.

```js
21 === "21"         // false
undefined === null  // false
NaN === NaN         // false
[10] === 10          // false
true === 1           // false
[] === []           // false
'10' === '10'       // true
```

Podrías tener lo siguiente en cuenta para saber cuál operador utilizar:

* Si cualquiera de los valores es boolean, utiliza `===`.
* Si no tienes claro si los valores son convertidos por coerción, usa `===`.
* En otros casos podrías usar con seguridad `==`.

> Nota: Por convención y una buena práctica la comunidad promueve el uso de
`===`.

## Desigualdades

Siempre el resultado de evaluar una desigualdad es un booleano. Los siguientes
operadores son utilizados para comparar desigualdades:

```js
<  → Menor
>  → Mayor
<= → Menor Igual
>= → Mayor Igual
```

Casos de uso:

* Si alguno es un `object`, se convierte a primitivo y se evalúa.
* Si ambos son `string`, se evalúa el orden de los caracteres alfabéticamente.
* Si ambos son `number`, se evalúa.
* En otros casos es false.

```js
[10] < 9    // false, caso 1
"a" < "b"   // true, caso 2
10 >= 10    // true, caso 3
```

## Lecturas complementarias

[Expresiones y Operadores - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
