# Deployment

En el contexto de este proyecto, el actualizar el despliegue
o _deploy_  normalmente hace referencia a realizar un
nuevo _release_, que es una forma de versionar las distintas
piezas de código que se encuentran en este repositorio y que son relevantes
para el Bootcamp de Laboratoria.

Estas comprenden por un lado
[los README de los proyectos](https://github.com/Laboratoria/bootcamp/tree/main/projects)
que realizan
las estudiantes como
[los scripts](https://github.com/Laboratoria/bootcamp/tree/main/scripts)
que
utilizan las Coaches de Laboratoria para generar los enunciados
pertinentes a cada _cohort_, entre otras cosas.

También con cada release se actualiza a una nueva versión nuestro
[sitio de currícula](https://curriculum.laboratoria.la), que
es una aplicación de [React](https://reactjs.org/) que consume la
información contenida en los directorios de
[proyectos](https://github.com/Laboratoria/bootcamp/tree/main/projects)
y [tópicos](https://github.com/Laboratoria/bootcamp/tree/main/topics),
que también incluye una sección de
[ejercicios](https://curriculum.laboratoria.la/es/js/gym)
asociados al track de Web Development.

La operación de hacer un release incluye las siguientes consideraciones:

* En el repositorio del proyecto en Github utilizamos
  [Milestones](https://github.com/Laboratoria/bootcamp/milestones) para
  dar seguimiento a los
  [issues](https://github.com/Laboratoria/bootcamp/issues) y
  [pull requests](https://github.com/Laboratoria/bootcamp/pulls) que serán
  parte del release; Como _rule of thumb_ la idea es que
  se logren cerrar los issues y mergear los PRs relacionados
  al milestone actual; En caso de que no se alcancen a cerrar
  issues o PRs para el día del release, estos deben ser movidos a un siguiente
  milestone, de manera que el que está asociado al release no
  tenga ningún issue o PR pendiente.

* Con cada release se publica además la información asociada
  a él en la sección
  [_Releases_](https://github.com/Laboratoria/bootcamp/releases/) de Github,
  donde se exponen los cambios que éste contiene, en Portugués de Brasil y en
  Español Latinoamericano, donde su estructura incluye:

  - _Tag_ (versión), título e imagen asociada
  - Link al milestone asociado al release
  - _Highlights_: Descripción de los cambios, usualmente
    en primer lugar los _breaking changes_ y luego los cambios
    más grandes, incluyendo links a los issues, commits y PRs asociados
    a ellos.
  - _Minor changes_: Cambios más pequeños, usualmente
    arreglos de links rotos, _typos_ en los README
    y cambios de esa naturaleza.
  - _Changelog_: El _output_ del comando `npm run changelog` ejecutado
    en el directorio del proyecto, etiquetando a las personas marcadas
    como autoras del cambio por su _handle_ (username) en Github.

* La publicación del release en Github debe ser realizada **después**
  de haber hecho el último _push_, que incluye el _tag_ de la nueva versión,
  el cual será utilizado para ser asociado a esta. Puedes empezar
  la publicación como draft en cualquier momento, y después del último
  _push_ con el tag, la puedes publicar.

Una vez que se haya revisado el contenido del milestone y se haya asegurado
que no queda ningún issue o PR pendiente en él, y que se haya actualizado el
_draft_ de release en Github con la información pertinente al release
(mucho cuidado con no publicar aún el release en Github hasta que se hayan
cumplido todos los demás pasos y esté ya el _tag_ de la versión a publicar
en Github) se deben ejecutar los siguiente pasos:

Los siguientes pasos deben ser ejecutados desde la rama `next`.

1. Actualización de dependencias: Se debe ejecutar el comando
  `npm outdated --depth 0` para revisar qué dependencias pueden actualizarse,
  se recomienda, antes de cambiar la versión de ellas, revisar el _changelog_
  o release de la dependencia para ver si incluye o no _breaking changes_
  que podrían afectarnos; Luego de cambiar la versión y hacer `npm install`
  se recomienda también ejecutar los tests del repo y arrancar una copia
  local para asegurar que no se ha gatillado ningún nuevo error.

2. Actualización del _changelog_: Se debe ejecutar el comando
  `npm run changelog` para obtener la lista de todos los cambios que han
  ocurrido desde el último release hasta ahora, y agregar esa lista al
  _draft_ de release de la currícula en Github, cambiando los _handles_
  para etiquetar a las personas correspondientes (tipo `@username`).

3. Actualizar manualmente la versión del proyecto en su archivo `package.json`:
  Se debe actualizar el atributo `version` del archivo `package.json`
  para reflejar la nueva versión a ser publicada; Seguimos las convenciones
  de [semver](https://semver.org/) para realizar aquello.

4. Reconstruir el directorio `dist`: La aplicación de currícula
  consume los README de proyectos y tópicos transformados a archivos
  en formato `json`, alojados dentro del directorio `dist`, para
  generar esos archivos con los cambios realizados a los README se
  debe primero eliminar el contenido del directorio, puedes hacerlo utilizando
  el comando `rm -rf dist`, y luego para generar los `json` se
  ejecuta el script [`build.js`](./scripts/build.js) utilizando el comando
  `npm run build:content`; Con esto se reconstruye todo el directorio.

5. Agregar los cambios y hacer el commit: Una vez actualizado el directorio
  `dist` podemos ya agregar los cambios utilizando el comando
  `git add package* dist/` y luego realizar el commit con la siguiente
  información:
  `git commit -m "chore(release): Bumps version to vX.X.X and updates dist files"`
  donde `vX.X.X` debe ser reemplazado por la nueva versión.

6. Crear el _tag_ (etiqueta) de release: Se debe adjuntar el _tag_
  correspondiente al release, para ello se debe ejecutar el comando
  `git tag -a vX.X.X -m "vX.X.X - Release name"` donde `vX.X.X`
  debe ser reemplazado por la nueva versión (siempre partiendo con la
  `v` minúscula) y `Release name` por el
  título escogido para el release (siguiendo la convención escogida
  para el título de la publicación en Github).

7. Empujar los cambios y tags a _upstream_: Una vez realizados todos
  los pasos anteriores, procederemos a empujar los cambios a Github
  directamente al repositorio de Laboratoria incluyendo el _tag_ asociado
  al release (normalmente al repo original
  del cual hacemos fork se le configura su _remote_ bajo el alias "upstream")
  ejecutando el comando `git push upstream next --tags`.

8. Para _distribuir_ la version estable, hay que pasar los cambios de la rama
  `next` a la rama `main`. En tu local, sobre la rama `main`, ejecuta el
  siguiente comando: `git rebase next`. Luego, para publicarlo debes ejecutar
  el comando: `git push upstream main --tags`

Una vez cumpletados estos pasos, puedes seleccionar el _tag_ que acabas de
pushear, para asociarlo al _draft_ de release, y darle _publish_.

Una vez realizado ese paso, se ejecutarán en Github las
[actions](https://github.com/features/actions) asociadas al repositorio,
que en este caso son 2, una para hacer un deploy a `production` y otra
para hacer un deploy a `staging`.

Deploy a `staging`: Ocurre cuando el _tag_ asociado a un _push_
comienza con una `v` minúscula y contiene las palabras `alpha` o `beta`, por
ejemplo: `git tag -a vX.X.X-alpha.X` o `git tag -a vX.X.X-beta.X`, y en ese caso,
se ejecutará la _action_ que creará una url (distinta a la del deploy a
`production`) con el sitio deployado para ser revisado y compartido en caso
de que se necesite recibir feedback de él, o se necesiten hacer más pruebas
antes de hacer un release formal a `production`, esta url tendrá como duración
30 días, luego de eso dejará de estar disponible para acceder a ella.

Deploy a `production`: Ocurre cuando el _tag_ asociado a un _push_
comienza con una `v` minúscula y **no** contiene las palabras `alpha` ni
`beta`, y en ese caso, se ejecutará la _action_ que actualizará el deploy
del [sitio de currícula](https://curriculum.laboratoria.la).

Para más información sobre las configuraciones de las _actions_ de
Github, puedes revisar los archivos relacionados en
[`.github/workflows`](../.github/workflows).
