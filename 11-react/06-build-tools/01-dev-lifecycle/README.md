# Ciclo de desarrollo de software

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `5min`

***

Si simplificamos al mínimo el proceso de desarrollo de software, podríamos
establecer 3 etapas básicas: **desarrollo**, **empaquetado** y **despliegue**.

## Desarrollo

Durante esta etapa creamos el producto que tenemos en mente (o iteramos sobre
él). Para ese fin, es importante contar con herramientas que nos permitan
**reconocer rápidamente un error** e **identificar dónde ocurre** para poder
corregirlo, que nos permitan obtener feedback de nuestros cambios tan rápido
como sea posible.

Por ejemplo, en nuestra app, hemos configurado a `webpack` para que:

1. abra un navegador cuando el código sea "compilado" por primera vez
2. refresque el contenido cada vez que realizamos un cambio.

***

**NOTA**:

`webpack`

* nos avisa cuando el contenido esta disponible (en lugar de presionar F5
  hasta que la página esté disponible)
* ahorra el paso extra de refrescar manualmente el navegador para comprobar un
  cambio
* modifica el DOM con los cambios sin ni siquiera refrescar la página.

Estos pequeños ahorros de "tiempos muertos" repercuten en una experiencia de
desarrollo (DX) mucho mas fluída.

***

## Empaquetado

Durante la etapa de desarrollo cuando ejecutamos nuestra aplicación necesitamos
mucha información, y mucha de ella es agregada exclusivamente con esos fines.

Pero cuando queremos empaquetar nuestra aplicación para publicarla al mundo,
necesitamos que sea tan **pequeña** como sea posible y que se ejecute lo más
**rápido** posible.

En este escenario, decimos que nuestra aplicación debe estar **optimizada**
para un entorno de *producción*.

Estos procesos de *empaquetado* (`bundling`) puede tener infinidad de pasos,
algunos comunes:

* concatenar, *minificar* y *uglifycar* todo el codigo de un mismo tipo en un
  solo archivo
* optimizar imágenes, audio y video
* crear sprites o versiones *retina* y *standard* para las iḿágenes de fondo
* ... infinidad de cosas mas

## Despliegue (`deployment`)

Pero nada de todo lo que hemos realizado hasta aquí tiene sentido, si no se lo
podemos mostrar al mundo (o por lo menos a nuestrxs amigxs).

Una vez que tenemos nuestro *bundle* tenemos que decidir dónde lo publicamos.
Existen *millones de alternativas*, para *millones de tecnologías*, **tanto de
pago como gratuitas**.

Como nosotros sólo necesitamos desplegar recursos estáticos, usaremos
[Github Pages](https://pages.github.com/). Github Pages (`gh-pages`) te
permite publicar contenido web asociado a tus proyectos.

***

Ya contamos con la configuración para nuestro proceso de **desarrollo** en
`webpack.config.js`, en el resto de las lecturas de esta unidad, veremos cómo
usar `webpack`, `npm scripts` y `gh-pages` para **empaquetar** y **desplegar**
nuestra aplicación.
