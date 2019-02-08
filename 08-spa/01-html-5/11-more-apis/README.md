# Mais APIs!

- Tipo: `leitura`
- Formato: `individual`
- Duração: `40min`

***

## Objetivos de Aprendizagem

- Incentivar a explorar outras APIs de HTML5.

## Outras APIs

Nesta unidade, focamos em algumas APIs específicas, mas como mencionamos, não são as únicas. Convidamos você a explorar por conta própria as outras.

Aqui deixamos algumas com as quais você pode ir brincando:

### Canvas

O elemento HTML `<canvas>` é utilizado para desenhar gráficos por meio de JavaScript. No HTML, o elemento é só um contêiner de gráficos. A API fornece diversos métodos para desenhar linhas, caixas, círculos, texto e adicionar imagens.

#### Desafios

##### Exercitando com formas

Desenhe as diversas formas geométricas que você conhece e comece a dar um estilo personalizado a cada uma delas.

Exemplo:

<iframe height='265' scrolling='no' title='CSS Basic Shapes' src='//codepen.io/krystalcampioni/embed/bgYxQa/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/krystalcampioni/pen/bgYxQa/'>CSS Basic Shapes</a> by Krystal Campioni (<a href='https://codepen.io/krystalcampioni'>@krystalcampioni</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

##### Imagens pixeladas

Crie uma interface com suas imagens preferidas e torne-as pixeladas.

Exemplo: Veja a seção de **Quem somos?** no sítio web das [Developers Laboratoria](http://developers.laboratoria.la/). 

#### Referências

- [HTML5 Canvas](https://www.w3schools.com/html/html5_canvas.asp)
- [Uso básico de Canvas](https://developer.mozilla.org/pt-BR/docs/Web/Guide/HTML/Canvas_tutorial/Utilizacao_basica)

### File

Esta provavelmente você já conhece, por meio do elemento `<input type="file" />` ou quando você quis adicionar uma imagem no momento de postar em sua rede social. Qualquer que tenha sido o cenário, você perceberá que é muito útil saber manipulá-la.

#### Desafios

##### Editando foto de perfil

Lembra do desafio de *web storage*, no qual você podia editar os dados do seu perfil? Que tal se agora você puder alterar também sua foto de perfil? E se recarregar a página, permanecer a imagem que acabou de trocar? Comece a mesclar as duas APIs e vá até onde sua imaginação deixar. Lembre-se de que uma boa maneira de indicar ao usuário que sua edição está correta é exibindo como ficará antes de salvar efetivamente.

> Você deve testar isto no seu dispositivo móvel quando terminar. Estamos confiantes que você perceberá que pode colocar uma selfie que tirou com sua câmera como foto de perfil. Ooopss, a ideia era que você percebesse isso sozinha ;)

##### Instagram?

Se você já sabe como exibir imagens que estão armazenadas em seu PC ou celular, você pode adicionar interação com o DOM, logar em redes sociais e armazenar as informações em uma base de dados graças ao Firebase; isto quer dizer que você tem tudo o que precisa para construir o seu próprio Instagram! Solte sua imaginação e divirta-se criando sua rede social de imagens do seu jeito.

> Nota: com CSS você pode adicionar [filtros em suas imagens](https://platzi.com/blog/filtros-css/) 
> :scream:

#### Referências

- [Como ler arquivos em JavaScript pode meio da API File](https://www.html5rocks.com/es/tutorials/file/dndfiles/)
- [File Reader API](http://blog.teamtreehouse.com/reading-files-using-the-html5-filereader-api)

### WebSockets

Algumas vez lhe perguntaram como funcionam as aplicações em tempo real? Como funciona o Facebook, WhatsApp e outras redes sociais para notificar que você recebeu uma mensagem imediatamente depois de que o remetente a tenha enviado? Um exemplo mais técnico seria por meio de Firebase. Você percebeu que, se sua aplicação ouve as mudanças na base de dados, ela atualiza automaticamente?

Tudo isso é graças aos *Web Sockets*. HTML5 fornece esta API com a qual você pode estabelecer conexões _socket_ entre o navegador e um servidor. Isso significa que existe uma conexão persistente na qual você pode enviar dados a qualquer momento.

Como dissemos no parágrafo anterior, é necessário escrever um script no servidor e no cliente estabelecer uma conexão com Web Sockets. Isso pode ser um pouco complicado principalmente porque a implementação varia no *back-end* dependendo da linguagem e varia no cliente devido à compatibilidade entre navegadores. Para testar esta API de uma maneira simples, você poderia utilizar Node.js (JavaScript ao lado do servidor) e uma biblioteca que funcione em ambos os lados (cliente e servidor) como [socket.io](https://socket.io/).

#### Desafios

##### Real-time chat

Provavelmente você dirá que com Firebase já pode fazer um chat em tempo real, contudo convidamos você a viver a experiência de criá-lo sem Firebase e veja como pode fazer uma aplicação em tempo real escrevendo código tanto no cliente como no servidor.

##### Canvas + Socket.io

Você pode imaginar ter uma lousa compartilhada? Com canvas você pode criar uma tela e usando eventos de mouse para desenhar nela. Se esses desenhos forem enviados para um *socket* você poderia desenhá-los para todos os usuários conectados em tempo real (quase como um quadro mágico). Pense nisso, pode ajudá-la quando quiser ensinar ou estudar em conjunto com alguém.

##### Hangouts, Skype

Se você pudesse acessar a câmera de seu notebook, exibi-la na web e transmitir a imagem por meio de um socket, você teria uma aplicação de vídeo-chamadas. Acha que ainda não pode? Como já lhe dissemos, com um par de APIs associados a Web Sockets e com sua vontade de fazer, você consegue ;)

As APIs seriam [`getUserMedia`](https://davidwalsh.name/browser-camera) (parte de Media API) e Canvas. E provavelmente ao pesquisar sobre o assunto, você acabará encontrando o [WebRTC](https://webrtc.org/).

Calma, você terá que dedicar tempo, mas se estiver interessada, temos 100% de certeza de que você consegue :).

#### Referências

- [Introdução aos WebSockets: incorporação de sockets na Web](https://www.html5rocks.com/es/tutorials/websockets/basics/)
- [Real time chat with NodeJS, Socket.io and ExpressJS](https://code.tutsplus.com/tutorials/real-time-chat-with-nodejs-socketio-and-expressjs--net-31708)
- [Desenhando em tempo real com Canvas, Node.js e Socket.io](http://www.nazariglez.com/2012/07/08/dibujando-a-tiempo-real-con-canvas-node-js-y-socket-io/)
- [Streaming de video com HTML5](http://html5facil.com/tutoriales/streaming-de-video-con-html5/)

### Notificações

> A API de notificações permite que uma página web envie notificações que serão exibidas fora da web no nível de sistema. Isso permite às aplicações web enviar informações para o usuário embora estas estejam em segundo plano.

Fonte: [MDN - Usando a API de Notificações](https://developer.mozilla.org/es/docs/Web/API/Notifications_API/Usando_la_API_de_Notificaciones)

#### Desafios

##### Notificações de Mensagens

Você já tem seu chat ou rede social seja com Firebase ou com sua própria implementação de Web Sockets. Agora, o que acha se a cada vez que um usuário interage com sua aplicação, ela envia uma notificação? Isso seria muito legal!

#### Referências

- [Notificações Web con HTML5](https://filisantillan.com/notificaciones-web-html5/) 
- [Usando a API de Notificações](https://developer.mozilla.org/es/docs/Web/API/Notifications_API/Usando_la_API_de_Notificaciones)

### Vibração

> A maioria dos dispositivos modernos podem vibrar utilizando o hardware. Isso permite que por meio do código de software se possa emitir essas vibrações. A Vibration API permite às aplicações web a capacidade de acessar esse hardware no caso de haver suporte para tal. Caso contrário, o dispositivo não faz nada.

Fonte: [MDN - Vibration API](https://developer.mozilla.org/es/docs/Web/Guide/API/Vibration)

#### Desafios

##### Vibração de notificações

Você já tem suas notificações. Agora, o que acha de adicionar a capacidade de vibrar quando elas chegarem para o usuário? 

#### Referências

- [Vibration API](https://developer.mozilla.org/es/docs/Web/Guide/API/Vibration)
- [Introdução e uso da API de Vibração en HTML5](https://platzi.com/blog/api-vibracion-html5/)

## Conclusão

Existem muitas APIs que tornam o navegador cada vez mais poderoso e isso tem permitido grandes avanços na web. Só podemos dizer que nunca teremos tempo de lhe mostrar todas, portanto você deve ser curiosa e começar a brincar com elas sem medo.

Lembre-se que muitas delas possuem problemas de compatibilidade com dispositivos e navegadores específicos. Portanto, alguma falha pode estar acontecendo por falha de hardware e não por causa de seu software. Por outro lado, lembre-se que em [The HTML 5 JavaScript API Index](http://html5index.org/) você pode aprender um pouco mais sobre as APIs existentes. 

E veja de forma interativa como a web tem evoluído em [www.evolutionoftheweb.com](http://www.evolutionoftheweb.com/#/evolution/day).

![Evolution of the web](http://www.evolutionoftheweb.com/img/Evolution_of_the_web.jpg)