# CRUD

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Entender o que é `CRUD` e como podemos gerar uma aplicação consumindo uma API RESTful.

## CRUD: Create, Read, Update and Delete

Você já notou que quase toda a interação que você faz na web tem a ver com uma base de dados? Quando você entra no perfil de uma pessoa que você segue, todas as suas fotos, publicações, comentários e demais itens estão armazenados em algum lugar (database). Quando sobe uma uma foto no Instagram ou envia um e-mail, você está criando um novo registro no DB. Quando você muda sua foto de perfil no WhatsApp, você está editando algo existente no banco de dados. Por último, quando você apaga a mensagem de uma conversa ou grupo, você está alterando seu DB.

> O uso de diferentes palavras para se referir à base de dados no parágrafo anterior foi intencional para você saber que fazem referência à mesma coisa.

A todas essas ações descritas anteriormente que têm interação com a base de dados, possuem um acrônimo na programação: **CRUD**.

CRUD é o acrônimo de _criar, ler, atualizar e apagar_, palavras que correspondem respectivamente aos verbos do HTTP mais utilizados: **POST, GET, PUT e DELETE.**

Estas são as operações mais comuns que queremos ter no caso de uma API que manipula dados.

Para esclarecer o assunto, vamos assistir ao vídeo a seguir, até 3min15s.

> Nota: O vídeo é bem longo (1h28min04s)! Os primeiros três minutos mostram o que é CRUD e que uso teria uma aplicação com Firebase. Depois, inicia com o desenvolvimento de uma aplicação. Se você quiser acompanhar, este é um excelente exercício guiado.

[Vídeo](https://www.youtube.com/watch?v=cQmwK306XaI)

## Exemplo

Aqui um exemplo de CRUD para uma lista de tarefas:

<iframe height='760' scrolling='no' title='Plain JS CRUD Frontend' src='//codepen.io/ianseabrook/embed/rxvByR/?height=760&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ianseabrook/pen/rxvByR/'>Plain JS CRUD Frontend</a> by Ian Seabrook (<a href='https://codepen.io/ianseabrook'>@ianseabrook</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Embora o exercício anterior perca as alterações ao recarregar a página, ele mostra o princípio das ações que um CRUD realiza. No momento da prática (nas seguintes lições), vamos colocá-lo em prática com uma base de dados reais!
