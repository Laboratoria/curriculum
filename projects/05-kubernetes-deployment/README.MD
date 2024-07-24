# API Deployment on Kubernetes

## Índice

- [1. Consideraciones generales](#1-consideraciones-generales)
- [2. Preámbulo](#2-preámbulo)
- [3. Resumen del proyecto](#3-resumen-del-proyecto)
- [4. Implementaciones de ejemplo](#4-Implementaciones-de-ejemplo)
- [5. Paso a paso general para el despliegue en Amazon EC2](#6-Paso-a-paso-general-para-el-despliegue-en-Amazon-EC2)
- [6. Paso a paso detallado para el despliegue en Amazon EC2](#6-Paso-a-paso-detallado-para-el-despliegue-en-Amazon-EC2)
- [7. Consideraciones para pedir tu Project Feedback](#7-Consideraciones-para-pedir-tu-Project-Feedback)
- [8. Objetivos de aprendizaje](#8-Objetivos-de-aprendizaje)

---

## 1. Consideraciones generales

- Este proyecto lo resolvemos de manera --individual--.
- El rango de tiempo estimado para completar el proyecto es de 2 a 3 Sprints.

## 2. Preámbulo

<img
src="https://github.com/user-attachments/assets/21a3c3b9-e78c-4eef-99c8-83a77ff3b8b9"
alt="Logo de Kubernetes"
aria-describedby="kubernetes-logo" />

<p id="kubernetes-logo">
Logo de kubernetes
</p>

Kubernetes es una herramienta que facilita la
gestión de aplicaciones contenedorizadas al automatizar
el despliegue, el escalado y la recuperación ante fallos.
Con Kubernetes puedes aumentar
o disminuir el número de contenedores en función de la carga de
trabajo, asegurando que tu aplicación pueda manejar picos de
tráfico sin problemas.
Kubernetes distribuye los contenedores en varios nodos del
clúster, asegurando que la aplicación siga funcionando incluso
si algunos nodos fallan. También puede reiniciar automáticamente
los contenedores que fallan o reemplazarlos si un nodo completo se cae.

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
en un **cluster de kubernetes** a través de **Azure Kubernetes Service** 
o en **Amazon Elastic Kubernetes Service**.

Para este proyecto necesitarás la imagen Docker que construiste
en el proyecto [API Deployment on Docker File](../05-dockerfile-deployment/README.MD).
Si aún no la tienes, por favor implementa primero este proyecto.

## 4. Paso a paso general para el despliegue en Amazon EKS o Azure AKS

- Paso 1: Subir la imagen docker a un Registro de Contenedores
(Azure Container Registry o Amazon ECR).
- Paso 2: Crear y Configurar el Clúster de Kubernetes En Azure
Kubernetes Service (AKS) o Amazon Elastic Kubernetes Service (EKS).
- Paso 3: Crear un archivo de despliegue de Kubernetes.
- Paso 4: Crear un archivo de servicio de Kubernetes
- Paso 5: Desplegar los recursos en Kubernetes y verificar el estado del despliegue
- Paso 7: Obtén la dirección IP del balanceador de carga para acceder a laa API.
- Paso 8: Monitorizar los Logs

## 5. Kubernetes

Kubernetes es una herramienta que facilita la
gestión de aplicaciones contenedorizadas al automatizar
el despliegue, el escalado y la recuperación ante fallos.
Por lo tanto es importante que te familiarices con los
conceptos básicos de Kubernetes como pods, servicios,
despliegues, nodos, y clústeres. 
Para ello será necesario entonces que instales en tu computadora
local [kubectl](https://kubernetes.io/docs/tasks/tools/#kubectl)
y [minikube](https://minikube.sigs.k8s.io/docs/start/).

Para familiarizarte puedes seguir el 
[tutorial oficial de Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
o cualquier otro disponible en internet. Asegúrate que al final
tengas respuestas claras para las siguientes preguntas:

- [ ] ¿Qué problemas de la vida real resuelve Kubernetes?
- [ ] ¿Qué es la alta disponibilidad y la recuperación ante fallos?
- [ ] ¿Qué es un Pod en Kubernetes?
- [ ] ¿Qué es un Nodo en un clúster de Kubernetes?
- [ ] ¿Qué es un Clúster en Kubernetes?
- [ ] ¿Qué es una Definición de Tarea en Kubernetes?
- [ ] ¿Cómo se crean y gestionan los recursos en Kubernetes?
- [ ] ¿Qué es un Servicio en Kubernetes y cuál es su función?
- [ ] ¿Qué es un Deployment en Kubernetes y cómo se usa?
- [ ] ¿Cómo se escala una aplicación en Kubernetes?
- [ ] ¿Qué mecanismos proporciona Kubernetes para la alta disponibilidad y la recuperación ante fallos?

### 1. Crear un archivo de despliegue de Kubernetes.

Una vez creado el cluster Kubernetes en EKS,
el siguiente paso es escribir un
[archivo de despliegue de Kubernetes (`deployment.yaml`)](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
Para ello, es importante responder a varias preguntas clave
sobre tu aplicación y su entorno.
Aquí tienes una lista de preguntas a considerar:

- [ ] ¿Cuál es el nombre de la aplicación?
- [ ]  ¿Qué imagen de contenedor se usará?
- [ ] ¿Qué puertos necesita exponer la aplicación?
- [ ] ¿Cuántas réplicas de la aplicación se deben desplegar inicialmente?
- [ ] ¿Cuál es la política de actualización deseada?
- [ ] ¿Qué recursos (CPU y memoria) necesita la aplicación?
- [ ] ¿Cuáles son las variables de entorno necesarias para la aplicación?
- [ ] ¿Se necesitan volúmenes persistentes o temporales?

Con ayuda de las respuestas a estas preguntas escribe un `deployment.yaml`
para definir un despliegue para la API.

### 2. Crear un archivo de servicio de Kubernetes

Una vez creado el cluster Kubernetes en EKS,
el siguiente paso es escribir un
[archivo de servicio de Kubernetes (`services.yaml`)](https://kubernetes.io/docs/concepts/services-networking/service/)
Para ello, es importante responder a varias preguntas clave
sobre tu aplicación y su entorno.
Aquí tienes una lista de preguntas a considerar:

Para escribir un archivo `services.yaml` adecuado para desplegar una aplicación en Kubernetes, deberías responder las siguientes preguntas:

- [ ] ¿Cuál es el nombre de la aplicación y del servicio?**
- [ ] ¿Qué tipo de servicio necesitas (`ClusterIP`, `NodePort`, `LoadBalancer`, `ExternalName`)?
- [ ] ¿Qué puertos necesitas exponer?**
- [ ] ¿Cuál es el selector para asociar el servicio con los pods correctos?**
- [ ] ¿Qué protocolos se usarán (TCP/UDP)?**
- [ ] ¿El servicio necesita ser accesible externamente ()`NodePort` o `LoadBalancer`)?

Con ayuda de las respuestas a estas preguntas escribe un `services.yaml`
para definir un servicio para la API.

## 6. Paso a paso detallado para el despliegue en Amazon ECS

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

### 2. Crear un cluster en Amazon Elastic Kubernetes Service 

El siguiente paso es entonces crear un cluster Kubernetes
en Amazon Elastic Kubernetes Service.

Tómate un tiempo para familiarizarte con EKS. Puedes seguir este 
[tutorial de EKS](https://medium.com/edureka/amazon-eks-ac646c23abf8)
o cualquier otro disponible en internet. Asegúrate que al final tengas respuestas
claras para las siguientes preguntas:

- [] ¿Cómo se crean y gestionan los clústeres en EKS?
(`AWS CLI`, `AWS Management Console`, `eksctl`)
- [] ¿Cómo se configura la autenticación y autorización en EKS?
- [] ¿Qué es `kubectl` y cómo se utiliza en el contexto de EKS?
- [] ¿Cómo se gestionan los upgrades de un clúster EKS?
- [] ¿Cómo se configura y gestiona el autoescalado en EKS?
- [] ¿Cómo se diagnostican y resuelven problemas en un clúster EKS?

Finalmente, usa EKS para crear un clúster Kubernetes para la API.

### 3. Desplegar los recursos en Kubernetes y verificar el estado del despliegue

Con ayuda del comando `kubectl apply` aplica los archivos
`deployment.yaml` y `service.yaml` al cluster Kubernetes.

Verifica el estado del despliegue con `kubectl get deployments` y
`kubectl get services`. Realiza los ajustes necesarios
en los archivos hasta obtener un estado correcto en el
deployment y service.

### 4. Monitorizar y gestionar la aplicación

Una vez que el servicio se haya creado, obtén la dirección
IP del balanceador de carga para acceder a tu API con
`kubectl get services`.

Usa la la IP pública de tu clúster para probar tu API con una
coleccion de Postman. Puedes utilizar esta
[colección de ejemplo](https://github.com/Laboratoria/curriculum/tree/main/projects/05-fleet-management-api#7-testing).

## 6. Paso a paso detallado para el despliegue en Azure Kubernetes Service

### 1. Sube la imagen Docker a Azure Container Registry

Azure Container Registry (ACR) es un servicio en la nube que
te permite almacenar tus imágenes Docker de forma segura y
eficiente. ACR actúa como un "repositorio" para imágenes Docker,
similar a cómo GitHub actúa como un repositorio para código fuente.
ECR se integra fácilmente con otros servicios de Azure, como Azure Container Apps.
Esto simplifica el despliegue de tus aplicaciones en contenedores dentro
del entorno de Azure.

En este proyecto almacenaremos en ACR la imagen docker que hemos
definido para empaquetar nuesta aplicación. Tómate un tiempo
para familiarizarte con ACR. Puedes seguir el 
[tutorial oficial de ACR](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-get-started-docker-cli)
o cualquier otro disponible en internet. Asegúrate que al final tengas respuestas
claras para las siguientes preguntas:

- [ ] ¿Cómo creas un nuevo registro en Azure Container Registry?
- [ ] ¿Cómo te autenticas en Azure Container Registry desde tu máquina local?
- [ ] ¿Cómo subes una imagen Docker a Azure Container Registry?
- [ ] ¿Cómo gestionas las imágenes en Azure Container Registry?
- [ ] ¿Cómo haces `pull` a tu computadora de una imágen subida a Azure Container Registry?

Finalmente, sube la imagen Docker que constuiste para empaquetar tu
aplicación en un registro de Azure Container Registry.

### 2. Crear un cluster en Azure Kubernetes Service

El siguiente paso es entonces crear un cluster Kubernetes
en Azure Kubernetes Service.

Tómate un tiempo para familiarizarte con AKS. Puedes seguir este 
[tutorial de AKS](https://www.freecodecamp.org/news/how-to-use-azure-kubernetes-service-for-container-orchestration/)
o cualquier otro disponible en internet. Asegúrate que al final tengas respuestas
claras para las siguientes preguntas:

- [] ¿Cómo se crean y gestionan los clústeres en AKS? (`Azure Portal`, `Azure CLI`).
- [] ¿Cómo se configura la autenticación y autorización en un clúster AKS?
- [] ¿Qué es `kubectl` y cómo se utiliza en el contexto de AKS?
- [] ¿Cómo se gestionan los upgrades de un clúster AKS?
- [] ¿Cómo se configura el autoescalado en AKS?
- [] ¿Cómo se diagnostican y resuelven problemas en un clúster AKS?

Finalmente, usa AKS para crear un clúster Kubernetes para la API.

### 3. Desplegar los recursos en Kubernetes y verificar el estado del despliegue

Con ayuda del comando `kubectl apply` aplica los archivos
`deployment.yaml` y `service.yaml` al cluster Kubernetes.

Verifica el estado del despliegue con `kubectl get deployments` y
`kubectl get services`. Realiza los ajustes necesarios
en los archivos hasta obtener un estado correcto en el
deployment y service.

### 4. Monitorizar y gestionar la aplicación

Una vez que el servicio se haya creado, obtén la dirección
IP del balanceador de carga para acceder a tu API con
`kubectl get services`.

Usa la la IP pública de tu clúster para probar tu API con una
coleccion de Postman. Puedes utilizar esta
[colección de ejemplo](https://github.com/Laboratoria/curriculum/tree/main/projects/05-fleet-management-api#7-testing).

## 7. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con tu coach, asegúrate de
tener una coleccion de Postman para probar la API que
desplegaste en Amazon EKS o Azure AKS.

## 8. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.
