# Aula Prática

- Tipo: `oficina`
- Formato: `guiado`
- Duração: `120min`

## Objetivos

- Praticar programando com sua equipe de professoras, resolvendo problemas de
  estruturas condicionais, estruturas de repetição e funções
- Praticar, praticar e praticar

***

## Enunciados

Aqui estão alguns exercícios para você praticar, sugerimos que tenta resolver
eles sozinha ou em grupo. Assim, você ficará familiarizada com os desafios. E se
quiser pode apresentar a sua solução para a sala e ajudar as suas companheiras
😁

### 1. Tic Tac Toe

Crie uma página web que implemente o Jogo da Velha. Esse é um jogo divertido
entre dois jogadores **X** e **O**, que marcam os espaços de um tabuleiro 3x3
alternadamente. O ganhador é quem primeiro conseguir formar uma linha
horizontal, vertical ou diagonal de três espaços consecutivos com sua marca.
Para isso, deverá criar o tabuleiro diretamente no arquivo HTML e as
funcionalidades serão desenvolvidas utilizando o DOM.

Para desenvolver o jogo, devemos considerar certos pontos:

1. Deve conter um botão **RESET** para limpar o tabuleiro e começar a jogar
   novamente
2. Abaixo do tabuleiro deverá indicar, após finalizar o jogo, qual jogador foi
   vencedor ou se deu velha.
3. Os dois jogadores devem poder participar: por exemplo, o primeiro click
   corresponde ao jogador **X** e o próximo click automaticamente corresponde ao
   jogador **O**, alternando as jogadas.

![Tic Tac
Toe](https://user-images.githubusercontent.com/11894994/59530511-2c4fcf80-8eba-11e9-8d0d-80d45c68c69d.png)

### 2. Freelancer v2

Lembra-se do desafio
[Freelancer](https://github.com/Laboratoria-learning/freelancer)? Agora, vamos
focar em replicar a funcionalidade da seção `Portfolio` que é dinâmica ao clicar
sobre uma das imagens. Deve ficar como a imagem a seguir:

![Freelancer
Portfolio](https://user-images.githubusercontent.com/11894994/59530609-6de07a80-8eba-11e9-9f8f-ad8c070cc373.gif)

### 3. Nossas Programadoras v2

Lembra do exercício "Nossas Programadoras"? Agora adicionaremos um filtro para
selecionar as programadores em função de sua sede. Ao final, deverá ficar assim:

![Nuestras
Coders](https://user-images.githubusercontent.com/11894994/59530740-be57d800-8eba-11e9-9257-f56b1ab96b94.gif)

### 4. Captcha

No dia a dia usamos serviços que geram **CAPTCHA**. O mais usado é o do Google e
você pode ver a documentação
[aqui](https://developers.google.com/recaptcha/docs/display?authuser=1). Esses
CAPTCHA tem como objetivo final identificar se é ou não uma pessoa e vai mudando
conforme a tecnologia avança.

Inicialmente consistia em um conjunto de imagens que o usuário devia determinar
o conteúdo e indicar ao sistema. Hoje em dia, avaliam seu comportamento no
navegador e se tiver dúvidas, pede para você avaliar um conjunto de imagens
maior.

Faremos um Captcha \(como mostra a imagem abaixo\). Ele comprovará que o usuário
escreva o mesmo que o Captcha que forneceremos. O valor digitado deverá ser
testado no momento em que o usuário clique no símbolo  **✓** e geraremos outro
código quando o usuário clicar no símbolo  **↻**.

Dado: Gere os números e letras de maneira aleatória.

- [Math.random()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

![Captcha](https://user-images.githubusercontent.com/11894994/59530848-f8c17500-8eba-11e9-9409-fb993225d14c.gif)
