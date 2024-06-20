# Artist Launch

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Plan general de trabajo](#4-plan-general-de-trabajo)
* [5. Plan detallado de trabajo](#5-plan-detallado-de-trabajo)
* [6. Consideraciones para pedir tu Project Feedback](#6-consideraciones-para-pedir-tu-project-feedback)
* [7. Self review](#7-self-review)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)

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

En la siguiente imagen se describe el plan de trabajo detallado
que seguiremos.

![image](https://drive.google.com/uc?id=1a47alrHekArya5-zWIsDcMtsnNBYKhG-)

### ⬜ Paso 0. Preparación

#### 0.1 Herramientas y/o plataformas

En este proyecto vas a utilizar una herramienta de Google llamada
BigQuery, para el manejo de los datos, una herramienta de Microsoft
llamada Power BI para la visualización de los datos:

* BigQuery
* Power BI

#### 0.2 Lenguajes

Utilizarás el lenguaje SQL en BigQuery . Nota la
diferencia entre “lenguaje” (SQL) y “herramienta” (BigQuery), en la sección de
recursos de cada meta encontrarás cursos de SQL que pueden ayudarte a comprender
estos lenguajes y cómo usarlos en estas herramientas.

#### 0.3 Insumos

Este conjunto de datos contiene datos sobre las canciones más
reproducidas en Spotify en 2023. Los datos se dividen en 3 tablas, la
primera sobre el rendimiento de cada canción en Spotify, la segunda con
el rendimiento en otras plataformas como Deezer o Apple Music, y la
tercera con las características de estas canciones.

El conjunto de datos está disponible para download en este enlace
[dataset](https://storage.cloud.google.com/bootcamp-assets/projects/05-artist-launch/spotify_2023.zip),
ten en cuenta que es un archivo comprimido, tendrás que descomprimirlo
para acceder a los archivos con los datos.

A continuación, puedes consultar la descripción de las variables que
componen las tablas de este conjunto de datos:

##### **Track_in_spotify**

* **track_id**: Identificador único de la canción. Es un número entero
  de 7 dígitos que no se repite
* **track_name**: Nombre de la canción
* \*\*artist(s)\_name\*\*: Nombre del artista(s) de la canción
* **artist_count**: Número de artistas que contribuyen a la canción.
* **released_year**: Año en que se lanzó la canción.
* **released_month**: Mes en el que se lanzó la canción.
* **released_day**: Día del mes en que se lanzó la canción.
* **in_spotify_playlists**: Número de listas de reproducción de Spotify
  en las que está incluida la canción
* **in_spotify_charts**: Presencia y ranking de la canción en las listas
  de Spotify
* **streams**: Número total de transmisiones en Spotify. Representa la
  cantidad de veces que la canción fue escuchada.

##### **Track_in_competition**

* **track_id**: Identificador único de la canción. Es un número entero
  de 7 dígitos que no se repite
* **in_apple_playlists**: número de listas de reproducción de Apple
  Music en las que está incluida la canción
* **in_apple_charts**: Presencia y rango de la canción en las listas de
  Apple Music
* **in_deezer_playlists**: Número de listas de reproducción de Deezer en
  las que está incluida la canción
* **in_deezer_charts**: Presencia y rango de la canción en las listas de
  Deezer
* **in_shazam_charts**: Presencia y rango de la canción en las listas de
  Shazam

##### **Track_technical_info**

* **track_id**: Identificador único de la canción. Es un número entero
  de 7 dígitos que no se repite
* **bpm**: Pulsaciones por minuto, una medida del tiempo de la canción.
* **key**: Clave musical de la canción
* **mode**: Modo de la canción (mayor o menor)
* **danceability\_%**: Porcentaje que indica qué tan adecuada es la
  canción para bailar
* **valence\_%**: Positividad del contenido musical de la canción.
* **energy\_%**: Nivel de energía percibido de la canción.
* **acusticness\_%**: Cantidad de sonido acústico en la canción.
* **instrumentality\_%**: Cantidad de contenido instrumental en la
  canción.
* **liveness\_%**: Presencia de elementos de actuación en vivo.
* **speechiness\_%**: Cantidad de palabras habladas en la canción.

#### 0.4 Buenas prácticas

Documentar tu proceso es una de las mejores
prácticas en el análisis de datos. Aquí hay dos sugerencias más para
organizarse en este proyecto, específicamente para la fase de
procesamiento y preparación de los datos:

* Haz consultas que te permitan identificar todos los elementos que
  deberán limpiarse. Al terminar, haz una consulta completa para crear
  una tabla con los datos limpios, en lugar de crear una tabla en cada
  paso.

* Guarda las consultas y describe qué hace cada una de ellas. Crea un
  repo donde acopiar todas los recursos y usa comentarios para describir
  para qué sirve cada una. Esto te ayudará en proyectos futuros a
  recordar cómo identificar valores nulos, por ejemplo.

* Comprende la diferencia entre vista (view) y tabla para organizarse.
  Muchas veces, guardar una vista te ayuda a trabajar de una manera más
  organizada y puedes ver la consulta que generó esa vista y modificarla
  rápidamente.

### 🟦 Paso 1. Procesar y preparar base de datos

⌛ **Rango de tiempo estimado: De 8 a 12 horas**

El preprocesamiento de datos no es una etapa que se pueda pasar por alto
en el análisis de datos. Su importancia es evidente en la calidad de los
resultados obtenidos. Cuando los datos se procesan y preparan de manera
inadecuada, pueden surgir sesgos, errores y conclusiones incorrectas.
Además, el ruido en los datos sin tratar puede perjudicar la precisión
de las predicciones y la calidad de las decisiones basadas en el
análisis. Por lo tanto, invertir tiempo y esfuerzo en la fase inicial de
preprocesamiento se recompensa a lo largo de todo el proceso de análisis
de datos, asegurando resultados más confiables y significativos.

En este hito, trabajaremos con una herramienta llamada BigQuery para
realizar la etapa de procesamiento y preparación de los datos. El
lenguaje SQL, utilizado en esta herramienta, es ampliamente utilizado en
el ambiente laboral y un buen analista de datos debe saber utilizarlo a
su favor.

BigQuery es un servicio de almacenamiento y análisis de datos en la nube
proporcionado por Google Cloud. Está diseñado para permitir a las
organizaciones almacenar, consultar y analizar grandes volúmenes de
datos de manera rápida y escalable. BigQuery se utiliza comúnmente en
todas las fases del análisis de datos, incluyendo la fase de
procesamiento y preparación, debido a sus capacidades de procesamiento
de datos y su escalabilidad.

| Meta                                                                 | Objetivo                                                                                                       | Objetivo individual                                                                                                                                                                                                                                                                                                                                                                                                                     | Recurso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🔵 Conectar/importar datos a otras herramientas                      | Crear en BigQuery un proyecto, un conjunto de datos e importar tablas                                          | <ul><li>Debes crear su propio entorno de trabajo en BigQuery con su cuenta de Google. </li><li>En este caso, nos referimos a crear un project, un dataset (de BigQuery) y subir las tablas del dataset que te proporcionamos. </li><li>Deben coordinarse ambas para que sigan la misma estructura de proyecto en BigQuery y los mismos nombres de tablas, así será más fácil trabajar en conjunto y compartir códigos. </li><ul>        | <ul><li>🚨  Altamente recomendado: [Mini curso BigQuery:](https://coda.io/d/Curso-Google-BigQuery_dhocNT3PUIE/Introduccion_su3UO#_luO8s)  Aquí encontrarás cómo configurar tu Sandbox, y cómo hacer tus primeras consultas </li><li> 📄 [Cómo empezar con BigQuery (sandbox - versión gratuita)](https://cloud.google.com/bigquery/docs/sandbox?hl=es-419) </li><li> 📹 [Qué es BigQuery](https://www.youtube.com/watch?v=RxKtIicl8r0) </li><li> 📹 [Cómo crear un Project, Dataset y cargar tabla en BigQuery](https://www.youtube.com/watch?v=BN8WAOtJ4CY)</li><li>⚠️ Sandbox es la versión gratuita de Bigquery que te permite realizar consultas y crear tablas, y no te pide incluir datos de tarjeta de crédito, sin embargo, al ser la versión gratuita, el almacenamiento de tablas, vistas y consultas solo dura 3 meses por lo que es importante crear un documento donde puedas guardar tus consultas y todo lo que creas que es importante sobre este proyecto para consultarlo en el futuro.</li><ul>                                                                                                                                                        |
| 🔵 Identificar y manejar valores nulos                               | Identificar nulos a través de comandos SQL COUNT, WHERE y IS NULL                                              | <ul><li>Debes consultar los nulos de al menos una tabla, por ejemplo, una consulta los nulos `track_technical_info`, la otra de track_in_competition y ambas de track_in_spotify. </li><li>De esta forma, se aseguran de que cada una haga (y aprenda) al menos una consulta para identificar y manejar los nulos. Pueden intercambiar las consultas para que cada una vaya completando todo en su propio entorno de BigQuery.</li><ul> | <ul><li>🚨**Altamente recomendado**: 📄[Concepto valores nulos](https://docs.google.com/document/d/1AJRLPg2SWLvC1pnGOz-f1SNZXH1X63x2xWlquDBtlmE/edit?usp=sharing): En este enlace encontrarás la descripción de algunos tipos de nulos. (🔈[versión en audio](https://drive.google.com/file/d/1Y88gJEBdorDMRoEjnIUJNyI4G0LLAaGk/view?usp=drive_link)) </li><li>📄 [Qué es una consulta (query)](https://docs.google.com/document/d/1upi7Ashq_wro02zjMjnQlWgivQ9gsQWIy8q9pLm9WZ4/edit)</li><li>📹 [Cómo guardar queries](https://www.loom.com/share/461b7c3f07214d7897b68890c1389b77?sid=9c6d46b2-5ff6-4a60-823b-c976f535a18d)</li><li>📹 [Cómo idenficar nulos usando COUNT, WHERE y IS NULL](https://www.loom.com/share/3ae5d6e7f500405f95e8f1a110413a35?sid=c44c44d8-7caa-4da4-9261-03f6fd92348c)</li><li>💡 Haz una consulta para identificar los valores nulos en cada variable, toma nota de lo que encuentras o guarda la consulta (query) con la decisión que tomará (conservar o eliminar), de modo que después de realizar todo el paso de limpieza e identificar que es necesario eliminar/modificar etc, pueda crear una solo consulta (query) con todos los pasos de limpieza para la tabla en la que estás trabajando y en este momento crear una tabla o view con los datos limpios.</li><li>🧑‍💻 Si aún no está claro cómo identificar valores nulos en BigQuery, puedes pedir ejemplos a alguna AI como ChatGPT, Bing o Perplexity (por ejemplo)</li><ul>                                                            |
| 🔵 Identificar y manejar valores duplicados                          | Identificar duplicados a través de comandos SQL COUNT, GROUP BY, HAVING                                        | <ul><li>Debes consultar los duplicados de al menos una tabla, por ejemplo, una consulta los duplicados de `track_technical_info`, la otra de track_in_competition y ambas de track_in_spotify.</li><ul>                                                                                                                                                                                                                                 | <ul><li>🚨 **Altamente recomendado**: [Concepto valores duplicados](https://docs.google.com/document/d/1jXm4s7b17eObHd8sMvJSGwWi1YzdG_VZq56Xooy5Ioo/edit?usp=sharing): En este enlace encontrarás un artículo sobre valores duplicados y algunos ejemplos de por qué esto pasa. (🔈[versión en audio](https://drive.google.com/file/d/1TbKPSvocksk33eFg42lHf3kD8Y3NuzsN/view?usp=drive_link)) </li><li> 📹 [Cómo identificar duplicados a través de GROUP BY y HAVING (Ve también la diferencia entre los comandos WHERE y HAVING)](https://www.loom.com/share/0bd5d25a7e634bd39012f5bd913e3a3b?sid=507743b7-ee30-4c68-8756-a344798cad32)</li><li>💡 Recuerda que los valores duplicados no siempre significan un error, y as veces para determinar si un dato es duplicado debemos mirar otras variables en conjunto. Es decir, el nombre de la canción se puede repetir, sin embargo, si miramos la variable `track_name` más el nombre del artista, esta información en conjunto no se puede repetir, por ejemplo, podemos tener la canción Flowers de Mily Cyrus y Flowers de Bruno Mars, pero no podemos tener Flowers de Mily Cyrus dos veces.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                |
| 🔵 Identificar y manejar datos fuera del alcance del análisis        | Manejar variables que no son útiles para el análisis a través de comandos SQL SELECT EXCEPT                    | <ul><li>Debes analizar las variables fuera de alcance de al menos una tabla, por ejemplo, una consulta los de `track_technical_info`, la otra de track_in_competition y ambas de track_in_spotify.</li><ul>                                                                                                                                                                                                                             | <ul><li>🚨 **Altamente recomendado**: [Concepto valores fuera del alcance](https://docs.google.com/document/d/1-SsxH5Ke3qAaWg5YKrkRwkExd91Q0RdJGplLAiXPiYA/edit?usp=sharing): En este enlace encontrarás algunas descripciones y ejemplos de qué es un valor fuera del alcance del análisis. (🔈[versión en audio](https://drive.google.com/file/d/1Z963-z4MCiRRjt5RZF75oH_CH1BqDNrO/view?usp=drive_link)) </li><li>📹 [Cómo utilizar EXCEPT para selecionar variables](https://www.loom.com/share/2fa18d5cfd33403faaa794a2b08671f1?sid=2d16f30b-a26c-4d3c-bfd8-88ba7c664f25)</li><li>💡 Los datos fuera de alcance, como vimos en el proyecto anterior, pueden hacer referencia a filas de una base de datos o también a variables. ¿Hay alguna variable que creas que no se utilizará en este análisis y quizás podríamos excluirla, como `key` y `mode` u otra variable que tenga una gran cantidad de valores nulos?</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 🔵 Identificar y manejar datos discrepantes en variables categóricas | Utilizar comandos de manejo de string, como LIKE o REGEXP                                                      | <ul><li>Debes usar el comando para ajustar las variables de tipo string al menos una vez, en este objetivo pueden trabajar en la misma tabla.</li><ul>                                                                                                                                                                                                                                                                                  | <ul><li>📹 [Cómo utilizar comandos LIKE y REGEXP](https://www.loom.com/share/3f7bb1362d5947ecb8c83e6f0690a4a5?sid=76f52b28-efb3-4991-b4c1-bd288bd4e805)</li><li>📄 [Documentación Google sobre String Functions](https://cloud.google.com/bigquery/docs/reference/standard-sql/string_functions)</li><li>📄 [Concepto variables categóricas](https://docs.google.com/document/d/1BIqa7xR0JNadM9kQExypo3plnwrNia92zCuxkPuMj5A/edit?usp=sharing)</li><li>🔈 [Concepto variables categóricas  (versión en audio)](https://drive.google.com/file/d/13gQ6Ni9FUfDmi5bjQivjeKj04fAI8Gl2/view?usp=drive_link)</li><li>📹. [Video sobre tipos de variables](https://www.loom.com/share/afa56686810e46309761bc889364b2d9?sid=cabf587c-7ba1-4419-b501-32c98a73e191)</li><li>🧑‍💻 Notarás que algunos nombres de música y artistas tienen símbolos raros. Trabajar con cadenas suele suponernos algo de trabajo extra, siempre tenemos que buscar la secuencia REGEX que nos ayude a gestionar estos datos, por lo que sería un buen momento para utilizar nuestros recursos de IA. escribe al ChatGPT "¿Cómo eliminar caracteres especiales de una cadena (string) en BigQuery?"</li><ul> |
| 🔵 Identificar y manejar datos discrepantes en variables numéricas   | Utilizar comandos como MAX, MIN y AVG para identificar valores discrepantes en variables numéricas             | <ul><li>Debes analizar las variables numéricas de al menos una tabla, por ejemplo, una consulta los de `track_technical_info`, la otra de track_in_competition y ambas de track_in_spotify.</li><ul>                                                                                                                                                                                                                                    | <ul><li>📹[Identificar valores discrepantes en variables numéricas con MAX, MIN y AVG](https://www.loom.com/share/4fb40d01dddf4e3cbf981029ed08613a?sid=5e46b20b-5ea4-47c4-a808-99969a369431)</li><li>📄 [Concepto variables numéricas](https://docs.google.com/document/d/1oTn46djgWYlhcY9_Ak9H2edY2_rR8gpJco66njPwkCc/edit?usp=sharing)</li><li>💡 Notarás que la variable streams contiene datos no numéricos, por lo que no podemos hacer AVG, este error puede haber causado que esta variable que debería ser INTEGER esté como STRING y es por eso que necesitamos cambiar el tipo de datos. Puedes avanzar a la siguiente meta, cambiar el tipo de dato y luego volver.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 🔵 Comprobar y cambiar tipo de dato                                  | Utilizar CAST para modificar el tipo de dato                                                                   | <ul><li>Una debe poder cambiar el tipo de dato de la variable streams y la otra debe brindar soporte. En el próximo objetivo, cuando creemos una nueva variable de fecha, tendrás la oportunidad de poner en práctica el comando CAST nuevamente.</li><ul>                                                                                                                                                                              | <ul><li>🚨 **Altamente recomendado**: 📄[Tipos de datos en SQL](https://docs.google.com/document/d/1z0evGu8JtjDPuFlH1pkbqYR6scRwukPfwWKJ-KmZRmI/edit?usp=sharing)</li><li>📹 [Tipos de datos en SQL](https://www.youtube.com/watch?v=A1tZ-d2uxws)</li><li>📹 [Cambiar tipo de dato con CAST](https://www.loom.com/share/dfca15dd59084f83a1343eb476c71e96?sid=5ffd1896-5cf2-4ad5-88dc-741152483c45)</li><li>💡 Encontrarás una variable de texto que no puede ser convertida. Evalúa si no es mejor borrar esta variable. Tip: usa NOT LIKE para filtrar los datos de texto de la variable streams.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 🔵 Crear nuevas variables                                            | Crear una variable de fecha released y una de participación total en playlists                                 | <ul><li>Ambas deben poder crear una nueva variable, para que la que no tuvo la oportunidad de usar el comando CAST pueda poner en práctica este comando, debe crear la variable de fecha de lanzamiento completa usando concat y cast para que la fecha quede en el formato aaaa-mm-dd</li><ul>                                                                                                                                         | <ul><li>🚨 **Altamente recomendado**: [Concepto crear nuevas variables](https://docs.google.com/document/d/1yp5MVB8iirIbYwptscJ4YrjsY4Bnd8mrsDB75Onun2s/edit?usp=sharing): en este enlace encontrarás una pequeña descripción sobre este concepto. (🔈[versión en audio](https://drive.google.com/file/d/15P7Gp4_F_EOasIgW7SUhK8bf0MIDD6K8/view?usp=drive_link))</li><li> 📹 [Como crear nuevas variables con CONCAT y operaciones matemáticas](https://www.loom.com/share/65e15aa134c545bc9cfdc6b88bc2ae78?sid=46988f46-bcc0-471f-b89e-55c7ffe953b5)</li><li>💡 Recuerda que hay diferencia cuando estamos utilizando operaciones matemáticas en SQL, cuando utilizamos el comando SUM se suma la columna y cuando queremos sumar los valores por fila podemos utilizar los operadores matemáticos como +.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 🔵 Unir tablas                                                       | Unir tablas utilizando LEFT JOIN                                                                               | <ul><li>Antes de unir las tablas, debes crear la vista (view) con los datos limpios de cada tabla.Y al unir tablas usando LEFT JOIN, debes hacer el JOIN de una tabla.</li><ul>                                                                                                                                                                                                                                                         | <ul><li>🚨 **Altamente recomendado**:📹 [Tipos de JOIN en SQL](https://www.youtube.com/watch?v=HDBdAIcqJQo)</li><li>📹 [Diferencia entre VIEW y CREATE TABLE](https://www.loom.com/share/97dbe237b9de459baa4d788f8bb44502?sid=e2168d4f-a8ff-44e4-b3f0-55e72596350a)</li><li>💡 Antes unir las tablas crea views con los datos limpios de cada tabla y haz el left join de las views.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 🔵 Construir tablas auxiliares                                       | Utilizar el comando WITH para crear una tabla temporal para calcular el total de canciones por artista solista | <ul><li>Una debe crear la tabla temporal con WITH y la otra auxiliar. En la próxima oportunidad que se necesite  crear la tabla temporal con WITH dentro de este hito, la que aún no haya implementado esta técnica deberá hacerlo.</li><ul>                                                                                                                                                                                            | <ul><li>📹[Cómo utilizar comando WITH y para qué sirve](https://www.loom.com/share/8e2f6f70db214e2484af45375539d8e9?sid=222c7e6d-1ff5-430a-ab28-64c025f34ebf)</li><li>💡 Calcular el total de canciones para el artista solo, es decir, cuando no hay más  artistas creadores de la canción.</li><ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

🤸 Sólo por diversión:

¿Piensas en una forma de hacer todos estos pasos en una misma consulta
después de importadas las tablas?

### 🟪 Paso 2. Hacer un análisis exploratorio

⌛ Rango de tiempo estimado: **De 8 a 12 horas**

El análisis exploratorio de datos (AED) es una fase fundamental en la
comprensión de conjuntos de datos, y las herramientas como Power BI y
BigQuery desempeñan un papel crucial en este proceso. Power BI, una
plataforma de visualización de datos de Microsoft, permite crear paneles
interactivos y gráficos dinámicos que facilitan la exploración y
comprensión de los datos. Al aprovechar las capacidades de Power BI, los
usuarios finales pueden identificar patrones, tendencias y anomalías en
los datos de manera efectiva.

BigQuery, por otro lado, es una potente herramienta de almacenamiento y
análisis de datos de Google Cloud. Con su capacidad para manejar grandes
volúmenes de datos y realizar consultas en lenguaje SQL de alto
rendimiento, BigQuery es esencial para explorar datos a gran escala. Los
analistas pueden utilizar BigQuery para realizar consultas avanzadas y
calcular estadísticas esenciales que proporcionan información valiosa
sobre el conjunto de datos.

Combinar Power BI y BigQuery brinda una solución integral para el
análisis exploratorio. Los datos pueden ser extraídos y transformados en
BigQuery, y luego visualizados y explorados en profundidad utilizando
Power BI. Esta combinación permite desentrañar insights significativos,
identificar relaciones, y tomar decisiones informadas basadas en un
análisis profundo de los datos. En resumen, el análisis exploratorio se
beneficia enormemente de la sinergia entre Power BI y BigQuery,
facilitando la obtención de información valiosa a partir de datos
complejos y extensos.

| Meta                                                               | Objetivo                                                                                                    | Objetivo Individual                                                                                                                                                                                 | Recurso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟣 Agrupar datos según variables categóricas                       | Agrupar variables categóricas a través de tablas en Power BI                                                | <ul><li>Debes agrupar al menos una variable categórica que pueden ser cantidad de tracks por artista, cantidad de tracks por `released_year` etc.</li><ul>                                          | <ul><li>🚨 **Altamente recomendado**: [Concepto variables categóricas](https://docs.google.com/document/d/1BIqa7xR0JNadM9kQExypo3plnwrNia92zCuxkPuMj5A/edit?usp=sharing): En este documento encontrará la descripción y ejemplos de este concepto. (🔈 [versión en audio](https://drive.google.com/file/d/13gQ6Ni9FUfDmi5bjQivjeKj04fAI8Gl2/view?usp=drive_link))</li> <li>📹 [Video sobre tipos de variables](https://www.loom.com/share/afa56686810e46309761bc889364b2d9?sid=cabf587c-7ba1-4419-b501-32c98a73e191): En este video verá una pequeña descripción de variables categóricas y numéricas.</li> <li>ℹ️ [Link para download de Power BI Desktop](https://www.microsoft.com/en-us/download/details.aspx?id=58494)</li><li>📹 [Video download y instalación de Power BI](https://www.youtube.com/watch?v=8lkZKeNdLWU)</li><li>📹 [Cómo empezar con Power BI](https://www.youtube.com/watch?v=L74STt9hnu4)</li><li>📹 [Conectar datos de bigquery a  Power BI](https://www.loom.com/share/eebef73c37fc47bda21576f0d300841e)</li><li>📹 [Cómo crear una tabla matrix en Power BI](https://www.youtube.com/watch?v=m2N7SXEj_9w)</li><li>💡 Visualiza las variables categóricas como artist y fíjate si hay alguno que destaque, utiliza los años para ver estos datos por año</li><ul>|
| 🟣 Visualizar las variables categóricas                            | A través de gráficos de barras, visualizar las variables categóricas                                        | <ul><li>Debes crear al menos un gráfico de barras para visualizar las variables agrupadas anteriormente.</li><ul>                                                                                   | <ul><li>📹 [Cómo crear gráficos en Power BI](https://www.youtube.com/watch?v=gNEgfp_HRWM)</li><li>📹 [Gráficos de barras o columnas en Power BI](https://www.youtube.com/watch?v=m7_6SHPovvY)</li><ul>  |
| 🟣 Aplicar medidas de tendencia central                            | A través de tablas en Power BI, calcular las medidas de tendencia central (Promedio y Mediana)              | <ul><li>Debes calcular las medidas de tendencia central (promedio y mediana) al menos para una variable. Una puede analizar `streams` y otra el total de veces que aparece en una playlist</li><ul> | <ul><li>🚨 Altamente recomendado:  📄 [Concepto estadísticas descriptivas](https://docs.google.com/document/d/13xu7cf5LcUN2CE58qwyZoNrhS713Ci0tI9S1odeapig/edit?usp=sharing)</li><li>[🔈 Concepto estadísticas descriptivas (versión en audio)](https://drive.google.com/file/d/1v6xdtWci7rYtMKibGowl9OxBArT3CVnI/view?usp=drive_link)</li><li>📄 [Concepto medidas de tendencia central](https://docs.google.com/document/d/1Ly_7zLmUjcczqCkQLQwvDYEGyRLtSNQLVi3w8CIh8sI/edit?usp=sharing)</li><li>[🔈 Concepto medidas de tendencia central (versión en audio)](https://drive.google.com/file/d/1viy63m4n8Gn9aYHNuLJpd8RzFrTNnlw2/view?usp=drive_link)</li><li>📹 [Cómo crear una tabla con promedio y mediana en Power B](https://www.loom.com/share/67c7d22e0898482683654f1f6c53e41a?sid=e25d3fda-ee49-4d94-ab44-099785f33a9c)</li><li>💡 Observa el comportamiento de las variables streams y total presencia en playlists</li><ul>|
| 🟣 Aplicar medidas de dispersión                                   | Calcular medidas de dispersión a través de la desviación estándar                                           | <ul><li>Debes calcular para la variable que estaba trabajando anteriormente.</li><li>Muy importante também, además de calcular, es compartir las conclusiones</li><ul>                              | <ul><li>📄 [Concepto Medidas de dispersión](https://docs.google.com/document/d/1a5N-8fV3X8pnhdRyXVcG293zJn2eL16KBhy-7NCExRI/edit?usp=sharing)</li><li>📄 [Concepto desviación estándar](https://docs.google.com/document/d/17OhF8RkTQxgwbDZtBphXd-nd9hXDrkylHGaF7ylezPo/edit?usp=sharing)</li><li>📹 [Desviación estándar en Power BI](https://www.loom.com/share/551494bd11124dd8ad4ca751ad47ab91)</li><li>💡 Calcula la desviación estándar de streams y otras variables continuas, usa ChatGPT para ayudarte en la interpretación de los valores obtenidos.</li><ul>|
| 🟣 Calcular correlación entre variables                            | Calcular correlación en BigQuery a través de CORR                                                           | <ul><li>Debes calcular la correlación entre dos variables continuas. Una puede calcular para `streams` y `playlists` y otra para `streams` y `danceability`</li><ul>                                | <ul><li>📄 [Concepto correlación de Pearson](https://docs.google.com/document/d/1HvuENDveavTmlRtSGk3Gv3LqSPNbRPWNYgOU8e3CxTM/edit?usp=sharing)</li><li>📹 [Cómo calcular correlación en BigQuery](https://www.loom.com/share/9bf3e48cf57d48ca9c81c2c19562dedf?sid=c4c8a611-d0ae-4c4f-a2f5-200ce48746f4)</li><li>💡 Comprender el cálculo de correlación nos ayudará  más adelante en la validación de las hipótesis</li><ul>  |

🤸 Sólo por diversión:

¿Piensas en algún gráfico que podría ayudar a ver y entender la relación
entre dos variables?

### 🟥 Paso 3. Aplicar técnica de análisis

⌛ **Rango de tiempo estimado: De 8 a 12 horas**

La validación de hipótesis es un proceso crucial en la estadística y la
investigación científica. Se refiere a la evaluación de afirmaciones o
suposiciones acerca de una población o un fenómeno, a través del examen
de datos recopilados de una muestra de esa población. En esencia, se
trata de determinar si las suposiciones hechas sobre una población son
respaldadas por la evidencia empírica proporcionada por los datos.

En este hito, buscamos responder las hipótesis planteadas por la
discográfica:

* Las canciones con un mayor BPM (Beats Por Minuto) tienen más éxito en
  términos de streams en Spotify
* Las canciones más populares en el ranking de Spotify también tienen un
  comportamiento similar en otras plataformas como Deezer
* La presencia de una canción en un mayor número de playlists se
  relaciona con un mayor número de streams
* Los artistas con un mayor número de canciones en Spotify tienen más
  streams
* Las características de la música influyen en el éxito en términos de
  streams en Spotify

| Meta                    | Objetivo                                                                                                                             | Objetivo individual                                                                                                                                                                                                           | Recurso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🔴 Validar hipótesis    | Validar las hipótesis levantadas a través de la correlación y scatter plot                                                           | <ul><li>Debes calcular la correlación de las variables de una hipótesis y visualizar estos datos a través de un scatter plot y discutir los resultados si existe o no una correlación y si la hipótesis es verdadera</li><ul> | <ul><li>💡 Para validar las hipótesis planteadas podemos analizar la relación entre las variables de la hipótesis a través de la correlación, que ya hemos visto como calcular en BigQuery y visualizarlas a través de un gráfico scatter plot en Power BI para comprender y analizar lo que hace una canción exitosa. </li><li>📹 [Como crear un scatter plot en Power BI](https://www.loom.com/share/91adb4a427124fde8013d305a3d6111c?sid=114cf627-5d35-42d4-851b-147600e84e43)</li><ul> |

🤸 Sólo por diversión:

¿Crees que se podría validar estas hipótesis por grupos menores,
como por ejemplo, las canciones con fecha de lanzamiento en 2023?

¿Piensas en alguna otra hipótesis que puedas analizar?

### 🟧 Paso 4. Resumir información en un dashboard o reporte

⌛ **Rango de tiempo estimado: De 8 a 12 horas**

Power BI se ha convertido en una de las soluciones líderes en el mercado
para la creación de informes interactivos y paneles de control que
permiten a las organizaciones tomar decisiones informadas. Con Power BI,
puedes conectar y transformar datos de diversas fuentes, como bases de
datos, hojas de cálculo y servicios en la nube, y luego crear
visualizaciones impactantes y dinámicas.

En resumen, Power BI es una herramienta esencial para cualquier empresa
o profesional que desee convertir datos en información significativa,
tomar decisiones estratégicas y comunicar de manera efectiva los
insights a través de visualizaciones atractivas y accesibles.

En este hito, trabajaremos con Power BI también para crear un dashboard
organizado que genere información al negocio. Este es el momento de
organizar tus gráficos creados en el paso de análisis exploratorio y
crear un ambiente amigable para la compañía discográfica.

| Meta                                                           | Objetivo                                                                  | Objetivo individual                                                                                                                                                                                                             | Recurso                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟠 Representar datos a través de tabla resumen o scorecards    | Crear scorecards para los números generales de la base de datos           | <ul><li>Debes crear al menos una tarjeta de resultados (scorecards)</li><ul>                                                                                                                                                    | <ul><li>📹 [Como crear scorecards en Power BI](https://www.loom.com/share/a8b4a6e43317415abc02049f7923e785?sid=b69d56f7-6f63-4e18-81bc-71abc1aff667)</li><li>💡 Busque contenidos en YouTube para sacar ideas de como armar su dashboard en Power BI </li><li>🧑‍💻 Quieres aprender un poco más de herramientas AI, vea este video de Copilot en PowerBI</li><ul> |
| 🟠 Representar datos a través de gráficos simples              | Representar los datos a través de gráficos de barras y líneas             | <ul><li>Cada una ya ha hecho este ejercicio anteriormente en la habilidad de Análisis Exploratorio, ahora como dupla deben elegir qué gráficos utilizar en su dashboard y organízalo</li><ul>                                   | <ul><li>💡 Crea nuevas páginas en Power BI para organizar tus datos. Puedes hacer clic con el botón derecho en la pestaña que no quieres dejar visible en tu dashboard y esconderla (hide), así no necesitas borrar ninguna página y puedes dejar tu análisis exploratorio guardado.</li><ul>                                                                   |
| 🟠 Representar datos a través de gráficos o visuales avanzados | Representar datos a través de scatter plot                                | <ul><li>Cada una ya ha hecho este ejercicio anteriormente en la habilidad de Análisis Exploratorio, ahora como dupla deben elegir qué gráficos utilizar en su dashboard y organízalo para que explique los resultados obtenidos | <ul><li>💡 Considera incluir el gráfico scatter plot para representar tus resultados.</li><ul>                                                                                                                                                                                                                                                                  |
| 🟠 Aplicar opciones de filtros para manejo e interacción       | Incluir filtros para visualizar los resultados por categorías y por fecha | <ul><li>Incluir una página donde se pueda visualizar los datos generales por filtros. Debes incluir un filtro, pueden ser filtro de fecha, filtro de categoría, etc.</li><ul>                                                   | <ul><li>📹 [Cómo incluir filtros en Power BI](https://www.loom.com/share/bcd20fecbf2b4298bd1419648189bc3e?sid=74ced7af-c3bc-4844-8b26-8e46732a8adc).</li><li>💡 Incluye filtros para que podamos visualizar estos datos en diferentes perspectivas</li><ul>                                                                                                    |

🤸 Sólo por diversión:

¿Piensas en otros gráficos que se podrían utilizar para construir tu dashboard?

### 🟩 Paso 5. Presentar resultados

⌛ **Rango de tiempo estimado: De 8 a 12 horas**

Tanto Google Slides como Power BI son herramientas valiosas para
presentar datos en una presentación de negocios. Google Slides es ideal
para presentaciones visuales y concisas, mientras que Power BI es una
opción poderosa para analizar y explorar datos de manera interactiva.
Elige la herramienta que mejor se adapte a tus necesidades y audiencia,
y crea una presentación impactante que respalde tus argumentos y ayude a
tomar decisiones informadas.

En este hito, puedes elegir presentar solamente a través de Google
Slides o mezclar con tu dashboard de Power BI en presentación.

| Meta                                                       | Objetivo                                                                               | Objetivo individual                                                                                                                                                             | Recurso                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🟢 seleccionar gráficos e información relevante            | Resumir información para una presentación de 5 minutos                                 | <ul><li>En este momento deben ponerse de acuerdo sobre que gráficos deben presentar, pues la presentación que crearán en conjunto debe ser presentada individualmente.</li><ul> | <ul><li> 🚨 **Altamente recomendado**: 📄 [Concepto presentar resultados](https://docs.google.com/document/d/10Xabbxk7WxojFAdncs3YSc4wSCLihw0LUOOqxijGdMc/edit?usp=sharing) </li><li>📹 [Que es Data Storytelling](https://www.youtube.com/watch?v=NDs2BXgvzPc). </li><li>📹 Vea en este video [diferentes formas de presentar una misma información](https://www.youtube.com/watch?v=2vWT6hmnVVg). </li><ul>                                                                   |
| 🟢 crear una presentación                                  | Crear una presentación de slides que te guíe y presente los resultados más importantes | <ul><li>Crear la presentación de slides en conjunto.</li><ul>                                                                                                                   | <ul><li>📹 [Video sobre como crear presentaciones en Google Slides](https://www.youtube.com/watch?v=T8Fs-zkIX3I) </li><li>📹 [Compartir presentación para trabajar en conjunto](https://www.loom.com/share/3220709262c142d4a0214cfc09856dcc?sid=b00df098-70e9-4a2a-89c7-e68b265ed588).</li><li> 💡 Crea una presentación que deje ambas confortables para hacer su video de presentación de los resultados.</li><ul> |
| 🟢 presentar resultados con conclusiones y recomendaciones | Grabar un video de máximo 5 minutos explicando sus conclusiones y recomendaciones      | <ul><li>Debes grabar su video individualmente, pero utilizando los recursos que hicieron en conjunto.</li><ul>                                                                  | <ul><li>📄 [Artículo sobre presentar datos](https://apolitical.co/solution-articles/es/presentar-datos-5-consejos-hacer-datos-comprensibles) </li><li>📄 [Artículo sobre presentar datos](https://vilmanunez.com/como-hacer-una-presentacion-de-resultados/) </li><li>📹 [Video tips para una presentación](https://www.youtube.com/watch?v=MPW6Ak3dxWc&t=157s) </li><li>💡 Aunque han hecho el trabajo juntos y utilizarán los mismos recursos, esto no significa que la forma en que presenten los resultados deba ser la misma. Cada persona puede presentar los resultados a su manera, según su personalidad e individualidad.</li><ul>                        |

🤸 Sólo por diversión:
¿Puedes armar una presentación como si estuvieras presentando al representante
de la compañía discográfica y al nuevo artista que quiere lanzarse en el mundo
musical?

ℹ️ **Al finalizar el proyecto comparta el enlace/liga/link público de
una carpeta de Google Drive conteniendo un archivo con las consultas
(queries) utilizadas y el archivo de Power BI en el que trabajaste el
proyecto, y donde se pueden ver claramente todos los pasos que seguiste
y los resultados que obtuviste. Como este es un proyecto en dupla, solo
el video debe ser individual, los archivos compartidos pueden ser los mismos.**

## 6. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con tu coach, asegúrate de que tu proyecto:

* [] Hiciste la limpieza de los datos y uniste las tablas en BigQuery.
* [] Generaste tablas, gráficos, cálculos de cuartil y correlación durante
tu análisis exploratorio.
* [] Aplicaste la técnica de segmentación y de validación de hipótesis
* [] Conectaste la base de datos limpia a Power BI para crear un dashboard
informativo.
* [] Creaste una presentación simple usando Google Slides, para guiarte en
tu presentación en video.
* [] Grabaste y compartiste un video de máximo 5 minutos, explicando tus
conclusiones, hallazgos y recomendaciones para el negocio. Usa Loom
para grabarte a ti misma presentando y mostrando la pantalla con tu
presentación.
* [] Compartiste el enlace/liga/link público de una carpeta de Google Drive
conteniendo un archivo con las consultas (queries) utilizadas y el
archivo de Power BI en el que trabajaste el proyecto, y donde se
pueden ver claramente todos los pasos que seguiste y los resultados
que obtuviste. Como este es un proyecto en dupla, solo el video debe
ser individual, los archivos compartidos pueden ser los mismos.

## 7. Self review

A continuación se muestran una tabla con las habilidades y objetivos de aprendizaje.
Uso la columna `Self review` para evaluar si haz alcanzado o no cada objetivo.

| Habilidades                                          | Objetivos de aprendizaje                                                 |Self review|
| ---------------------------------------------------- | -------------------------------------------------------------------- |---|
| 🟦 **Procesar y preparar la base de datos**          | 🔵 Conectar/importar datos a herramientas                            |<ul><li>👍 ¿Creaste un project, un dataset y subiste las tablas al ambiente de BigQuery?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Identificar y manejar valores nulos                               |<ul><li>👍 ¿Has identificado nulos a través de comandos SQL?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Identificar y manejar valores duplicados                          |<ul><li>👍 ¿Has identificado duplicados a través de comandos SQL?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Identificar y manejar datos fuera del alcance del análisis        |<ul><li>👍 ¿Has manejado datos fuera del alcance a través de comandos SQL?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Identificar y manejar datos discrepantes en variables categóricas |<ul><li>👍 ¿Has identificado y manejado datos discrepantes en variables categóricas través de comandos SQL?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Identificar y manejar datos discrepantes en variables numéricas   |<ul><li>👍 ¿Has identificado y manejado datos discrepantes en variables numéricas a través de comandos SQL?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Comprobar y cambiar tipo de dato                                  |<ul><li>👍 ¿Has cambiado el tipo de dato a través de comandos SQL?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Crear nuevas variables                                            |<ul><li>👍 ¿Has creado nuevas variables a través de comandos SQL?</li> <li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Unir tablas                                                       |<ul><li>👍 ¿Has utilizado JOINS para unir tablas?</li> <li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🔵 Construir tablas auxiliares                                       |<ul><li>👍 ¿Has utilizado la estructura de tablas temporales WITH?</li> <li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
| 🟪 **Hacer un análisis exploratorio**                | 🟣 Agrupar datos según variables categóricas                         |<ul><li>👍 ¿Has agrupado al menos una variable categórica y analizado su resultado en perspectiva a otra variable numérica?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🟣 Visualizar las variables categóricas                              |<ul><li>👍 ¿Has creado al menos un gráfico de barras para el resultado de la meta anterior?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🟣 Aplicar medidas de tendencia central                              |<ul><li>👍 ¿Has aplicado al menos una vez las medidas de tendencia central para analizar una variable (y lo entendiste/interpretaste)?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🟣 Aplicar medidas de dispersión                                     |<ul><li>👍 ¿Has calculado al menos una vez la desviación estándar (y lo entendiste/interpretaste)?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🟣 Calcular correlación entre variables                              |<ul><li>👍 ¿Has calculado la correlación entre dos variables al menos una vez (y lo entendiste/interpretaste)?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
| 🟥 **Aplicar técnica de análisis**                   | 🔴 Validar hipótesis                                                 |<ul><li>👍 ¿Has calculado la correlación y creado un scatter plot para validar al menos una hipótesis (y lo entendiste/interpretaste)?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
| 🟧 **Resumir información en un dashboard o reporte** | 🟠 Representar datos a través de tabla resumen o scorecards          |<ul><li>👍 ¿Has creado al menos una tabla resumen o una tarjeta de resultados para visualizar los datos generales de la base de datos?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🟠 Representar datos a través de gráficos simples                    |<ul><li>👍 ¿Has creado al menos un gráfico de barras o de líneas para representar los resultados y organizado esta información en un dashboard?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🟠 Representar datos a través de gráficos o visuales avanzados       |<ul><li>👍 Has creado al menos un scatter plot?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🟠 Aplicar opciones de filtros para manejo e interacción             |<ul><li>👍 ¿Has creado al menos un botón de filtro para visualizar los dados de distintas formas?</li><li>👎**Veto**: Si no has hecho este proceso al menos una vez y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
| 🟩 **Presentar Resultados**                          | 🟢 Seleccionar gráficos e información relevante                      |<ul><li>👍 ¿Has discutido y seleccionado la información relevante para la presentación en conjunto con tu dupla?</li><li>👎**Veto**: Si no has hecho este proceso de discusión con tu dupla y solo has mirado a tu compañera hacer la selección de información, no has logrado esta meta.</li></ul>|
|                                                      | 🟢 Crear una presentación                                            |<ul><li>👍 ¿Has creado una presentación en conjunto con tu dupla?</li><li>👎**Veto**: Si no has creado la presentación en conjunto y solo has mirado a tu compañera hacerlo, no has logrado esta meta.</li></ul>|
|                                                      | 🟢 Presentar resultados con conclusiones y recomendaciones           |<ul><li>👍 ¿Has presentado de manera individual los resultados de este proyecto en un video de 5 minutos?</li><li>👎**Veto**: Si no has hecho tu propio video con conclusiones de los análisis realizados, no has logrado esta meta.</li></ul>|

## 8. Objetivos de aprendizaje

> ℹ️ Esta sección será automáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.
