---
type: read
duration: 30min
---

# jQuery AJAX Recap

## Objetivos de Aprendizaje

- Reflexionar sobre lo aprendido de AJAX, jQuery, fetch.

## Conclusiones

En esta segunda parte de la unidad, hemos visto cómo realizar una petición HTTP
asíncrona a través de jQuery. Las ventajas que nos da usar una librería como
esta es ahorrarnos tiempo y código para la configuración que se haría
nativamente a través del objeto `XMLHTTPRequest` además de la verificación
de compatibilidad entre navegadores.

En una de las lecturas, se hizo la mención a que si era conveniente usar jQuery
para estas peticiones asíncronas y expresamos esto debido a que ésta librería
no está dedicada a solo esto sino a más. La respuesta es que en la actualidad
se prefiere usar microlibrerías (librerías mucho más pequeñas) que cumplan un
propósito específico como manejar peticiones asíncronas. Además de esto, HTML5
provee una nueva API como reemplazo a `XMLHTTPRequest` que hace el manejo de
estas peticiones mucho más sencillas. Acá te dejamos una lista para que
averigües y comiences a jugar con ellas. ¿Te animas a refactorizar alguno de tus
retos con estas nuevas herramientas?

- **[Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)**,
  esta es la nueva API que provee HTML5 para realiar peticiones asíncronas y
  está basada en `promises`.
- **[SuperAgent](https://github.com/visionmedia/superagent)** es una
  microlibrería especializada en hacer peticiones HTTP asíncronas.
- **[axios](https://github.com/axios/axios)** es una microlibrería que a
  diferencia de la anterior, esta está basada en promesas.

Estas no son las únicas herramientas que existen para realizar peticiones
asíncronas pero sin duda son algunas de las más usadas hoy en día, te darás
cuenta que al usar una, las demás son muy similares. Así que no pierdas la
oportunidad de probarlas todas para que luego decidas cuál te llama más la
atención.

## Recursos

Te dejamos algunos recursos que te podrían apoyar a indagar un poco más al
respecto de los temas vistos sobre jQuery.

- [Métodos Ajax de jQuery](http://librosweb.es/libro/fundamentos_jquery/capitulo_7/metodos_ajax_de_jquery.html)
- [AJAX & Deferred](http://jqfundamentals.com/chapter/ajax-deferreds)
- [Fetch, Ajax moderno en JavaScript](https://desarrolloweb.com/articulos/fetch-ajax-javascript.html)
- [Ajax con jQuery, JSON y PHP: ejemplo paso a paso](https://cybmeta.com/ajax-con-json-y-php-ejemplo-paso-a-paso)
