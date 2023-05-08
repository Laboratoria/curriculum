---
type: read
duration: 1h
---

# HTML

## Objetivos de Aprendizaje

- Conocer los elementos HTML más comunes
- Entender el concepto de anidamiento HTML
- Conocer las diferencias en el comportamiento bloque y en línea de elementos
  HTML
- Conocer qué son y para qué sirven los atributos de elementos HTML

## Veamos qué es HTML

Anteriormente aprendiste a crear un archivo HTML y a vincularlo con tu archivo
JavaScript. En esta lectura profundizaremos más en HTML.

Revisando directamente la documentación del [Mozilla Developer Network](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/iniciar)
tenemos lo siguiente:

> HTML (HyperText Markup Language) **no** es un lenguaje de programación, es un
lenguaje de marcado, usado para decirle a tu navegador cómo estructurar las
páginas que visitas. Puede ser tan complejo o tan simple como desee el
desarollador web.
>
> HTML consiste en una serie de elementos, que puedes utilizar para encerrar,
envolver, o marcar partes diferentes del contenido para hacer que aparezcan de
una cierta manera, o actúen de determinada forma. Las etiquetas que envuelven
un trozo de contenido pueden hacer que dicho contenido enlace con otra página,
ponga una palabra en cursiva, etcétera.

## HTML5

HTML5 es la última versión de HTML. El término representa dos conceptos
diferentes:

- Se trata de una nueva versión de HTML, con nuevos elementos, atributos y
  comportamientos.
- Contiene un conjunto más amplio de tecnologías que permite a los sitios Web
  y a las aplicaciones ser más diversas y de gran alcance. A este conjunto se
  le llama _HTML5 y amigos_, a menudo reducido a **HTML5**.

Diseñado para ser utilizable por todos los desarrolladores de Open Web, esta
página referencía numerosos recursos sobre las tecnologías de HTML5,
clasificados en varios grupos según su función.

- **Semántica:** Permite describir con mayor precisión cual es su contenido.
- **Conectividad:** Permite comunicarse con el servidor de formas nuevas e
  innovadoras.
- **Sin conexión y almacenamiento:** Permite a las páginas web almacenar datos
  localmente en el lado del cliente y operar sin conexión de manera más eficiente.
- **Multimedia:** Nos otorga un excelente soporte para utilizar contenido
  multimedia como lo son audio y video nativamente.
- **Gráficos y efectos 2D/3D:** Proporciona una amplia gama de nuevas
  características que se ocupan de los gráficos en la web como lo son canvas
  2D, WebGL, SVG, etc.
- **Rendimiento e Integración:** Proporciona una mayor optimización de la
  velocidad y un mejor uso del hardware.
- **Acceso al dispositivo:** Proporciona APIs para el uso de varios
  compomentes internos de entrada y salida de nuestro dispositivo.
- **CSS3:** Nos ofrece una nueva gran variedad de opciones para hacer diseños
  más sofisticados.

