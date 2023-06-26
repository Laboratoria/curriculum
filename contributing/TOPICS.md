# Guía de topics

## Anatomía de un tópico

Dentro de cada carpeta de _tópico_ debe haber un archivo `README.md`
con la información general del tópico.

Estructura de archivos de un tópico:

<!-- TODO: revisa con alpi -->

```text
topic-slug                    # tópico
├── 01-unit-slug              # unidad
│   ├── 00-opening            # parte
│   │   └── README.md
│   ├── 01-part-title-1
│   │   └── README.md
│   ├── 02-part-title-2
│   │   └── README.md
│   ├── 03-example-exercise
│   │   ├── 01-print-primes   #challenge
│   │   │   ├── README.md
│   │   │   ├── boilerplate
│   │   │   │   └── printPrimes.js
│   │   │   ├── solution
│   │   │   │   └── printPrimes.js
│   │   │   └── test
│   │   │       └── printPrimes.spec.js
│   │   └── README.md
│   └── 04-closing
│       └── README.md
├── 02-unit-slug/
│   └── ...
├── 03-unit-slug/
│   └── ...
└── README.md
```

_slug_ significa title o identificador de tópico. 

Nombres de archivos y carpetas en minúsculas, usando `-` en vez de espacios y
evitando caracteres especiales.

## `README.md` principal del _tópico_

