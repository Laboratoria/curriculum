# Exercícios Livres

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

Uma pequena companhia aérea acaba de comprar um computador para seu novo sistema
de reservas automatizado. Você foi solicitada a desenvolver o novo sistema.
Escreva uma aplicação para atribuir assentos em cada voo do **único** avião da
companhia \(capacidade: 10 assentos\).

![Avião](https://user-images.githubusercontent.com/11894994/59522404-010eb580-8ea5-11e9-86e3-4c1e8f32b0b5.jpg)

Sua aplicação deve mostrar as seguintes alternativas:

Por favor, digite 1 para Primeira Classe e Por favor, digite 2 para Econômica.

![Avião](https://user-images.githubusercontent.com/11894994/59522439-184da300-8ea5-11e9-83de-4823ef78efb4.jpg)

Se o usuário digitar 1, seu aplicativo deve atribuir um lugar na seção de
primeira classe \(assentos 1 a 4\). Se o usuário digitar 2, sua aplicação deve
atribuir um assento na seção econômica \(assentos 5 a 10\).

A sua aplicação deverá então imprimir um cartão de embarque, indicando o número
do lugar da pessoa e se está na primeira classe ou na classe econômica.

![Avião](https://user-images.githubusercontent.com/11894994/59522498-33b8ae00-8ea5-11e9-9081-6417549b41bb.jpg)

### Dicas para a solução

Abaixo, você encontrará dicas que poderão ajudá-la com a solução, boa sorte!

#### [Dica | Diagrama de fluxo]

![Fluxo](https://user-images.githubusercontent.com/11894994/59522574-62368900-8ea5-11e9-9be8-5c2679577b40.jpg)

#### [Dica | Representação usando Arrays]

Use uma matriz unidimensional do tipo booleano para representar a tabela de assentos do avião. Inicialize todos os elementos do array com -false- para indicar que todos os lugares estão vazios. À medida que cada lugar é atribuído, defina o elemento correspondente da matriz como true para indicar que esse lugar não está mais disponível.

Seu aplicativo nunca deverá atribuir um lugar que já tenha sido atribuído. Quando a seção econômica ou a primeira classe estiver cheia, seu programa deve perguntar à pessoa se ela concorda em ser colocada na primeira classe (e vice-versa).

![Avião](https://user-images.githubusercontent.com/11894994/59522653-98740880-8ea5-11e9-8733-84cc47264e9e.jpg)

Se a pessoa aceitar, faça a atribuição de lugar apropriada.

Se não, você deve exibir a mensagem "O próximo vôo sai em 3 horas".

![Avião](https://user-images.githubusercontent.com/11894994/59522674-a45fca80-8ea5-11e9-867e-2762fee3a637.jpg)

#### 2. Crie um menu de hambúrguer

Um menu de hambúrguer nos permite ter o menu escondido e mostrar apenas um botão \(3 linhas horizontais\) que quando pressionamos \(ou clicamos\), todas as opções de menu são mostradas na tela.

Algo assim:

![Menu hamburger](https://user-images.githubusercontent.com/11894994/59522804-f7398200-8ea5-11e9-9e50-08ccec42da24.gif)

Replicar essa funcionalidade usando DOM e CSS. \(Não adicione efeitos "legais", apenas foque na funcionalidade\)

#### 3. Criação de tabs

As abas são usadas para agrupar conteúdo semelhante usando apenas um espaço.

Algo assim:

![Menu em tabs](https://user-images.githubusercontent.com/11894994/59522837-12a48d00-8ea6-11e9-9704-8d137aee4ee7.gif)

Replicar essa funcionalidade usando DOM e CSS. \(Não adicione efeitos "legais", apenas foque na funcionalidade\)

### Soluções

A seguir a equipe te explica como ela resolveu cada um dos exercícios.

### 1. Reserva de assentos de avião

[![Solución aerolínea](https://img.youtube.com/vi/ov2pYXulNvc/0.jpg)](https://www.youtube.com/watch?v=ov2pYXulNvc)

#### 2. Crie um menu de hambúrguer

[![Solución Menu Hamburguesa](https://img.youtube.com/vi/ej2MVZpPaoM/0.jpg)](https://www.youtube.com/watch?v=ej2MVZpPaoM)

#### 3. Criação de tabs

[![Solución Menu Tabs](https://img.youtube.com/vi/nEKbaKIat1g/0.jpg)](https://www.youtube.com/watch?v=nEKbaKIat1g)
