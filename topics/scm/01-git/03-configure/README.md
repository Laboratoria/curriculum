---
type: read
duration: 5min
---

# Configuración

Ya tenemos instalado`Git` en nuestro equipo, ahora personalizaremos nuestro
entorno de `Git`.

> Recuerda que si quieres ejecutar comandos de Git y te encuentras en Mac OS X o
> Linux deberás ejecutarlos en **la línea de comandos**, en cambio, si tu
> sistema operativo es Windows abriremos **Git Bash** para ejecutar los
> comandos de Git.

Lo primero que debemos de hacer es establecer nuestro **username** y
**dirección de correo** debido a que `Git` utilizará estos datos para la
confirmación de cambios (o como los conoceremos más adelante: `commits`),
podemos configurar estos datos por medio del comando `git config`, este nos
permite obtener y establecer variables de configuración que controlan el
aspecto y funcionamiento de `Git`, como por ejemplo si ejecuto el comando
`git config --list` en mi terminal me devuelve esto:

```text
user.name = michellesegv
user.email = michelle@laboratoria.la
```

(Que vienen a ser los datos que ya he configurado)

Ahora nosotras vamos configurar nuestro entorno de `Git`:

- Para configurar nuestro **username** debemos escribir la siguiente línea que
  debe de tener nuestros datos, y luego presionaremos la tecla "enter":

  ```text
  git config --global user.name Tu-username
  ```

- Para configurar nuestro **correo electrónico** debemos escribir la siguiente
  línea con nuestros datos y luego presionaremos la tecla "enter":

  ```text
  git config --global user.email tucorreo@gmail.com
  ```

Los datos con los que llenes las líneas anteriores deben de ser los mismos que
usaste al crear tu cuenta de `Github`, porque como te comentaba con ellos se
registrarán los `commits` que hagas en `Git` y que luego pasarán al historial
de nuestro proyecto en `Github`.

[![Subiendo repositorio](https://img.youtube.com/vi/g9iNK_11KV4/0.jpg)](https://www.youtube.com/watch?v=g9iNK_11KV4)
