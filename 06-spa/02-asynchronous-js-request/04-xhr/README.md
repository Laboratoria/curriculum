# XHR

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

- Entender qué es XHR

## Analogía

Una buena manera de entender XHR es usando la siguiente analogía:

> **Preparar un pastel!**
> Para prepararlo necesitamos, harina, huevo, leche, mantequilla y un horno.
> Encendemos el horno. Luego procedemos a mezclar los 4 ingredientes y ya
> lista la mezcla la metemos al horno, aquí va a tardar un poco en lo que se
> hornea pero mientras podemos ir preparando la cubierta del pastel.

Un objeto XHR es proporcionado por el entorno de JavaScript y se utiliza para hacer peticiones AJAX, es muy parecido a la parte de la preparación de la mezcla donde primero debemos "preparar" las configuraciones y luego mandar nuestra petición, pero una vez hecho esto nuestro código puede seguir adelante y hacer otras peticiones o tareas.

> Cuando el horno nos regresa el pastel horneado podemos continuar con
> decorarlo

Una vez que nuestra petición tiene respuesta puede seguir adelante con lo que hayamos dispuesto para esta "tarea".

## XMLHTTPRequest

Al igual que el entorno de JavaScript proporciona el documento, el entorno de JavaScript también nos proporciona una forma de realizar solicitudes HTTP asíncronas. Hacemos eso con un objeto XMLHttpRequest. Podemos crear estos objetos con la función de constructor XMLHttpRequest proporcionada.
Confusamente, la función de constructor tiene "XML", pero no está limitado solo a documentos XML. Recuerde que el acrónimo "AJAX" solía representar "JavaScript y XML asíncronos". Dado que el formato de archivo principal que se utilizó originalmente para el intercambio asíncrono de datos eran archivos XML, es fácil ver por qué la función se llama XMLHttpRequest!

XMLHttpRequests (comúnmente abreviado como XHR o xhr) se puede utilizar para solicitar cualquier tipo de archivo (por ejemplo, archivos de texto plano, HTML, JSON, de imagen, etc.) o datos de una API.

Nota: profundizaremos en el objeto XMLHttpRequest. Veremos cómo crearlo, qué métodos y propiedades se deben usar y cómo enviar realmente solicitudes asincrónicas. Para obtener más información sobre el uso del objeto XHR para realizar solicitudes asíncronas, consulte estos enlaces:

MDN's docs - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open
WHATWG Spec - https://xhr.spec.whatwg.org/
W3C Spec - https://www.w3.org/TR/XMLHttpRequest/

¡Una de las mejores formas de aprender es ensuciarse las manos y probar cosas! Vaya a Unsplash, abra las herramientas de desarrollador y ejecute lo siguiente en la consola:

const asyncRequestObject = new XMLHttpRequest ();

## XHR's object `.open()` method

So we've constructed an XHR object named asyncRequestObject. There are a number of methods that are available to us. One of the most important is the open method.

asyncRequestObject.open();
.open() takes a number of parameters, but the most important are its first two: the HTTP method URL to send the request

If we want to asynchronously request the homepage from the popular high-res image site, Unsplash, we'd use a GET request and provide the URL:

asyncRequestObject.open('GET', 'https://unsplash.com');
A little rusty on your HTTP methods?
The main two that you'll be using are:

GET - to retrieve data
POST - to send data
For more info, check out our course on HTTP & Web Servers!

Warning: For security reasons, you can only make requests for assets and data on the same domain as the site that will end up loading the data. For example, to asynchronously request data from google.com your browser needs to be on google.com. This is known as the same-origin policy. This might seem extremely limiting, and it is!

The reason for this is because JavaScript has control over so much information on the page. It has access to all cookies and can determine passwords since it can track what keys are pressed. However, the web wouldn't be what it is today if all information was bordered off in its own silos. The way to circumvent the same-origin policy is with CORS (Cross-Origin Resource Sharing). CORS must a technology that is implemented on the server. Services that provide APIs use CORS to allow developers to circumvent the same-origin policy and access their information.

## XHR's object `.send()` method

To actually send the request, we need to use the send method:

```javascript
asyncRequestObject.send();
```

Let's check out what happens:

![XHR send method](https://d17h27t6h515a5.cloudfront.net/topher/2017/August/59938614_ud109-l1-send-xhr-request-1/ud109-l1-send-xhr-request-1.gif)

[![XHR sened method analysis](https://img.youtube.com/vi/m9C0LJoWhOE/0.jpg)](https://youtu.be/m9C0LJoWhOE)

It's a little pointless to make a request for something but then do absolutely nothing with it! Why would you order some cake and then not go to pick it up or not eat it? The horror! We want to eat our cake, too!

## Handling Success

To handle the successful response of an XHR request, we set the onload property on the object to a function that will handle it:

```javascript
function handleSuccess () {
    // in the function, the `this` value is the XHR object
    // this.responseText holds the response from the server

    console.log( this.responseText ); // the HTML of https://unsplash.com/
}

asyncRequestObject.onload = handleSuccess;
```

As we just saw, if onload isn't set, then the request does return...but nothing happens with it.

## Handling Errors

You might've picked up that onload is called when the response is successful. If something happens with the request and it can't be fulfilled, then we need to use the onerror property:

```javascript
function handleError () {
    // in the function, the `this` value is the XHR object
    console.log( 'An error occurred 😞' );
}

asyncRequestObject.onerror = handleError;
```

As with onload, if onerror isn't set and an error occurs, that error will just fail silently and your code (and your user!) won't have any idea what's wrong or any way to recover.

## Putting it together

Here's the full code that we've built up that creates the XHR object, tells it what info to request, sets up handlers for a success or error, and then actually sends the request:

```javascript
function handleSuccess () {
  console.log( this.responseText );
  // the HTML of https://unsplash.com/
}

function handleError () {
  console.log( 'An error occurred \uD83D\uDE1E' );
}

const asyncRequestObject = new XMLHttpRequest();
asyncRequestObject.open('GET', 'https://unsplash.com');
asyncRequestObject.onload = handleSuccess;
asyncRequestObject.onerror = handleError;
asyncRequestObject.send();
```

## APIs and JSON

Getting the HTML of a website is ok, but it's probably not very useful. The data it returns is in a format that is extremely difficult to parse and consume. It would be a lot easier if we could get just the data we want in an easily formatted data structure. If you're thinking that JSON would be a good idea, then you're right and I'll give you a piece of my cake!

Instead of requesting the base URL for Unsplash, let's create an app that pulls an image from Unsplash's API and relevant articles from the New York Times.

When making a request from an API that returns JSON, all we need to do is convert that JSON response into a JavaScript object. We can do that with JSON.parse();. Let's tweak the onload function to handle a JSON response:

```javascript
function handleSuccess () {
  const data = JSON.parse( this.responseText ); // convert data from JSON to a JavaScript object
  console.log( data );
}

asyncRequestObject.onload = handleSuccess;
```
