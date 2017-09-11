# Arreglos

* Formato: `lectura`
* Duración: `Xmin`

***

Un arreglo es una colección de valores accedidos a través de índices (números
naturales que empiezan en 0). Los valores son llamados _array elements_
(elementos del arreglo). La manera más conveniente de crear un arreglo es a
través de un arreglo literal. Este enumera los arreglos del elemento y su
posición especifica su índice implicitamente.

Como primer ejemplo, crearemos un arreglo `arr` con un arreglo literal y
accederemos a sus elementos:

```javascript
> var arr = [ 'a', 'b', 'c' ]; // arreglo literal
> arr[0]; // obtiene el elemento en la posición 0
'a'
> arr[0] = 'x'; // cambia el valor del elemento en la posición 0
> arr;
[ 'x', 'b', 'c' ]
```

Podemos usar la propiedad `length` para obtener la longitud del arreglo, además
podemos usarla para agregar y eliminar elementos:

```javascript
> var arr = [ 'a', 'b', 'c' ];
> arr.length; // cantidad de elementos
3
> arr.length = 2; // elimina el último elemento
> arr;
[ 'a', 'b' ]
> arr[arr.length] = 'd'; // agrega un elemento al final
> arr;
[ 'a', 'b', 'd' ]
```

El método `.push()` provee otra manera de agregar elementos al final de un
arreglo:

```javascript
> var arr = [ 'a', 'b' ];
> arr.push('d');
3
> arr;
[ 'a', 'b', 'd' ];
```
