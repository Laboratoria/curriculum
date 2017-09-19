# Command Line

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

***

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

- ¿Qué es la `línea de comando`?
- Entender la finalidad de la `línea de comando`
- Aprender a navegar por nuestro `directorio`
- Crear archivos o carpetas desde la terminal

Referencia:
[https://github.com/wdi-sf-jan-2014/notes/blob/master/living_in_the_command_line.md](https://github.com/wdi-sf-jan-2014/notes/blob/master/living_in_the_command_line.md)

>La siguiente lectura fue escrita tomando en cuenta que el sistema operativo de
  la computadora en la que se está trabajando es **Windows**

## La línea de comando

La línea de comando es también conocida como:
  - Terminal
  - Consola
  - Command Prompt
  - Símbolo de Sistema
  - cmd
  - Git Bash, etc.

Una de las herramientas que más nos acompañará en nuestro camino del código
será la `línea de comando`. En esta lección conoceremos y aprenderemos cómo
usar esa famosa pantalla negra que los "hackers" usan; pero tranquila, no
vamos a "hackear" nada, ni haremos nada ilegal :)

Puede parecer un poco aterrador al principio pero solo es una pantalla que
espera a que le des órdenes.

## ¿Para qué sirve la línea de comando?

La `línea de comando` es una aplicación que nos permite ver, manejar y
manipular archivos de nuestra computadora por medio de `comandos`. Es como el
Explorador de Windows o Finder en Mac, pero sin la "interfaz".

Por lo tanto, nos da un control que es rápido y automatizado de las
computadoras.

## Accediendo a la línea de comando

Presionamos la tecla "windows" + r:

![teclas](https://fotos.subefotos.com/a6a1b60bf468d78e96b6b5c06b61e2d9o.png)

Ahora   nos aparecerá una pequeña pantalla en la parte inferior izquierda en la que
escribiremos **cmd.exe**

![run](https://fotos.subefotos.com/cea26152bf305a4ad536c7107fdc2f41o.png)

Hacemos clic en el botón **OK** y estaremos abriendo nuestra terminal. Al abrir
la aplicación nos aparecerá una nueva ventana con un fondo negro y letras así:

![línea de comando](https://fotos.subefotos.com/4fda00e92300cda89ff141f0265d6227o.png)

## Comandos

Ya estamos dentro de la famosa "pantalla negra", ahora veamos qué asombrosas
cosas podemos hacer.

Te dejaré una lista de comandos que puedes ejecutar dentro de ella:

>¿Cómo ejecutamos un comando?<br>
    1. Debemos de escribir el comando<br>
    2. Presionando la tecla **enter** estaremos ejecutando un comando

- `cd`: este comando nos ayudará a navegar por nuestros **directorios** (también
  llamados **carpetas**), entre nuestros archivos. Con él, podremos saber en
  dónde nos encontramos, acceder a otra carpeta o volver a una carpeta anterior.

  Por ejemplo, supongamos que la terminal es nuestra "casa" y que queremos
  recorrerla. Ahora me encuentro en mi cuarto, pero ¿qué pasa si quiero ir al
  **baño**?

  ![](https://fotos.subefotos.com/31c6b9a7726517ce121b0e66f283deaao.png)  

  Estoy en mi cuarto (n° 3) y si quiero ir al baño, primero, debo de entrar al
  clóset (n° 2) y luego entrar al baño (n°1). No puedo llegar al baño sin pasar
  por el clóset.
  Algo similar pasa en la navegación por las carpetas vía terminal, supongamos
  que me encuentro en mi **ciber casa** (mi equipo) y quiero ir de mi **ciber
  cuarto** (disco local C) a mi "ciber baño" (carpeta "Saved Pictures"),
  primero debería de entrar al "ciber-clóset"(carpeta "Pictures") y luego
  entramos a la carpeta buscada.

  Ahora veamos qué podemos hacer con `cd`:
     1. `cd` : al ejecutar el comando `cd` se nos mostrará la ruta en la que estamos.
     2. `cd nombre-carpeta` : si luego de cd indicamos el nombre de una carpeta, al ejecutarlo, estaremos ingresando dentro de ella.
     3. `cd..` : si ponemos dos puntos (`..`) junto a `cd`, estaremos saliendo
     de la carpeta en donde nos encontramos y volveremos una hacia atrás.
  En la siguiente imagen puedes observar


- `dir`: muestra una lista de archivos y subcarpetas que se encuentran en donde hayamos ejecutado el comando.  
  Por ejemplo, si ejecuto el comando `dir` en "C:\Users\LABORATORIA D0005" me aparecerá la lista de los archivos o carpetas que se encuentran en ese directorio. Esta lista estará conformada por una primera columna en donde estará su fecha de modificación, luego nos dirá si es un directorio o no(`<DIR>`) y por último estará en nombre del archivo o carpeta.  

    ![dir](https://fotos.subefotos.com/952cc99911a69bc648cd82b5cc63937bo.png)

Ahora veamos unos comandos para crear carpetas y archivos. Para estos comandos
es muy importante en qué parte del directorio nos encontramos porque en la
ubicación en la que los ejecutemos es donde se creará el nuevo archivo o
carpeta.

- `mkdir`: si ejecutamos el comando `mkdir` estaremos creando un nuevo
  directorio, entonces después de la palabra `mkdir` debemos especificar el
  nombre de la nueva carpeta.
  >mkdir nombre-carpeta

  Por ejemplo, si quiero crear la carpeta "js" desde la terminal, el comando
  sería así:
    >mkdir js

- `echo`: con `echo` estaremos creando un nuevo archivo. Su estructura es así:
  1. Comando:`echo`
  2. Texto con el que se creará: `texto`
  3. Símbolo `>`
  4. Por último, indicaremos el nombre del archivo con su respectiva extensión
    `nombre-archivo.extensión`

    Entonces nuestro comando sería así:
    >echo texto > nombre-archivo.extensión

    Por ejemplo, si queremos crear un archivo de texto que tenga el mensaje
    "hola" el comando sería este:
    >echo hola > saludo.txt

    Ahora, si queremos crear un archivo html vacío el comando sería el
    siguiente:
    >echo > index.html
    
### Detalle de comandos
A continuación veremos una lista de los comandos usados en esta lección:

| Comando (Windows)                       | Descripción                                           |
| --------------------------------------- | ----------------------------------------------------- |
| `cd`                                    | Muestra la ruta en la que estamos                     |
| `cd nombre-carpeta`                     | Ingresa a la carpeta indicada                         |
| `cd..`                                  | Regresa una carpeta hacia atrás                       |
| `dir`                                   | Enlista los directorios/archivos                      |
| `mkdir nombre-carpeta`                  | Crea un nuevo directorio/carpeta                      |
| `echo texto > nombre-archivo.extensión` | Crea un nuevo archivo con texto incluído              |
| `echo > nombre-archivo.extensión`       | Crea un nuevo archivo vacío                           |

Ahora veamos cómo Michelle navega entres sus archivos o directorios, crea
carpetas y archivos desde la terminal.

[![línea de comando](https://img.youtube.com/vi/DWFZaG6qU5w/0.jpg)](https://www.youtube.com/watch?v=DWFZaG6qU5w)  
