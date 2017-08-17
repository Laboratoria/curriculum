# Command Line
- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `30min`

## Objetivos de Aprendizaje

En esta unidad aprenderemos:
* ...
* ...

***

Referencia:
https://github.com/wdi-sf-jan-2014/notes/blob/master/living_in_the_command_line.md

***

## Viviendo en la línea de comandos
La línea de comandos nos da un control rápido, confiable y automatizado sobre las computadoras. Normalmente, los servidores Web no tienen interfaces gráficas, por lo que necesitamos interactuar con ellos a través de interfaces de línea de comandos y de programación. 
Una vez que te sientas cómoda usando la línea de comandos, permanecer en el teclado te ayudará a mantener un flujo ininterrumpido de trabajo sin la distracción de estar cambiando al mouse.

## Introducción a la interfaz de línea de comandos
Si, lo sé; te sientes emocionada y aterrada al mismo tiempo; no te preocupes, todos al inicio nos hemos sentido así, sin embargo luego de varios momentos juntos, la línea de comandos se convierte en nuestra amiga. 

## ¿Qué es la línea de comandos?
La línea de comandos es un método que nos permite dar instrucciones a algún programa informático por medio de una línea de texto simple.

Es un trabajo en equipo, donde tú le detallas las tareas que deben realizar y la línea de comandos las ejecuta.
Así de sencillo.

## Abrir la interfaz de línea de comandos: Terminal o consola.
Según nuestro Sistema Operativo(SO) tenemos las siguientes opciones:

#### Mac OS X

 >`Aplicaciones → Servicios → Terminal`


#### Linux
Dependiendo de tu distribución:
>`Aplicaciones → Accesorios → Terminal`

En el caso de Mac o Linux, tu __terminal__ se verá así:
```
User-MacBook-Air:~ LABORATORIA 0018le$
```

#### Windows
Dependiendo de la versión que tenemos, podemos realizar lo siguiente:
>`Ir al menú Inicio → Todos los programas → Accesorios → Command Prompt`<br>
o <br>
>`Ir a Buscar → Escribir 'Command Prompt'`

Tu __terminal__ se verá así:
```
C:\Users\LABORATORIA 0018le>
```

## Metáforas
Pensemos en nuestra casa, vamos a usar la línea de comandos como caminar alrededor de nuestro hogar.

#### ¿Dónde estoy?
Yo en este momento me encuentro en mi habitación, entonces al ingresar a la terminal visualizo lo siguiente:

```
C:\Users\LABORATORIA 0018le>
```

La entrada a mi casa la conoceremos como el __directorio raíz__ y mi habitación será el __directorio de inicio__.

- __El directorio raíz__ : `C:\>`
- __El directorio de inicio__ : `Users\LABORATORIA 0018le`

*Al directorio de inicio también se le puede llamar `~`.

Ahora, se le llama __directorio de trabajo__ a la habitación en la que estoy actualmente; y sería bueno confirmar dónde es.<br>
Para ello, usaremos el comando `pwd` que significa 'print working directory' - en español, 'mostrar directorio de trabajo'.

Si usas Mac o Linux, escribe el comando `pwd` y oprime Enter:
```
$ pwd
/Users/LABORATORIA 0018le
```

Si usas Windows, el comando a usar es `cd` y oprime Enter:
```
> cd
C:\Users\LABORATORIA 0018le
```

Por lo tanto:

- __El directorio de trabajo__ : `Users\LABORATORIA 0018le`

Recuerda que cuando abrimos un nuevo terminal, el directorio de inicio es el directorio de trabajo. 

#### Mirando alrededor
Debemos saber que hay alrededor de la habitación en la que estoy - el directorio de trabajo - para esto vamos a utilizar los siguientes comandos dependiendo de nuestro SO:

Si usas Mac o Linux, escribe el comando `ls` y oprime Enter:
```
$ ls
Applications
Desktop
Downloads
Music
...
```
Si usas Windows, el comando a usar es `dir` y oprime Enter:
```
> dir
Directory of C:\Users\LABORATORIA 0018le
05/08/2017 07:28 a. m. <DIR> Applications
05/08/2017 07:28 a. m. <DIR> Desktop
05/08/2017 07:28 a. m. <DIR> Downloads
05/08/2017 07:28 a. m. <DIR> Music
...
```
#### A movernos
Podemos movernos desde la habitación en la que estamos. Para ello, usaremos el comando `cd` que significa 'change directory' - en español, 'directorio de cambios'.

Por ejemplo queremos ir a la carpeta Music
En este caso sea Mac, Linux o Windows, el comando a usar es el mismo, escribe `cd` y oprime Enter:
```
$ cd Music
/Users/LABORATORIA 0018le/Music
```

```
> cd Music
C:\Users\LABORATORIA 0018le\Music>
```

Podemos ir al directorio raíz: `cd /`. Un camino que comienza desde la entrada, el directorio raíz, se llama un camino absoluto . Ahora mira a tu alrededor. ¿Qué ves?
```
> cd /
C:\>
```

