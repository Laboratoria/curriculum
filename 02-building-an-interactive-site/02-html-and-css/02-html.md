# HTML
- Formato: `self-learning`
- Tipo: `lectura`
- Duración: `30min`

## Objetivos de Aprendizaje

- Aprender las principales etiquetas `html`
- A

***

link a slides de lab: https://docs.google.com/presentation/d/1xA1tofzNZKya0IOBpFRjrfeMKBsy0cjgdHNcztSwKgQ/edit#slide=id.g1cea969e01_0_65

materaial previo:
https://github.com/Laboratoria/curricula-js/blob/master/01-intro/01-introduction/03-your-first-website.md

referencia:
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started


### ¿Qué es HTML?

En la unidad de Introducción vimos como hacer tu primera web. Recapitulemos un poco en lo que vimos. 

Recordemos que _Hipertext Markup Language_ o _HTML_ es un lenguaje de marcado.  __No es un lenguaje de programación__. Digamos que es un lenguaje donde indicas qué es cada cosa a través de etiquetas. A través de este lenguaje le decimos al navegador cómo estructurar el contenido de la página web en pequeños bloques de elementos html. Dependiendo de la _etiqueta_ que usemos, el elemento html se verá un poco diferente.

### Anatomía de un elemento HTML

Como vimos anteriormente, una etiqueta esta formada principalmente por: 
![<p>Code that transforms</p>](tag-structure.png)

En este ejemplo estamos definiendo un elemento __párrafo__ con la etiqueta ___p___. Este pequeño párrafo tiene un contenido de texto que es ___Code that transforms___.


### Atributos

Un elemento HTML además puede tener varios atributos que lo modifican, especializan, identifican o demás. 

![<p lang="es-us">Code that transforms</p>](tag-structure-attributes.png)

Los atributos nos dan información adicional sobre el contenido de una elemento. En algunos casos agregan características y/o comportamiento a tu elemento HTML. Los atributos aparencen en la apertura de una etiqueta de un elemento de html y consiste de dos partes, un nombre y un valor separados por un signo de `=`. 

### Etiquetas vacías

Algunas etiquetas no tienen directamente contenido, sino que, en algunos casos reciben un fuente de la que obtendrán contenido. Por ejemplo el elemento __imagen__ que creamos con la etiqueta __img__.

![<br>](tag-img.png)

Ese es el caso de la etiqueta __br__

En otros casos crean un comportamiento en si mismas. Es el caso de la etiqueta __br__ que define un salto de línea en el contenido:

![<br>](tag-br-closing.png)

Más adelante vamos a aprender más sobre las versiones de HTML, pero te voy adelantando que en HTML5 ya no es necesario que pongas el __/__ de cierre, por ejemplo el __br__ quedaría como: 

![<br>](tag-br.png)


### Anidado de etiquetas

Como recordarás, una etiqueta puede contener en su _contenido_ otras etiquetas o elementos HTML 

Por ejemplo, cuando vimos nuestra primera página web: 

```html
<body>
    <h1>Hola Mundo</h1>
</body>
```

Aquí el elemento __body__ que tiene como objetivo contener el cóntenido de la página web, tiene un elemento anidado o hijo que es el título __h1__. 

Por ejemplo, si definimos una lista no ordenada de frutas: 
```html
<ul>
    <li>fresa</li>
    <li>melón</li>
    <li>naranja</li>
    <li>kiwi</li>
<ul>
```

El __ul__ o _lista no ordenada_ (unordered list) tendrá internamente varios elementos __li__ de la lista. Cada uno de ellos con su propio contenido.  


### Comentarios en HTML

Para definir un comentario recordemos que usamos las etiquetas `<!--` para arbri el comentario y `-->` para cerrar el comentario. 

```html
<ul>
    <li>fresa</li>
    <li>melón</li>
    <li>naranja</li>
    <!-- Este es un comentario y no se verá en mi página web, pero si en mi código. -->
    <li>kiwi</li>
<ul>
```


### Estructura HTML 

Las etiquetas actuan como contenedores de la información que esté entre sus etiquetas de apertura y cierre. 

Si definimos como contenedores, tendremos que :

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Hola Mundo!</h1>
    <p>Bienvenidos a mi primera página web</>
  </body>
