---
type: read
duration: 120min
---

# XHR Project Demo

## Objetivos de Aprendizaje

- Usar XHR para construir una aplicación

## ¿Por dónde empezamos?

Lo primero y más importante es saber que queremos obtener.

Para este ejercicio guiado queremos hacer una petición a la página del NY Times
y que con la respuesta podamos ocupar sus noticias.

### Manos al teclado

1. Crea una cuenta de desarrollador [aquí](https://developer.nytimes.com/). Nos
   enviarán una clave de acceso, con ella haremos las peticiones

2. Crea un proyecto con sus archivos HTML, CSS y JS
   (Nuestro HTML tiene una estructura sencilla pero tú puedes darle el estilo
   que prefieras)

   ![index-inicial](https://user-images.githubusercontent.com/110297/41572825-5c3288ce-733f-11e8-86aa-c04d17ad2ad2.png)

   Así es como se ve en el navegador:

   ![pantalla-inicial](https://user-images.githubusercontent.com/110297/41572837-71a99922-733f-11e8-93a9-0819ca2998a8.png)

3. En nuestro archivo app.js nos traemos los elementos que usaremos y creamos un
   let sin asignarle valor por el momento

   ![traemos-elementos](https://user-images.githubusercontent.com/110297/41572849-8319f602-733f-11e8-81a5-e5d66a65e26e.png)

4. A nuestro formulario le agregamos el evento `submit` y las instrucciones a
   ejecutar

   ![form-addevent](https://user-images.githubusercontent.com/110297/41572863-9229576e-733f-11e8-9d8b-66d0f8ace7bc.png)

5. Como ya te diste cuenta, está invocando la función `getNews()` y es en esta
   función donde crearemos las peticiones

   ![getnews](https://user-images.githubusercontent.com/110297/41572879-a16ae3c8-733f-11e8-85f6-b9a44caba985.png)

   * Creamos nuestro objeto _(línea 14)_
   * Hacemos uso del método `.open()` y es aquí donde debemos poner la clave que
     llegó a nuestro correo, **sustituyendo** < TU KEY > por tu clave
     _(linea 15)_
   * Las propiedades `.onload` y `.onerror` tienen asignadas sus funciones
     correspondientes
   * Enviamos la petición con el método `.send()`

6. La función `handleError()` quedará así

   ![handle-error](https://user-images.githubusercontent.com/110297/41572899-b6f9e98c-733f-11e8-9879-27588c37898c.png)

7. Vamos a empezar a trabajar con la función `addNews()`

   * Primero podemos hacer un console.log de `this.responseText` para saber que
     nos va a entregar esta respuesta (Un JSON)

   * Ya que vimos que tipo de información nos devolvió, podemos proceder con
     guardarlo en una const y hacer de nuevo un console.log para entender mejor
     la estructura de los datos

     ![add-news1](https://user-images.githubusercontent.com/110297/41572917-cd4a8fde-733f-11e8-8461-d26417c1b42c.png)

     ![consola-data](https://user-images.githubusercontent.com/110297/41572941-e442637e-733f-11e8-9c98-3df461487aa0.png)

8. Observando detenidamente lo que nos regresa la consola vemos que este objeto
   tiene la propiedad `response`

   ![add-news2](https://user-images.githubusercontent.com/110297/41572958-f386d82e-733f-11e8-9c68-9c52e0dc439d.png)

   ![consola-data2](https://user-images.githubusercontent.com/110297/41572975-0245f002-7340-11e8-9407-530a13f0ce2e.png)

9. A partir de este punto ya podemos jugar e investigar este JSON que tenemos
   en consola y por lo tanto ya podemos hacer uso de sus propiedades.

10. Creamos un `li`, le añadimos una clase para que tenga estilos, le agregamos
    texto que obtuvimos del JSON y lo anexamos al `ul`

    ![add-news3](https://user-images.githubusercontent.com/110297/41572984-10d3e732-7340-11e8-8928-756abfb74a18.png)

11. Hecho todo esto, así debería verse en nuestro navegador

    ![pantalla-final](https://user-images.githubusercontent.com/110297/41572997-20eef22e-7340-11e8-830b-8636312f1ad4.png)

> Recuerda que en este ejemplo nuestro _html_ y el _li_ que creamos tienen
> estilos, asi que no te preocupes si se ve diferente. Lo importante es que te
> muestre en pantalla el elemento con los valores
