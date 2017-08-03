# Proyecto juego 2d (OOP y herencia prototipal)

* Formato: `workshop`
* Duración: `3h`

## Objetivos de la lección

* Añadir dos personajes cada equipo (equipo)
* Trabajar haciendo "pair programming" (equipo)
* Enviar PR de por lo menos un personaje (individual)

***

En este workshop implementarás personajes para un video juego.

## Requisitos

* Es fundamental tener instalado y configurado `git` y `npm`
* Cuenta en [GitHub](https://github.com/)
* Haber completado las lecciones 01-05
* Fork propio del repo de tu cohort (carpeta `game-oop`)

Para comenzar, asegúrate de que tienes tu propio _fork_ del repo de tu cohort y
una copia local del repo para trabajar. En este workshop trabajaremos en la
carpeta `game-oop`, dónde encontrarás el código fuente del juego.

NOTA: Quizás necesites actualizar tu copia del repo con cambios que hayan habido
en master. Para eso, puedes ejecutar los siguientes comandos:

```sh
# empecemos por ir a la rama `master`
git checkout master
# lista los remotos para ver si ya tienes `upstream`
git remote -v
# si todavía no has añadido `upstream` como remoto lo puedes añadir así
git remote add upstream git@github.com:Laboratoria/lim-ec-js-2017-1.git
# actualizamos índice de upstream
git fetch upstream
# hacemos merge del master de upstream en nuestro master local
git merge upstream/master
# empujamos cambios a nuestro fork
git push origin master
```

Crea un nuevo branch para este workshop:

```sh
git checkout -b <tu-usuario-de-github>-game-oop
```

Dentro de la carpeta `game-oop` hay un `README.md` con las instrucciones
específicas de cómo crear los personajes.

Al final del workshop tendrás que hacer commit de tus cambios, push a tu fork y
finalmente un PR del branch `<tu-usuario-de-github>-game-oop` en tu fork a
`<tu-usuario-de-github>-game-oop` en el repo alojado en la cuenta de
Laboratoria.

***

[Continuar](../07-game-oop-demo/01-demo.md)
