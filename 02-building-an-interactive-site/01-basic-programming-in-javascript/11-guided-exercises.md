# Clase Práctica
- Formato: `guided-learning`
- Tipo: `clase presencial`
- Duración: `120min`

## Objetivos
- Practicar codeando junto a tu equipo de profes, resolviendo problemas de estructuras condicionales, repetitivas y funciones
- Practicar, practicar y practicar
***

## Enunciados
A continuación tienes más problemas de práctica. Estos problemas serán resueltos, paso a paso, por tu equipo de profes en una sesión presencial (`workshop`).
Te sugerimos que intentes resolver los ejercicios por tu cuenta (o en equipo) **antes** de la sesión presencial. Así, ya vienes con dudas específicas y estarás familiarizada con los retos. Quizás, puedas tú presentar tu solución ante el resto de la clase y así ayduar al resto de tus compañeras :)

#### 1. Sum
Crea una función `range` que tome dos argumentos: `start` (principio) y `end` (fin) y que devuelva un `array` que contenga los números desde el `start` hasta el `end` (incluyéndolo).
A continuación, escribe una función `sum` que tome una `array` de números y devuelva la suma de estos números.
Confirma que al ejecutar `console.log(sum(range(1,10)))` se imprime el resultado 55.
Ahora modifique su función de rango para tomar un tercer argumento opcional que indique el valor de "step" utilizado para construir el `array`. Si no se da ningún step, los elementos del array suben por incrementos de uno, correspondientes al comportamiento anterior. La llamada  `range(1, 10, 2)` debe devolver `[1, 3, 5, 7, 9]`. Asegúrate que también funciona con valores de step negativos, de modo que `range(5, 2, -1)` produce `[5, 4, 3, 2]`.

#### 2. Search
Crea una funcion que busquen un elemento en un `array`, devolviendo su posición (index) e imprima el valor en la consola. Tip: utiliza el algoritmo de [`linear search`](https://en.wikipedia.org/wiki/Linear_search)

#### 3. Sort
Crea una funcion que ordene un `array` de números, de menor a mayor. Tip: utiliza el algoritmo de [`selection sort`](https://en.wikipedia.org/wiki/Selection_sort)

#### 4. Remove Duplicates
Escribe una función que tome un `array` como parámetro y retorne otro `array` pero sin elementos duplicados.

#### 5. Comparison
Escribe una función llamada `areArraysSame` que tome dos `arrays` como argumentos. Debe devolver verdadero si los dos `arrays` son iguales (es decir, tienen los mismos números, en el mismo orden) y `false` si son diferentes.

#### 6. Cajero automático
Crea un programa que un cajero automático pueda utilizar para determinar el número **mínimo** de billetes a entregar dado un monto solicitado. El cajero cuenta empieza con:
* 100 billetes de 100
* 50 billetes de 20
* 200 billetes de 20
* 300 billetes de 10
* 500 billetes de 5
* 800 billetes de 1

#### 7. Array to Object
Escribe una función que tome un array 2D y devuelva un objeto con cada par de elementos en el `array` como un par _key-value_.
Por ejemplo:
- Input
```js
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
```
- Output
```js
{
  make : 'Ford'
  model : 'Mustang',
  year : 1964
}
```
También escribe una función que haga lo contrario. Transforme los pares _key-value_ de un `object` en un `array 2D`.
#### _Nota: Todos los retos deben validar los inputs antes de correr el programa._

***
[Continuar](09-code-challenges-data-structures.md)
