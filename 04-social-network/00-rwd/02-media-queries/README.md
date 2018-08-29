# Media Queries e Viewport

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Conhecer e entender o uso de *media queries* no contexto de Web Design Responsivo.

## O que são as *Media Queries*?

É uma técnica introduzida no CSS3 que usa a regra **@media** para incluir um bloco de propriedades CSS que serão executados na nossa página web **somente se as condições dadas à *@media* são verdadeiras**.

![Sintaxe de uma *media query*](http://ptgmedia.pearsoncmg.com/images/chap4_9780321888938/elementLinks/0429b.jpg)

![Sintaxe de uma *media query*](http://ptgmedia.pearsoncmg.com/images/chap4_9780321888938/elementLinks/0429b.jpg "Sintaxe de uma *media query*")

As *Media Queries* estão definidas por ***Media Types***, ***Media Features*** e o bloco de código a ser executado se as condições definidas no *media type* são verdadeiras. Tudo isso  funciona graças aos **operadores lógicos** correspondentes.


![*Media Queries*](https://internetingishard.com/html-and-css/responsive-design/media-query-terms-137d06.png)

Os ***media types*** correspondem aos diferentes dispositivos nos quais se pode visualizar nossa página web. Na imagem a seguir, podemos ver os diferentes *media types* que podem ser utilizados.

![*Media Types*](https://github.com/Laboratoria/curricula-js/blob/pt/04-social-network/00-rwd/02-media-queries/media_type.png?raw=true)

Os ***media features*** correspondem à condição que o dispositivo deve atender e a qual deve ser verdadeira para que se aplique o código contido em nossa *media query*.

Os *media features* mais comuns são os referentes às dimensões de tela do dispositivo, podendo estabelecer a altura e largura que serão aplicadas (com `height` e `width`), ou o que é mais interessante, a partir de qual largura ou altura se aplicarão (com `min/max-width` e `min/max-height`).

![Media Feature](https://github.com/Laboratoria/curricula-js/blob/pt/04-social-network/00-rwd/02-media-queries/media_feature.png?raw=true)

Os **operadores lógicos** são `and`, `not`, `only` e *lista separada por vírgulas* (que funciona como o operador lógico `or` do Javascript) e se encarregam de juntar nossos *media types* com os *media features*.

O operador `and` é utilizado para combinar múltiplas mídias em uma única *Media Query* exigindo que cada função retorne `true` para que a *media query* também o seja. O operador `not` é utilizado para negar uma *media query* inteira e o operador `only` se usa para aplicar um estilo somente se toda a *query* está correta.

## Viewport

Um elemento que é muito importante e que devemos sempre adicionar ao nosso site se quisermos que seja responsivo, é a meta tag *viewport*.

A tag *viewport* nos permite definir a largura, altura e escala da área utilizada pelo navegador para exibir o conteúdo.


Ao definir a largura ou a altura do *viewport*, podemos usar um número fixo de pixels ou usar duas constantes, *device-width* e *device-height* respectivamente. Considera-se uma boa prática configurar o *viewport* com alguma destas duas constantes, ao invés de usar uma largura ou altura fixa.

A configuração mais comum do *viewport* é a seguinte:

```html
<meta name="viewport" content="width=device-width, initial-scale=1,
maximum-scale=1">
```

Suas propriedades são as seguintes:

- **width**: controla a largura da área de visualização. Pode ser incializada com um número fixo de pixels ou com o valor especial `device-width` que indica a targura total do dispositivo em pixels, em uma escala de 100%.

- **initial-scale**: controla o nível de *zoom* inicial ao carregar a página. As propriedades `maximum-scale`, `minimum-scale` e `user-scalable` controlam como o usuário pode realizar o *zoom* sobre a página.

Você pode se aprofundar um pouco mais em *Media Queries* e *Viewport* em:

- [Como utilizamos as *media queries*?](https://www.chiefofdesign.com.br/media-queries-css-introducao-a-diferentes-resolucoes-de-tela/)

- Vídeo: Media Queries

[Media Queries](https://www.youtube.com/watch?v=AltqAPZzAqo)

### Material adicional

Além disso, em seu tempo livre você pode ler um pouco sobre *Device Pixel Ratio* ou *DPR* como também é conhecido ;).
[Veja aqui o conteúdo](http://sergiolopes.org/resolucoes-dpi-pixel-ratio-retina/).
