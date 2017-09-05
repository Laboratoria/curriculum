# Implementación por pares

* Tipo: `taller`
* Formato: `self-paced`
* Duración: `90min`

## Objetivos de la lección

* Refactorizar `Loader` (`src/lib/loader.js`) para evitar `this`.

***

En este workshop refactorizarás un _módulo_ llamado `Loader` de un video juego
ya existente (el que usamos en el curso anterior). Este módulo se encarga de
pre-cargar imágenes del juego y tiene dos métodos:

* `loadImage(key, src)`
* `getImage(key)`

El código de `Loader` lo puedes encontrar en `src/lib/loader.js`. Verás que
está implementado como un objeto con una serie de métodos que comparten estado
a través del uso de la pseudovariable `this`.

La tarea es refactorizar `Loader` de tal forma que sea una función que crea un
objeto con los métodos `loadImage` y `getImage`. La implementación debe hacer
uso de estilo funcional, compartiendo estado de forma explícita a través de
argumentos en vez de `this`.

El repositorio ya incluye una serie de tests unitarios que `Loader` debe pasar
para cumplir con todos los requisitos.

```sh
npm install
npm test
```
