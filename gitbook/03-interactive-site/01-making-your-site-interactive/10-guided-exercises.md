# 10 - Guided Exercises

* Tipo: `oficina`
* Formato: `guiado`
* Duração: `120min`

## Objetivos

* Praticar programando com sua equipe de professoras, resolvendo problemas de estruturas condicionais, estruturas de repetição e funções
* Praticar, praticar e praticar

## Enunciados

Em seguida, você tem mais problemas de prática. Estes problemas serão resolvidos, passo a passo, por sua equipe de professoras em uma sessão presencial \(`oficina`\).

Sugerimos que você tente resolver os exercícios sozinha \(ou em equipe\) **antes** da sessão presencial. Então, você já virá dúvidas específicas e você estará familiarizada com os desafios. Talvez você possa apresentar sua solução para o restante da turma e, assim, ajudar o restante de suas colegas.

### 1. Jogo da Velha

Crie uma página web que implemente o Jogo da Velha. Esse é um jogo divertido entre dois jogadores **X** e **O**, que marcam os espaços de um tabuleiro 3x3 alternadamente. O ganhador é quem primeiro conseguir formar uma linha horizontal, vertical ou diagonal de três espaços consecutivos com sua marca. Para isso, deverá criar o tabuleiro diretamente no arquivo HTML e as funcionalidades serão desenvolvidas utilizando o DOM.

Para desenvolver o jogo, devemos considerar certos pontos:

1. Deve conter um botão **RESET** para limpar o tabuleiro e começar a jogar novamente
2. Abaixo do tabuleiro deverá indicar, após finalizar o jogo, qual jogador foi vencedor ou se deu velha.
3. Os dois jogadores devem poder participar: por exemplo, o primeiro click corresponde ao jogador **X** e o próximo click automaticamente corresponde ao jogador **O**, alternando as jogadas.

![Tic Tac Toe](https://d30y9cdsu7xlg0.cloudfront.net/png/25029-200.png)

### 2.Criando animação no DOM

Precisamos gerar 12 quadros brancos em filas de 3. Um desses quadros terá uma cor diferente. Precisamos mover esse quadro pelos quadros brancos usando as setas do teclado.

No vídeo a seguir, explicamos um pouco mais do exercício.

[![Animaci&#xF3;n DOM](https://img.youtube.com/vi/LtfSKzCjCC4/0.jpg)](https://www.youtube.com/watch?v=LtfSKzCjCC4)

### 3. Freelancer v2

Lembra-se do desafio [Freelancer](https://github.com/Laboratoria-learning/freelancer)? Agora, vamos focar em replicar a funcionalidade da seção `Portfolio` que é dinâmica ao clicar sobre uma das imagens. Deve ficar como a imagem a seguir:

![Freelancer Portfolio](https://media.giphy.com/media/xT9IgDSValpayTy8QE/giphy.gif)

### 4. Nossas Programadoras v2

Lembra do exercício guiado [Nossas Programadoras](https://lms.laboratoria.la/cohorts/test/courses/interactive-site/00-html-and-css/14-guided-exercises)? Agora adicionaremos um filtro para selecionar as programadores em função de sua sede. Ao final, deverá ficar assim:

![Nuestras Coders](https://media.giphy.com/media/xT9IgwHr6d1LObJt16/giphy.gif)

### 5. Captcha

No dia a dia usamos serviços que geram **CAPTCHA**. O mais usado é o do Google e você pode ver a documentação [aqui](https://developers.google.com/recaptcha/docs/display?authuser=1). Esses CAPTCHA tem como objetivo final identificar se é ou não uma pessoa e vai mudando conforme a tecnologia avança.

Inicialmente consistia em um conjunto de imagens que o usuário devia determinar o conteúdo e indicar ao sistema. Hoje em dia, avaliam seu comportamente no navegador e se tiver dúvidas, pede para você avaliar um conjunto de imagens maior.

Faremos um Captcha \(como mostra a imagem abaixo\). Ele comprovará que o usuário escreva o mesmo que o Captcha que forneceremos. O valor digitado deverá ser testado no momento em que o usuário clique no símbolo **✓** e geraremos outro código quando o usuário clicar no símbolo **↻**.

Dado: Gere os números e letras de maneira aleatória.

* [Math.random\(\)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

![Captcha](https://fotos.subefotos.com/299269b4ed8aac7e0a445f0c76355612o.gif)

