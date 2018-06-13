# Casos Práticos (vídeos)

- Tipo: `leitura`
- Formato: `individual`
- Duração: `6h`

## Objetivos

* Entender, por meio de casos práticos, como aplicar os conceitos de navegar e manipular o DOM e responder a eventos.

***

## Enunciados

Como já fizemos antes, é hora de aplicar os conceitos aprendidos para resolver problemas.

A seguir, você terá vários problemas que deverá resolver. Tente resolvê-los primeiro por conta própria. Abaixo você encontrará as soluções.

Depois de tentar, compare suas soluções com os vídeos abaixo.

_NÃO_ antes.

### 1. Reserva de assentos de avião

Uma pequena companhia aérea acaba de comprar um computador para seu novo sistema de reservas automatizado. Você foi solicitada a desenvolver o novo sistema. Escreva uma aplicação para atribuir assentos em cada voo do **único** avião da companhia \(capacidade: 10 assentos\).

![Reserva de assentos](https://image.ibb.co/eMz26v/avion_2.jpg)

Sua aplicação deve mostrar as seguintes alternativas:

Por favor, digite 1 para Primeira Classe e Por favor, digite 2 para Econômica.

![Reserva de assentos](https://image.ibb.co/mh9PKF/avion_3.jpg)

Se o usuário digitar 1, seu aplicativo deve atribuir um lugar na seção de primeira classe \(assentos 1 a 4\). Se o usuário digitar 2, sua aplicação deve atribuir um assento na seção econômica \(assentos 5 a 10\).

A sua aplicação deverá então imprimir um cartão de embarque, indicando o número do lugar da pessoa e se está na primeira classe ou na classe econômica.

![Reserva de assentos](https://image.ibb.co/d8gtDa/avion_4.jpg)

### Dicas para a solução

Abaixo, você encontrará dicas que poderão ajudá-la com a solução, boa sorte!

#### [Dica | Diagrama de fluxo]

![Logotipo do GitHub](https://image.ibb.co/bQ86Ya/untitled_8.jpg)

#### [Dica | Representação usando Arrays]

Use uma matriz unidimensional do tipo booleano para representar a tabela de assentos do avião. Inicialize todos os elementos do array com -false- para indicar que todos os lugares estão vazios. À medida que cada lugar é atribuído, defina o elemento correspondente da matriz como true para indicar que esse lugar não está mais disponível.

Seu aplicativo nunca deverá atribuir um lugar que já tenha sido atribuído. Quando a seção econômica ou a primeira classe estiver cheia, seu programa deve perguntar à pessoa se ela concorda em ser colocada na primeira classe \(e vice-versa\).

![Reserva de assentos](https://image.ibb.co/nH4rzF/avion_6.jpg)

Se a pessoa aceitar, faça a atribuição de lugar apropriada.

Se não, você deve exibir a mensagem "O próximo vôo sai em 3 horas".

![Reserva de assentos](https://image.ibb.co/d2Hpmv/avion_7.jpg)

### 2. Campo Minado

O jogo campo minado funciona da seguinte maneira:

Uma tabela é mostrada onde são encontradas células vazias, com número ou com minas. No caso de pressionar uma mina, o jogo termina, se você pressionar lugares sem minas \(vazio ou número\), o jogo continua.

![Campo minado](https://lh4.googleusercontent.com/c4jnMEV2CirXxh8CRzP1y6_VSqfPOLNQnTGyv2uKyPzEMfa42ztBClyMCigW7K3dJqNWacIJDjaj-kfVDFWtQbHySxNhSSRBPVnf2Q2SbHK3MUkWD0WMpsVyXeUAfrI11ya9heW5lng)

#### Perguntas guia

* Como você pode estruturar o campo no navegador? \(dica: HTML\)
* Como você pode diferenciar uma bomba de um número ou de uma célula vazia no HTML?
* Qual evento você precisa para capturar o clique do usuário?
* Quando o usuário clica na "célula", o que precisa acontecer?
* Como podemos fazer elementos aparecerem e desaparecerem em HTML?
* Como fazemos para que os cliques do usuário não possam mais ser inseridos? \(dica: removeEventListener\)

#### Requisitos

* Exibir uma tabela 4 x 4 \(com bombas, células vazias e números em posição fixa\)
* Ao clicar em uma célula vazia, mude a cor da célula.
* Ao clicar em uma célula com uma bomba, termine o jogo \(não se pode clicar em mais células\) e mostre a mensagem: "Explodiu!"
* Quando você clica em uma célula com um número, mostre o número que você tem.
* Crie um botão Reset que inicie o jogo novamente.

#### Pontos extras

* Quando você clicar fora da tabela, mostre a mensagem: "Continue jogando". \(inner html ou alert\).
* Pergunte o tamanho do campo para o jogo.
* Peça o nível de dificuldade desejado \(fácil ou difícil e significa o número de bombas no jogo\)
* Preencha automaticamente tudo \(bombas, células vazias e números\)

#### 3. Crie um menu de hambúrguer

Um menu de hambúrguer nos permite ter o menu escondido e mostrar apenas um botão \(3 linhas horizontais\) que quando pressionamos \(ou clicamos\), todas as opções de menu são mostradas na tela.

Algo assim:

![Menu hamburger](http://i.imgur.com/JKJ8V9v.gif)

Replicar essa funcionalidade usando DOM e CSS. \(Não adicione efeitos "legais", apenas foque na funcionalidade\)

#### 4. Crie abas

As abas são usadas para agrupar conteúdo semelhante usando apenas um espaço.

Algo assim:

![Menu em tabs](https://diypm8fk7dlz0.cloudfront.net/support/wp-content/uploads/2014/06/simulate-tabs.gif)

Replicar essa funcionalidade usando DOM e CSS. \(Não adicione efeitos "legais", apenas foque na funcionalidade\)

#### 5. Crie um menu suspenso

O menu suspenso nos ajuda a economizar espaço em um menu, pois agrupa elementos semelhantes.

Algo assim:

![Menu drop down](https://cdn.codemyui.com/wp-content/uploads/2016/06/jQuery-Dropdown-Navigation-Menu.gif)

#### 6. Mini zoológico

Esta página permite escolher efeitos como **sépia** , **preto e branco** e **inverter as cores** que queremos que as nossas imagens apresentem. Você terá que replicá-lo usando DOM e CSS.

Vamos ver como a página deve ficar...

![Mini Zoo](https://fotos.subefotos.com/33a270779462a9ffe98ae8c2b528087co.gif)



### Soluções

A seguir, Silvana, Meme, Amalia, Karla e Inti explicam como resolveram cada um dos exercícios anteriores.

#### 1. Companhia Aérea

[![Solu&#xE7;&#xE3;o da companhia a&#xE9;rea](https://img.youtube.com/vi/ov2pYXulNvc/0.jpg)](https://www.youtube.com/watch?v=ov2pYXulNvc)

#### 2. Campo Minado

[![Solu&#xE7;&#xE3;o de ca&#xE7;a-minas](https://img.youtube.com/vi/ZtnY3ojz91k/0.jpg)](https://www.youtube.com/watch?v=ZtnY3ojz91k)

#### 3. Menu Hamburger

[![Menu de Solu&#xE7;&#xE3;o Hamburger](https://img.youtube.com/vi/ej2MVZpPaoM/0.jpg)](https://www.youtube.com/watch?v=ej2MVZpPaoM)

#### 4. Abas

[![Guias do menu de solu&#xE7;&#xE3;o](https://img.youtube.com/vi/nEKbaKIat1g/0.jpg)](https://www.youtube.com/watch?v=nEKbaKIat1g)

#### 5. Menu dropdown

[![Menu dropdown da solu&#xE7;&#xE3;o](https://img.youtube.com/vi/yV7L6r6D464/0.jpg)](https://www.youtube.com/watch?v=yV7L6r6D464)

#### 6. Mini zoológico

<https://docs.google.com/presentation/d/1LM2RPWTuo2SmrWT6nId2UrLyK5IXGeBQ_dMG_VN_FFw/edit#slide=id.g1554294399_1_0>

[Google-docs presentation](https://docs.google.com/presentation/d/1LM2RPWTuo2SmrWT6nId2UrLyK5IXGeBQ_dMG_VN_FFw/edit#slide=id.g1554294399_1_0)
