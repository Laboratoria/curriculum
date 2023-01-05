---
type: read
duration: 20min
---

# GitHub

## Objetivos de Aprendizaje

* Crear tu cuenta en `Github`
* Diferenciar `Git` de `Github`
* Entender los conceptos básicos: local, remoto, working directory, staging
  area y branches
* Saber utilizar los comandos esenciales: `remote`, `push` y `pull`

## ¿Qué es Github?

`Github` es conocida como la "red social" de los developers debido a que una
gran cantidad de ellos suben sus proyectos aquí. Esto les permite crear
`repositorios remotos` que guardarán siempre una copia de su código y a la cual
podrán acceder fácilmente mediante `Git` que es el controlador de versiones.

Pero `Github` no solo sirve para "subir" nuestro código, él también contribuirá
al desarrollo colaborativo del proyecto brindándonos herramientas como por
ejemplo:

* Un `sistema de seguimiento de problemas` que permite a los miembros de un
  equipo detallar un problema o una sugerencia que deseen hacer del proyecto.
* Una `herramienta de revisión de código`, donde se pueden añadir anotaciones
  en cualquier punto del proyecto y debatir sobre un cambio en específico.
* Un `visor de versiones` donde se puede comparar el progreso del proyecto en
  las distintas versiones.

**En resumen, se podría decir que `Github` es como Dropbox pero para developers.**

## ¿Cuál es la diferencia entre Git y Github?

**`Git` y `Github` se complementan pero no son iguales.**

`Github` utiliza a `Git` como `Sistema de Control de Versiones`. Gracias a
`Git` podremos guardar localmente los diferentes avances (estados) de nuestro
proyecto y gracias a `Github` podremos subir esos avances a la `nube` y
comenzar un trabajo colaborativo o trabajar en nuestros proyectos personales
sin depender de la computadora donde se encuentre el proyecto o tener que estar
guardándolo en un usb para copiarlo a otra computadora.

## ¿Por qué es importante Git y Github?

La programación se da, en su mayoría de veces, en equipos. Varias empresas
tienen un equipo que se complementa para cada proyecto. Ante esta situación
te preguntarás:

> ¿Cómo se organizan para trabajar todos en un solo proyecto? Tal vez tienen
> todo en un usb y se lo turnan para poder trabajar, o trabajan cada uno por su
> lado y al momento de tener que unir las partes tienen que ver detalladamente
> si se repiten o no alguna parte.

Esto no sería para nada eficiente, porque no se podría trabajar al mismo tiempo
en algo en específico y se tendría que depender del avance de otro para que
nosotros podamos avanzar.

Para estos casos existen herramientas como `Git` y `Github`, los cuales nos
ayudan al momento de un trabajo colaborativo. `Github` es el lugar perfecto
para trabajar conjuntamente en un proyecto con uno o varios compañeros, podrás
crear un proyecto y añadir como colaboradores a los miembros de tu equipo;
además, podrás traer a tu repositorio local los cambios que tus compañeros
hayan subido al repositorio remoto y podrás ver automáticamente lo que acaba de
añadir tu compañero.

## ¿Cómo crear una cuenta en Github?

Para crear tu cuenta de `Github` debemos seguir los siguientes pasos:

