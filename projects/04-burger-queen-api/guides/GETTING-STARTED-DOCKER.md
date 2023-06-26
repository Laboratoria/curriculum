# Primeros pasos

Una vez creado tu fork y clonado el repo en tu computadora, antes de poder
comenzar a codear, tenemos primero que crear nuestro _entorno de desarrollo_.
Para ello te recomendamos seguir los pasos a continuación:

* [1. Instalar `docker` y `docker-compose`](#1-instalar-docker-y-docker-compose)
* [2. Configurar "servicio" de base de datos](#2-configurar-servicio-de-base-de-datos)
* [3. Configurar conexión a BBDD en "servicio" node](#3-configurar-conexión-a-bbdd-en-servicio-node)
* [4. Iniciar, re-iniciar y parar los servicios con `docker-compose`](#4-iniciar-re-iniciar-y-parar-los-servicios-con-docker-compose)
* [5. Familiarizarte con administración de contenedores](#5-familiarizarte-con-admisitración-de-contenedores)
* [6. Opcionalmente, instalar interfaz gráfica para administrar data](#6-opcionalmente-instalar-interfaz-gráfica-para-administrar-data)
* [7. Corre las pruebas de integración (e2e)](#7-corre-las-pruebas-de-integración-e2e)

***

## 1. Instalar `docker` y `docker-compose`

Independientemente de qué base datos elijas, en este proyecto vamos a ejecutar
localmente (en nuestra computadora) el servidor de bases de datos usando
_contenedores_ de Docker en vez de instalar el programa directamente en nuestra
computadora. Además vamos a usar también la herramienta `docker-compose` para
_orquestar_ nuestros contenedores: bases de datos y servidor web (node).

En los siguientes links puedes ver cómo instalar `docker` y `docker-compose` en
tu sistema opetativo.

* [Get Docker](https://docs.docker.com/get-docker/)
* [Install Docker Compose](https://docs.docker.com/compose/install/)

## 2. Configurar "servicio" de base de datos

El boilerplate de este proyecto incluye un archivo
[`docker-compose.yml`](./docker-compose.yml) que ya contiene parte de la
configuración de `docker-compose`. En este archivo veremos que hay listados 2
servicios: `db` y `node`. Nuestra aplicación va a consistir de dos servidores:
un servidor de bases de datos (el servicio `db`) y un servidor web implementado
en Node.js (el servicio `node`).

En la sección correspondiente al servicio `db` hay 3 cosas importantes que
tendremos que completar:

* Qué _imagen_ (`image`) queremos usar. Imágenes recomendadas:
  [mongo](https://hub.docker.com/_/mongo),
  [postgres](https://hub.docker.com/_/postgres) y
  [mysql](https://hub.docker.com/_/mysql).
* Qué volúmenes (`volumes`), archivos o carpetas, queremos mapear al
  contenedor, como por ejemplo el directorio de datos (la carpeta donde la
  base de datos guardará sus archivos).
* Las variables de entorno (`environment`) necesarias para configurar nuestra
  base de datos y usuarios. Estos datos nos van a servir después para
  configurar la conexión desde Node.js.

Ejemplo de servicio `db` usando [MongoDB](https://hub.docker.com/_/mongo):

```yml
db:
  image: mongo:4
  volumes:
    - ./db-data:/data/db
  environment:
    MONGO_INITDB_ROOT_USERNAME: bq
    MONGO_INITDB_ROOT_PASSWORD: secret
  restart: always
  networks:
    - private
```

Ejemplo de servicio `db` usando [PostgreSQL](https://hub.docker.com/_/postgres):

```yml
db:
  image: postgres:13
  volumes:
    - ./db-data:/var/lib/postgresql/data
  environment:
    POSTGRES_PASSWORD: secret
  restart: always
  networks:
    - private
```

Ejemplo de servicio `db` usando [MySQL](https://hub.docker.com/_/mysql):

```yml
db:
  image: mysql:5
  volumes:
    - ./db-data:/var/lib/mysql
  environment:
    MYSQL_ROOT_PASSWORD: supersecret
    MYSQL_DATABASE: bq
    MYSQL_USER: bq
    MYSQL_PASSWORD: secret
  restart: always
  networks:
    - private
```

## 3. Configurar conexión a BBDD en "servicio" node

Ahora que ya tenemos la configuración del _servicio_ `db`, tenemos que
completar la configuración del _servicio_ de Node.js. En particular nos
interesa establecer el valor de la variable de entorno `DB_URL`, donde
tendremos que poner el _connection string_ correspondiente a nuestra base de
datos. Este _string_ de conexión sigue el formato de URL y se ve así:

```text
protocol://username:password@host:port/dbname?opt1=val1&...
```

Acá sustituiremos `protocol` con el nombre del protocolo de la base de datos
elegida (`mongodb`, `postgresql` o `mysql`) y `username`, `password` y
`dbname` con los valores usados en la configuración del servicio `db` en el
punto anterior. En este caso el valor de `host` será `db`, que es el nombre
del servicio de base de datos en la configuración de `docker-compose.yml` y
podemos referirnos a él por su nombre en la red interna entre los
contenedores. Siguiendo con los ejemplos del punto anterior, la variable
`DB_URL` en `docker-compose.yml` se vería así:

* MongoDB:

  ```yml
  DB_URL: mongodb://bq:secret@db:27017/bq?authSource=admin
  ```

* PostgreSQL:

  ```yml
  DB_URL: postgresql://postgres:secret@db:5432/postgres?schema=public
  ```

* MySQL:

  ```yml
  DB_URL: mysql://bq:secret@db:3306/bq
  ```

## 4. Iniciar, re-iniciar y parar los servicios con `docker-compose`

Ahora que ya tenemos nuestra configuración de `docker-compose` lista, veamos
cómo podemos _levantar_ la aplicación. Para eso usamos el comando
`docker-compose up` dentro de la carpeta de nuestro proyecto (donde está el
archivo `docker-compose.yml`).

```sh
docker-compose up
```

Para interrumpir el comando y que el terminal nos devuelva el _prompt_, usa
`Ctrl + C`.

Si usamos el comando así, sin opciones, esto levantará todos los servicios
descritos en el `docker-compose.yml`. Alternativamente podemos arrancar un
servicio en particular agregando el nombre del servicio en el comando. Por
ejemplo, si queremos levantar sólo la base de datos:

```sh
docker-compose up db
```

También tenemos la opción de arrancar los servicios y que corran en el _fondo_,
como _daemons_, con la opción `-d`, de forma que inmediatamente se nos devuelve
el _prompt_ y los servicios quedan corriendo.

```sh
docker-compose up -d
```

Además del comando `docker-compose up`, que construye, (re)crea, arranca, y
se conecta a los contenedores de unos servicios, también tenemos disponibles
comandos para iniciar (`start`), reiniciar (`restart`) y parar (`stop`)
servicios con contenedores ya existentes.

```sh
docker-compose start
docker-compose stop
docker-compose restart
```

Al igual que con `docker-compose up`, con estos otros comandos también podemos
especificar con qué _servicio_ queremos interactuar (o con todos en caso de no
especificarlo). Por ejemplo, para inicar, reiniciar y después parar el servidor
de bases de datos:

```sh
docker-compose start db
docker-compose stop db
docker-compose restart db
```

## 5. Familiarizarte con administración de contenedores

Además de los comandos que ya hemos visto de `docker-compose`, te recomendamos
familiarizarte con estos otros comandos (entre otros) para poder _administrar_
tus contenedores.

El comando `docker-compose ps` nos muestra un listado con los contenedores
_activos_:

```sh
docker-compose ps
```

También podemos listar _todos_ los contenedores, incluyendo los que están
detenidos usando la opción `-a`:

```sh
docker-compose ps -a
```

Para borrar los contenedores de los servicios:

```sh
docker-compose rm
```

Al igual que con los comandos anteriores, también podemos borrar los
contenedores de un servicio en particular indicando su nombre:

```sh
docker-compose rm db
```

Finalmente, cuando corremos nuestros servicios en el fondo, como _daemons_, para
conectarnos a los contenedores y ver los _logs_ podemos usar:

```sh
docker-compose logs
```

Podemos agregar también la opción `-f` para hacer _streaming_ de los logs y
quedarnos _escuchando_, así como especificar un servicio en particular. Por
ejemplo:

```sh
docker-compose logs -f db
```

Recuerda que siempre puedes consultar la _ayuda_ de `docker-compose` con el
sucomando `help`. Por ejemplo, si queremos ver la ayuda del subcomando `up`,
podríamos hacer esto:

```sh
docker-compose help up
```

## 6. Opcionalmente, instalar interfaz gráfica para administrar data

A la hora de trabajar con bases de datos es muy común usar algún tipo de
interfaz gráfica que nos permita ver y manipular visualmente nuestra data.
Hay opciones para cada base de datos. Recomendamos las siguientes:
[Compass](https://www.mongodb.com/products/compass) (MongoDB),
[Workbench](https://www.mysql.com/products/workbench/) (MySQL),
[pgAdmin](https://www.pgadmin.org/) (PostgreSQL).

Si quieres usar este tipo de herramientas (como `Compass` o `WorkBench`), es
probable que tengas que hacer que tu base de datos sea visible fuera de
docker. Para ello puedes mapear el puerto de la base datos en el contenedor a
algún puerto que esté libre en el host de docker (normalmente tu
computadora). Normalmente vamos a mapear estos puertos estándar (por ejemplo
`27017` para MongoDB) a otros números de puerto distintos ya que estos
programas y/o sus puertos ya podrían estar en uso. Por ejemplo, si usamos
MongoDB, podríamos agregar el siguiente mapeo de puertos al servico `db` en
nuestro `docker-compose.yml`:

```yaml
ports:
  - 28017:27017
```

Al listar los puertos de un contenedor o servicio en `docker-compose.yml` ten
en cuenta que el número de la derecha es el puerto en el contenedor (red
privada de docker), mientras que el número de la izquierda es el puerto en
host de docker (normalmente nuestra computadora - `127.0.0.1` o `localhost`).
En el ejemplo de arriba estamos _mapeando_ el puerto `27017` del contenedor
al puerto `28017` del host de docker.

Si estás usando PostgreSQL o MySQL, los puertos que nos interesaría mapear
serían el `5432` y `3306` respectivamente.

Si estamos _exponiendo_ el puerto en nuestra computadora (el _host_), además
tendrás también que conectar el contenedor `db` a la red _pública_:

```yaml
networks:
  - public
  - private
```

Después de este cambio podrás acceder usando `127.0.0.1` o `localhost` y el
puerto al que hemos mapeado, `28017` en este ejemplo.

Si eliges [pgAdmin](https://www.pgadmin.org/) (PostgreSQL), la opción más
fácil es usar pgAdmin como contenedor y agregarlo como un nuevo servicio a
nuestro `docker-compose.yml`. Por ejemplo:

```yml
pgadmin:
  image: dpage/pgadmin4
  restart: always
  environment:
    PGADMIN_DEFAULT_EMAIL: user@domain.com
    PGADMIN_DEFAULT_PASSWORD: secret
  ports:
    - 8088:80
  networks:
    - public
    - private
```

NOTA: Para conectar desde pgAdmin usando un contenedor, usa el _nombre_ del
contenedor de la base datos (ie: `XXX-001-burger-queen-api_db_1`) como nombre
de host para que pgAdmin se pueda conectar a través de la red _privada_.

## 7. Corre las pruebas de integración (e2e)

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

Alternativamente, y quizás más fácil de usar, podemos también levantar nuestra
aplicación usando `docker-compose`, o incluso en producción, y después correr
las pruebas `e2e` pasando la URL de la aplicación en la variable de entorno
`REMOTE_URL`. Por ejemplo:

```sh
REMOTE_URL=http://127.0.0.1:8080 npm run test:e2e
```

Al especificar `REMOTE_URL`, los tests no tratarán de _levantar_ un servidor
local sino que usarán directamente la URL provista asumiendo que la aplicación
está disponible en dicha URL. Esto nos permite probar también contra URLs
remotas. Por ejemplo:

```sh
REMOTE_URL=https://api.my-super-app.com npm run test:e2e
```
