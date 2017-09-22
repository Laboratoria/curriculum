# Línea de comandos

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `60min`

***

## Objetivos de Aprendizaje

En esta unidad aprenderemos:

- ¿Qué es la `línea de comandos`?
- Entender la finalidad de la `línea de comandos`
- Aprender a navegar por nuestro `directorio`
- Crear archivos o carpetas desde la terminal

Referencia:
[https://github.com/wdi-sf-jan-2014/notes/blob/master/living_in_the_command_line.md](https://github.com/wdi-sf-jan-2014/notes/blob/master/living_in_the_command_line.md)

## La línea de comandos

La línea de comandos es también conocida como:
  - Terminal
  - Consola
  - Command Prompt
  - Símbolo de Sistema
  - cmd
  - Git Bash, etc.

Una de las herramientas que más nos acompañará en nuestro camino del código
será la `línea de comandos`. En esta lección conoceremos y aprenderemos cómo
usar esa famosa pantalla negra que los "hackers" usan; pero tranquila, no
vamos a "hackear" nada, ni haremos nada ilegal :)

Puede parecer un poco aterrador al principio pero solo es una pantalla que
espera a que le des órdenes.

## ¿Para qué sirve la línea de comandos?

La `línea de comandos` es una aplicación que nos permite ver, manejar y
manipular archivos de nuestra computadora por medio de `comandos`. Es como el
Explorador de Windows o Finder en Mac, pero sin la "interfaz".

Por lo tanto, nos da un control que es rápido y automatizado de las
computadoras.

## Accediendo a la línea de comandos

**Windows**

Presionamos la tecla "windows" + r:

![teclas](https://fotos.subefotos.com/5b80f161eee85749b3825fc14406872eo.png)

Ahora   nos aparecerá una pequeña pantalla en la parte inferior izquierda en
la que escribiremos **cmd.exe**

![run](https://fotos.subefotos.com/98de3a4aec5f117f023ba85addc08298o.png)

Hacemos clic en el botón **OK** y estaremos abriendo nuestra terminal. Al abrir
la aplicación nos aparecerá una nueva ventana con un fondo negro y letras así:

![línea de comandos](https://fotos.subefotos.com/4fda00e92300cda89ff141f0265d6227o.png)

**Mac OS X**

Launchpad → Terminal

**Linux**

Actividades → Terminal

## Prompt

Ahora tendremos una pantalla negra que está esperando nuestras órdenes.

- Si nos encontramos en **Windows** debe de aparecernos una primera línea que termina
  con el símbolo `>`
  
  ```text
   C: \Users\Michelle >
  ```
  
  <br>
  Si no te aparece "Michelle" no te preocupes, está bien, ahí debería de
  aparecer tu nombre de usuario.

- Si te encuentras en **Linux**, te aparecerá una primera línea que termina con el
  símbolo `$`
  
  ```text
  [Laboratoria@Michelle ~] $
  ```
  
  <br>
  En tu computadora, "Laboratoria" y "Michelle" serán reemplazados por tus datos.

- Si tienes una **Mac**, la primera línea estará compuesta por los datos de tu
  computadora y terminará con el símbolo `$`
  
  ```text
  Laboratoria-MacBook-Air:~ Michelle$
  ```

## Comandos

Veamos qué asombrosas cosas podemos hacer dentro de la famosa "pantalla negra". 
Te dejaré una lista de comandos que puedes ejecutar dentro de ella.

>¿Cómo ejecutamos un comando?<br>
    1. Debemos de escribir el comando<br>
    2. Presionando la tecla **enter** estaremos ejecutando un comando

### Navegando en nuestro directorio

El comando `cd` nos ayudará a navegar por nuestros **directorios** (también
llamados **carpetas**) y entre nuestros archivos. Con él, podremos acceder a 
otra carpeta o volver a una carpeta anterior.

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
primero debería de entrar al "ciber-clóset" (carpeta "Pictures") y luego
entramos a la carpeta buscada.

Ahora navegemos nosotras en muestra terminal.

#### Obteniendo nuestra ubicación

Primero vamos a saber en qué parte de nuestra "ciber casa" nos encontramos.
Saber en qué parte de nuestro directio nos encontramos es muy importante,
sobretodo en el caso de que queramos crear una nueva carpeta, un archivo, o
simplemente saber en qué parte de nuestro equipo nos encontramos.

**Windows**

Al ejecutar el comando `cd` se nos mostrará la ruta en la que estamos.

```text
> cd
  C:\Users\Michelle
```

**Mac OS X y Linux**

Al ejecutar el comando `pwd` se nos mostrará la ruta en la que estamos.

```text
$ pwd
  /home/Michelle
```

#### Navegando 

Si escribimos `cd` y luego indicamos el nombre de una carpeta que exista en
nuestro directorio, al ejecutarlo, estaremos ingresando dentro de ella. 

**Windows, Mac OS X y Linux**

```text
cd nombre-carpeta
```
Por ejemplo, si queremos ingresar a la carpeta "Pictures" debemos ejecutar:

```text
cd Pictures
```
Si ahora vemos cuál es nuestra ubicación, nos saldrá que nos encontramos en la
carpeta "Pictures"

**Windows**
```text
> cd
  C:\Users\Michelle\Pictures
```

**Mac OS X y Linux**
```text
$ pwd
  /home/Michelle/Pictures
  
```

Ahora ya sabemos cómo podemos ingresar en la carpeta que queramos, pero ¿Qué
pasa si queremos **salir** de la carpeta en la que nos encontramos? Para
estos casos existe `cd ..`.  
Si ponemos dos puntos (`..`) después de `cd`, estaremos saliendo de la carpeta
en donde nos encontramos y volveremos una hacia atrás.

```text
cd ..
```
Si ahora vemos cuál es nuestra ubicación.

**Windows**

```text
> cd
  C:\Users\Michelle
```

**Mac OS X y Linux**

```text
$ pwd
  /home/Michelle
```

Ya no estaremos dentro de la carpeta "Pictures"

### Listar los archivos y los directorios

**Windows: `dir`**

Muestra una lista de archivos y subcarpetas que se encuentran en donde hayamos
ejecutado el comando.  

Por ejemplo, si ejecuto el comando `dir` en "C:\Users\Michelle" me
aparecerá la lista de los archivos o carpetas que se encuentran en ese
directorio. Esta lista estará conformada por una primera columna en donde
estará su fecha de modificación, luego nos dirá si es un directorio o
no (`<DIR>`) y por último estará en nombre del archivo o carpeta.
  
```text
> dir
  Directory of C:\Users\Michelle
  19/09/2017  10:40 a. m.    <DIR>          .  
  19/09/2017  10:40 a. m.    <DIR>          ..  
  12/09/2017  10:13 p. m.               288 .bash_history  
  12/09/2017  08:01 p. m.                27 .gitconfig  
  19/09/2017  10:40 a. m.    <DIR>          .vscode  
  30/06/2017  08:29 p. m.    <DIR>          Contacts  
  06/09/2017  09:46 p. m.    <DIR>          Desktop  
  19/09/2017  10:51 a. m.    <DIR>          Documents  
  20/09/2017  11:55 a. m.    <DIR>          Downloads  
  30/06/2017  08:29 p. m.    <DIR>          Favorites  
  12/09/2017  07:02 p. m.    <DIR>          Links  
  30/06/2017  08:29 p. m.    <DIR>          Music  
  12/09/2017  07:02 p. m.    <DIR>          OneDrive  
  20/09/2017  11:55 a. m.    <DIR>          Pictures  
  30/06/2017  08:29 p. m.    <DIR>          Saved Games  
  30/06/2017  08:32 p. m.    <DIR>          Searches  
  30/06/2017  08:29 p. m.    <DIR>          Videos  
              2 File(s)            315 bytes
             15 Dir(s)  223,511,490,560 bytes free
```
  
**Mac OS X y Linux : `ls`**

Al ejecutar `ls` se nos mostrarán los nombres de las carpetas y los archivos
que existan en el directorio que nos encontremos.

```text 
$ ls
  Desktop  Documents  Downloads  Music  Pictures
  Public    Templates  Videos
```

### Creando directorios

Ahora veamos un comando que nos permitirá crea un nuevo directorio (carpeta).
Para este comando es muy importante en qué parte del directorio nos encontramos
porque en la ubicación en la que lo ejecutemos es donde se creará la nueva 
carpeta.

**Windows, Mac OS X y Linux**

```text
mkdir nombre-carpeta
```

Si ejecutamos el comando `mkdir` estaremos creando un nuevo directorio,
entonces después de la palabra `mkdir` debemos especificar el nombre de la
nueva carpeta. Por ejemplo, si quiero crear la carpeta "js" desde la terminal,
el comando sería así:

```text
mkdir js
```

### Creando archivos

Hasta ahora hemos creado nuestros archivos desde nuestro editor de texto o
nuestro gestionador de archivos, pero ahora que conocemos a la **terminal**
podemos crear nuestros archivos desde ella.  
Al ejecutar este comando es muy importante en qué parte de nuestro equipo nos
encontramos, porque en la ubicación en la que lo ejecutemos es en donde se
creará el nuevo archivo.

**Windows: `echo`**

Con `echo` estaremos creando un nuevo archivo. Su estructura es así:
1. Comando: `echo`
2. Texto con el que se creará: `texto`
3. Símbolo `>`
4. Por último, indicaremos el nombre del archivo con su respectiva extensión
  `nombre-archivo.extensión`

Entonces nuestro comando sería así:

```text
> echo texto > nombre-archivo.extensión
```

Por ejemplo, si queremos crear un archivo de texto que tenga el mensaje
"hola" el comando sería este:

```text
> echo hola > saludo.txt
```

Ahora, si queremos crear un archivo html vacío el comando sería el
siguiente:

```text
> echo > index.html
```

**Mac OS X y Linux**

Si ejecutamos `touch` seguido del nombre del nuevo archivo con su respectiva
extensión, estaremos creando un nuevo archivo.

```text
$ touch nombre-archivo.extensión
```

Por ejemplo, si queremos crear un archivo HTML el comando sería:

```text
$ touch index.html
```

## Detalle de comandos

A continuación veremos una lista de los comandos usados en esta lección:

| Comando (Windows)           | Comando (Mac OS X / Linux)   | Descripción                         |
| --------------------------- | ---------------------------- | ----------------------------------- |
| cd                          | pwd                          | Muestra la ruta en la que estamos   |
| cd nombre-carpeta           | cd nombre-carpeta            | Ingresa a la carpeta indicada       |
| cd ..                       | cd ..                        | Regresa una carpeta hacia atrás     |
| dir                         | ls                           | Enlista los directorios/archivos    |
| mkdir nombre-carpeta        | mkdir nombre-carpeta         | Crea un nuevo directorio/carpeta    |
| echo > nombre-archivo.ext   | touch nombre-archivo.ext     | Crea un nuevo archivo               |
| exit                        | exit                         | Cierra la línea de comandos         |

Ahora veamos cómo Michelle navega entres sus archivos o directorios, crea
carpetas y archivos desde la terminal.

[![línea de comando](https://img.youtube.com/vi/DWFZaG6qU5w/0.jpg)](https://www.youtube.com/watch?v=DWFZaG6qU5w)