1. Debemos de dirigirnos a la [página oficial de Github](https://github.com)
2. Ya en la página, haremos clic en **Sign up**.
3. Ahora deberás escribir un **username**, que podrá ser uno que ya tengas. Por
   ejemplo, si tienes un **username** que creaste para un juego online podrías
   usar ese. No hay límites de cómo debe de ser, pero ten en cuenta que será
   visible para todo el mundo y puede que te lo pidan en algún momento para
   añadirte como colaborador de un proyecto, así que ten cuidado con lo que
   pongas como **username**. Luego ingresa tu **correo**, una **contraseña** y
   haz clic en **Create an account**.
4. En la siguiente pantalla asegúrate de marcar la opción **Unlimited public
  repositories for free**, esta es la versión "free" de `Github`; luego haz
  clic en **continue**.
5. El paso 3 del registro puedes completarlo con tus datos y hacer clic en
  **Submit**, o solo hacer clic en **Skip this step**.

¡Y listo! Al hacer todos estos pasos ya tendríamos nuestra cuenta de `Github`
creada.

Ahora Michelle, siguiendo los pasos anteriores, creará su cuenta en `Github`.

[![creando cuenta de github](https://img.youtube.com/vi/1r9ixrSftaI/0.jpg)](https://www.youtube.com/watch?v=1r9ixrSftaI)

## ¿Cómo creamos un repositorio remoto en Github?

Sigue los pasos de Michelle para crear un repositorio en `Github`:

[![Creando repositorio](https://img.youtube.com/vi/KCLpcq9BPcc/0.jpg)](https://www.youtube.com/watch?v=KCLpcq9BPcc)

Por último tenemos la pantalla donde encontrarmos la `url` de nuestro
`repositorio remoto`, con la cual (más adelante) vincularemos nuestro
repositorio remoto con nuestro repositorio local.

## ¿Cómo usar Git y Github?

Hemos leído las ventajas que nos pueden brindar `Git` y `Github`, con ellos
podremos subir un repositorio local a uno remoto, trabajar con versiones y
colaborativamente, etc. Ahora hagamos la "magia" de trabajar con `Git` y
`Github`, vamos a subir nuestro `repositorio local` a uno `remoto` y trabajar
colaborativamente.

* `remote`: Con `remote` **vincularemos** nuestro repositorio local con nuestro
  repositorio que se encuentra en la "nube" por medio de la **url**.
  Este paso no se debe de hacer cada vez que creemos una nueva versión, solo
  cuando queramos especificar el repositorio remoto que tendremos.
  Entonces, para enlazar nuestro repositorio local con nuestro repositorio
  remoto debemos de ejecutar el siguiente comando:

  ```text
  git remote add nombre-remoto url
  ```

  Normalmente, la mayoría de los developers, como **nombre-remoto** utiliza
  `origin` y **url** es la "ruta" (url) de nuestro repositorio en `Github`.
  Por ejemplo, hace un momento he creado el repositorio "prueba" en `Github` y
  si quiero vincular mi repositorio local con ese repositorio remoto tendría
  que ejecutar la siguiente línea de comando:

  ```text
  git remote add origin https://github.com/michellesegv/prueba.git
  ```

* `push`: Por medio de `push` **enviaremos** nuestra nueva versión que
  confirmamos en el `commit` a nuestro repositorio remoto. El comando es el
  siguiente:

  ```text
  git push nombre-remoto master
  ```

  En **nombre-remoto** pondremos el mismo nombre-remoto que le hemos asignado
  al momento de añadir la url de nuestro proyecto (en nuestro caso sería
  **origin**) y seguido pondremos **master**, más adelante conoceremos el
  trabajo en "ramas" que tiene `Github`. Las **ramas** son una copia paralela
  que podemos crear de nuestro código. Por defecto, los repositorios traen una
  "rama" llamada **master** y ahora trabajaremos solo en ella, así que
  subiremos nuestros cambios a ella especificando **master** como el nombre de
  la rama a la que queremos subir nuestra versión, entonces el comando a
  ejecutar sería:

  ```text
  git push origin master
  ```

* `pull`: Sirve para actualizar nuestro repositorio local al último`commit` que
  tengamos registrado en el repositorio remoto. Este comando nos servirá mucho
  al momento de trabajar colaborativamente  porque podremos tener los avances
  que nuestros colaboradores han subido al repositorio remotro a nuestro
  repositorio local y mantenerlo actualizado. El comando es el siguiente:

  ```text
  git pull nombre-remoto master
  ```

  En nuestro caso, como nuestro **nombre-remoto** ya lo declaramos como
  **origin** y la rama en la que estamos trabajando se llama **master**, el
  comando sería:

  ```text
  git pull origin master
  ```

## Ejemplo

Ahora veamos cómo Michelle utiliza `Git` y `Github` para manejar el control de
versiones de sus proyectos y colaborar con otras coaches de Laboratoria.

[![Subiendo repositorio](https://img.youtube.com/vi/Af51B0tI8Zs/0.jpg)](https://www.youtube.com/watch?v=Af51B0tI8Zs)

## Lecturas complementarias

Recomendamos los siguientes recursos:

* [Try Git](https://try.github.io/levels/1/challenges/1)
* [GitHub Flow](https://services.github.com/on-demand/intro-to-github/)
* [Learn git branching](https://learngitbranching.js.org/). Guía de temas un
  poco más avanzados, especialmente los relacionados a branching y repositorios
  remotos, no solo es visualmente atractivo y dinámico, sino que también es
  interactivo.
* [Otro tutorial interactivo y visual](http://www.ndpsoftware.com/git-cheatsheet.html)
