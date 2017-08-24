# Git
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `60min`

## Objetivos de Aprendizaje

- Entender qué es `git` y por qué es importante
- Crear tu cuenta en `github`
- Diferenciar `git` de `github`
- Configurar `git`
- Aprender el _"workflow"_ de una developer
- Entender los conceptos básicos: local, remoto, working directory, staging area y branches
- Saber utilizar los comandos esenciales: `init`, `add`, `commit`, `push`, `pull`, `merge`

***

El texto a continuación se basa en gran medida, con ciertos ajustes, de las siguientes páginas:

- https://git-scm.com/book/en/v2
- https://github.com/wdi-sf-september-2014/notes/tree/master/git_intro

***

## Cómo crear una cuenta en Github
Para crear tu cuenta de Github debemos de seguir los siguientes pasos:

1. Debemos de dirigirnos a la página oficial de `Github`: https://github.com/

2. Ya en la página, haremos clic en **Sign up**

3. Ahora deberás escribir un **username**, este, podrá ser uno que ya tengas. Por ejemplo, si tienes un **username** que creaste para un juego online podrías usar ese. No hay límites de cómo debe de ser, pero ten en cuenta que será visible para todo el mundo y puede que te lo pidan en algún momento para añadirte como colaborador de un proyecto, así que ten cuidado con lo que pongas como **username**. Luego ingresa tu **correo**, una **contraseña** y haz clic en **Create an account**.

4. En la siguiente pantalla asegúrate de marcar la opción **Unlimited public repositories for free**, esta, es la versión 'free' de Github; luego haz clic en **continue**.

5. En el paso 3 del registro puedes completarlo con tus datos y hacer clic en **Submit**, o solo hacer clic en **Skip this step**.

¡Y listo! Al hacer todos estos pasos ya tendríamos nuestra cuenta de Github creada.

## Instalando y configurando Git

Primero debemos descargar `Git` en nuestro equipo, elige la opción en base al sistema operativo que tengas:

  - Windows : https://git-scm.com/download/win
  - Mac OS : https://git-scm.com/download/mac
  - Linux : https://git-scm.com/download/linux

Ahora instalaremos `Git`

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

3. Ya tenemos instalado`Git` en nuestro equipo, ahora personalizaremos nuestro entorno de `Git`.
  1. Lo primero que debemos de hacer es establecer nuestro **username** y **dirección de correo** debido a que `Git` utilizará estos datos para la confirmación de cambios (o como los conoceremos más adelante: `commits`), podemos configurar estos datos por medio del comando `git config`, este, nos permite obtener y establecer variables de configuración, que controlan el aspecto y funcionamiento de `Git` como por ejemplo, si ejecuto el comando `git config --list` en mi terminal me devuelve esto:
  ```js
  user.name=michellesegv
  user.email=michelle@laboratoria.la
  core.editor=brackets
  ```
  Que vienen a ser los datos que ya he configurado.

    A

[Continuar](03-recap-intro.md)
