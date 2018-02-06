# XHR Recap

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

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
