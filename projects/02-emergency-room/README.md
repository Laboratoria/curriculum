# Sala de Emergencias

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Hacker edition](#5-hacker-edition)

## 1. Preámbulo

Los datos son un conjunto de hechos agrupados de manera desorganizada, mientras
que la información son datos puestos en contexto y analizados en éste. Una disciplina
que ha tomado mucha valoración últimamente es la minería de datos, esto debido a
la necesidad de analizar y extraer mucha cantidad de información.

Estamos en un momento en que es vital saber manipular datos, transformarlos
de una forma tal de que nos entreguen valor, que nos permita tomar decisiones y nos
ayude a entender el mundo que nos rodea.

Un caso especial, y que es crítico en los hospitales, es manejar cuándo se
atenderán los pacientes que llegan a la sala de emergencias. El análisis de la información
nos puede permitir asignar médicos y salas que siempre son escasas a quienes más
lo necesitan. Para esto se ha inventado un sistema de categorización de pacientes,
donde no importa el orden de llegada sino su gravedad de acuerdo a esta tabla:

![Categorización-UEH-660x1025](https://user-images.githubusercontent.com/7809496/71842401-4d6b4e00-30a0-11ea-9784-910bcc7b2a8a.png)

En el caso de pacientes graves estos pasan inmediatamente a atenderse con un
médico. Los de mediana gravedad deberán esperar por una camilla libre, en caso de
que haya más de un paciente en esta categoría se ordenarán por su hora de llegada.
Los demás pacientes se ordenarán por categoría primero y luego por llegada y pasarán
solo si es que no hay alguien de mayor prioridad esperando por atención.

## 2. Resumen del proyecto

En esta ocasión tendrán que hacer duplas para crear un sistema de colas para la
sala de emergencia de __LabSalud__, hospital que ha solicitado a ustedes ayuda
para el desarrollo de una aplicación web.

![Free to use from https://pxhere.com/es/photo/599363](emergency-room.jpg)

Los requisitos que pide __LabSalud__ para este sistema son:

* Se debe poder ingresar un paciente, guardando su nombre, edad, género, descripción
de la emergencia y categoría de la emergencia.
* Se debe poder ver las salas de atención y si están ocupados por un paciente (de
preferencia mostrar su nombre y categoría de emergencia).
* Se debe poder ver la cola de atención ordenada según el nivel de emergencia
de cada paciente.
* Se debe poder hacer pasar un paciente de la cola a atender en una de las salas
de atención, avisando el nombre de quien debe pasar y a cual sala.

Para facilitar el desarrollo tomen en cuenta los siguientes consejos:

* Quien usa el sistema es la doctora a cargo de categorizar los pacientes y
nadie más. Su pantalla también es visible en la televisión del hospital.
* Todo debe estar en una sola pantalla con resolución de TV (1280x720),
considera esto al diseñar la interfaz.
* __LabSalud__ tiene 6 salas de atención en estos momentos, pero sería genial si
la aplicación permitiera cambiar el número de boxes fácilmente. En primer lugar
como una constante dentro de la aplicación y en una segunda iteración como una
configuración que la usuaria puede ingresar.

## 3. Objetivos de aprendizaje

### Comunes

1. Aplicar y profundizar todo lo que ya aprendiste.
2. Pensar en las necesidades de las personas para crear historias de usuario.
3. Escribir y trabajar con historias de usuario, sus definiciones de terminado
(_definition of done_) y criterios de aceptación como herramienta central de la
organización y planificación de tu trabajo.
4. Se te recomienda pensar en _test driven development_ al momento de programa la
solución. Les tocará escribir las pruebas unitarias, aprovechen la oportunidad para
empezar por ese archivo para luego escribir la funcionalidad.

### FrontEnd

1. El objetivo principal de este proyecto es que se familiaricen con el uso de
arreglos y diccionarios, incluso que los combinen para obtener estructuras de
datos más complejas que te permitan resolver problemas grandes de datos.
2. Dominar la manipulación del DOM para hacer aplicaciones interactivas y
dinámicas sin necesidad de tener todo en HTML o varios archivos de HTML, sino
que generando y modificando HTML desde JavaScript.
3. Usar eventos del DOM, como clicks o entradas de texto, para interactuar
con los usuarios.
4. Perfeccionar tus habilidades de diseño y CSS para lograr una interfaz que
permita tener todos los elementos pedidos sin entorpecerse entre sí.

### UX

1. Definir un producto que responda a las necesidades y dificultades de
pacientes que esperan a ser atendidos/as en urgencias y los de el/la doctor/a
que los/as ingresa a la lista de espera, a partir de un acercamiento a los/as
usuarios/as (observación contextual, entrevistas, etc).
2. Seleccionar y priorizar la información a mostrar para cada usuario/a.
3. Crear interfaces que sigan los principios de diseño visual.
4. Iterar el diseño del producto y su usabilidad a partir del testeo con
usuarios/as (mínimo 5 testeos de usabilidad).

## 4. Consideraciones generales

* El trabajo debe ser hecho en duplas.
* Debes tener tu código alojado en *GitHub* usando *Git* y sus comandos
*commit*, *push*, *pull*, etc. y la interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).
* El tiempo que tendrán para realizar este proyecto es de 3 semanas.
* Tus pruebas unitarias deben tener una cobertura del 70% de _statements_.

## 5. Hacker edition

* Es probable que en su solución toda la información se mantenga en memoria, es
decir si alguien recarga la página todo lo guardado desaparece, consideren usar
alguna herramienta para mantener la persistencia de ésta. Una opción es guardar
la data en [window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
otra opción es considerar una base de datos, de estas hay muchas incluyendo Firebase.

## Contenido de referencia

* [Colas y Colas de prioridad](https://medium.com/laboratoria-developers/queues-in-javascript-2602677c9c3b)
