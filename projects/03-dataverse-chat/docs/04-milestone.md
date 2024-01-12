# **HITO 4:** Conectar a API OpenAI (chat individual)

En este hito, el objetivo es lograr que nuestra aplicación se
conecte de manera efectiva a la API de OpenAI

## Tareas de este hito

* Creación de una vista para interactuar con cada elementos del conjunto de datos

Para facilitar la interacción con un elemento específico de nuestro
conjunto de datos, crearemos una nueva vista. Sigue estos pasos:

1. Navega a la carpeta ```views``` en tu proyecto y
crea un nuevo archivo, dándole un nombre relevante
al conjunto de datos que estás manejando, como por ejemplo
```Planet.js``` si estás trabajando con datos de
planetas.

2. Dentro de este nuevo archivo, desarrolla la vista que te permitirá interactuar
con los elementos del conjunto de datos. Puedes incluir componentes como botones,
formularios o cualquier otro elemento necesario para lograr el objetivo específico
de tu aplicación.

3. Asegúrate de que esta vista sea capaz de recibir un identificador (id)
u otros datos necesarios para mostrar el elemento específico del conjunto
de datos. Puedes lograr esto mediante la utilización de parámetros, como por
ejemplo a través de los
[search params](https://developer.mozilla.org/es/docs/Web/API/URLSearchParams)
de URL que el router puede comunicar.

![Preview Detail](./assets/previewDetail.gif)

> [!IMPORTANT]
> Recuerda utilizar las funciones que creamos anteriormente en ```apiKey.js```
para manejar de manera segura la API KEY.

* Integración con Open AI

Para obtener respuestas de cada elementos o personaje y poder interactuar
con él o ella, es esencial realizar una solicitud HTTP a OpenAI.
En este proceso, es recomendable familiarizarse con los conceptos de
[promesas](https://curriculum.laboratoria.la/es/topics/javascript/async/promises)
y considerar la utilización de
[fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch)
o [axios](https://axios-http.com/docs/intro)
para llevar a cabo la petición.

Te sugerimos organizar el código asociado a esta tarea dentro de la carpeta ```utils```.
En esta carpeta, puedes crear un archivo llamado ```openAIApi.js```,
que contendrá una función específica. Esta función debe recibir un parámetro
que almacena los mensajes; ten presente que dichos mensajes deben seguir una
estructura específica, la cual puedes comprender mejor consultando la
[documentación](https://platform.openai.com/docs/api-reference/chat/create)
proporcionada por OpenAI.

```js
// src/utils/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';


export const communicateWithOpenAI = (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
};

```

* Test

Para verificar el funcionamiento de las funciones creadas, crea un archivo
```openAIApi.spec.js``` en la carpeta ```test```.

> [!TIP]
> Puedes revisar esta documentación de un [Test de código asíncrono.](https://jestjs.io/es-ES/docs/asynchronous)

``` js
// test/openAIApi.spec.js

import { communicateWithOpenAI } from '../src/utils/openAIApi.js';

describe('communicateWithOpenAI', () => {
  test('communicateWithOpenAI', () => {
    return communicateWithOpenAI().then(data => {
      expect(data).toBe('example');
    });
  });
});

```

[👈Todos los hitos](../README.md#6-hitos)
