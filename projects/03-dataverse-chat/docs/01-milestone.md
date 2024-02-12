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
[guía](https://github.com/Laboratoria/guide-router/tree/guide-v1).

1. Establece la estructura HTML.

    En tu documento HTML, que debe incluir la estructura
    esencial de tu SPA, será necesario incorporar un
    elemento principal para la presentación o inserción
    del contenido. Puedes utilizar algo como
    `<main id="root"></main>`para este propósito.

    ```html
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <!-- Agrega tus estilos CSS y otros elementos del encabezado (head) aquí -->
        </head>
        <body>
          <main id="root"></main> <!-- Este es tu elemento root -->
          <script type="module" src="index.js"></script>
        </body>
      </html>
    ```

2. Crear la vista **Home.js**

   Define `Home.js` en la carpeta `src/views` y,
   en su interior, crea una función encargada de
   generar el contenido de la vista. Esta función
   debe devolver un elemento DOM para que pueda ser
   utilizado por el enrutador.

   ```js
    // src/views/Home.js

    export function Home(props) {
      const viewEl = document.createElement('section');
      viewEl.textContent = 'Welcome to the home page!';
      return viewEl;
    }
   ```

    > [!NOTE]
    > Es común que debas repetir este proceso para
    > cada una de las vistas que requieras durante el
    > desarrollo.

3. Codifique el router
    Para enlazar las rutas y vistas en una
    aplicación, necesitaremos definir algunas
    funciones en un nuevo archivo `src/router.js`.
    Estas funciones ayudarán a manejar la
    navegación entre páginas.

    ```js
      let ROUTES = {};
      let rootEl;

      export const setRootEl = (el) => {
        // Asigna rootEl
      }

      export const setRoutes = (routes) => {
        // Opcional: Lanza errores si 'routes' no es un objeto
        // Opcional: Lanza errores si 'routes' no define una ruta /error
        // Asigna ROUTES
      }

      const renderView = (pathname, props={}) => {
        // Limpiar el elemento raíz
        // Encontrar la vista correcta en las RUTAS para la ruta especificada
        // En caso de no encontrarla, renderizar la vista de error
        // Renderizar la vista correcta pasando los valores de las propiedades
        // Agregar el elemento de la vista al elemento raíz del DOM
      }

      export const onURLChange = (location) => {
        // Renderizar la vista con la ruta y el objeto de parámetros
      }
    ```

    > [!IMPORTANT]
    > Para más información sobre el funcionamiento
    > y uso de cada una de las funciones, consulta
    > [esta sección de la guía](https://github.com/Laboratoria/guide-router/tree/guide-v1?tab=readme-ov-file#api-de-router-b%C3%A1sico).
    >

4. Configura el router

    En su archivo `src/index.js`, inicialice su router definiendo
    sus rutas y configurando el elemento raíz:

    ```js
      import Home from './views/Home';
      import { setRootEl, setRoutes, onURLChange } from './router.js';

      // Define tu ruta y la vista asociada.
      const routes = {
        '/': Home,
      };

      // Asigna el objeto routes
      setRoutes(routes);

      // Establece el elemento raíz donde se renderizarán la vista.
      window.addEventListener("DOMContentLoaded", () => {
        setRootEl(/* Elemento root */);
      });
    ```

5. Gestionar la carga de la página inicial

    Asegúrate de gestionar la carga de la página
    inicial llamando a `onURLChange` con
    `window.location` en el archivo `src/index.js`.

    ```js
      // Manejar la carga inicial de la URL.
      window.addEventListener("DOMContentLoaded", () => {
        // Establecer el elemento raíz
        // Llamar a onURLChange
      });
    ```

    Pruebe para ver si, independientemente de qué
    URL válida se inicie su SPA, se carga la vista
    correcta.

![Preview spa](./assets/previewSPA.gif)

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
