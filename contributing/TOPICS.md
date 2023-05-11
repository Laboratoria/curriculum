# Guía de topics

## Anatomía de un tópico

Dentro de cada carpeta de _tópico_ debe haber un archivo `README.md` con la
información general del tópico.

Estructura de archivos:

TODO: revisa con alpi

```text
topic-slug                   # tópico
├── 01-unit-slug             # unidad
│   ├── 00-opening           # parte
│   │   └── README.md
│   ├── 01-part-title-1
│   │   └── README.md
│   ├── 02-part-title-2
│   │   └── README.md
│   ├── 03-example-exercise
│   │   ├── 01-print-primes
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

_slug_ significa title o identificador. 

Nombres de archivos y carpetas en minúsculas, usando `-` en vez de espacios y
evitando caracteres especiales.

## `README.md` principal del _tópico_

Cada tópico empieza por un archivo `README.md`. La mejor manera de familiarizarse
con la estructura de este archivo es ver [este ejemplo](https://github.com/Laboratoria/bootcamp/blob/main/topics/_template/README.md).

TODO: talk about head matter
solo tiene track

* Título (`title`) _required_
~* Descripción (`description`)~ _required_
~* Tags: (`tags`)~ _required_

Secciones:

* Público objetivo (`targetAudience`) _required_
* Requerimientos previos (`dependencies`) _required_
* Objetivos de aprendizaje (`learningObjectives`) _required_
* Producto(s) a desarrollar (`product`) _required_
* Guía de preguntas y conceptos clave (`keyConcepts`)
* Syllabus (`syllabus`) _required_
* Evaluación (`grading`) _required_
* Contribuidores (`contributors`) _required_
* Libros (`books`)
* Benchmarks (`benchmarks`)
* Referencias (`references`)

### Título (requerido)

La primera línea del `README.md` de un tópico debe contener un `h1` con el título
completo.

```md
# Título del tópico
```

### Descripción (requerido)

La descripcción del tópico es un espacio _libre_ que va desde el título hasta
la lista de `tags` o el heading de público objetivo.

### Tags (requerido)

...


## Anatomía de Unidades

Recomendamos que cada unidad empiece con una _lectura_ de **apertura** y termine
con una de **cierre**.

Estructura de archivos:

```text
0X-topic-slug                       
├── 01-titulo-corto-unidad/         # unidad
│   ├── 00-apertura                 # parte
│   |   └── README.md
│   ├── 01-titulo-corto
│   |   └── README.md
│   ├── 02-practice
│   |   ├── 01-un-ejercicio
│   |   ├── 02-otro-ejercicio
│   |   └── README.md
│   ├── 03-some-quiz
│   ├── 04-ejercicios-guiados
│   ├── 05-solucionario
│   ├── 06-requizz
│   └── 07-cierre
├── 02-titulo-corto-unidad/
├── 03-titulo-corto-unidad/
└── README.md
```

TODO readme de unidades tiene estructura o solo consiste de directoriod de partes?

## Anatomía de una _parte_ (actividad) de una _unidad_

Cada parte de cada unidad debe tener su propio `README.md`. La primera línea en
el `README.md` debe ser un `h1` con el título completo de la parte.

```text
h1 (título) *
ul *
  li (tipo) *
  li (formato) *
  li (duración) *
h2 (objetivos de aprendizaje)
ul
  li (objetivo de aprendizaje 1)
  li (objetivo de aprendizaje 2)
  li (objetivo de aprendizaje n)
hr *
body (el cuerpo/contenido)

* obligatorio
```

### Tipo

#### `seminario/seminar` (deprecated/legacy)

Un seminario es lo más parecido a una clase presencial tradicional. Los
seminarios son _guiados_ por unx o más instructorxs.

#### `lectura/read`

Las lecturas son artículos de contenido que pueden incluir videos, imágenes y
otros soprtes, embebidos o como vínculos externos.

#### `práctica/practice`

Las prácticas principalmente ejercicios y pueden tener diferentes entornos:
`js`, `web`, `node`, ...

#### `cuestionario/quiz`

Los cuestionarios a corto plazo se manejarán como links a Google Forms. Más
adelante se implementará una manera más apropiada para poder incluir en nuestro
LMS.

#### `taller/workshop` (deprecated/legacy)

Los talleres (o workshops) son sesiones guiadas o no guiadas (self-paced)
durante las cuales las alumnas realizan una actividad prolongada, como
implementación, diseño o investigación. Al final de un taller o grupo de
talleres normalmente se cierra con una demo o presentación.

### Formato

Cualquiera de los _tipos_ de contenido anteriores pueden darse (o proponerse) en
dos formatos:

#### `guiado/guided` (deprecated/legacy)

Los contenidos guiados son aquellos donde la _clase_ es dirigida por unx o más
instructorxs. Los seminarios son siempre guiados, mientras que los talleres,
lecturas o ejercicios pueden ser guiados o no.

#### `self-paced`

Los contenidos _self paced_ (a tu propio ritmo) son aquellos que están dirigidos
por las alumnas y por lo general podrían ver estas partes en su propio tiempo.
En este formato, lxs instructorxs tienen el rol de acompañar, guíar y apoyar,
pero son ellxs quienes dirigen la actividad.

### Duracion ? TODO como averiguar eso
