# Produto final: Dashboard de Dados

* Tipo: `prática`
* Formato: `ritmo próprio`
* Duração: `15h`

## Objetivos

* A seguir, apresentamos o desafio final deste curso.

***

## Sobre o produto

Na Laboratoria, as Training Managers \(TMs\) fazem um ótimo trabalho analisando o máximo de dados possíveis sobre o desempenho das alunas para apoiá-las em sua aprendizagem. Para revisar esses dados, as TMs geralmente precisam verificar muitos documentos do Excel \(Google Spreadsheets\) localizados em diferentes pastas e locais. Muitas vezes elas perdem tempo localizando esses documentos e _executando_ fórmulas para obter os dados de que precisam.

Para otimizar seu tempo, as TMs solicitaram que nós construíssemos uma ferramenta da Web onde elas pudessem ver esses dados com facilidade e rapidez. E elas nos disseram quais são os dados que elas normalmente analisam:

* O número total de alunas presentes pela sede e geração.
* A porcentagem de alunas desistentes
* O número de alunas que excedem a meta de pontos, em média, de todos os sprints realizados. O objetivo dos pontos é 70% do total de pontos em HSE e em tecnologia.
* A porcentagem que representa os dados anteriores em relação ao total de alunas.
* O Net Promoter Score \(NPS\) médio dos sprints realizados. O NPS é calculado com base no levantamento que as estudantes respondem em relação à recomendação que dariam da Laboratoria, sob a seguinte fórmula:

  ```text
  [Promoters] = [Respostas 9 ou 10] / [Total respostas] * 100
  [Passive] = [Respostas 7 a 8] / [Total Respostas] * 100
  [Detractors] = [Respostas entre 1 e 6] / [Total Respostas] * 100

  [NPS] = [Promoters] - [Detractors]
  ```

* A quantidade e porcentagem que representa o total de alunas que excedem a meta de pontos técnicos em média e sprint.
* O valor e a porcentagem que representam o número total de alunas que excedem a meta de pontos de HSE, em média, e por sprint.
* O percentual de alunas satisfeitas com a experiência da Laboratoria.
* A pontuação média das professoras.
* A pontuação média das mestres Jedi.

Com essas informações e com o [banco de dados que elas nos](https://github.com/Laboratoria-learning/data-dashboard/blob/master/js/data.js) forneceram [,](https://github.com/Laboratoria-learning/data-dashboard/blob/master/js/data.js) conseguimos criar [esse design](https://marvelapp.com/104ejifg/) . No entanto, acreditamos que você poderia propor uma alteração a esse design que possa melhorar a experiência das TMs.

## O que é exigido?

* Trabalhar em duplas
* Ter um planejamento
* A definição do projeto
* Implementação do dashboard de dados utilizando `html`, `css`e`js`
* Publicar nas páginas do Github

## Como começar?

1. Você deve fazer um [_**fork**_](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74) [deste repositório](https://github.com/Laboratoria-learning/data-dashboard) .
2. Então você deve **clonar** o _fork_ na sua máquina. Lembre-se que o comando para usar é `git clone` e sua estrutura geralmente se parece com isso:

   ```text
   git clone https://github.com/ < nome do usuário > /data-dashboard.git
   ```

## Complemento

Na Laboratoria \(e especialmente a TMS\) somos viciadas à representação gráfica dos dados, como mostrado no desenho, que seria ideal para exibir os dados processados num gráfico como o design proposto ou alternativa.

> Observação: no estágio de design da experiência com o produto, percebemos que o [Google Charts](https://developers.google.com/chart/interactive/docs/quick_start) poderia ser uma opção para desenvolver esses gráficos, mas não é o único que pode ser usado😃.

Além disso, a proatividade \(sempre das TMs 😂\) torna o seguinte requisito adicional muito útil:

> Tenha um botão que indique que uma aluna saiu do Bootcamp e altere os totais afetados por essa alteração.

