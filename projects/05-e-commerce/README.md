# E-Commerce

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Preámbulo

[GraphQL](https://graphql.org/) es una moderna librería para hacer consultas webs (queries), de hecho, según su sitio web, se describe como un *lenguaje de consultas* para trabajar con APIs. Hasta antes de graphQL, uno de los problemas que solíamos tener al trabajar con nuestra data a través de APIs, era que para mostrar en el DOM un dato atómico de un objeto, como por ejemplo, el nombre de una usuaria, debíamos traernos toda la data con respecto a esa usuaria, y luego filtrarla/ordenarla/clasificarla para mostrarla en el DOM. Esa consulta se hacía poco eficiente, ya que nos obligaba a traernos data que particularmente en este caso, no era necesaria, como por ejemplo, el mail, teléfono o edad de esa usuaria.

![graphQL query](https://i.imgur.com/gKGzQLw.gif)

Utilizando GraphQL podemos solicitar sólo los datos que son relevantes para nuestros componentes, y hacer más ligeras las consultas e incluso evitar entrar en lógicas de tener que filtrar la data antes de mostrarla.

Como desarrolladoras Fullstack, estas lógicas nos ayudarán mucho en el trabajo con el consumo de data a través de APIs.

## 2. Resumen del proyecto

Incluso antes de la pandemia, el formato de venta e-commerce (comercialización por la web) había agarrado tanta potencia, que para los negocios ya no sólo es una opción, sino también un requerimiento para subsixtir en el mundo digitalizado.

En este proyecto, desarrollaremos un sitio web de compra de productos, en el cual l@s usuari@s podrán escoger qué productos incluir en su carrito/canasta de compras para luego realizar la compra (checkout).

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.


## 4. Consideraciones generales

## 5. Requerimientos funcionales del proyecto

HU: Yo como developer quiero poder arrancar el proyecto con un user root con credenciales desde .env para poder tener privilegios de root

HU: Yo como user root debo poder crear users con role admin

HU: Yo como user admin debo poder crear, editar y eliminar productos

HU: Yo como user debo poder ver la lista de productos en el catálogo

HU: Yo como user debo poder agregar productos a un carrito de compras

![storyboard](https://user-images.githubusercontent.com/12631491/133333559-59a0e715-9078-4b6b-8ff2-1ff368ba2c93.jpg)

### Definición del producto

## 6. Pistas, tips y lecturas complementarias

### Primeros pasos

### Otros recursos
