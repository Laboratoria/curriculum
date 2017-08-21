# Casos prácticos (videos)
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `60min`

## Objetivos

- Entender, a través de casos prácticos, cómo aplicar los conceptos de `funciones`, `arrays` y `objetos` para la resolución de problemas

***

## Enunciados

Al igual que hemos hecho antes, es hora de aplicar los conceptos aprendidos para resolver problemas.

A continuación tendrás varios problemas que debemos resolver. Intenta resolverlos primero por tu cuenta. Más abajo encontrarás las soluciones de Michelle. Después de haberlo intentado, compara tus soluciones con las de Michelle.   

#### 1. Reverse
Crea una función que invierta el orden de los elementos de un `array`. Completa este reto de dos maneras: en una, el `array` invertido es un _nuevo_ `array`; en la segunda, modifica el mismo `array` que se proporciona como argumento.

#### 2. Search
Crea una funcion que busquen un elemento en un `array`, devolviendo su posición (index) e imprima el valor en la consola. Tip: utiliza el algoritmo de [`linear search`](https://en.wikipedia.org/wiki/Linear_search)

A continuación un video de Ruth que te lleva a través del algoritmo Linear Search y te da tips para completar este proyecto:

[![Algoritmo Linear Search](https://preview.ibb.co/hC8ZNQ/tip.jpg)](https://youtu.be/9bSxvExfFhc)


#### 3. Array to Object
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

## Solucionarios

A continuación, Michelle te explica cómo resolvió cada uno de los ejercicios anteriores.  

#### 1. -----

[![-----]()

#### 2. A continuación, Ruth te explica cómo resolvió el ejercicio Search en el siguiente video

[![Ejercicio Search](https://preview.ibb.co/ckTXbk/ejericio.jpg)](https://youtu.be/iDdTKx4wuVQ)

El resultado final es:
```javascript
function search(array, element) {
  for (var i = 0; i < array.length; i++) {
    if (element === array[i]) {
      return i;
    }
  }
	
  return 'No se ha encontrado tu número';
}

var arrayExample = [1, 13, 4, 8];
console.log(search(arrayExample, 7));
```

#### 3. -----

[![-----]()

***

[Continuar](09-quiz-1.md)
