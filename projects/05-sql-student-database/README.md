# Student Database

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Configuración del Ambiente de Desarrollo](#4-configuracion-del-ambiente-de-desarrollo)
* [5. Entregables](#5-entregables)
* [6. Consideraciones para pedir tu Project Feedback](#6-consideraciones-para-pedir-tu-project-feedback)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)

---

## 1. Consideraciones generales

* Este proyecto lo resolvemos de manera **individual**.
* El rango de tiempo estimado para completar el proyecto es de 2 a 5 Sprints.
* Enfócate en aprender y no solamente en "completar" los tutoriales o ejercicios.

## 2. Preámbulo

![Workshop](https://images.unsplash.com/photo-1426927308491-6380b6a9936f)

_Credito: Foto de [Barn Images](https://unsplash.com/@barnimages)_
_en [Unsplash](https://unsplash.com/photos/assorted-handheld-tools-in-tool-rack-t5YUoHW6zRo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)_

Los comandos DDL (Data Definition Language) en SQL son fundamentales para la creación,
modificación y eliminación de objetos de base de datos. Estos comandos permiten
definir la estructura y características de las tablas, índices, vistas y otros
elementos esenciales en el diseño de una base de datos.

## 3. Resumen del proyecto

En este proyecto seguirás dos tutoriales de freeCodeCamp para aprender
los comandos DDL (Data Definition Language) en SQL.

### [Learn SQL by Building a Student Database: Part 1](https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1)

En el primer tutorial, aprenderás a construir y gestionar una base de datos de
estudiantes utilizando SQL y PostgreSQL. Comenzarás configurando el entorno
necesario, que incluye la instalación de PostgreSQL y el uso de máquinas
virtuales. A través de comandos SQL, te guiarás en la creación de tablas con
claves primarias y foráneas, la inserción y consulta de datos, y la
actualización y eliminación de registros. Además, explorarás el uso de
scripts Bash para automatizar tareas y gestionar permisos de archivos.

Haz clic [aquí para iniciar el primer tutorial](https://gitpod.io/new/?autostart=true#CODEROAD_TUTORIAL_URL=https%3A%2F%2Fraw.githubusercontent.com%2FLaboratoria%2Flearn-sql-by-building-a-student-database-part-1%2Fmain%2Ftutorial.json,CODEROAD_DISABLE_RUN_ON_SAVE=true/https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1).

### [Learn SQL by Building a Student Database: Part 2](https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-2)

En el segundo tutorial, profundizarás en la administración y análisis
de bases de datos de estudiantes usando SQL y PostgreSQL. Aprenderás a
realizar consultas avanzadas mediante JOIN para combinar datos de múltiples
tablas y a utilizar funciones de agrupamiento (GROUP BY) y ordenamiento
(ORDER BY). Se cubrirán también las funciones agregadas para sumarizar
datos y la modificación de estructuras de tablas existentes con ALTER TABLE.
Esta parte incluye la creación de copias de seguridad y restauración
de bases de datos, y el uso de scripts Bash para una gestión más
eficiente y segura de tu entorno.

Haz clic [aquí para iniciar el segundo tutorial](https://gitpod.io/new/?autostart=true#CODEROAD_TUTORIAL_URL=https%3A%2F%2Fraw.githubusercontent.com%2FLaboratoria%2Flearn-sql-by-building-a-student-database-part-2%2Fmain%2Ftutorial.json,CODEROAD_DISABLE_RUN_ON_SAVE=true/https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-2)

## 4. Configuración del Ambiente de Desarrollo

Los tutoriales usan [Gitpod](https://gitpod.io/). Con Gitpod, las
desarrolladores pueden iniciar instantáneamente un entorno de desarrollo
completo con todas las herramientas y dependencias necesarias para
trabajar en su proyecto, lo que elimina la necesidad de configurar
manualmente el entorno en sus propias máquinas.

A continuación encuentras el paso a paso para trabajar con Gitpod.
Sin embargo puedes ver este [video](https://youtu.be/legfwHxU_cI)
que hemos preparado.

### Paso 1. Crea una cuenta en Gitpod usando Github

Para crear una cuenta en Gitpod utilizando GitHub, sigue estos pasos:

1. Dirígete al sitio web de Gitpod en [gitpod.io](https://www.gitpod.io/).
2. Haz clic en el botón "Login" en la esquina superior derecha de la página.
3. Selecciona la opción "Continue with GitHub".
4. Serás redirigido a la página de autorización de GitHub. Si no has iniciado
   sesión en GitHub, se te pedirá que lo hagas.
5. Después de iniciar sesión en GitHub, se te pedirá que autorices a Gitpod
   a acceder a tu cuenta de GitHub. Revisa los permisos y haz clic en
   "Authorize Gitpod" (Autorizar Gitpod).
6. Completa la informacion solicitada para compeltar el registro.
7. ¡Listo! Ahora tienes una cuenta en Gitpod vinculada a tu cuenta de GitHub.

### Paso 2. Crea un workspace para los tutoriales

1. En [Gitpod](https://gitpod.io/workspaces), haz clic en el boton "New Workspace".
2. En la opción "Select a repository" ingresa la url de repositorio del tutorial:
   - Tutorial 1: [https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1](https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1)
   - Tutorial 2: [https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-1](https://github.com/Laboratoria/learn-sql-by-building-a-student-database-part-2)
3. Verifica que en las demás campos esten elegidas las opciones "VSCode 1.90.2"
   y "Standar".
4. Haz clic en "Continue".
5. Gitpod abrirá VSCode con el nuevo espacio de trabajo y comenzará a configurar
   el entorno automáticamente.

### Paso 3. Inicia el tutorial

1. En el VSCode abierto por Gitpod, abre el menú hamburguesa (tres líneas
   horizontales en la esquina superior izquierda).
2. Ve al menú "View".
3. Haz clic en la opción "Command Palette".
4. Escribe "CodeRoad: Start" y elígelo entre las opciones para ejecutarlo.
5. Se abrirá un nuevo panel con el tutorial.

### Paso 4. Retomar un tutorial en el punto en el que lo dejé la última vez

1. Inicia sesón en [Gitpod](https://gitpod.io/workspaces) y lista los workspaces
2. En el workspace del tutorial que quieres retomar haz click en el
   menú de tres puntos.
3. Elige la opcion "Open"
4. Gitpod abrirá VSCode con el nuevo espacio de trabajo y comenzará a configurar
   el entorno automáticamente.
5. Inicia el tutorial de nuevo siguiendo el paso 3.

## 5. Entregable

Haz fork a este repositorio. Luego ajustar el README para registrar
todos los comandos ejecutados durante los tutoriales. Puede usar
el siguiente formato:

```md
# Tutorial 1

## Paso 1

   `echo sql Hello`

## Paso 2

   `psql --username=freecodecamp --dbname=psql`
```

Puedes obtener un historial de los comandos ejecutados en una terminal
con el comando `history`.

## 6. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con tu coach, asegúrate de:

* [ ] Completar los 2 tutoriales propuestos
* [ ] Tener un fork con un entorno de Gitpod completo

## 7. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.
