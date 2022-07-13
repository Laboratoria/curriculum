# Bootstrap

- Tipo: `leitura`
- Formato: `individual`
- Duração: `60min`

***

## Objetivos de Aprendizagem

- Conhecer e entender o que é o Bootstrap.

## O que é Bootstrap?

Bootstrap é um incrível framework que torna o desenvolvimento web front-end muito
mais rápido e mais fácil.

Inicialmente foi criado como uma solução interna para o Twitter e posteriormente
foi liberado ao público em agosto de 2011 como um projeto *open source* no
GitHub.

![Bootstrap](https://camo.githubusercontent.com/78b3550b5fec5f858d55b4ba4372d1e03b6f1dea/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a614a5f4a4c7666567969516a356959727949756c68772e6a706567)

Foi feito para que possa ser utilizado por pessoas de todos os níveis, por
dispositivos de todas as formas e projetos de todos os tamanhos.

Bootstrap tem várias versões. A mais popular é a versão 4 e é a que
aprenderemos. Podemos encontrar o Bootstrap [aqui](https://getbootstrap.com/docs).

Podemos utilizar o Bootstrap em nossos projetos de diferentes formas, seja
adicionando o código CDN ao nosso HTML para usá-lo de maneira remota ou baixando
o Bootstrap na sua página web.

![Bootstrap](https://raw.githubusercontent.com/Laboratoria/curricula-js/c6232fc0a639688fc216c72d17e325a588abae9d/04-social-network/01-css-frameworks/02-bootstrap/bcdn.png)

Se utilizarmos as opções de baixar o Bootstrap, devemos descompactar e adicionar
os arquivos do framework ao projeto. Além disso, devemos *linkar* todos no HTML
para que funcione.

![Bootstrap](https://camo.githubusercontent.com/095b7f079231a6d77cb81186e27344f739cba276/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a4e75755232626a705a636b31774336672e)

Falando em CDN, precisamos entender: __O que é CDN?__

Imagine que você queira usar o CSS de Bootstrap ou de alguma outra biblioteca.
Poderíamos simplesmente baixar o arquivo .css ou .js e adicioná-lo a nosso HTML.
Mas, o que acontece se esse arquivo __NÃO__ está no nosso computador e sim em
algum lugar da internet?

Quando temos o arquivo em algum lugar da internet, na verdade está __em outro
computador__ em algum lugar do mundo.

O que acontecerá se este computador estiver no outro lado do mundo? Na China?
Coreia?

Você acha que a distância do nosso computador (que vai utilizar o arquivo) e o
computador que tem o arquivo afeta o carregamento da página?

__Sim__, afeta muito.

Isto é porque conectar-se a um computador do outro lado do mundo é mais demorado
que conectar-se ao computador que está ao nosso lado.

CDN significa __Content Delivery Network__ (Rede de distribuição de conteúdo).

Imaginemos que o computador que tem o arquivo bootstrap.css está inicialmente na
China.

Utilizando a CDN você não vai se conectar à China.

Você se conecta a algum lugar mais próximo. Como os Estado Unidos.

Analise a imagem a seguir:

![cdn-example](https://camo.githubusercontent.com/06c4b1519427a89f49cc81f80f24c142ef65a55f/687474703a2f2f62612d6465766c61622e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30342f63646e2e706e67)

Se estiver na África, não se conecta à Europa. __Conecta-se à África.__

Se estiver na Austrália, não se conecta à Europa. __Conecta-se à Austrália.__

Isto faz com que os arquivos __demorem menos__ para carregar (e sua página
também).

Sigamos com Bootstrap.

Agora sim, já que está adicionado ao nosso projeto, podemos começar a testar um
pouco de tudo o que nos oferece:

Uma grid, ícones, botões, barras de navegação, etc.

![Bootstrap](https://camo.githubusercontent.com/c681e09ad23614d698347d94477054770a8a4e56/687474703a2f2f7777772e626f73732d646576656c6f706d656e742e62697a2f73697465732f64656661756c742f66696c65732f626f6f7473747261702d30322e706e67)

A grid de Bootstrap é composta por 12 colunas e conta com os elementos típicos
de um *grid system* (como *rows* e *columns*). Também possui tipos de
contêineres (*container-fluid* e *container*) e colunas para diferentes tamanhos
de telas.

| Classe | Dispositivo | Medida |
| :-------: | :------: | :-----: |
| col-xs-   | móvel    | < 768 px  |
| col-sm-   | tablets  | >= 768 px|
| col-md-   | desktop  | >= 992 px |
| col-lg-   | Desktop maior| >= 1200 px |

Além da grid e do que mencionamos antes, Bootstrap conta com muitos componentes
que podemos reutilizar todas as vezes que sejam necessários.

### Como fazemos uso deste grande poder?

Para utilizar o que já nos oferece nosso framework, só necessitamos ir à sua
página, procurar o componente que queremos utilizar e *copiar e colar* em nosso
HTML o código.

![Bootstrap-btn](https://raw.githubusercontent.com/Laboratoria/curricula-js/f659ee55eeb322341c314d7d080bb22468e9a576/04-social-network/01-css-frameworks/02-bootstrap/btn-example.PNG)

E assim fácil e maravilhosamente já temos nossos botões.

Se quisermos saber um pouco mais sobre Bootstrap e como funciona
[aqui](https://www.youtube.com/watch?v=_0PL45xM__0&list=PLBbHLUbqqCrTwIrdix6kl84m4OPE0JexR)
há uma série de vídeos, mas sempre é mais divertido testá-lo nós mesmas.
