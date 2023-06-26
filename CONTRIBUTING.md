# Contribución

## Índice

* [Cómo contribuir a este repo](#cómo-contribuir-a-este-repo)
  * [Sugerencias errores y comentarios generales](#sugerencias-errores-y-comentarios-generales)
  * [Para ayudar con review, validación y sugerencias de contenido](#para-ayudar-con-review-validación-y-sugerencias-de-contenido)
  * [Para mejorar o crear contenido](#para-mejorar-o-crear-contenido)
* [Guía de Desarrollo](#guía-de-desarrollo)
  * [Git workflow](#git-workflow)
  * [Viendo cambios](#viendo-cambios)
  * [Estilo](#estilo)
  * [Estilo Editorial](#estilo-editorial)
  * [Configuración de Editor de Texto](#configuración-de-editor-de-texto)
  * [Markdown](#markdown)
  * [JavaScript](#javascript)
* [Creación de Contenido](#creación-de-contenido)
  * [Buenas practicas](#buenas-prácticas)
  * [Tópicos](#tópicos)
  * [Proyectos](#proyectos)

## Cómo contribuir a este repo

Este repositorio es un recurso abierto, y como tal estamos toas y todos
invitados a participar. Puedes contribuir con sugerencias, ideas, cambios,
reportes de errores o bugs, comentarios en pull requests o conversaciones de
issues.

### Sugerencias, errores y comentarios generales

Si quieres comentar o añadir sugerencias, o reportar un error,
el lugar donde empezar es nuestro
[_issue tracker_](https://github.com/Laboratoria/bootcamp/issues). Ahí
puedes buscar y ver si tu pregunta o sugerencia ya se ha preguntado antes,
participar en discusiones relevantes y añadir nuevos _issues_.

### Para ayudar con review, validación y sugerencias de contenido

Busca _issues_ con los tags [`help-wanted`](https://github.com/Laboratoria/bootcamp/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
o [pull requests abiertos en review](https://github.com/Laboratoria/bootcamp/pulls) y
participar en las conversaciones.

### Para mejorar o crear contenido

Si tienes ganas a arreglar un error o un issue existente, lee las secciones de
Guía de Desarrollo para aprender como escribir, probar
y mandar su código. Si no existe un issue pero son cambios menores,
o tienes muy claro qué cambiar y cómo, lo ideal es pull request directamente
y describir el issue/error en la descripción de PR.

Para crear nuevo contenido, el trabajo necesita tener un issue para describir el
propósito de trabajo y conversar con la comunidad de la idea.
Puede ser [un issue que ya existe](https://github.com/Laboratoria/bootcamp/issues)
o puedes crear un nuevo issue. Si es un nuevo issue,
intenta conversar con el equipo de contenido de curricula, y otras coaches,
si el cambio propuesto es válido y le hace sentido a las demás.

De igual manera, te invitamos a leer las secciones de Guía de Desarrollo
para aprender como construir nuevo contenido (ya sea de proyectos o tópicos),
testear y enviar tu código como PR.

---

## Guía de Desarrollo 

El planteamiento general del desarrollo de la curricula se basa intencionalmente
en el modelo de desarrollo de software libre y apunta a aprovechar sus bondades.
Si no tienes un perfil técnico y todo esto te suena raro, no te preocupes,
la comunidad está acá para ayudar y guiar.

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

### Commits 

TODO: describir estilo https://www.conventionalcommits.org/

### Viendo tus cambios

Cuando estas haciendo cambios a contenido puedes visualizar los cambios corriendo el sitio
de curricula localmente con estos pasos:

1. Corre `npm test` para ver si los cambios han afectado los tests.
2. Corre `npm run build:content` para crear/actualizar los jsons de tópicos y
  proyectos de los cuales la App de React del repo se alimenta.
3. Correr `npm start` para correr el server y navegar al sitio, o 
  también puedes hacer `npm run watch` para poder visualizar los cambios en
  vivo sin tener que estar actualizando el sitio.

Puedes navegar hacia los proyectos y topicos en el sitio localmente.

También puedes visualizar los cambios de READMEs de proyecto en otras maneras.

1. Directamente en VSC con un preview de markdown.
2. Empujando los cambios a tu rama y navegando al README en tu rama en tu fork.
3. Corriendo el script [`create-cohort-project`](./scripts/create-cohort-project.mjs)
  para ver el proyecto generado tal cual como las coaches se lo compartirán a
  las estudiantes.

***

### Estilo

El contenido que se vaya creando en este repo debe seguir una serie de
**convenciones** a nivel de **estilo**, **formato** y **estructura** con los
siguientes objetivos:

* Crear una **experiencia consistente**
* Sacar el máximo provecho al **proceso colaborativo**
* Poder **analizar los cursos de forma programática** para después ofrecer la
  experiencia de aprendizaje a nuestras estudiantes

Estas convenciones se irán documentando acá e irán evolucionando en el tiempo,
así que no dudes en proponer mejoras o cambios. 

Para facilitar el proceso de _code review_ y colaboración en general, creemos
que es esencial seguir una guía de estilos clara, que dé consistencia a la
malla en general.

Es responsabilidad de lxs mantenedores de este repo asegurar que se cumplen
las convenciones. Hay autorxs que no son necesariamente programadorxs y en este
aspecto la comunidad, y en particular Laboratoria, deben apoyar y guiar en los
temas técnicos. Este proyecto adopta un modelo propio del desarrollo de software
para diseñar contenido, así que nos toca tener flexibilidad para creadorxs a la
vez que aseguramos estándares de estilo, estructura y formato para poder
analizar estos cursos de forma programática.

[El estilo es importante](https://www.smashingmagazine.com/2012/10/why-coding-style-matters/).

Las guías de estilo se dividen en:

* [Estilo editorial](#estilo-editorial)
* [Configuración de editor de texto](#configuración-de-editor-de-texto)
* [Markdown](#markdown)
* [Javascript](#javascript)

#### Estilo editorial

A tener en cuenta a la hora de escribir...

* Tono coloquial (tú en vez de usted)
* Narración dirigida a la estudiante como lectora, 2da persona, singular (ie: en esta
  lección aprenderás a ...)
* **Femenino genérico o `x` para neutro (ie: `Todxs lxs programadorxs`)** TODO: resalta eso o cambiar/omitirlo - el x se dificulta lecturas de pantalla
* [El adverbio solo y los pronombres demostrativos, sin tilde](http://www.rae.es/consultas/el-adverbio-solo-y-los-pronombres-demostrativos-sin-tilde)
* Marcado semántico (ie: usar `blockquotes` para _citas_ y solo citas)
* Frases cortas

#### Configuración de editor de texto

La mayoría del contenido (pero no todo) se desarrolla en archivos de texto
plano. Para manejar archivos de texto (`.md`, `.js`, `.html`, ...) vas a
necesitar un editor de texto. Puedes usar tu editor favorito, y si todavía no
tienes uno te recomendamos [VS Code](https://code.visualstudio.com/).

Para definir y mantener convenciones de uso de espacios y otras características
configurable en un editor de texto el repo incluye un archivo
[`.editorconfig`](https://github.com/Laboratoria/bootcamp/blob/main/.editorconfig),
que es un estándar para manejar este tipo de convenciones. Más info en
[editorconfig.org](http://editorconfig.org/).

Esta configuración funciona con la mayoría de editores populares.

#### Markdown

[Markdown](https://daringfireball.net/projects/markdown/syntax), en particular
[GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/),
es el formato más común en la currícula. Si no estás familiarizada con Markdown,
acá tienes un
[Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
muy útil.

Para facilitar la tarea de validar las convenciones a nivel de Markdown, el
repo incluye una _tarea_ que verifica el _estilo_ del Markdown usando un linter.
Esta tarea se ejecuta automáticamente al enviar un pull request.
Alternativamente, también la puedes ejecutar directamente en tu copia local con
el comando `npm run mdlint` (esta tarea también se ejecuta cuando hacemos
`npm test`).

#### JavaScript

Por ahora hemos [acordado](https://github.com/Laboratoria/bootcamp/issues/11)
usar la guías de estilo de [AirBnB](https://github.com/airbnb/javascript), en
particular usando:

* [`eslint-config-airbnb-base`](https://www.npmjs.com/package/eslint-config-airbnb-base)
* [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb)

Los ejemplos, snippets, y proyectos de ejemplo de Laboratoria deberían usar
el mismo estilo.

## Creación de contenido

La malla curricular está compuesta de _proyectos_ y _tópicos_.

Los contenidos desarrollados en este repo deben seguir una estructura y una
serie de convenciones para después poder ser analizado y convertido de forma
automatizada a una estructura de datos que pueda ser usada por nuestro _LMS_
(Ver [`curriculum-parser`](https://github.com/Laboratoria/curriculum-parser)).

Si tienes una idea para un curso o proyecto, chequea el
[issue tracker](https://github.com/Laboratoria/bootcamp/issues) y el
[`README.md`](README.md) para ver si ya se ha propuesto algo parecido. Si tu
propuesta es nueva, abre un issue con tu idea y veamos que opina la
comunidad.

TODO: donde mencionamos el siguiente:

Dependiendo de la naturaleza del contenido, se decidirán los detalles
exactos ya que no todos los proyectos o tópicos tienen la misma naturaleza._

### Buenas prácticas

- **Mantener tus contenidos DRY** Al momento de planear un contenido, tener en
  consideración que ya existe material (videos, entradas de blog, etc) muy
  bueno en internet que únicamente necesita traducirse. Generar contenido
  desde 0 es difícil. Traducir y dar crédito, no tanto.
- **Manejo de archivos binarios**
Ver [#114](https://github.com/Laboratoria/bootcamp/issues/114#issuecomment-321457379).

### Tópicos

Un tópico siguen un formato en particular. Nuevos tópicos necesitan nuevo
directorio dentro de carpeta [`/topics`](./topics/) con el nombre del tópico,
y dentro eso creas directorios por cada _unidad_.

Para aprender como estructurar un tópico, lee [la guía de tópicos](./contributing/TOPICS.md)

Cuando estés creando contenido o haciendo cambios puedes visualizarlos
corriendo el sitio de curricula localmente como
[se explica anteriormente](#viendo-cambios).

### Proyectos

Puedes encontrar los proyectos de la curricula en el directorio
[`projects`](./projects/).

Cada proyecto tiene su propio directorio con el boilerplate necesario y
su enunciado en el archivo README.

Para aprender como estructurar un proyecto, revisa [la guía de Proyectos](./contributing/PROJECTS.md)

Si haces cambios a un README y o agregas objetivos de aprendizaje al proyecto 
y quieres ver como parece el proyecto en su totalidad,

usa el script [`create-cohort-project`](./scripts/README.md#create-cohort-project)
para generar el proyecto localmente (no es necesario empujarlo a Github).

Este script crea la sección de Objetivos de Aprendizaje del proyecto a partir
del archivo `project-yml` que lo acompaña y que enlista los OAs asociados a él.

También puedes ir viendo el resultado corriendo el sitio de curricula
localmente como [se explica anteriormente](#viendo-cambios).

Otro script que debes ejecutar mientras realizas cambios a un README de un
proyecto es `npm run mdlint` que va a ejecutar el linter que va a analizar los
archivos Markdown y resaltar errores. Si no se ejecuta de manera local, de
igual forma será ejecutado en una Github Action cuando abras tu PR,
recomendamos ejecutarlo de manera local de manera de arreglar errores de estilo
que puedan haber de manera que luego la Github Action asociada pase
satisfactoriamente sin errores.

Si haces cambios con que impacten directamente el _boilerplate_ de un proyecto,
o derechamente si quieres proponer un nuevo proyecto, es necesario contar con
una implementación modelo del proyecto de manera de entender cualquier caso
borde o _caveat_ que pueda haber con respecto al enunciado, OAs, o tecnología
asociada a la solución propuesta para ese proyecto.
