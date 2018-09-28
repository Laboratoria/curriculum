# Implementación por pares

* Tipo: `taller`
* Formato: `self-paced`
* Duración: `90min`

## Objetivos de la lección

* Refactorizar...

***

En este workshop refactorizarás un _módulo_ llamado `Camera` de un video juego
ya existente (el que usamos en el curso anterior). Este módulo se encarga de
seguir el movimiento del personaje para que siempre veamos la porción del mapa
donde está el héroe.

El código de `Camera` lo puedes encontrar en `src/lib/camera.js`. Verás que
está implementado como un constructor con dos métodos  en su prototipo
(`follow(sprite)`) y `update()`, que comparten estado a través del uso de la
pseudovariable `this`.

La tarea es refactorizar `Camera` de tal forma que sea una función que crea un
objeto con los métodos `follow` y `update`. La implementación debe hacer
uso de estilo funcional, compartiendo estado de forma explícita a través de
argumentos en vez de `this`.

El repositorio ya incluye una serie de tests unitarios que `Camera` debe pasar
para cumplir con todos los requisitos.

Puedes instalar las dependencias y correr los tests con los siguientes comandos:

```sh
npm install
npm test
```
