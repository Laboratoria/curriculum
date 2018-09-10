# Web APIs

- Tipo: `leitura`
- Formato: `individual`
- Duração: `40min`

***

## Objetivos de Aprendizagem

- Conhecer e identificar os diferentes tipos de Web APIs com os quais podemos trabalhar

## Onde posso saber quais Web APIs públicas existem?

Já que nesta unidade trabalharemos com Web APIs públicas, devemos saber onde podemos encontrá-las. Para tanto, deixamos para você os seguintes recursos:

- [Public-APIS](https://github.com/abhishekbanthia/Public-APIs)
- [Any API](https://any-api.com/)
- [Public APIs - Github Repo](https://public.apis.zone/)
- [API Directory](https://www.programmableweb.com/apis/directory)
- [API List](https://apilist.fun/)

Para o objetivo desta leitura, focaremos em um recurso que não vimos até o momentos: [Public APIs](https://github.com/toddmotto/public-apis). Este repositório, diferente dos demais, tem uma maneira sintetizada de mostrar a autenticação que uma API necessita (os demais recursos também mostram esse detalhe, mas não à primeira vista).

![Different Web APIs Auth](https://github.com/ivandevp/curricula-js/blob/378ca9e9ad8d178bf783ebbcea6383d9c44a783b/06-spa/03-working-with-apis/02-web-apis/web-apis.png?raw=true)

Na imagem anterior, podemos visualizar a seção das APIs de Música, na qual a coluna `Auth` tem valores distintos como `NO`, `apikey` ou `OAuth`. É uma maneira de classificar as Web APIs com base em seu meio de autenticação. Vejamos do que se trata.

### Web APIs sem autenticação

Este tipo de API é o mais simples de consumir por meio de AJAX e por sua vez é o de maior uso público, pois não é preciso se registrar para obter uma chave ou login. Simplesmente faça uma requisição no *endpoint* especificado e pronto. Exemplo destas APIs podem ser: Pokeapi, Swapi, entre outras. Aqui temos um _pen_ mostrando o que você pode fazer com a API de [Lyrics.ovh](https://lyricsovh.docs.apiary.io/#).

<iframe height='760' scrolling='no' title='Lyrics API' src='//codepen.io/ivandevp/embed/NyjmMm/?height=760&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/NyjmMm/'>Lyrics API</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Web APIs com `apiKey`

Nestas APIs, o método de autenticação é por meio de um `API Key` que acompanha todas as requisições que são feitas a algum `endpoint` (recurso). Na maioria dos casos, você deverá se registrar para obter essa `apiKey`. Deixamos aqui um exemplo com Google Maps.

<iframe height='760' scrolling='no' title='Laboratoria en Google Maps' src='//codepen.io/ivandevp/embed/qxmGaY/?height=760&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/qxmGaY/'>Laboratoria en Google Maps</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Em algumas ocasiões, as API Keys geradas devem ir nos cabeçalhos HTTP da requisição, para que no *backend* se faça a verificação do *token* e este possa ser autenticado corretamente. Por exemplo, na API de [CoinAPI.io](https://www.coinapi.io/), o *token* é enviado por meio do *header* `X-CoinAPI-Key`. Aqui temos um _pen_ de como ser faria a requisição nesse caso:

<iframe height='760' scrolling='no' title='BYReOj' src='//codepen.io/ivandevp/embed/BYReOj/?height=760&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/BYReOj/'>BYReOj</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Web APIs com `OAuth`

OAuth é um protocolo de autorização que permite obter acesso limitado a aplicações de terceiros para obter dados e em seguida usar esse dados para o registro de um *web service* ou API. Aqui deixamos um exemplo para que veja do que se trata:

<iframe height='760' scrolling='no' title='YeQwOe' src='//codepen.io/ivandevp/embed/YeQwOe/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/YeQwOe/'>YeQwOe</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Percebeu a diferença? Embora esta implementação seja similar às que usam um API Key como método de autenticação, para gerar esse `key` que vemos na URL do **GET Request** é preciso criar uma aplicação em [Stack Apps](https://stackapps.com/), e para poder fazê-lo é necessário se cadastrar. No momento do cadastro, é oferecida a opção de cadastrar-se usando o Facebook. Quando você se registra, o usuário garantirá que StackExchange pode obter certos dados de sua conta do Facebook; esse dados são usados para criar a conta e configurar a aplicação que está no Stack Apps. É esse processo que o OAuth permite realizar de maneira padronizada.

Outro exemplo: se testar acessar a API do Spotify, você pode ser conectar com ele pode meio do Facebook e obter acesso à busca de músicas, artistas, playlists e demais itens.

## Autenticação e Autorização

Estes dois termos foram mencionados ao longo desta leitura. É importante mencionar que são dois aspectos de segurança que as APIs levam em conta no momento do projeto e implementação.

A autenticação é o processo de verificar quem é o usuário que você indica ser. Isto é, no início da sessão, seu usuário e senha devem coincidir com os dados que estão armazenados no sistema. Isso é um exemplo de autenticação. 

Enquanto que a autorização, uma vez verificado que você é quem diz ser, verifica se você tem acesso ou permissão ao recurso solicitado.

Aqui deixamos duas vídeos (nós sabemos, estão em inglês. Mas o Google Translate pode nos ajudar, não 100%, mas o suficiente para poder entendê-los no contexto adequado).

[![Authentication](https://img.youtube.com/vi/ATB23YVOSq4/0.jpg)](https://youtu.be/ATB23YVOSq4)

[![Authorization](https://img.youtube.com/vi/lyHrVjx8MSw/0.jpg)](https://youtu.be/lyHrVjx8MSw)

## Mais recursos

- [O que é a autenticação baseada em *tokens*?](https://carlosazaustre.es/que-es-la-autenticacion-con-token/)
- [O que é OAuth?](https://aplicacionesysistemas.com/que-es-oauth/)