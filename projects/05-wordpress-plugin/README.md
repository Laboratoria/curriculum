# Plugin para WordPress

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)
* [7. Apache, MySQL y PHP](#7-apache-mysql-php)

***

## 1. Preámbulo

Los sistemas de gestión de contenidos o CMS (Content Management Systems) son
aplicaciones web que permiten a usuarios crear contenidos con una interfaz visual
de manera rápida y sencilla sin necesidad de tener conocimientos previos en
en programación. Entre los más utilizados están
[WordPress(42.1%),
Shopify(3.7%), Joomla(2.0%), Squarespace(1.7%) y
Wix(1.7%)](https://w3techs.com/technologies/overview/content_management),
según un estudio de 2021 de W3Techs.com.

WordPress es uno de los CMS más utilizados en el mercado. Éste permite crear
blogs personales u otro tipo de sitios web,
como páginas corporativas, revistas,
tiendas online, periodicos digitales, etc. Aquí te dejamos el sitio
[WordPress Website Showcase](https://wordpress.org/showcase/)
donde podrás encontrar otros ejemplos de uso que tiene la aplicación.
Además WordPress es un
sistema de software libre, gratuito, modular, y compatible con muchos plugins
y temas, constantemente actualizado y con mejoras gracias a la comunidad de
desarrolladores. El lenguaje en el que desarrollamos WordPress es PHP,
que es el lenguaje de código abierto
[más popular desde el lado del servidor (79.2%)](https://w3techs.com/technologies/overview/programming_language),
según un estudio de W3Techs.com.
y se usa principalmente para crear páginas webs dinámicas y aplicaciones.

![stephen-phillips-hostreviews-co-uk-sSPzmL7fpWc-unsplash](https://user-images.githubusercontent.com/110297/135535732-8585355e-2382-4a94-8669-4c139f0bd70f.jpg)

## 2. Resumen del proyecto

En este proyecto te invitamos a desarrollar un plugin para WordPress. Puedes
proponer libremente la funcionalidad de tu plugin. Cuando tengas una idea más o
menos definida, asegúrate de pedir ayuda del equipo de coaches para determinar
exactamente cuál será el alcance de tu proyecto y qué objetivos de aprendizaje
cubrirás. Define un alcance que te tome de 4 a 5 semanas como máximo.

Este proyecto puedes desarrollarlo de forma individual o por duplas. Tu decides
de acuerdo al alcance que hayas definido.

Puedes encontrar inspiración para la funcionalidad de tu plugin en la
[tienda oficial de WordPress](https://wordpress.org/plugins/).

Algunas ideas que podrían funcionar son:

* Un plugin que permita determinar si el contenido de un post nuevo es original
o es un plagio de uno post ya existente.
* Un plugin que integre un chat de WhatsApp en un sitio WordPress.
* Un plugin para integrar una pasarela de pago como
[Mercado Pago](https://www.mercadopago.com.co/developers/en/guides),
[Culqui](https://docs.culqi.com/) o [Wompi](https://docs.wompi.co/)

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

### Estructura de archivos

El _boilerplate_ contiene una estructura de archivos como punto de partida:

```text
.
├── .gitignore
├── docker-composer.yml
├── project.yml
├── README.md
└── apache2
└── html
└── logs
└── php-playground
```

#### `apache2`

Esta carpeta almacena los archivos de configuración de Apache, el servidor web
usado en esta instalación de WordPress. No debería ser necesario modificar
ningún archivo en ella.

#### `html`

En esta carpeta se encuentran los archivos y directorios de WordPress. Abre en
tu IDE esta carpeta para desarrollar tu plugin. Puedes aprender más sobre la
estructura de directorios de WordPress
[acá](https://www.wpbeginner.com/beginners-guide/beginners-guide-to-wordpress-file-and-directory-structure/).

#### `logs`

En la carpeta `logs` se encuentran los archivos logs de apache. Puedes usar
estos archivos para depurar errores en tu código.

#### `php-playground`

En la carpeta `php-playground` puedes crear tus archivos PHP de práctica y ejecutarlos
accediendo en un navegador web a
[http://localhost:8080](http://localhost:8080). Por ejemplo, en esta carpeta ya
está creado el archivo [`hola.php`](http://localhost:8080/hola.php)
como se indica en la lección
["Su primera página con PHP"](https://www.php.net/manual/es/tutorial.firstpage.php)
del
[manual oficial de PHP](https://www.php.net/manual/es/).
Los archivos y el código que escribas en esta carpeta no afectarán a tu sitio WordPress.

## 5. Criterios de aceptación mínimos del proyecto

### Funcionalidades mínimas

Tu plugin como mínimo deberá:

* [Incluir una opción en el
menú de administración de
WordPress](https://developer.wordpress.org/plugins/administration-menus/).
* [Ser configurado desde
una página de configuración](https://developer.wordpress.org/plugins/settings/custom-settings-page/).
* [Usar los hooks de activación
y desactivación](https://developer.wordpress.org/plugins/plugin-basics/activation-deactivation-hooks/).
* [Contar con algún método
de desinstalación](https://developer.wordpress.org/plugins/plugin-basics/uninstall-methods/)
* [Verificar los permisos del usuario
al intentar ejecutar una acción](https://developer.wordpress.org/plugins/security/checking-user-capabilities/).
* [Validar](https://developer.wordpress.org/plugins/security/data-validation/),
[_limpiar_](https://developer.wordpress.org/plugins/security/securing-input/) y
[_escapar_](https://developer.wordpress.org/plugins/security/securing-output/)
la información ingresada por el usuario
* Usar al menos una
[API ofical de WordPress](https://codex.wordpress.org/WordPress_APIs)

### jQuery / Vue.js / React / Angular

Es común que para el desarrollo de la interfaz gráfica de un plugin de
WordPress se use
[jQuery](https://developer.wordpress.org/plugins/javascript/jquery/).
Sin embargo, también es posible usar librerías como
[React](https://dev.to/bobman38/how-to-use-react-inside-a-wordpress-application-49i)
o [Vue.js](https://school.geekwall.in/p/rkPvlcoSV)
o frameworks como [Angular](https://www.kevinleary.net/angularjs-wordpress-tutorial/).
Te invitamos a que evalúes cada alternativa y decidas cúal es la más apropiada
para ti.

### Modularización del código

El código que escribas para tu plugin deberá organizarse en una estructura de
carpetas lógica y clara. Puedes seguir la
[estructura de carpetas](https://developer.wordpress.org/plugins/plugin-basics/best-practices/#folder-structure)
recomendada por la documentacion oficial o puedes utilizar un
[_boilerplate_](https://developer.wordpress.org/plugins/plugin-basics/best-practices/#boilerplate-starting-points)
desarrollado por la comunidad.

### Pruebas unitarias

Deberás incluir pruebas unitarias para el plugin que desarrolles.
Te invitamos a escribir casos de prueba para las principales
funcionalidades de tu plugin.

## 6. Pistas, tips y lecturas complementarias

### Instalar WordPress

La manera más fácil de instalar WordPress en tu
computadora local es usando Docker Compose.

1. Instala Docker Composer en tu computadora.
Puedes consultar un video que hemos preparado
para ayudarte con esta instalación en
[Windows](https://www.loom.com/share/7f3183a68aaa428098c9d07e911f5e38)
o en [Linux](https://www.loom.com/share/d30afc8046b14dfab7494dfee0c969cd).

2. Haz un _fork_ de este repo (en GitHub).

3. Clona tu _fork_ en tu computadora:

    ```sh
    git clone git@github.com:<tu-usuario-de-github>/<cohortid>-wordpress-plugin.git

    cd <cohortid>-wordpress-plugin
    ```

4. Crea una rama a partir de `main` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

5. Ejecuta el siguiente comando desde el directorio de su proyecto.

   ```sh
   docker-compose up -d
   ```

    Esto ejecuta `docker-compose up` en modo detached, descarga las
    imágenes de Docker necesarias e inicia los contenedores de wordpress,
    wordpress-cli y base de datos.

6. Después de un par de minutos, WordPress debería estar ejecutándose en el
puerto 80 de tu computadora. Accede en un navegador web a
[http://localhost](http://localhost) y completa la
["famosa instalación de cinco minutos"](https://codex.wordpress.org/es:Instalando_WordPress#La_famosa_.C2.ABInstalaci.C3.B3n_en_5_minutos.C2.BB)
como administrador de WordPress.

7. [WP-CLI](https://wp-cli.org/) permite automatizar el mantenimiento de
sitios WordPress usando una consola de comandos en lugar de un navegador web.
Si quieres o necesitas usarlo, puedes ejecutarlo con el siguiente comando:

   ```sh
   docker-compose run --rm wp <WP-CLI COMMAND>
   ```

    Si tienes problemas en ejecutar este comando en Windows
    puedes deshabilitar el uso de Docker Compose V2.
    Para esto desmarca la casilla correspondiente en el
    menú de Característica Experimentale (Experimental Features).

### Administrar WordPress

Ahora que tienes instalado WordPress en tu computadora, el siguiente paso es
aprender a administrarlo. Para esto puedes seguir la
[guia oficial](https://wordpress.org/support/article/first-steps-with-wordpress/)
y crear tu primer post, página, categoría, comentario, instalar un plugin y
personalizar la apariencia del sitio usando un WordPress Theme. Recuerda que
tu sitio WordPress se encuentra en [http://localhost](http://localhost).

### Aprender PHP

Lo siguiente que te recomendamos es aprender y practicar la sintaxis básica de
PHP para declarar variables, usar condicionales, estructuras de control y
definir funciones. El [manual oficial de PHP](https://www.php.net/manual/es/)
es una buena fuente de información para iniciar.

En la carpeta `php-playground` puedes crear tus archivos PHP de práctica y
ejecutarlos accediendo en un navegador web a
[http://localhost:8080](http://localhost:8080).
Por ejemplo en esta carpeta ya esta creado el archivo `hola.php` como se
indica en la lección
["Su primera página con PHP"](https://www.php.net/manual/es/tutorial.firstpage.php)
del [manual oficial de PHP](https://www.php.net/manual/es/).
Los archivos y el código que escribas en esta carpeta no afectarán a tu sitio
WordPress.

No olvides configurar tu IDE para desarrollar con PHP. Si usas VSCode puedes
verificar la [documentación oficial](https://code.visualstudio.com/docs/languages/php).

### Desarrollar un WordPress Plugin

En este punto, ya podrás comenzar a desarrollar tu plugin para WordPress. Puedes
iniciar desarrollando un plugin básico como se indica en la sección
[Plugin Basics](https://developer.wordpress.org/plugins/plugin-basics/)
del [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/).

### PHPMyAdmin

[PHPMyAdmin](https://www.phpmyadmin.net/) es un aplicación web para administrar
 base de datos MySQL. Puedes usar la instancia de esta aplicación instalada por
  el boilerplate accediendo en un navegador a la url
  [http://localhost:8888/index.php](http://localhost:8888/index.php).

Las bases de datos suelen tener varios usuarios con diferentes permisos. La
base de datos instalada para este proyecto tiene un usuario _wordpress_ con
permisos limitados y un usuario _root_ con permisos de superadministrador. La
contraseña para ambos usuarios es _wordpress_. Puedes usar esta información
para autenticarte en PHPMyAdmin.

### Pruebas unitarias

PHPUnit es la librería usada para desarrollar las pruebas unitarias del core
de WordPress. Puedes usar esta misma librería para las pruebas unitarias de tu
plugin. Debes ejecutar el siguiente procedimiento una sola vez para configurar
el servicio de Docker con PHPUnit que ya tiene el boilerplate de este proyecto.

Paso 1:

En una terminal ubicada en el directorio de plugins de WordPress
(./html/wp-content/plugins) ejecuta el siguiente comando reemplanzando
`<plugin-name>` por el nombre de la carpeta de tu plugin:

```bash
docker-compose run --rm wp scaffold plugin-tests <plugin-name>
```

Esto creará varios
[archivos y carpetas](https://github.com/wp-cli/scaffold-command#wp-scaffold-plugin-tests)
para la ejecución de las pruebas unitarias.

Paso 2:

En la misma terminal ejecuta el siguiente comando reemplanzando
`<plugin-name>` por el nombre de la carpeta de tu plugin:

```bash
docker-compose run phpunit /app/plugin-name>/bin/install-wp-tests.sh
wordpress_test root wordpress db latest
```

Esto descargará la última versión de WordPress en una carpeta temporal y
creará una base de datos temporal para esta versión. Las pruebas unitarias de
tu plugin se ejecutarán sobre esta versión.

Paso 3:
En la misma terminal ejecuta el siguiente comando reemplanzando
`<plugin-name>` por el nombre de la carpeta de tu plugin:

```bash
docker-compose run --rm phpunit composer require
--dev yoast/ phpunit-polyfills --working-dir=/app/<plugin-name>
```

Este comando instalará la librería
[PHPUnit Polyfills](https://github.com/Yoast/PHPUnit-Polyfills)
con la ayuda de [Composer](https://getcomposer.org/). Composer es un
administrador de dependencias para proyectos PHP, tal como
[npm](https://www.npmjs.com/) lo es para proyectos JavaScript. Se crearán dos
archivos _composer.json_ y _composer.lock_ que deberás incluir en tu
repositorio. También se creará la carpeta _vendor_ que no deberás incluir en
tu repositorio.

Paso 4:

Finalmente, modifica el archivo _tests/bootstrap.php_ y agregar dos nuevas
líneas de código y asegúrate que quede como se muestra a continuación:

```php
//Require PHPUnit Polyfills
require dirname( dirname( __FILE__ ) ).'/vendor/yoast/phpunit-polyfills/
phpunitpolyfills-autoload.php';

// Start up the WP testing environment.
require "{$_tests_dir}/includes/bootstrap.php";

```

Este último paso garantiza que la librería PHPUnit Polyfills sea usada siempre
en todas las pruebas unitarias.

A partir de este punto ya puedes escribir pruebas en la carpeta _test_ del
plugin. El nombre de los archivos que contengan pruebas unitarias debe iniciar
con "test-".

Cada vez que quieras ejecutar tus pruebas deberás ejecutar el siguiente
comando reemplanzando `<plugin-name>` por el nombre de la carpeta de tu
plugin:

```bash
docker-compose run --rm phpunit phpunit -c /app/<plugin-name>/phpunit.xml.dist
```

Puedes encontrar un video con este procedimiento
[aquí](https://drive.google.com/drive/folders/1ntXVqA3fhL1YjZfg5PvT_74nWqSy3GQ1).

### Otros recursos

* [PHP Oficial Manual](https://www.php.net/manual/es/)
* [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/)
* [How to use React inside a WordPress application?](https://dev.to/bobman38/how-to-use-react-inside-a-wordpress-application-49i)
* [How to Approach Modern WordPress Development (Part 1)](https://www.toptal.com/wordpress/modern-wordpress-development-pt-1)
* [How to Approach Modern WordPress Development (Part 2)](https://www.toptal.com/wordpress/modern-wordpress-development-pt-2)

## 7. Apache, MySQL y PHP

Apache, MySQL y PHP hacen posible que todos los días millones de usuarios
accedan a sus sitios y servicios web favoritos. Veamos
brevemente qué son y como interactúan cada uno de estos componentes.

* Apache es un servidor web desarrollado y mantenido por una comunidad
abierta. Un servidor web es un software que procesa solicitudes de clientes
para acceder a recursos web. Por ejemplo, cuando ingresas por Google Chrome
a la url [https://www.google.com](https://www.google.com),
el navegador web, que asume el rol de
cliente, envía peticiones para acceder a los archivos HTML, JS, CSS e
imágenes que conforman el sitio web de Google. Estas peticiones serán
procesadas por un servidor web quien eventualmente las responderá con
los recursos solicitados.

* MySQL es una base de datos relacional (RDBMS) de código abierto.
En MySQL podemos almacenar toda la información que nuestras aplicaciones
y sitios web necesitan para funcionar. Por ejemplo, un sitio web WordPress
almacena en MySQL la información de los usuarios, páginas, plugins,
entre otros.

* PHP es un lenguaje de programación usado, entre otras cosas, para crear
páginas web dinámicas. Por ejemplo, no podemos usar sólo HTML para extraer y
visualizar información de una base de datos. Para lograr esto, podemos escribir
código PHP para conectarnos y consultar la base de datos y
generar código HTML para visualizar la información extraída.

Finalmente, veamos cómo estos tres componentes interactúan entre sí:

El proceso comienza cuando el servidor web Apache recibe solicitudes desde el
navegador de un usuario. Si la solicitud es para un archivo PHP, Apache pasa
la solicitud a PHP, que carga el archivo y ejecuta el código contenido en el
archivo. Si el código lo indica, PHP se comunica con MySQL para buscar o
almacenar cualquier dato.

Luego, PHP usa el código en el archivo y la información de la base de datos
para crear el HTML. El HTML resultante es transferido al servidor web Apache
para que  este a su vez los envíe al navegador. Al final, el HTML es mostrado
por el navegador web al usuario.
