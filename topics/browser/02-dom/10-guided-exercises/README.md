---
type: practice
duration: 120min
---

# Clase Práctica

## Objetivos

- Practicar resolviendo problemas de estructuras condicionales, repetitivas y
  funciones
- Practicar, practicar y practicar

***

## Enunciados

A continuación tienes más problemas de práctica.

### 1. Tic Tac Toe

Crea una página web que implemente el juego Tic Tac Toe (también conocido como
gato, michi, tres en línea, etc). Este es un divertido juego entre dos jugadores
**X** y **O**, quienes marcan los espacios de un tablero 3x3 alternadamente,
el ganador es quien primero consigue tener una línea horizontal, vertical o
diagonal de 3 espacios consecutivos con su elemento.
Para esto deberás crear el tablero directamente en el archivo html y la
funcionalidad se desarrollará mediante uso del DOM.

Para desarrollar el juego debemos tener en cuenta ciertos puntos:

1. Debes contar con un botón **RESET** para limpiar el tablero y comenzar a
   jugar desde cero.
2. Bajo el tablero deberás indicar, al finalizar, qué elemento fue el ganador
   o si se produjo un empate.
3. Deben poder participar ambos jugadores, por ejemplo: el primer click
   corresponde al elemento **X** y el siguiente click automáticamente
   corresponde al elemento **O**, pudiendo así alternarse ambos turnos.

![Tic Tac Toe](https://d30y9cdsu7xlg0.cloudfront.net/png/25029-200.png)

### 2. Creando animación en el DOM

Necesitamos generar 12 cuadros blancos en filas de 3. Uno de esos cuadros
será de un color diferente. Necesitamos mover ese cuadro a través de los
cuadros blancos usando las flechas del teclado.

En el siguiente video explicamos un poco más el ejercicio:

[![Animación DOM](https://img.youtube.com/vi/LtfSKzCjCC4/0.jpg)](https://www.youtube.com/watch?v=LtfSKzCjCC4)

### 3. Freelancer v2

¿Recuerdas el reto de código de [Freelancer](https://github.com/Laboratoria-learning/freelancer)?
Ahora, nos enfocaremos en replicar la funcionalidad de la sección de `Portfolio`
que es el modal al dar click sobre cada una de las imágenes. Debe quedar como
en la siguiente imagen:

![Freelancer Portfolio](https://media.giphy.com/media/xT9IgDSValpayTy8QE/giphy.gif)

### 4. Nuestras Coders v2

¿Recuerdas el ejercicio guíado de [Nuestras Coders](https://lms.laboratoria.la/cohorts/test/courses/interactive-site/00-html-and-css/14-guided-exercises)?
Ahora agregaremos un filtro para seleccionar a las coders dependiendo de su sede.
Al final, deberá quedarte algo así:

![Nuestras Coders](https://media.giphy.com/media/xT9IgwHr6d1LObJt16/giphy.gif)

### 5. Captcha

En la vida diaria usamos servicios que generan el **CAPTCHA**.
El más usado es el de Google, puedes encontrar su documentación [aquí](https://developers.google.com/recaptcha/docs/display?authuser=1).
Estos CAPTCHA tienen como objetivo final poder identificar si eres o no un
humano y van cambiando conforme avanza la tecnología.

Inicialmente consistía en un conjunto de imágenes que el usuario debía
determinar el contenido de las mismas e indicarlo al sistema. Hoy en día
evalúan tu comportamiento en el navegador, y de tener dudas te pide evaluar un
conjunto de imágenes mucho más grande.

Armaremos un Captcha (tal cual se muestra en el diseño de abajo), este
comprobará que el usuario escriba lo mismo que el Captcha que le
proporcionaremos. El valor ingresado se evaluará al momento de que el usuario
haga clic en el símbolo **✓** y se generará otro código cuando el usuario haga
clic en el símbolo **↻**.

Dato: Genera los números y letras de manera random

- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

![Captcha](https://fotos.subefotos.com/299269b4ed8aac7e0a445f0c76355612o.gif)
