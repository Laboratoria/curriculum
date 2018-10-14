# Introdução a testes

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Entender os diferentes tipos de testes
- Revisar casos de estudo para ilustrar a importância de diferentes tipos de testes

***

## Tipos de _Testing_

Quando codificamos, queremos que o programa funcione. Infelizmente, todos nós cometemos erros. É por isso que realizamos testes. Assim como há várias razões para um software dar erro, há váris maneiras que nós, desenvolvedoras, podemos garantir que os erros não aconteçam. Vamos explorar algumas estratégias que podemos usar no nosso código.

- **Teste manual** - Você tem feito teste manual desde o início na Laboratoria. Toda vez que você executa o código e verifica se ele faz o esperado, você está testando o software manualmente.
- **Teste de usabilidade** - Ter usuários finais reais testando seu produto é chamado de teste de usabilidade e pode identificar comportamentos dos usuários que os desenvolvedores podem não ter considerado.
- **Teste unitários** - Testes unitários são pequenos pedaços de código escritos para verificar o comportamento de outro código. Você já tem testes unitários. Toda vez que você executa o código nos desafios de código, você está executando testes unitários que comparam o resultado do seu código com os valores esperados.
- **Teste de regressão** - Durante o desenvolvimento, nós devemos sempre nos assegurar que não modifiquemos acidentalmente comportamentos existentes quando adicionamos novos comportamentos. Garantir que os antigos comportamentos continuam funcionando é chamado de teste de regressão e pode ser feito com testes manuais ou testes unitários.
- **Teste de integração** - Software complexo frequentemente possui muitos sistemas que precisam trabalhar em conjunto e em harmonia. O teste de integração é a prática que garante que a totalidade do ecossistema do software funciona de ponta a ponta. Um exemplo é garantir que o _frontend_ exiba adequadamente as informações fornecidas peloa _backend_. Os testes de integração podem ser manuais ou automatizados com programação.
- **Teste do macaco** - O teste do macaco faz referência a interagir com o seu código de forma completamente aleatória para expor falhas potenciais em situações em que os humanos provavelmente não considerariam. Pode ser manual ou automatizado.
- **Teste baseado em requisitos** - Todo projeto de software possui uma especificação de requisitos e é importante verificar que o seu software de fato atende aos requisitos.
- **Teste em múltiplos navegadores** - Você pode estar surpresa ao saber que nem todos os navegadores renderizarão seu código da mesma forma. Para garantir que todos os seus usuários tenham a mesma ótima experiência, é uma boa prática testar em várias plataformas (Chrome, Firefox, Internet Explorer, etc).

Agora vamos discutir essas estratégias de testes no contexto de algumas falhas de software na vida real.

## Apollo 8

Em 1968, Margaret Hamilton era uma engenheira trabalhando na missão da Apollo 8. Um dia ela percebeu que era possível apagar acidentalmente todos os dados de navegação da nave quando sua filha de 4 anos estava usando o simulador de vôo para fazer um **teste do macaco** (também conhecido como "pressionar os botões aleatoriamente"). Embora Hamilton tenha apontado esse problema aos seus supervisores, eles acharam desnecessário resolver o problema uma vez que os astronautas eram mais espertos que uma menina de 4 anos e não pressionariam os botões daquela forma. Como o destino previu, após cinco dias na missão, um astronauta fez o que a filha de Hamilton fizera e apagou acidentalmente todos os dados de navegação da nave. Felizmente, os programadores em terra conseguiram remediar a situação e trazer os astronautas para casa com segurança, mas talvez mais **testes de usuabilidade** explorando como os astronautas interagiriam com o programa poderia ter poupado todos de muito estresse.

[Leitura opcional adicional.](http://sheromargarethamilton.wordpress.com)

![Margaret Hamilton poses with her code](http://www.grafoso.com/dc/wp-content/uploads/2016/07/ella-1.jpg)

## Foguete Ariane V

Em 1996, o foguete de 500 milhões de dólares Ariane V explodiu 40 segundos após o lançamento quando uma variável destinada a armazenar a velocidade do foguete não foi capaz de armazenar o valor real. Alguns tipos de dados numéricos só podem armazenar valores até um certo número finito de bits destinados à variável. O software fora escrito para o foguete anterior Ariane IV que não viajava tão rápido quanto o Ariane V. O lançamento se tornou uma falha bem cara de um **teste de integração** de como o novo hardware funcionaria com o programa antigo. Como diferentes estratégias de testes poderiam ter evitado o desastre? **Testes baseados em requisitos** poderiam ter exposta a necessidade de armazenar velocidades mais altas. **Testes unitários** que consideravam velocidades maiores poderia garantir que o programa continuaria funcionando mesmo com o novo requisito de velocidade.

[Leitura opcional adicional.](http://www.microsiervos.com/archivo/espacio/veinte-anos-explosion-primer-ariane-5-por-fallo-software.html)

![Space rocket explodes](https://www.viva64.com/media/images/content/b/0426_Space_error/image1.png)

## Therac-25

Nos anos 1980, diversos pacientes de câncer receberem pesadas doses de radiação devido a um bug no software da máquina de radioterapia Therac-25. O software mostrava ao operador um vago número de mal funcionamento quando um erro acontecia, mas não impedia o operador de administrar a radiação. Como os software mostrava frequentemente números de erros sem maiores consequências, as enfermeiras estavam acostumadas a ingnorá-las sem ler as mensagens.


**Testes de usabilidade** como profissionais reais da área de saúde provavelmente teriam exposto esse comportamento inesperado dos operadores da máquina. Além disso, uma revisão dos incidentes revelou que não houve **testes de integração** do software e do hardware juntos antes da montagem do Therac-25 no hospital para uso dos pacientes. Antigas versões da máquina possuíam dispositivos mecânicos para prevenir doses pesadas de radiação que o Therac-25 não possuía. A revisão também descobriu um bug que acontecia somente quando o operador pressionava um conjunto muito improvável de teclas no intervalo de 8 segundos. O **teste automatizado do macaco** é uma estratégia que pode identificar esses cenários altamente improváveis.

[Leitura opcional adicional.](https://es.wikipedia.org/wiki/Therac-25)

## Encerramento

Uma vez que seus bugs felizmente nunca terão as consequências catastróficas desses exemplos, ainda assim é importante fazer nosso melhor para garantir que nossos usuários finais nunca encontrem bugs, não importa o tamanho de nosso projeto. Nas lições futuras exploraremos como integrar os princípios de teste nos nosso processo de desenvolvimento.