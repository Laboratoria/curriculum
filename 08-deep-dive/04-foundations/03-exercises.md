# Ejercicios

* Formato: `workshop`
* Duración: `10 min`

***

En esta sección practicaremos los siguientes ejercicios:

## [1. Flujo](https://github.com/Laboratoria/ec-js-deep-dive-exercises/blob/foundations/foundations/00-flow.js)

Calcula la potencia de 2 a un número especificado.

```markdown
Datos de entrada:

10

Resultado:

1024
```

## [2. Flujo y estructuras de control](https://github.com/Laboratoria/ec-js-deep-dive-exercises/blob/foundations/foundations/01-flow.js)

Usar estructuras de control para invertir un arreglo de números.

```markdown
Datos de entrada:

[1,2,3,4,5]

Resultado:

[5,4,3,2,1]
```

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

***

[Continuar](../05-functions/00-overview.md)
