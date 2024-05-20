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

![Archivo taxis.txt](https://raw.githubusercontent.com/Laboratoria/curriculum/d5b8aec07b9436348c5e1eb156926b50f8ab795f/projects/05-fleet-management-fullstack/docs/first-10-lines-taxis-txt.png "Archivo taxis.txt")

En la carpeta `trajectories` encontrarás 10.357 archivos con extensión
txt. Cada archivo contiene las ubicaciones de un taxi. El nombre del archivo
corresponde al identificador del taxi. Por ejemplo, el archivo `9557.txt`
contiene las ubicaciones del taxi con identificador 9557. En cada línea de
estos archivos, encontrarás el identificador del taxi (ID), la fecha y hora,
latitud y longitud de la ubicación. En una línea, la información está
separada entre sí por comas.

![Archivo 9557.txt](https://raw.githubusercontent.com/Laboratoria/curriculum/d5b8aec07b9436348c5e1eb156926b50f8ab795f/projects/05-fleet-management-fullstack/docs/first-10-lines-9557-txt.png "Archivo 9557.txt")

Nota: La información de taxis y ubicaciones ha sido extraída del proyecto
[T-Drive: Driving Directions based on Taxi Traces](https://shorturl.at/enBJW)
de Microsoft.

Deberás entonces desarrollar una Interfaz de Línea de Comando (CLI) que
cargue la información de los archivos de texto a la base
de datos. Sin embargo, ten en cuenta que en este proyecto
procesarás más de 10 mil
archivos y tendras una base de datos con conexiones limitadas. Discute con
una coach que estrategias puedes implementar para que ni computadora ni la
base de datos mueran en el intento de cargar la información.

La especificación del CLI depende de la tecnología elegida para el proyecto.

* [Java](./extension-cli.md#java)
* [NodeJs](./extension-cli.md#node-js)
* [Python](./extension-cli.md#python)
* [C#](./extension-cli.md#c)

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

* El _endpoint_ es implementado de acuerdo a la
  [documentación swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/1.0.0#/trajectories/exportTrajectories)
* El _endpoint_ envia un archivo en formato excel con
la siguiente información: ID, placa, latitud, longitud y
fecha y hora.
* El _endpoint_ resuelve la solicitud en tiempos de respuesta
óptimos que no afectan la experiencia de la usuaria. _Nota: debido
a la gran cantidad de información, se espera con **seguridad** tiempos
de respuesta lentos
si no se plantea una estrategia de optimización la base de datos._
* El código del _endpoint_ debe recibir _code review_ de al
menos una compañera.
* El código del _endpoint_ debe estar cargado en un repositorio de Github.
* El código del _endpoint_ debe contar con test unitarios y e2e.

***

## [Historia de usuario 9] Gestión de usuarios

Yo, como clienta de la API REST, requiero un conjunto de endpoints para poder
realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los
usuarios de la plataforma.

### Criterios de aceptación

* Crear un endpoint para la creación de usuarios de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/1.0.0#/users/createUser)
proporcionada.
* Desarollar un endpoint para la obtención de usuarios de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/1.0.0#/users/getUsers)
proporcionada.
* Implementar un endpoint para actualizar la
información de un usuario existente de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/1.0.0#/users/updateUser)
proporcionada.
* Crear un endpoint para eliminar un usuario de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/1.0.0#/users/deleteUser)
proporcionada.

### Definición de terminado

* El código de los _endpoints_ debe pasar por una revisión de código realizada
por al menos una compañera.
* El código de los _endpoints_ debe contar con test unitarios y e2e.

Por supuesto, aquí tienes la historia de usuario para un endpoint de login que
devuelve un JWT (JSON Web Token) dado un correo electrónico y contraseña válidos:

***

## [Historia de usuario 10] Autenticación de usuarios mediante JWT

Yo, como clienta de la API REST, necesito un _endpoint_ para poder autenticarme
en la plataforma utilizando mi correo electrónico y contraseña, y recibir un
JWT válido que pueda ser utilizado para acceder a recursos protegidos.

### Criterios de aceptación

* Implementar el _endpoint_ de autenticación de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/1.0.0#/auth/getToken)
proporcionada.
* El _endpoint_ debe aceptar un correo electrónico y una contraseña válidos
como parámetros de entrada.
* Al autenticarse con éxito, el _endpoint_ debe devolver un JWT que contenga la
información de identificación del usuario.
* El JWT generado debe tener un tiempo de expiración adecuado y debe ser válido
para realizar peticiones a recursos protegidos durante ese tiempo.
* El _endpoint_ debe manejar adecuadamente los casos de error,
devolviendo mensajes descriptivos en caso de credenciales
inválidas o cualquier otro problema durante el proceso de autenticación.

### Definición de terminado

* El código del _endpoint_ de login debe pasar por una revisión de código
realizada por al menos una compañera.
* Se deben incluir pruebas unitarias y pruebas de integración para validar
el funcionamiento del _endpoint_ de autenticación.

¡Claro! Aquí tienes la historia de usuario para proteger todos los endpoints
de la API con un token JWT en el encabezado de autorización de cada petición:

***

### [Historia de usuario 11] Protección de endpoints con JWT

Yo, como desarrolladora del sistema, necesito asegurarme de que todos los endpoints
de la API estén protegidos utilizando un token JWT en el encabezado de autorización
de cada petición, para garantizar la seguridad de los datos y
recursos de la plataforma.

### Criterios de aceptación

* Configurar la API para que todos los endpoints requieran un token JWT
válido en el encabezado de autorización de cada petición.
* Implementar un middleware o interceptor en la capa de seguridad de la
API para verificar la validez y autenticidad del token JWT en cada petición
entrante.
* En caso de recibir una petición sin un token JWT válido o sin token en
el encabezado de autorización, la API debe devolver un código de estado
HTTP 401 (Unauthorized) y un mensaje de error apropiado.

### Definición de terminado

* Todos los endpoints de la API deben estar protegidos con un token JWT
en el encabezado de autorización.
* El código del middleware o interceptor de seguridad debe pasar por una
revisión de código realizada por al menos una compañera.
* Se deben incluir pruebas unitarias y pruebas de integración para validar
el funcionamiento del middleware o interceptor de seguridad.

***
