# Cardify

## ...

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

***

## Preámbulo

Programar en JavaScript te hace ver _cool_, conocer las particularidades del
lenguaje es aún mejor. Este curso no es una introducción a JavaScript, sino
una profundización en el lenguaje. Verás temas que probablemente ya conozcas
pero desde una perspectiva de performance y buenas prácticas conociendo ciertas
peculiaridades de JavaScript que lo hace distinto a los demás lenguajes de
programación.

El objetivo práctico de este reto es que aprendas cómo crear tu propia librería
(o biblioteca - _library_) en JavaScript. Como desarrolladorxs, estamos
constantemente usando _módulos_ de terceros, ya sean librerías, frameworks o la
_librería estándar_ (standard library) tanto del lenguaje en sí como el
entorno/motor de ejecución (el navegador, node.js, ...).

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrollador ya que te obliga a pensar en la interfaz (API) de tus módulos,
cómo serán usados por otras personas, ... y tener especial consideración en
peculiaridades del lenguaje, convenciones y buenas prácticas.

## ...

El objetivo central de este curso es construir una librería (_library_) que
responda a los requisitos de uno de los retos detallados más abajo.

El reto se hará en grupos de dos alumnas y será presentado al final del curso en
una demo al resto de la clase. A lo largo del curso tus instructorxs te guiarán
en el proceso así como tus compañeras.

[Repo](https://github.com/Laboratoria-learning/cardify)

## Requisitos

Todos los retos deben incluir por los menos los siguientes archivos:

* `README.md` con descripción del módulo, instrucciones de instalación, uso y
  documentación del API.
* `index.js`: Librería debe exportar una función u objeto al entorno global
  (`window`) y hacer uso de _features_ de ES6 donde sea apropiado.
* `index.html`: Página web de la librería con ejemplo funcionando.
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...)
* `.eslintrc` con configuración para linter (ver [guía de estilo de
  JavaScript](https://github.com/Laboratoria/js-style-guide))
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).

Hacker edition (opcional):

* Si la librería está dirigida al navegador, debe adherirse al patrón
  [UMD](https://github.com/umdjs/umd) para poder ser usado con AMD, CommonJS y
  como variable global del navegador.
* Integración continua con Travis o Circle CI

## ...

Una vez creados los equipos, es hora de crear un plan de acción. Esto debería
quedar detallado en el `README.md` de tu repo así como en una serie de _issues_
y _milestones_ para coordinar el trabajo y poder hacer seguimiento del progreso.

Dentro de cada _milestone_ se crearán y asignarán los _issues_ que cada equipo
considere necesario para completar el reto.

Una vez iniciado el curso, no dudes en añadir issues con preguntas o sugerencias
tanto para tu equipo como para la clase en general incluyendo a lxs
instructorxs.
