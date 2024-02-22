# **HITO 1:** SPA

Bienvenida al primer hito de tu aprendizaje en JavaScript a
través de proyectos. En este hito, comenzarás construyendo una
[SPA](https://es.wikipedia.org/wiki/Single-page_application)
(Single Page Application).

## Tareas de este hito

- [Prototipo de Dataverse](#prototipo-de-dataverse)
- [SPA parte 1](#spa-parte-1)

### Prototipo de Dataverse

Diseña las vistas de la página principal, donde se presentan
los elementos de tu conjunto de datos, así como las vistas de
Chat Individual y Chat Grupal. La premisa es optimizar y
reutilizar el diseño del prototipo del proyecto anterior,
incorporando exclusivamente la vista de chat individual y/o
chat grupal, evitando la necesidad de reinventarlo.

Es fundamental que tu propuesta visual no solo refleje la
esencia de tu solución ideal, sino que también se apegue
estrictamente a los principios fundamentales del
[diseño visual](https://coda.io/d/Bootcamp-UX-Contenido_dqkqk2rV9Z2/Diseno-de-interfaces_suOT7#_luWsQ).

  >[!TIP]
  >Usa la identidad visual o el prototipo de tu proyecto anterior.

### SPA parte 1

El propósito principal de este hito es que puedas desarrollar
una **SPA (Single Page Application)**. En pocas palabras, la idea
es que, mediante JavaScript, puedas modificar el contenido de
tu navegador de manera similar a cambiar entre diferentes
vistas. Cada una de estas vistas estaría asociada a una URL,
lo que significa que no solo se cambiaría el contenido,
sino también la dirección en la barra de direcciones de
tu navegador.Para obtener información sobre qué es un SPA y
conocer todos sus detalles, te invitamos a visitar esta
[guía](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md).

1. Establece la estructura HTML.

    En tu documento HTML, es esencial incluir la estructura
    básica para tu SPA (Single Page Application). Debes
    agregar un elemento principal destinado a la
    presentación o inserción del contenido. Puedes
    utilizar algo como `<div id="root"></div>`
    con el propósito de crear un lienzo donde
    se mostrará tu contenido. Para aprovechar
    eficientemente este elemento, es necesario
    establecer una referencia. Puedes encontrar
    [más información sobre el HTML aquí](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md/#1-configura-su-estructura-html).

2. Crear la vista **Home.js**

   Define `Home.js` en la carpeta `src/views` y,
   en su interior, crea una función encargada de
   generar el contenido de la vista. Esta función
   debe devolver un elemento DOM para que pueda ser
   utilizado por el enrutador. [Aquí puedes consultar el ejemplo de dos funciones](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md/#1-configura-su-estructura-html),
   cada una representando una vista.

   **Nota 📝: Es común que debas repetir este proceso para
   cada una de las vistas que requieras durante el
   desarrollo**

3. Codifique el router

    Para enlazar las rutas y vistas en una
    aplicación, necesitaremos definir algunas
    funciones en un nuevo archivo `src/router.js`.
    Estas funciones ayudarán a manejar la
    navegación entre páginas. Vista [la sección Codifique el router](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md/#3-codifique-el-router)
    de la guía, encontrarás seis funciones. Para el
    propósito de este hito, recomendamos utilizar
    cuatro de ellas: `setRootEl`, `setRoutes`,
    `renderView` y `onURLChange`.

    **Nota 📝:
    Para más información sobre el funcionamiento
    y uso de cada una de las funciones, consulta
    [esta sección de la guía](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md/#api-de-router-b%C3%A1sico).**

4. Configura el router

    En su archivo `src/index.js`, inicialice su router definiendo
    sus rutas y configurando el elemento raíz como se muestra
    en la [guía sobre configura el router](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md/#4-configura-el-router).

5. Gestionar la carga de la página inicial

    Asegúrate de [gestionar la carga](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md/#5-manejar-la-carga-de-la-primera-p%C3%A1gina)
    de la página
    inicial llamando a `onURLChange` con
    `window.location` en el archivo `src/index.js`.
    Prueba para asegurarte de que, sin importar qué URL
    válida se utilice para iniciar tu SPA, **la vista correcta** se cargue adecuadamente.

## ¿Necesitas Ayuda?

Si en algún momento te encuentras con dudas o preguntas durante el desarrollo
de este proyecto, ¡no dudes en buscar ayuda! recuerda que puedes apoyarte con:

- **Documentación del Proyecto:** Asegúrate de revisar cuidadosamente la
documentación proporcionada en el [README](../README.md); especialmente las
pistas, tips y lecturas complementarias.

- **Coaches:** Los coaches están aquí para ayudarte.
Si enfrentas obstáculos que la documentación no resuelve o si necesitas
una explicación más detallada, no dudes en solicitar una OH o escribenos por Slack.

[👈Todos los hitos](../README.md#6-hitos)
