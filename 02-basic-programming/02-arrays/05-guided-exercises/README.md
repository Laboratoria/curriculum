# Clase Práctica

- Tipo: `practice`
- Formato: `guiado`
- Duración: `3h`

***

## Objetivos

- Practicar codeando junto a tu equipo de profes, resolviendo problemas con las
  estructuras de control de flujo básicas que ya conoces y arreglos.
- Practicar, practicar y practicar

## Enunciados

A continuación tienes más problemas de práctica. Estos problemas serán
resueltos, paso a paso, por tu equipo de profes en una sesión presencial
(`taller`).

Te sugerimos que intentes resolver los ejercicios por tu cuenta (o en equipo)
**antes** de la sesión presencial. Así, ya vienes con dudas específicas y
estarás familiarizada con los retos. Quizás, puedas tú presentar tu solución
ante la clase y así ayudar al resto de tus compañeras :)

### 1. Sum

Crea una función `range` que tome dos argumentos: `start` (principio) y `end`
(fin) y que devuelva un `array` que contenga los números desde el `start` hasta
el `end` (incluyéndolo). A continuación, escribe una función `sum` que tome una
`array` de números y devuelva la suma de estos números. Confirma que al ejecutar
`console.log(sum(range(1,10)))` se imprime el resultado 55. Ahora modifica la
función de rango para tomar un tercer argumento opcional que indique el valor
de "step" utilizado para construir el `array`. Si no se da ningún step, los
elementos del array suben por incrementos de uno, correspondientes al
comportamiento anterior. La llamada  `range(1, 10, 2)` debe devolver
`[1, 3, 5, 7, 9]`. Asegúrate que también funciona con valores de step negativos,
de modo que `range(5, 2, -1)` produce `[5, 4, 3, 2]`.

### 2. Sort (+ Binary Search)

Crea una función que ordene un `array` de números, de menor a mayor. Tip:
utiliza el algoritmo de [`selection sort`](https://en.wikipedia.org/wiki/Selection_sort)
. Revisar otros algoritmos de sorting (por ejemplo: [`insertion sort`]
(<https://en.wikipedia.org/wiki/Insertion_sort#/media/File:Insertion-sort-example-300px.gif>)
y [`bubble sort`]
(<https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif>))

Ahora que ya sabes ordenar un `array`, escribe una función que realice una
búsqueda de un elemento en un arreglo utilizando el algoritmo de `Binary Search`
(recuerda que Lourdes explicó el concepto de Binary Search en la sección de
[casos prácticos](08-practical-cases)).

### 3. Remove Duplicates

Escribe una función que tome un `array` como parámetro y retorne otro `array`
pero sin elementos duplicados.

### 4. Comparison

Escribe una función llamada `areArraysSame` que tome dos `arrays` como
argumentos. Debe devolver verdadero si los dos `arrays` son iguales (es decir,
tienen los mismos números, en el mismo orden) y `false` si son diferentes.

> _Nota: Todos los retos deben validar los inputs antes de correr el programa._
