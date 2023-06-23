# Números romanos

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

![Entrada a la sección LII del Coliseo, con los números aún visibles](https://upload.wikimedia.org/wikipedia/commons/6/6b/Colosseum-Entrance_LII.jpg)

> La numeración romana es un sistema de numeración que se desarrolló en la
> Antigua Roma y se utilizó en todo el Imperio romano, manteniéndose con
> posterioridad a su desaparición y todavía utilizado en algunos ámbitos.
>
> Este sistema emplea algunas letras mayúsculas como símbolos para representar
> ciertos valores. Los números se escriben como combinaciones de letras. Por
> ejemplo, el año 2020 se escribe como MMXX, donde cada M representa 1000
> unidades y cada X representa 10 unidades más.
>
> Está basado en la numeración etrusca, la cual, a diferencia de la numeración
> decimal que está basada en un sistema posicional, se basa en un sistema
> aditivo (cada signo representa un valor que se va sumando al anterior). La
> numeración romana posteriormente evolucionó a un sistema sustractivo, en el
> cual algunos signos en lugar de sumar, restan. Por ejemplo el 4 en la
> numeración etrusca se representaba como IIII (1+1+1+1), mientras que en la
> numeración romana moderna se representa como IV (1 restado a 5).
>
> Fuente: [Numeración romana - Wikipedia](https://es.wikipedia.org/wiki/Numeraci%C3%B3n_romana)

## 2. Resumen del proyecto

En este proyecto construirás un **módulo de JavaScript** (instalable via `npm`)
que permita al usuario converir [números arábigos](https://es.wikipedia.org/wiki/N%C3%BAmeros_ar%C3%A1bigos)
en [números romanos](https://es.wikipedia.org/wiki/Numeraci%C3%B3n_romana) y
viceversa. El paquete (lo que instalamos a través de `npm`) también debe incluir
un script _ejecutable_ que nos permita usar la librería desde el terminal (CLI).

Además de ofrecer la funcionalidad directamente en JavaScript como módulo que
podemos _requerir_ o _importar_, y la interfaz de línea de comando, te invitamos
también a construir alguna interfaz más (y en otro ambiente) que haga uso de
dicha librería:

* Un [_slash command_ de Slack](https://api.slack.com/interactivity/slash-commands)
  que nos permita usar el módulo desde la interfaz de Slack.
* Un conversor de números arábigos a romanos como aplicación nativa para celular
* Una extensión para el navegador (Firefox o Chrome) que permita hacer la
  conversión de números.

Esto podríá organizarse como un equipo o más, cada uno con un entregable
distinto, pero que integren el módulo construido como parte central.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

* El equipo de coaches te dará un tiempo sugerido e indicaciones sobre si
  trabajar sola o en equipo. Recuerda que cada una aprende a diferente ritmo.

* La **librería** y el **script ejecutable** (herramienta de línea de comando -
  CLI) deben estar implementados en JavaScript para ser ejecutados con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo **debe ser instalable** via `npm install <github-user>/roman-numerals`.
  Este módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea
  de comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Las **pruebas unitarias** deben cubrir un mínimo del 80% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/)
  para tus pruebas unitarias.

## 5. Criterios de aceptación mínimos del proyecto

### Módulo instalable

Tu módulo debe estar alojado en un repo en GitHub y debe contener un archivo
`package.json`. Estas dos cosas hacen posible que el módulo se pueda instalar
usando `npm` y la ruta del repo en GitHub. Por ejemplo:

```sh
npm install usuario-de-github/roman-numerals
```

### API de JavaScript

El módulo debe _exportar_ un _objeto_ con dos métodos:

* `parse(str)`: Recibe un `String` como único argumento y retorna un número
  (`Number`) en caso que sea un número romano válido, en caso contrario arrojará
  un error especificando la causa.
* `stringify(num)`: Recibe un número (`Number`) y retorna un `String` con la
  representación del número recibido como número romano. En caso de que el
  número esté fuera de rango (`1 <= num <= 3999`).

Ejemplo de uso:

```js
const { parse, stringify } = require('usuario-de-github/roman-numerals');

console.log(parse('I') === 1); // true
console.log(parse('III') === 3); // true
console.log(parse('IV') === 4); // true
console.log(parse('IX') === 9); // true
console.log(parse('MCMXLIV') === 1944); // true

console.log(stringify(1) === 'I'); // true
console.log(stringify(3) === 'III'); // true
console.log(stringify(4) === 'IV'); // true
console.log(stringify(9) === 'IX'); // true
console.log(stringify(1944) === 'MCMXLIV'); // true

console.log(parse(stringify(1)) === 1); // true
console.log(parse(stringify(3)) === 3); // true
console.log(parse(stringify(4)) === 4); // true
console.log(parse(stringify(9)) === 9); // true
console.log(parse(stringify(1944)) === 1944); // true
```

### Interfaz de línea de comando (CLI - Command Line Interface)

Asegúrate que tu `package.json` incluye la llave [`bin`](https://docs.npmjs.com/files/package.json#bin)
para que tu módulo explícitamente exponga la interfaz de línea de comando. Esto
nos va a permitir instalar el comando `roman-numerals` de forma global y quede
siempre disponible en tu terminal, además de permitir que se invoque usando el
comando `npx` (una herramienta que viene con `node` y `npm`).

Esta interfaz debe ofrecer dos _sub-comandos_ (`parse` y `stringify`) además
de opciones para mostrar ayuda (`-h` y `--help`) y la versión del módulo (`-v`
y `--version`).

Ambos `parse` y `stringify` deben permitir input como argumento de línea de
comando (`argv`) o alternativa a través de [`stdin`](https://nodejs.org/api/process.html#process_process_stdin).

#### Ejemplos

Ejecutando directamente a través de la ruta relativa al script `bin/cli.js`:

```sh
$ ./bin/cli.js parse MMXX
2020

$ ./bin/cli.js stringify 2020
MMXX
```

Usando `npx`:

```sh
$ npx roman-numerals parse MMXX
2020

$ npx roman-numerals stringify 2020
MMXX
```

Usando [stdin](https://nodejs.org/api/process.html#process_process_stdin):

```sh
$ echo MMXX | npx roman-numerals parse
2020

$ echo 2020 | npx roman-numerals stringify
MMXX
```

Mostrar versión:

```text
$ npx roman-numerals -v
1.0.0
```

Mostrar ayuda:

```text
$ npx roman-numerals -h
Usage: roman-numerals [opttions] <command> [<input>]

Commands:
  parse <input>      Parse a roman numeral string into an integer.
  stringify <input>  Takes an integer and converts it to a roman numeral.

Options:
  -h,--help     Show this help.
  -v,--version  Show version number.
```

## 6. Pistas, tips y lecturas complementarias

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [learnyounode](https://github.com/workshopper/learnyounode)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
* [process.stdin - Node.js Docs](https://nodejs.org/api/process.html#process_process_stdin)
* [process.argv](https://nodejs.org/api/process.html#process_process_argv)

<!--
* https://github.com/sguest/RomanJS/blob/master/roman.js
* https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-roman-numeral-converter/16044
* https://stackoverflow.com/a/9083076
* https://medium.com/javascript-in-plain-english/algorithms-101-convert-roman-numerals-to-integers-in-javascript-d3aba86a43d4
* https://blog.usejournal.com/create-a-roman-numerals-converter-in-javascript-a82fda6b7a60
* https://www.w3resource.com/javascript-exercises/javascript-math-exercise-22.php
-->
