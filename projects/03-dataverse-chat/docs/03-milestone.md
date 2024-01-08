# **HITO 3:** Conectar a API OpenAI

En este hito, nuestro objetivo es lograr que nuestra aplicación se conecte de manera efectiva a la API de OpenAI.

Antes de comenzar con el proceso, asegúrate de solicitar tu clave de API a los coaches.

## Tareas de este hito

* Manejo de la API KEY en la Aplicación

El manejo de las API KEYs es crucial para mantener la seguridad. Con el fin de no incluir la clave directamente en el código de la aplicación, necesitarás crear una nueva vista que permita ingresar o pegar la API KEY.

Para hacer esto, dentro de la carpeta ```views```, crea un nuevo archivo llamado ```apikey.js```. Dentro de este archivo, desarrolla una función que sirva como vista. Esta función debe incluir un campo de entrada (input) y un botón. Será a través de esta vista que posteriormente almacenarás la API KEY en el navegador de forma segura.

![Preview API KEY view](./assets/previewAPIKEYview.png)

* Almacenamiento Seguro de la API KEY con Local Storage

Para garantizar la seguridad y persistencia de la API KEY, se sugiere utilizar [Local Storage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage). Te recomendamos seguir estos pasos:

1. En la carpeta ```utils```, crea un nuevo archivo llamado apiKey.js.

2. Dentro de ```apiKey.js```, implementa dos funciones esenciales:

```js
// src/utils/apiKey.js  

export const getApiKey = () => {
   // Implementa el código para obtener la API KEY desde Local Storage
};

export const saveApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
};
```

Estas funciones facilitarán el manejo seguro de la API KEY dentro de tu aplicación, asegurando que la información esté disponible y protegida en todo momento.

* Creación de una Vista para Interactuar con Elementos del Conjunto de Datos

Para facilitar la interacción con un elemento específico de nuestro conjunto de datos, crearemos una nueva vista. Sigue estos pasos:

1. Navega hacia la carpeta ```views``` en tu proyecto.

2. Dentro de esta carpeta, crea un nuevo archivo. Puedes nombrarlo de acuerdo con el conjunto de datos que estás manejando. Por ejemplo, podrías llamarlo ```personajes.js``` si estás trabajando con datos de personajes.

3. Dentro de este nuevo archivo, desarrolla la vista que te permitirá interactuar con los elementos del conjunto de datos. Puedes incluir componentes como botones, formularios o cualquier otro elemento necesario para lograr el objetivo específico de tu aplicación.

4. Asegúrate de que esta vista sea capaz de recibir un identificador (id) u otros datos necesarios para mostrar el elemento específico del conjunto de datos. Esto puede realizarse a través de parámetros o métodos de obtención de datos.

![Preview Detail](./assets/previewDetail.gif)

Recuerda utilizar las funciones que creamos anteriormente en apiKey.js para manejar de manera segura la API KEY.

* Integración con Open AI

Para obtener respuestas de nuestros elementos o personajes y poder interactuar con ellos, es esencial realizar una solicitud HTTP a OpenAI. En este proceso, es recomendable familiarizarse con los conceptos de [Promesas](https://curriculum.laboratoria.la/es/topics/javascript/async/promises) y considerar la utilización de [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) o [axios](https://axios-http.com/docs/intro) para llevar a cabo la petición.

Te sugerimos organizar el código asociado a esta tarea dentro de la carpeta utils. En esta carpeta, puedes crear un archivo llamado openAIApi.js, que contendrá una función específica. Esta función debe recibir un parámetro que almacena los mensajes; ten presente que dichos mensajes deben seguir una estructura específica, la cual puedes comprender mejor consultando la [documentación](https://platform.openai.com/docs/api-reference/chat/create) proporcionada por OpenAI.

```js
// src/utils/openAIApi.js  

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


export const openAIApi = (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
};

```
