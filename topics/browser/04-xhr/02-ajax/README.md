---
type: read
duration: 60min
---

# AJAX

## Objetivos de Aprendizaje

- Entender qué significa AJAX

## Un poco de historia

> JavaScript Asíncrono y XML (AJAX) no es una tecnología por sí misma,
> es un término que describe un nuevo modo de utilizar conjuntamente varias
> tecnologías existentes. Esto incluye: HTML o XHTML, CSS, JavaScript, DOM,
> XML, XSLT, y el objeto XMLHttpRequest. Cuando estas tecnologías se combinan
> en un modelo AJAX, es posible lograr aplicaciones web capaces de actualizarse
> continuamente sin tener que volver a cargar la página completa. Esto crea
> aplicaciones más rápidas y con mejor respuesta a las acciones del usuario.

Extracto de MDN WEB DOCS:

> En la aplicación web tradicional, la computadora cliente realiza una solicitud
> de una página web. El servidor crea y regresa la página para el cliente.
> Finalmente, el cliente carga la nueva página y muestra la información.
> Si interactúan con la página, digamos para agregar o eliminar algo o al enviar
> un formulario, vuelve a comenzar el ciclo. El cliente hará otra solicitud,
> el servidor regresa una página totalmente nueva, el cliente carga y se
> lo presenta nuevamente al usuario.

Hasta mediados de la década de los 2000, esta era básicamente la única forma
en que se producía la comunicación por Internet. La información residiría en
el servidor, un cliente solicitaría esos datos, actualizaría la página y
la mostraría. Este ciclo se repetiría para todas y cada una de las
nuevas solicitudes.

A finales de los años 90, el equipo de Microsoft Outlook agregó el componente
XMLHTTP a Internet Explorer y compiló la versión web del cliente de correo de
Outlook. Este código fue recogido por otros navegadores como
**XMLHttpRequest**. Esto permitió a los navegadores realizar solicitudes HTTP
desde Javascript y actualizar la página actual sin recuperar una página
completa del servidor. En lugar del modelo síncrono de espera para una página
completa, la interfaz de usuario podría actualizarse de forma asíncrona a
medida que el usuario siguiera trabajando.

## AJAX

En 2005, Jesse James Garrett acuñó el término AJAX para significar
"Javascript y XML asíncronos". Esta es esencialmente la técnica de usar
XMLHTTPRequest para recuperar datos y luego modificar la página actual.

AJAX tomó el mundo de la web por asalto, extendiéndose mucho más allá de
Microsoft Outlook. Las aplicaciones web de vanguardia como Flickr, GMail y
Google Maps lo adoptaron rápidamente. En lugar de tener que esperar para
obtener datos y actualizar la página completa, estas nuevas aplicaciones
casi instantáneas fueron increíbles.

[Video AJAX](https://www.youtube.com/watch?v=_ybgWmSCAu8)

En la lectura y vídeo anterior se menciona JSON y XML, vayamos a este [enlace](https://medium.com/laboratoria-how-to/como-enviar-y-recibir-información-en-internet-json-y-xml-456d5109e885)
para leer al respecto.

Y por último terminamos con esta [lectura](https://medium.com/laboratoria-how-to/entendiendo-como-funciona-el-internet-parte-ajax-c993f9802e72)
que nos resume y explica con otras palabras que es AJAX.
