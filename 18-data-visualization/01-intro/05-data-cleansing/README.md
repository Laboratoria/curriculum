# Conceptos introductorios de limpieza y preparación de la data

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

[![Conceptos introductorios de limpieza y preparación de la data](https://embed-ssl.wistia.com/deliveries/0f0f054ef945cb82f21e46a281d61158fa3dae06.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/z146y6d8jw?wvideo=z146y6d8jw)

## Introducción

De acuerdo a la revista Forbes, en promedio la preparación de los datos
corresponde al 80% del trabajo de los científicos de Datos. En esta sesión
explicaremos en qué consiste este proceso que aunque nos quita mucho tiempo es
fundamental para el exito del análisis, ya que si no trabajamos en revisar y
mejorar la calidad de los datos que utilizamos podemos llegar a conclusiones que
no son válidas.

[Artículo de Forbes sobre limpieza de big data](https://www.forbes.com/sites/gilpress/2016/03/23/data-preparation-most-time-consuming-least-enjoyable-data-science-task-survey-says/#553c3036f637)

## Proceso de preparación de datos

Desde la fuente de los datos hasta el análisis final existen varios pasos que el
Científico de Datos debe realizar. El proceso tradicional de análisis de datos
consiste en 4 pasos:

1. Copiar
2. Limpiar
3. Guardar
4. Analizar

Lo llamamos tradicional porque debido al incremento en el volumen y en la
velocidad de generación de los datos (lo que se conoce como "Big Data"), no es
posible guardarlos antes de analizarlos. En esta sesión vamos a enfocarnos en el
proceso tradicional, el cual sigue siendo relevante ya que muchos de los
conceptos actuales se basan de este.

### 1. Copiar

Los datos generalmente no están en un mismo sitio. Pueden estar, por ejemplo, en
una página web, en un archivo de texto o en una base de datos. El paso de copiar
consiste en poner todos los datos juntos. Este proceso se puede realizar, entre
otras formas, utilizando un API, el cual es una interfaz para la comunicacioón
entre aplicaciones, conectandonos a una base de datos, leyendo un archivo de
texto o conectandonos a un repositorio de archivos.

Una de las razones principales para unificar los datos es la facilidad del
procesamiento: imaginemos que tenemos dos fuentes de datos, una con la población
total y otra con la población que tiene acceso a internet y queremos obtener la
penetración de internet, es decir el porcentaje de personas con internet. Si los
datos están en el mismo lugar esta operación es más fácil de realizar.

Otra de las razones es la seguridad ya que si trabajamos directamente en la
fuente existe el riesgo de alterar la información original o de afectar el
desempeño del sistema generador de los datos. Por ejemplo, si trabajamos en una
empresa de comercio electrónico y somos los encargados de analizar las ventas es
mejor trabajar sobre una copia de los datos ya que si cometemos un error en la
base de datos original, podemos dañar la información o incluso el sistema.

### 2. Limpiar

Existe varios tipos de errores frecuentes en los datos.

 1. Error en los valores de entrada
    Dentro de este tipo de problema tenemos los valores que están fuera del
    dominio,los que están mal escritos y los que se ingresaron en el campo
    erróneo. Un ejemplo del primero es la fecha "30/13/2012". Esta no se
    encuentra dentro del dominio de los meses, ya que no existe el mes número 13

 2. Errores de estadarización
    Un ejemplo de este tipo de erro es el uso de sinónimos. Imaginemos que
    tenemos dos registros de empleados de una empresa. Cada registro tiene la
    profesión del empleado. Si encontramos un registro con el valor "Profesor" y
    otro con el valor "Maestro" tenemos un problema de estadarización ya que se
    está utilizando distintas palabras para referirse al mismo concepto.

 3. Valores faltantes
    Este tipo de error hace referencia a los valores faltantes o ficticios. Esto
    ocurre con frecuencia cuando llenamos un formulario y dejamos espacios vacíos
    o escribimos cualquier cosa en un campo con tal de terminar el formulario.

 4. Violaciones de la integridad de los datos
    Un ejemplo de violación de la integridad es cuando tenemos dos campos en un
    registro cuyos valores se contradicen. Este es el caso si un registro tiene
    edad = "22" y fecha de nacimiento ="22/02/1980". Si la persona nació en 1980
    no puede tener 22 años.

 5. Duplicados
    La misma información está representada en varios registros. Si tenemos los
    de datos de la población total por país y un país, por ejemplo Perú sale dos
    veces, tenemos un duplicado. El problema con este duplicado es que si
    graficamos los datos, la población total de Perú no será 31 millones sino 62
    millones.

Para cada tipo de problema existen distintas técnicas para resolverlo. Estas
serán explicadas en otro curso de análisis de datos.

Fuente: Rahm, Do: Data Cleaning: Problems and Current Approaches. IEEE Data
Engineering Bulletin, Vol. 23(4): 3-13, 2000

### 3. Guardar

Este paso consiste en elegir la mejor estructura de datos y el mejor sistema
para guardar los datos. La elección depende de los recursos y las herramientas
que se quieran utilizar en el siguiente paso: el análisis. Las opciones más
utilizadas son las base de datos relacionales y no relacionales, las bodegas de
datos, los archivos de texto y los sistemas de archivos distribuidos.

Al igual que las técnicas para limpiar los datos, los detalles de estas formas
de guardar los datos harán parte de otro curso.

### 4. Analizar

Este paso es el tema central de este curso. Una de las principales herramientas
de análisis de datos son las visualizaciones. Una vez los datos están copiados,
limpios y ordenados podemos crear las gráficas para analizarlos.

Cabe resaltar que el proceso de análisis de datos no es necesariamente lineal.
Es decir que si en la fase de análisis identificamos que necesitamos una fuente
de datos adicional, debemos volver al primer paso.

## Automatización del proceso de preparación de datos

Generalmente cuando creamos una visualización, al cabo del tiempo, cuando
tenemos nuevos datos debemos actualizarla. Con el objetivo de reducir el tiempo
de actualización, el proceso que analizamos anteriormente debe ser automatizado.
Existen varias herramientas que nos ayudan en cada paso del proceso con las
cuales podemos eliminar los procesos manuales de preparación de los datos.

Existen herramientas para hacer los ETLs, extracción, transformación y carga
('load' en inglés) de datos como pentaho, data stage de IBM o incluso podemos
utilizar un lenguaje de programacion como R o python. Para guardar los datos
existen las bases de datos relacionales como DashDB o MySQL, no relacionales
como Mongo DB o Cassandra los archivos de texto o de Excel y los sistemas de
archivos distribuidos como hadoop. En cuanto a las herramientas de analisis de
 datos existe R, python o Tableau entre muchas otras.
