# **HITO 4:** Conectar a API OpenAI (chat grupal)

El objetivo de este hito es permitir a las usuarias interactuar con
todos los personajes a través de un chat grupal.

## Tareas de este hito

- [Creación de una vista para interactuar con todos los elementos del conjunto de datos](#creación-de-una-vista-para-interactuar-con-todos-los-elementos-del-conjunto-de-datos)
- [Consumo de la integración con Open AI](#consumo-de-la-integración-con-open-ai)
- [Implementación de tests](#implementación-de-tests)

### Creación de una vista para interactuar con todos los elementos del conjunto de datos

1. Navega hacia la carpeta `views` en tu proyecto y dentro de
esta carpeta, crea un componente para la vista del chat grupal,
por ejemplo, `ChatGroup.js` o `Panel.js`,
que mostrará un chat grupal con todos los personajes.
Este componente debe permitir a los usuarios enviar
mensajes a todos los personajes o elementos del dataset
y recibir respuestas.

2. La vista debe poder obtener los datos necesarios (id) para
mostrar los elementos del conjunto de datos.
Esto se puede hacer pasando los datos como parámetros o utilizando
funciones que obtienen los datos.

### Consumo de la integración con Open AI

Obten las respuestas de todos los elementos en la data utilizando
la función designada para consumir la API de OpenAI,
en el caso de este ejemplo, `communicateWithOpenAI`.
Esto permitirá a los usuarios interactuar con todos los
personajes a través
de un chat grupal.

> [!TIP]
> Revisa el tema de
>[Promesas](https://curriculum.laboratoria.la/es/topics/javascript/async/promises)
>y el método
>[Promise.all()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

Para lograr este objetivo, toma como guia los siguientes pasos:

1. Obtener la lista de elementos en la data.

2. Para cada elemento en la lista:

   + Enviar un mensaje a la función communicateWithOpenAI.
   + Guardar la respuesta de la función communicateWithOpenAI.
   + Mostrar la respuesta de la función communicateWithOpenAI.

![Preview Chat Grupal](./assets/previewGrupalChat.gif)

### Implementación de tests

Para verificar el funcionamiento de las funciones creadas, crea un archivo
`openAIApi.spec.js` en la carpeta `test`.

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

> [!NOTE]
> `communicateWithOpenAI` es una sugerencia para el nombre
de tu función. Puedes elegir el nombre que prefieras.

[👈Todos los hitos](../README.md#6-hitos)
