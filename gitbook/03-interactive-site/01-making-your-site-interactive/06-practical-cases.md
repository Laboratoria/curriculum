# 06 - Practical Cases

## Estudos de caso \(vídeos\)

* Tipo: `leitura`
* Formato: `ritmo próprio`
* Duração: `6h`

### Objetivos

* Entender, por meio de casos práticos, como aplicar os conceitos de navegar e manipular o DOM e responder a eventos.

## Enunciados

Como já fizemos antes, é hora de aplicar os conceitos aprendidos para resolver problemas.

A seguir, você terá vários problemas que deverá resolver. Tente resolvê-los primeiro por conta própria. Abaixo você encontrará as soluções.

Depois de tentar, compare suas soluções com os vídeos abaixo.

_NÃO_ antes.

### 1. Reserva de assentos de avião

Uma pequena companhia aérea acaba de comprar um computador para seu novo sistema de reservas automatizado. Você foi solicitada a desenvolver o novo sistema. Escreva uma aplicação para atribuir assentos em cada voo do **único** avião da companhia \(capacidade: 10 assentos\).

![](https://camo.githubusercontent.com/2d4dffa6cc4705e7552b542a95367921170fa682/68747470733a2f2f696d6167652e6962622e636f2f654d7a3236762f6176696f6e5f322e6a7067)

Sua aplicação deve mostrar as seguintes alternativas:

Por favor, digite 1 para Primeira Classe e Por favor, digite 2 para Econômica.

![](https://camo.githubusercontent.com/7cde6ed7b5ad4ad2ef2a3cc273056e9a4899546f/68747470733a2f2f696d6167652e6962622e636f2f6d6839504b462f6176696f6e5f332e6a7067)

Se o usuário digitar 1, seu aplicativo deve atribuir um lugar na seção de primeira classe \(assentos 1 a 4\). Se o usuário digitar 2, sua aplicação deve atribuir um assento na seção econômica \(assentos 5 a 10\).

A sua aplicação deverá então imprimir um cartão de embarque, indicando o número do lugar da pessoa e se está na primeira classe ou na classe econômica.

![](https://camo.githubusercontent.com/ad271eea910b764273d88d58973d14feadca4dc9/68747470733a2f2f696d6167652e6962622e636f2f6438677444612f6176696f6e5f342e6a7067)

### Dicas para a solução

Abaixo, você encontrará dicas que poderão ajudá-la com a solução, boa sorte!

#### **\[Dica \| Diagrama de fluxo\]**

![Logotipo do GitHub](https://camo.githubusercontent.com/d4be0ae8769e77bd37af6dfe391f63fc375d00ca/68747470733a2f2f696d6167652e6962622e636f2f6251383659612f756e7469746c65645f382e6a7067)

#### **\[Dica \| Representação usando Arrays\]**

Use uma matriz unidimensional do tipo booleano para representar a tabela de assentos do avião. Inicialize todos os elementos do array com -false- para indicar que todos os lugares estão vazios. À medida que cada lugar é atribuído, defina o elemento correspondente da matriz como true para indicar que esse lugar não está mais disponível.

Seu aplicativo nunca deverá atribuir um lugar que já tenha sido atribuído. Quando a seção econômica ou a primeira classe estiver cheia, seu programa deve perguntar à pessoa se ela concorda em ser colocada na primeira classe \(e vice-versa\).

![](https://camo.githubusercontent.com/dde17d453c6d63ec4433c4c8b2f7f0fcd5df7ad5/68747470733a2f2f696d6167652e6962622e636f2f6e4834727a462f6176696f6e5f362e6a7067)

Se a pessoa aceitar, faça a atribuição de lugar apropriada.

Se não, você deve exibir a mensagem "O próximo vôo sai em 3 horas".

![](https://camo.githubusercontent.com/555297b389110a474d57100120feee37804d4db3/68747470733a2f2f696d6167652e6962622e636f2f643248706d762f6176696f6e5f372e6a7067)

### 2. Campo Minado

O jogo campo minado funciona da seguinte maneira:

Uma tabela é mostrada onde são encontradas células vazias, com número ou com minas. No caso de pressionar uma mina, o jogo termina, se você pressionar lugares sem minas \(vazio ou número\), o jogo continua.

[![Meu escavador](https://camo.githubusercontent.com/5234aa78cbc8118904ae079257dffd4f8bb213fd/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f63346a6e4d4556324369725878683843527a503179365f56537166504f4c4e516e5447797632754b79507a454d666134327a7442436c794d43696757374b33644a714e576163494a446a616a2d6b6656444657745162487953784e685353524250566e663251325362484b334d556b574430574d70735679586555416672493131796139686557356c6e67)](https://camo.githubusercontent.com/5234aa78cbc8118904ae079257dffd4f8bb213fd/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f63346a6e4d4556324369725878683843527a503179365f56537166504f4c4e516e5447797632754b79507a454d666134327a7442436c794d43696757374b33644a714e576163494a446a616a2d6b6656444657745162487953784e685353524250566e663251325362484b334d556b574430574d70735679586555416672493131796139686557356c6e67)

**Perguntas guia**

* Como você pode estruturar o campo no navegador? \(dica: HTML\)
* Como você pode diferenciar uma bomba de um número ou de uma célula vazia no HTML?
* Qual evento você precisa para capturar o clique do usuário?
* Quando o usuário clica na "célula", o que precisa acontecer?
* Como podemos fazer elementos aparecerem e desaparecerem em HTML?
* Como fazemos para que os cliques do usuário não possam mais ser inseridos? \(dica: removeEventListener\)

**Requisitos**

* Exibir uma tabela 4 x 4 \(com bombas, células vazias e números em posição fixa\)
* Ao clicar em uma célula vazia, mude a cor da célula.
* Ao clicar em uma célula com uma bomba, termine o jogo \(não se pode clicar em mais células\) e mostre a mensagem: "Explodiu!"
* Quando você clica em uma célula com um número, mostre o número que você tem.
* Crie um botão Reset que inicie o jogo novamente.

**Pontos extras**

* Quando você clicar fora da tabela, mostre a mensagem: "Continue jogando". \(inner html ou alert\).
* Pergunte o tamanho do campo para o jogo.
* Peça o nível de dificuldade desejado \(fácil ou difícil e significa o número de bombas no jogo\)
* Preencha automaticamente tudo \(bombas, células vazias e números\)

**3. Crie um menu de hambúrguer**

Um menu de hambúrguer nos permite ter o menu escondido e mostrar apenas um botão \(3 linhas horizontais\) que quando pressionamos \(ou clicamos\), todas as opções de menu são mostradas na tela.

Algo assim:

[![Hamburger Menu](https://camo.githubusercontent.com/4f6d283e1db6472dc0f476c9c37f13bb58438b45/687474703a2f2f692e696d6775722e636f6d2f4a4b4a385639762e676966)](https://camo.githubusercontent.com/4f6d283e1db6472dc0f476c9c37f13bb58438b45/687474703a2f2f692e696d6775722e636f6d2f4a4b4a385639762e676966)

Replicar essa funcionalidade usando DOM e CSS. \(Não adicione efeitos "legais", apenas foque na funcionalidade\)

#### **4. Crie abas**

As abas são usadas para agrupar conteúdo semelhante usando apenas um espaço.

Algo assim:

![](https://camo.githubusercontent.com/6a1475c138f5ad393f430dad446c6e13bd63472d/68747470733a2f2f646979706d38666b37646c7a302e636c6f756466726f6e742e6e65742f737570706f72742f77702d636f6e74656e742f75706c6f6164732f323031342f30362f73696d756c6174652d746162732e676966)

Replicar essa funcionalidade usando DOM e CSS. \(Não adicione efeitos "legais", apenas foque na funcionalidade\)

#### **5. Crie um menu suspenso**

O menu suspenso nos ajuda a economizar espaço em um menu, pois agrupa elementos semelhantes.

Algo assim:

[![Drop Down Menu](https://camo.githubusercontent.com/7212832c03be61e65849c555cf695ed1d64134d4/68747470733a2f2f63646e2e636f64656d7975692e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30362f6a51756572792d44726f70646f776e2d4e617669676174696f6e2d4d656e752e676966)](https://camo.githubusercontent.com/7212832c03be61e65849c555cf695ed1d64134d4/68747470733a2f2f63646e2e636f64656d7975692e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f30362f6a51756572792d44726f70646f776e2d4e617669676174696f6e2d4d656e752e676966)

#### **6. Mini zoológico**

Esta página permite escolher efeitos como **sépia** , **preto e branco** e **inverter as cores** que queremos que as nossas imagens apresentem. Você terá que replicá-lo usando DOM e CSS.

Vamos ver como a página deve ficar ... 

![](https://camo.githubusercontent.com/1c25cb914fc89ea091d2c49a4e9f6de5505e8631/68747470733a2f2f666f746f732e73756265666f746f732e636f6d2f33336132373037373934363261396666653938616538633262353238303837636f2e676966)



### Soluções

A seguir, Silvana, Meme, Amalia, Karla e Inti explicam como resolveram cada um dos exercícios anteriores.

#### 1. Companhia Aérea

[![Solu&#xE7;&#xE3;o da companhia a&#xE9;rea](https://camo.githubusercontent.com/cd50da968272c6ceda15ed5a0157430384ea2ead/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6f7632705958756c4e76632f302e6a7067)](https://www.youtube.com/watch?v=ov2pYXulNvc)

**2. Campo Minado**

[![Solu&#xE7;&#xE3;o de ca&#xE7;a-minas](https://camo.githubusercontent.com/ebab1040898492915230f8aff1bbf33caabe2ced/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f5a746e59336f6a7a39316b2f302e6a7067)](https://www.youtube.com/watch?v=ZtnY3ojz91k)

**3. Menu Hamburger**

[![Menu de Solu&#xE7;&#xE3;o Hamburger](https://camo.githubusercontent.com/322fb03eab6338c6725e976e1b57d10e5969317a/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f656a324d565a7050616f4d2f302e6a7067)](https://www.youtube.com/watch?v=ej2MVZpPaoM)

**4. Abas**

[![Guias do menu de solu&#xE7;&#xE3;o](https://camo.githubusercontent.com/a8627d69a25d1f1b255db4c1f6616951a9fb32a9/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f6e454b62614b49617431672f302e6a7067)](https://www.youtube.com/watch?v=nEKbaKIat1g)

**5. Menu suspenso**

[![Menu suspenso da solu&#xE7;&#xE3;o](https://camo.githubusercontent.com/27ccb03e4ffd8048e711e562a2d27137474b50f4/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f7956374c367236443436342f302e6a7067)](https://www.youtube.com/watch?v=yV7L6r6D464)

**6. Mini zoológico**

[https://docs.google.com/presentation/d/1LM2RPWTuo2SmrWT6nId2UrLyK5IXGeBQ\_dMG\_VN\_FFw/edit\#slide=id.g1554294399\_1\_0](https://docs.google.com/presentation/d/1LM2RPWTuo2SmrWT6nId2UrLyK5IXGeBQ_dMG_VN_FFw/edit#slide=id.g1554294399_1_0)

