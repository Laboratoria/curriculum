# Burger Queen - Backend con Node.js

***

:warning: **DEPRECATED**: Este proyecto ha sido re-emplazado por
[`burger-queen-api`](../04-burger-queen-api) y será borrado de este repositorio
en releases futuros.

***

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

Continuando con el proyecto de [Burger Queen](../04-burger-queen), el cliente
parece que quedó contento con la interfaz y ahora nos han pedido que completemos
un prototipo de backend para su sistema de pedidos :tada:.

## 2. Resumen del proyecto

Con un backend en este caso nos referimos a un _servidor web_, que es
básicamente un programa que _escucha_ en un puerto de red, a través del cual
podemos enviarle _consultas_ (_request_) y obtener _respuestas_ (_response_).

Un servidor web debe _manejar_ consultas entrantes y producir respuestas a esas
consultas que serán enviadas de vuelta al _cliente_. Cuando hablamos de
_aplicaciones de servidor_, esto implica una arquitectura de _cliente/servidor_,
donde el cliente es un programa que hace consultas a través de una red (por
ejemplo el navegador, cURL, ...), y el _servidor_ es el programa que recibe
estas consultas y las responde.

[Node.js](https://nodejs.org/) nos permite crear servidores web super eficientes
de manera relativamente simple y todo esto usando JavaScript!

En este proyecto partimos de un _boilerplate_ que ya contiene una serie de
_endpoints_ (puntos de conexión o URLs) y nos piden completar la aplicación.
Esto implica que tendremos que partir por leer la implementación existente, y
familiarizarnos con el _stack_ elegido: [Node.js](https://nodejs.org/),
[Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/),
[mongoose](https://mongoosejs.com/), ...

## 3. Objetivos de aprendizaje

El objetivo principal de aprendizaje es adquirir experiencia con **Node.js**
como herramienta para desarrollar _aplicaciones de servidor_, junto con una
serie de herramientas comunes usadas en este tipo de contexto (Express como
framework, MongoDB como base datos, ...).

En este proyecto tendrás que construir un servidor web que debe _servir_ `JSON`
sobre `HTTP`.

Para completar el proyecto tendrás que familiarizarte con conceptos como
**rutas** (_routes_), **URLs**, **HTTP** (verbs, request, response, headers,
body, status codes...), **JSON**, **JWT** (_JSON Web Tokens_), **conexión con
una base datos** (MongoDB), **variables de entorno**, ...

## 4. Consideraciones generales

Este proyecto se realizará de forma individual.

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6).
En este proyecto está permitido usar librerías o frameworks.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 70% de _branches_. El _boilerplate_ ya contiene el
setup y configuración necesaria para ejecutar los tests (pruebas) así como _code
coverage_ para ver el nivel de cobertura de los tests usando el comando `npm
test`.

El _boilerplate_ incluye NO pruebas unitarias. Si quieres puedes usar pruebas
unitarias para las funciones que implementes, pero en este proyecto no son
obligatorias.

El _boilerplate_ no incluye pruebas unitarias pero sí pruebas _end-to-end_, que
usaremos para verificar el comportamiento desde el punto de vista de HTTP, desde
afuera del servidor. Estos tests, a diferencia de las pruebas unitarias, no
prueban cada pieza por separado sino que prueban la aplicación completa, de
principio a fin. Estas pruebas, al no hacer uso directo del código fuente de la
aplicación, pueden ejecutarse directamente sobre una URL remota, ya que la
interfaz sometida a pruebas es HTTP.

```sh
# Corre pruebas e2e sobre instancia local. Esto levanta la aplicación con npm
# start y corre los tests contra la URL de esta instancia (por defecto
# http://127.0.0.1:8080).
npm run e2e

# Corre pruebas e2e sobre URL remota
REMOTE_URL=https://bq-node-cvtbcmdbro.now.sh npm run e2e
```

Las pruebas _end-to-end_ ya están completas en el _boilerplate_, así que puedes
usarlas como guía de implementación y checklist de completitud.

## 5. Criterios de aceptación mínimos del proyecto

### CLI

La aplicación debe poder arrancarse usando el comando `npm start` dentro de la
carpeta del proyecto. Este es el comportamiento estándar con Node.js y NPM.

Además de esto, la aplicación debe poder recibir información de configuración,
como el puerto en el que escuchar, a qué base datos conectarse, etc. Estos datos
de configuración serán distintos entre diferentes entornos (desarrollo,
producción, ...). El _boilerplate_ ya implementa [el código necesario](config.js)
para leer esta información de los [argumentos de invocación](https://nodejs.org/docs/latest/api/process.html#process_process_argv)
y el [entorno](https://nodejs.org/docs/latest/api/process.html#process_process_env).

#### Argumentos de línea de comando

Podemos especificar el puerto en el que debe arrancar la aplicación pasando un
argumento a la hora de invocar nuestro programa:

```sh
# Arranca la aplicación el puerto 8888 usando npm
npm start 8888
```

#### Variables de entorno

Nuestra aplicación usa las siguientes variables de entorno:

* `PORT`: Si no se ha especificado un puerto como argumento de lína de comando,
  podemos usar la variable de entorno `PORT` para especificar el puerto. Valor
  por defecto `8080`.
* `MONGO_URL`: El _string_ de conexión de _MongoDB_. Cuando ejecutemos la
  aplicación en nuestra computadora (en entorno de desarrollo), podemos usar el
  valor por defecto (`mongodb://localhost:27017/default`), pero en producción es
  muy importante que usemos el string de conexión que nos indica
  [Mongo Cloud](https://cloud.mongodb.com/), dentro de "Connect" > "Connect your
  application" > "Standard conection string". Este _string_ debería ser algo
  así: `mongodb://system:<PASSWORD>@bq-shard-00-00-ust2z.gcp.mongodb.net:27017,bq-shard-00-01-ust2z.gcp.mongodb.net:27017,bq-shard-00-02-ust2z.gcp.mongodb.net:27017/test?ssl=true&replicaSet=bq-shard-0&authSource=admin&retryWrites=true`.
  Este string depende de tu cluster y el usuario que hayas creado en MongoDB
  Cloud.
* `JWT_SECRET`: Nuestra aplicación implementa autenticación usando JWT (JSON
   Web Tokens). Para poder firmar (cifrar) y verificar (descifrar) los tokens,
  nuestra aplicación necesita un secreto. En local puedes usar el valor por
  defecto (`xxxxxxxx`), pero es muy importante que uses un _secreto_ de verdad
  en producción.
* `ADMIN_EMAIL`: Opcionalmente podemos especificar un email y password para
  el usuario admin (root). Si estos detalles están presentes la aplicación se
  asegurará que exista el usuario y que tenga permisos de administrador. Valor
  por defecto `admin@localhost`.
* `ADMIN_PASSWORD`: Si hemos especificado un `ADMIN_EMAIL`, debemos pasar
  también una contraseña para el usuario admin. Valor por defecto: `changeme`.

### HTTP API

#### Docs

El cliente nos ha dado un link a la documentación que especifica el
comportamiento esperado del API que expondremos por HTTP. Ahí puedes encontrar
todos los detalles de qué _endpoints_ debe implementar la aplicación, qué
parámetros esperan, qué deben responder, etc.

[API Docs](https://documenter.getpostman.com/view/1721181/RWgozeom)

#### Auth

El _boilerplate_ proporcionado ya incluye autenticación usando JWT. Al
arrancar la aplicación automáticamente se creará el usuario _admin_, y podemos
solicitar un token en el endpoint `POST /auth`. Por ejemplo:

```sh
$ curl -i \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{"email":"admin@localhost","password":"changeme"}' \
  --url http://127.0.0.1:8080/auth
```

Debería producir una respuesta como la siguiente, incluyendo el `token` en el
cuerpo/body.

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 161
ETag: W/"a1-j1/XebN6Fu/F/iVuLk8wlCmAY1w"
Date: Mon, 08 Oct 2018 18:24:09 GMT
Connection: keep-alive

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1YmI3ZGE0ZTZiNTgwMTZiNTNhOGNjN2IiLCJpYXQiOjE1MzkwMjMwNDl9.VwFqtsWeba0JP9hKRugZ7ufvzQqz4bW1uCBXWaDUjfU"}
```

Una vez que tenemos este `token`, podemos usarlo para autenticar nuestros
requests. Por ejemplo:

```sh
$ curl -i \
  --request GET \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1YmI3ZGE0ZTZiNTgwMTZiNTNhOGNjN2IiLCJpYXQiOjE1MzkwMjMwNDl9.VwFqtsWeba0JP9hKRugZ7ufvzQqz4bW1uCBXWaDUjfU' \
  --header 'Content-Type: application/json' \
  --url http://127.0.0.1:8080/users/admin@localhost
```

```text
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 165
ETag: W/"a5-rSuj3iy1yxskVnae9/6+V5D1tqA"
Date: Mon, 08 Oct 2018 18:29:43 GMT
Connection: keep-alive

{"_id":"5bb7da4e6b58016b53a8cc7b","email":"admin@localhost","password":"$2b$10$1YUIc0srtA.R5ui35nvoU.gZ30fEuoflze6QBlYmdjASHKTXMZY2y","roles":{"admin":true},"__v":0}
```

EL _boilerplate_ también incluye el endpoint `POST /users`, que nos permite
crear usuarios. Ver docs para más información.

Puedes ejecutar estas pruebas en [Postman](https://www.getpostman.com) si así
lo prefieres o si no tienes curl instalado.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Como _hacker edition_, te proponemos que elijas una o más de las siguientes
_características_.

### Paginación

Los endpoints `GET /users`, `GET /products` y `GET /orders` retornan
colecciones, y en estos casos queremos ofrecer _paginación_ usando el header
HTTP `Link` en la respuestas (como hace el [API de GitHub](https://developer.github.com/v3/guides/traversing-with-pagination/)).

### Basic Auth

Por ahora nuestra aplicación nos permite autenticarnos por medio de tokens.

```sh
curl -u username:password http://127.0.0.1:8080/users
```

Más info acá: [Autenticación de acceso básica - Wikipedia](https://es.wikipedia.org/wiki/Autenticaci%C3%B3n_de_acceso_b%C3%A1sica#Lado_Cliente)

### Aumentar code coverage

90%+ de cobertura en pruebas unitarias.

## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
aplicación será desplegada en [zeit.co](https://zeit.co/) y
[cloud.mongodb.com](https://cloud.mongodb.com/), o servicios equivalentes.

***

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

#### Dependencias

1. Instala [MongoDB](https://www.mongodb.com/) localmente.
2. Crea un cluster gratuito en [cloud.mongodb.com](https://cloud.mongodb.com/).
3. Creo un usuario en la base datos (MongoDB Users).
4. Crea un cuenta en [zeit.co](https://zeit.co/).
5. Instala herramienta de línea de comando `now`: `npm i -g now`

#### Copia local del proyecto

1. Haz un fork de este repo.
2. Clona el repo en tu computadora.
3. Instala dependencias (`npm i` o `npm install`).
4. Arranca la aplicación `npm start`.
5. Ejecuta pruebas unitarias y linter: `npm test`.
6. Ejecuta tests e2e (end-to-end): `npm run e2e`.

#### Despliegue

Antes de desplegar nuestra aplicación por primera vez tenemos que crear unos
_secretos_ en el servidor, que usaremos después para configurar nuestra
aplicación a través de _variables de entorno_.

La herramienta de `now` nos permite crear secretos con el comando `now secrets
add <key> <value>`. Por ejemplo:

```sh
$ now secrets add mongo-url "mongodb://system:<PASSWORD>@foo-shard-00-00-ust2z.gcp.mongodb.net:27017,foo-shard-00-01-ust2z.gcp.mongodb.net:27017,foo-shard-00-02-ust2z.gcp.mongodb.net:27017/test?ssl=true&replicaSet=bq-shard-0&authSource=admin&retryWrites=true"
> Success! Secret mongo-url added (lupomontero) [1s]
$ now secrets add jwt-secret "this is actually supposed to be a secret"
> Success! Secret jwt-secret added (lupomontero) [1s]
$ now secrets add admin-email "admin@localhost"
> Success! Secret admin-email added (lupomontero) [1s]
$ now secrets add admin-password "changeme"
> Success! Secret admin-password added (lupomontero) [1s]
```

Recurda que solo necesitas _crear_ los secretos una vez. No es necesario
crearlos cada vez que vayas a desplegar cambios.

Una vez configurados los _secretos_ en el servidor, podemos proceder con el
despliegue:

```sh
now \
  -e MONGO_URL=@mongo-url \
  -e JWT_SECRET=@jwt-secret \
  -e ADMIN_EMAIL=@admin-email \
  -e ADMIN_PASSWORD=@admin-password
```

Este comando está configurado como tarea `deploy` en el `package.json`, así que
puedes ejecutarlo con `npm run deploy`.

### Otros recursos

* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [mongoose](https://mongoosejs.com/)
* [mongoose-paginate](https://github.com/edwardhotchkiss/mongoose-paginate)
* [MongoDB Cloud](https://cloud.mongodb.com/)
* [Zeit](http://zeit.co/)
* [Postman](https://www.getpostman.com)
* [Variable de entorno - Wikipedia](https://es.wikipedia.org/wiki/Variable_de_entorno)
* [`process.env` - Node.js docs](https://nodejs.org/api/process.html#process_process_env)

***

## 9. Checklist

### HTTP API

#### `/auth`

* [x] `POST /auth`

#### `/users`

* [x] `GET /users`
* [x] `GET /users/:uid`
* [x] `POST /users`
* [x] `PUT /users/:uid`
* [x] `DELETE /users/:uid`

#### `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

#### `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderid`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderid`
* [ ] `DELETE /orders/:orderid`
