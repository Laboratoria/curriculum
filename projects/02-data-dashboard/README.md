# Data Dashboard

## Preámbulo

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al desempeño de las estudiantes para
apoyarlas en su aprendizaje.

Desde hace unos meses tenemos un sistema donde nuestras estudiantes acceden a
contenidos de aprendizaje (lecturas, ejercicios, quizzes, ...), nuestro LMS, el
cual acumula data sobre quién leyó qué, qué ejercicios se han completado y los
resultados de los quizzes, ...

Al ser todavía una aplicación en su infancia, el LMS por ahora no implementa una
visualización de esta data que permita a las TMs ver fácilmente el avance de las
estudiantes con respecto a estos contenidos. Así que nos han pedido que
construyamos una interfaz donde pueden _ver_ y _usar_ esa data.

## Introducción

Contexto sobre el tema, importancia, historia, ...: data (arreglos, objetos),
JSON, DOM, XHR.

## Objetivos

El objetivo principal de aprendizaje de este reto es construir una _interfaz_
web donde podamos visualizar y manipular data.

Tópicos: _arrays_, _objects_, _dom_, _xhr_, ...

## Consideraciones generales

- Trabajar en parejas
- Tener una planificación
- La definición del diseño
- Implementación del data dashboard usando `html`, `css` y `js`
- Desplegar el producto en Github Pages

La lógica del reto debe estar implementada completamente en JavaScript (ES6),
HTML y CSS. En este reto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) usando el
comando `npm test`.

Para comenzar este reto tendrás que hacer un _fork_ y _clonar_ este repositorio
que contiene el _boilerplate_.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── data
│   ├── cohorts
│   │   └── lim-2018-03-pre-core-pw
│   │       ├── progress.json
│   │       └── users.json
│   └── cohorts.json
├── package.json
├── src
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    ├── data.spec.js
    ├── fixtures.js
    ├── headless.js
    └── index.html
```

## Parte obligatoria

* Listar/seleccionar cohorts
* Dentro de cada cohort:
  * Listar alumnas
  * Para cada alumna:
    - Calcular porcentaje de completitud de todos los _cursos_ por alumna.
    - Calcular grado de completitud de _lecturas_, _ejercicios autocorregidos_,
    _quizzes_ y _self assessment_.

## Hacker edition

* Live API (https://api.laboratoria.la/)
* Gráficas
* Detalle de progreso de cada alumna (por curso)
* Estadísticas de progreso de todo el cohort

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages.

***

## Primeros pasos

1. Haz un _fork_ de este repositorio en tu cuenta de GitHub.
2. Clona el repo en tu computadora.
3. Instala las dependencias del proyecto con el comando `npm install`.
4. Puedes ejecutar los tests con el comando `npm test` dentro de la carpeta del
   reto.

***

## Tips / Pistas

...

***
***
***

## Preámbulo

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la
mayor cantidad de datos posibles respecto al desempeño de las estudiantes para
apoyarlas en su aprendizaje. Para revisar esta data, las TMs normalmente
tienen que revisar muchas hojas de cálculo (Spreadsheets) que están localizadas
en distintas carpetas y ubicaciones. Muchas veces pierden tiempo localizando
estos documentos y _ejecutando_ fórmulas para obtener los datos que necesitan.

## Introducción

Para poder optimizar su tiempo, las TMs han solicitado que construyamos una
herramienta web donde puedan ver estos datos fácil y rápidamente. Y nos
comentaron que estos son los datos que revisan normalmente:

- El total de estudiantes presentes por sede y generación.
- El porcentaje de deserción de estudiantes.
- La cantidad de estudiantes que superan la meta de puntos en promedio de todos
  los sprints cursados. La meta de puntos es 70% del total de puntos en HSE y en tech.
- El porcentaje que representa el dato anterior en relación al total de
  estudiantes.
- El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se
  calcula en base a la encuesta que las estudiantes responden al respecto de
  la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

  ```text
  [Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
  [Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
  [Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100

  [NPS] = [Promoters] - [Detractors]
  ```
- La cantidad y el porcentaje que representa el total de estudiantes que superan
  la meta de puntos técnicos en promedio y por sprint.
- La cantidad y el porcentaje que representa el total de estudiantes que superan
  la meta de puntos de HSE en promedio y por sprint.
- El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
- La puntuación promedio de l@s profesores.
- La puntuación promedio de l@s jedi masters.

Con esa información y con la [base de datos que nos facilitaron](https://github.com/Laboratoria-learning/data-dashboard/blob/master/js/data.js)
pudimos crear [este diseño](https://marvelapp.com/104ejifg/). Sin embargo,
creemos que tú podrías proponer algún cambio a este diseño que pueda mejorar la
experiencia de las TMs.

## Consideraciones generales

- Trabajar en parejas
- Tener una planificación
- La definición del diseño
- Implementación del data dashboard usando `html`, `css` y `js`
- Desplegar el producto en Github Pages

## Hacker edition

En Laboratoria (y sobre todo las TMs) somos adictos a la representación gráfica
de los datos y como muestra el diseño, sería ideal poder mostrar los datos
procesados en un gráfico como el diseño propone u otra alternativa.

> Nota: En la etapa de diseño de la experiencia del producto, nos dimos cuenta
> que [Google Charts](https://developers.google.com/chart/interactive/docs/quick_start)
> podría ser una opción para desarrollar estos gráficos, pero no es la única que
> se puede usar :smiley:.

Además, la proactividad (siempre de las TMs :joy:) hace que el siguiente
requerimiento adicional sea muy útil:

> Tener un botón que permita indicar que una estudiante ha salido del Bootcamp y
> alterar los totales afectados por este cambio.
