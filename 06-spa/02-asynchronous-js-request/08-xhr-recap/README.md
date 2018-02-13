# XHR Recap

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

<<<<<<< HEAD
- Reflexionar sobre lo aprendido sobre XHR

## XHR Usage Review

There are a number of steps you need to take to send an HTTP request asynchronously with JavaScript.

### To Send An Async Request

- create an XHR object with the XMLHttpRequest constructor function
- use the .open() method - set the HTTP method and the URL of the resource to be fetched
- set the .onload property - set this to a function that will run upon a successful fetch
- set the .onerror property - set this to a function that will run when an error occurs
- use the .send() method - send the request

### To Use The Response

- use the .responseText property - holds the text of the async request's response

> Note: The original XHR specification was created in 2006. This was version 1 of the specification. A number of years with minimal changes to the spec.

> In 2012, work was started on a version 2 of the XHR specification. In 2014, the XHR2 spec was merged into the XHR1 spec so that there wouldn't be diverging standards. There are still references to XHR2, but the XHR specification now fully incorporates XHR2.

> Check out this HTML5Rocks article for info on the new tricks in XHR2 that are now in the XHR spec.

## What's next?

[![XHR analogy](https://img.youtube.com/vi/ZHHubdMGMvI/0.jpg)](https://youtu.be/ZHHubdMGMvI)
=======
- Reflexionar lo aprendido sobre XHR

## Como usamos XHR

Hay una serie de pasos que debemos seguir para enviar una solicitud HTTP
de forma asíncrona con JavaScript.

### Para enviar una petición

- Creamos un objeto XHR con la función del constructor XMLHttpRequest

- Utilizamos el método .open() y configuramos el método HTTP y la URL
  del recurso que se va a buscar

- Establecemos la propiedad .onload a nuestro objeto y a esto le asignamos
  una función que se ejecutará en una búsqueda exitosa

- Establecer la propiedad .onerror a nuestro objeto y a esto le asignamos una
  función que se ejecutará cuando se produzca un error

- Usamos el método .send() para que envíe la solicitud

### Para usar la respuesta

- Usamos la propiedad .responseText, que contiene el texto de la respuesta de
  la solicitud asincrónica

- Podemos usarla tal cual nos es devuelta o en caso de ser devuelta como un JSON
  la convertimos en Objeto JavaScript con JSON.parse()

## Qué sigue?

Probablemente te preguntes si realmente es necesario escribir todos esos pasos
para conseguir nuestras peticiones asíncronas, la respuesta es **Sí** pero lo
que no es necesario es escribir todas esas líneas de código. Si hacemos uso de
alguna biblioteca como jQuery, esta puede hacer la petición por nosotros y ya
sabemos que cada que usamos una biblioteca se ocupa menos código y lo hacemos
un poco más eficiente.
>>>>>>> ecbbb00edd44800c7b2f51c15dc469133655c4de
