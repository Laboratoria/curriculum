# Command Line
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `30min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:
* ¿Qué es la `línea de comando`?
* Entender la finalidad de la `línea de comando`
* Aprender  navegar por nuestro `directorio`
* Crear archivos o carpetas desde la terminal

Referencia:
https://github.com/wdi-sf-jan-2014/notes/blob/master/living_in_the_command_line.md

## La línea de comando
Una de las herramientas que más nos acompañará en nuestro camino del código será la `línea de comando`.

Ahora conoceremos y aprenderemos cómo usar a esa famosa pantalla negra que los 'hackers' usan, pero tranquila, no vamos a 'hackear' nada, ni haremos nada ilegal.
Puede parecer un poco aterrador al principio pero solo es una pantalla que espera a que le des órdenes.

### ¿Para qué sirve la línea de comando?
La `línea de comando` es una aplicación que nos permite ver, manejar y manipular archivos de nuestra computadora por medio de `comandos`. Es como el Explorador de Windows o Finder en Mac, pero sin la 'interfaz'.
Por lo tanto, nos da un control que es rápido y automatizado de las computadoras.

### Accediendo a la línea de comando

Presionamos la tecla "windows" + r:

![](http://pad3.whstatic.com/images_en/thumb/f/f0/Open-the-Command-Prompt-in-Windows-Step-4-Version-5.jpg/v4-900px-Open-the-Command-Prompt-in-Windows-Step-4-Version-5.jpg)

Y nos aparecerá una pequeña pantalla en la parte inferior izquierda en la que escribiremos **cmd.exe**

![](http://pad2.whstatic.com/images_en/thumb/6/68/Open-the-Command-Prompt-in-Windows-Step-5-Version-5.jpg/v4-728px-Open-the-Command-Prompt-in-Windows-Step-5-Version-5.jpg.webp)

Hacemos clic en el botón **OK** y estaremos abriendo nuestra terminal. Al abrir la aplicación nos aparecerá una nueva ventana con un fondo negro y letras así:

![poner img]()

### Comandos
Ya estamos dentro de la famosa 'pantalla negra', ahora veamos qué asombrosas cosas podemos hacer.  
Te dejaré una lista de comandos que puedes ejecutar dentro de ella:

>¿Cómo ejecutamos un comando?
    1. Debemos de escribir el comando
    2. Presionando la tecla 'enter' estaremos ejecutando un comando

- `cd`: Este comando nos ayudará a navegar por nuestros **directorios**(también llamados **carpetas**), entre nuestros archivos. Con él, podremos saber en dónde nos encontramos, acceder a otra carpeta o volver a una carpeta anterior.  
  Por ejemplo, supongamos que la terminal es nuestra "casa" y que queremos recorrela. Ahora me encuentro en mi cuarto, pero ¿que pasa si quiero ir al **baño**?.  
  
  ![](https://fotos.subefotos.com/31c6b9a7726517ce121b0e66f283deaao.png)  
  
  Estoy en mi cuarto (n° 3) y si quiero ir al baño, primero, debo de entrar al clóset (n° 2) y luego entrar al baño (n°1). No puedo llegar al baño sin pasar por el clóset.
  Algo similar pasa en la navegación por las carpetas vía terminal, supongamos que me encuentro en mi **ciber casa** (mi equipo) y quiero ir de mi **ciber cuarto** (disco local C) a mi "ciber baño" (carpeta "Saved Pictures"), primero debería de entrar al "ciber-clóset"(carpeta "Pictures") y luego entramos a la carpeta buscada.  
  Ahora veamos qué podemos hacer con `cd`:
     1. `cd` : Al ejecutar el comando `cd` se nos mostrará la ruta en la que estamos.
     2. `cd nombre-carpeta` : Si luego de cd indicamos el nombre de una carpeta, al ejecutarlo, estaremos ingresando dentro de ella.
     3. `cd..` : si ponemos dos puntos (`..`) junto a `cd`, estaremos saliendo de la carpeta en donde nos encontramos y volveremos una hacia atrás.

- `dir` : Muestra una lista de archivos y subcarpetas que se encuentran en donde hayamos ejecutado el comando.  
  Por ejemplo, si ejecuto el comando `dir` en "C:\Users\MICHELLE SEGUIL" me aparecerá la lista de los archivos o carpetas que se encuentran en ese directorio. Esta lista estará conformada por una primera columna en donde estará su fecha de modificación, luego nos dirá si es un directorio o no(`<DIR>`) y por último estará en nombre del archivo o carpeta.  

![](https://fotos.subefotos.com/28e9741a1b482c7a3043518f068bef77o.png)

Ahora veamos unos comandos para crear carpetas y archivos. Para estos comandos es muy importante en qué parte del directorio nos encontramos porque en la ubicación en la que los ejecutemos es donde se creará el nuevo archivo o carpeta.

- `mkdir` : Si ejecutamos el comando `mkdir` estaremos creando un nuevo directorio, entonces después de la palabra `mkdir` debemos especificar el nombre de la nueva carpeta. 
  >mkdir nombre-carpeta

  Por ejemplo, si quiero crear la carpeta "js" desde la terminarl, el comando sería así:
    >mkdir js

- `echo`: Con `echo` estaremos creando un nuevo archivo. Su estructura es así:
  1. Comando:`echo`
  2. Texto con el que se creará: `texto`
  3. Símbolo `>`
  4. Por último, indicaremos el nombre del archivo con su respectiva extendión `nombre-archivo.extension`
    
    Entonces nuestro comando sería así:
    >echo texto > nombre-archivo.extension
    
    Por ejemplo, si queremos crear un archivo de texto que tenga el mensaje "hola" el comando sería este:
    >echo hola > saludo.txt
    
    Ahora, si queremos crear un archivo html vacío el comando sería el siguiente:
    >echo > index.html
        

***

[Continuar](02-git.md)
 