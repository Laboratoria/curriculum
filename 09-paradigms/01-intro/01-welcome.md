# Presentación del curso

* Formato: `lectura`
* Duración: `15min`

## Objetivos de la lección

* Hacer un resumen de lo que vamos a aprender en este curso
* Explicar la estrategia de aprendizaje: workshops, videos/lecturas, producto
* Explicar los entregables que se esperan de las alumnas
* Explicar cómo se va a evaluar el curso

***

## Qué vamos a aprender?

Como indica el nombre del curso, vamos a hablar de _Paradigmas de programación_,
que son formas diferentes de pensar en cómo se organiza un programa.

### 1. Paradigmas en general

* Qué son los **paradigmas de programación**
* Qué son **PP**, **FP** y **OOP**, y cómo se comparan
* A entender las diferencias y entre el estilo **imperativo vs declarativo**

### 2. Programación Orientada a Objetos (OOP)

* Las diferencias entre **constructores** y **factories**
* Cómo implementar **herencia prototipal**
* `Object.create`

### 3. Programación Funcional (FP)

* Los principios básicos de la **programación funcional**
* A usar **composición** como alternativa a la _herencia_
* `Object.assign`

### 4. Otros

* A **trabajar sobre una base de código existente**
* A trabajar haciendo **pair programming**
* A sacarle el jugo a git y GitHub usando **issues**, **milestones**,
  **branches**, **forks** y **pull requests**

## Estrategia de aprendizaje

Este curso se compone de `workshops` presenciales, `lecturas/videos` y
`ejercicios` en el siguiente orden:

1. Empezaremos por un [workshop](../#workshop-1-entorno-y-metodología-de-trabajo)
   con el objetivo de que todas las alumnas tengan las herramientas necesarias y
   el entorno de desarrollo listo.
2. Después comienza el contenido específico de paradigmas, donde nos
   concentraremos en los paradigmas en general, sus diferencias, su historia...
   con una serie de [lecturas y videos](../03-paradigms/01-overview.md)
   intercalados con ejercicios (`Laboratoria/learnyouparadigms`).
3. Continuaremos con el formato de lecturas y videos para adentrarnos en la
   programación orientada a objetos, acompañados del workshopper
   [planetproto](https://github.com/sporto/planetproto).
4. Llegados a este punto haremos un workshop presencial para hacer solucionarios
   de `learnyouparadigms` y `planetproto`, y responder a tus preguntas.
5. Workshop presencial para extender juego añadiendo personajes usando herencia
   prototipal. El trabajo se hará en parejas, se entregará via pull request y se
   presentará una demo al final.
6. Regresamos a las lecturas para introducirnos en el estilo funcional, y en
   particular el concepto de composoción como alternativa a las jerarquías de
   herencia. Las lecturas estarán acompañadas de los ejercicios del workshopper
   `Laboratoria/coi`.
7. Workshop presencial para hacer solucionario de `Laboratoria/coi` y responder
   a tus preguntas.
8. Workshop presencial para extender juego añadiendo personajes usando factories
   y composición de objetos. El trabajo se hará en parejas, se entregará via
   pull request y se presentará una demo al final.

## Entregables

Todos los entregables del curso se manejarán en el repositorio de tu cohort. El
remoto orígen estará alojado en GitHub (`Laboratoria/<cohort-id>`). Lxs
instructorxs te crearán una rama con tu nombre de usuario en GitHub, además de
una rama para cada set de ejercicios o workshop de implementación.

Al finalizar el curso, tu rama debería quedar con las siguientes carpetas:

```text
.
├── coi
├── game-fp
├── game-oop
├── paradigms
└── planetproto
```

* `coi`: cada ejercicio de `Laboratoria/coi` será un archivo
* `game-fp`: código fuente del juego con personajes usando factories
* `game-oop`: código fuente del juego con personajes usando constructores/prototipos
* `paradigms`: cada ejercicio de `Laboratoria/learnyouparadigms` será un archivo
* `planetproto`: cada ejercicio de `planetproto` será un archivo

## Evaluación

* Ejercicios (40% => 13.3% x 3)
* Proyectos/Demos (60% => 30% x 2)

***

[Continuar](../02-env/01-git%2Bgithub.md)
