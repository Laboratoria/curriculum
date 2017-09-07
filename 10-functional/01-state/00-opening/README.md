# Apertura

* Tipo: `seminario`
* Formato: `guiado`
* Duración: `15min`

## Objetivos del seminario

* Hacer un resumen de lo que vamos a aprender en esta unidad
* Explicar los entregables que se esperan de las alumnas
* Aclarar la _hoja de ruta_ de la unidad en el contexto del curso
* Preguntas y conceptos clave de esta unidad

***

## ¿Por qué aprender esto?

En esta unidad veremos dos de los principios fundamentales de la programación
funcional: cómo evitar el estado compartido usando **funciones puras** y el
concepto de **inmutabilidad**. Ambos conceptos son esenciales en el paradigma
funcional y su uso presenta un montón de beneficios, a veces sutiles, pero muy
importantes.

* Representan bloques de código reusable dentro de un programa.
* Promueven buenas prácticas de desarrollo como [DRY][]
  (*Don’t Repeat Yourself*) y [KISS][] (*Keep It Simple, Stupid*).
* Al no depender del contexto externo, son inmunes a toda clase de errores o
  *bugs* que tienen que ver con el estado mutable compartido.
* Su naturaleza independiente las hace excelentes candidatos para procesamiento
  concurrente a lo largo de muchos CPUs e incluso para la computación
  distribuida, lo cual las hace esenciales para la ejecución de tareas de
  cálculo científico y de uso intensivo de recursos.
* Su aislamiento facilita la refactorización y reorganización del código,
  haciendo tú código más adaptable y flexible a futuros cambios.
* Es mucho más sencillo el desarrollo de pruebas unitarias contra funciones
  puras.
* Las funciones puras representan la base de la programación funcional.

## Entregables y evaluación

* **Ejercicios**: Durante esta unidad completarás varios ejercicios en el LMS.
  Estos ejercicios incluyen tests automatizados con la intención de dar feedback
  immediato, pero los ejercicios en sí no serán calificados. Se elegirá uno o
  dos ejercicios junto con el proyecto para la sesión de _code review_, que sí
  será calificada.
* **Cuestionarios**: Al igual que los ejercicios, a lo largo de la unidad
  responderás varios cuestionarios con feedback immediato, y éstos no cuentan
  para la nota final.

## Hoja de ruta

### Semana 1

* **Sesión 1: presencial 3h => Funciones puras e inmutabilidad**
* Sesión 2: self-paced 2h => Refactorizar `Loader`

### Semana 2

* Pre-tarea: Lectura _Higher Order Functions_ (Unidad 03)
* Sesión 3: presencial 3h => Higher Order Functions
* Sesión 4: self-paced 2h => Refactorizar ???

### Semana 3

* Pre-tarea: Lectura _Recursividad_ (Unidad 05)
* Sesión 5: presencial 3h => Control de flujo (recursión y asincronía)
* Sesión 6: self-paced 2h => Refactorizar ???

### Semana 4

* Pre-tarea: Implementación, refactoring, pull request
* Sesión 7: presencial 3h => Code review + Demos de proyectos
* Sesión 8: self-paced 2h => Retrospectiva

## Guía de preguntas y conceptos clave

Cuando empezamos a estudiar un tema nuevo, es útil tener una idea de los
conceptos más importantes de lo que vamos a aprender y de los temas centrales
que debemos prestar particular atención.

A continuación te presentamos una serie de preguntas que debes ser capaz de
responder al terminar esta unidad. Utiliza estas preguntas como guía para
orientar tus esfuerzos de aprendizaje. Regresa a ellas constantemente a medida
que avanzas para validar que estás avanzando en la dirección correcta. Que te
sirva como un "checklist" que vas marcando a medida que vas progresando.

* Cómo evitar que nuestras funciones tengan efectos colaterales?
* Por qué es beneficioso evitar el estado compartido?
* Cuáles son las ventajas que ofrecen las funciones puras, en particular a la
  hora de hacer testing?
* Cómo evitar la mutación de objetos y arreglos?
* Qué tipos de datos son mutables e inmutables en JavaScript?
* Cómo usar métodos de arreglos como `Array#concat`, `Array#slice`, `Array#map`,
  `Array#filter`, ... para crear arreglos nuevos en vez de mutar (modificar)
  valores existentes?
* Cómo usar métodos de objetos (por ejemplo `Object.assign()`) para copiar
  propiedades y así _clonar_ objetos?
* Cómo usar el _spread operator_ (`...`) para copiar objetos y arreglos?
