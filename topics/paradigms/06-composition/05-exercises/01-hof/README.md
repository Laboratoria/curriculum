---
env: cjs
---

# Higher Order Functions

Una función de orden superior (higher-order function) es una función que cumple
por lo menos una de estas condiciones:

* Recibe una o más funciones como input
* Devuelve una función

Todas las demás funciones son de primer orden (first order functions). [1]

A diferencia de muchos otros lenguajes con características imperativas,
JavaScript nos permite usar higher-order functions ya que tiene funciones
"first-class". Lo que significa que las funciones pueden ser tratadas como
cualquier otro valor en JavaScript: igual que Strings o Numbers, valores de tipo
Function pueden ser almacenados en variables, propiedades de objetos o pasados
a otras funciones como argumentos. Los valores de tipo Function de hecho son
Objects (que heredan de `Function.prototype`), así que podemos incluso añadir
propiedades y asignar valores igual que en cualquir otro objeto.

La principal diferencia entre las funciones y el resto de valores en JavaScript
es la sintáxis de invocación. Si una referencia a una función está seguida de
paréntesis y opcionalmente una lista de argumentos separados por comas:
`someFunctionValue(arg1, arg2, etc)`, entonces el cuerpo de la función será
ejecutada con los argumentos pasados (si hubiere).

En este ejercicio vamos a demostrar que las funciones pueden ser pasadas como
valores. Te vamos a pasar una función como argumento.

## Tarea

Implementa una función que reciba una función como primer argumento, y un número
`num` como segundo argumento. La función debe ejecutar la función `num` veces.

Usa el boilerplate provisto para empezar. Todos (o casi todos) los ejercicios
incluirán un boilerplate.

## Argumentos

* `operation`: Una función, no recibe argumentos, no retorna ningún valor útil.
* `num`: el número de veces que queremos invocar `operation`

## Pistas

* No lo des demasiadas vueltas, el código debe ser muy simple.
* No pasa nada si usas un loop. Bonus para quien implemente usando recursión.
* No te despistes si ves output. Esto viene de la función que te estamos pasando.
* No tienes que usar console.log para nada.

## Recursos

* [Funciones y alcance de la función - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions_and_function_scope)
* [Function.prototype - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)
