# Media: Áudio & Vídeo

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

Aprender de forma geral como usar a API de Áudio e Vídeo.

## Áudio e vídeo na web

> Os desenvolvedores web desejam usar áudio e vídeo há muito tempo, desde o início dos anos 2000, quando começamos a ter uma largura de banda suficientemente rápida para suportar qualquer tipo de vídeo (os arquivos de vídeo são maiores que textos ou imagens). No início, as tecnologias web nativas como HTML não possuíam as habilidade para incorporar vídeo ou áudio na web, o que fez com que tecnologias proprietárias (ou baseadas em plugins) como Flash (e posteriormente Silverlight) se tornassem muito populares para manipular esse tipo de conteúdo. Estas tecnologias funcionaram bem, mas possuíam um grande número de problemas, incluindo que não funcionavam bem com HTML/CSS, problemas de segurança e de acessibilidade.
> 
> Uma solução nativa resolveria isto se fosse bem feita. Felizmente, alguns anos depois, a especificação de HTML5 incluiria estas _features_ com os elementos `<video>` e `<audio>` e algumas APIs JavaScript para controlá-los.

Este é um trecho da [documentação de MDN](https://developer.mozilla.org/pt-BR/docs/Aprender/HTML/Multimedia_and_embedding/Video_and_audio_content) sobre as *tags* de áudio e vídeo, para você entender o contexto de como foi importante adicionar suporte nativo no HTML5 com sua API de mídia.

## Inserindo conteúdo multimídia na nossa página web

Para inserir conteúdo multimídia em nossa web, devemos usar as _tags_ `<video>` e `<audio>`. A seguir mostramos alguns exemplos de como inseri-los:

<iframe height='265' scrolling='no' title='Video Tag' src='//codepen.io/ivandevp/embed/gvMPjW/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/gvMPjW/'>Video Tag</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<iframe height='265' scrolling='no' title='Audio Tag' src='//codepen.io/ivandevp/embed/PQzNoE/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/PQzNoE/'>Audio Tag</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Você percebeu como é fácil adicioná-los? Bem, além disso, devemos levar em consideração o seguinte:

- Atributos: nos exemplos a _tag_ **vídeo** e **áudio** contam com um atributo `controls`. Você consegue imaginar o que acontece se o remover? Assim como este atributo, existem muitos mais que você verá conforme for precisando.
- Suporte entre navegadores: se você percebeu, só usamos um vídeo com extensão `.mp4` e um áudio com extensão `.mp3`. Nem todos os navegadores suportam o mesmo formato. Para garantir que nosso áudio e/ou vídeo funcione em qualquer formato, devemos adicioná-lo com vários formatos e para isso usamos a etiqueta `<source>`.

## Onde encontro a lista de atributos e formatos suportados?

A W3Schools (uma de suas melhores amigas neste momento) possui uma série de recursos para ajudar a obter essa informação.

- [HTML `<audio>` Tag](https://www.w3schools.com/tags/tag_audio.asp): aqui você pode encontrar a lista de atributos que são suportados por esta _tag_ e formatos de áudio que cada navegador suporta.
- [HTML `<video>` Tag](https://www.w3schools.com/tags/tag_video.asp): aqui você pode encontrar a lista de atributos que são suportados por esta _tag_ e formatos de vídeo que cada navegador suporta.
- [HTML Audio/Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp): não esqueça de que, por serem _tags_ HTML, estas podem ser manipuladas pelo DOM e para tanto contam com métodos e eventos que possamos utilizar. Tenha isso como referência, não é necessário que você memorize tudo isso agora.

## E como interajo com a API?

Interagimos por meio da interface `HTMLMediaElement`. Ela agrega as propriedades e métodos necessários para suportar capacidades básicas relacionadas a elementos multimídia (áudio e vídeo).

Exemplo:

<iframe height='265' scrolling='no' title='HTMLMediaElement JS' src='//codepen.io/ivandevp/embed/KQMWMy/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/KQMWMy/'>HTMLMediaElement JS</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Como você imagina que seria com o áudio? Basicamente o mesmo? Esperamos que você tente e veja qual é o resultado.

E como seria com jQuery?

<iframe height='265' scrolling='no' title='HTMLMediaElement jQuery' src='//codepen.io/ivandevp/embed/XZKMjx/?height=265&theme-id=0&default-tab=js,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/ivandevp/pen/XZKMjx/'>HTMLMediaElement jQuery</a> by Ivan (<a href='https://codepen.io/ivandevp'>@ivandevp</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Ainda que jQuery nos permita manipular o DOM com mais facilidade, ele não fornece suporte para `HTMLMediaElement`s, o que nos força a obter o elemento do DOM usando o método `.get`; como ele é um único elemento (portanto, o primeiro), fazemos `$video.get(0)` para poder interagir com a API de vídeo. Outro detalhe interessante a observar é que, ao aguardar que o DOM esteja pronto por meio de `$(document).ready` não significa necessariamente que o vídeo esteja carregado como tal. Por isso, para obter a duração, foi necessário adicionar um evento que nos indique que os dados do vídeo tenham terminado de carregar (`video.onloadeddata`). 

## Recursos

Se deseja fazer uma aplicação com áudio e/ou vídeo, mas não lhe ocorre onde obter os arquivos, pode utilizar alguns gratuitos nos links abaixo:

- [Coverr](https://coverr.co/)
- [Pexels](https://videos.pexels.com/)
- [Clyp.it](https://clyp.it/)

Se não conseguir baixar algum, lembre-se de que você é uma desenvolvedora web e você possui superpoderes para inspecionar elementos e obter os links a partir de suas Dev Tools ;).