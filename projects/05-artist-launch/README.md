# Artist Launch

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Plan general de trabajo](#4-plan-general-de-trabajo)
* [5. Plan detallado de trabajo](#5-plan-detallado-de-trabajo)
* [6. Consideraciones para pedir tu Project Feedback](#6-consideraciones-para-pedir-tu-project-feedback)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)

***

## 1. Consideraciones generales

* Este proyecto lo resolvemos en **duplas**.
* El rango de tiempo estimado para completar el proyecto es de 2 a 4 Sprints.
* Enfócate en aprender y no solamente en "completar" el proyecto.

## 2. Preámbulo

![Un microfono y al fondo un gitarrista](https://images.unsplash.com/photo-1535712593684-0efd191312bb)

_Credito: Foto de [Daniel Chekalov](https://unsplash.com/@dchuck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)_
_en [Unsplash](https://unsplash.com/photos/guitarist-holding-black-guitar-4YhwiEsL0AQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)_

La validación de hipótesis es un proceso fundamental en la toma de
decisiones basadas en evidencia, y no solamente en creencias u
opiniones. En el análisis de datos, es común plantear suposiciones o
hipótesis sobre relaciones, tendencias o diferencias entre las variables
de los datos disponibles. La validación de estas hipótesis (confirmar o
refutar) se consigue con técnicas y métodos diseñados para determinar si
los resultados observados en los datos, son estadísticamente
significativos o si pueden atribuirse al azar.

El levantamiento y validación de hipótesis
se puede utilizar en una variedad de contextos y mercados para, por
ejemplo, planificar estrategias de marketing, establecer políticas de
precios, evaluar inversiones, entender mejor el comportamiento del
mercado y los consumidores. Es decir, para tomar todo tipo de decisiones
estratégicas.

Algunos ejemplos:

* Mercado de la moda:

Hipótesis: Cambiar el diseño del logotipo de una marca de moda líder
aumentará el atractivo de la marca entre los consumidores jóvenes.

Análisis: Se podría realizar una prueba en la que se muestre el nuevo y
el antiguo logotipo a un grupo de consumidores y se recopilen sus
opiniones (datos) para determinar si la nueva imagen de la marca es más
atractiva para el público objetivo.

* Mercado de tecnología:

Hipótesis: Reducir el precio de un producto tecnológico resultará en un
aumento en la participación de mercado.

Análisis: Se podrían realizar pruebas de precios en diferentes
ubicaciones geográficas o períodos de tiempo para evaluar si esa
reducción de precio conduce a un aumento en la cuota de mercado.

* Mercado de bienes raíces:

Hipótesis: La proximidad a escuelas de alta calidad aumenta el valor de
las propiedades residenciales.

Análisis: Se podrían comparar los precios de las propiedades ubicadas
cerca de escuelas de alta calidad con las que no lo están para
determinar si la hipótesis es válida.

## 3. Resumen del proyecto

En este proyecto, vamos a explorar un conjunto de datos con el fin de
identificar patrones o características que puedan influir en la
popularidad (cantidad de streams) de una canción en plataformas como
Spotify, Apple Music y Deezer.

Una discográfica se enfrenta al emocionante desafío de
lanzar un nuevo artista en el escenario musical global. Afortunadamente,
cuenta con una herramienta poderosa en su arsenal: un extenso dataset de
Spotify con información sobre las canciones más escuchadas en 2023.

La discográfica planteó una serie de hipótesis sobre qué hace que una
canción sea más escuchada. Estas hipótesis incluyen:

* Las canciones con un mayor BPM (Beats Por Minuto) tienen más éxito en
  términos de cantidad de streams en Spotify.

* Las canciones más populares en el ranking de Spotify también tienen un
  comportamiento similar en otras plataformas como Deezer.

* La presencia de una canción en un mayor número de playlists se
  relaciona con un mayor número de streams.

* Los artistas con un mayor número de canciones en Spotify tienen más
  streams.

* Las características de la música influyen en el éxito en términos de
  cantidad de streams en Spotify.

Como analista de datos,
el desafío consiste en **determinar los factores que contribuyen al éxito
de una canción**. Deberás validar (refutar o confirmar) estas hipótesis
mediante el análisis de los datos, y proporcionar recomendaciones estratégicas
basadas en tus hallazgos. En última instancia, el objetivo es que la
discográfica y el nuevo artista puedan tomar decisiones informadas que
aumenten sus posibilidades de conseguir el “éxito”.

## 4. Plan general de trabajo

Vamos a trabajar en el proceso secuencial descrito en la siguiente
imagen.

![image](https://drive.google.com/uc?id=1GBP2hLKqNpADEJ6Aa4EkKwd4oBNNnLMj)

**Cada paso representa también el desarrollo de una habilidad** necesaria para
desempeñarse como una analista de datos. Es secuencial porque conseguir
cada paso depende de haber hecho el anterior, no tendría sentido aplicar
una técnica de análisis sin previamente haber preparado los datos ni sin
haber hecho un análisis exploratorio.

Esto no quiere decir de ninguna manera que debes completar cada paso a
la perfección antes de pasar al siguiente o que no tendrás que avanzar y
retroceder constantemente. El proceso seguramente se verá algo así:

![image](https://drive.google.com/uc?id=1Pz_zrJxwH_qJRDfwwdvYmfeudtc72d0_)

Por ejemplo, al hacer un análisis exploratorio, quizás detectes que hay
algún aspecto de tu preparación de datos que debe mejorarse, entonces
regresas, mejoras eso y luego continúas. Esto es un proceso natural en
el que irás adaptando tu trabajo según los “problemas” con los que te
vayas encontrando, pero siempre siguiendo una lógica.

## 5. Plan detallado de trabajo

El plan detallado de ejecución de este proyecto dependerá de la herramienta
de _Bussiness intelligent_ que uses. Tienes dos opciones para escoger. Consulta
con tu coach cual debes elegir.

* [Looker Studio](./LookerStudio.md)
* [Power BI](./PowerBI.md)

## 6. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con tu coach, asegúrate de que tu proyecto:

* [] Hiciste la limpieza de los datos y uniste las tablas en BigQuery.
* [] Generaste tablas, gráficos y correlación durante tu análisis exploratorio.
* [] Aplicaste la técnica de validación de hipótesis
* [] Conectaste la base de datos limpia a Looker Studio para crear
  un dashboard informativo.
* [] Creaste una presentación simple usando Google Slides o utilizaste
  el dashboard en Looker Studio, para guiarte en tu presentación en video.
* [] Grabaste y compartiste un video de máximo 5 minutos, explicando tus
  conclusiones, hallazgos y recomendaciones para el negocio. Usa Loom
  para grabarte a ti misma presentando y mostrando la pantalla con tu
  presentación.
* [] Compartiste el enlace/liga/link público de una carpeta de Google Drive
  conteniendo un archivo con las consultas (queries) utilizadas y el
  link de Looker Studio en el que trabajaste el proyecto, y donde se
  pueden ver claramente todos los pasos que seguiste y los resultados
  que obtuviste. Como este es un proyecto en dupla, solo el video debe
  ser individual, los archivos compartidos pueden ser los mismos.

## 7. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.
