# Métodos curtos de AJAX com jQuery

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Revisar os _shorthand methods_ que jQuery fornecer para fazer requisições assíncronas.

## Shorthand Methods

Você deve ter visto na [documentação de jQuery](http://api.jquery.com/category/ajax/shorthand-methods/) uma seção de **Shorthand Methods** com 5 métodos: `.get()`, `.getJSON()`, `.getScript()`, `.post()` y `.load()`.

Esses métodos são específicos para realizar um tipo de requisição. Vejamos o que cada um faz em detalhes:

- `jQuery.get()`, faz uma requisição do tipo `GET` por meio do HTTP.

  <iframe height='400' scrolling='no' title='$.get - jQuery' src='//codepen.io/ivandevp/embed/oEZzqy/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/oEZzqy/'>$.get - jQuery</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

  Neste exemplo, a resposta está em `XML` e o método HTTP da requisição é do tipo `GET`, enquanto este último se mantenha sem levar em conta o formato do `response`.

- `jQuery.getJSON`, faz uma requisição do tipo `GET` por meio de HTTP mas, diferente da anterior, a resposta será sempre em `JSON`.

  <iframe height='400' scrolling='no' title='jQuery.getJSON() Example' src='//codepen.io/adrianparr/embed/buFho/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/adrianparr/pen/buFho/'>jQuery.getJSON() Example</a> by Adrian Parr (<a href='https://codepen.io/adrianparr'>@adrianparr</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

  Neste exemplo, a requisição também é por `GET` mas o formato de resposta deve ser em `JSON`.

- `jQuery.getScript()`, faz uma requisição do tipo `GET` por meio de HTTP mas, diferente das anteriores, esta espera um arquivo JavaScript que possa ser executado em seguida.

  <iframe height='400' scrolling='no' title='$.getScript Example' src='//codepen.io/ivandevp/embed/jZBVMm/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/jZBVMm/'>$.getScript Example</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

- `jQuery.post()`, faz uma requisição do tipo `POST` por meio de HTTP (usaremos isso mais adiante).

- `.load()`, faz uma requisição do tipo `GET` por meio de HTTP, mas a resposta retornada é um arquivo HTML que é inserido dentro do seletor deste método.

  <iframe height='400' scrolling='no' title='jQuery Ajax example with load()' src='//codepen.io/SitePoint/embed/CwesD/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/SitePoint/pen/CwesD/'>jQuery Ajax example with load()</a> by SitePoint (<a href='https://codepen.io/SitePoint'>@SitePoint</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>

## Conclusão

Você pode começar a utilizar esses métodos para economizar código e talvez lhe pareçam mais simples a nível sintático. Só tenha em mente que todos esses métodos são _pré-configurações_ do método `.ajax()`.

E, segundo a documentação de jQuery, é uma boa prática o uso do método `.ajax()` devido à capacidade de configuração que podemos lhe dar.

Referência: [Learn jQuery](https://learn.jquery.com/ajax/jquery-ajax-methods/)
