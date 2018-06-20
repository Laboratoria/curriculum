# Red Social

## Preámbulo

Un emprendedor muy visionario nos ha encargado crear una red social. No nos da
mucho detalle sobre qué tipo de red social quiere, él solo nos dice que creemos
la que mejor podamos y que luego lo convenzamos de que nuestra red social será
la más exitosa. El emprendedor nos da ciertos tópicos en los que le gustaría
invertir. Estos son:

* Alimentación
* Feminismo
* Educación
* Salud
* Energías Renovables

## Introducción

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, las redes sociales han
invadido nuestra vida. Las amamos, odiamos, idolatramos y muchos no podemos
vivir sin ellas.

Un ejemplo, en una ronda de financiamiento se presentó un caso de una red social
para químicos. En esta red social los químicos postean artículos sobre sus
investigaciones y pueden encontrar el contenido de acuerdo a lo más popular, lo
reciente o lo más comentado. Además, pueden comentar en los artículos de sus
colegas y pueden filtrar artículos de acuerdo a determinadas etiquetas.

## Objetivos

El objetivo principal de aprendizaje de este proyecto es construir una
_interfaz_ web responsive donde podamos leer y escribir data, además de agregar
más de una sola vista de interacción.

* Esperamos que en este proyecto puedas pensar en el usuario, entendiendo cuál
  es la red social que cambiará y alegrará sus vidas.
* Nos interesa que logres entender a las necesidades de los usuarios para los
  que crearás el producto y los ayudes a resolver esas necesidades.
* Para esto, deberás poner en juego tu creatividad, podrás generar nuevas ideas
  que lleven a una solución original y valiosa del problema.
* Además, cuentas con el apoyo de tus compañeras, debes trabajar junto a ellas,
  buscando feedback constante para realizar el proyecto.

