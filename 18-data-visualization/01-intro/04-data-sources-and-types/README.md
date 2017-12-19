# Fuentes y tipos de datos

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

[![Fuentes y tipos de datos](https://embed-ssl.wistia.com/deliveries/d9be7c444a3052c50cbd20c18262333be25ab70c.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/n1rb7rnv5v?wvideo=n1rb7rnv5v)

## Introducción

Para poder crear visualizaciones necesitamos data con la que podamos trabajar.
Afortunadamente hoy en día existen muchas fuentes de información que podrás usar
para crear tus proyectos de data.

En esta lección te explicaremos que fuentes de data existen, de que tipo son,
para que puedas inspirarte y crear muy pronto tus propias visualizaciones.

## Categorización de las fuentes de data

Hay muchas maneras de clasificar los tipos de data. En esta lección explicaremos
4 formas de clasificar las fuentes de datos:

* Por tipo de Acceso a las fuentes
* Por tamaño de la data
* Por Nivel de Agregación
* Por Uso de la Data

## Espectro de las fuentes de data

### Por tipo de acceso

Existen muchas fuentes de información y de acuerdo al Instituto de Data
Abierta(ODI por sus siglas en inglés) hay 5 espectros de data:

* Acceso Interno: que corresponde a toda la información que reside dentro de los
  sistemas corporativos de las empresas.
  Las personas que usan esta data tienen acceso a ella bajo las condiciones que
  se establecen en el contrato laboral y las políticas internas de la empresa.
  Un ejemplo claro de está información son los reportes de venta de la empresa.

* Acceso Específico: que corresponde a toda la información que reside dentro de
  los sistemas corporativos de una empresa, a los cuales los proveedores de
  ellos tienen acceso.
  Las personas que usan esta data tienen acceso a ella bajo contratos directos.
  Un ejemplo de está información se da entre las cadenas de ventas como Saga
  Falabella o Walmart y sus proveedores respecto a los niveles de inventario de
  sus productos.

* Acceso Grupal: que corresponde a toda la información que reside dentro de una
  institución específica pero puede ser accedida mediante autenticación.
  Ejemplo de ello son los proveedores de datos o las revistas técnicas de
  medicinas.

* Acceso Público: que corresponde a toda la información que posee una institución
  pero que puede ser accedida por todo el mundo según ciertas condiciones de
  usuario. El mejor ejemplo son las redes sociales.

* Cualquier: que corresponde a toda la información pública y sin acceso
  restringido. Ejemplo de esto son los horarios de autobus y varias de las datas
  abiertas de organismos internacionales.

### Por Tamaño de la data

El tamaño de la data se refiere al volumen o cantidad de registros que existen
dentro de ella. Es importante porque procesar data puede tomar tiempo y para
enormes volúmenes de data las tecnologías tradicionales ya no fueron suficiente
y han surgido nuevas para poder hacerlo realista. Si lo quieres ver desde un
punto de vista muy simple, la pequeña es aquella que puedes trabajar en una hoja
de cálculo tradicional, la data mediana es aquella que puedes trabajar con base
de datos relacionales o SQL y las grandes necesitas de las nuevas tecnologías
para analizarlas. Adicionalmente a medida que crece el volumen de la data, crece
la velocidad en la que se genera y la diversidad de la misma.

### Por Uso de la data

Se refiere a que uso se le dará a la data y puede ser del tipo personal,
comercial o gubernamental. Personal, si yo como persona voy a analizar esa
información porque deseo entenderla, comercial cuando pienso analizarla para
poder vender los resultados o tomar decisiones de negocio con ello y
gubernamental cuando el gobierno usa la data para tomar decisiones de políticas
públicas.

### Por nivel de agregación

El nivel de agregación va de la mayor cantidad de detalle (o granularidad) hasta
el nivel de indicador o resumen por agrupación de dicha información.

Para entenderlo más claramente usaremos el ejemplo de la penetración de internet.

Si tuviera el mayor nivel de detalle debería tener una lista con los nombres de
las 7 billones de personas que viven en el mundo y en que continente, subregión,
país, estado incluso barrio viven y si tienen acceso o no a Internet. Pero como
esa data violaría la privacidad de las personas y la haría muy grande para
analizar, las Naciones Unidas hace agregaciones para hacerla disponible para
nosotros.

Así suma la cantidad de personas que tienen acceso a internet en un país y la
divide entre la cantidad de personas que viven en el país para darnos el número
de penetración de Internet por país y por año que usaremos en nuestro ejemplo.

Esta data tiene ya un nivel de agregación previo para facilitarnos el análisis.

## Escogencia de la fuente de datos

Para escoger que fuente de información deseamos usar, hay que entender el
problema y formular la pregunta.

Luego conviene buscar que fuentes existen que nos permitan responder esas
preguntas y en que rango del espectro se mueven. Recuerda que siempre podrás
combinar fuentes de datos internas con externas o abiertas para darle más valor
a tu análisis.

Algunos ejemplos de sistemas populares que generan data internamente son SAP y
Sales Force, pero hay muchos más. Por otro lado existen diversas instituciones
que proveen data compartida y/o abierta. Cómo lo son las redes sociales y los
organismos internacionales.

Cada vez que tengas una duda de que fuente de datos usar. Pregúntale a Google
probablemente encontraras muchos datos para analizar.

Existen varias fuentes de datos que pueden ser analizadas. De hecho muchas de
las redes sociales como Twitter, Facebook, Instagram poseen APIs para traer
información limitada (y no asociada a usuarios).

De hecho Github también posee un API que permite analizar la tendencia de los
repositorios y los usuarios.
