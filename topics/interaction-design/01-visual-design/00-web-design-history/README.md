# Historia del diseño visual para web

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Historia breve de diseño visual para web

Para empezar a entender el mundo del diseño web actual, es muy útil entender
cómo llegamos a este punto. Aquí hacemos un breve recorrido por la historia del
diseño web.

### La era oscura de diseño web (1989)

![la era oscura](https://lh4.googleusercontent.com/F8BiT90a9GYamkiMsW9lo-sgJ50sEtYLKSkDjWC-6xO53DCmPM-7HzVqerz4ZbtNFvbc1n2xbl0ymgCSNBNb2Bws17TS-ZtY-kakyMg39FmqVnz_NvGOSexdP0j_EV7We1CaNdhi)

El principio de diseño web fue la era oscura — todas las pantallas eran negras y
en ellas vivían un par de pixeles verdes. El diseño se basaba sólo en símbolos y
tabulación.

### Tablas — el principio (1995)

![tablas](https://lh4.googleusercontent.com/fI81YJ_Ckh63U83cMxKIoIDvhop207GwQFzfwue90gcUJ_O-Z5i4CnbuSlkhpIE-USVS153izfwTb_3V2rwt3f7nk76YDwL0Nx1aLUvQSJPQyCKfcou59ZMeDWTNqrhJKiWY5gFP)

El primer paso hacía el diseño web como ahora lo conocemos eran navegadores que
podían mostrar imágenes. La mejor opción que existía para darle estructura a la
información era el concepto de tablas, que ya existían en HTML. Meter tablas
dentro de tablas y encontrar formas de mezclar células estáticas con células
fluídas era lo más avanzado. No funcionaba a la perfección ya que el propósito
de una tabla era estructurar números pero fue el método más común de diseño web
durante mucho tiempo.

Mantener esas estructuras tan frágiles resultaba muy problemático. Lo que sí,
las tablas daban la posibilidad de alinear elementos verticalmente y definir
elementos tanto en pixeles como en porcentajes. El principal beneficio era que
en ese momento era lo más cercano a lo que después llamaríamos un *grid.* Fue en
esta época que el desarrollo front-end se empezó a poner más de moda.

### JavaScript al rescate (1995)

![Javascript al rescate](https://lh5.googleusercontent.com/ZGVFlov_TN0AxibIXkXxGIctGKb5P2nCmi9PRnaqKwuykYBas1b7XTPhacCz-kcyUnwwnxZBTGAArbKWhvhFHGFNBpXdBNpybGSdQIB-8kRKMobqTFDDiAzy7aaazTJ_2yT_WSmq)

JavaScript fue la respuesta a muchas de las limitaciones de HTML. Por ejemplo,
necesitas un *popup* o modificar dinámicamente el orden de algo? La respuesta
era JavaScript. El problema es que JavaScript se tiene que cargar por separado y
muchos desarrolladores lo empezaron a usar como solución fácil, haciendo que las
páginas con mucho JavaScript tardaran mucho en cargarse.

### La era dorada de la libertad — Flash (1996)

![la era dorada de la libertad](https://lh5.googleusercontent.com/SUeDnmoVg4KR2W-235o3m0-VjLhDPfyHYU6-1slJ6Oi0kWf_UDyqKWBIovugja5ECd3zwSXOegTUKW9dZNG_EuD-6B_kSKP1ixkhtsmbiG1-MgsQXb1CUHiP30-NSRq3VuYoa2sj)

En el ’96 nació una tecnología con un nivel de libertad nunca antes visto en
diseño web…Flash. Un diseñador podía diseñar cualquier forma, *layout*,
animación, interacción, o usar cualquier tipografía. El resultado final se
empaca en un solo archivo y se manda al navegador para allí mostrarse. Era como
magia… mientras el usuario tuviera el último plugin de Flash y tiempo de sobra
para esperar a que se cargara. Fue la era dorada de páginas splash, animaciones
como intro y todo tipo de efectos interactivos. Desafortunadamente no era muy
amigable para los buscadores y requería un procesador potente. Apple decidió no
usarlo en el primer iPhone (2007) y fue el principio del fin para Flash.

Ejemplo:[http://www.mono-1.com/monoface/main.html](http://www.mono-1.com/monoface/main.html)

### CSS (1998)

![css](https://lh6.googleusercontent.com/MXF9nxupWtawgUHnkLwjBoNnkOBaLRQ5cbV2YmGiVY8lyHjQVAlvaEbGptxOfrp9sNSQptSGwF3l9TirqXhB1dEwHsQt2c54Dzv7qhNaeQsI99CuO5lrFY1PCQREEat3Qxyf4bFM)

Más o menos al mismo tiempo que Flash, una mejor forma de estructurar el diseño
estaba en pañales — *Cascading Style Sheets* (CSS). El concepto básico es
separar el contenido de la presentación. El formato y *look* se definen en CSS,
pero el contenido en HTML. Las primeras versiones de CSS eran poco flexibles y
tenía niveles bajos de adopción entre los navegadores. Pasaron varios años antes
de que hubiera adopción general y muchas veces se encontraban muchos *bugs*.
Además todos los navegadores tenían parámetros diferentes -- una pesadilla para
los desarrolladores.

### El alzamiento móvil - *grids* y *frameworks* (2007)

![grids](https://lh3.googleusercontent.com/Bq5zM-2NooVjbLlvwcI5Pbs3rMMuO4Qgb39onVRPHk5wjr0D4p3JhyUlXR6KcbBlLUiFT2l-E2sRTy3t8u9IchtCmtplzF_s_WE0Fvm4MrUKWaHHdWS6fKhTd0EWjmGLJ4r0QPYX)

Navegar la web en un teléfono móvil fue todo un reto. Aparte de requerir un
layout diferente para cada aparato, existía también un tema de control de
contenidos ¿El diseño debería de ser igual en cualquier pantalla o se debería de
implementar un diseño más básico en móvil? ¿Dónde poner todos los anuncios en
esa pantallita tan chiquita? La velocidad también era un tema ya que cargar
mucho contenido rápidamente agota los datos de los usuarios.

La primera mejora fue la idea de un grid dividido en columnas. Un grid de 960
píxeles y 12 columnas se volvió el estándar. El siguiente hacia la
estandarización fue diseñar los elementos más comunes — tipo la navegación, los
botones, los formularios, etc. — de manera que fueran fáciles de usar muchas
veces. Por esto surgieron las bibliotecas de elementos visuales que ya contienen
todo el código para cada elemento. *Bootstrap* y *Foundation* son las
bibliotecas más conocidas y demuestra que la línea entre una página y una app
está desapareciendo. Lo malo de esto es que muchas páginas se ven iguales y
diseñadores aún no pueden cambiarlas sin saber escribir código.

### Diseño web responsivo (2010)

![diseño responsivo](https://lh5.googleusercontent.com/StAV3qK4xxN0eHtTcMB798X81CfV7tucwkji3qsZl6Dy61QsMyKA1o8PY4fk99bi2L-6xu40p6xi4vOwQkNZi3QWV-qAUNE_CHOGWfPG3ozgtNvX_9anbbMjjboMVq4aEwojzhe1)

Un tipo llamado Ethan Marcotte propuso usar el mismo contenido pero cambiar el
layout. Se le llamó diseño web responsivo. Técnicamente seguimos usando HTML y
CSS entonces es más un que nada un avance conceptual. La principal ventaja es
que el contenido es el mismo - es una misma página que funciona en cualquier
pantalla.

### Todo se aplana (2010)

![todo se aplana](https://lh5.googleusercontent.com/Z84zG6VGhn94oR-S02K3yynzcagHfB-pdmL1FNNYUALrEQ-zAES7JcQQcUMJ-gLYhcelBsayj8QdHPyN6SKjIiYGYq1aCk9RujMUPMX8B5HMLLSizrDKyi7cz4XjvdghA0GOu6Y6)

Diseñar varios *layouts* para el mismo contenido toma más tiempo así que por
suerte la moda se ha alejado de efectos sofisticados (como las sombras) y ha
vuelto a las raíces del diseño, dándole prioridad al contenido. Buena
fotografía, tipografía, ilustraciones y layouts bien pensados son los elementos
importantes del diseño ahora. Esta simplificación quiere decir que hay mucho más
pensamiento detrás del contenido, la jerarquía del mensaje y el contenido en
general.

### Un futuro brillante (2014)

![futuro](https://lh6.googleusercontent.com/YhDAD4JsM8nozDMPo28_wbh2cR1EJFv4U7Z36BBfam7bzNIDx_gPkwL1bOTfmGz1PbqGlaghGwZRSom29gihg-0Yt-2s8LvgNaGTq9LAPh4Oe0I8IQsrxQ8L1Yh6cusVK7mfeXen)

El santo grial del diseño web es llevar lo visual directamente a los
navegadores. Imagínense que los diseñadores pudieran tan solo mover algo en la
pantalla y que salga código limpio! Que tengan control y flexibilidad total y
que los desarrolladores no tuvieran que preocuparse por compatibilidad entre
navegadores y pudieran enfocarse realmente en resolución de problemas.
