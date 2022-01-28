# Projeto de extensão: Sala de Emergências

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínima do projeto](#5-critérios-de-aceitação-mínima-do-projeto)
* [6. Hacker edition](#6-hacker-edition)

## 1. Preâmbulo

Os dados são de pouca utilidade se não são organizados para ser analizados e
servem para entender e tomar decisões sobre um fenômeno. Para que os dados
se transformem em **informação** fácil de entender para os usuários, necessitamos
processar estes dados. Uma maneira simples de fazer é criando _interfaces_ interativas
e _visuais_.

Um caso especial, e que é crítico nos hospitais, é a gestão dos
pacientes que chegam à sala de emergências de acordo com as suas necessidades particulares.
A análise dessa informação nos permite atribuir médicos e salas,
que são sempre escassas, a quem mais necesita. Para fazer isso, existem sistemas
de categorização de pacientes, no qual não importa a ordem de chegada, mas
a sua gravidade de acordo com a seguinte tabela:

![Categorização-UEH-660x1025](https://user-images.githubusercontent.com/7809496/71842401-4d6b4e00-30a0-11ea-9784-910bcc7b2a8a.png)

Os pacientes graves devem ser atendidos imediatamente por um
médico. Os de gravidade mediana deverão esperar por uma maca livre, se
houver mais de um paciente nesta categoria, são ordenados de acordo com a sua hora
de chegada. Os demais pacientes se ordenam primero por categoria de gravidade e depois
pelo horário de chegada; Passam apenas se não houver alguém de maior prioridade
esperando por atendimento.

## 2. Resumo do projeto

![Free to use from https://pxhere.com/es/photo/599363](emergency-room.jpg)

Desta vez, vocês trabalharam em duplas para criar uma aplicação web para a gestão
de filas das salas de emergências de um hospital e que respondam aos critérios
de gravidade antes descritos. Aqui, você mesma irá criar os dados com
os quais terá que trabalhar.

Neste projeto você poderá desenvolve-lo
em Vanilla JavaScript ou em algum _framework_ ou biblioteca de sua escolha.

## 3. Objetivos de aprendizagem

### Geral

1. Aplicar e aprofundar tudo que já aprendeu.
2. Pensar nas necessidades das pessoas para criar as suas "Histórias de Usuário".
3. Escrever e trabajar com histórias de usuário, suas definições de pronto
(_definition of done_) e critérios de aceitação como ferramenta central da
organização e planificação de seu trabalho.
4.Recomendamos pensar em _test driven development_ no momento de planificar a
solução. Como terão que escrever as provas unitárias, aproveitem a oportunidade
de fazer-las antes de escrever a funcionalidade.

### Front-end

1. O objetivo principal deste projeto é te familiarizar com o uso de
matrizes e dicionários, e os combinando para obter estruturas de
dados mais complexas que te permitan resolver problemas de _big data_.
2. Dominar a manipulação do DOM para fazer aplicações interativas e
dinâmicas sem necessidade de ter tudo em HTML ou em vários arquivos de HTML, mas
gerando e modificando o HTML por JavaScript.
3. Usar eventos do DOM, como _clicks_ ou entradas de texto, para interagir
com os usuários.
4. Aperfeiçoar suas habilidades de desenho e CSS _responsivo_ para obter uma
interface que permita ter todos os elementos pedidos sem interferir entre sí.

### UX

1. Definir um produto que responda às necessidades e dificuldades de
pacientes que esperam ser atendidos em urgências e dos médicos
que os colocam na lista de espera, a partir de uma abordagem aos
usuários/as (observação contextual, entrevistas com médicos, enfermeiras, etc).
2. Selecionar e priorizar a informação a ser mostrada para cada usuário/a.
3. Criar interfaces que sigam os princípios de desenho visual.
4. Iterar o desenho do produto e sua usabilidade a partir de testes com
usuários/as (mínimo 5 testes de usabilidade).

## 4. Considerações gerais

* O trabalho deve ser feito em dupla.
* Devem ter seu código alojado no _GitHub_ usando _Git_ e seus comandos _commit_,
 _push_, _pull_, etc.
* Devem implantar a aplicação usando [GitHub Pages](https://pages.github.com/).
* Toma o tempo necessário para completar o projeto com a máxima qualidade possível.
 Assuma 3 semanas como uma referência inicial.
* As provas unitárias devem ter uma cobertura do 70% de _statements_.

## 5. Critérios de aceitação mínima do projeto

* Deve poder registrar um paciente, guardando seu nome, idade, gênero, descrição
da emergência e categoria da mesma (gravidade).
* Deve poder ver as salas de atendimento, se estão ocupadas por pacientes, seus
dados e a categoria da emergência.
* Deve poder ver a fila de espera ordenada de acordo o nível de emergência
de cada paciente.
* Deve poder marcar uma sala como "livre" porque já terminou o atendimento do
paciente que estava nela.
* Deve poder passar um paciente da fila para atendimento em uma das
salas disponíveis, comunicando seu nome e qual sala deve passar.

Para facilitar o desenvolvimento, considere os seguintes conselhos:

* Quem usa o sistema é o médico responsável por categorizar os pacientes e
ninguém mais. Sua tela também é visível em um televisor do hospital.
* Tudo deve ser visível em uma única tela com resolução de TV (1280x720),
considere isto ao desenhar a interface.
* Há apenas 6 salas de atendimento, mas seria genial se a aplicação permitisse
trocar ese número facilmente. Em primeiro lugar como uma constante dentro da
aplicação e em uma segunda iteração como uma configuração que a usuaria pode
definir.

## 6. Hacker edition

* É provável que na sua solução toda a informação se mantenha em memoria, ou
seja, ao recarregar a página tudo que foi guardado desaparece; considere usar
alguma ferramenta para manter a persistencia dessas informações.
Uma opção é guardar os dados em [window.localStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage),
outra opção é considerar alguma base de dados, que dentre tantas opções, inclui o
Firebase.

## Conteúdo de referência

* [Colas e Colas de prioridad](https://medium.com/laboratoria-developers/queues-in-javascript-2602677c9c3b)
* [Priority queue (em Inglês)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/priority-queue)
