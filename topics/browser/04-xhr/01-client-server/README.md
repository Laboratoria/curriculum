---
type: read
duration: 30min
---

# Comunicación Cliente Servidor

## Objetivos de Aprendizaje

- Entender el flujo de petición y respuesta
- Qué significa que sea asíncrono

## Petición y Respuesta

Para entender esto, lo primero es recordar que existe un protocolo de
comunicación en el que se deja claro cómo y de que manera un cliente
(navegador) pide información/datos a un servidor. Ya teniendo en cuenta
esto revisemos la siguiente imagen:

![comunicación](http://www.solocodigoweb.com/wp-content/uploads/2017/06/clientserver.jpg)

En la imagen se puede apreciar como un cliente (emisor) realiza una solicitud
HTTP (**HTTP Request**) a un servidor (receptor) y este último le responde
(**HTTP Response**) el pedido.

Estas _peticiones y respuestas_ (que generalmente son conocidas como _requests
y responses_, su traducción en inglés) son transportados a través de internet
como medio de comunicación.

Cuando hacemos esto normalmente lo realizamos de forma **Síncrona**, es decir
que necesitamos que cada petición tenga su respuesta antes de enviar otra
petición, tal como en una conversación entre dos personas.

> Cuando el navegador hace una petición de forma síncrona tiene que esperar la
> respuesta antes de proceder a la carga de una página

Pero esto en algún momento ya no nos va a resultar tan eficiente o funcional,
ten en cuenta que generalmente solo una petición no es lo único que una
aplicación está haciendo, y en general estará haciendo muchas peticiones a la
vez, es por eso que podemos, y debemos, hacerlo de manera **Asíncrona** haciendo
uso de **AJAX** y así lograr hacer más de una "tarea" a la vez.

> Cuando el navegador hace peticiones de forma asíncrona, estas pueden
> ocurrir en el fondo sin bloquear la carga de una página

En el siguiente vídeo los geniales amigos de UDACITY nos explican de manera
visual lo anterior, está en inglés pero ya sabemos que ese no es impedimento
para que entendamos el concepto :muscle:

[![Client-server communication](https://img.youtube.com/vi/nozbz6J3_4w/0.jpg)](https://youtu.be/nozbz6J3_4w)
