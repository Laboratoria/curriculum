# Primeros pasos con MongoDB

MongoDB es un base de datos no-relacionado, y es la más _común_ (popular)
a día de hoy en el ecosistema de Node.js.

Si vas a trabajar con MongoDB y Docker, mejor leer
[**la guía de _primeros pasos con Docker_**](./GETTING-STARTED-DOCKER.md)
primero. Si vas a instalar MongoDB y desarollar el proyecto sin
Docker en este momento, seguir leyendo este guia.

Una vez creado tu fork y clonado el repo en tu computadora, y haces `npm install`
para instalar las dependencias basicas, antes de poder
comenzar a codear, tenemos que crear nuestro _entorno de desarrollo_.
Para ello te recomendamos seguir los pasos a continuación:

* [1. Instalar MongoDB y Compass](#1-instalar-mongodb-y-compass)
* [2. Levanta el base de datos y server](#2-levanta-el-base-de-datos-y-server)
* [3. Elegir módulo (cliente)](#3-elegir-módulo-cliente)
* [4. Definir esquemas](#4-definir-esquemas)
* [5. Implementar los primeros TODOs](#5-implementar-los-primeros-todos)
* [6. Definir estrategia de pruebas unitarias](#6-definir-estrategia-de-pruebas-unitarias)
* [7. Familiarizarte con las pruebas de integración (e2e)](#7-familiarizarte-con-las-pruebas-de-integración-e2e)

***

## 1. Instalar MongoDB y Compass

El sitio de MongoDB tiene tutorials como instalar el [Community Edition](https://www.mongodb.com/docs/compass/current/install/).
Elige tu plataforma (Windows, Mac, Ubuntu etc) y sigue [el tutorial](https://www.mongodb.com/docs/manual/installation/#mongodb-installation-tutorials).

Con los tutorials, va a descargar y instalar MongoDB en tu sistema,
con algunas herramientas y comandos para usar en la linea de comando.

Tambien recomendamos que instales [Compass](https://www.mongodb.com/products/compass),
que es un GUI (Graphical User Interface) para interactuar con el base de datos.
Puedes interactuar con MongoDB sin Compass y solo en la linea de comando,
pero un GUI puede ayudarte visualizar y entender que esta en el db. Sigue [las
instrucciones de instalacion de Compass](https://www.mongodb.com/docs/compass/current/install/).

## 2. Levanta el base de datos y server

Podemos decir este proyecto tiene dos "servicios", uno es el base de datos para
almanecenar los productos, usuarios, etc., y el otro es el server para exponer
el API.

Estes servicios tienen que estar corriendo, disponible, para este proyecto,
el API, puede funcionar.

Para correr el server, es bien simple - con `npm start` va a ejecutar
[`index.js`](../index.js) que tiene logica basica de server con express.

Para levantar el server, este depende en tu instalación y sistema.
Por ejemplo, en MacOS si instalaste con `homebrew`, puede usar
`brew services start mongodb-community@6.0` para levantarlo. O sin `homebrew`,
`mongod --config /usr/local/etc/mongod.conf --fork`. En Windows, hay que
levantarlo desde Services console.

Revisa [la guia de instalacion de
](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition),
[guia de instalacion de Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition-as-a-windows-service),
o tu instalación en particular, para ejemplos en como levantarlo.

## 3. Elegir módulo (cliente)

Ahora que ya tenemos un servidor de bases de datos vamos a necesitar elegir un
módulo o librería diseñado para interactuar con nuestra base de datos desde
Node.js. Existen un montón de opciones, pero para este proyecto te recomendamos
usar el [Node driver de MongoDB](https://www.mongodb.com/docs/drivers/node/current/)
 (lo mas directo interactuar con MongoDB).

Hay que instalar el Node Driver en este proyecto usando `npm`.

El _boilerplate_ ya incluye un archivo `config.js` donde se leen las
variables de entorno, y entre ellas está `DB_URL`. Como vemos ese valor lo
estamos asignando en la propiedad `dbUrl` del módulo `config`.

```js
// `config.js`
exports.dbUrl = process.env.DB_URL || "mongodb://localhost:27017/test";
```

Ahora que ya sabemos dónde encontrar el _connection string_ (en el módulo
config), podemos proceder a establecer una conexión con la base de datos
usando el cliente elegido.

### Ejemplo de conexión usando MongoDB Node Driver

```js
const { MongoClient } = require('mongodb');
const config = require("./config");

const client = new MongoClient(config.dbUrl);

async function run() {
  try {
    await client.connect();
    const db = client.db('test');
    // ...
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);
```

Puedes encontrar mas ejemplos en [la documentación de MongoDB](https://www.mongodb.com/docs/drivers/node/current/?utm_campaign=w3schools_mdb&utm_source=w3schools&utm_medium=referral#fundamentals)
y también en [un tutorial de w3schools](https://www.w3schools.com/mongodb/mongodb_nodejs_connect_database.php).

## 4. Definir esquemas

Como parte del proceso de diseño de nuestra base de datos vamos a tener que
especificar los _esquemas_ de nuestros _modelos_ de datos. Con esto nos
referimos a que tenemos que _describir_ de alguna forma las colecciones o
tablas que vamos a usar y la _forma_ de los objetos o filas que vayamos a
guardar en esas colecciones.

Puedes usar [la documentación de API](https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0)
que describe la estructura de `products`, `orders`, etc. para guiar el diseño.

## 5. Implementar primeros TODOs

El boilerplate del proyecto viene con archivos con logica para arrancar el server
y otros que contienen funciones de rutas y authenticación, pero muchas estan vacios.
Hemos marcado los primeros partes essencial con comentarios `TODO` - que es un
convención de documentacion de desarollo cuando hay algo para hacer.

Aqui te guiamos un poco de estes todos.

### TODO 1: Conectar al base de datos

En el `index.js` donde arrancamos express y el API, hay

```js
const { port, dbUrl, secret } = config;
const app = express();

// TODO: Conexión a la Base de Datos (MongoDB o MySQL)
```

Aquí debes usar el `dbUrl` que importamos del config para establecer la conexión,
quiza atravez una funcion que defines en un modulo y importas en el index.

### TODO 2: Crear el usuario admin

EL proyecto depende en la existencia de un usuario en el base de datos que
tiene privilegios de administrador - para crear otros usuarios, etc.

En `routes/users.js` invocamos una funcion `initAdminUser(app, next)`
al final de archivo, y definimos esta funcion arriba en este misma archivo.

`initAdminUser` es incompleto, y hay un TODO para crear el usuario admin,
donde tienes que primero porbar si un admin ya existe, y si no agregar uno
al base de datos.

```js
const initAdminUser = (app, next) => {
  const { adminEmail, adminPassword } = app.get('config');
  if (!adminEmail || !adminPassword) {
    return next();
  }

  const adminUser = {
    email: adminEmail,
    password: bcrypt.hashSync(adminPassword, 10),
    roles: { admin: true },
  };

  // TODO: crear usuaria admin
  next();
};

Puedes confirmar si tu codigo funciona revisando el base de datos y un testeo unitario.

```

### TODO 3: Implementar autenticación de usuario

En `routes/auth.js` hay la ruta '/auth' definida, con un

```js
 // TODO: autenticar a la usuarix
 ```

Aqui es donde debe que verificar que el correo y password coinciden con
datos de un usuario en el base de datos, y si coinciden, hay que generar un
[JWT token](https://jwt.io/introduction)
y mandarlo en la respuesta, para el usuario puede usar con peticiones futuros.
Para ejemplos con mas detalle, busca tutoriales de autenticacion con JWT y node/express.

### TODO 4: Implementar el middleware de autenticación

En `middleware/auth.js` hay varios `TODOs`. Usa este oportunidad a familiarizarte
con [el concepto de middleware en express](https://expressjs.com/es/guide/using-middleware.html).

La aplicacion va a usar este middleware para chequear que los peticiones
que requiere autenticacion son autorizados, que tiene un token valido.

### TODO 5: Implemenatar la ruta GET `/users`

Para juntar y verificar todo el trabajo que has hecho, seria bueno implementar
una ruta basica del API, en este caso recomendamos `/users` porque ya debes
tener el user admin en tu base de datos, y este ruta usa el middleware de auth.

Vas a ver que la ruta `/users` usa la funcion `getUsers` que es definido en
`controller/users.js`. El concepto de controller nos sirve para separar más
la logica de la definición de rutas con la implementacion que va a hablar con
el base de datos. Hay que implementar `getUsers` para obtener la lista de
users del colleción en tu base de datos.

Revisa [el tutorial de Node y express en Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
que habla de controllers.

## 6. Definir estrategia de pruebas unitarias

Además de las pruebas `e2e` que ya incluye el _boilerplate_ del proyecto, se
espera que puedas también usar pruebas _unitarias_ para el desarrollo de los
diferentes _endpoints_ o _rutas_ así como otros módulos internos que decidas
desarrollar.

Para hacer pruebas unitarias de _rutas_ de Express, te recomendamos explorar la
librería [`supertest`](https://www.npmjs.com/package/supertest), que puedes usar
en combinación con `jest`.

Otro punto a tener en cuenta en las pruebas unitarias, es cómo _mockear_ la base
de datos. Algunas bases de datos ofrecen herramientas (como
[`mongodb-memory-server`](https://github.com/nodkz/mongodb-memory-server)) que
nos permiten usar una base de datos en memoria y así evitar hacer _mocks_ per
se, pero por lo general querremos considerar cómo abstraer la interacción
con la base de datos para facilitar _mocks_ que nos permitan concentrarnos en
la lógica de las rutas.

## 7. Familiarizarte con las pruebas de integración (e2e)

El _boilerplate_ de este proyecto ya incluye pruebas `e2e` (end-to-end) o de
_integración_, que se encargan de probar nuestra aplicación en conjunto,
através de la interfaz HTTP. A diferencia de las pruebas unitarias, en vez
de importar o requerir un módulo y probar una función de forma aislada, lo que
vamos a hacer es arrancar toda la aplicación, y probarla tal como se usaría en
el mundo real, para ello la aplicación de prueba necesitará una base de datos y
escuchar en un puerto de red.

Para correr pruebas e2e sobre instancia local podemos usar:

```sh
npm run test:e2e
```

Esto levanta la aplicación con `npm start` y corre los tests contra la URL de
esta instancia (por defecto `http://127.0.0.1:8080`). Esto asume que la base de
datos está disponible.

Los pruebas e2e depende en codigo de (`globalSetup.js`)[../e2e/globalSetup.js]
que `jest` sabe correr primero, antes de los tests.
En este paso de setup, levantamos un mock db (como hemos hablado de
[`mongodb-memory-server`](https://github.com/nodkz/mongodb-memory-server))
y jest se conecta a este mock db.

Para este configuracion - usamos `mongodb-memory-server` y un preset (`jest-mongodb`)[https://github.com/shelfio/jest-mongodb].
