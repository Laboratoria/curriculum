# Sala de Emergencias

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)

## 1. Preámbulo

> El Departamento de Emergencias (DE), a veces denominado Accidentes y
> Emergencia (A & E), Sala de Urgencias (SU), Emergency Ward (EW) o Departamento
> de Accidentes, es un hospital o departamento de atención primaria o sección de
> un hospital que ofrece un tratamiento inicial de pacientes con un amplio
> espectro de enfermedades y lesiones, algunas de las cuales pueden ser
> potencialmente mortales y requieren atención inmediata.
>
> En algunos países, los servicios de urgencias se han convertido en importantes
> puntos de entrada para quienes no tienen otros medios de acceso a la atención
> médica.
>
> Fuente: [Departamento de Emergencias - Wikipedia](https://es.wikipedia.org/wiki/Departamento_de_Emergencias)

En las salas de emergencias de los hospitales, la gestión de los pacientes que
van llegando es crítica. Es muy importante que las pacientes puedan ser
atendidas no solo de acuerdo al orden de llegada, si no al nivel de gravedad.

![Free to use from https://pxhere.com/es/photo/599363](https://c.pxhere.com/photos/41/df/hospital_a_e_emergency_hospital_beds_hospital_ward-599363.jpg!d)

Para este tipo de casos podemos hacer uso de la idea de **colas de prioridad**,
que es una _estructura de datos_ que se encarga de ir dándonos los elementos de
mayor _prioridad_ antes que los de menor prioridad. De esta forma podemos ir
asignando salas y médicos disponibles a quienes más lo necesitan.

## 2. Resumen del proyecto

En este proyecto crearás una aplicación web para la gestión de la cola de
pacientes en la sala de emergencias de un hospital. Esta aplicación permitirá
registrar a las pacientes que llegan, e ir haciéndolas pasar según el nivel de
gravedad de su caso.

El objetivo principal de este proyecto es que te familiarices con el uso de
arreglos y diccionarios, incluso que los combines para obtener estructuras de
datos más complejas que te permitan resolver problemas de datos.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

* El trabajo debe ser hecho en duplas.
* Debes tener tu código alojado en *GitHub* usando *Git* y sus comandos
  *commit*, *push*, *pull*, etc.
* Debes desplegar tu aplicación usando [GitHub Pages](https://pages.github.com/).
* Toma el tiempo necesario para completar el proyecto con la máxima calidad
  posible. Asume 3 semanas como una referencia inicial.
* Tus pruebas unitarias deben tener una cobertura del 70% de _statements_.

## 5. Criterios de aceptación mínimos del proyecto

Nuestro sistema de gestión de pacientes debe ir asignando pacientes según su
gravedad y no solo según el orden de llegada. Debes tener en consideración los
_niveles de gravedad_  de la siguiente tabla:

![Categorización-UEH-660x1025](https://user-images.githubusercontent.com/7809496/71842401-4d6b4e00-30a0-11ea-9784-910bcc7b2a8a.png)

Las pacientes se ordenarán primero por nivel de gravedad y luego por hora de
llegada; pasarán sólo si es que no hay alguien de mayor prioridad esperando por
atención.

* Se debe poder "ingresar" un paciente, guardando su nombre, edad, género,
  descripción de la emergencia y categoría de la misma (gravedad).
* Se debe poder ver las salas de atención, si están ocupadas por pacientes, sus
  datos y la categoría de la emergencia en la que se encuentran.
* Se debe poder ver la cola de atención ordenada según el nivel de emergencia
  de cada paciente.
* Se debe poder marcar una sala como "libre" porque ya terminó la atención del
  paciente que estaba en ella.
* Se debe poder hacer pasar a un paciente de la cola para su atención en una de
  las salas disponible, comunicando su nombre y a cuál sala debe pasar.

Para facilitar el desarrollo toma en cuenta los siguientes consejos:

* Quien usa el sistema es la médico a cargo de categorizar a los pacientes y
  nadie más. Su pantalla también es visible en un televisor del hospital.
* Todo debe ser visible en una sola pantalla con resolución de TV (1280x720),
  considera esto al diseñar la interfaz.
* Hay solamente 6 salas de atención pero sería genial si la aplicación
  permitiera cambiar ese número fácilmente. En primer lugar como una constante
  dentro de la aplicación y en una segunda iteración como una configuración que
  la usuaria puede definir.

## 6. Hacker edition

* Es probable que en tu solución toda la información se mantenga en memoria, es
  decir, si alguien recarga la página todo lo guardado desaparece; considera
  usar alguna herramienta para mantener la persistencia de esta. Una opción es
  guardar los datos en
  [window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage),
  otra opción es considerar alguna base de datos, de estas hay muchas incluyendo
  Firebase.

## Contenido de referencia

* [Colas y Colas de prioridad](https://medium.com/laboratoria-developers/queues-in-javascript-2602677c9c3b)
* [Priority queue (en Inglés)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue)
