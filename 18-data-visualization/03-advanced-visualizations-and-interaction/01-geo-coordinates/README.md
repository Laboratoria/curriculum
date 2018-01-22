# Introducción a las coordenadas geográficas

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

[![Introducción a las coordenadas geográficas](https://embed-ssl.wistia.com/deliveries/531217c0af0724426e076571f3a95055d44333c3.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/p9azakzo72?wvideo=p9azakzo72)

## Introducción

Tal y como aprendimos en la lección de Visualizaciones geográficas. Todos los
puntos geográficos de la tierra, poseen 2 referencias para poder ubicarlo en un
mapa. Estas referencias se conocen como coordenadas geográficas y son la Latitud
y Longitud.

## Proyecciones cartográficas

Cómo el mundo es una esfera y no un plano, podemos afirmar que todos los mapas
que hemos visto alguna vez están errados, pero igualmente siguen siendo de mucha
utilidad.
Este error ocurre, porque todos los mapas son una proyección a 2 dimensiones de
un objeto que tiene 3 dimensiones. A esta representación en 2 dimensiones se le
conocen como proyecciones cartográficas.  Sé que suena complejo, pero es un poco
más fácil de lo que parece.

Veremos un video que te explicará en detalle las proyecciones cartográficas:
[Las proyecciones cartográficas](https://www.youtube.com/watch?v=Kj5VVjLh_xo&t=5s)

## Mapas en Tableau

Tableau usa una única proyección, que es la más común, para representar sus
mapas y si bien permite graficar con exactitud los puntos si se proveen la
longitud y la latitud en escala decimal, también permite graficar mapas si sólo
tenemos el nombre del país, la región o la ciudad. Para ello, Tableau usa muchos
socios de información que le indican los nombres de los países, sus regiones y
sus ciudades, permitiendo que el software coloque automáticamente la longitud y
la latitud en el punto central de la capital.

Cómo los países y las ciudades también son dinámicos, por ejemplo Sudán del Sur
no existía hace 15 años, Tableau trata de mantener la información actualizada a
través de varios socios, pero pudiera llegar a tener información faltante. Si
quieres saber más sobre estos detalles te invitamos a leer más información en:
[Acerca de los mapas de Tableau](https://www.tableau.com/es-es/mapdata)

## Formas geoespaciales en Tableau

Todas las áreas como países y regiones, no son más que formas geoespaciales que
están conformadas por muchos puntos de latitud y longitud y que al unirlos
forman el área o más formalmente un polígono espacial. Cómo mencionamos
anteriormente Tableau tiene información gracias a sus socios de las áreas más
comunes, como la forma de los países o los estados. Sin embargo, y aunque no lo
vamos a estudiar ahora, es bueno que sepas que también puedes graficar tus
propias áreas si tienes la versión paga de este software.

En caso de que llegues a necesitarlo en el futuro, puedes consultar este
artículo: [Aborde su análisis geoespacial con facilidad en Tableau 10.2](https://public.tableau.com/es-es/s/blog/2017/03/tackle-your-geospatial-analysis-ease-tableau-102)

## Consideraciones al usar otras tecnologías

Existen muchas tecnologías, incluidas las de código de abierto, que te
permitirán crear mapas y tus propias áreas. Sólo que es importante entender que
si quieres sacar provecho a toda la flexibilidad que estas tecnologías te dan,
deberás aprender más sobre los conceptos relacionados a la data geoespacial.
Tableau no te da tanta flexibilidad cómo estás tecnologías, pero te simplifica
muchos de los conceptos que están por detrás. Así que si decides usar las
librerías de R, Python o JavaScript, te recomendamos estudiar al menos estos
conceptos:

* Cambio en las unidades de las coordenadas geográficas de Radianes a angulos y
  a sistema decimal.
* Trabajo con archivos que contienen estructuras de polígonos espaciales o
  extensión .shp
* Trabajo con el sistema referencial de coordenadas o CRS por sus siglas en
  inglés.
* Cálculo de Distancia entre 2 puntos considerando que a lo largo de la
  superficie del globo, la latitud y la longitud no son unidades de medición
  uniformes, ya que a medida que los meridianos convergen hacia los polos, la
  distancia que representa un grado de longitud se reduce a cero.

Además te recomendamos buscar el CRS adecuado para tu visualización en la
siguiente referencia:[spatial reference list](http://spatialreference.org/ref/)

En el futuro probablemente organizaremos un curso sólo dedicado a este tema.
