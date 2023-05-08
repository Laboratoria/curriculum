---
type: read
duration: 20min
---

# Third party APIs

## Objetivos de Aprendizaje

- Entender la diferencia entre las APIs del navegador y las APIs de terceros
- Conocer las ventajas de usar APIs de terceros

## Recordemos qué es un web API

Ya hemos visto muchas veces que el acrónimo de API significa Application
Programming Interface (Interfaz de programación de aplicaciones) y que la
podemos encontrar en distintos lugares como el navegador, la computadora, la
web y demás. También hemos escuchado que nos da interoperabilidad entre diversos
sistemas, en esta unidad nos enfocaremos no en la comunicación con un único
dispositivo sino entre miles o millones de esto, ¿cómo?. A través de internet,
por ello, nos enfocaremos en las **Web APIs**. Alista tu subtítulos cone el
traductor automático y mira este video:

[![Web APIs](https://img.youtube.com/vi/_49_6pjTXiQ/0.jpg)](https://youtu.be/_49_6pjTXiQ)

## APIs de terceros

> Los APIs de terceros son APIs provistas por terceros (duh), estos terceros
> son generalmente compañías como Google, Facebook, entre otras - que permiten
> acceder a su funcionalidad a través de un lenguaje de programación (en nuestro
> caso JavaScript) y usarlo en nuestra web app.

Este es un extracto traducido de un [artículo de MDN sobre Third Party APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs).

## Pros y contras del uso de APIs de Terceros

> ### Pros del uso de APIs de terceros
>
> - **Rapidez.** El poder integrar en cuestión de segundos mapas, imágenes o
>   servicios de autenticación en nuestras aplicaciones nos descarga de gran parte
>   de la programación y nos permite centrarnos rápidamente en nuestro dominio de
>   negocio.
> - **Robustez.** La mayoría de APIs y servicios más populares están tan sumamente
>   extendidos que han sido probados en toda clase de situaciones de estrés, por
>   lo que podremos asegurar que su respuesta será adecuada en la inmensa mayoría
>   de los casos.
> - **Imagen.** Cuando los usuarios usan a menudo un buen servicio, lo acaban
>   reconociendo, y el asociar nuestra imagen a la de un grande como Google,
>   Facebook o Twitter, puede ayudarnos a contagiarnos de la buena percepción que
>   los usuarios tienen de estos gigantes.
> - **Mantenimiento.** Por norma general, las grandes empresas no dejarán que sus
>   productos se deterioren, por lo que es bastante común que los servicios
>   accedidos a través de las APIs estén en una constante mejora, que además en
>   muchos casos será totalmente transparente al programador que las usa.
> - **Innovación.** Al hilo de lo anterior, es lógico pensar que empresas líderes
>   como Microsoft, eBay o Amazon no se conformarán con mantener sus aplicaciones
>   para que funcionen bien, sino que tratarán de mejorarlas constantemente, con
>   lo que los usuarios de sus APIs se verán beneficiados con todas las mejoras
>   que se vayan produciendo.
>
> ### Contras del uso de APIs de terceros
>
> - **Condiciones cambiantes.** Al ligarnos a una tercera empresa por un contrato
>   tan débil como es la licencia de uso de una API, normalmente estamos expuestos
>   a la voluntad de la otra parte, lo que puede suponer recortes en las
>   prestaciones, obsolescencia de métodos implementados o pérdida de la gratuidad
>   del servicio, tal y como acaba de ocurrir con Google Maps.
> - **Disponibilidad.** Como si no fuera suficiente con preocuparnos de mantener
>   en funcionamiento nuestro propio servidor y aplicaciones, caídas de servicios
>   externos, como las ocurridas este año con Amazon, pueden dejar tus servicios
>   inutilizados. ¿Os imagináis tener una tienda virtual que funcione a la
>   perfección pero sólo admita pagos por PayPal y que éstos no funcionen?
> - **Imagen.** Antes lo nombré como una ventaja, ya que podemos favorecernos del
>   prestigio de una buena marca al trabajar con ella, pero ¿Qué ocurre cuando la
>   reputación de nuestros partners desciende hasta el fango? Desgraciadamente es
>   muy difícil separar por completo la imagen de unos y otros, y nos veremos
>   perjudicados por los errores ajenos.
> - **Falta de innovación.** Cuando los servicios de terceros que utilizamos van
>   por delante en progreso e innovación no suele haber quejas, pero también puede
>   ocurrir lo contrario: que se estanquen, nuestra aplicación avance más rápido
>   y su API ya no pueda cumplir nuestras exigencias. Ante situaciones así se
>   plantea la difícil decisión de cambiar de proveedor de servicios o
>   implementarlos por tu cuenta, con el consiguiente sobrecoste.
> - **Privacidad.** Las leyes son muy distintas en cada país, y algunas como la
>   Ley Orgánica de Protección de Datos española (LOPD), que es más restrictiva
>   que las equivalentes de   otros países, pueden impedirnos legalmente delegar
>   ciertos datos o servicios para su trato por terceros.

Estos pros y contras son parte de un [post de GenbetaDev](https://www.genbetadev.com/programacion-en-la-nube/pros-y-contras-del-uso-de-apis-de-terceros).
Nosotros nos enfocaremos en las cosas positivas en este momento y sacaremos
provecho de todo lo que nos ofrecen las APIs de terceros y hacer apps increíbles.
