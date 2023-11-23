# Talent Fest 23

Proyecto a realizar para la sección de Talent Fest 2023

## Objetivo

Familiarizarse con los principales conceptos al rededor de la [Inteligencia Artificial Generativa](https://es.wikipedia.org/wiki/Inteligencia_artificial_generativa) y trabajar con herramientas no-code para implementar soluciones AI

## Resumen del proyecto

Crearás un chatbot con la habilidad de contestar preguntas basadas en la información de un documento, por ejemplo un archivo.txt, para esto podrás utilizar la herramienta [Flowise](https://flowiseai.com/) para extender la funcionalidad de un chatbot tradicional, crearás un chatflow utilizando las herramientas disponibles para darle esta capacidades a tu chatbot.

![image](https://github.com/Laboratoria/DEV006-md-links/assets/5282075/2ef997e5-22b8-4f92-b4a0-9d000e31c4f1)

## Instalar Flowise

Seguir las indicaciones para instalar globalmente [flowise](https://github.com/FlowiseAI/Flowise)

```bash
	npm  install  -g  flowise

	npx  flowise  start
```

Una vez inicializada la herramienta podrás acceder [aquí](http://localhost:3000/)

Utilizarás esta herramienta para crear y configurar tu propia aplicación AI, la cual podrás utilizar por medio de la UI proporcionada y también a través de peticiones HTTP

## Requisitos mínimos

1. Deberás configurar tu chatflow de manera que acepté la carga de al menos 1 archivo de texto

2. Utilizar el módelo gpt-3.5-turbo

3. El chatbot generado debe ser capaz de contestar preguntas usando la información del archivo cargado

## Recursos

Video: [Ejemplo de implementación](https://www.youtube.com/watch?v=kMtf9sNIcao)

## Nodos principales

- Conversational Retrival QA Chain

- Text File

- Text Spliters

- Vector Stores

- Embedings

- Memory

- Conversational Agent

## Test

Necesitarás definir una variable de ambiente con el nombre `OPENAI_API_KEY` y darle el valor de api key de OpenAI que utilizarás

Antes de ejecutar los test copiar en la carpeta `/test` con el nombre `'flow.json'` el archivo de exportación del flow implementado

```bash

OPENAI_API_KEY=<TODO:  poner  api  key> npm  test

```

## Conceptos

- LLM

- Chat models

- Embeddings

- Agentes
