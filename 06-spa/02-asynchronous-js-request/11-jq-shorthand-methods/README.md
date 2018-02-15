# Métodos cortos de AJAX con jQuery

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

***

## Objetivos de Aprendizaje

- Revisar los _shorthand methods_ que ofrece jQuery para hacer requests asíncronos

## Shorthand Methods

Te habías dado cuenta que al entrar a la [documentación de jQuery](http://api.jquery.com/category/ajax/shorthand-methods/) encontramos una sección
de **Shorthand Methods** con 5 métodos: `.get()`, `.getJSON()`, `.getScript()`,
`.post()` y `.load()`.

Éstos métodos son específicos para realizar un tipo de petición, veamos lo que
hace cada una a grandes rasgos:

- `jQuery.get()`, hace una petición tipo GET a través de HTTP.

  <iframe height='400' scrolling='no' title='$.get - jQuery' src='//codepen.io/ivandevp/embed/oEZzqy/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/oEZzqy/'>$.get - jQuery</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

  En este ejemplo, la respuesta está en `XML`, y el método HTTP de la petición
  es tipo `GET`, mientras esto último se mantenga sin importar el formato del
  response, este método puede ser usado.

- `jQuery.getJSON`, hace una petición tipo GET a través de HTTP pero a
  diferencia de la anterior, la respuesta siempre está en formato `JSON`.

  <iframe height='400' scrolling='no' title='jQuery.getJSON() Example' src='//codepen.io/adrianparr/embed/buFho/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/adrianparr/pen/buFho/'>jQuery.getJSON() Example</a> by Adrian Parr (<a href='https://codepen.io/adrianparr'>@adrianparr</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

  En este ejemplo, la petición también es `GET` pero el formato de respuesta
  debe de ser `JSON`.

- `jQuery.getScript()`, hace una petición tipo GET a través de HTTP pero a
  diferencia de los anteriores, ésta espera como resultado un archivo JavaScript
  que se pueda ejecutar luego.

  <iframe height='400' scrolling='no' title='$.getScript Example' src='//codepen.io/ivandevp/embed/jZBVMm/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/jZBVMm/'>$.getScript Example</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

- `jQuery.post()`, hace una petición tipo POST a través de HTTP (lo usaremos más
  adelante).

- `.load()`, hace una petición tipo GET a través de HTTP pero el response
  obtenido es un archivo HTML que se inserta dentra del selector que precede a
  este método.

  <iframe height='400' scrolling='no' title='jQuery Ajax example with load()' src='//codepen.io/SitePoint/embed/CwesD/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/SitePoint/pen/CwesD/'>jQuery Ajax example with load()</a> by SitePoint (<a href='https://codepen.io/SitePoint'>@SitePoint</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

## Conclusión

Puedes comenzar a usar estos métodos para ahorrar código y tal vez a nivel
sintáctico te parezca más sencillo. Solo ten en cuenta que al final todos estos
métodos son _preconfigurados_ del método `.ajax()`.

Y según la documentación de jQuery, es buena práctica el método `.ajax()` debido
a la capacidad de configuración que le podemos dar.

Referencia: [Learn jQuery](https://learn.jquery.com/ajax/jquery-ajax-methods/)
