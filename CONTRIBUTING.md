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
4. Si no hay un autor asignado, crea un issue invitando a posibles colaboradores
5. Una vez identificado uno o varios autores se coordinarán los siguientes pasos

### Paso 2

El creador de contenido deberá:

1. Hacer su propio _Fork_ del repo
2. Desarrollar su propuesta del curso básandose en la plantilla creada por
   Laboratoria. La parte más importante en este paso es desarrollar un
   _syllabus_ con el flujo del curso lección a lección.
3. Enviar pull request con su propuesta al branch del curso
4. Review y discusión con el coordinador del curso
5. Ajustes

Este paso deberá tomar entre 1 y 3 semanas.

[Anatomía de un syllabus](#)

### Paso 3

Una vez que la plantilla esté cerrada entre el coordinador del curso y el
creador de contenido, el coordinador buscará obtener feedback adicional de la
comunidad. Este paso deberá tomar alrededor de 1 semana.

### Paso 4

Con la plantilla completa, el creador de contenido empezará a crear lo necesario
para el desarrollo de las primeras lecciones. Cada unidad se desarrollará
dentro de una subcarpeta con el nombre `01-titulo-corto` (dónde `01` es el
número de la unidad y `titulo-corto` es un string en minúsculas que la
identifica).

[Anatomía de una unidad](#)

### Paso 5

1. Enviar pull request
2. Review y discusión: esta revisión está a cargo del coordinador del curso.

### Paso 6

El creador de contenido vuelve al paso 4 para crear el material de las
siguientes unidades.

### Paso 7

1. El coordinador del curso aprueba el contenido y hace _merge_ a master.

***

## Buenas prácticas para generar cursos

- **Mantener tus cursos DRY**. Al momento de planear el curso, tener en
  consideración que ya existe material (videos, entradas de blog, etc) muy
  bueno en internet que únicamente necesita traducirse. Generar contenido
  desde 0 es dificil. Traducir y dar credito, no.

***

## Guías de estilos

* `>= ES2015`: [Frontend: AirBnB](https://github.com/airbnb/javascript)
* `< ES2015`: [Google Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
