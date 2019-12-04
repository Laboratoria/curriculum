# Accesilidad

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `1h`

***

## Intro

Mira este video y reflexiona sobre el concepto de accesibilidad [video](https://www.youtube.com/watch?v=BEFgnYktC7U)

Accesibilidad según la [W3org](https://www.w3.org/WAI/intro/accessibility.php):

> La accesibilidad web significa que los sitios web, las herramientas y las
tecnologías están diseñados y desarrollados para que las personas con
capacidades diferentes puedan usarlos. Más específicamente, las personas
pueden:
>
- percibir, comprender, navegar e interactuar con la Web
- contribuir a la web

La accesibilidad incluye todas las capacidades diferentes que están relacionadas
con la interacción con productos digitales y la web:

- Visual: ceguera total o parcial, baja visión o daltonismo.
- Auditiva: sordera parcial, total y otras dificultades para escuchar.
- Motriz: dificultad para usar el mouse, respuesta lenta, control limitado de la
  movilidad
- Cognitiva: dificultades para aprender,deficiencias de atención, dificultad
  para recordar cosas o enfocarse cuando se está frente a grandes cantidades de
  información.

Ahora, mira este:

[video](https://youtu.be/_ey8cjuDZW8)

Y revisemos algunas consideraciones sobre accesibilidad.

### Tips para diseñadores

#### No uses el color como única manera de dar información al usuario

Recuerda que hay usuarios que no distinguen todos los colores. (En este
[artículo](https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/)
puedes ver los distintos problemas de visión que existen.) Un buen ejemplo es no
usar solo el color rojo para dar a entender que hay un error. Siempre es bueno
explicarle al usuario cuál fue el error con un mensaje explícito.

#### Utiliza colores que tenga el suficiente contraste

Recuerda los conceptos de Visual Design. Siempre revisa el contraste de color
entre el texto y el fondo. Utiliza esta [herramienta](https://webaim.org/resources/contrastchecker/)
para asegurarte que el contraste cumpla los estándares mínimos.

#### Cuando subas un video a la web agrégale subtítulos y ofrece las transcripciones

Los subtítulos y/o transcripciones ayudan a las personas que tienen dificultades
de audición o cuando no puedes ejecutar un video en un lugar muy silencioso.
Intenta agregar subtítulo y/o transcripciones cuando tengas videos o audios.

#### Siempre usa labels (o un sustituto equivalente) en los formularios

Los labels nos ayudan a enfocarnos en los campos que vamos a llenar del
formulario. Cuando usamos solo placeholders corremos el riesgo de confundir al
usuario y de hacer su experiencia menos fluida. Puedes leer estos artículos:
[Inglés](https://www.nngroup.com/articles/form-design-placeholders/)/[Español](https://translate.google.com/translate?sl=pt&tl=es&js=y&prev=_t&hl=en&ie=UTF-8&u=https%3A%2F%2Fwww.nngroup.com%2Farticles%2Fform-design-placeholders%2F&edit-text=)
para entender un poco más sobre esto.

#### Utiliza alt=”” en todas las imágenes que subas

Los textos `alt` en las imágenes ayudan a los screen-readers a decirles a los
usuarios qué hay en una imagen. Si bien es una tarea que puedas ver relacionada
con un programador. Es importante darle las herramientas e instrucciones
necesarias a los stakeholders para que incluyan los `alt` en las imágenes de sus
posts. Por ejemplo, si en la empresa en que trabajes utilizan un CMS deberías
asegurarte de que hay la opción de agregar `alt` cuando los editores estén
ingresando/editando contenido. También, cuando hagas un prototipo y se lo pases
a un developer, podrías darle en un archivo aparte los `alt` texts que deberá
utilizar para cada imagen. Adicionalmente, los `alt` texts te ayudan para el
[SEO](https://es.wikipedia.org/wiki/Posicionamiento_en_buscadores) también.

#### Herramientas

- [Axe](https://www.deque.com/products/axe/)
- [Color contrast checker](https://webaim.org/resources/contrastchecker/)
- [Stark para sketch](http://www.getstark.co/)
- [Web accessibility guidelines](https://www.w3.org/TR/WCAG21/)

## Ejercicio

- Encontrar problemas de accesibilidad en una web financiera, listarlos y
  presentarlos al salón.

## Referencias

- [7 Things Every Designer Needs to Know about Accessibility](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b)
- [Aprende Accesibilidad Web paso a paso](https://www.udemy.com/aprende-accesibilidad-web-paso-a-paso/learn/v4/overview)
- [Accesibilidad en la Web o algunos tips para hacer una web para todos](https://medium.com/laboratoria-how-to/accesibilidad-en-la-web-o-algunos-tips-para-hacer-una-web-para-todos-3152616ac5fc)
