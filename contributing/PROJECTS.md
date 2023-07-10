# Guía de Proyectos

## Anatomía de un proyecto

* Las carpetas de _proyectos_ siguen la nomenclarura `00-slug`, donde `00` son
  dos dígitos que expresan una intención de ordenado, y el `slug` es un string
  único para cada _proyecto_, en minúsculas y de entre `1` y `97` caracteres.
  Expresado como `RegExp` sería algo como `^\d{2}-[a-z\-]{1,97}$`. Longitud
  máxima del nombre de carpeta son `100` caracteres.
* El único archivo obligatorio es el `README.md`.
* Todo lo demás se considera _boilerplate_.

## project.yml

## `README.md`

Lo mejor es ver un par de ejemplos como
[`cipher`](../tree/master/projects/01-cipher) o
[`burger-queen`](../tree/master/projects/04-burger-queen).

* Debe comenzar con un `<h1>` con el _título_ del proyecto.
* Justo después del título debe incluir un _índice_ (TOC).
* El índice debería incluir solo un nivel del árbol, a menos de que haya un
  motivo especial que lo justifique.
* Inmediatamente después cerramos el índice con un `<hr />`.
* El índice no debe listarse a sí mismo. No hay necesidad de incluir el índice como primer elemento del índice.
* Los elementos del indice estarán numerados. Esto hace más fácil digerir y manejar la información del proyecto.

Ejemplo de título y TOC:

```md
# Título

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***
```

https://github.com/Laboratoria/bootcamp/blob/1b99054d798e945dcb863b4d14f7ea91dd53d726/projects/01-cipher/README.md?plain=1#L1-L16

### Secciones

Cada sección (obligatoria o no) comienza con un `<h2>` con el título de la
sección. Para facilitar la navegación y conversación sobre los proyectos usamos
un prefijo numérico (como lista numerada).

#### Secciones obligatorias

* 1. Preámbulo
* 2. Resumen del proyecto
* 3. Objetivos de aprendizaje
* 4. Consideraciones generales
* 5. Criterios de aceptación mínimos del proyecto
* 6. Pistas, tips y lecturas complementarias

Ejemplo de secciones:

```md
## 1. Preámbulo

Entre 1 y 3 párrafos dándo contexto al proyecto, las tecnologías y herramientas
involucradas, por qué es importante/útil aprender esto. Qué esperar del proyecto
(desde el punto de vista de la estudiante).

## 2. Resumen del proyecto

Un explanación de concepto de proyecto, mejor con un ejemplo y contexto.

## 3. Objetivos de aprendizaje

Este sección debe que estar en algun parte de proyecto (no importa el orden)
pero con el titulo `Objetivos de aprendizaje`. El script de curriculum parser
inserta los objetivos en este seccion, usando los que estan listado en el `project.yml`.

## 4. Consideraciones generales

Este proyecto se debe "resolver" de forma [individual/duplas/tríos/...].

Blah blah blah...

## 5. Criterios de aceptación mínimos del proyecto

### Definición del producto

Blah blah blah...

***

#### [Historia de usuario 1] Blah blah blah...

Blah blah blah...

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario)

* ...

##### Definición de terminado

Lo acordado que debe ocurrir para decir que la historia está terminada.

* ...

***

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

Blah blah blah...

### Otros recursos

Blah blah blah...
```

#### Secciones opcionales

* Hacker edition
* Consideraciones técnicas (más detalles técnicos :see_no_evil:)
* Checklist

### Learning Objectives 

Los Objetivos de Aprendizaje (Learning Objectives) tambien son abiertos a evolucionar.
Cada proyecto viene con objetivos que definimos en su `project.yml`.

Los objetivos que encuentran en el `proyect.yml` de un proyecto son solo algunos,
la lista completo esta en [`learning-objectives/data.yml`](./src/learning-objectives.data.yml){:target="_blank"}.
 
 Con esta lista definimos los objetivos completos, traducidos, en formato yaml
 que se encuentra en [`learning-objectives/intl`](./src/learning-objectives.data.yml){:target="_blank"}.

 Para proponer cambios...

 Para proponer nuevos...

