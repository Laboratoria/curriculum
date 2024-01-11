# **HITO 6:** Refactorización y modularización

El objetivo de este **hito opcional** es mejorar la estructura
y la organización de la aplicación mediante la refactorización
y la modularización.

La refactorización y la modularización son dos técnicas importantes
para mejorar la estructura y la organización de una aplicación.
La refactorización nos permite mejorar el código existente sin
cambiar su comportamiento. La modularización nos permite dividir
una aplicación en componentes más pequeños, lo que facilita su comprensión y mantenimiento.

 Al dividir una aplicación en componentes más pequeños,
 podemos lograr los siguientes beneficios:

* Mejora la legibilidad y la comprensión del código.
* Facilita el mantenimiento y la actualización del código.
* Reduce la complejidad de la aplicación.
* Mejora el rendimiento de la aplicación.

## Tareas de este hito

* Identificar las partes de la aplicación que
pueden dividirse en componentes más pequeños.

Para esta tarea, deberás examinar la aplicación y buscar áreas
que puedan dividirse en componentes más pequeños.
Algunas cosas a tener en cuenta son:

1. Funciones que realizan tareas independientes.
2. Datos que se utilizan de forma independiente.
3. Interfaz de usuario que se puede dividir en partes más pequeñas.

* Implementar la división de los componentes más pequeños.

Una vez que hayas identificado las partes que pueden dividirse,
deberás implementar la división en componentes más pequeños.
Esto puede hacerse de varias maneras, como:

1. Crear nuevos componentes a partir de código existente.
2. Mover código existente a componentes existentes.
3. Reestructurar el código existente para que sea más modular.

* Probar la aplicación para asegurarse de que funciona correctamente
después de la refactorización.

Es importante probar la aplicación después de la refactorización para
asegurarse de que funciona correctamente. Esto puede hacerse probando
la aplicación manualmente o utilizando un marco de pruebas automatizado.

### Ejemplo

Imaginemos que tenemos una aplicación que muestra una lista de personajes.
La aplicación tiene una vista que muestra la lista de personajes,
y una función que obtiene los datos de los personajes.

Para mejorar la estructura y la organización de la aplicación,
podemos dividir la función ```getCharacters()``` en dos componentes
más pequeños:

1. Un componente ```CharacterRepository``` que se encarga de obtener
los datos de los personajes.

2. Un componente ```CharacterList``` que se encarga de mostrar la lista de personajes.

Esta división nos permite separar la lógica de obtención de datos
de la lógica de visualización. Esto hace que la aplicación sea más
fácil de entender y mantener.

[👈Todos los hitos](../README.md#6-hitos)
