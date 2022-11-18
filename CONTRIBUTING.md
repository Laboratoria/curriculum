# Cómo contribuir a este repo

Este repositorio es un recurso abierto, y como tal estamos todos invitados a
participar. 

## Sugerencias, errores y comentarios generales

El lugar donde empezar es nuestro
[_issue tracker_](https://github.com/Laboratoria/bootcamp/issues). Ahí
puedes buscar y ver si tu pregunta o sugerencia ya se ha preguntado antes,
participar en discusiones relevantes y añadir nuevos _issues_.

### Para ayudar con review, validación y sugerencias de contenido

Busca _issues_ con los tags [`help-wanted`](https://github.com/Laboratoria/bootcamp/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).

## Temas de Desarollo 

### Git workflow

En el repo seguimos un modelo de colaboración basado en forks.
__Cada una trabaja en su fork.__ Como repo público cualquiera puede
hacer un fork en su cuenta, hacer los cambios que considere y enviar
propuestas de cambios desde su fork en un pull request (PR).

* Cambios (PRs) normalmente se envían de una rama de su fork a Laboratoria/main.
* Toda propuesta de cambios (PR) tendrá que pasar peer-review y tareas de validación,
  linting y pruebas unitarias (npm test).
* Antes de enviar un PR siempre revisa primero el issue tracker para ver si ya existe
  una conversación al respecto.

Si no estás segura de cómo enviar un PR o si deberías hacerlo, lo mejor es comenzar
por un issue.
Si son cambios menores, o tienes muy claro qué cambiar y cómo,
lo ideal es pull request directamente y describir el issue/error
en la descripción de PR.

### Estilo de codigo

Link to wiki

## Creación de contenido

Si tienes una idea para un curso, chequea el
[issue tracker](https://github.com/Laboratoria/bootcamp/issues) y el
[`README.md`](README.md) para ver si ya se ha propuesto algo parecido. Si tu
propuesta es algo nuevo, abre un issue con tu idea y veamos que opina la
comunidad.

En el repo tenemos dos tipos de contenido: topicos y proyectos, cada una tiene
una desarolla una poca distina.

### Topicos

Un topico siguen un formato en particular. Nuevos topicos necesitan nuevo directorio
dentro de carpeta `topic` con el nombre de topic, y dentro eso creas directorios por casa "capitulo".

En el directorio `topics` de proyecto encuentras un `_template` que puede seguir. 
Aqui es un descripcion de [anaotmia de n topico](https://github.com/Laboratoria/bootcamp/wiki/Anatom%C3%ADa-de-un-t%C3%B3pico).

Cuando estas haciendo contenido o cambios puedes visualizar los cambios corriendo el sitio
de curricula localmente con estos pasos:

1. corre `npm build:content` para crear/actualizar el contenido topicos
2. `npm run test:topics o pretest ?`
3. corre `npm run build` para hacer los componentes de sitio
4. correr `npm start` para correr el server y navegar al sitio, o `npm run watch` si quiere..
    

### Proyectos

Puedes encontrar los proyectos dentro `projects`. Cada proyecto tiene su propio carpeta con un 
boilerplate. Los READMEs son generado con un script que incluye los Objetivos de Aprendizaje 
en una manera automatizado. Mas detalle aqui en
[anatomia de proyecto](https://github.com/Laboratoria/bootcamp/wiki/Anatom%C3%ADa-de-un-proyecto)
y [anatomia de un unidad](https://github.com/Laboratoria/bootcamp/wiki/Anatom%C3%ADa-de-una-unidad).

Si haces cambios a un README y o agregas objetivos de aprendizaje al proyecto 
y quieres ver como parece en su totalidad,
usa (`create-cohort-project` script)[scripts/README.md#scripts-para-coaches] para generar
el repo localmente (no tienes que epujer el repo).

Si haces cambios con un impacto a boilerplate o creas un proyecto nuevo,
seria bueno tener un ejemplo de implementacion, un proyecto desplegada para probarlo.

md lint?

### Learning Objectives 

Los Objetivos de Aprendizaje (Learning Objectives) tambien son abiertos a evolucionar.
Cada proyecto viene con objetivos que definimos en su `project.yml`.

Los objetivos que encuentran en el `proyect.yml` de un proyecto son solo algunos,
la lista completo esta en (`learning-objectives/data.yml`)[./src/learning-objectives.data.yml].
 
 Con esta lista definimos los objetivos completos, traducidos, en formato yaml
 que se encuentra en (`learning-objectives/intl`)[./src/learning-objectives.data.yml]

 Para proponer cambios...

 Para proponer nuevos...


