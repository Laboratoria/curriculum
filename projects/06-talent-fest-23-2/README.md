# Talent Fest 23 - idea 2

Proyecto a relizar para la seccion de Talent Fest 2023

## Objetivo

Familiarizarse con los principales conceptos al rededor de la [Inteligencia Artificial Generativa](https://es.wikipedia.org/wiki/Inteligencia_artificial_generativa) y trabajar con herramientas no-code para implementar soluciones AI

## Resumen del proyecto

Aplicarás tus habilidades de prompting para crear una aplicación que aproveche el encadenamiento de prompts para producir un resultado en formato JSON, utilizarás la herramienta [Flowise](https://flowiseai.com/)

Aprovecha el encadenamiento de prmpts de tal forma que la usuaria solo tenga que proporcionar el nombre de un platillo gastronomico y la cadena regrese un objeto JSON con las siguiente llaves: nombre_platillo, ingredientes, pais_origen
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
  "pais_de_origen": "Chile"
}`

Este objeto JSON representa el platillo "Completo" de Chile, enumerando los ingredientes característicos y especificando el país de origen.

![image](https://github.com/suckak/sonidos/assets/5282075/4e3c9446-d3e6-4d89-b687-bd497dee6d04)

## Instalar Flowise

Seguir las indicaciones para instalar globalmente [flowise](https://github.com/FlowiseAI/Flowise)

```bash

npm  install  -g  flowise

npx  flowise  start

```

## Requisitos mínimos

1.  Utilizarás por lo menos 2 prompt tempaltes
2.  Tendrás que utilizar la respuesta de la primer cadena como parte de tu segunda consulta

## Recursos

Video: [Ejemplo de implementación](https://youtu.be/IIwhWyIkWkU?si=My6vLQ7vvpYcde8K)

## Nodos principales

- LLM Chain
- Prompt Template
- LLM

## Test

Antes de ejecutar los test copiar en la carpeta `/test` con el nombre `'flow.json'` el archivo de exportacion del flow implementado

```bash

	npm  test

```
