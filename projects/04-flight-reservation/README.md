# Flight Reservation

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones](#4-consideraciones)
* [5. Criterios de aceptación del proyecto](#5-criterios-de-aceptación-del-proyecto)
* [6. Pistas / tips](#6-pistas--tips)

***

## 1. Preámbulo

Contestar a la pregunta ¿Por qué trabajar con un framework o librería? tiene
múltiples respuestas pero hoy en día el desarrollo web sigue evolucionando y
con ello la complejidad en el contexto del navegador, [_mantener la interfaz
sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo y aprovechar los recursos) en las características
_específicas_ de nuestra aplicación.

[React](https://reactjs.org/) o [Angular](https://angular.io/) son tecnologias
que nos permitira dar apertura a adoptar una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultar
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 2. Resumen del proyecto

Una aerolinea privada, ha considerado ofrecer sus servicios a
más personas por medio de una webapp que les permita planificar su viaje en
avión permitiendo encontrar un vuelo, ver horarios y hacer la reservación.

![flight-reservation](https://user-images.githubusercontent.com/6140157/148467747-1c932207-df1a-4554-a5fa-9a8679a0664e.jpg)

En este proyecto vas a construir una web app con algun framework o libreria de
javascript para reserva de vuelos, considera que el desarrollo es 100% a la
medida y si bien siempre puedes (y debes) proponer sugerencias de mejoras y/o
cambios, muchas veces trabajarás en proyectos en los que primero hay que
asegurarse de cumplir con lo requerido.

Esta es la información que tenemos del la aerolinea:

> Somo una aerolinea que ofrece vuelos en toda America Latina.
>
> Queremos ofrecer vuelos comerciales a todas las personas y para
> seguir creciendo, necesitamos un sistema que nos ayude a publicar nuestros
> vuelos y les permita hacer la reservación a nuestros clientes.
>
> Tenemos 2 tipos de vuelo vuelos: _vuelo sencillo y vuelo redondo_
>
>Nuestras principales rutas son:
> | Origen    | Destino |
> |-----------|---------|
> | México    | Perú    |
> | México    | Chile   |
> | México    | Colombia|
> | México    | Brasil  |
> | Perú      | México  |
> | Perú      | Chile   |
> | Perú      | Colombia|
> | Perú      | Brasil  |
> | Chile     | México  |
> | Chile     | Perú    |
> | Chile     | Colombia|
> | Chile     | Brasil  |
> | Colombia  | México  |
> | Colombia  | Perú    |
> | Colombia  | Chile   |
> | Colombia  | Brasil  |
> | Brasil    | México  |
> | Brasil    | Perú    |
> | Brasil    | Chile   |
> | Brasil    | Colombia|
>
> **Importante:** Los clientes pueden hacer la reservación para dos o más
> personas, ademas de elegir (con un costo adicional) documentar equipaje extra.
>
> Los precios entre fechas cambian, por lo que es muy común que los clientes
> cambien su reservación varias veces antes de finalizarla.

La interfaz debe mostrar los dos menús (vuelo sencillo y vuelo redondo), cada
uno con todos los _vuelos_. El usuario debe poder ir eligiendo qué _vuelo_
agregar y la interfaz debe ir mostrando el _resumen de la reservacion_ con el
todos los horarios y el costo total.

El objetivo principal de este proyecto es aprender a construir una _interfaz web_
usando el _framework_ elegido (React, Vue o Angular). Todos estos frameworks de
Front-end atacan el mismo problema: **cómo mantener la interfaz y el estado sincronizados**.
Así que esta experiencia espera familiarizarte con el concepto de _estado de pantalla_,
y cómo cada cambio sobre el estado se va a ir reflejando en la interfaz (por ejemplo,
cada vez que agregamos un _producto_ a un _pedido_, la interfaz debe actualizar
la lista del pedido y el total).

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones

Este proyecto se debe "resolver" de forma individual o en dupla.

Trabaja en una historia hasta terminarla antes de pasar a la siguiente. Trabaja
hasta la historia que puedas en el tiempo especificado.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
En este proyecto Sí está permitido usar librerías o frameworks
(debes elegir entre [React](https://es.reactjs.org/), [Vue](https://vuejs.org/)
o [Angular](https://angular.io/)).

La aplicación debe ser un _Single Page App_. Las reservaciones  las haremos
desde una _computadora_.

Necesitamos pensar bien en el aspecto UX de los clientes,
 el tamaño y aspecto de los botones, la visibilidad del estado actual del
 pedido, etc.

La aplicación desplegada debe tener 80% o más el las puntuaciones de
Performance, Progressive Web App, Accessibility y Best Practices de Lighthouse.

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, la parte de la interfaz no está incluida, por lo que, deberás
definir la estructura de carpetas y archivos que consideres necesaria. Puedes
guiarte de las convenciones del _framework_ elegido. Por ende, los _tests_ y el
_setup_ necesario para ejecutarlos, serán hechos por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## 5. Criterios de aceptación del proyecto

### Definición del producto

El [_Product Owner_](https://youtu.be/r2hU7MVIzxs) nos
presenta este _backlog_ que es el resultado de su trabajo con el cliente hasta
hoy.

***

#### [Historia de usuario 1] Usuario/a debe poder tomar pedido de cliente

## 6. Pistas / Tips

### Primeros pasos

NOTA: Si estás haciendo el proyecto en equipo, estos pasos solo los necesita
hacer una persona por equipo. El resto de las integrantes del equipo después
podrán hacer sus propios _forks_ a partir del _fork_ principal de su equipo.

1. Haz un _fork_ de este repo (en GitHub).

2. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-flight-reservation.git
   cd <cohortid>-flight-reservation
   ```

3. Crea una rama a partir de `main` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

4. Crea un proyecto en [Firebase](https://firebase.google.com/)

5. Habilita Firestore (_comenzar en modo bloqueado_) en sección de "Bases de
   Datos" de [Firebase console](https://console.firebase.google.com/).

6. Instala la [utilidad de línea de comando de Firebase](https://firebase.google.com/docs/cli?hl=es).
   Esta utilidad nos permitirá usar el comando `firebase` desde nuestra
   terminal. Ten en cuenta que el comando de instalación incluye la opción `-g`,
   lo cual significa que estamos instalando `firebase-tools` de forma _global_,
   con lo cual quedará disponible desde cualquier _lugar_ (es independiente de
   un proyecto en particular, no queda instalado en la carpeta `node_modules` de
   tu proyecto, si no globalmente, por lo tanto no importa desde qué carpeta
   ejecutes el siguiente comando de instalación).

   ```sh
   npm i -g firebase-tools
   ```

7. Iniciamos sesión con Firebase y agregamos entorno que usaremos para
   desplegar:

   ```sh
   firebase login
   firebase use --add

   # Una vez agregado el entorno (proyecto de firebase) puedes agregar otros y
   # listar los entornos configurados para esta carpeta con este comando
   firebase use
   ```

8. Llegado a este punto, ya puedes comenzar con la problemática del proyecto en
   sí. Te recomendamos como siguiente paso convertir el menú descrito por el
   cliente en una estructura que podamos poner en un archivo JSON para después
   _pintar_ en la pantalla.

### Despliegue

En esta sección revisamos algunas opciones para desplegar
el backend y frontend de tu app.
Si usas firebase con reglas de firestore, índices, cloud functions,
necesitas desplegar el backend con firebase-cli.

Puedes desplegar el frontend con Firebase hosting.
Hay otras opciones como Github Pages (que ya estan familiarizadas),
Netlify, y Heroku.

Netlify y Heroku son servicios para desplegar tu web app - backend y
frontend - y no son limitados a usar solamente con Firebase.
Por ejemplo, puedes desplegar un app MySQL/Express/React.

#### Build para production

Cada framework incluye su propio _pipeline_ de _construcción_ o _build_. Con
esto nos referimos a que para _construir_ nuestro proyecto y producir un
_artefacto_ que podamos desplegar vamos a usar un script que normalmente
configuramos como una tarea de `npm-scripts` con el nombre `build` e invocamos
así:

```sh
npm run build
```

Una vez hayamos _construido_ la aplicación, tendremos un directorio que contiene
la app lista para desplegar. Dependiendo del framework que uses y tu
configuración en particular, esa carpeta puede tener un nombre distinto;
normalmente `build` o `dist`.

##### Firebase

La herramienta de línea de comando de Firebase (`firebase-tools`) incluye un
comando que nos permite desplegar nuestro proyecto a Firebase:
`firebase deploy`. A la hora de ejecutar este comando, se usará la configuración
que tenemos en el archivo `firebase.json`. En ese archivo asegúrate de que la
_propiedad_ `public` del _objeto_ `hosting` tenga la ruta correcta a la carpeta
donde hemos _construido_ la aplicación. En este ejemplo es implemente `build`,
asumiendo que la carpeta `build` es una subcarpeta del directorio donde se
encuentra nuestro `firebase.json`.

```json
  ...
  "hosting": {
    "public": "build",
    ...
  },
  ...
```

Finalmente, estás lista para desplegar tu proyecto a Firebase :rocket::fire:!

```sh
firebase deploy
```

##### Netlify

[Netlify](http://netlify.com) es un servicio de hosting
para sitios web estáticos.
Para usarlo primero necesitas crear una cuenta en
[Netlify](http://netlify.com) y después puedes conectar tu repo.

* [Netlify y Angular](https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-angular/)
* [Netlify y Vue](https://cli.vuejs.org/guide/deployment.html#gitlab-pages)
* [Netlify y Vue](https://medium.com/vue-mastery/deploying-a-vue-app-to-netlify-8f8f7d36f8fb)
* [Netlify y React](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)

Para desplegar tu aplicación en netlify seleccionas acceder con GitHub
y luego concedes los permisos para que Netlify acceda a tus repositorios y
generar la clave para poder realizar el despliegue continuo.

Una vez terminado el registro bastará con compilar tu aplicación para
producción y arrastrar tu carpeta (dist, build) a la parte de sites
dentro de netlify.

![netlify-sites](https://user-images.githubusercontent.com/21324865/128918519-04336a77-9c34-4266-a711-9975917e8f87.png)

Al terminar de cargar los archivos podras ver el nombre de la aplicación dentro
de Netlify junto al link del app ya hosteada.

###### netlify cli

Hay un `netlify-cli` si prefieres hacer el despliegue por linea de comando.
Para usarlo, hay que instalar el cli en tu proyecto y authorizarlo.

Puedes checar la [documentación](https://docs.netlify.com/cli/get-started/)
o seguir con los siguentes comandos:

```sh
npm install netlify-cli --save-dev
netlify login
```

Esto va a crear un `config.json` en tu proyecto.

Puedes usar `netlify` con continuous deployment (despliegue continuo) y así
cada vez que agregues un commit se va a compilar y desplegar tu app con
los nuevos cambios. Alternativamente, también puedes hacer depliegue manual.

Para continuous deployment corre `netlify init`  y sigue las instrucciones
para conectar un repo de tu github.
Puedes configurar deploy settings (comando para el build, directorio de la
carpeta y la rama para producción) en "deploy settings" de tu site en netlify.

Para desplegar manualmente puedes usar `netlify deploy`. También por defecto
busca un directorio `build` en tu proyecto para desplegarlo. Si tu proyecto
tiene un directorio de otro nombre puedes usar la opción `--dir`.

```sh
netlify deploy --dir=dist`
```

#### Github pages

* [Github pages y Vue](https://cli.vuejs.org/guide/deployment.html#github-pages)
* [Github pages y Angular](https://angular.io/guide/deployment#deploy-to-github-pages)
* [Github pages y React](https://create-react-app.dev/docs/deployment/#github-pages-https-pagesgithubcom)

#### Heroku

### :information_source: Nota para estudiantes que elijan React y `create-react-app`

Si tratas de usar [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html)
en el directorio del proyecto recibirás un error diciendo que hay archivos que
podrían presentar un conflicto. Para evitar este problema puedes crear una nueva
app usando `create-react-app` y de ahí _mezclarla_ con la carpeta del proyecto:

```sh
# Si estabas en la carpeta del proyecto, salimos a la carpeta de más arriba
cd ..

# Creamos una nueva aplicación con `create-react-app` en la carpeta
# `flight-reservation-tmp`
npx create-react-app flight-reservation-tmp

# Copiamos el _boilerplate_ del proyecto _encima_ de la aplicación creada con
# `create-react-app`
cp -r <cohort-id>-flight-reservation/* flight-reservation-tmp/

# Copiamos el contenido de la aplicación creada con `create-react-app` de vuelta
# al repo del proyecto (teniendo en cuenta el archivo _oculto_ `.gitignore`).
cp -r flight-reservation-tmp/.gitignore flight-reservation-tmp/* <cohort-id>-flight-reservation/

# Ya podemos borrar la instalación _temporal_ y quedarnos solo con el repo del
# proyecto, con el que partimos.
rm -rf flight-reservation-tmp

# Volvemos a entrar en el directorio del proyecto y ya deberíamos estar listas
# para comenzar.
cd <cohort-id>-flight-reservation

# Para confirmar que todo fue bien arranca la aplicación con el siguinte comando
# y verifica que la interfaz se abre en el navegador.
yarn start
```

### Otros recursos

#### Frameworks / libraries

* [React](https://es.reactjs.org/)
* [Vue](https://vuejs.org/)
* [Angular](https://angular.io/)

#### Herramientas

* [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [Babel](https://babeljs.io/)
* [webpack](https://webpack.js.org/)

#### PWA

* [Tu primera Progressive Web App - Google developers](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=es)
* [Progressive Web Apps - codigofacilito.com](https://codigofacilito.com/articulos/progressive-apps)
* [offlinefirst.org](http://offlinefirst.org/)
* [Usando Service Workers - MDN](https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API/Using_Service_Workers)
* [Cómo habilitar datos sin conexión - Firebase Docs](https://firebase.google.com/docs/firestore/manage-data/enable-offline?hl=es-419)

#### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)