Podemos volver a casa: `cd ~`. ¿Que ves?

Podemos entrar en mi directorio de espacio de trabajo: `cd workspace`. Una ruta que es relativa al directorio actual se llama ruta relativa .

Si ingresamos a un directorio y queremos regresar al anterior usamos `cd ..`.

*TIP: si escribes `cd ` (cd + espacio) y luego oprimes `<TAB>` constantemente en el teclado, la línea de comandos automáticamente te mostrará las carpetas por orden alfabético para que puedas navegar más rápido.

#### Construir directorios
Ahora que sabemos cómo movernos, es hora de hacer algunos cambios.<br>
Imaginemos que queremos crear un directorio para nuestra música favorita, recuerda que estamos en la carpeta 'Music'.

En este caso sea Mac, Linux o Windows, el comando a usar es el mismo:  `mkdir`.<br>
Escribe el comando + el nombre de directorio, `mkdir favorite` y oprime Enter:

```
$ mkdir favorite
```

```
> mkdir favorite
```

Este comando creará una carpeta con el nombre 'favorite' dentro del directorio 'Music'.
- Para comprobar que si está ahí podemos revisar nuestra carpeta 'Music'.
- O bien ejecutando los comandos respectivos: En Mac o Linux con `ls` o en Windows con `dir`.

```
> dir
Directory of C:\Users\LABORATORIA 0018le\Music
14/08/2017 07:28 a. m. <DIR> .
14/08/2017 07:28 a. m. <DIR> ..
14/08/2017 07:28 a. m. <DIR> favorite
               0 File(s)              0 bytes
               3 Dir(s)  615,711,453,184 bytes free
```

#### Edición de archivos
Ingresamos a 'favorite' con `cd favorite`, veamos que tenemos alrededor.<br>
Ejecutamos los comandos respectivos: En Mac o Linux con `ls` o en Windows con `dir`.

```
> dir
Directory of C:\Users\LABORATORIA 0018le\Music\favorite
14/08/2017 07:28 a. m. <DIR> .
14/08/2017 07:28 a. m. <DIR> ..
               0 File(s)              0 bytes
               2 Dir(s)  615,582,334,976 bytes free
```
Como vemos la carpeta está vacía.

__IMPORTANTE__: Recordemos que estuvimos usando el editor de textos __Atom__, si deseamos podemos utilizar el comando `atom` y esto abrirá el editor automáticamente.

Ahora bien, quiero tener una lista de mis canciones favoritas. Hagamos un archivo que las enumere.<br>
Para ello vamos a escribir `atom songs`, este comando va a abrir el nuevo archivo `songs` en el editor __Atom__. Agregamos algunas canciones, asegúrate de que éstas tengan el mismo formato: <nombre_cantante>:<título_canción>.
De preferencia, copia y pega la sección a continuación para que todos tengamos lo mismo y guarda el archivo.
```
Soda Stereo:De música ligera
Maná: Eres mi religión
Café Tacuba:Eres
Enanitos Verdes:Lamento boliviano
Hombres G:Devuélveme a mi chica 
Jarabe de Palo:Flaca
Juanes: A Dios le pido
Los Fabulosos Cadillacs:Matador
Maná:Rayando el sol
Soda Stereo:Persiana americana
```

Ahora intenta de nuevo `ls` o `dir`. ¿Ves que el archivo `songs` existe? Así es. 
```
> dir
Directory of C:\Users\LABORATORIA 0018le\Music\favorite
14/08/2017 07:28 a. m. <DIR>     .
14/08/2017 07:28 a. m. <DIR>     ..
14/08/2017 09:00 a. m.       278 songs
               1 File(s)             278 bytes
```
Podemos ver el contenido del archivo de la siguiente manera:
- Si usas Mac o Linux, escribe el comando `cat` y oprime Enter.
- Si usas Windows, el comando a usar es `type` y oprime Enter.
```
> type songs
Soda Stereo:De m├║sica ligera
Man├í: Eres mi religi├│n
Caf├® Tacuba:Eres
Enanitos Verdes:Lamento boliviano
Hombres G:Devu├®lveme a mi chica
Jarabe de Palo:Flaca
Juanes: A Dios le pido
Los Fabulosos Cadillacs:Matador
Man├í:Rayando el sol
Soda Stereo:Persiana americana`
```
Hagamos otro archivo más pequeño, que será nuestro detalle, solo escribe una descripción.

El comando `echo` sólo hace salidas de lo que le damos como argumentos. Ahora queremos poner esa línea en un archivo llamado `details`.

El uso del ángulo de cierre `>` de esta manera, se denomina redirección. Cada comando que ejecutamos tiene una entrada, una salida, una salida de error y argumentos/operandos. Estamos diciendo: "Ejecutar `echo` con esta cadena como un operando, y tomar la salida y ponerlo en un nuevo archivo llamado `details`.
```
echo "Este archivo contiene canciones de Rock en español" > details
```
Ahora comprueba, con los comandos respectivos, si el archivo existe y el contenido del mismo:
```
> dir
Directory of C:\Users\LABORATORIA 0018le\Music\favorite
...
14/08/2017 09:05 a. m.        55 details
14/08/2017 09:00 a. m.       278 songs
               2 archivos            333 bytes
               