</html>
```
Si recordamos, cuando guardes este código en un archivo `index.html` y luego decidas abrirlo con un navegador, ser verá más o menos así: 

![Mi primera página web](test-html.png)

He agregado un poco de CSS para que puedas tener una idea de los contenedores que mencionaba: 

![Mi primera página web - contenedores](test-html-containers.png)


A parte del `<!DOCTYPE html>` que nos dice que el siguiente documento es un documento HTML, las demás etiquetan generan contenedores. Más allá de esos contenedores, es importante recordar que cada una de las etiquetas que vemos arriba tiene un propósito.

El elemento <body> ya lo conoces. Todo lo que este dentro de este elemento se muestra en la vetana del navegador.

Antes del elemento `<body>`, por lo general verás un elemento `<head>`. `<head>` contiene información sobre la página, esta información no se muestra directamente, como el elemento `body`, pero le dice al navegador datos sobre la información que se contendrá, cómo mostrar la página y detalles que la ventana del navegador puede usar. Es el caso del `<title>`, que se mostrará en la barra de título del navegador.  

Veremos un poco más de `head` y otras etiquetas HTML que es importante que conozcas para poder estructurar tu página web.


### Meta data: Head
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML

Como mencionamos, `head` contiene información de la página para el navegador. Esta etiqueta y su contenido no se ven por defecto en el contenido principal del navegador.  Esta información incluye:

- `<title></title>` 
    Esta etiqueta despliega el título que verás en la barra de título del navegador.
Solo para aclarar. Puedes ver dónde aparece el contenido de la etiqueta `title` en el navegador.

![Mi primera página web - contenedores](test-html-browser-parts.png)

- `<link href="[direccion url de tu hoja de estilos]" rel="stylesheet">`
También encontraras, por lo general, la etiqueta `link` que genera un vínculo entre la página y otros recursos. Puedes revisar la [documentacion de link que tiene disponible MDN](https://developer.mozilla.org/es/docs/Web/HTML/Elemento/link). Por lo general lo usamos para _stylesheets_ (hojas de estilos). Hay algunos atributos que sería importante que conozcas:
    
    - ___href___: indica la dirección url donde se encuentra el recurso que vamos vincular.

    - ___rel___: este atributo indica que tipo de relación tiene el recurso que estamos vinculando respecto a nuestra página. Para hojas de estilos usamos el valor _`stylesheet`_, pero existen otros valores como _copyright_, _lincense_, _help_, _author_, entre otros. 

     - ___type___: nos ayuda a especificar el tipo de archivo que que vincularemos. Para el caso de hojas de estilos este valor muchas veces se omite, pero el oficial es usar: _`text/css`_. Para otro tipo de recursos, [necesitarás otros types](http://www.iana.org/assignments/media-types/media-types.xhtml).

     - __media__: este atributo nos permite decirle al navegador para que tipos de medios físicos estará disponible el recurso. Tú, yo, viendo esto en una computadora desktop en un navegador, o en un celular, estaríamos usando un media conocido como _`screen`_, pero hay otros media, como _`print`_ que usamos para indicar que este será usado para impresiones (pdf o impresoras). También otro bastante usado es el _`speech`_ para lectores para personas con discapacidad visual. También [puedes unir este atributo a otros con los que especificar más el medio](https://www.w3schools.com/tags/att_link_media.asp) al que dirijes el recurso. 

- `<meta>` es una etiqueta vacía. En sus atributos recibe información sobre la información de la página web. Hay variada información que puedes incluir con esta etiqueta y no es raro que la encuentres varias veces en el `head` con diferentes datos. Algunos de los datos esenciales-más importantes que indicar son: 
    - __charset__: indica el sistema de caracteres que usaremos en la web. Por lo general usamos en esta atributo el valor `utf-8` que es el estándar de caracteres más usado ya que incluye letras, número, tildes, letras del alfabeto frances, español, ruso entre otros. En tu HTML tendras este meta: `<meta charset="utf-8">`
    - __name__ y  __content__: usamos estos dos atributos juntos especificar diferentas datos que son útiles para guardar, búsquedas desde buscadores como Google o Bing, además de apoyo para vistas en redes sociales.
        
         _`name`_ nos ayuda a identificar la información que vamos a poner, por ejemplo si vamos a poner el autor de la página tendremos `name="author"` y con _`content`_ indicaremos la información que corresponde al autor, por ejemplo: `content="Laboratoria"`. El meta sería: `<meta name="author" content="Laboratoria">`. 

        Otros valores que puedes usar en  que puedes usar en `name` incluyen _description_ (descripción de la páginas para los buscadores), _generator_ (indicar con que producto, tecnologias se generó esta página), _keyworkds_ (palabras clave que responden al contenido de la página). 

        Existen otros valores de `name` que si bien no son oficiales, son bastante usados: _viewport_ (puede modificar cómo se verá la web, usualmente usado para dispositivos móviles), _creator_ (similar a autor, pero asociado al creador de la página), _robots_, _googlebot_ , _slurp_. Estos tres últimos están relacionados a información que queremos darle a los robots que actualizan los índices de los buscadores. 

    - __property__ y __content__: similar al dúo `name` y `content`, por lo general usamos este dúo dinámico para dar información, por lo general, asociada a diferentes redes sociales. Un ejemplo es el caso de qué información queremos que se muestre en __Facebook__ si usaremos:

        ```html
        <!-- 
            <meta property="og:image" content="http://[URL DE LA IMAGEN QUE QUEREMOS MOSTRAR]">
          
            <meta property="og:description" content="[Descripción que aparecerá en la pubicación]">
          
            <meta property="og:title" content="[Título que tomaría la publicación]">

        -->
            <meta property="og:url" content="http://laboratoria.la">
            <meta property="og:title" content="Laboratoria">
            <meta property="og:description" content="Laboratoria is a tech social enterprise that empowers young women from low-income backgrounds by giving them access to education and work in the digital sector. ">
        ``` 

        Cuando compartamos la página que tiene este código, en Facebook, obtendremos algo como lo que sigue:

        ![Facebook Laboratoria](og-facebook-laboratoria.png)

        Twitter tiene también su propio estándar para propiedades que usará en caso de publicación. 

    Como ves, la etiqueta meta especificará bastante información sobre tu página web. Puedes ver más en la [documentación de la etiqueta `meta`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta).

- `script` es otra etiqueta que verás y por lo regular la usamos para vincular archivos de JavaScript. Pero eso lo veremos más adelante. 

Tal y cómo vimos, `head` entonces sera en contenedor de variada información sobre nuestra página. Puede ver más en este [artículo de MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML) al respecto.  



### Principales etiquetas

De hecho existen montones de etiquetas que puedes usar, y podemos dividirlas entre etiquetas que definen estructura y etiquetas que definen contenido. 

#### Etiquetas de estructuras

Esteas
* Body
* Head
* Footer

#### Etiquetas de contenido
* Text
* Listas
* Links
* Imagenes
* Tablas
* Formularios
* Extra markup
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals

#### Why do we need semantics?
Semantics are relied on everywhere around us — we rely on previous experience to tell us what the function of everyday objects is; when we see something, we know what its function will be. So, for example, we expect a red traffic light to mean "stop", and a green traffic light to mean "go". Things can get tricky very quickly if the wrong semantics are applied (do any countries use red to mean "go"? I hope not.)


### HTML5

### Block vs in-line

### Enlazando HTML con JavaScript
--- colocar un ejercicio guiado o algo para que practiquen JS.

### Guía de estilos

Los archivos html inicialmente tenían varias restricciones. Conforme los navegadores se hicieron más robustos, ahora soportan más variaciones en el uso de etiquetas y atributos. 

Para mantener el orden, y un estilo adecuado en el código, usamos una __guía de estilos__ que mantiene varios estándares de la industría de desarrollo de software. 

 #### Tipo de documento
 Definiremos el DOCTYPE en la primera línea de nuestro archivo HTML. 

![<!DOCTYPE html>](tag-doctype.png)

El doctype que ves arriba es el que usamos para HTML5 y es soportado por todos los navegadores. 

Versiones más antiguas tendrán una definición un poco diferente, como en HTML 4.01 con algunas variaciones:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

o el de HTML 1.0 que se ve un poco así con algunas variaciones: 

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```


