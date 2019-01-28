# RESTful APIs

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Entender de forma geral o que é REST e como detectar quais APIs são RESTful.

## Formato de conteúdo

### XML

> Extensible Markup Language (XML) é um formato universal para dados e documentos estruturados. Os arquivos XML tem a extensão de arquivo `.xml`. Assim como HTML, XML utiliza *tags* (palavras delimitadas pelos caracteres `<` e `>`) para estruturar os dados do documento.
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

Fonte: [O que é XML? - IBM](https://www.ibm.com/support/knowledgecenter/es/SSEPGG_8.2.0/com.ibm.db2.ii.doc/opt/c0007799.htm)

### JSON

> JSON (JavaScript Object Notation) é um formato de dados. Basicamente, JSON descreve os dados com uma sintaxe própria que se para validar e administrar os dados. JSON nasceu como uma alternativa ao XML. O uso fácil em JavaScript gerou um grande número de seguidores desta alternativa. Uma das maiores vantagens do uso de JSON é poder ser lido por qualquer linguagem de programação. Assim, pode ser utilizado para trocas de informação entre diferentes tecnologias.

Fonte: [O que é e para que serve JSON? - GeekyTheory](https://geekytheory.com/json-i-que-es-y-para-que-sirve-json/)

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

Fonte: [Exemplo - Trabalhando con JSON - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON)

No vídeo a seguir, você encontra um resumo do formato de conteúdos:

[![Content Formatting](https://img.youtube.com/vi/hTdYO7tKh_k/0.jpg)](https://youtu.be/hTdYO7tKh_k)

Se você quiser comparar um pouco essas 2 estruturas de dados, aqui há um vídeo de resumo:

[![XML vs JSON](https://img.youtube.com/vi/95X-pHvGBnw/0.jpg)](https://youtu.be/95X-pHvGBnw)

## Serviços Web

### SOAP

> SOAP (originalmente as siglas de Simple Object Access Protocol) é um protocolo padrão que define como objetos em diferentes processos podem se comunicar por meio de troca de dados XML. Esse protocolo deriva de um protocolo criado por Dave Winer em 1998, chamado XML-RPC. SOAP foi criado pela Microsoft, IBM e outros. Está atualmente sob o controle da W3C. É um dos protocolos mais utilizados nos serviços web.

Fonte: [SOAP - Wikipedia](https://es.wikipedia.org/wiki/Simple_Object_Access_Protocol)

### REST

> "Representational State Transfer" (ou traduzido para "Transferência de Representação de Estado") é o que se denomina REST. E o que é isso? É uma técnica de arquitetura de software para construir APIs que permitam o nosso servidor comunicar-se com seus clientes usando protocolo HTTP mediante URIs suficientemente inteligentes para satisfazer a necessidade do cliente.

> - REST é STATELESS, ou seja, cada requisição que nossa API recebe deve morrer. Por exemplo, não podemos LEMBRAR um usuário logado na API usando uma sessão, isso é um PECADO já que usaria muita memória RAM de nosso servidor (10 mil usuários conectados em nossa API). O que é correto é passar um TOKEN para cada requisição realizada na API e a API deverá validar se ela está correta ou não (por enquanto, não vamos falar de técnicas para gerar o TOKEN, mas o mais comum é usar um COOKIE).
> - São implementados RECURSOS para gerar comunicação, ou seja, criar URIs únicas que permitem ao cliente entender e utilizar o que estão expondo.
>   Por exemplo:
>   * `api.anexsoft.com/users/`
>   * `api.anexsoft.com/users/1405`
> - Cada requisição realizada em nossa API responde a um verbo e este a uma operação em comum. Por meio dos métodos HTTP, fazemos as requisições. O comum é GET, POST, PUT e DELETE.
>   * **POST (create):** quando enviamos informação para inserir um registro na base de dados, por exemplo. A informação é enviada no corpo da requisição, ou seja, os dados não são visíveis ao usuário.
>     `POST /users`
>   * **GET (read):** é utilizado para o modo de leitura. Por exemplo: quando queremos listar todos os usuários de nossa base de dados. Os parâmetros são enviados pela URL.
>     `GET /users`
>   * **PUT (update):** quando queremos atualizar um registro. Atualizar a informação de um usuário X.
>     `PUT /users/:userId`
>   * **DELETE (delete):** quando queremos apagar um registro. Eliminar um usuário X de nossa base de dados.
>     `DELETE /uses/:userId`
>
> Com isso mencionamos algumas características básicas do que é REST. Poderíamos dizer que são um padrão para criar uma API REST ou RESTFul.

Fonte: [O que é REST? - Anexsoft](http://anexsoft.com/p/117/que-es-rest)

A seguir você pode ver um vídeo que resume SOAP e REST:

[![Web Service Layer](https://img.youtube.com/vi/AyQboo5CycM/0.jpg)](https://youtu.be/AyQboo5CycM)

Por convenção, cada um dos padrões usa um formato de conteúdo particular. Em resumo, SOAP transfere informação por meio de XML, enquanto REST transfere dados usando JSON. Aqui temos um vídeo que resume esta mensagem:

[![SOAP vs REST](https://img.youtube.com/vi/aI1DSeZAEMA/0.jpg)](https://youtu.be/aI1DSeZAEMA)

## Conclusão

Não ficou claro para você o que são RESTful APIs? Enquanto REST é um padrão, a implementação deste é uma API, que vem a ser as APIs RESTful. Embora ao projetar uma API haja muitas coisas mais para levar em conta, a principal é que você se concentre em como se obtém os recursos e assim poder identificar os métodos e URIs necessárias para consumir a API.

Exemplos de RESTful APIs são:

- [Stripe](https://stripe.com/docs/api/php)
- [Instagram](https://www.instagram.com/developer)
- [Spotify](https://developer.spotify.com/web-api/)
- [Lyft](https://developer.lyft.com/docs/overview)
- Muitas mais!

Se você quiser saber mais sobre REST, aqui tem um [tutorial](http://www.restapitutorial.com/) que pode te ajudar.