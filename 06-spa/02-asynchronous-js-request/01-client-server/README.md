# Comunicación Cliente Servidor

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

- Entender el flujo de request y response y qué significa que sea asíncrono

## Petición y Respuesta

Para entender esto, lo primero es recordar que existe un protocolo de
comunicación en el que se deja claro cómo y de que manera un cliente
(navegador) pide información/datos a un servidor. Ya teniendo en cuenta
esto revisemos la siguiente imagen:

![comunicación](http://www.solocodigoweb.com/wp-content/uploads/2017/06/clientserver.jpg)

En la imagen se puede apreciar como un cliente (emisor) realiza una solicitud
HTTP (**HTTP Request**) a un servidor (receptor) y este último le responde
(**HTTP Response**) el pedido.

Estos _request y response_ son transportados a través de internet como
intermediario.

Cuando hacemos esto normalmente lo realizamos de forma **Síncrona**, es decir
que necesitamos que cada petición tenga su respuesta antes de enviar otra
petición.

> Cuando el navegador hace una petición de forma síncrona tiene que esperar la
> respuesta antes de proceder a la carga de una página

Pero esto en algún momento ya no nos va a resultar tan eficiente o funcional
así que podemos hacerlo de manera **Asíncrona** haciendo uso de **AJAX** y de
esta forma podemos hacer más de una "tarea" a la vez.

> Cuando el navegador hace peticiones de forma asíncrona, estas pueden
> ocurrir en el fondo sin bloquear la carga de una página

En el siguiente vídeo los geniales amigos de UDACITY nos explican de manera
visual lo anterior, está en inglés pero ya sabemos que ese no es impedimento
para que entendamos el concepto :muscle:

[![Client-server communication](https://img.youtube.com/vi/nozbz6J3_4w/0.jpg)](https://youtu.be/nozbz6J3_4w)
