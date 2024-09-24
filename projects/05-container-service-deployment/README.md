# API Deployment on Container Service

## Índice

- [1. Consideraciones generales](#1-consideraciones-generales)
- [2. Preámbulo](#2-preámbulo)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Paso a paso general para el despliegue en Amazon ECS](#4-Paso-a-paso-general-para-el-despliegue-en-Amazon-ECS)
- [5. Paso a paso detallado para el despliegue en Amazon ECS](#5-Paso-a-paso-detallado-para-el-despliegue-en-Amazon-ECS)
- [6. Consideraciones para pedir tu Project Feedback](#6-Consideraciones-para-pedir-tu-Project-Feedback)
- [7. Objetivos de aprendizaje](#7-Objetivos-de-aprendizaje)

---

## 1. Consideraciones generales

- Para poder implementar este proyecto debes implementar primer
el [API Deployment with Docker](../05-dockerfile-deployment/README.MD).
- Este proyecto lo resolvemos de manera --individual--.
- El rango de tiempo estimado para completar el proyecto es de 1 a 2 Sprints.

## 2. Preámbulo

<img
src="https://github.com/user-attachments/assets/9a2940f5-9b88-4062-8a59-8d73cb0ed605"
alt="Contenedores"
aria-describedby="containers" />

<p id="containers">
Contenedores
</p>

_Photo by_
[Frank Mckenna](https://unsplash.com/@frankiefoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

AWS ECS (Elastic Container Service) es un servicio
diseñado para simplificar el despliegue y la gestión de aplicaciones basadas
en contenedores, permitiendo a las desarrolladoras centrarse en el código en
lugar de la infraestructura. Ambos proporcionan escalabilidad automática,
gestionando la capacidad de los recursos según la demanda de la aplicación.
Además se integra de manera eficiente
con otros servicios de AWS, facilitando
una experiencia cohesiva y flexible para construir y desplegar aplicaciones
en la nube.

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

En este proyecto desplegarás la aplicación usando
**Amazon Elastic Container Service (ECS)**.

Para este proyecto necesitarás la imagen Docker que construiste
en el proyecto [API Deployment on Docker File](../05-dockerfile-deployment/README.MD).
Si aún no la tienes, por favor implementa primero este proyecto.

## 4. Paso a paso general para el despliegue en Amazon ECS

Podemos seguir el siguiente paso a paso general para
desplegar la Fleet Management API independientemente del lenguaje de
programación en que esta implementada

- Paso 1: Subir la imagen docker a un Registro de Contenedores
(Amazon ECR)
- Paso 2: Desplegar la aplicación en Amazon ECS creando un cluster EC2,
  definiendo una tarea ECS y un servicio ECS.
- Paso 3: Configurar el acceso externo para acceder a tu API utilizando la
  URL pública proporcionada por AWS.
- Paso 4: Monitorizar y gestionar la aplicación

## 5. Paso a paso detallado para el despliegue en Amazon ECS

### 1. Sube la imagen Docker a Amazon ECR (Elastic Container Registry)

Amazon ECR es un servicio en la nube que te permite almacenar tus imágenes
Docker de forma segura y eficiente. Amazon ECR actúa como un
"repositorio" para imágenes Docker, similar a cómo GitHub actúa como un
repositorio para código fuente. ECR se integra fácilmente con otros servicios de
AWS, como Amazon ECS (Elastic Container Service). Esto simplifica el despliegue de
tus aplicaciones en contenedores dentro del entorno de AWS.

En este proyecto almacenaremos en Amazon ECR la imagen docker que hemos
definido para empaquetar nuesta aplicación. Tómate un tiempo
para familiarizarte con ECR. Puedes seguir el
[tutorial oficial de ECR](https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html)
o cualquier otro disponible en internet. Asegúrate que al final tengas respuestas
claras para las siguientes preguntas:

- [ ] ¿Cómo creas un repositorio en Amazon ECR?
- [ ] ¿Cómo te autenticas en Amazon ECR desde tu máquina local?
- [ ] ¿Cómo subes una imagen Docker a Amazon ECR?
- [ ] ¿Cómo gestionas las imágenes en Amazon ECR?
- [ ] ¿Cómo haces `pull` a tu computadora de una imágen subida a Amazon ECR?

Finalmente, sube la imagen Docker que constuiste para empaquetar tu
aplicación en un repositorio de Amazon ECR.

### 2. Crear un clúster tipo EC2, una tarea y servicio en ECS

El siguiente paso es entonces desplegar la imagen docker
en cluster de instancias EC2 usando Amazon ECS (Elastic Container Service).

Tómate un tiempo para familiarizarte con ECS. Puedes seguir el
[workshop oficial de ECS](https://ecsworkshop.com/introduction/)
o cualquier otro disponible en internet. Asegúrate que al final tengas respuestas
claras para las siguientes preguntas:

- [ ] ¿Cómo se crea un clúster en Amazon ECS?
- [ ] ¿Qué es una tarea en ECS y cómo se configura?
- [ ] ¿Qué es un servicio en ECS y cómo garantiza que las tareas
      se mantengan en funcionamiento?
- [ ] ¿Cómo se despliega un servicio en ECS?
- [ ] ¿Qué es el autoescalado en ECS y cómo se configura?
- [ ] ¿Cómo se integra ECS con otros servicios de AWS como ECR?
- [ ] ¿Cómo se realiza un despliegue de una nueva versión de una aplicación
      utilizando ECS?
- [ ] ¿Cómo solucionas problemas si tu aplicación en Amazon ECS no se está
      ejecutando correctamente?

Finalmente, usa ECS para desplegar la imagen docker de tu aplicacion
creando un clúster, una tarea y un servicio.

### 3. Monitorizar y gestionar la aplicación

Usa la la IP pública de tu clúster EC2 para probar tu API con una
coleccion de Postman. Puedes utilizar esta
[colección de ejemplo](https://github.com/Laboratoria/curriculum/tree/main/projects/05-fleet-management-api#7-testing).

## 6. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con tu coach, asegúrate de
tener una coleccion de Postman para probar la API que
desplegaste en Amazon ECS.

## 7. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.
