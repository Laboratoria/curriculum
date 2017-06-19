# Cómo contribuir a este repo

Este repositorio es un recurso abierto, y como tal estamos todos invitados a
participar.

## Sugerencias, errores y comentarios generales

El lugar donde empezar es nuestro
[_issue tracker_](https://github.com/Laboratoria/curricula-js/issues). Ahí
puedes buscar y ver si tu pregunta o sugerencia ya se ha preguntado antes,
participar en discusiones relevantes y añadir nuevos _issues_.

## Ayuda con review, validación y sugerencias de contenido

1. Busca _issues_ con los tags `help-wanted` y/o `needs-review`.

***

## Creadores de contenido

En la creación de nuevos cursos para Laboratoria intervienen 2 personas:

- El coordinador del curso (Laboratoria)
- El creador de contenido (externo)

Para crear un nuevo curso, se siguen los siguientes pasos:

### Paso 1

El coordinador del curso identifica la necesidad del curso y realiza lo
siguiente:

1. Crea branch `00-nombre-del-curso`
2. Crea directorio `00-nombre-del-curso`
3. Crea `README.md` basado en [esta plantilla](https://github.com/Laboratoria/curricula-js/blob/master/00-template/README.md)
y debe contener lo siguiente:
  * Título del curso
  * Breve descripción
  * Formato
  * Duración / temas logísticos
  * Quién será el creador del contenido del curso
4. Agrega al creador de contenido al repositorio de Laboratoria

### Paso 2

El creador de contenido deberá:

1. _Fork_ repo
2. En la plantilla creada por Laboratoria, desarrollar su propuesta del curso,
   básandose en el `curso ejemplo`
3. Enviar pull request
4. Review y discusión con el coordinador del curso
5. Ajustes

Este paso deberá tomar entre 2 y 3 semanas.


### Paso 3

Una vez que la plantilla esté cerrada entre el coordinador del curso y el
creador de contenido, el coordinador buscará obtener feedback adicional de la
comunidad. Este paso deberá tomar como máximo 1 semana.


### Paso 4

Con la plantilla completa, el creador de contenido empezará a crear lo necesario
para el desarrollo de la primera semana de clases y será guardado en la carpeta
`Lección-01` en el mismo repositorio. El contenido a crear incluye:

* **Scripts**: estos guiones servirán como guías para los videos y para el
dictado de las clases que se soportarán por los slides. Aquí puedes ver un
ejemplo:

> [Script] Computers generally tend to spend about a full quarter of their
processing power on sorting different data. As an example, a computer in a
hospital may maintain a very large database of all patients who have ever been
to the hospital for treatment in the past 5 years. Different people in the
hospital might want different lists of patients. A person managing hospital
finances might want a list of patients ordered by their hospital charges. A
researcher might want a list ordered by the disease for which they were treated.
An administrator might want a list ordered by the doctor who treated the
patient. While generating these lists, the computer will have to sort the data
afresh every time according to the need of the user.

> [Ask] Can you think of any other scenario in which sorting is important? What
advantages are there of maintaining sorted data over unsorted data? What are the
possible disadvantages?

>[Script] Computers are actually very simple machines. They can really only do
one thing at a time. Their power lies in being able to do these things very
quickly which gives the illusion that they are very smart. However we will see
as we discover how to solve a fundamental computing problem: sorting a list,
exactly how dumb computers really are. Let’s start with a group exercise!


* **Screencasts:** estos videos servirán para explicar el contenido del curso a
través de ejercicios. Puedes ver [este screencast hecho por nosotros](https://laboratoria.wistia.com/medias/tstcuensp9)
para que te des una idea de lo que buscamos. La intención del screencast que nos
envies es que nos muestres tu idea de desarrollo de los ejercicios. De todos
modos, Laboratoria realizará una producción del video. Para ver cómo crear un
screencast puedes mirar este [link](https://learn.onemonth.com/how-to-record-your-screen-and-make-a-video-tutorial-c6d37e78cf18).

* **Ejercicios guiados:** estos ejercicios servirán para reforzar los temas
teóricos a través de ejercicios. Si lo ves necesario puedes incluir un
screencast del ejercicio o incluir un paso a paso del desarrollo del ejercicio
(recuerda que estos ejercicios serán guiados por otros profesores en todas los
campus). Este ejercicio deberá tener la solución en github.


* **Ejercicios prácticos/casos:** estos ejercicios serán desarrollados en las
clases presenciales por los alumnos. Para estos casos el creador de contenido
deberá sugerir si se deben desarrollar en grupo o individualmente y el tiempo
que se le debe dar a cada alumno para resolver el caso.

Ejemplo:

>**Does the array contain "wdi"?**
Given an array, return `true` if it contains the string "wdi" and `false` if it
does not contain that string.

```js
findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false
```

Function signature (only look at this after you've thought about what it should
look like)

```js
function findWdi(arr){
  // TODO: Place your code here
}
```
</details>


* **Quizzes:** son necesarios para probar el conocimiento de las estudiantes
luego de ver las clases en video. Deben ser creados en google form e incluir el
link en el repo.


**Ejemplo general:**

|  #  | Tipo  | Tópico | Contenido
| --- | ----- | ------ | ---------
|  01 | video | ¿Qué son variables? | script
|  02 | video | Recibe información usando `prompt()` y guarda los datos en variables | screencast
|  03 | ejercicio guiado | Nombrando variables | screencast
|  04 | quiz | Prueba tu conocimiento | quizz
|  05 | reto | Crea nuevas variables y modifica su valor | ejercicio práctico
|  06 | clase presencial | Valores y tipos de datos | script

### Paso 5

1. Enviar pull request
2. Review y discusión: esta revisión está a cargo del coordinador del curso.

### Paso 6

Una vez cerrada la primera semana de contenido, esta pasa a los encargados de
producir el material.

El creador de contenido vuelve al paso 4 para crear el material de las
siguientes semanas.


### Paso 7

1. El coordinador del curso aprueba el contenido de la primera semana y hace
**Merge to master**

***

## Buenas prácticas para generar cursos
 -  **Mantener tus cursos DRY**. Al momento de planear el curso, tener en consideración que ya existe material (videos, entradas de blog, etc) muy bueno en internet que únicamente necesita traducirse. Generar contenido desde 0 es dificil. Traducir y dar credito, no.
