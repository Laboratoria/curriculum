# Proyecto de extensión: Registro de Visitantes

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Consideraciones generales](#3-consideraciones-generales)
- [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
- [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptacion-minimos-del-proyecto)
- [6. Consideraciones técnicas](#6-consideraciones-tecnicas)

## 1. Preámbulo

Dentro de las medidas de distanciamiento social del co-working más famoso de tu
ciudad se encuentra modernizar el proceso del registro de visitantes, hasta ahora
este co-working solo tenía un registro manual de visitantes lo cual hacía incómodo
el proceso al momento de firmar un registro o hablar con una persona encargada.

Lxs administradorxs del co-working se dan cuenta que necesitan una forma moderna
de registrar a lxs visitantes donde no tengan que interactuar con otra persona y
por eso contratan a tu equipo.

## 2. Resumen del proyecto

Este co-working te anima a desarrollarles un prototipo con la nueva funcionalidad
necesaria.

<img alt="Recepción" src="recepcion.jpg" width="100%">
Crédito: [Pxfuel](https://pxfuel.com/)

En su investigación conocieron una herramienta parecida a lo que desean y te la
comparten como [referencia](https://envoy.com/content/office-touchless-sign-in/).

La idea es que con esta referencia puedas desarrollar un prototipo [MVP](#que-es-un-mvp-minimum-viable-product)
a presentar luego del tiempo estimado.

Dado que deben presentar un prototipo, una amiga les recomienda usar un Framework
de CSS para ahorrar tiempo con la parte visual del proyecto.

Al conocer de la metodología ágil la administración de este co-working también
te pide que les compartas las historias de usuarix que tu equipo planea trabajar.
Para eso podrás usar herramientas como [GitHub Projects](https://github.com/features/project-management/)
o [Trello](https://trello.com/) por ejemplo.

## 3. Consideraciones generales

- Este proyecto se debe resolver en equipos de 2 o más personas.
- Este proyecto es "agnóstico" a la tecnología que uses, es decir que puedes
desarrollarlo en Vanilla JavaScript o algún _framework_ o biblioteca (librería)
de tu elección.
- Intenta pensar en un alcance que, considerando su complejidad y la cantidad de
personas en el equipo, te permita terminar el proyecto en 3 semanas.

## 4. Objetivos de aprendizaje

- [Poner en práctica todo lo aprendido hasta ahora](https://github.com/Laboratoria/bootcamp/blob/master/projects/learning-objectives.md).
- Diseñar y _testear_ un producto antes de desarrollarlo.
- Usar Historias de Usuarix para dividir, comunicar y priorizar las tareas a
realizar.
- Usar un _framework_ de CSS o un sistema de componentes de interfaz, como por ejemplo:
[Bulma.io](https://bulma.io/), [Tailwindcss.com](https://tailwindcss.com/),
[Bootstrap](https://getbootstrap.com/), etc.

## 5. Criterios de aceptación mínimos del proyecto

- Proponer y desarrollar una interfaz funcional donde lxs visitantes podrán
registrarse. Esta interfaz en especial deberá de poder verse sin problema en
celulares.
- Esta interfaz de visitante deberá registrar el nombre, email, persona a la que
visita, empresa a la que representa, fecha y hora de visita y duración de visita.
- Proponer y desarrollar una interfaz funcional de administradora donde se pueda
visualizar las visitas activas y las que están por llegar. Esta interfaz deberá
poder verse sin problemas en tabletas y en escritorio.
- La interfaz de administradora deberá estar protegida por nombre de usuarix y
contraseña.
- Las historias de usuarix deberán estar disponibles para ver en alguna herramienta
online.

### Hacker edition

Si logran terminar los criterios de aceptación mínimos listados líneas arriba,
pueden dedicarle tiempo a agregar nuevas ideas como las siguientes:

- Registrar una fotografía de la visitante usando el [API web de la cámara](https://developer.mozilla.org/es/docs/Web/API/MediaDevices/getUserMedia).
- Registrar nuevas personas por empresa en el co-working, así el listado de personas
a las que se puede visitar termina siendo validada.
- Registrar empresas del co-working así se puede indicar desde la interfaz de la
visitante.
- Si tienes alguna idea propia también es bienvenida.

## 6. Consideraciones técnicas

- Dado que la información generada se tiene que almacenar en algún lugar va a ser
necesario el uso de una Base de Datos, la recomendación es que programes un API
que pueda realizar esas operaciones; tengan en cuenta el tiempo que les tomará hacer
ese desarrollo con tu equipo. Si todavía no manejan ese concepto convérsalo con
algún coach para ver si este proyecto es indicado para ti en este momento.

## ¿Qué es un MVP (minimum viable product)?

O en español "Producto mínimo viable", es la representación más simple y sencilla
de un proyecto, se enfocan todos los esfuerzos en presentar a las usuarixs la funcionalidad
necesaria con la que se pueda validar si les agrega valor o no.
De acuerdo al feedback recibido luego de esta presentación se puede ir iterando
y priorizando las historias de usuarix.
