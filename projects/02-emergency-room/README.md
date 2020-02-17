# Sala de Emergencias

## Índice

## 1. Preámbulo

Los datos, de una manera abstracta y fría, es solo información, conjuntos de
valores agrupados de alguna forma definida. Pero la verdad es que en ellos
puede haber una mina de oro (literalmente se le llama minería de datos a una
disciplina), o incluso salvar vidas si es que son usados correctamente.

Estamos en un momento en que es vital saber manipular la información,
transformarla de una forma tal de que nos entregue valor, que nos permita tomar
decisiones y nos ayude a entender del mundo que nos rodea.

Un caso especial, y que es crítico en los hospitales, es manejar cuándo se
atenderán los pacientes que llegan a la sala de urgencias. Los datos permiten
asignar médicos y salas que siempre son escasas a quienes más lo necesitan. Para
esto se ha inventado un sistema de categorización de pacientes, donde no importa
el orden de llegada sino su gravedad de acuerdo a esta tabla:

![Categorización-UEH-660x1025](https://user-images.githubusercontent.com/7809496/71842401-4d6b4e00-30a0-11ea-9784-910bcc7b2a8a.png)

En el caso de pacientes graves, estos pasan inmediatamente a atenderse con un
médico. Los de mediana gravedad deberán esperar por una camilla libre, pero
nunca más de 30 minutos, en caso de que haya más de un paciente en esta
categoría se ordenarán por su hora de llegada. Los demás pacientes se ordenarán
por categoría primero y luego por llegada y pasarán solo si es que no hay
alguien de mayor prioridad esperando por atención.

## 2. Resumen del proyecto

En esta ocasión tendrán que hacer duplas para crear un sistema de colas para la
sala de emergencia de __LabSalud__, hospital que ha solicitado a ustedes ayuda
para el desarrollo.

Los requisitos que pide __LabSalud__ para este sistema son:

* Debe poder ser ingresado un paciente, guardando su nombre, edad, sexo,
descripción de la emergencia y categoría de emergencia.
* Se deben ver los boxes de atención y si están ocupados por un paciente (ojalá
mostrar su nombre y categoría de emergencia).
* Se debe poder ver la cola de atención ordenada según el nivel de emergencia
de cada paciente.
* Se debe poder hacer pasar un paciente de la cola a atender en uno de los
boxes, avisando el nombre de quien debe pasar y a qué box.

Para facilitar el desarrollo tomen en cuenta los siguientes consejos :

* Quien usa el sistema es la doctora a cargo de categorizar los pacientes y
nadie más. Su pantalla también es visible en la televisión del hospital.
* Todo debe estar en una sola pantalla con resolución de TV (1270*720),
considera esto al diseñar la interfaz.
* __LabSalud__ tiene 6 boxes de emergencia en estos momentos, pero sería genial
si la aplicación permitiera cambiar el número de boxes fácilmente (a través del
código, no de la interfaz de usuario).

## 3. Objetivos de aprendizaje

### Comunes

1. Aplicar y profundizar todo lo que aprendiste en el proyecto anterior.
2. Pensar en las necesidades de las personas para crear historias de usuario.
3. Escribir y trabajar con historias de usuario, sus definiciones de terminado
(definition of done) y Criterios de Aceptación como herramienta central de la
organización y planificación de tu trabajo.

### FrontEnd

1. El objetivo principal de este proyecto es que se familiaricen con el uso de
arreglos y diccionarios, incluso que los combinen para obtener estructuras de
datos más complejas que te permitan resolver problemas grandes de datos.
2. Dominar la manipulación del DOM para hacer aplicaciones interactivas y
dinámicas sin necesidad de tener todo en HTML o varios archivos de HTML, sino
que generando y modificando HTML desde Javascript.
3. Manejar eventos del DOM, como clicks o entradas de texto, para interactuar
con los usuarios.
4. Perfeccionar tus habilidades de diseño y CSS para lograr una interfaz que
permita tener todos los elementos pedidos sin entorpecerse entre si.

### UX

1. Definir un producto que responda a las necesidades y dificultades de
pacientes que esperan a ser atendidos/as en urgencias y los de el/la doctor/a
que los/as ingresa a la lista de espera, a partir de un acercamiento a los/as
usuarios/as (observación contextual, entrevistas, etc).
2. Seleccionar y priorizar la información a mostrar a partir de objetivos de
usuarios/as y del proyecto.
3. Crear interfaces que sigan los principios de diseño visual.
4. Iterar el diseño del producto y su usabilidad a partir del testeo con
usuarios/as (mínimo 5 testeos de usabilidad).

## 4. Consideraciones generales

* El trabajo debe ser hecho en duplas.
* Debes tener tu código respaldado en *GitHub* usando *Git* y sus comandos
*commit*, *push*, *pull*, etc.
* El tiempo que tendrán para realizar este proyecto es de 3 semanas.

## Otros Recursos

* [Colas y Colas de prioridad](https://medium.com/laboratoria-developers/queues-in-javascript-2602677c9c3b)
