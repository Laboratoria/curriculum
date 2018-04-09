# Metadatos y diccionario de una fuente de datos

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

## Introducción

[![Metadatos](https://embed-ssl.wistia.com/deliveries/a3d246f95402c89335ef538ca5ff1612d5c0319d.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/gt29vbk6tu?wvideo=gt29vbk6tu)

En esta sesión veremos qué son los metadatos y para qué sirven. Además
explicaremos en detalle dos de los componentes que forman parte de los
metadatos: la fuente y el diccionario.

## ¿Qué son los metadatos y para qué sirven?

Los metadatos son todos aquellos elementos adicionales asociados a un conjunto
de datos, que nos ayudan a comprenderlo mejor. Los metadatos tienen información,
entre otros, sobre el formato (texto, base de datos, json, xml entre otros), la
fuente, el diccionario, la licencia de uso e información administrativa como la
fecha de creación, actualización, las transformaciones, número de registros,
etc. de los datos.

Dependiendo del tipo de datos los metadatos pueden tener otra información más
específica. En el caso de las encuestas, por ejemplo, es importante saber la
metodología, la estrategia de muestreo, los supuestos y las validaciones
realizadas.

Los metadatos nos ayudan a responder las siguientes preguntas:

* ¿Qué podemos hacer con los datos?
* ¿Cuáles análisis son válidos?
* ¿Tenemos permiso de utilizar los datos?
* ¿Los datos son confiables?
* ¿Qué limitaciones tienen los datos?

En el caso de las encuestas, una de las preguntas principales es si los datos
son representativos. Por ejemplo, si tenemos los datos de una encuesta sobre la
penetración de internet en Perú y en los metadatos vemos que solo se le preguntó
a personas que viven en Lima, no podemos utilizar estos datos para calcular la
penetración de internet de Perú ya que la muestra no es representativa.

## Elementos relevantes de los metadatos

Ahora vamos a entrar en detalle en dos partes importantes de los metadatos: la
fuente y el diccionario.

### ¿Por qué necesitamos conocer las fuentes de un conjunto de datos?

Así como ocurre con las noticias falsas, muchas veces encontramos visualizaciones
que se basan en datos falsos o en fuentes no confiables.

Es por eso que debemos incluir en nuestras visualizaciones la fuente. Esta es la
evidencia que necesita el usuario final para entender y validar la visualización.

Al saber la fuente y verificar que es relevante le damos un sello de confianza a
nuestro trabajo. En otras palabras, demostramos que no nos estamos inventando
una historia falsa a través de las visualizaciones que creamos.

### ¿Para qué se necesita un diccionario?

Cuando nos enfrentamos a un conjunto de datos, una de las primeras preguntas que
nos debemos hacer es: ¿Qué significa una fila o un registro del conjunto de
datos?. Muchas veces esta información viene como parte de la información de los
metadatos pero en otras ocasiones la debemos inferir al ver los datos y los
nombres de las columnas o atributos.

El problema es que no todas las veces estos nombres son entendibles. Por ejemplo
en el conjunto de datos de la Evaluación Censual de Estudiantes 2015 por
Direcciones Regionales de Educación, tomado del portal de datos abiertos de Perú,
hay una columna con el nombre ´ee: MP´ y por más de que veamos los números no es
posible entender su significado. Para esto existe el diccionario, ya que este
tiene una descripción del significado de cada columna. En este caso el
diccionario, que podemos obtenerlo de la misma página de datos abiertos de Perú,
nos indica que la columna ´ee: MP´ representa el ´error estándar de estimación
de la medida promedio´.

El diccionario también nos puede dar información sobre los valores de una
columna. En unos casos los valores de las columnas son identificadores. Por
ejemplo, en un conjunto de datos de usuarios podemos tener la columna ¨e_civil¨
y los valores ´1´, ´2´ y ´3´ y en el diccionario vemos que la columna es el
estado civil del usuario y que 1 significa soltero/a, 2 casado/a y 3 es otro.

Al utilizar un conjunto de datos para una visualización es recomendable cambiar
el nombre de las columnas o agregar la descripción de la columna en la
herramienta que estamos utilizando para que el usuario final entienda los
gráficos.

Puedes conseguir más información al respecto en la página de Tableau:
[Edición de metadatos y almacenamiento de fuentes de datos](https://www.tableau.com/es-es/learn/tutorials/on-demand/editing-metadata-and-saving-data-sources)
