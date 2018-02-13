# XHR Project Demo

- Tipo: `lectura`
- Formato: `self-paced`
<<<<<<< HEAD
- Duración: `30min`
=======
- Duración: `120min`
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de

***

## Objetivos de Aprendizaje

- Usar XHR para construir una aplicación

<<<<<<< HEAD
## Boilerplate inicial

## Creación de cuentas

## Demo de Request

Referencia: https://classroom.udacity.com/courses/ud109/lessons/8cb1042e-3260-469c-9f78-8e2f092a4725/concepts/685ff9da-fbaa-400c-94ae-72ab42743137

## Request Header

Referencia: https://classroom.udacity.com/courses/ud109/lessons/8cb1042e-3260-469c-9f78-8e2f092a4725/concepts/9795d421-8e6c-4ab4-85ad-5b786aa36238

## Demo final

[![XHR analogy](https://img.youtube.com/vi/eumAZ9Wo9i0/0.jpg)](https://youtu.be/eumAZ9Wo9i0)
=======
## ¿Por dónde empezamos?

Lo primero y más importante es saber que queremos obtener.

Para este ejercicio guiado queremos hacer una petición a la página del NY Times
y que con la respuesta podamos ocupar sus noticias.

### Manos al teclado

1. Crea una cuenta de desarrollador aquí https://developer.nytimes.com/
  Nos enviarán una clave de acceso, con ella haremos las peticiones

2. Crea un proyecto con sus archivos HTML, CSS y JS
  (Nuestro HTML tiene una estructura sencilla pero tú puedes darle el estilo
  que prefieras)

  ![index](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/index-inicial.png)  

  Así es como se ve en el navegador:

  ![pantalla](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/pantalla-inicial.png)

3. En nuestro archivo app.js nos traemos los elementos que usaremos y creamos
  un let sin asignarle valor por el momento

  ![elementos](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/traemos-elementos.png)

4. A nuestro formulario le agregamos el evento `submit` y las instrucciones a
  ejecutar

  ![form](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/form-addEvent.png)

5. Como ya te diste cuenta, está invocando la función `getNews()` y es en esta
  función donde crearemos las peticiones

  ![getnews](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/getnews.png)

  - Creamos nuestro objeto _(línea 14)_

  - Hacemos uso del método `.open()` y es aquí donde debemos poner la clave que
    llegó a nuestro correo, **sustituyendo** < TU KEY > por tu clave
    _(linea 15)_

  - Las propiedades `.onload` y `.onerror` tienen asignadas sus funciones
    correspondientes

  - Enviamos la petición con el método `.send()`

6. La función `handleError()` quedará así

  ![handleError](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/handle-error.png)

7. Vamos a empezar a trabajar con la función `addNews()`

  - Primero podemos hacer un console.log de `this.responseText` para saber que
    nos va a entregar esta respuesta (Un JSON)

  - Ya que vimos que tipo de información nos devolvió, podemos proceder con
    guardarlo en una const y hacer de nuevo un console.log para entender mejor
    la estructura de los datos

    ![addNews](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/add-news1.png)

    ![consola-data](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/consola-data.png)

8. Observando detenidamente lo que nos regresa la consola vemos que este objeto
  tiene la propiedad `response`

  ![addNews](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/add-news2.png)

  ![consola-data](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/consola-data2.png)

9. A partir de este punto ya podemos jugar e investigar este JSON que tenemos
  en consola y por lo tanto ya podemos hacer uso de sus propiedades.

10. Creamos un `li`, le añadimos una clase para que tenga estilos, le agregamos
  texto que obtuvimos del JSON y lo anexamos al `ul`

  ![addNews](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/add-news3.png)

11. Hecho todo esto, así debería verse en nuestro navegador

  ![pantalla](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/pantalla-final.png)

> Recuerda que en este ejemplo nuestro _html_ y el _li_ que creamos tienen
> estilos, asi que no te preocupes si se ve diferente. Lo importante es que te
> muestre en pantalla el elemento con los valores
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de