Tópicos: _mobile-first_, [_responsive_](https://github.com/Laboratoria/curricula-js/tree/master/topics/css/02-responsive),
_multiple-views_, _crud_, _storage_, ...

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history),
usando una librería (por ejemplo [`react-router`](https://github.com/ReactTraining/react-router)
o [`vue-router`](https://router.vuejs.org/)). En este proyecto te invitamos a
explorar opciones y decidir una opción de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar localmente usando
[`localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
o de forma remota usando [Firebase](https://firebase.google.com/).

## Consideraciones generales

Este proyecto se debe "resolver" en trios.

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto SI está permitido usar librerías o
frameworks, pero no es obligatorio :smiley:.

Debido a que las redes sociales son ampliamente utilizadas en el móvil, es
obligatorio que sea responsive, es decir, que se vea bien tanto en dispositivos
grandes (computadoras, laptops, etc) y pequeños (tablets, celulares, etc).
Sugerimos llevar a cabo la técnica de `mobile first` para el desarrollo de tu
producto.

Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_
y _lines_, y un mínimo del 50% de _branches_. En este proyecto, no contamos con
un _boilerplate_, por lo cual, deberás de definir la estructura de carpetas y
archivos que consideres necesaria, puedes guiarte de las trabajadas en los
proyectos anteriores. Por ende, los tests y el setup necesario para ejecutarlos
serán realizados por ti.

Para comenzar este proyecto tendrás que hacer un _fork_ y _clonar_ este
repositorio.

## Parte obligatoria

### Definición del producto

En el `README.md` cuéntanos cómo pensaste y te acercaste a los usuarios al
desarrollar tu producto y cuál fue tu proceso para definir el producto final a
nivel de experiencia y de interfaz. Si tienes fotos de entrevistas,
cuestionarios y/o sketches compártelos. La especificación de ésta la encontrarás
en el apartado de entregables.

### UI

Si el producto definido requiere que los usuarios tengan cuenta en la red
social, la interfaz debe permitir lo siguiente:

* Crear una cuenta
* Iniciar sesión
  - Login con Firebase:
    + Autenticación con Facebook - Google
  - Validaciones:
    + No debe haber usuarios repetidos
    + La cuenta de usuario debe ser un correo electrónico válido
    + Lo que tipeo en el input de password debe ser secreto
  - Comportamiento:
    + Al enviarse un formulario de registro o inicio de sesión debe validarse
      el formulario
    + En caso haya errores, el sistema debe mostrar mensajes de error para
      ayudar al usuario a superar estos errores
    + La aplicación solo permitirá acceder a usuarios con cuentas válidas
    + Al recargar la aplicación, se debe de verificar si el usuario está
      logueado para poder mostrarle el contenido privado
  - Perspectiva de interfaz:
    ![Login](https://user-images.githubusercontent.com/9284690/40994765-c3cf9602-68c2-11e8-89ac-8254859b5ebb.png)
* Ver el muro/timeline de la red social
  - Validaciones:
    + Al apretar el botón de publicar debe validar que exista texto en el input.
  - Comportamiento:
    + Debo poder publicar un post
    + Debo poder poner like a una publicación
    + Debo poder llevar un conteo de los likes
    + Debo poder eliminar un post específico
    + Debo poder filtrar los posts solo para mis amigos y para todo público
    + Debe confirmar antes de eliminar un post
    + Al darle click en el botón editar debe cambiar el texto por un input con
      texto y cambiar el link por guardar
    + Al darle guardar debe cambiar de vuelta a un texto normal pero con la
      información editada
    + Al recargar la página debo de poder ver los textos editados
  - Perspectiva de interfaz:
    ![Muro](https://user-images.githubusercontent.com/9284690/40994768-c52c3442-68c2-11e8-99a5-9e127e700dee.png)

Otras consideraciones:

* La aplicación no debe dejar hacer publicaciones vacías (textos, fotos,
  videos, posts, etc).
* El usuario debe poder agregar, editar y eliminar contenido de la red
  social
* El usuario debe poder definir la privacidad de lo que pública
* Al editar contenido, el contenido editado verá automáticamente, luego de
  darle guardar
* Al recargar la página debo de poder ver los textos editados

Para armar las interfaces visuales utiliza como base alguna de estas guías de
componentes:

* [Guía Desktop 1](https://www.figma.com/file/F3aUqpHWOfZsEQifTPIleXo6/material-kit-free)
* [Guía Desktop 2](https://www.figma.com/file/S39H0B1LOnaVICIUiApFTfoP/_Style-Guide---Desktop---Style-Guide)
* [Guía Mobile 1](https://www.figma.com/file/00VTwmTNvLVaBLkxrMFbT8/Google-Material-Design)
* [Guía Mobile 2](https://www.figma.com/file/O2Xraz3mraQHvevNsicMl91V/ejemplos-2)

Personaliza estas guías con los colores y/o tipografías que creas convenientes.
Recuerda que al hacer estas adaptaciones deberás seguir los fundamentos de
visual design como contraste, alineación, jerarquía, entre otros.

## Implementación

El corazón de este proyecto incluye:

* Se deben separar la manipulación del DOM de la lógica (Separación de responsabilidades)
* En la implementación obligatoria se debe hacer uso sólo de Vanilla JavaScript
* Que el sitio sea responsive, se vea bien en distintos dispositivos haciendo
  un gran enfoque en móviles debido a la naturaleza del producto.
* Alterar y persistir datos, ahora los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación, te recomendamos que uses
  [`localStorage`](https://developer.mozilla.org/es/docs/Web/API/API_de_almacenamiento_web/Usando_la_API_de_almacenamiento_web)
  como primera opción para resolver este desafío, aun así, tu
  puedes optar por la que se acomode más a tu equipo.

Adicional a esto, algunas tareas nuevas se podrían agregar en base a tus
decisiones:

* Definir el boilerplate a usar, recuerda que puedes usar una librería o
  framework si así lo desea el equipo, al navegar en internet te darás cuenta
  que algunas de estas construyen un boilerplate por ti, tenlo presente al
  iniciar tu proyecto.
* Tests, recuerda que no hay un setup de tests definido, esto podrá depender de
  la estructura de tu proyecto también, pero algo que no debes de olvidar es
  pensar en éstas pruebas, incluso te podrían ayudar a definir la estructura y
  nomenclatura de tu lógica.

### UX

Para completar el proyecto deberás:  

* Hacer un benchamark de las principales redes sociales
* Realizar al menos 2 o 3 entrevistas con usuarios
* Hacer un  prototipo de alta fidelidad
* Testear el prototipo con usuarios
* Asegurarte que el producto final en código siga los lineamientos del diseño.
* Realizar sesiones de testing con el producto en HTML.

### Habilidades Blandas

Para completar este proyecto deberás trabajar en equipo, para esto tienes que
trabajar de manera colaborativa con tu trio. Esto es un gran desafío,
porque coordinarse no es una tarea fácil.

Igual que en otros proyectos, debes planificarte, pero para hacer una
planificación que sea útil para el equipo, no sólo deberás enumerar las tareas,
sino que distribuirlas, considerando los recursos y el tiempo que dispones. La
organización y gestión del proyecto son claves para el éxito.
Para esto, te recomendamos realizar una planificación que te permita avanzar
en los distintos aspectos del proyecto de forma paralela, realizando un tablero
donde puedas ver en qué está trabajando cada compañera.
Por otra parte, la división del trabajo debe permitir que todo el equipo entrene
los aprendizajes esperados.

Este proyecto tiene el desafío de conocer a sus usuarios, para eso debes salir e
investigar. Tienes la oportunidad de que tu cliente, un emprendedor, invierta en
tu idea, para eso no sólo debes intentar conocer sus intereses, sino mostrar un
producto que tenga viabilidad y que demuestra conocer a sus usuarios.
Para esto, debes ejercitar tus habilidades de comunicación y toma de decisiones.
Existen infinitas opciones, depende de ti el camino que escoges.

Para que tu red social responda a las necesidades de sus usuarios, probablemente
deberás adquirir nuevos conocimientos para implementar sus preferencias. Para
esto, se independiente en adquirir nuevos conocimiento que sean útiles para tu
proyecto y te ayuden a llevarlo al siguiente nivel. Además, esperamos que logren
realizar el hacker edition, para agregar mayor valor a tu proyecto.

Para este proyecto busca instancias de code review, donde deberás buscar
feedback de tu código con otro squad, para que puedas mejorar el producto.
Mientras más feedback recibas, mejor será su producto.

Para finalizar, deberás presentar tu red social, para esto debes presentar el
proyecto que creaste, también al usuario que escogiste y las necesidades que
lograste responder en este proceso. Como siempre, sabemos que presentar puede
ser una instancia difícil, esperamos que logres mostrar tu trabajo y los demás
lo comprendan.

## Hacker edition

Un gran desafío de este proyecto es la coordinación y el trabajo en equipo. Para
lograr esto con éxito debes apoyarte en las habilidades de comunicación y de dar
y recibir feedback.

Esperamos que logres comunicar tus ideas a tu compañeras y a los demás, teniendo
capacidad de síntesis y articulando tus ideas con claridad. Tratas de que tu
equipo te entienda, facilitando siempre el diálogo en dentro del squad.

Para eso, debes valorar y escuchar los comentarios y críticas de los demás,
pudiendo rescatar aquellos aspectos que sirven para tu crecimiento. Busca
instancias de feedback, entregando siempre tu opinión de manera constructiva,
fundamentada y coherente, con el propósito de ayudar a tus compañeras. Estos
comentarios los debes hacer de manera honesta, empática e inmediata.

Además, busca trabajar de manera coordinada y contribuir al objetivo común,
entrega ideas para la construcción de la red social y respeta el trabajo de tus
compañeras. Para esto, entrega tu trabajo a tiempo y colabora con el objetivo
final del proyecto, lo que puede implicar ayudar a los demás miembros del equipo
con sus pendientes, con el fin de entregar una red social de calidad.

Features/características extra sugeridas:

* Crear post con imágenes
* Reemplazar `localStorage`, ¿le has compartido tu red social a tus amigxs? Si
  lo has hecho, te darás cuenta que ellxs no pueden ver tus posts ni tu el de
  ellxs. Esto es debido a que `localStorage` almacena dichos datos localmente
  (en tu navegador) por lo que dichos datos no se comparten, para esto podrías
  implementar una base de datos pero el tiempo podría jugar en contra, para ello
  existen algunos servicios como [Firebase](https://firebase.google.com/products/database/)
  que te proveen soluciones rápidas a este problema y solo usando su SDK :scream:.
* Soportar múltiples vistas/rutas, para esto puedes crear diversos HTMLs,
  manipular el DOM y hacer el render en base a condiciones, usar librerías para
  manejar rutas o la que tu encuentres.

## Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

### Entregables

#### 1) Definición del producto

En el `README.md` cómo conociste el mercado de las redes sociales, cómo
descubriste las necesidades de los usuarios, cómo llegaste  la definición final
de tu producto. Es importante que detalles:

* Cuáles son los elementos básicos que tiene una red social
* Quiénes son los principales usuarios de producto
* Qué problema resuelve el producto para estos usuarios
* Cuáles son los objetivos de estos usuarios en relación con el producto
* Cuáles son las principales funcionalidades del producto y cuál es su prioridad
* Cómo verificaste que el producto les está resolviendo sus problemas
* Cómo te asegurarás que estos usuarios usen este producto

Para poder llegar a estas definiciones te recomendamos ver: benchmarks,
entrevistas con usuarios y tests de usabilidad.

#### 2) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu producto y
con eso deberás diseñar la Interfaz de Usuario (UI por sus siglas en inglés) de
esta red social que siga este flujo. Para esto debes utilizar la herramienta de
diseño visual de tu preferencia. Nosotros te recomendamos Figma dado que es una
herramienta que funciona en el navegador y puedes crear una cuenta gratis. Sin
embargo, eres libre de utilizar otros editores gráficos como Illustrator,
Photoshop, PowerPoint, Keynote, etc.

Este diseño debe representar la solución que se implementará finalmente en código.

Tu diseño debe seguir los fundamentos de visual design, como: contraste,
alineación, jerarquía, entre otros. Tip: revisa el contenido de UX de la unidad
de visual design.

#### 3) Implementación de la Interfaz de Usuario

La idea para este producto es que el producto a desarrollar siga los
lineamientos propuestos en el diseño de la interfaz de usuario. Asegúrate a lo
largo de la implementación que los elementos propuestos están siendo
implementados correctamente. (Hint: testing

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 3
| Nomenclatura/semántica | 3
| Funciones/modularidad | 2
| Estructuras de datos | 2
| Tests | 2
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 3
| SEO | n/a
| **CSS** | |
| DRY | 3
| Responsive | 3
| **SCM** | |
| Git | 3
| GitHub | 3
| **CS** | |
| Lógica | 2
| Arquitectura | 2
| Patrones/paradigmas | n/a

### UX

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 3
| Entrevistas | 2 |
| Testing | 2
| User Flow | 2
| Jerarquía | 3
| Alineación | 3
| Contraste | 3
| Color | 3
| Tipografía | 3

### Habilidades Blandas

Para este proyecto esperamos que ya hayas alcanzado el nivel 3 en todas tus
habilidades blandas. Te aconsejamos revisar la rúbrica:

| Habilidad | Nivel esperado |
|-----------|----------------|
| Planificación y organización | 3
| Autoaprendizaje | 3
| Solución de Problemas | 3
| Dar y recibir feedback | 3
| Adaptabilidad | 3
| Trabajo en equipo (trabajo colaborativo y responsabilidad) | 3
| Comunicación eficaz | 3
| Presentaciones | 3

## Pistas / Tips / Lecturas complementarias

* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
* [Offline first manifesto](http://offlinefirst.org/)
