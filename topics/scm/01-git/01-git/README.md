---
type: read
duration: 5min
---

# ¿Qué es Git?

El texto a continuación se basa en gran medida, con ciertos ajustes, en las
siguientes páginas:

- [Pro Git book](https://git-scm.com/book/en/v2)
- [Getting Started with Git - Arun Sood](https://github.com/wdi-sf-september-2014/notes/tree/master/git_intro)

***

`Git` es un `Sistema de Control de Versiones`.

> **¿Qué es el Sistema de Control de Versiones?**

El `Sistema de Control de Versiones` (VCS en inglés) es un sistema que
registrará los cambios de uno, dos o varios archivos todo el tiempo para que
si más adelante,necesitamos una versión, podamos recuperarla fácilmente.
Por ejemplo, si alguna vez has elaborado un proyecto para una tarea ¿no te ha
pasado algo así?:

!['versiones'](http://fotos.subefotos.com/e6ea20e7174abf68ba4a047eaa0d5373o.png)

Gracias al VCS podemos hacer que eso no suceda debido a que permite:

- Revertir los archivos a un estado anterior.
- Revertir todo el proyecto a un estado anterior.
- Comparar los cambios que se hayan hecho a lo largo del proyecto.
- Ver quién introdujo un cambio o actualizó el archivo y cuándo.
- Y lo más importante, asegura que los archivos no se pierdan.

Ahora bien, `Git` nos ayudará a guardar y diferenciar todos los cambios que
haremos durante el desarrollo de un proyecto, ya sea de uno o más archivos.

Cada vez que confirmas un cambio, o guardas el estado de tu proyecto en `Git`,
él básicamente hace una foto del estado de todos tus archivos en ese momento, y
guarda una referencia a esa foto. Para ser eficiente, si los archivos no se han
modificado, `Git` no almacena el archivo otra vez, sólo un enlace al archivo
idéntico anterior que ya almacenó.

Tanto la colección de archivos como sus versiones completas serán guardadas en
un `repositorio`.

En resumen, `Git` piensa en tus archivos como un flujo de "imágenes". Por eso,
a cada cambio que vayamos realizando le tomará una foto en el instante que le
indiquemos y todo eso lo almacenará en un `repositorio local`.

**Ahora conozcamos algunas palabras claves que de seguro escucharás al momento de
 trabajar con Git**

- Repositorio local: Cuando hablamos de un `repositorio local` hacemos referencia
  a los archivos y a sus versiones que se encuentran en nuestro equipo.
  Aquí encontraremos dos partes muy importantes.
  * working directory: Es nuestro directorio de trabajo.
  * staging area: Es el espacio en donde se encuentran los archivos a los que `Git`
    les debe de hacer seguimiento y que en algún momento se convertirán en una nueva
    versión del proyecto.

- Repositorio remoto: `Git` nos permite sincronizar nuestro repositorio local
  con un repositorio remoto o repositorio en la "nube".
