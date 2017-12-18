# Juego: Agregaciones - El caso del promedio ponderado

* Tipo: `taller`
* Formato: `guiado`
* Duración: `10min`

***
[![El caso del promedio ponderado](https://embed-ssl.wistia.com/deliveries/c0b91a043f5eb2aabe9f6b121bd0bbf7651330bb.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/1zt3i564qa?wvideo=1zt3i564qa)

## Introducción

Cómo vimos en el juego el promedio es lo que le tocaría a cada uno si
distribuyéramos todo por igual, la mediana es el valor central y la moda el
valor más común.

Ahora queremos calcular el promedio del mundo completo y no sólo de un
continente. Tal como aprendimos en el juego el promedio se calcula al dividir la
suma de todos los valores entre la cantidad total de elementos, en este caso
países.

Ahora supongamos que cada uno de los 4 tableros es un continente y quiero sacar
la información del mundo completo. Vamos a hacerlo por 2 métodos:

1. Sumamos todos los promedios y lo dividimos entre 4 porque son 4 continentes.
   El resultado es: 5.72
2. Tomamos la suma de los 4 continentes y lo dividimos entre la cantidad de
   países (o cuenta) de cada continente. El resultado es: 4.89

¿Qué paso? ¿Por qué no da lo mismo? ¿Puedes explicarlo?

## Concepto de promedio ponderado

En este caso no dan lo mismo porque cada continente tiene una cantidad diferente
de países, lo que hace que cada uno tenga diferentes pesos.

El resultado correcto es el segundo, pero que pasa si quisiéramos calcularlo en
base a los promedios que calculamos para cada tablero. En ese caso necesitamos
usar el promedio ponderado.

En el promedio ponderado, no sólo debemos considerar el promedio de cada
continente, sino que necesitamos ajustarlo por el peso que representa ese
continente (en cantidad de países) en el mundo.

Así la fórmula general de promedio ponderado es igual al peso del elemento 1 por
su promedio sumado al peso de cada uno de los elementos multiplicado por su
promedio.

Para nuestro ejemplo, sería 0.3571*4 + 0.1071*10 + 0.25 *4 + 0.2857* 4.88 = 4.89

## Conclusión

Recuerda tener cuidado al realizar promedios sobre data previamente agregada. Al
momento de realizar visualizaciones, es recomendable siempre crear una fórmula
de suma entre cantidades que permita realizar el cálculo correcto cuando se
realicen agregaciones por diferentes dimensiones. Es por eso que en nuestro
ejemplo del tablero crearemos una campo calculado que divida la cantidad de
personas con Internet entre la población total para calcular la penetración de
Internet, en vez de usar el campo dado directamente en la data.
