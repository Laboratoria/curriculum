# **HITO 6:** Refactorización y modularización

**Este hito es opcional**👀, pero es importante considerarlo si llevas menos de 5 sprints en el proyecto. La refactorización y la modularización pueden mejorar la estructura y la organización de la aplicación, lo que la hace más fácil de entender y mantener. Para evaluar si necesitas realizar la refactorización y la modularización, puedes hacerte las siguientes preguntas:

* ¿El código de mi aplicación es difícil de entender?
* ¿Es difícil mantener el código de mi aplicación?
* ¿El código de mi aplicación es eficiente?
* ¿El código de mi aplicación es escalable?

El objetivo de este hito es mejorar la estructura y la organización de la aplicación, mediante la refactorización y la modularización.

## Tareas de este hito

* Identificar las partes de la aplicación que pueden dividirse en componentes más pequeños.

Para esta tarea, deberás examinar la aplicación y buscar áreas que puedan dividirse en componentes más pequeños. Algunas cosas a tener en cuenta son:

1. Funciones que realizan tareas independientes.
2. Datos que se utilizan de forma independiente.
3. Interfaz de usuario que se puede dividir en partes más pequeñas.

* Implementar la división de los componentes más pequeños.

Una vez que hayas identificado las partes que pueden dividirse, deberás implementar la división en componentes más pequeños. Esto puede hacerse de varias maneras, como:

1. Crear nuevos componentes a partir de código existente.
2. Mover código existente a componentes existentes.
3. Reestructurar el código existente para que sea más modular.

* Probar la aplicación para asegurarse de que funciona correctamente después de la refactorización.

Es importante probar la aplicación después de la refactorización para asegurarse de que funciona correctamente. Esto puede hacerse probando la aplicación manualmente o utilizando un marco de pruebas automatizado.

### Ejemplo

Imaginemos que tenemos una aplicación que muestra una lista de personajes. La aplicación tiene una vista que muestra la lista de personajes, y una función que obtiene los datos de los personajes.

Para mejorar la estructura y la organización de la aplicación, podemos dividir la función ```getCharacters()``` en dos componentes más pequeños:

1. Un componente ```CharacterRepository``` que se encarga de obtener los datos de los personajes.

2. Un componente ```CharacterList``` que se encarga de mostrar la lista de personajes.

Esta división nos permite separar la lógica de obtención de datos de la lógica de visualización. Esto hace que la aplicación sea más fácil de entender y mantener.

### Importancia de la refactorización y la modularización

La refactorización y la modularización son dos técnicas importantes para mejorar la estructura y la organización de una aplicación. La refactorización nos permite mejorar el código existente sin cambiar su comportamiento. La modularización nos permite dividir una aplicación en componentes más pequeños, lo que facilita su comprensión y mantenimiento.

Al dividir una aplicación en componentes más pequeños, podemos lograr los siguientes beneficios:

* Mejora la legibilidad y la comprensión del código.
* Facilita el mantenimiento y la actualización del código.
* Reduce la complejidad de la aplicación.
* Mejora el rendimiento de la aplicación.

Por lo tanto, es importante considerar la refactorización y la modularización al desarrollar una aplicación.

[👈Todos los hitos](../README.md#6-hitos)
