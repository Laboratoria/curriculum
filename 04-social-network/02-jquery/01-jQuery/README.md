# jQuery

- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `60min`

***

## Objetivos de aprendizaje

- Conocer quien es este nuevo amigo.
- Saber como lo incluimos en nuestros proyectos

## ¿Qué es jQuery?

Ya nos queda claro que este nuevo amigo se lleva súper bien con los frameworks
de css, pero en realidad conocemos muy poco de él, así que en esta lección
vamos a profundizar en su información para poder conocerlo mejor y entonces ver
si lo incluimos en nuestro círculo de nuevas amistades o no.

[jQuery](https://jquery.com/) es una librería de JavaScript (**no** es un
**framework**) y nos ofrece las siguientes características:

  - Facilita la manera de interactuar con los documentos HTML
  - Manipulación del DOM
  - Manejar eventos
  - Desarrollar animaciones
  - Agregar interacciones con AJAX

### ¿Cómo lo incluimos?

Para incluirlo en nuestro proyecto contamos con dos opciones:

  1. [Descargando](http://jquery.com/download/) la librería de jQuery e
    incluirla en el proyecto.

  ```html
  <script src=”jquery-3.2.1.min.js”></script>
  ```

  2. Incluyendo el [CDN](https://code.jquery.com/) de jQuery.

  ```html
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  ```

### Ok, ya queremos usarlo

Ya casi estamos listas para probar, equivocarnos, iterar y triunfar!

La sintaxis de jQuery está hecha para seleccionar elementos de HTML y realizar
alguna acción sobre el elemento.

La sintaxis básica de jQuery es:

```js
 $ ("selector").acción();
```

- El signo $ es para definir el acceso a jQuery
- El (“selector”) es el elemento HTML a encontrar y/o consultar
- La acción() es la que se realizara con el elemento

Ya que incluimos jQuery en nuestro proyecto y tenemos clara la sintaxis,
necesitamos indicar o esperar que nuestro documento este completamente cargado
y listo antes de trabajar con él.

Así que en nuestro archivo js usamos:

```js
  $(document).ready();
```

- El signo $ indica que estamos trabajando con jQuery
- (document) especifica que vamos a manipular el documento de HTML
  **Nota:** document no es un elemento de HTML por eso no va entre comillas
- .ready() es un método de jQuery que ejecuta una función hasta que se cargue
  por completo el DOM

#### La filosofía de jQuery es: *¨Write less, do more¨*

Y no se tú, pero a mi parecer nuestro círculo de amigos va en aumento!
