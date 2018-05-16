# Implementación por pares

* Tipo: `taller`
* Formato: `self-paced`
* Duración: `90min`

## Objetivos de la lección

* Refactorizar...

***

En este workshop refactorizarás un _módulo_ llamado `Map` de un video juego
ya existente (el que usamos en el curso anterior). Como indica el nombre, este
módulo se encarga de manejar el mapa del juego, además de servir de base para
que los diferentes mapas "hereden" del constructor `Map`.

El código de `Map` lo puedes encontrar en `src/lib/map.js`. Verás que está
implementado como un constructor con varios métodos en su prototipo además de
heredar de `EventEmitter` via herencia prototipal.

La tarea es refactorizar `Map` de tal forma que sea una función que crea un
objeto con los métodos necesarios. La implementación debe hacer
uso de estilo funcional, compartiendo estado de forma explícita a través de
argumentos en vez de `this`.

Los métodos a implementar son:

* `getTile(layer, col, row)`
* `collide(x, y)`
* `isSolidTileAtXY(x, y)`
* `getCol(x)`
* `getRow(y)`
* `getX(col)`
* `getY(row)`

Nótese que `Map` tendrá que dejar de heredar de `EventEmitter` a través de
herencia prototipal, y en vez hacer uso de un objeto de tipo `EventEmitter` que
nos permita proporcionar la funcionalidad necesaria.

También debes refactorizar los mapas en `src/maps/` para asegurarte de que usan
la nueva versión de `Map` correctamente.

El repositorio ya incluye una serie de tests unitarios que `Map` debe pasar
para cumplir con todos los requisitos.

Puedes instalar las dependencias y correr los tests con los siguientes comandos:

```sh
npm install
npm test
```
