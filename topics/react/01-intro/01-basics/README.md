# ¿Qué es `React`?

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `4min`

***

`React` es una librería (no un *framework*, una ***librería***) open source
desarrollada por Facebook para crear interfaces de usuario, a través de
componentes dinámicos y reusables.

Uno de los principales beneficios de `React` es que nos permite crear ***single
page apps*** de una manera ordenada, más simple y mantenible.

`React` es uno de los principales actores en el movimiento de la programación
funcional dentro del mundo JavaScript. Es decir que en `React` preferimos la
composición por sobre la herencia y nos alineamos con los principios de
inmutabilidad.

Por debajo, `React` usa una estructura llamada `Virtual DOM` que se encarga de
renderizar granularmente los nodos, dependiendo de los cambios de estado de la
aplicación, realizando la menor cantidad posible de modificaciones al `DOM`,
para mantener la interfaz actualizada.

## ¿Cómo funciona el `Virtual DOM`?

Piensa en el `Virtual DOM` como un espejo del estado actual del `DOM`.

Cada vez que sucede una acción, `React` se encarga de tres cosas:

1. propaga los efectos colaterales de esas acciones en el `Virtual DOM`
2. análiza las diferencias (`diff`) para ver qué sub-árboles han cambiado en
   relación a la "versión anterior"
3. y por último realiza una "reconciliación", donde actualiza el `DOM` con el
   resultado del `diff`

Esto quiere decir que cuando hay un cambio en el `Virtual DOM`, solo los
sub-árboles modificados son reemplazados en el `DOM`. Entonces, si por ejemplo
tenemos un `input`, donde el usuario ha ingresado un valor y hay un cambio en el
`Virtual DOM`, mientras ningún nodo padre del `input` haya sido marcado para
"reconciliación", el texto queda inalterado.

En el siguiente video puedes ver por que `React` (Virtual DOM) y `HTML` se
llevan tan bien:

[![React y HTML](https://img.youtube.com/vi/BYbgopx44vo/0.jpg)](https://www.youtube.com/watch?v=BYbgopx44vo)

## Recursos recomendados

* [Documentacion oficial](https://facebook.github.io/react/) (en inglés)
* [Recursos de `React` en español](https://github.com/jlobos/react-espanol)
