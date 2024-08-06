# API Deployment on Docker File

## Índice

- [1. Consideraciones generales](#1-consideraciones-generales)
- [2. Preámbulo](#2-preámbulo)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Implementaciones de ejemplo](#4-Implementaciones-de-ejemplo)
- [5. Paso a paso para empaquetar tu aplicación en un contenedor de Docker](#5-Paso-a-paso-para-empaquetar-tu-aplicación-en-un-contenedor-de-Docker)
- [6. Consideraciones para pedir tu Project Feedback](#6-Consideraciones-para-pedir-tu-Project-Feedback)
- [7. Objetivos de aprendizaje](#7-Objetivos-de-aprendizaje)

---

## 1. Consideraciones generales

- Este proyecto lo resolvemos de manera --individual--.
- El rango de tiempo estimado para completar el proyecto es de 1 a 2 Sprints.

## 2. Preámbulo

<img
src="https://github.com/user-attachments/assets/cc4938e0-3c1b-4f4f-9c5c-4a1b181681fa"
alt="Logo de Docker"
aria-describedby="docker-logo" />

<p id="docker-logo">
Logo de Docker
</p>

Docker permite empaquetar una aplicación junto con todas sus dependencias
(como bibliotecas, configuraciones y archivos necesarios) en una unidad
estándar conocida como contenedor. Esto asegura que la aplicación funcione
de manera consistente sin importar dónde se ejecute, ya sea en una máquina local,
en la nube o en un servidor de producción. A diferencia de las máquinas virtuales,
los contenedores no necesitan un sistema operativo completo, sino que comparten
el núcleo del sistema operativo del host, lo que los hace más eficientes en términos
de recursos y más rápidos de iniciar.

La currícula de Laboratoria incluye 4 proyectos enfocados en
desplegar la [Fleet Management API](../05-fleet-management-api/README.md)
en la nube. Cada proyecto se distingue por utilizar
diferentes métodos de despliegue, lo que te permitirá aprender y aplicar
diversas estrategias para desplegar tu aplicación en producción en un entorno real.

<img
src="https://github.com/user-attachments/assets/807d21eb-4f47-4b91-8441-a952192562f0"
alt="Proyectos Laboratoria"
aria-describedby="devops-projects-laboratoria" />

<p id="devops-projects-laboratoria">
Ruta Devops
</p>

## 3. Resumen del proyecto

En este proyecto empaquetarás la [Fleet Management API](../05-fleet-management-api/README.md)
en un **contenedor de Docker** a través de un Dockerfile.

## 4. Implementaciones de ejemplo

En caso que no hayas implementado aún la
[Fleet Management API](../05-fleet-management-api/README.md)
puedes usar las siguientes implementaciones mínimas para
completar este proyecto. Elige la implementación en el
lenguaje de programación que más te interese:

- [Implementación en NodeJS](https://github.com/Laboratoria/minimum-impl-fleet-management-api-nodejs)
- [Implementación en Python](https://github.com/Laboratoria/minimum-impl-fleet-management-api-python)
- [Implementación en Java](https://github.com/Laboratoria/minimum-impl-fleet-management-api-java)

## 5. Paso a paso para empaquetar tu aplicación en un contenedor de Docker

### 1. Familiarizate con Docker

Docker es una herramienta que se usa para crear, desplegar y ejecutar
aplicaciones en contenedores. Por lo tanto es importante
que aprendas a administrar contenedores. Tómate un tiempo
para familiarizarte con Docker. Puedes seguir el 
[tutorial oficial de Docker](https://www.docker.com/101-tutorial/) o cualquier
otro disponible en internet. Asegúrate que al final tengas respuestas
claras para las siguientes preguntas:

- [ ] ¿Qué es un contenedor?
- [ ] ¿Qué es una Docker Image?
- [ ] ¿Qué es un Image Registry?
- [ ] ¿Cómo ejecutar un contenedor?
- [ ] ¿Cómo detener un contenedor?
- [ ] ¿Cómo publicar un puerto de un contenedor?
- [ ] ¿Cómo ejecutar un comando dentro de un contenedor?
- [ ] ¿Qué es un Dockerfile?
- [ ] En un Dockerfile, ¿para qué sirve el comando FROM?
- [ ] En un Dockerfile, ¿para qué sirve el comando EXPOSE?
- [ ] En un Dockerfile, ¿para qué sirve el comando USE?
- [ ] En un Dockerfile, ¿para qué sirve el comando RUN?
- [ ] En un Dockerfile, ¿para qué sirve el comando WORKDIR?
- [ ] En un Dockerfile, ¿para qué sirve el comando COPY?
- [ ] En un Dockerfile, ¿para qué sirven los comandos CMD y ENTRYPOINT?
- [ ] En un Dockerfile, ¿para qué sirve el comando ENV?
- [ ] ¿Cómo compartir imágenes en Docker Github?

### 2. Construye una imagen Docker con Dockerfile

Una vez estes familiarizada con Docker, el siguiente paso es escribir
un Dockerfile para construir una imagen que empaquete tu API. Puedes seguir este 
[tutorial](https://medium.com/@anshita.bhasin/a-step-by-step-guide-to-create-dockerfile-9e3744d38d11)
o cualquier otro disponible en internet.

Para escribir un `Dockerfile` adecuado que empaquete una aplicación,
es importante responder a varias preguntas clave sobre tu aplicación y su entorno.
Aquí tienes una lista de preguntas a considerar:

1. ¿Cuál es el lenguaje de programación y entorno de ejecución de tu aplicación?
2. ¿Cuál es el sistema operativo preferido o requerido?
3. ¿En qué directorio está ubicado el código fuente de tu aplicación? ¿Necesitas
copiar todo el directorio o solo ciertos archivos?
4. ¿Qué herramientas o paquetes necesitas instalar para que tu aplicación funcione?
¿Usas un archivo como `package.json` (Node.js), `requirements.txt` (Python),
`pom.xml` (Maven, Java) o `build.gradle` (Gradle, Java)?
5. ¿Cuál es el punto de entrada de tu aplicación? ¿Qué comando necesitas ejecutar
para iniciar tu aplicación?
6. ¿En qué puerto(s) escucha tu aplicación para recibir conexiones? Esto es necesario
para la instrucción `EXPOSE`.
7. ¿Existen variables de entorno que deban configurarse para que tu aplicación
funcione correctamente?
8. ¿Hay datos que deben mantenerse persistentes entre reinicios de contenedores?
Si es así, puedes necesitar configurar volúmenes.
9. ¿Existen permisos o configuraciones del sistema que deban aplicarse para que tu
aplicación se ejecute correctamente?
10. ¿Necesitas realizar alguna configuración específica o ejecución de scripts antes
de que tu aplicación esté lista?

Con ayuda de las respuestas a estas preguntas escribe un Dockerfile que empaquete 
tu aplicación con todas sus dependencias, configure el entorno de trabajo y
exponga el puerto necesario, asegurando que la aplicación esté lista para
ejecutarse en un contenedor Docker.

Luego construye la imagen Docker desde el Dockerfile (`docker build`) y  ejecuta
un contenedor basado en la imagen construida (`docker run`).

Prueba que la API funcione correctamente desde una colección de Postman.
Puedes utilizar esta
[colección de ejemplo](https://github.com/Laboratoria/curriculum/tree/main/projects/05-fleet-management-api#7-testing).

### 3. Publica tu Imagen en Docker Hub

Crea una cuenta en Docker Hub e inicia sesión desde tu terminal (`docker login`).
Etiqueta tu imagen Docker (`docker tag`) y publícala en Docker Hub (`docker push`)
para su distribución y uso.

## 6. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con tu coach, asegúrate de:

- [ ] Hacer push del Dockerfile al repositorio de proyecto Fleet Management API
- [ ] Construir una colección de Postman para probar la API.
Puedes utilizar esta
[colección de ejemplo](https://github.com/Laboratoria/curriculum/tree/main/projects/05-fleet-management-api#7-testing).

## 7. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.
