# RESTful APIs

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

- Entender a grandes rasgos qué es REST y cómo detectar qué APIs son RESTful

## Formato de contenido

### XML

> Extensible Markup Language (XML) es un formato universal para datos y
> documentos estructurados. Los archivos XML tienen una extensión de archivo de
> `.xml`. Al igual que HTML, XML utiliza etiquetas (palabras delimitadas por los
> caracteres `>` y `<`) para estructurar los datos del documento.
>
> ```xml
> <?xml version="1.0" encoding=UTF-8"?>
> <doc>
>    <customer id='123'>
>       <name>...</name>
>       <address>...</address>
>        ...
>       <order>
>          <amount>...</amount>
>             <date>...</date>
>          <item quant='12'>
>             <name>...</name>
>          </item>
>          <item quant='4'>...</item>
>           ...
>       </order>
>       <order>...</order>
>        ...
>       <payment>
>          <number>...</number>
>          <date>...</date>
>       </payment>
>       <payment>>...</payment>
>        ...
>    </customer>
>    <customer id='124'>...</customer>
> </doc>
> ```

Fuente: [¿Qué es XML? - IBM](https://www.ibm.com/support/knowledgecenter/es/SSEPGG_8.2.0/com.ibm.db2.ii.doc/opt/c0007799.htm)

### JSON

> JSON (JavaScript Object Notation) es un formato para el intercambios de datos,
> básicamente JSON describe los datos con una sintaxis dedicada que se usa para
> identificar y gestionar los datos. JSON nació como una alternativa a XML, el
> fácil uso en javascript ha generado un gran numero de seguidores de esta
> alternativa. Una de las mayores ventajas que tiene el uso de JSON es que puede
> ser leído por cualquier lenguaje de programación. Por lo tanto, puede ser
> usado para el intercambio de información entre distintas tecnologías.

Fuente: [¿Qué es y para qué sirve JSON? - GeekyTheory](https://geekytheory.com/json-i-que-es-y-para-que-sirve-json/)

> ```json
> {
>   "squadName": "Super hero squad",
>   "homeTown": "Metro City",
>   "formed": 2016,
>   "secretBase": "Super tower",
>   "active": true,
>   "members": [
>     {
>       "name": "Molecule Man",
>       "age": 29,
>       "secretIdentity": "Dan Jukes",
>       "powers": [
>         "Radiation resistance",
>         "Turning tiny",
>         "Radiation blast"
>       ]
>     },
>     {
>       "name": "Madame Uppercut",
>       "age": 39,
>       "secretIdentity": "Jane Wilson",
>       "powers": [
>         "Million tonne punch",
>         "Damage resistance",
>         "Superhuman reflexes"
>       ]
>     },
>     {
>       "name": "Eternal Flame",
>       "age": 1000000,
>       "secretIdentity": "Unknown",
>       "powers": [
>         "Immortality",
>         "Heat Immunity",
>         "Inferno",
>         "Teleportation",
>         "Interdimensional travel"
>       ]
>     }
>   ]
> }
> ```

Fuente: [Ejemplo - Trabajando con JSON - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)

En el siguiente video, encuentras un resumen de formato de contenidos:

[![Content Formatting](https://img.youtube.com/vi/hTdYO7tKh_k/0.jpg)](https://youtu.be/hTdYO7tKh_k)

Si quieres comparar un poco sobre estas 2 estructuras de información, aquí un
video te lo resume:

[![XML vs JSON](https://img.youtube.com/vi/95X-pHvGBnw/0.jpg)](https://youtu.be/95X-pHvGBnw)

## Servicios Web

### SOAP

> SOAP (originalmente las siglas de Simple Object Access Protocol) es un
> protocolo estándar que define cómo dos objetos en diferentes procesos pueden
> comunicarse por medio de intercambio de datos XML. Este protocolo deriva de un
> protocolo creado por Dave Winer en 1998, llamado XML-RPC. SOAP fue creado por
> Microsoft, IBM y otros. Está actualmente bajo el auspicio de la W3C. Es uno de
> los protocolos utilizados en los servicios Web.

Fuente: [SOAP - Wikipedia](https://es.wikipedia.org/wiki/Simple_Object_Access_Protocol)

### REST

> "Representational State Transfer" o traducido a "Transferencia de presentación
> de estado" es lo que se domina a REST. ¿Y eso es?, una técnica de arquitectura
> de software usada para construir APIs que permitan comunicar a nuestro servidor
> con sus clientes usando el protocolo HTTP mediante URIs lo suficientemente
> inteligentes para poder satisfacer la necesidad del cliente.
>
> - REST es STATELESS, es decir que cada petición que reciba nuestra API debe
>   perecer. Por ejemplo, no podemos RECORDAR un usuario logeado en el API
>   usando una sesión, esto es un PECADO ya que agotaría la memoria RAM de
>   nuestro servidor (10 mil usuarios conectados a nuestra API). Lo que correcto
>   es pasar un TOKEN para cada petición realizada al API, y el API deberá
>   validar si esta es correcta o no (por ahora no vamos hablar de técnicas para
>   generar el TOKEN, pero lo más común es usar una COOKIE).
> - Se implementan RECURSOS para generar comunicación, es decir crea URIs únicas
>   que permiten al cliente entender y utilizar lo que está exponiendo.
>   Por ejemplo:
>   * `https://jsonplaceholder.typicode.com/users`
>   * `https://jsonplaceholder.typicode.com/users/1`
> - Cada petición realizada a nuestra API responde a un verbo, y dicho verbo a
>   una operación en común. Mediante los métodos HTTP hacemos las peticiones, lo
>   común es GET y POST, PUT y DELETE.
>   * **POST (create):** cuando mandamos información para insertar por ejemplo un
>     registro en la base de datos. La información es enviado en el cuerpo de la
>     petición, es decir que los datos no son visibles al usuario.
>     `POST /users`
>   * **GET (read):** es usado para modo lectura, por ejemplo: cuando queremos
>     listar a todos los usuarios de nuestra base de datos. Los parámetros son
>     enviados por la URL.
>     `GET /users`
>   * **PUT (update):** cuando queremos actualizar un registro. Actualizar la
>     información de un usuario X.
>     `PUT /users/:userId`
>   * **DELETE (delete):** cuando queremos eliminar un registro. Borrar un
>     usuario X de nuestra base de datos.
>     `DELETE /uses/:userId`
>
> Con esto hemos mencionado algunas caracteristicas básicas de lo que es REST,
> la cual podríamos decir que es un estándar para crear una REST Api o RESTFul.

Lee más: [¿Qué es REST? Conoce su potencia](https://openwebinars.net/blog/que-es-rest-conoce-su-potencia/)

A continuación puedes ver un video que resume SOAP y REST:

[![Web Service Layer](https://img.youtube.com/vi/AyQboo5CycM/0.jpg)](https://youtu.be/AyQboo5CycM)

Por convenciones, cada uno de los estándares usa un formato de contenido
particular. En resumen, SOAP transfiere información a través de XML, mientras
que REST frecuenta transferir datos usando JSON. Aquí tienes un video que resume
este mensaje:

[![SOAP vs REST](https://img.youtube.com/vi/aI1DSeZAEMA/0.jpg)](https://youtu.be/aI1DSeZAEMA)

## Conclusión

¿No te quedó claro que son RESTful APIs? Mientras REST es un estándar, la
implementación de éste en un API, viene a ser los RESTful APIs. Si bien al
diseñar un API hay muchas más cosas que se toman en cuenta, la principal es que
te enfoques en cómo se obtienen los recursos y así poder identificar los métodos
y URIs necesarias para consumir el API.

Ejemplos de RESTful APIs son:

- [Stripe](https://stripe.com/docs/api/php)
- [Instagram](https://www.instagram.com/developer)
- [Spotify](https://developer.spotify.com/web-api/)
- [Lyft](https://developer.lyft.com/docs/overview)
- Muchas más!

Si quieres saber más sobre REST, aquí un [tutorial](http://www.restapitutorial.com/)
que te puede ayudar.
