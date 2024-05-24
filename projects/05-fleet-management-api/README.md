# Fleet Management Software API

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación del proyecto](#5-criterios-de-aceptación-del-proyecto)
* [6. Stack de tecnologías](#6-stack-de-tecnologías)
* [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)
* [8. Funcionalidades opcionales](#8-funcionalidades-opcionales)

***

## 1. Preámbulo

De acuerdo con
[Wikipedia](https://es.wikipedia.org/wiki/Internet_de_las_cosas),
la internet de las cosas (IoT, por sus siglas en inglés)​ es un concepto que
se refiere a una interconexión digital de objetos cotidianos con internet.
Constituye un cambio radical en la calidad de vida de las personas en la
sociedad, ofreciendo nuevas oportunidades en el acceso a
datos, educación, seguridad, asistencia
sanitaria y en el transporte, entre otros campos. Por ejemplo,
en logística y manejo de flotas, se puede hacer seguimiento en
todo momento de la ubicación y las condiciones de vehículos
mediante sensores inalámbricos conectados a internet que envían alertas en
caso de eventualidades (demoras, daños, robos, etc.).

![zach-vessels-utMdPdGDc8M-unsplash](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/fleet-management-api-java%2Fthumb.jpg?alt=media)

La IoT también plantea retos como el almacenamiento, análisis y
visualización de la gran cantidad de información que genera.
Se calcula que para el 2025 los dispositivos IoT generen
[79.4 zettabytes](https://www.statista.com/statistics/1017863/worldwide-iot-connected-devices-data-size/)
(1 zettabyte equivale a 1 trillón de gigabytes).
Como desarrolladoras debemos estar al tanto de estos retos y contribuir para
su solución desde nuestra experiencia, conocimiento y ganas de aprender.

## 2. Resumen del proyecto

En este proyecto construirás la API REST de un
[Fleet Management Software](https://en.wikipedia.org/wiki/Fleet_management)
para consultar las ubicaciones de los vehículos de una empresa
de taxis en Beijing, China.

Te entregaremos las ubicaciones de casi 10 mil
taxis. Esperamos que como desarrolladora explores nuevas alternativas y
técnicas para almacenar y consultar esta
información y puedas garantizar la mejor experiencia de usuaria en tu
API REST.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

* Este proyecto se debe "resolver" en duplas.
* El rango de tiempo estimado para completar el proyecto es de 4 a 6 Sprints.

## 5. Criterios de aceptación del proyecto

Nuestra cliente ha instalado dispositivos GPS en sus taxis.
Estos dispositivos utilizan señales satelitales para determinar
con precisión las coordenadas geográficas del taxi.

Nuestra clienta requiere:

1. Cargar la información de archivos SQL a una
base de datos Postgresql.
2. Desarrollar una API REST que permita consultar, mediante
peticiones HTTP, la información almacenada en la base de datos.

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con la clienta
hasta hoy
y la [documentación de la API REST](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/)
a desarrollar.

***

#### [Historia de usuario 1] Cargar información a base de datos

Yo, como desarrolladora, quiero cargar la información almacenada hasta ahora en
[archivos sql](https://drive.google.com/file/d/1T5m6Vzl9hbD75E9fGnjbOiG2UYINSmLx/view?usp=drive_link)
en una base de datos PostgreSQL, para facilitar su consulta y análisis.

##### Criterios de aceptación

* Se debe tener en cuenta el siguiente diagrama para la implementación de las
relaciones entre las tablas

![mer](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/fleet-management-api-java%2Fsql-diagram.png?alt=media)

* La tabla de _trajectories_ se debe crear con el "id" que se incremente
automáticamente (SERIAL) para poder insertar los valores sin necesidad
de especificar un identificador

##### Definición de terminado

* La base de datos tiene creada la tabla de taxis
* La tabla de taxis tiene cargada la data de taxis
* La base de datos tiene creada la tabla de trayectorias
* La tabla de taxis tiene cargada la data de trayectorias

***

#### [Historia de usuario 2] Endpoint listado de taxis

Yo como clienta de la API REST requiero un _endpoint_ para
listar todos los taxis.

Por ejemplo, este _endpoint_ podria ser usado por una aplicación
web para filtrar un listado de taxis.

<img
src="https://github.com/Laboratoria/curriculum/assets/16993732/c4acb543-a422-4e79-ab6c-53c656a7ee47"
alt="Posible uso del endpoint GET /taxis"
aria-describedby="get-taxis-ui-control" />

<p id="get-taxis-ui-control">
Animación que muestra un menú desplegable para elegir un taxi.
Las opciones se filtran según el text que se escriba en la lista.
</p>

##### Criterios de aceptación

* El _endpoint_ es implementado de acuerdo a la
  [documentación swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/taxis/getTaxi).
  a excepción de la respuesta 401 que sera implementada
  hasta la Historia de Usuaria 7.
* El _endpoint_ responde para cada taxi: id y placa.
* El _endpoint_ paginamos los resultados para asegurar que las
respuestas sean más fáciles de manejar.
* El _endpoint_ soporta un parametro `plate` para retornar unicamente
los taxis cuya placa contenga el texto especificado
* El _endpoint_ paginamos los resultados para asegurar que las
respuestas sean más fáciles de manejar.

##### Definición de terminado

* El código del _endpoint_ debe recibir _code review_ de al
menos una compañera.
* El código del _endpoint_ debe estar cargado en un repositorio de Github.
* El código del _endpoint_ debe contar con test unitarios

***

#### [Historia de usuario 3] Endpoint historial de ubicaciones

Yo como clienta de la API REST requiero un _endpoint_ para
consultar todas las ubicaciones de un taxi dado el id y una fecha.

Por ejemplo, este _endpoint_ podria ser usado por una aplicación
web para mostrar en un mapa la trayectoria de un taxi.

<img
src="https://github.com/Laboratoria/curriculum/assets/16993732/d716cc84-47c2-4cdd-8f67-74128aa6ec01"
alt="Posible uso del endpoint GET /trajectories/{taxiId}"
aria-describedby="get-trajectories-ui-control" />

<p id="get-trajectories-ui-control">
Animación que muestra en un mapa la trayectoria de un taxi.
</p>

##### Criterios de aceptación

* El _endpoint_ es implementado de acuerdo a la
  [documentación swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/trajectories/getTrajectories)
  a excepción de la respuesta 401 que sera implementada
  hasta la Historia de Usuaria 7.
* El _endpoint_ responde para un id de taxi y una fecha mostrando
  la siguiente información: latitud, longitud y timestamp (fecha y hora).

##### Definición de terminado

* El código del _endpoint_ debe recibir _code review_ de al
menos una compañera.
* El código del _endpoint_ debe estar cargado en un repositorio de Github.
* El código del _endpoint_ debe contar con test unitarios

***

#### [Historia de usuario 4] Endpoint última ubicación

Yo como clienta de la API REST requiero un _endpoint_ para
consultar la última ubicación reportada por cada taxi.

Por ejemplo, este _endpoint_ podria ser usado por una aplicación
web para mostrar en una mapa la última posición de cada taxi.

<img
src="https://github.com/Laboratoria/curriculum/assets/16993732/a6bd8631-244d-4d9b-a297-2519d9313855"
alt="Posible uso del endpoint GET /trajectories/latest"
aria-describedby="get-latest-trajectories-ui-control" />

<p id="get-latest-trajectories-ui-control">
Animación que un listado de taxis y al hacer clic en cada uno
muestra un mapa la última posición de un taxi.
</p>

##### Criterios de aceptación

* El _endpoint_ es implementado de acuerdo a la
  [documentación swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/trajectories/getLatestTrajectories)
  a excepción de la respuesta 401 que sera implementada
  hasta la Historia de Usuaria 7.
* El _endpoint_ responde para cada taxi la siguiente información:
id, placa, latitud, longitud y timestamp (fecha y hora).

##### Definición de terminado

* El código del _endpoint_ debe recibir _code review_ de al
menos una compañera.
* El código del _endpoint_ debe estar cargado en un repositorio de Github.
* El código del _endpoint_ debe contar con test unitarios.

***

#### [Historia de usuario 5] Gestión de usuarios

Yo, como clienta de la API REST, requiero un conjunto de endpoints para poder
realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los
usuarios de la plataforma.

##### Criterios de aceptación

* Crear un endpoint para la creación de usuarios de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/users/createUser)
proporcionada.
* Desarollar un endpoint para la obtención de usuarios de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/users/getUsers)
proporcionada.
* Implementar un endpoint para actualizar la
información de un usuario existente de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/users/updateUser)
proporcionada.
* Crear un endpoint para eliminar un usuario de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/users/deleteUser)
proporcionada.
* No implementar la respuesta 401 pues sera implementada
  hasta la Historia de Usuaria 7.

##### Definición de terminado

* El código de los _endpoints_ debe pasar por una revisión de código realizada
por al menos una compañera.
* El código de los _endpoints_ debe contar con test unitarios.

Por supuesto, aquí tienes la historia de usuario para un endpoint de login que
devuelve un JWT (JSON Web Token) dado un correo electrónico y contraseña válidos:

***

#### [Historia de usuario 6] Autenticación de usuarios mediante JWT

Yo, como clienta de la API REST, necesito un _endpoint_ para poder autenticarme
en la plataforma utilizando mi correo electrónico y contraseña, y recibir un
JWT válido que pueda ser utilizado para acceder a recursos protegidos.

##### Criterios de aceptación

* Implementar el _endpoint_ de autenticación de acuerdo a la
[documentación Swagger](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/2.0.0#/auth/getToken)
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

##### Definición de terminado

* El código del _endpoint_ de login debe pasar por una revisión de código
realizada por al menos una compañera.
* El código del _endpoint_ debe contar con test unitarios

***

#### [Historia de usuario 7] Protección de endpoints con JWT

Yo, como desarrolladora del sistema, necesito asegurarme de que todos los endpoints
de la API estén protegidos utilizando un token JWT en el encabezado de autorización
de cada petición, para garantizar la seguridad de los datos y
recursos de la plataforma.

##### Criterios de aceptación

* Configurar la API para que todos los endpoints requieran un token JWT
válido en el encabezado de autorización de cada petición.
* Implementar un middleware o interceptor en la capa de seguridad de la
API para verificar la validez y autenticidad del token JWT en cada petición
entrante.
* En caso de recibir una petición sin un token JWT válido o sin token en
el encabezado de autorización, la API debe devolver un código de estado
HTTP 401 (Unauthorized) y un mensaje de error apropiado.

##### Definición de terminado

* Todos los endpoints de la API deben estar protegidos con un token JWT
en el encabezado de autorización.
* El código del middleware o interceptor de seguridad debe pasar por una
revisión de código realizada por al menos una compañera.
* Se deben incluir test unitarios

***

## 6. Stack de tecnologías

Puedes implementar este proyecto en JavaScript, Python o Java.

* [NodeJs](./docs/stack-node.md)
* [Java](./docs/stack-java.md)
* [Python](./docs/stack-python.md)
* [C#](./docs/stack-csharp.md)

## 7. Pistas, tips y lecturas complementarias

### Modelamiento de datos

La base de datos recomendada para tu aplicación es PostgreSQL. Te
recomendamos usar [vercel Postgresql](https://vercel.com/docs/storage/vercel-postgres)
para que no tengas que instalar PostgreSQL en tu computadora.

Una vez tengas acceso a una instancia de PostgreSQL, deberás crear tablas en
tu base de datos para almacenar la información entregada. Te recomendamos
entonces crear dos tablas, una para almacenar la información de taxis y otra
para almacenar la información de ubicaciones. Deberás definir las columnas
de cada tabla de acuerdo a la información entregada.

Puedes crear una tabla en PostgreSQL usando
[SQL](https://www.postgresqltutorial.com/postgresql-create-table/).

### Definir endpoints de API

Deberás definir y documentar los endpoints de tu API.
Debes usar [Swagger](https://swagger.io/) para esto.

Para una API REST debes definir para cada endpoint entre otras cosas el
[método HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods),
url, parámetros,
[encabezados](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers),
[códigos HTTP de respuesta](https://shorturl.at/bdegB)
y
[cuerpo](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages).

Por ejemplo, en la siguiente figura se define un endpoint para consultar la
información de los taxis en la aplicación. El método del endpoint es _GET_,
la url es _/taxis_. Recibe un parámetro _query_, retorna la información con
_código HTTP_ 200 en formato json gracias al _header_
`Content-type` con valor `application/json`.

![Ejemplo Endpoint API Rest](https://firebasestorage.googleapis.com/v0/b/laboratoria-945ea.appspot.com/o/fleet-management-api-java%2Fexample-endpoint-api-rest.png?alt=media)

## 8. Funcionalidades opcionales

Si completaste todas las funcionalidades del proyecto te invitamos a trabajar en
las [funcionalides opcionales](./docs/extension.md)
