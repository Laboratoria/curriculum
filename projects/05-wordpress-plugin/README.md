# Plugin para Wordpress

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

> Los sistemas de gestión de contenidos o CMS (Content Managment System)  son aplicaciones web que permiten a usuarios (sin necesidad de tener conocimientos previos en programación)  crear contenidos con una interfaz visual de manera rápida y sencilla. Entre los más utilizados están [Wordpress(42.1%), Shopify(3.7%), Joomla(2.0%), Squarespace(1.7%) y Wix(1.7%)](https://w3techs.com/technologies/overview/content_management).

> Wordpress es uno de los CMS más utilizados en el mercado, éste permite crear blogs personales u otro tipo de páginas web como webs corporativas, revistas, tiendas online, periodicos digitales, etc(aquí te dejamos Wordpress Website Showcase donde podrás encontrar otros casos de uso). Además Wordpress es un sistema de software libre, gratuito, modular, y compatible con muchos plugins y temas, constantemente actualizada y con mejoras gracias a la comunidad de desarrolladores. El lenguaje en el que desarrollamos Wordpress es PHP(Hypertext Preprocessor) es un lenguaje de código abierto [más populares desde el lado del servidor (79.2%)](https://w3techs.com/technologies/overview/programming_language) y se usa principalmente para crear páginas webs dinámicas y aplicaciones.

## 2. Resumen del proyecto

En este proyecto te invitamos a desarrollar un plugin para WordPress. Puedes proponer libremente la funcionalidad de tu plugin. Cuando tengas una idea más o menos definida, asegúrate de pedir ayuda del equipo de coaches para determinar exactamente cuál será el alcance de tu proyecto y que objetivos de aprendizaje cubrirás. Define un alcance que te tome de 2 a 3 semanas como máximo.

Este proyecto puedes desarrollarlo de forma individual o por duplas. Tu decides de acuerdo al alcance que hayas definido.

Puedes encontrar inspiración para la funcionalidad de tu plugin en la [tienda oficial de WordPress](https://wordpress.org/plugins/).

Algunas ideas que podrían funcionar son:
* Un plugin que permita determinar si el contenido de un post nuevo es original o es un plagiado de uno post ya existente.
* Un plugin que integre un chat de WhatsApp en un sitio WordPress.
* Un plugin para integrar una pasarela de pago como [Mercado Pago](https://www.mercadopago.com.co/developers/en/guides), [Culqui](https://docs.culqi.com/) o [Wompi](https://docs.wompi.co/)

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales



## 5. Criterios de aceptación mínimos del proyecto


## 6. Pistas, tips y lecturas complementarias

### Instalar WordPress

La manera más fácil de instalar WordPress en tu computadora local es usando [Docker Compose](https://docs.docker.com/compose/).

1. Instala Docker Composer en tu computadora. Puedes usar la [documentación oficial](https://docs.docker.com/compose/install/) para esto.

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
    Esto ejecuta ```docker-compose up``` en modo detached, descarga las imágenes de Docker necesarias e inicia los contenedores de wordpress, wordpress-cli y base de datos.

6. Después de un par de minutos, WordPress debería estar ejecutándose en el puerto 8000 de tu computadora. Accede en un navegador web a [http://localhost:8000](http://localhost:8000) y completa la ["famosa instalación de cinco minutos"](https://codex.wordpress.org/es:Instalando_Wordpress#La_famosa_.C2.ABInstalaci.C3.B3n_en_5_minutos.C2.BB) como administrador de WordPress.

7. [WP-CLI](https://wp-cli.org/) permite automatizar el mantenimiento de sitios WordPress usando una consola de comandos en lugar de un navegador web. En caso en que necesites usarlo, puedes ejecutarlo con el siguiente comando:

   ```sh
   docker-compose run --rm wp <WP-CLI COMMAND>
   ```

8. La estructura final de archivos es la siguiente:

    ```text
    .
    ├── .gitignore
    ├── docker-composer.yml
    ├── project.yml
    ├── README.md
    └── html
    └── mysql
    └── php-playground
    ```

    #### `html`
    En esta carpeta se encuetran los archivos y directorios de WordPress. Abre en tu IDE esta carpeta para desarrollar tu plugin. Puedes aprender más sobre la estructura de directorios de WordPress [acá](https://www.wpbeginner.com/beginners-guide/beginners-guide-to-wordpress-file-and-directory-structure/).

    #### `mysql`
    Esta carpeta es el [data directory](https://dev.mysql.com/doc/refman/8.0/en/data-directory.html) de MySQL, la base de datos de tu sitio WordPress. No necesitas usar nada de esta carpeta para desarrollar tu plugin.

    #### `php-playground`
    En la carpeta ```php-playground``` puedes crear tus archivos PHP de práctica y ejecutarlos accediendo en un navegador web a [http://localhost:9000](http://localhost:9000). Por ejemplo en esta carpeta ya esta creado el archivo ```hola.php``` como se indica en la lección ["Su primera página con PHP"](https://www.php.net/manual/es/tutorial.firstpage.php) del [manual oficial de PHP](https://www.php.net/manual/es/). Los archivos y el código que escribas en esta carpeta no afectarán tu sitio WordPress.

### Administrar WordPress

Ahora que tienes instalado WordPress en tu computadora, el siguiente paso es aprender a administrarlo. Para esto puedes seguir la [guia oficial](https://wordpress.org/support/article/first-steps-with-wordpress/) y crear tu primer post, página, categoría, comentario, instalar un plugin y personalizar la apariencia del sitio usando un WordPress Theme. Recuerda que tu sitio WordPress se encuentra en [http://localhost:8000](http://localhost:8000).

### Aprender PHP

Lo siguiente que te recomendamos es aprender y prácticar la sintaxis básica de PHP para declarar variables, usar condicionales y estructuras de control y definir funciones. El [manual oficial de PHP](https://www.php.net/manual/es/) es una buena fuente información para iniciar.

En la carpeta ```php-playground``` puedes crear tus archivos PHP de práctica y ejecutarlos accediendo en un navegador web a [http://localhost:9000](http://localhost:9000). Por ejemplo en esta carpeta ya esta creado el archivo ```hola.php``` como se indica en la lección ["Su primera página con PHP"](https://www.php.net/manual/es/tutorial.firstpage.php) del [manual oficial de PHP](https://www.php.net/manual/es/). Los archivos y el código que escribas en esta carpeta no afectarán tu sitio WordPress.

No olvides configurar tu IDE para desarrollar con PHP. Si usas VSCode puedes verificar la [documentación oficial](https://code.visualstudio.com/docs/languages/php).

### Desarrollar un WordPress Plugin

En este ya podrás comenzar a desarrollar tu plugin para WordPress. Puedes iniciar desarrollando un plugin básico como se indica en la sección [Plugin Basics](https://developer.wordpress.org/plugins/plugin-basics/) del [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/).

### Otros recursos

* [Getting started with Docker](https://docs.docker.com/get-started/)
* [Getting started with Docker Composer](https://docs.docker.com/compose/gettingstarted/)
* [PHP Oficial Manual](https://www.php.net/manual/es/)
* [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/)
* [How to use React inside a Wordpress application?](https://dev.to/bobman38/how-to-use-react-inside-a-wordpress-application-49i)
* [How to Approach Modern WordPress Development (Part 1)](https://www.toptal.com/wordpress/modern-wordpress-development-pt-1)
* [How to Approach Modern WordPress Development (Part 2)](https://www.toptal.com/wordpress/modern-wordpress-development-pt-2)
