# **HITO 3:** Conectar a API OpenAI (chat individual)

Almacenar de forma segura tu clave de API y lograr que nuestra aplicación se
conecte de manera efectiva a la API de OpenAI son el core de este hito.
<!-- Este es un tip de Github Pages, https://github.com/orgs/community/discussions/16925 -->
> [!IMPORTANT]
> Para ello, asegúrate de solicitar tu APIKEY a las coaches.

## Tareas de este hito

- [Manejo de la API KEY en la Aplicación](#manejo-de-la-api-key-en-la-aplicación)
- [Almacenamiento Seguro de la API KEY con Local Storage](#almacenamiento-seguro-de-la-api-key-con-local-storage)
- [Pruebas para funciones de API Key](#pruebas-para-funciones-de-api-key)
- [Creación de una vista para interactuar con cada elemento del conjunto de datos](#creación-de-una-vista-para-interactuar-con-cada-elemento-del-conjunto-de-datos)
- [Integración con Open AI](#integración-con-open-ai)

### Manejo de la API KEY en la Aplicación

El manejo de las API KEYs es crucial para mantener la seguridad.
Con el fin de no incluir la clave directamente en el código de la aplicación,
crea un input que permita ingresar o pegar la API KEY.
Este input puede estar ubicado en una vista,
dialog o modal.

![Preview apiKey](./assets/previewApiKey.png)

### Almacenamiento Seguro de la API KEY con Local Storage

Para garantizar la seguridad y persistencia de la
API KEY, se sugiere utilizar [Local Storage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).
Te recomendamos seguir estos pasos:

1. En la carpeta `lib`, crea un nuevo archivo llamado `apiKey.js`.

2. Dentro de `apiKey.js`, implementa dos funciones esenciales:

```js
// src/lib/apiKey.js

export const getApiKey = () => {
   // Implementa el código para obtener la API KEY desde Local Storage
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
};
```

### Pruebas para funciones de API Key

Dentro de la carpeta `test`, crea un archivo llamado
`apiKey.spec.js`. En este archivo, desarrolla los
tests correspondientes. Puedes utilizar el siguiente
esquema como punto de partida:

``` js
// test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    // Desarrolla el test correspondiente aquí
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
   // Desarrolla el test correspondiente aquí
  });
});

```

### Creación de una vista para interactuar con cada elemento del conjunto de datos

Para facilitar la interacción con un elemento específico de nuestro
conjunto de datos, crearemos una nueva vista. Sigue estos pasos:

1. Ingresa a la carpeta `views` de tu proyecto.
Si encuentras un archivo llamado `About.js`,
cámbiale el nombre según el conjunto de datos
que estás manejando, como por ejemplo `Planet.js`
si trabajas con datos de planetas.
Si no existe el archivo `About.js`,
puedes crear uno nuevo con un nombre pertinente.

2. Dentro de este archivo, desarrolla la vista que te permitirá chatear
con los elementos del conjunto de datos. Puedes incluir componentes como botones,
formularios o cualquier otro elemento necesario para lograr el objetivo específico
de tu aplicación.

3. En esta pantalla, es necesario obtener un identificador (id)
u otros datos necesarios para mostrar el elemento específico del conjunto
de datos. Esto es fundamental para que puedas
identificar con quién deseas chatear en la aplicación.
Puedes obtener este identificador (id) de dos maneras:
incluyéndolo como argumento (props) en la función que te llevará
a esta vista o recibiendo los datos como
[search params](https://developer.mozilla.org/es/docs/Web/API/URLSearchParams).
Por lo tanto, es importante mejorar las capacidades de tu
enrutador para gestionar ambas situaciones.

    + En el archivo `src/router.js` añade las funciones
    `navigateTo` y `queryStringToObject`.

    **Nota 📝:
    Para obtener detalles de las funciones, revisa
    [esta sección de la guía](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md?/#api-de-router-b%C3%A1sico).**

![Preview Detail](./assets/previewDetail.gif)

> [!IMPORTANT]
> Recuerda utilizar las funciones que creamos anteriormente en `apiKey.js`
para manejar de manera segura la API KEY.

### Integración con Open AI

Para obtener respuestas de cada elementos o personaje y poder interactuar
con él o ella, es esencial realizar una solicitud HTTP a OpenAI.
En este proceso, es recomendable familiarizarse con los conceptos de
[promesas](https://curriculum.laboratoria.la/es/topics/javascript/async/promises)
y considerar la utilización de
[fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
o [axios](https://axios-http.com/docs/intro)
para llevar a cabo la petición.

Te sugerimos organizar el código asociado a esta tarea dentro de la carpeta `lib`.
En esta carpeta, puedes crear un archivo llamado `openAIApi.js`,
que contendrá una función específica. Esta función debe recibir un parámetro
que almacena los mensajes; ten presente que dichos mensajes deben seguir una
estructura específica, la cual puedes comprender mejor consultando la
[documentación](https://platform.openai.com/docs/api-reference/chat/create)
proporcionada por OpenAI.

```js
// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


export const communicateWithOpenAI = (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
};

```

> [!NOTE]
> `communicateWithOpenAI` es una sugerencia para el nombre
de tu función. Puedes elegir el nombre que prefieras.

[👈Todos los hitos](../README.md#6-hitos)
