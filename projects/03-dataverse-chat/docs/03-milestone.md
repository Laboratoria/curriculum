# **HITO 3:** Manejo de la API KEY

Almacenar de forma segura tu clave de API es el core de este hito.
<!-- Este es un tip de Github Pages, https://github.com/orgs/community/discussions/16925 -->
> [!IMPORTANT]
> Para ello, asegúrate de solicitar tu APIKEY a las coaches.

## Tareas de este hito

* Manejo de la API KEY en la Aplicación

El manejo de las API KEYs es crucial para mantener la seguridad.
Con el fin de no incluir la clave directamente en el código de la aplicación,
necesitarás crear una nueva vista que permita ingresar o pegar la API KEY.

Para hacer esto, dentro de la carpeta ```views```,
crea un nuevo archivo llamado ```apikey.js```.
Dentro de este archivo, desarrolla una función que
sirva como vista. Esta función debe incluir un
campo de entrada (input) y un botón. Será a través
de esta vista que posteriormente almacenarás la
API KEY en el navegador de forma segura.

![Preview API KEY view](./assets/previewAPIKEYview.png)

* Almacenamiento Seguro de la API KEY con Local Storage

Para garantizar la seguridad y persistencia de la
API KEY, se sugiere utilizar [Local Storage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage).
Te recomendamos seguir estos pasos:

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

Estas funciones facilitarán el manejo seguro de la API KEY
dentro de tu aplicación, asegurando que la información esté disponible
y protegida en todo momento.

* Pruebas para funciones de API Key

Dentro de la carpeta ```test```, crea un archivo ```apiKey.spec.js```.
En este archivo, escribe los test correspondientes para verificar el funcionamiento
de las funciones creadas.

``` js
// test/apiKey.spec.js

import { getApiKey, saveApiKey } from '../src/utils/apiKey.js';

describe('getApiKey', () => {

  it('returns `getApiKey`', () => {
    expect(getApiKey()).toBe('example');
  });
});

describe('saveApiKey', () => {

  it('returns `saveApiKey`', () => {
    expect(saveApiKey(key)).toBe('example');
  });
});

```

[👈Todos los hitos](../README.md#6-hitos)