> Este es un [extracto de la documentación de MDN](https://developer.mozilla.org/es/docs/Glossary/HTML5)
que podemos encontrar sobre HTML5.

## Anatomía de un elemento HTML

Recordemos que salvo algunas excepciones (por ejemplo `<!DOCTYPE html>`), los
elementos html comienzan con una `etiqueta de apertura (o inicio)` y terminan
con una `etiqueta de cierre (o fin)`. Por ejemplo, el elemento `p` comienza
con la etiqueta de inicio `<p>` y termina con la etiqueta de cierre `</p>`. El
texto que se encuentra entre las etiquetas de apertura y de cierre es el
 _contenido_ del elemento.

![Ejemplo etiqueta](https://user-images.githubusercontent.com/25906896/39716065-df4e7158-51f4-11e8-9a4c-90f1e82bcd09.png)

## Anidamiento HTML

Un elemento puede contener en su contenido otros elementos o etiquetas HTML.
Esto se llama _anidamiento_.

Recordemos la estructura básica de un documento html que hemos venido usando
en la mayoría de nuestros ejercicios y agreguemos un par de elementos
adicionales:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML anidado</title>
  </head>
  <body>
    <h1>Laboratoria</h1>
    <p>Código <em>que</em> <strong>transforma</strong></p>
  </body>
</html>
```

Fíjate cómo ciertos elementos "anidan" otros. Es decir, algunos
elementos están "contenidos" dentro de otros. Por ejemplo, el elemento `body`
tiene dos elementos anidados (o hijos) que son el título `h1` y el
párrafo `p`. A su vez, el párrafo `p` contiene dos elementos adicionales
(otros hijos): `em` y `strong`.

Podemos visualizar este concepto de _anidamiento_ html de la siguiente manera:

![Anidamiento html](http://www.mrinitialman.com/Library/HTML/Pictures/HTML-Markup_Basics/html_nesting.png)

En este ejemplo vemos elementos que ya deberían ser familiares para ti. Ya
conoces sobre la etiqueta `DOCTYPE`, los elementos `head`, `body`, `title`, `h1`
y `p`. Un par de elementos adicionales que hemos añandido son: `em` que hace que
su contenido se visualice como texto en _cursiva_ y `strong` que hace que su
contenido se visualice como texto en _negrita_.

Al abrir este documento en el navegador tendremos lo siguiente:

![HTML nested](https://user-images.githubusercontent.com/25906896/39716135-1c508578-51f5-11e8-97e4-074490066dac.png)

## Elementos bloque vs. en línea

Regresemos a la lectura de HTML del [Mozilla Developer Network](https://developer.mozilla.org/es/docs/Learn/HTML/Introduccion_a_HTML/iniciar).
Nos dice:

> Existen dos importantes categorías de elementos en HTML: elementos a nivel de
> bloque y elementos en línea.
>
> **Los elementos a nivel de bloque** forman un bloque visible en una página —
> aparecerán en una nueva línea de cualquier contenido que haya venido antes,
> y cualquier contenido que venga después también aparecerá en una nueva línea.
> Los elementos a nivel de bloque tienden a ser elementos estructurales en la
> página que representan por ejemplo párrafos, listas, menús de navegación,
> pies de página, etc. Un elemento a nivel de bloque no estaría anidado dentro
> de un elemento en línea, pero podría estar anidado dentro de otro elemento
> a nivel de bloque.
>
> **Los elementos en línea** son aquellos que están contenidos dentro de
> elementos a nivel de bloque y rodean solo pequeñas partes del contenido
> del documento, no párrafos enteros ni agrupaciones de contenido. Un elemento
> en línea no causará que una nueva línea aparezca en el documento:
> normalmente aparecen dentro de un párrafo o texto, por ejemplo elementos de
> énfasis como `em` o `strong`.

Veamos un ejemplo:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML anidado</title>
  </head>
  <body>
    <em>primero</em><strong>segundo</strong><em>tercero</em>
    <p>cuarto</p><p>quinto</p><p>sexto</p>
  </body>
</html>
```

Al visualizar el documento anterior en el navegador tendremos:

![Block vs in line](https://user-images.githubusercontent.com/25906896/39716266-7376cd4e-51f5-11e8-9169-229c007eaacb.png)

Tanto `em` como `strong` son elementos en línea. Por lo tanto, los tres
primeros elementos se sitúan en la misma línea uno tras otros sin espacio
entre ellos. Por otro lado, `p` es un elemento a nivel de bloque, así que
cada elemento aparece en una nueva línea, con espacio sobre y debajo de
cada `p`.

## Elementos HTML

Tienes a tu disposición múltiples elementos HTML para construir productos en
la web. Investiga por tu cuenta (utilizando tu gran aliado Google) y aprende
cómo agregar lo siguiente a una web:

1. Encabezados para títulos y subtítulos (tip: headings)
2. Un link
3. Una tabla
4. Una lista
5. Una imagen
6. Una línea divisoria (tip: horizontal rule)
7. Una cita
8. Resaltar un texto (tip: mark)

Para cada elemento anterior entiende si se comporta como `inline` o como
`block`.

## Atributos

En tu investigación seguro te topaste con
[el elemento `a` para agregar un link a tu web:](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/a)
y habrás notado que en la etiqueta de apertura aparece una serie de información:

```html
<a href="http://laboratoria.la/" target="_blank" title="Página de inicio de Laboratoria">Ir a Laboratoria</a>
```

Esa información son **atributos**. Los atributos nos dan información adicional
sobre el contenido de un elemento que no queremos que aparezca en el
contenido actual. En algunos casos agregan características
y/o comportamiento a tu elemento HTML. Los atributos aparencen en la
**etiqueta de apertura** del elemento y consisten de dos partes: un nombre
y un valor, separados por un signo de igual (`=`).

En el caso del ejemplo anterior, podemos visualizar tres
atributos: el atributo `href`, el atributo `target` y el atributo `title`.

- El atributo `href` especifica la dirección web que quieres que el enlace
  apunte; es decir, donde el navegador navega cuando se le hace clic. En este
  ejemplo vemos que apunta a la página de inicio de Laboratoria:
  <http://laboratoria.la/>

- El atributo `target` especifica el contexto de navegación que será usado
  para mostrar el enlace. Por ejemplo, `target="_blank"` mostrará el enlace en
  una nueva pestaña. Si quieres mostrar el enlace en la pestaña actual solo
  omite este atributo.

- El atributo `title` especifica información extra sobre el enlace, como qué
  página es la que estás enlazando. En nuestro ejemplo dice "Página de inicio
  de Laboratoria". Esto aparecera como información cuando se pase el mouse
  por encima del link.

## Atributo style

Existen muchos atributos comunes a todos los elementos html y existen atributos
específicos que son asociados a un elemento en particular. Un atributo que
aplica a casi todos los elementos html es el atributo `style` lo cual
permite darle estilos a tu elemento. Por ejemplo, si queremos que el contenido
dentro de un elemento `p` sea de color rojo sobre fondo amarillo y con un borde
negro, hacemos:

```html
<p style="color:red; background-color: yellow; border: 1px solid black;">Código
  <em>que</em>
  <strong>transforma</strong>
</p>
```

Al visualizar el documento anterior en el navegador tendremos:

![Style Example](https://user-images.githubusercontent.com/25906896/39716433-f7d20fa4-51f5-11e8-820d-79dca1dbd781.png)

Un atributo de estilo puede contener una o más declaraciones. Cada declaración
está compuesta por una
**propiedad** (como el color) seguida de dos puntos y un **valor**
(como rojo). Cuando tenemos más de una declaración, cada una debe estar
separada por punto y coma (`;`). Por ejemplo: `"color:red; background-color:
yellow;"`.

Hay un montón de aspectos que pueden ser influenciados por el estilo. Por
ejemplo, la propiedad `display` controla si un elemento se muestra como un
bloque o en línea, o inclusive no mostrarlo:

```html
<p>
  Un texto se puede mostrar <strong>en línea</strong>,
  <strong style="display: block">como bloque</strong>, y
  <strong style="display: none">no visualizarse</strong>.
</p>
```

La vista en el navegador de esto sería:

![Style Example](https://user-images.githubusercontent.com/25906896/39716464-0fad0926-51f6-11e8-8ad6-011543112229.png)

El texto _"en línea"_ se muestra inline (es decir, en la misma línea del texto
anterior _"Un texto se puede mostrar"_) porque recordemos que el elemento strong
es de tipo inline. El texto _"como bloque"_ terminará en su propia línea, ya que
los elementos de tipo bloque no se muestran en línea con el texto que los
rodea. Recuerda que cuando un elemento es de tipo bloque aparecerá en una
nueva línea de cualquier contenido que haya venido antes,
y cualquier contenido que venga después también aparecerá en una nueva
línea. El texto _"no visualizarse"_ no se muestra porque al asignar el valor de
`none` para `display` impide que un elemento aparezca en la pantalla. Esta es
una forma de ocultar elementos.

## Etiquetas vacías

En tu investigación seguro también te topaste con
[el elemento `<img>` para agregar una imagen a tu web](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/img)
y habrás notado que no tiene una etiqueta de cierre y, por lo tanto, no tiene
"contenido":

```html
<img src="http://cde.2.trome.pe/ima/0/1/1/8/5/1185397.jpg">
```

Algunas etiquetas no tienen directamente contenido; más bien reciben una _fuente_
de la cual obtener el contenido. Esto es lo que sucede con
el elemento `img`. El atributo `src` brinda la ruta del contenido. En este caso,
al ir a la ruta <http://cde.2.trome.pe/ima/0/1/1/8/5/1185397.jpg> encontraremos
la foto de Mariana con Mark y Barack :)

![Foto Mari](http://cde.2.trome.pe/ima/0/1/1/8/5/1185397.jpg)

Otro elemento que no tiene etiqueta de cierre es `br`. [Lee la documentación
de MDN sobre `br`](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/br).
¿Para qué sirve `br`?

## Comentarios en HTML

Así como podemos comentar nuestro código `javascript` para hacerlo más
entendible, también podemos agregar comentarios a nuestro código `html`.
Para definir un comentario en un archivo html, usamos las etiquetas `<!--` para
arbrir el comentario y `-->` para cerrarlo.

```html
<!-- Esto es un comentario. No se verá en la web, pero sí en mi código. -->
```

## Replicando la página de Grace Hopper de wikipedia

Ahora que tienes una idea de los elementos `html` más comunes, su
comportamiento (inline vs block) y sus atributos principales, Michelle te
explicará cómo construir una réplica de la página de [Grace Hopper de wikipedia](https://en.wikipedia.org/wiki/Grace_Hopper):

[![Grace Hopper](https://img.youtube.com/vi/9w5ITAr2hlQ/0.jpg)](https://www.youtube.com/watch?v=9w5ITAr2hlQ)

## Los elementos `div` y `span`

Muchas veces al crear nuestra estructura HTML se vuelve necesario "agrupar"
elementos para dividir nuestra web en secciones o partes lógicas. Por ejemplo,
si en el _footer_ (o pie de página) de nuestra web queremos mostrar los íconos
de nuestras redes sociales junto a links de contacto, es útil agrupar todos
los íconos en una sección y los links en otra sección, y que ambos grupos estén
contenidos dentro del _footer_.

Para realizar estas agrupaciones, podemos utilizar los elementos `div` y
`span`. Los elementos `div` y `span` son como "contenedores" vacíos que
llenamos de otros elementos y contenido.

- El elemento `div` define una división o una sección en un documento
  HTML. Se utiliza para agrupar elementos de **bloque**. Frecuentemente se
  utiliza como un contenedor para otros elementos. Un `div` es un bloque, lo
  que significa que tiene un salto de línea antes y después.

- El elemento `span` se utiliza como un contenedor para textos. Es de
  tipo **inline**; es decir, aparece entre líneas, como parte de un párrafo.

Veamos un ejemplo:

```html
<!DOCTYPE html>
<html>
  <body>
    <div style="background-color: green; color: white">
      <h2>Ciudad de México</h2>
      <p>La Ciudad de México, anteriormente conocida como el Distrito Federal,
        es una de las 32 entidades federativas de México, así como la capital
        de los <span style ="color: yellow">Estados Unidos Mexicanos</span>.
      </p>
    </div>
    <div style="background-color: red; color: white">
      <h2>Lima</h2>
      <p>Lima es la capital de la <span style ="color: yellow">República del
        Perú</span> y de la provincia homónima. Se sitúa en la costa central
        del país, a orillas del océano Pacífico, conformando una extensa y
        populosa área urbana conocida como Lima Metropolitana, flanqueada por
        el desierto costero y extendida sobre los valles de los ríos Chillón,
        Rímac y Lurín.
      </p>
    </div>
    <div style="background-color: blue; color: white">
      <h2>Santiago</h2>
      <p>Santiago, llamada también Santiago de Chile, es la capital de
        <span style ="color: yellow">Chile</span> y de la región Metropolitana
        de Santiago. Es el principal núcleo urbano del país y su área
        metropolitana se conoce también con el nombre de Gran Santiago.
      </p>
    </div>
  </body>
</html>
```

Al visualizar el ejemplo anterior en el navegador tenemos:

![Div and Span](https://user-images.githubusercontent.com/25906896/39716525-376456d6-51f6-11e8-8ade-2f9cb65a0ea1.png)

Fíjate cómo hemos agrupado todo lo relacionado a un país en un `div`. Esto es
útil porque crea secciones que siguen un orden lógico. Pero, más importante
aún, tener estas secciones separadas permite darle estilos diferentes a cada
sección: el color de fondo y el color de la fuente varían para cada
país. Lo mismo sucede con las palabras que mostramos en amarillo. Gracias a `span`
podemos hacer que ciertos pedazos de texto tengan un estilo diferente.