Cada tópico empieza por un archivo `README.md`. 
Una manera de familiarizarse con la estructura de este archivo es ver 
[este ejemplo de template](https://github.com/Laboratoria/bootcamp/blob/main/topics/_template/README.md).

El `README` debe tener:

1. Track de tópico `track` (`web-dev`, `ux`, etc)
2. Título(`title`) _required_
<!-- TODO: no creo son required, verifica eso -->
~* Descripción (`description`)~ _required_
~* Tags: (`tags`)~ _required_ <!-- mira functional js -->
3. Syllabus (`syllabus`) _required_
4. Requerimientos previos, si hay (`dependencies`) _required_
~* Público objetivo (`targetAudience`)~ _required_
<!-- ~* Objetivos de aprendizaje (`learningObjectives`)~ _required_ solo veo en unidades -->
<!-- * Guía de preguntas y conceptos clave (`keyConcepts`) solo en unidades -->
~* Evaluación (`grading`)~ _required_
~* Contribuidores (`contributors`)~ _required_

Partes adicionales:

* Producto(s) a desarrollar (`product`)  por unidades de track `ux`
* Libros (`books`)
* Benchmarks (`benchmarks`)
* Referencias (`references`)

### Track (requerido)

El track parece en el front-matter de Markdown.

``` md
---
track: ux
---
```

### Título (requerido)

La primera línea del `README.md` de un tópico debe contener un `h1` con el título
completo.

```md
# Título del tópico
```

### Syllabus (requerido)

El syllabus esta marcado en `h2` (`##` en Markdown) y contiene
los títulos de los unidades marcado como `h3` y con links
al directorio del unidad.

Opcionalmente cada titulo de unidad tiene una descripción de unidad.

``` md
### Unidad 01: [Tu primera página web](01-intro)

En esta unidad crearás tu primera página web.
```

...

## Anatomía de Unidades

Los unidades son los directorios que encuentras dentro un
tópico y que contiene el contenido de partes.


<!-- TODO: Me parece que solo los unidades de ejercicios tiene un README con
front matter de duracion -->

Estructura de archivos:

```text
0X-topic-slug                       
├── 01-titulo-corto-unidad/         # unidad
│   ├── 00-apertura                 # parte
│   │   └── README.md
│   ├── 01-titulo-corto
│   │   └── README.md
│   ├── 02-practice
│   │   ├── 01-un-ejercicio
│   │   ├── 02-otro-ejercicio
│   │   └── README.md
│   ├── 03-some-quiz
│   ├── 04-ejercicios-guiados
│   ├── 05-solucionario
│   └── 06-cierre
├── 02-titulo-corto-unidad/
└── README.md
```

<!-- TODO hay apertura y cierra? solo veo opening and closing en ingles -->
Recomendamos que cada unidad empiece con una parte _lectura_ de **apertura** o
**opening** y termine con una de **cierre** o **closing**. 
Por ejemplo, la unidad 01 arriba tiene `00-apertura`, `06-cierre`.

## Anatomía de una _parte_ (actividad) de una _unidad_

Cada parte es un directorio dentro un unidad, y debe tener
su propio `README.md`. 

El `README.md` debe tener:

1. Tipo de parte (`type`) _required_
2. Duración (`duration`) _required_ <!-- TODO son required ?? -->
3. Titulo de unidad (`title`) _required_
4. Objetivos de aprendizaje (`learningObjectives`) _required_  <!-- TODO son required ?? -->
5. Contenido/cuerpo _required_

```text

front-matter
---
  type *
  format *
  duration *
---

h1 (título) *
h2 (objetivos de aprendizaje)
ul
  li (objetivo de aprendizaje 1)
  li (objetivo de aprendizaje 2)
  li (objetivo de aprendizaje n)
hr *
body (el cuerpo/contenido)

* obligatorio
```

### Tipo, Format y Duración

Esta información o metadata parece en el front-matter de un parte.

``` md
---
type: read
format: self-paced
duration: 30min
---
```
Los tipos son `lectura/read`, `práctica/practice`, `cuestionario/quiz`,
`self-paced` (Leer mas de tipos y formatos.)[]
<!-- TODO: ingles o espanol para tipos -->
Los formatos son self-paced y guiado (deprecated).

Duración puede calcular como ...

### Título (requerido)

La primera línea del `README.md` de un parte debe contener
un `h1` con el título completo.

### Objetivos de Aprendizaje

Una lista de puntos o breve descripción de que va a aprender en este parte.

### Contenido de parte

Puede tener las secciones necesarias con sus propios títulos.
Por favor usa markup semantica como encabezados, listas, y links
donde correcto.

Algunas secciones que otras partes tienen -
* Guía de preguntas y conceptos clave (`keyConcepts`)
* No se si hay otros ejemplos

#### Sobre Tipos y Formatos

* `seminario/seminar` (deprecated/legacy)
  Un seminario es lo más parecido a una clase presencial tradicional. Los
  seminarios son _guiados_ por unx o más instructoras.
* `lectura/read`
  Las lecturas son artículos de contenido que pueden incluir videos, imágenes y
  otros soportes, embebidos o como vínculos externos.
* `práctica/practice`
  Las prácticas principalmente ejercicios y pueden tener diferentes entornos:
`js`, `web`, `node`, ...
* `cuestionario/quiz`
  Los cuestionarios a corto plazo se manejarán como links a Google Forms. Más
  adelante se implementará una manera más apropiada para poder incluir en nuestro
  LMS.
* `taller/workshop` (deprecated/legacy)
  Los talleres (o workshops) son sesiones guiadas o no guiadas (self-paced)
  durante las cuales las alumnas realizan una actividad prolongada, como
  implementación, diseño o investigación. Al final de un taller o grupo de
  talleres normalmente se cierra con una demo o presentación.

#### Formato

Cualquiera de los _tipos_ de contenido anteriores pueden darse (o proponerse) en
dos formatos:

* `guiado/guided` (deprecated/legacy)
Los contenidos guiados son aquellos donde la _clase_ es dirigida por unx o más
instructorxs. Los seminarios son siempre guiados, mientras que los talleres,
lecturas o ejercicios pueden ser guiados o no.
* `self-paced`
Los contenidos _self paced_ (a tu propio ritmo) son aquellos que están dirigidos
por las alumnas y por lo general podrían ver estas partes en su propio tiempo.
En este formato, lxs instructorxs tienen el rol de acompañar, guíar y apoyar,
pero son ellxs quienes dirigen la actividad.


### Challenges 

Challenges composeen los partes de normalmente llaman 
`practice`, `code-challenges` o `exercises`. 

```text
0X-topic-slug                       
├── 01-titulo-corto-unidad/         # unidad
│   ├── 00-apertura                 # parte
│   ├── 01-titulo-corto
│   ├── 02-practice
│   │   ├── 01-un-ejercicio         # challenge
│   │   │   ├── boilerplate
│   │   │   │   └── un-ejercicio.js
│   │   │   ├── solution
│   │   │   │   └── un-ejercicio.js
│   │   │   ├── test
│   │   │   │   └── un-ejercicio.spec.js
│   │   │   └──README.md
│   │   ├── 02-otro-ejercicio
│   │   └── README.md************* // TODO describe que hace aqui?
├── 02-titulo-corto-unidad/
└── README.md
```

Cada challenge es un directorio que contiene:

1. README.md
2. directorio `boilerplate` con un archivo js que sirve 
  como plantilla del ejercicio
3. directorio `solution` con un archivo js que tiene el reto 
  resuelto
4. directorios `test` con un spec.js con pruebas para 
  verificar la solución

El `README.md` explica el reto / problema con links a conceptos
para revisar. Necesitan este front matter para designarlo como
`CommonJS`.

```
---
env: cjs
---
```

El boilerplate contiene un archivo js que es un template de
la función o markup para resolver. La función es exportado con
un `module.exports` si es necesario.

El spec contiene un grupo de tests que van a correr para chequear la
solución del reto.

