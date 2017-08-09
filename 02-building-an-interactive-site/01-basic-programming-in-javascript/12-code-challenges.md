# Retos
- Formato: `code`
- Duración: `6hrs`

## Objetivos

- A continuación te presentamos una serie de retos que debes completar para poner tus conocimientos a prueba.

***

## 1. Cifrado César
Crea una web que pida, por medio de un `prompt()`, una frase al usuario y devuelva el mismo mensaje encriptado según el [Cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar) con con el parámetro de desplazamiento de **seis (6) espacios hacia la derecha**

Por ejemplo:
- Texto orginal: `Laboratoria`
- Texto cifrado: ` `.

### Tips para Cifrado César
A continuación un video de Michelle que te lleva a través de la fórmula matemática del Cifrado César y un par de cosas más que debes saber para resolver este reto. Escúchala con detenimiento y sigue sus consejos! :)

[![tips ceasar cipher](https://img.youtube.com/vi/QP9FF9eoh-k/0.jpg)](https://www.youtube.com/watch?v=QP9FF9eoh-k)

Aquí te presentamos información que cubrió Michelle en su video para que la tengas a mano:

#### Tabla ASCII/Unicode

```js

A  B  C  D  E  F  G  H  I  J  K  ...
|  |  |  |  |  |  |  |  |  |  |
65 66 67 68 69 70 71 72 73 74 75 ...

```

#### Accediendo a los Unicode: `charCodeAt()` & `fromCharCode()`:

```js
console.log("ABC".charCodeAt(0));
// → 65

console.log("ABC".charCodeAt(1));
// → 66

console.log("ABC".charCodeAt(2));
// → 67

console.log(String.fromCharCode(65, 66, 67));
// → ABC
```


## 2. Tarjeta de crédito válida

Crea una web que pida, por medio de un `prompt()`, el número de una tarjeta de crédito y confirme su validez, según el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).

### Tips para tarjeta de crédito válida

A continuación un video de Michelle que te lleva a través del algoritmo de Luhn y te da tips para completar este proyecto:

[![tips credit crad](https://img.youtube.com/vi/QP9FF9eoh-k/0.jpg)](https://www.youtube.com/watch?v=QP9FF9eoh-k)

## 3. Replit
Completa los ejercicios de programación básica del salón de clases de:
* [Replit 04-data-structures](https://repl.it/classroom/invite/HJk9VaQ)

## 4. Javascripting
Completa el turorial de JavaScript de la comunidad de nodejs:
* [javascripting](https://github.com/workshopper/javascripting)

***
[Continuar](08-solutions-code-challenges-control-flow.md)
