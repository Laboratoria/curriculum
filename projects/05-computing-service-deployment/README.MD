# API Deployment on Computing Service

## Índice

- [1. Consideraciones generales](#1-consideraciones-generales)
- [2. Preámbulo](#2-preámbulo)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Implementaciones de ejemplo](#4-Implementaciones-de-ejemplo)
- [5. Paso a paso general para el despliegue en Amazon EC2](#5-Paso-a-paso-general-para-el-despliegue-en-Amazon-EC2)
- [6. Paso a paso detallado para el despliegue en Amazon EC2](#6-Paso-a-paso-detallado-para-el-despliegue-en-Amazon-EC2)
- [7. Consideraciones para pedir tu Project Feedback](#7-Consideraciones-para-pedir-tu-Project-Feedback)
- [8. Objetivos de aprendizaje](#8-Objetivos-de-aprendizaje)

---

## 1. Consideraciones generales

- Este proyecto lo resolvemos de manera --individual--.
- El rango de tiempo estimado para completar el proyecto es de 1 a 2 Sprints.

## 2. Preámbulo

<img
src="https://github.com/user-attachments/assets/506d6905-593f-4774-be0a-26f28c35af9b"
alt="Hardware"
aria-describedby="hardware" />

<p id="hardware">
Virtual Machines
</p>

_Photo by_
[_Alexandre Debiève_](https://github.com/user-attachments/assets/506d6905-593f-4774-be0a-26f28c35af9b)

AWS EC2 es un servicio de computación en la
nube que permiten a las desarrolladoras crear, gestionar y escalar máquinas
virtuales conocidos como instancias. Proporciona una
infraestructura flexible y segura para ejecutar una amplia variedad de
aplicaciones y servicios, con características como escalabilidad,
diversidad de tipos de instancias, soporte para múltiples sistemas
operativos, opciones de pago por uso, y avanzadas configuraciones de redes
y seguridad.

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

En este proyecto desplegarás la Fleet Management API en una máquina
virtual usando **Amazon EC2**.

En lugar de depender únicamente de tu computadora local para ejecutar aplicaciones,
tanto en Amazon EC2, puedes utilizar servidores remotos, llamados
instancias, que ofrecen más potencia y flexibilidad. Puedes elegir entre
diferentes tipos de instancias según las necesidades
de tu aplicación. Hay instancias optimizadas para tareas que requieren
mucha memoria, mucho procesamiento, almacenamiento rápido, etc. Puedes conectarte
a tu instancia desde tu computadora local usando herramientas como SSH
(para Linux) o Remote Desktop (para Windows). Una vez conectada,
puedes usar la instancia como lo harías con tu computadora local:
instalar software, subir código, ejecutar aplicaciones, etc.

## 4. Implementaciones de ejemplo

En caso que no hayas implementado aún la
[Fleet Management API](../05-fleet-management-api/README.md)
puedes usar las siguientes implementaciones mínimas para
completar este proyecto. Elige la implementación en el
lenguaje de programación que más te interese:

- [Implementación en NodeJS](https://github.com/Laboratoria/minimum-impl-fleet-management-api-nodejs)
- [Implementación en Python](https://github.com/Laboratoria/minimum-impl-fleet-management-api-python)
- [Implementación en Java](https://github.com/Laboratoria/minimum-impl-fleet-management-api-java)

## 5. Paso a paso general para el despliegue en Amazon EC2

Podemos seguir el siguiente paso a paso general para
desplegar la Fleet Management API independientemente del lenguaje de
programación en que esta implementada.
 
- Paso 1: Crear una cuenta en el proveedor de infraestructura
- Paso 2: Lanzar una máquina virtual
- Paso 3: Configurar la máquina virtual
- Paso 4: Conectar a la máquina virtual desde tu computadora usando SSH
- Paso 5: Instalar las dependencias de la API en la máquina virtual
- Paso 6: Subir el código de tu API en la máquina virtual
- Paso 7: Configurar y ejecutar la API en la máquina virtual
- Paso 8: Probar la API desde tu computadora

## 6. Paso a paso detallado para el despliegue en Amazon EC2

El paso a paso detallado para el despliegue en Amazon EC2
depende del lenguaje de implementacion de la API. Te
sugerimos las siguientes guías:

- [Despliegue de API NodeJS](https://dev.to/drsimplegraffiti/from-code-to-the-cloud-a-step-by-step-guide-to-deploying-your-nodejs-app-on-aws-ec2-4300)
- [Despliegue API Python](https://www.geeksforgeeks.org/how-to-deploy-python-application-in-aws/)
- [Despliegue de API Java](https://medium.com/@amitu2016/deploying-spring-boot-web-app-on-aws-using-ec2-and-s3-4db1d0f55c78)

## 7. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con tu coach, asegúrate de
tener una coleccion de Postman para probar la API que
desplegaste en Amazon EC2.

## 8. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.
