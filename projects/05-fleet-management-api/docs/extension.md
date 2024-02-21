# Fleet Management Software API - Funcionalidades opcionales

## [Historia de usuario 5] Base de datos local

Yo como _desarrolladora_ requiero instalar y configurar localmente, en mi computadora,
Postgresql para no tener la restricción de almacenamiento de Vercel.

### Criterios de aceptación

Hasta el momento has usado
[vercel Postgresql](https://vercel.com/docs/storage/vercel-postgres)
como base de datos. Sin embargo, la versión gratuita de este servicio
solo incluye 256 MB de almacenamiento, lo cual es insuficiente
para las funcionalidades opcionales. Deberás entonces
instalar localmente en tu computadora Postgresql y configurar
una base de datos con las tablas creadas hasta el momento.

### Definición de terminado

* Postgresql esta instalado localmente en tu computadora.
* Se creó una base de datos local con las tablas _trajectories_ y _taxis_
* Se modificó el código de tu proyecto para que se conecté
a la base de datos local.

## [Historia de usuario 6] Cargar información a base de datos

Yo como _desarrolladora_ requiero cargar la información, almacenada
hasta ahora en archivos de texto, en una base de datos Postgresql
para facilitar su consulta y análisis.

### Criterios de aceptación

Anteriormente, te entregamos las ubicaciones de los taxis en archivos SQL
con comandos listos para ser ejecutados en Postgresql
y cargar así la información.

Ahora te entregaremos un poco más de 17 millones de ubicaciones
en archivos txt:

* [fleet-management-software-data-part-1.zip](https://storage.googleapis.com/bootcamp-assets/projects/05-fleet-management/fleet-management-software-data-part-1.zip)
* [fleet-management-software-data-part-2.zip](https://storage.googleapis.com/bootcamp-assets/projects/05-fleet-management/fleet-management-software-data-part-2.zip)

Los archivos `fleet-management-software-data-part-1.zip`
y `fleet-management-software-data-part-2.zip`
contienen la información de taxis y ubicaciones.
Al descomprimirlos se crearán dos carpetas: `taxis` y `trajectories`.

En la carpeta `taxis` encontrarás el archivo `taxis.txt`. En cada línea
del archivo, encontrarás el identificador (ID) y placa de un taxi. La
información esta separada entre sí por comas.

![Archivo taxis.txt](./docs/first-10-lines-taxis-txt.png "Archivo taxis.txt")

En la carpeta `trajectories` encontrarás 10.357 archivos con extensión
txt. Cada archivo contiene las ubicaciones de un taxi. El nombre del archivo
corresponde al identificador del taxi. Por ejemplo, el archivo `9557.txt`
contiene las ubicaciones del taxi con identificador 9557. En cada línea de
estos archivos, encontrarás el identificador del taxi (ID), la fecha y hora,
latitud y longitud de la ubicación. En una línea, la información está
separada entre sí por comas.

![Archivo 9557.txt](./docs/first-10-lines-9557-txt.png "Archivo 9557.txt")

Nota: La información de taxis y ubicaciones ha sido extraída del proyecto
[T-Drive: Driving Directions based on Taxi Traces](https://shorturl.at/enBJW)
de Microsoft.

Deberás entonces desarrollar una Interfaz de Línea de Comando (CLI) que
cargue la información de los archivos de texto a la base
de datos. Sin embargo, ten en cuenta que en este proyecto procesarás más de 10 mil
archivos y tendras una base de datos con conexiones limitadas. Discute con
una coach que estrategias puedes implementar para que ni computadora ni la
base de datos mueran en el intento de cargar la información.

La especificación del CLI depende de la tecnología elegida para el proyecto.

* [Java](./extension-cli.md#java)
* [NodeJs](./extension-cli.md#node-js)
* [Python](./extension-cli.md#python)

### Definición de terminado

* El código de la Interfaz de Línea de Comando (CLI) debe
recibir _code review_ de al menos una compañera.
* El código de la Interfaz de Línea de Comando (CLI) debe
estar cargado en un repositorio de Github.
* El código de la Interfaz de Línea de Comando (CLI) debe
contar con test unitarios.

***

## [Historia de usuario 7] Tiempos de respuesta optimizados

Yo como clienta de la API REST requiero que los _endpoints_
resuelvan las solicitudes en tiempos de respuesta
óptimos que no afectan la experiencia de la usuaria.

### Criterios de aceptación

Debido a la gran cantidad de información cargada en la
[historia de usuario 6](#historia-de-usuario-6-cargar-información-a-base-de-datos)
se espera con **seguridad** tiempos de respuesta lentos
si no se plantea una estrategia de optimización de la base de datos.

Por ejemplo, consultar las 780 ubicaciones del taxi con placa
`ABGB-4538` para el día `2008-02-02` puede tardar alrededor de 10
segundos. Para una usuaria de tu API REST este tiempo es toda una
eternidad. ¿Qué estrategias puedes implementar para reducir los tiempos de
respuesta y mejorar la experiencia de usuaria?

Algunas estrategias que podrías intentar son:

* Crear
[índices](https://shorturl.at/owR09)
sobre la tabla de ubicaciones.
* Implementar un esquema de
[particionamiento](https://www.postgresql.org/docs/9.1/ddl-partitioning.html)
sobre la tabla de ubicaciones.
* [Consultar y visualizar progresivamente](https://shorturl.at/ivyBS)
la información en lotes.

Discute con una coach cada una de estas estrategias y encuentra otras que
puedas usar para mejorar el _performance_ de tu aplicación.

### Definición de terminado

* El endpoint_ para
consultar todas las ubicaciones de un taxi dado el ID del taxi y una fecha
resuelve las solicitudes en tiempos de respuesta "razonables".
* El endpoint_ para
consultar la última ubicación reportada por cada taxi
resuelve las solicitudes en tiempos de respuesta "razonables".

***

## [Historia de usuario 8] Endpoint exportación a Excel

Yo como clienta de la API REST requiero un _endpoint_ para
exportar en formato Excel todas las ubicaciones de un vehículo
en una fecha específica.

### Criterios de aceptación

Tal vez la primera alternativa que se te ocurra sea agregar un endpoint a tu
API que reciba como parámetro el vehículo y la fecha y retorne un archivo de
Excel para descargarlo desde el navegador web. Sin embargo, esta opción suele
ser muy lenta. Por ejemplo la generación y descarga del archivo de Excel con
las 33 mil ubicaciones del vehiculo `DHOA-9863` para el día `2008-02-27`
puede tardar varios segundos, afectando la experiencia de las usuarias que
usualmente son impacientes.

Los tiempos de respueta de esta funcionalidad puede mejorarse si el archivo de
Excel no se descarga _en línea_ sino que se envía a un correo electrónico.
Discute con una coach como podrías implementar esta alternativa y que otras
estrategias existen.

### Definición de terminado

* El _endpoint_ proporcia un archivo en formato excel con
la siguiente información: ID, placa, latitud, longitud y
fecha y hora.
* El _endpoint_ resuelve la solicitud en tiempos de respuesta
óptimos que no afectan la experiencia de la usuaria. _Nota: debido
a la gran cantidad de información, se espera con **seguridad** tiempos
de respuesta lentos
si no se plantea una estrategia de optimización la base de datos._
* Se cuenta con una documentación para el _endpoint_ desarrollado
especificando
[método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods),
url, parámetros,
[encabezados](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de respuesta](https://shorturl.at/bdegB)
y
[cuerpo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages).
* El código del _endpoint_ debe recibir _code review_ de al
menos una compañera.
* El código _endpoint_ debe estar cargado en un repositorio de Github.
* El código _endpoint_ debe contar con test unitarios y e2e.

***
