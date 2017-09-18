# Clase Práctica
- Tipo: `taller`
- Formato: `guiado`
- Duración: `120min`

## Objetivos
- Practicar codeando junto a tu equipo de profes, resolviendo problemas de estructuras condicionales, repetitivas y funciones
- Practicar, practicar y practicar
***

## Enunciados
A continuación tienes más problemas de práctica. Estos problemas serán resueltos, paso a paso, por tu equipo de profes en una sesión presencial (`taller`).

Te sugerimos que intentes resolver los ejercicios por tu cuenta (o en equipo) **antes** de la sesión presencial. Así, ya vienes con dudas específicas y estarás familiarizada con los retos. Quizás, puedas tú presentar tu solución ante el resto de la clase y así ayduar al resto de tus compañeras :)

#### 1. Sum
Crea una función `range` que tome dos argumentos: `start` (principio) y `end` (fin) y que devuelva un `array` que contenga los números desde el `start` hasta el `end` (incluyéndolo). A continuación, escribe una función `sum` que tome una `array` de números y devuelva la suma de estos números. Confirma que al ejecutar `console.log(sum(range(1,10)))` se imprime el resultado 55. Ahora modifica la función de rango para tomar un tercer argumento opcional que indique el valor de "step" utilizado para construir el `array`. Si no se da ningún step, los elementos del array suben por incrementos de uno, correspondientes al comportamiento anterior. La llamada  `range(1, 10, 2)` debe devolver `[1, 3, 5, 7, 9]`. Asegúrate que también funciona con valores de step negativos, de modo que `range(5, 2, -1)` produce `[5, 4, 3, 2]`.

#### 2. Scorekeeper
Imagina que estás jugando un juego con algunos amigas y quieres ir registrando el puntaje de cada una. Crea un `object` llamado `scores` donde los _keys_ o propiedades son los nombres de tus amigas, y los valores serán los puntajes (todos empiezan con 0).

Escribe una función que toma dos argumentos, el nombre de tu amiga y la cantidad de puntos nuevos que ha obtenido, y que actualice los puntos de la jugadora en el `object` scores. También escribe una función que imprima en la consola el total de los puntos.

#### 3. Sort (+ Binary Search)
Crea una funcion que ordene un `array` de números, de menor a mayor. Tip: utiliza el algoritmo de [`selection sort`](https://en.wikipedia.org/wiki/Selection_sort). Revisar otros algoritmos de sorting (por ejemplo: [`insertion sort`](https://en.wikipedia.org/wiki/Insertion_sort#/media/File:Insertion-sort-example-300px.gif) y [`bubble sort`](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif))

Ahora que ya sabes ordenar un `array`, escribe una función que realice una búsqueda de un elemento en un arreglo utilizando el algoritmo de `Binary Search` (recuerda que Lourdes explicó el concepto de Binary Search en la sección de [casos prácticos](08-practical-cases.md)).  

#### 4. Remove Duplicates
Escribe una función que tome un `array` como parámetro y retorne otro `array` pero sin elementos duplicados.

#### 5. Comparison
Escribe una función llamada `areArraysSame` que tome dos `arrays` como argumentos. Debe devolver verdadero si los dos `arrays` son iguales (es decir, tienen los mismos números, en el mismo orden) y `false` si son diferentes.

#### 6. Cajero automático
Crea un programa que un cajero automático pueda utilizar para determinar el número **mínimo** de billetes a entregar dado un monto solicitado. El cajero empieza con:
* 100 billetes de 100
* 50 billetes de 20
* 200 billetes de 20
* 300 billetes de 10
* 500 billetes de 5
* 800 billetes de 1

#### 7. Reserva de asientos en aerolínea.
Una pequeña aerolínea acaba de comprar una computadora para su nuevo sistema de reservaciones automatizada. Se te ha pedido que desarrolles el nuevo sistema usando `promt` y `alert` solamente. Escribirás una aplicación para asignar asientos en cada vuelo del único avión de la aerolínea (capacidad: 10 asientos). 

Tu aplicación debe mostrar las siguientes alternativas: Por favor escriba 1 para Primera Clase y Por favor escriba 2 para Económico.

Si el usuario escribe 1, tu aplicación debe asignarle un asiento en la sección de primera clase (asientos 1 a 4). Si el usuario escribe 2, tu aplicación debe asignarle un asiento en la sección económica (asientos 5 a 10).

Tu aplicación deberá entonces imprimir un pase de abordar, indicando el número de asiento de la persona y si se encuentra en la sección de primera clase o clase económica.


#### _Nota: Todos los retos deben validar los inputs antes de correr el programa._

***
[Continuar](12-code-challenges.md)