#### Idioma
Recuerda definir el idioma que usarás en tu web. Esto ayuda a la __accesibilidad__ y a la optimización para resultados de búsqueda (__seo__).

![<html lang="es">](tag-html.png)

 #### Nombre de los elementos en minúscula
HTML __no__ es __case sensitive__ con el nombre de sus elementos. ___Case Sensitive___ significa que no va a diferenciar entre mayúsculas y minúsculas. 

---
__Case sensitive__:

Sensible a si las letras son mayúsculas o minúsculas. Si un elemento es case sensitive tendremos por ejemplo que: 

``` casa != Casa // casa es diferente de Casa```

``` Casa != cAsa // Casa es diferente de cAsa```

Cuando decimos que algo NO es Case sensitive, mas bien se da el caso contrario: 
``` casa == Casa // casa se refiere a lo mismo que Casa```

``` Casa == cAsa // Casa se refiere a lo mismo que cAsa```

---

Como decía, HTML __N0__ es _case sensitive_ para el nombre de las etiquetas por lo que puedes tener elementos como: 
```html
 <IMG src="logo.png">
 ... 
 <img src="logo.png">
```
Ambos casos mostrará una imagen. Para mantener un estándar adecuado, escribe los nombres de las etiquetas con _minúsculas_. 
```html
 <IMG src="logo.png"> <<--- así NO
 ... 
 <img src="logo.png"> <<--- así SI
```
 
 #### Nombre de atributos en minúscula

Del mismo modo que con el nombre de las etiquetas, HTML tampoco es case sensitive con el nombre de los atributos de HTML. Pero de igual manera, para mantener un estándar adecuado, escribe los atributos en _minúsculas_.

```html
 <img SRC="logo.png"> <<--- así NO
 <img Src="logo.png"> <<--- así NO
 ... 
 <img src="logo.png"> <<--- así SI
```

#### Comillas simples vs Comillas dobles

En HTML podemos usar comillas dobles (double quotes) `" "` o comillas simples (single quotes) `' '` para definir atributos de los elementos. Por estándar, para HTML usaremos las comillas dobles. 
```html
 <img src='logo.png'> <<--- así NO
 ...
 <img src="logo.png"> <<--- así SI
```

#### Espacios en blanco

No dejes espacios en blanco entre atributo y su valor.

```html
 <img src= "logo.png" > <<--- así NO
 ...
 <img src="logo.png"> <<--- así SI
```
### Caracteres especiales


### Debugging HTML
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML

***


