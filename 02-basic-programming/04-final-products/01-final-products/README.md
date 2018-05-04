# Productos finales

- Tipo: `práctica`
- Formato: `self-paced`
- Duración: `4h`

***

## Objetivos

- Es hora de poner a prueba lo que has aprendido: deberás crear dos programas que
  tienen una aplicación en nuestra vida cotidiana. El primero es un programa que
  se utiliza para encriptar mensajes, y el segundo es un programa que verifica si
  un número de tarjeta de crédito es válida.

## Entregables

Para cada producto debes entregar **un repositorio de GitHub** que
contenga:

1. Archivo `README.md` que explique el **pseudocódigo** de tu solución y su
   **diagrama de flujo**
2. Archivo `app.js` con el **código** de tu solución
3. Archivo `index.html` vinculado con tu `app.js`

## Criterios de evaluación

Se tomarán en cuenta las siguientes consideraciones a la hora de evaluar tu solución:

1. Nombramiento de variables
2. Indentación
3. Validación de input: el usuario no debe poder ingresar un campo vacío o de
   tipo que no corresponda
4. Estructura de tus archivos
5. Archivo `README.md` correctamente redactado
6. Uso de comentarios para hacer tu código más legible
7. Que el programa cumpla con el propósito requerido

## Entregables

Para cada producto debes entregar **un repositorio de GitHub** que
contenga:

1. Archivo `README.md` que explique el **pseudocódigo** de tu solución y su
   **diagrama de flujo**
2. Archivo `app.js` con el **código** de tu solución

## 1. Cifrado César

Crea una web que pida, por medio de un `prompt()`, una frase al usuario y
devuelva el mismo mensaje encriptado según el
[algoritmo de Cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
con el parámetro de desplazamiento de **33 espacios hacia la derecha**

Por ejemplo:

- Texto original:   `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
- Texto codificado: `HIJKLMNOPQRSTUVWXYZABCDEFG`

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este reto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

También te compartimos más información de lo que Michelle te ha explicado en el
video anterior:

- [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
- [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
- [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)

> Consideraciones Específicas
  > 1. Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas
  > como minúsculas. La fórmula para descifrar es: `(x - n) % 26`
  > 2. Tu código debe estar compuesto por 2 funciones con los siguientes nombres:
  > `cipher` y `decipher`
  > 3. El usuario no debe poder ingresar un campo vacío o que contenga números

## 2. Tarjeta de crédito válida

Crea una web que pida, por medio de un `prompt()`, el número de una tarjeta de
crédito y confirme su validez según el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
Lee este blog que explica [cómo funciona el algoritmo de Luhn](http://www.quobit.mx/asi-funciona-el-algoritmo-de-luhn-para-generar-numeros-de-tarjetas-de-credito.html).

> Consideraciones Específicas
  >1. Tu código debe estar compuesto por 1 función: `isValidCard`
  >2. El usuario no debe poder ingresar un campo vacío

A continuación un video de Michelle que te lleva a través del algoritmo de Luhn
y te da tips para completar este proyecto:

[![tips credit card](https://img.youtube.com/vi/f0zL6Ot9y_w/0.jpg)](https://www.youtube.com/watch?v=f0zL6Ot9y_w)
