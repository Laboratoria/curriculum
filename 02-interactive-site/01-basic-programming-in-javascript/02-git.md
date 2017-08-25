# Git

- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `60min`

## Objetivos de Aprendizaje

- Entender qué es `git` y por qué es importante
- Crear tu cuenta en `github`
- Diferenciar `git` de `github`
- Instalar y configurar `git`
- Aprender el _"workflow"_ de una developer
- Entender los conceptos básicos: local, remoto, working directory, staging area y branches
- Saber utilizar los comandos esenciales: `init`, `add`, `commit`, `push`, `pull`, `merge`

***

El texto a continuación se basa en gran medida, con ciertos ajustes, de las siguientes páginas:

- https://git-scm.com/book/en/v2
- https://github.com/wdi-sf-september-2014/notes/tree/master/git_intro

***

## ¿Qué es Git?

`Git` es un sistema de control de versiones.

> **¿Qué es el `Sistema de Control de Versiones`?**
El `Sistema de Control de Versiones` (VCS en inglés) es un sistema que registrará los cambios de uno, dos o varios archivos todo el tiempo para que si más adelante necesitamos una versión podamos recuperarla fácilmente. Por ejemplo, si algunas vez has elaborado un proyecto para una tarea ¿No te ha pasado algo así?:  
![''](http://fotos.subefotos.com/e6ea20e7174abf68ba4a047eaa0d5373o.png)
Gracias al VCS podemos evitar que eso nos suceda con nuestros proyectos o archivos, el VCS permite revertir los archivos a un estado anterior, revertir todo el proyecto a un estado anterior, comparar cambios que se hayan hecho, ver quién introdujo un problema y cuándo, y muchas cosas más.  Usando un VCS el perder algún archivo no es un problema, debido a que lo podemos recuperar fácilmente.

`Git` es un `Sistema de Control de Versiones` que nos ayudará a guardar y diferenciar todos los cambios que haremos durante el desarrollo de un proyecto, ya sea de uno o más archivos.


Lo que hace `Git` es tomar una 'imagen' del estado de todos sus archivos en ese momento y almacena una referencia a esa 'imagen'. Para ser eficiente, si los archivos no han cambiado, Git no almacena el archivo de nuevo, sólo un enlace al archivo idéntico anterior que ya ha almacenado. Git piensa en sus datos más como un flujo de 'imágenes'.  

!['Funcionamiento de Git'](http://fotos.subefotos.com/f7fc159919687104bb23335ea9d52555o.png)

## ¿Qué es Github?

>En resumen, se podría decir que `Github` es como Dropbox pero para **developers**.

`Github` es la 'red social' de los developers, una gran cantidad de developers suben sus proyectos aquí porque te permite crear `repositorios` que tendrán siempre una copia de tu código y a la que podrás acceder fácilmente mediante `git`.

GitHub es una 'nube' en la que podrás alojar tus proyectos utilizando el `Sistema de Control de Versiones: Git`. Nuestro código se almacenará de forma pública, aunque también se puede almacenar de forma privada, esta opción aparece si es que tenemos una cuenta pagada.

Pero `Github` no solo sirve para 'subir' nuestro código, él también contribuirá al desarrollo colaborativo del proyecto brindándonos herramientas que nos ayudarán:

- Un `sistema de seguimiento de problemas` que permiten a los miembros de tu equipo detallar un problema o una sugerencia que deseen hacer del proyecto.
- Una `herramienta de revisión de código`, donde se pueden añadir anotaciones en cualquier punto del proyecto (`issues`) y debatir sobre un cambio en específico por medio de los `commits`.
- Un `visor de ramas` donde se pueden comparar el progreso de tu proyecto en las distintas ramas de nuestro repositorio.

## ¿Cuál es la diferencia entre Git y Github?

>Git y Github se complementan pero no son iguales.

Ahora que ya tenemos las definiciones de cada uno podemos decir que no son iguales. `Git` es un `Sistema de Control de Versiones` que nos ayudará en cuanto a la parte local de nuestro proyecto, gracias a él podremos tener un repositorio con commits localmente. Mientras que `Github` nos servirá para almacenar ese repositorio en un lado que no solo será visible, ní accedible por mí, además de las herramientas que nos brinda para poder hacer un trabajo en equipo más organizado.

`Github` utiliza a `Git` como `Sistema de Control de Versiones`. Gracias a `Git` podremos guardar localmente por medio de `commits` los diferentes avances(estados) de nuestro proyecto y gracias a `Github` podremos subir esos avances a la `nube` y comenzar un trabajo colaborativo o solo tener almacenado nuestro proyecto en la `nube` para poder avanzarlo en 'cualquier parte del mundo' sin depender de la computadora donde se encuentre localmente mi proyecto o tener que estar guardándolo en un `USB` para copiarlo a otra computadora.

## ¿Cómo crear una cuenta en Github?

Para crear tu cuenta de Github debemos de seguir los siguientes pasos:

1. Debemos de dirigirnos a la página oficial de `Github`: https://github.com/

2. Ya en la página, haremos clic en **Sign up**

3. Ahora deberás escribir un **username**, este, podrá ser uno que ya tengas. Por ejemplo, si tienes un **username** que creaste para un juego online podrías usar ese. No hay límites de cómo debe de ser, pero ten en cuenta que será visible para todo el mundo y puede que te lo pidan en algún momento para añadirte como colaborador de un proyecto, así que ten cuidado con lo que pongas como **username**. Luego ingresa tu **correo**, una **contraseña** y haz clic en **Create an account**.

4. En la siguiente pantalla asegúrate de marcar la opción **Unlimited public repositories for free**, esta, es la versión 'free' de Github; luego haz clic en **continue**.

5. En el paso 3 del registro puedes completarlo con tus datos y hacer clic en **Submit**, o solo hacer clic en **Skip this step**.

¡Y listo! Al hacer todos estos pasos ya tendríamos nuestra cuenta de Github creada.

## Instalando y configurando Git

Primero debemos descargar `Git` en nuestro equipo, elige la opción en base al sistema operativo que tengas:

  - [Windows](https://git-scm.com/download/win)
  - [Mac OS](https://git-scm.com/download/mac)
  - [Linux](https://git-scm.com/download/linux)

Cuando haya terminado la descarga de nuestro programa comenzaremos con la instalación haciendo doble clic en el archivo que se acaba de descargar y luego nos aparecerán las siguientes pantallas:

1. Hacemos clic en el botón **Run**  
  !['Paso 1, instalación de Git'](http://fotos.subefotos.com/dc926ac2d62764c9861d890a87cae1d1o.png)  
2. Ahora en **Next >**  
  !['Paso 2, instalación de Git'](http://fotos.subefotos.com/66ccdc66224e1b301c143e2f228c56d4o.png)  
3. Nos parecerá la siguiente pantalla, aquí, seleccionaremos las siguientes opciones y hacemos clic en **Next >**  
  !['Paso 3, instalación de Git'](http://fotos.subefotos.com/6695c2d71e3574fea5a79d61ea8e8e11o.png)  
4. Seleccionamos la opción **Use Git and optional Unix tools from the Windows Command Prompt** y hacemos clic en **Next >**  
  ![Paso 4, instalación de Git](http://fotos.subefotos.com/3aeac78b635775f55e4365939b87d8e6o.png)  
5. Seleccionamos la opción **Use the OpenSSL library** y continuamos (**Next >**)  
  !['Paso 5, instalación de Git'](http://fotos.subefotos.com/febf4d79afaa6d625173dca24d290dc8o.png)  
6. Elegimos la primera opción y seguimos  
  !['Paso 6, instalación de Git'](http://fotos.subefotos.com/3794e27ec38776180c13c14819fdc0f9o.png)  
7. Nos aseguramos de escoger la opción **Use MinTTY**  
  !['Paso 7, instalación de Git'](http://fotos.subefotos.com/7da9d7c8c7ee9eb92ef2cc548c0f0315o.png)  
8. Seleccionamos las dos primeras opciones y hacemos clic en **Install**  
  !['Paso 8, instalación de Git'](http://fotos.subefotos.com/93a5079b8524142b8e07fd97981afe38o.png)  
9. Ahora comenzará a instalarse  
  !['Paso 9, instalación de Git'](http://fotos.subefotos.com/7ce940e5dec200b7203115b1ee22c6ffo.png)  
10. Y ya tendremos instalado `Git` en nuestro equipo  
  !['Paso 10, instalación de Git'](http://fotos.subefotos.com/47a5605681eec98bd81c7f60489187e4o.png)  

Ya tenemos instalado`Git` en nuestro equipo, ahora personalizaremos nuestro entorno de `Git`.

Lo primero que debemos de hacer es establecer nuestro **username** y **dirección de correo** debido a que `Git` utilizará estos datos para la confirmación de cambios (o como los conoceremos más adelante: `commits`), podemos configurar estos datos por medio del comando `git config`, este, nos permite obtener y establecer variables de configuración que controlan el aspecto y funcionamiento de `Git`, como por ejemplo si ejecuto el comando `git config --list` en mi terminal me devuelve esto:

```js
  user.name = michellesegv
  user.email = michelle@laboratoria.la
```
(Que vienen a ser los datos que ya he configurado)

Ahora nosotras vamos configurar nuestro entorno de `Git`:

Primero debemos de acceder a nuestra terminal `git bash` (debemos buscarla entre nuestras aplicaciones y abrirla) y por medio de los siguientes comandos la personalizaremos:


- Para configurar nuestro **user name** debemos escribir la siguiente línea que debe de tener nuestros datos, y luego presionaremos la tecla 'enter':

  >git config --global user.name "Tu username"

- Para configurar nuestro **correo** debemos escribir la siguiente línea con nuestros datos y luego presionaremos la tecla 'enter':

  >git config --global user.email tucorreo@gmail.com

Los datos que llenes las líneas anteriores deben de ser los mismo con los que creaste tu cuenta de `Github`, porque como te comentaba con ellos se registrarán los `commits` que hagas en `Git` y que luego pasarpan al historial de nuestro proyecto en `Github`.

**Ahora conozcamos algunas palabras claves que de seguro escucharás al momento de trabajar con Github y Git**  

- local: Cuando hablamos de 'local' nos referimos a los datos que se encuentra en nuestra computadora
- remoto: Con 'remoto' estamos haciendo referencia a los cambios que no se encuentran en nuestro local, por ejemplo, los que están en la 'nube'.
- working directory: Hace referencia tu directorio local, ala organización de las carpetas que tienes en tu proyecto.
- branch: Una `branch` o rama es una copia paralela que creamos de nuestro código. Por defecto todos los repositorio traen un rama base llamada `master`, podemos trabajar en esa rama todo el tiempo, pero si queremos hacer cambios sin que afecten a nuestra versión 'original' podemos crear otras ramas.

## Comandos de Git

- `init`: Esto le dice a Git que debe empezar a llevar el control de este directorio, lo hace creando una carpeta oculta llamada `.git`. Inicializamos git en nuestro local ejecutando el siguiente comando en la consola de git (`git bash`).
  >git init
  
  Recuerda que debes de inicializar el repositorio en la carpeta en donde se encuentre tu proyecto.


- `add`: Gracias a `add` añadiremos el archivo o los archivos a la versión actualizada.
  
  Por ejemplo, si quieremos añadir nuestro archivo `HTML` llamado 'index.html' debemos de ejecutar la siguiente línea:
  >git add index.html
  
  Si queremos que todos los archivos de donde me encuentro se añadan, ejecutamos la siguiente línea:
  >git add .


- `commit`: Con `commit` 'encerraremos' un conjunto de cambios para crear una nueva versión de nuestro proyecto.
  >git commit -m 'añadiendo un comentario'

  El texto que va dentro de las comillas ('') puede ser cualquiera, te recomiendo que escribas un resumen de lo que estás subiendo en ese momento para que haya una una mejor organizacion. Por ejemplo:
  >git commit -m 'Enlazando archivo js'
  
- `remote`: Con `remote` vincularemos nuestro repositorio local con nuestro repositorio en la 'nube'(Github) por medio de la url. Debemos de ejecutar el siguiente comando:
  >git remote add nombre-remoto url
  
  Normalmente como **nombre** se usa `origin` y **url** es la ruta de tu repositorio de Github.
  Por ejemplo, si ya he creado el repositorio 'prueba' en Github tendría que ejecutar la siguiente línea:
  > git remote add origin https://github.com/MichelleSV/prueba.git
  
- `push`: Por medio de `push` enviaremos nuestra 'nueva versión' a la nube.
  >git push nombre-remoto nombre-rama
  En **nombre-remoto** pondremos el mismo nombre que le hemos asignado al momento de añadir la url de nuestro proyecto y en **nombre-rama** pondremos el nombre de la rama a la cual queremos que se envíen los cambios. Como hemos leído antes, por defecto, los repositorios traen una rama llamada `master` y si queremos subir a esa rama nuestros cambios sería así la línea que debemos ejecutar:
  >git push origin master
  
  
- `pull`: Sirve para actualizar nuestro repositorio local al último`commit` que tengamos registrado.
  >git pull nombre-remoto nombre-rama
  
  Si queremos traer los cambios que están en nuestra rama 'master' debemos de ejecutar la siguiente línea:
  >git pull origin master
  
  
- `merge`: Sirve para fusionar otra rama a la rama en la que te encuentres.
  >git merge nombre-rama
  Por ejemplo, si nos encontramos en la rama 'master' y queremos fusionarla con la otra rama que hemos creado 'prueba', debemos de ejecutar la siguiente línea:
  >git merge prueba
  Y así estaremos fusionando la rama 'master' con la rama 'prueba'

Entonces nuestro flujo para subir nuestros avances al proyecto sería así:
![''](http://fotos.subefotos.com/72e11e898411906c2bd72b74cbe92813o.png)

[Continuar](03-recap-intro.md)