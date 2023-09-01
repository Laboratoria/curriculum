# Talent Fest 23

Proyecto a relizar para la seccion de Talent Fest 2023

## Objetivo

Familiarizarse con los principales conceptos al rededor de la [Inteligencia Artificial Generativa](https://es.wikipedia.org/wiki/Inteligencia_artificial_generativa) y trabajar con herramientas no-code para implementar soluciones AI

## Resumen del proyecto

Utilizar la herramienta [Flowise](https://flowiseai.com/) para extender la funcionalidad de un chatbot tradicional, crearás un flow utilizando alguna de las herramientas disponibles para darle capacidades extras a tu chatbot, como acceso a información en tiempo real o la habilidad de contestar preguntas acerca de un texto en específico (lectura de archivos, busquedas en internet, etc.)

![image](https://github.com/suckak/sonidos/assets/5282075/d8e393f1-c726-468d-b1f5-6f24da8357b9)

## Instalar Flowise

Seguir las indicaciones para instalar globalmente [flowise](https://github.com/FlowiseAI/Flowise)

```bash

	npm  install  -g  flowise

	npx  flowise  start

```

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

Antes de ejecutar los test copiar en la carpeta `/test` con el nombre `'flow.json'` el archivo de exportacion del flow implementado

```bash

	npm  test

```

## Conceptos

- LLM

- Chat models

- Embeddings

- Agentes
