# Revisão jQuery AJAX

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Revisar o que foi aprendido sobre AJAX com jQuery.

## Conclusões

Nesta segunda parte da unidade, vimos como realizar uma requisição HTTP assíncrona por meio de jQuery. As vantagens que nós temos ao usar uma biblioteca como esta é que economizamos tempo e código para a configuração que faríamos nativamente por meio do objeto `XMLHttpRequest`, além da configuração de compatibilidade entre navegadores.

Em uma das leituras, mencionamos que é conveniente usar jQuery para esta requisições assíncronas e dissemos isto porque esta biblioteca está dedicada a isto a nada mais. A resposta é que atualmente é preferível utilizar micro-bibliotecas (bibliotecas bem menores) que fazem um propósito específico como manipular requisições assíncronas. Além disso, HTML5 fornece uma nova API como substituição a `XMLHttpRequest`que fazem a manipulação desta petições e comece a brincar com elas. Você topa refatorar algum dos seus desafios com estas novas ferramentas?

- **[Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)**: esta é a nova API que HTML5 fornece para executar requisições assíncronas e está baseada em `promises`. 
- **[SuperAgent](https://github.com/visionmedia/superagent)**: é uma micro-biblioteca especializada em fazer requisições HTTP assíncronas.
- **[axios](https://github.com/axios/axios)**: é uma micro-biblioteca que diferente da anterior, está baseada em promessas.

Estas não são as única ferramentas que existem para realizar requisições assíncronas mas sem dúvida são algumas das mais usadas hoje em dia. Você perceberá que ao usar uma, as outras são muito similares. Assim não perca a oportunidade de testá-las todas para que você decida logo qual te chama mais a atenção.

## Recursos

Deixamos aqui alguns recursos que podem servir de apoio a você e aprender um pouco mais a respeito dos temas vistos sobre jQuery.

- [Métodos Ajax de jQuery](http://librosweb.es/libro/fundamentos_jquery/capitulo_7/metodos_ajax_de_jquery.html)
- [AJAX & Deferred](http://jqfundamentals.com/chapter/ajax-deferreds)
- [Fetch, Ajax moderno em JavaScript](https://desarrolloweb.com/articulos/fetch-ajax-javascript.html)
- [Ajax con jQuery, JSON y PHP: exemplo passo a passo](https://cybmeta.com/ajax-con-json-y-php-ejemplo-paso-a-paso)
