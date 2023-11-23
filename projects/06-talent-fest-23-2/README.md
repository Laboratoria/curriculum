# Talent Fest 23 - Reto 2

Proyecto a realizar para la seccion de Talent Fest 2023

## Objetivo

Familiarizarse con los principales conceptos al rededor de la [Inteligencia Artificial Generativa](https://es.wikipedia.org/wiki/Inteligencia_artificial_generativa) y trabajar con herramientas no-code para implementar soluciones AI

## Resumen del proyecto

Aplicarás tus habilidades de prompting para crear una aplicación que aproveche el encadenamiento de prompts para producir un resultado en formato JSON, utilizarás la herramienta [Flowise](https://flowiseai.com/)

Aprovecha el encadenamiento de prompts de tal forma que la usuaria solo tenga que proporcionar el nombre de un platillo gastronomico y la cadena regrese un objeto JSON con las siguiente llaves: nombre_platillo, ingredientes, pais_origen

Ejemplo:

`{
"nombre_platillo": "Completo",
"ingredientes": [
"Pan (marraqueta o hallulla)",
"Salchicha tipo vienesa",
"Palta (aguacate)",
"Tomate",
"Mayonesa",
"Chucrut (sauerkraut)",
"Cebolla picada",
"Ketchup",
"Mostaza"
],
"pais_origen": "Chile"
}`

Este objeto JSON representa el platillo "Completo" de Chile, enumerando los ingredientes característicos y especificando el país de origen.

![image](https://github.com/suckak/sonidos/assets/5282075/4e3c9446-d3e6-4d89-b687-bd497dee6d04)

![image](https://github.com/Laboratoria/curriculum/assets/5282075/801b660d-6c92-44ed-9735-0d401f5a3918)

## Instalar Flowise

Seguir las indicaciones para instalar globalmente [flowise](https://github.com/FlowiseAI/Flowise)

```bash

npm  install  -g  flowise

npx  flowise  start

```

Una vez inicializada la herramienta podrás acceder [aquí](http://localhost:3000/)

Utilizarás está herramienta para crear y configurar tu propía aplicación AI, la cual podrás utilizar por medio de la UI proporcionada y también a través de peticiones HTTP

## Requisitos mínimos

1. Utilizarás por lo menos 2 prompt templates

2. Tendrás que utilizar la respuesta de la primer cadena como parte de tu segunda consulta

3. La respuesta debe ser un objeto JSON con las propiedades especificadas

## Recursos

- [Prompt Engineering](https://learnprompting.org/es/docs/category/-basics)

- Video: [Ejemplo de implementación](https://youtu.be/IIwhWyIkWkU?si=My6vLQ7vvpYcde8K)

## Nodos principales

- LLM Chain

- Prompt Template

- LLM

## Test

Necesitarás definir una variable de ambiente con el nombre `OPENAI_API_KEY` y darle el valor de api key de OpenAI que utilizarás

Antes de ejecutar los test copiar en la carpeta `/test` con el nombre `'flow.json'` el archivo de exportacion del flow implementado

```bash
  OPENAI_API_KEY=<TODO: poner api key> npm  test
```
