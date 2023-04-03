---
type: read
duration: 5min
---

# Comandos comunes

A continuación tienes la lista de los comandos más comunes que utilizarás
trabajando con `Git` y `Github`. Si te sigue pareciendo muy "teórico" no te
preocupes, más abajo habrá un video de Michelle utilizándolos.

- `init`: Este comando le indica a `Git` que comenzará a hacer seguimiento de
  la carpeta actual. En otras palabras, comenzará a vigilar esta carpeta. El
  comando para iniciar el seguimiento de la carpeta sería:

  ```text
  git init
  ```

  Al ejecutar esta línea, `Git` creará una carpeta oculta llamada `.git` en el
  working directory, en la raíz del proyecto.

- `add`: Con este comando estaremos indicando qué archivos queremos que pasen
  de nuestro _working directory_ al _staging area_. Es decir que los archivos
  ya han sido modificados y están **preparados**  para la nueva versión del
  proyecto.

  Por ejemplo, si quieremos añadir a nuestro _staging area_ el archivo `HTML`
  llamado **index.html** debemos de ejecutar la siguiente línea:

  ```text
  git add index.html
  ```

  Si queremos que todos los archivos del directorio actual se añadan al
  _staging area_ (definir que ya están preparados), ejecutamos la siguiente
  línea:

  ```text
  git add .
  ```

- `commit`: Con `commit` **confirmaremos** los archivos que declaramos como
  preparados con el comando anterior (`add`) .Con los archivos confirmados se
  creará una nueva versión del proyecto.
  La estructura del comando es la siguiente:

  ```text
  git commit -m 'añadiendo un comentario'
  ```

  El texto que va dentro de las comillas ('') puede ser cualquiera, te
  recomiendo que escribas un resumen de lo que estás subiendo en ese momento
  para que tengas una mejor organizacion, además, un buen comentario te servirá
  si quieres volver a una funcionalidad en especial sin tener que leer todo el
  código y solo guiarte por el comentario de tu commit. Por ejemplo:

  ```text
  git commit -m 'Creando estructura HTML'
  ```

- `status`: Con `status` conoceremos el estado de los archivos de nuestro
  repositorio local.
  Es decir, nos dirá si existe un archivo que se ha modificado y no se ha
  actualizado en el repositorio remoto o si hay un archivo que todavía no se
  "sube" y nos informará si se encuentra en nuestro working directoy o staging
  area. Este comando nos resultará muy útil para determinar qué archivos
  debemos declarar como "preparados" (por medio del comando `add`) y luego
  "confirmarlos" en la nueva versión (por medio del comando `commit`) que
  subiremos a nuestro repositorio remoto. El comando para ver el estado de
  nuestro repositorio local es:

  ```text
  git status
  ```
