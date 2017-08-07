# Cifrado César
- Formato: `code`
- Duración: `120min`

## Enunciado

Crea una web que pida, por medio de un `prompt()`, una frase al usuario y devuelva el mismo mensaje encriptado según el [Cifrado César](https://es.wikipedia.org/wiki/Cifrado_C%C3%A9sar) con con el parámetro de desplazamiento de **seis (6) espacios hacia la derecha**

Por ejemplo:
- Texto orginal: `Laboratoria`
- Texto cifrado: ` `.

## Aprendiendo cosas nuevas

Tal como sucede en el mundo real, cuando te enfrentas a desarrollar un producto o un proyecto nuevo, debes **aprender** cosas nuevas. A continuación te damos un poco de información que es útil para completar este reto:

#### ASCII / Unicode

Las computadoras guardan info en bits. Un número 100 en bits es `1010..`. Pero luego de que las computadoras procesan números, la gente dijo que tal si procesan palabras también. Entonces, arbritariamente -pero universalmente- se definió una asociación de números con letras. Esto se conoce como ASCII. De tal manera que el número 65 es la "A".
```js

  A  B  C  D  E  F  G  H  I  J  K  ...
  |  |  |  |  |  |  |  |  |  |  |
  65 66 67 68 69 70 71 72 73 74 75 ...

```

En un entorno JavaScript tenemos un par de métodos que nos permite acceder a los Unicode. Éstos son: `charCodeAt()` & `fromCharCode()`. Aquí un ejemplo de cómo usarlos:

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

#### Fórmula de Cifrado César

Otra cosa que necesitas saber es que la fórmula matemática para describir el desplazamiento `n` de letra `x` es:

```js

Valor encriptado de (x) = (x + n) % 26
```

Es necesario el módulo porque si el desaplazamiento es mayor a 27 pasas a dar la vuelta.

## Tips

A continuación un video de Michelle que te da tips y te ayuda a enfrentar este reto. Escúchala con detenimiento y sigue sus consejos! :)

[![tips ceasar cipher](https://img.youtube.com/vi/QP9FF9eoh-k/0.jpg)](https://www.youtube.com/watch?v=QP9FF9eoh-k)

***
