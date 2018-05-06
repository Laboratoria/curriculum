# Ejercicios

* Formato: `workshop`
* Duración: `10 min`

***

En esta sección practicaremos los siguientes ejercicios:

## [3. Objetos y comparación](https://github.com/Laboratoria/ec-js-deep-dive-exercises/blob/foundations/foundations/02-structures.js)

Comparación de objetos y estructuras anidadas de objetos. Revisar que dos
objetos son exactamente los mismos.

```markdown
Datos de entrada:

let obj1 = { obj1: "elemento" };
let obj2 = obj1;

Resultado:

true
```

## [4. Objetos preconstruidos](https://github.com/Laboratoria/ec-js-deep-dive-exercises/blob/foundationsfoundations/03-objects.js)

Escribe, a partir de una expresión regular, una funcion que permita validar los
elementos de un arreglo que son números soportados por Javascript y entregue
como salida un arreglo con los que sí son números. Por ejemplo, son números
aquellos que tienen un sígno menor antes del número (-10), o aquellos que tienen
un punto decimal después de un número (1.1).

```markdown
Datos de entrada:

['3', '.4', '.', '3+3']

Resultado:

['3', '.4']
```

> **Hint:** Revisa sintaxis de [expresiones regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
así como [RegExr](https://regexr.com/) para ayudarte a construir la expresión
regular.