> type details
"Este archivo contiene canciones de Rock en español"
```
Genial!!

#### Piping
Echemos un vistazo a nuestras canciones ¡Observa que la lista de canciones no está ordenada! Necesitamos organizar esto usando el comando `sort`.

El carácter `|` se llama 'conducto'(pipe). Tomamos la salida `cat` y la enviamos a través de un conducto a `sort` de la siguiente manera:
- Si usas Mac o Linux, escribe `cat songs | sort > sorted_songs`.
- Si usas Windows, entonces `type songs | sort > sorted_songs`.
```
> type songs | sort > sorted_songs
Caf├® Tacuba:Eres
Enanitos Verdes:Lamento boliviano
Hombres G:Devu├®lveme a mi chica
Jarabe de Palo:Flaca
Juanes: A Dios le pido
Los Fabulosos Cadillacs:Matador
Man├í: Eres mi religi├│n
Man├í:Rayando el sol
Soda Stereo:De m├║sica ligera
Soda Stereo:Persiana americana`
```
Como utilizamos el comando simple `sort` puedes ver que el archivo nuevo `sorted_songs` tiene ordenado alfabéticamente el contenido `songs`.

Hay docenas de herramientas poderosas que podemos aprovechar utilizando los conductos. Uno de los que usa más es `grep`. Este comando sirve para buscar un texto en el archivo indicado.
Para Mac o Linux, se utiliza el comando `grep + texto _a_buscar`; en Windows  el comando sería `find + "texto _a_buscar"`, es necesario que el texto que se tiene que buscar en find vaya entre comillas dobles.

Si usas Mac o Linux, escribe `cat songs | grep chica` y oprime Enter:
```
$ cat songs | grep chica
Hombres G:Devu├®lveme a mi chica
```

Si usas Windows, entonces `type songs | find "chica"` y oprime Enter:
```
> type songs | find "chica"
Hombres G:Devu├®lveme a mi chica
```

#### Organizando
Ahora que tenemos nuestras canciones ordenadas, ya no necesitamos nuestra lista sin organizar. El comando `mv` significa mover, y así es como movemos archivos y carpetas de un lugar a otro.
- Si usas Mac o Linux, escribe `mv sorted_songs songs`.
- Si usas Windows, entonces `move sorted_songs songs`.

```
> move sorted_songs songs
¿Sobrescribir C:\Users\LABORATORIA 0018le\Music\favorite\songs? (Sí/No/Todo): si
Se han movido         1 archivos.
```
#### Copiando
Si lo que deseamos es copiar un archivo, usaremos el comando `cp` que significa copiar.
- Si usas Mac o Linux, escribe `cp details second_details`.
- Si usas Windows, entonces `copy details second_details`.

Para nuestro ejemplo, se va a generar un archivo duplicado de `details`.
```
> copy details second_details
       1 archivo(s) copiado(s).
```

#### Eliminando
En cambio, si lo que deseamos es eliminar, entonces colocaremos `rm`(remover) o `del`(delete).
- Si usas Mac o Linux, escribe `rm second_details`.
- Si usas Windows, entonces `del second_details`.

Para nuestro ejemplo, eliminaremos el archivo duplicado `second_details`.

### Shell está programando
Al interactuar con el terminal como lo hicimos hoy, hemos estado usando un lenguaje de programación llamado __bash__, que significa Bourne-again shell. Hay muchos lenguajes de shell diferentes, pero los comandos que pasamos hoy funcionarán en casi todos. Otro shell común es __zsh__.

El hecho de que interactuemos con la computadora mediante la programación nos da poder. En lugar de luchar por hablar de la diferencia entre dos menús en un programa gráfico, podemos comunicar con precisión los comandos de shell que tienen un efecto predecible.

## Detalle de comandos
A continuación te detallo una lista con algunos comandos:

| Comando (Mac OS / Linux) | Comando (Windows) | Descripción                            |
| ------------------------ | ----------------- | -------------------------------------- |
| pwd                      | cd                | Muestra el directorio de trabajo       |
| ls                       | dir               | Enlista los directorios/archivos       |
| cd                       | cd                | Cambia el directorio                   |
| mkdir                    | mkdir             | Crea un nuevo directorio/carpeta       |
| cat                      | type              | Lee el contenido                       |
| echo                     | echo              | Lee el contenido                       |
| sort                     | sort              | Organiza el contenido                  |
| grep + texto             | find + "texto"    | Buscar un texto en el archivo indicado |
| mv                       | move              | Mover archivos                         |
| cp                       | copy              | Copiar/duplicar archivos               |
| rm                       | del               | Elimina directorios/archivos           |
| exit                     | exit              | Cierra la ventana                      |

Estos son solo algunos de los comandos que puedes ejecutar en la línea de comandos.


***
[Continuar](02-git.md)
