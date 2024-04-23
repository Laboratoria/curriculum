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
peticiones HTTP, la información almancenada en la base de datos.

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con la clienta
hasta hoy.

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

##### [Historia de usuario 2] Endpoint listado de taxis

Yo como clienta de la API REST requiero un _endpoint_ para
listar todos los taxis.

##### Criterios de aceptación

* El _endpoint_ responde para cada taxi: id y placa.
* El _endpoint_ paginamos los resultados para asegurar que las
respuestas sean más fáciles de manejar.

##### Definición de terminado

* Se cuenta con una documentación en [Swagger](https://swagger.io/)
para el _endpoint_ desarrollado especificando
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

#### [Historia de usuario 3] Endpoint historial de ubicaciones

Yo como clienta de la API REST requiero un _endpoint_ para
consultar todas las ubicaciones de un taxi dado el id y una fecha.

##### Criterios de aceptación

* El _endpoint_ responde con el id del taxi y una fecha mostrando
  la siguiente información: latitud, longitud y timestamp (fecha y hora).
* El _endpoint_ paginamos los resultados para asegurar que las
  respuestas sean más fáciles de manejar.

##### Definición de terminado

* Se cuenta con una documentación en [Swagger](https://swagger.io/)
para el _endpoint_ desarrollado especificando
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

#### [Historia de usuario 4] Endpoint última ubicación

Yo como clienta de la API REST requiero un _endpoint_ para
consultar la última ubicación reportada por cada taxi.

##### Criterios de aceptación

* El _endpoint_ responde para cada taxi la siguiente información:
id, placa, latitud, longitud y timestamp (fecha y hora).
* El _endpoint_ paginamos los resultados para asegurar que las
respuestas sean más fáciles de manejar.

##### Definición de terminado

* Se cuenta con una documentación en [Swagger](https://swagger.io/)
para el _endpoint_ desarrollado especificando
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

## 6. Stack de tecnologías

Puedes implementar este proyecto en JavaScript, Python o Java.

* [NodeJs](./docs/stack-node.md)
* [Java](./docs/stack-java.md)
* [Python](./docs/stack-python.md)
* [C#](./docs/stack-csharp.md)

## 7. Pistas, tips y lecturas complementarias

Te proponemos los siguientes pasos para iniciar con el proyecto

### Paso 1. Comprender que es una API REST

En primer lugar, asegurate de comprender qué es una API REST.
Para esto puedes consultar en internet o preguntarle a
ChatGPT. Habla con una coach en tu proximo Office Hours para confirmar tus aprendizajes.
En particular, te recomendamos ver leer este
[artículo]( https://dev.to/dennysjmarquez/todo-lo-que-necesitas-saber-sobre-api-rest-glosario-de-terminos-esenciales-y-mas-29pc).

### Paso 2. Crear una instancia de Postgresql en Vercel

La base de datos recomendada para tu aplicación es PostgreSQL. Te
recomendamos usar [vercel Postgresql](https://vercel.com/docs/storage/vercel-postgres)
para que no tengas que instalar PostgreSQL en tu computadora.

Para crear una base de datos postgresql en Vercel usa la
[documentación oficial](https://vercel.com/docs/storage/vercel-postgres/quickstart).
Identifica la siguiente información porque la necesitarás para
conectarte a tu base de datos

* POSTGRES_USER
* POSTGRES_HOST
* POSTGRES_PASSWORD
* POSTGRES_DATABASE

### Paso 3. Conectar la instancia de PostgresSQL usando pgAdmin

Una vez hayas creado una instancia de PostgreSQL en Vercel,
deberás conectarte a ella. Te recomendamos que instales
[pgAdmin](https://www.pgAdmin.org/download/),
un GUI (Graphical User Interface) para interactuar con la base de datos.

Con _pgAdmin_ intenta conectarte a la base de datos
usando la información suministrada por vercel.

### Paso 4. Crear las tablas y cargar la información

En este punto, ya puedes trabajar en la
[Historia de Usuaria 1](#historia-de-usuario-1-cargar-información-a-base-de-datos).
Deberás crear las tablas en tu base de datos y cargar la
información solicitada.
Puedes crear una tabla usando la interfaz gráfica de pgAdmin
o en usando
[SQL](https://www.postgresqltutorial.com/postgresql-create-table/).

### Paso 5. Crear tu primer endpoint

Ya es hora de escribir código. Tu primer objetivo
es crear un proyecto que al ejecutarse cree un
servidor HTTP que responda a la petición GET /taxis
con un "hola mundo".

Te recomendamos usar 
[Postman](https://learning.postman.com/docs/getting-started/first-steps/overview/)
para confirmar
que el endpoint que desarrolles responda segun
lo solicitado.

El procedimiento recomendado dependerá del lenguaje de programación
que hayas elegido:

* Si estás usando NodeJS, puedes seguir este
[tutorial](https://hackernoon.com/how-to-setup-a-nodejs-app-with-express-and-typescript)
para crear un servidor HTTP con express y TypeScript
* Si estás usando Java, puedes seguir este
[video de Primer Endpoint con Java](https://youtu.be/-FRu28PvH6Q)
* Si estás usando Python, puedes
[el tutorial _Minimal Application_ de la  
documantación oficial de Flask](https://flask.palletsprojects.com/en/3.0.x/quickstart/#a-minimal-application)  
* Si estás usando C#, puedes seguir
[el tutorial de la  
documantación oficial de C#](https://learn.microsoft.com/es-es/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0&tabs=visual-studio)

### Paso 6.Conectar la instancia de Postgresql desde código

Luego vas a necesitar elegir un módulo o librería para
interactuar con nuestra base de datos desde el lenguaje
de desarrollo elegido.

La librería recomendada dependerá del lenguaje de programación
que hayas elegido:

* Si estás usando NodeJS, puedes instalar y configurar
[Prisma](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)
* Si estás usando Java, puedes instalar y configurar
[Hibernate](https://docs.spring.io/spring-framework/reference/data-access/orm/hibernate.html)
* Si estás usando Python, puedes instalar y configurar
[SqlAlchemy](https://docs.sqlalchemy.org/en/latest/orm/quickstart.html)
* Si estás usando C#, puedes instalar  y configurar
[Npgsql](https://www.npgsql.org/doc/index.html)

### Paso 7. Modificar endpoint para consultar base de datos  

Utiliza la librería elegida para consultar la base de
datos y que tu API responda a la petición GET
/taxis con el listado de taxis tal como se especifica
en la
[documantación](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/1.0.0#/taxis/getTaxi).

De nuevo, usa [Postman](https://learning.postman.com/docs/getting-started/first-steps/overview/) para confirmar
que el endpoint que desarrolles responda segun
lo solicitado.

### Paso 8. Soportar parametros en el endpoint

De acuerdo a la documantación
[documantación](https://app.swaggerhub.com/apis-docs/ssinuco/FleetManagementAPI/1.0.0#/taxis/getTaxi)
el endpoint GET /taxis soporta 3 parametros: `plate`, `page` y `limit`.

Modifica tu código para soportar peticiones a tu endpoint
con estos parámetros. Usa [Postman](https://learning.postman.com/docs/getting-started/first-steps/overview/) para probar tu endpoint
con diferentes valores de estos parámetros.

### Paso 9. Escribir pruebas e2e para el endpoint

Elige un módulo o librería para escribir pruebas e2e de tu endpoint.

La librería recomendada dependerá del lenguaje de programación
que hayas elegido:

* Si estás usando NodeJS, puedes instalar y configurar
[Node-postgres](https://node-postgres.com/)
o
[Prisma](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma).
Discute una coach cuales son las diferencias entre ambas librerías.
* Si estás usando Java, puede instalar y configurar
* Si estás usando Python, puedes instalar y configurar [pytest](https://docs.pytest.org/en/8.1.x/)
* Si estás usando C#, puedes instalar  y configurar

### Paso 10. Implementar los demás endpoints

¡Felicitaciones! Hasta este punto ya has completado la
Historia de Usuaria 2. Puedes continuar implementado
las demás historias.

## 8. Funcionalidades opcionales

Si completaste todas las funcionalidades del proyecto te invitamos a trabajar en
las [funcionalides opcionales](./docs/extension.md)
