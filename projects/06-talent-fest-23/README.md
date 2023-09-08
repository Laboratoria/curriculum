# Chatea con tus archivos

## Índice

- [1. Consideraciones generales](#1-consideraciones-generales)
- [2. Preámbulo](#2-preámbulo)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Objetivos de aprendizaje](#4-objetivos-de-aprendizaje)
- [5. Criterios de aceptación](#5-criterios-de-aceptación)
- [6. Getting started](#6-getting-started)
- [7. Valida tu solución](#7-valida-tu-solución)
- [8. Recursos](#8-recursos)

***

## 1. Consideraciones generales

- Este proyecto lo resolvemos de manera **individual**.
- El rango de tiempo estimado para completar el proyecto es de 1 a 2 Sprints.
  
## 2. Preámbulo

En los últimos años, la inteligencia artificial (IA) ha desempeñado un papel
fundamental en prácticamente todos los aspectos de nuestra vida. No se limita
solo al campo de la tecnología de la información, sino que se ha convertido en
un campo donde las personas han desarrollado algoritmos "inteligentes" que
tienen la capacidad de "entender" de manera similar a los seres humanos. Estos
algoritmos tienen la capacidad de redactar ensayos, sistematizar información y
hasta mantener conversaciones coherentes.

La habilidad de dirigir eficazmente la IA y entender los diferentes tipos de
herramientas que componen el ecosistema, son una competencia excepcionalmente
poderosa, ya que nos permite aprovechar al máximo sus capacidades para
automatizar tareas, optimizar procesos, generar contenido de alta calidad,
analizar datos y mucho más.

## 3. Resumen del proyecto

Crearás un chatbot con la habilidad de contestar preguntas basadas en la
información de un documento, por ejemplo un archivo `txt` o `pdf`, para esto
podrás utilizar la herramienta [Flowise](https://flowiseai.com/) para extender
la funcionalidad de un chatbot tradicional, crearás un chatflow utilizando las
herramientas disponibles para darle esta capacidades a tu chatbot.

![image](https://github.com/Laboratoria/DEV006-md-links/assets/5282075/2ef997e5-22b8-4f92-b4a0-9d000e31c4f1)

## 4. Objetivos de aprendizaje

Familiarizarse con los principales conceptos alrededor de la
[Inteligencia Artificial Generativa](https://es.wikipedia.org/wiki/Inteligencia_artificial_generativa)
y trabajar con [Flowise](https://docs.flowiseai.com/) para implementar
soluciones AI expuestas atraves de una API.

- Flowise basics
- Documento loaders
- LLM
- Chat models
- Embeddings
- Agentes

## 5. Criterios de aceptación

1. Deberás configurar tu chatflow de manera que acepté la carga de al menos 1
   archivo de text

2. Debes utilizar al menos lo siguientes nodos:

- **FIXME:** colocar links
- Conversational Retrival QA Chain
- Text File // qiuzas proponer mas generico
- Text Spliters
- Vector Stores
- Embedings
- Memory
- Conversational Agent

1. Utilizar el módelo gpt-3.5-turbo

2. El chatbot generado debe ser capaz de contestar preguntas usando la
   información de el/los archivos cargados.

3. Tus github actions deben pasar exitosamente

## 6. Getting started

### Instalar Flowise

Seguir las indicaciones para instalar globalmente [flowise](https://github.com/FlowiseAI/Flowise)

```bash
npm  install  -g  flowise

npx  flowise  start
```

## 7. Valida tu solución

Necesitarás definir una variable de ambiente con el nombre `OPENAI_API_KEY` y
darle el valor de api key de OpenAI que utilizarás

Antes de ejecutar los test copiar en la carpeta `/test` con el nombre
`'flow.json'` el archivo de exportación del flow implementado

```bash
OPENAI_API_KEY=<TODO:  poner  tu api  key> npm  test
```

Una vez inicializada la herramienta podrás acceder [aquí](http://localhost:3000/)

Utilizarás esta herramienta para crear y configurar tu propia aplicación AI,
la cual podrás utilizar por medio de la UI proporcionada y también a través de
peticiones HTTP.

## 8. Recursos

[Intro a flowise](https://docs.flowiseai.com/)

[Ejemplo de implementación](https://www.youtube.com/watch?v=kMtf9sNIcao)
