# Visualizaciones geográficas

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

[![Visualizaciones geográficas](https://embed-ssl.wistia.com/deliveries/870162709b69819490e0c99daa77ff2060e06ca9.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/6sy595ghxu?wvideo=6sy595ghxu)

## Introducción

Se usan cuando nuestra información puede ser conectada con un punto geográfico.
Este tipo de visualizaciones suelen ser muy útiles porque aportan contexto
geopolítico a una serie de datos.

## Introducción a coordenadas geográficas

Todos los puntos geográficos de la tierra, incluso donde estás sentada
actualmente poseen 2 referencias para poder ubicarlo en un mapa. Estas
referencias se conocen como coordenadas geográficas y son la Latitud y Longitud.

Existen varias unidades de medición geográficas, pero la más común en
visualizaciones es la decimal.

La Latitud mide que tan distantes hacia arriba (norte) o hacia abajo (sur) está
un punto respecto al Ecuador. Si usamos el esquema decimal, si te encuentras
sobre el Ecuador exactamente, la Latitud será 0, mientras que si estás al norte
es positiva y si estás al sur es negativa. La latitud define líneas paralelas al
Ecuador.

La Longitud se mide contra un punto ubicado en Londres Inglaterra que se conoce
como Meridiano de Greenwich y es donde se marca la Longitud 0, cualquier punto
ubicado a su izquierda u occidente, será negativo, mientras que cualquier punto
a su derecha será positivo.

En Latinoamérica todas las Longitudes son negativas, porque estamos a la
izquierda de Inglaterra, mientras que las Latitudes de México, Centro América,
el Caribe, Colombia, Venezuela y parte de Ecuador y Brasil son positivas, y el
resto al Sur del Ecuador son negativas.

Para que lo tengas de referencia estas son las coordenadas de las ciudades donde
están las sedes de Laboratoria, primero en Latitud y luego Longitud:

Lima: -12.043333, -77.028333
Santiago de Chile: -33.45, -70.666667
Ciudad de México: 19.433333, -99.133333
Arequipa: -16.383333, -71.533333

Como dato curioso todos los meridianos dividen la tierra en 2, mientras que los
paralelos no, porque a medida que nos alejamos del Ecuador las divisiones se van
haciendo más angostas.

Sobre este tema, hay muchos detalles que se pueden estudiar y que son importantes
si quieres trabajar como cientifica de datos en el futuro con data geográfica.
En el futuro podremos organizar un curso sólo dedicado a este detalle. Mientras
tanto si quieres leer más información, te invitamos a visitar:
[Qué son los sistemas de coordenadas geográficas](http://desktop.arcgis.com/es/arcmap/10.3/guide-books/map-projections/about-geographic-coordinate-systems.htm)

## Mapas de punto

### Cuando se usa

Es ideal usarla cuando tengo varios puntos geográficos relativamente cercanos
entre sí, o si se quieren graficar flujos entre 2 puntos de un mapa (por ejemplo
la ruta de una línea área entre 2 ciudades), aunque también puede ser usado
también en otros contextos, cómo nuestro ejemplo de la penetración de Internet,
si se combina con un gráfico de área.

### Elementos

Obviamente tenemos las coordenadas geográficas de cada punto (Latitud, Longitud)
y podemos incluir  muchas dimensiones adicionales como tamaño, color y forma del
punto para mostrar otras dimensiones de la data.

### Recomendaciones

* Busca que el zoom de la visualización te permita ver todos los puntos de manera
  cómoda. En caso de ser muchos puntos, escoge un mecanismo para filtrar o
  mostrar agrupaciones.
* Busca escoger colores que permitan hacer contraste con el fondo del mapa.
* Si usaras una escala categórica o de secuencia dependerá de la variable que
  quieras representar.

## Mapas de área

### Cuando se usa

Se usa para mostrar tendencias en un área geográfica que puede ser una región,
un país o un estado para mostrar un indicador.

### Elementos

Indirectamente siguen existiendo las longitudes y latitudes, pero en este caso
el software se encarga del conjunto de ellas para mostrar la información por
área. El otro elemento importante es el color para mostrar la variable que
queremos analizar.

### Recomendaciones

* Escoger la escala de colores según la variable a analizar. En el caso de
  mostrar categorías usar colores bien diferenciados, mientras que si son
  variables secuenciales, usar los colores que mejor den la sensación de mayor o
  menor.
* Cuidar no sobrecargar el mapa y si debe usarse mucha información permitir
  colocar y quitar capas de información para que la persona pueda entender
  fácilmente la historia.

## Variaciones

Lo interesante de las dimensiones geográficas es que permiten combinar más
dimensiones en un sólo gráfico, así la realidad de latitud y longitud que nos
pinta un punto (o un área) en un mapa, se puede combinar con cualquiera de los
gráficos que aprendiste anteriormente para poder entender en una sola
visualización más información sobre una serie de data.

Sólo ten en cuenta que cuando combines esas ideas no se pierda el entendimiento,
al final siempre te interesa que tu historia pueda ser entendida por todos.
