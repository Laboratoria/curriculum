# _Code Review_

- Tipo: `leitura`
- Formato: `individual`
- Duração: `15min`

***

## Objetivos de Aprendizagem

- Entender porque _code reviews_ são importantes.
_ Entender o que esperar quando receber _code reviews_.

***

Mesmo que programar nem sempre pareça algo colaborativo, criar código excelente requer muita comunicação. Discutir e negociar são nevrálgicos quando equipes decidem quais mudanças commitar na base de código. Enquanto esse vai e vem introduz trabalho extra e sobrecarga no processo de desenvolvimento, a qualidade do código melhora muito.

Revisões de código (_code reviews_) são uma das formas primárias de colaboração entre desenvolvedores. Tipicamente um programador trabalha sozinho em alguma alteração no código, e então pede para um ou mais colegas de equipe fazerem uma revisão do código antes de submeter as alterações. O autor e os revisores devem concordar com todas as alterações antes do código ser submetido. Nesta lição, exploraremos o conteúdo que um revisor deve olhar quando fizer uma revisão de código.

Esses conceitos são coisas que você provavelmente verá quando receber revisões de código aqui na Laboratoria e em seus futuros empregos. É importante lembrar que ao receber (e fazer) revisão de código que o objetivo não é criticar o autor. O objetivo é produzir o melhor código possível. Também lembre que revisões de código são uma ótima oportunidade para aprender. Críticas que você receber podem frequentemente serem aplicadas nos seus hábitos de programação só alterando um código específico.

Vamos ver então algumas coisas específicas que revisores de código avaliam.

## Erros e Melhorias

A última coisa que qualquer um quer é submeter código quebrado. Seus revisores provavelmente começarão garantindo que seu código faz o que ele diz que faz. Eles podem pedir um demo ou executar o código eles mesmos para ver se encontram alguma falha. Às vezes podemos deixar passar coisas sutis que nossos revisores identificarão.

Adicionalmente seu revisor analisará o projeto do seu código. Eles querem ver que além de fazer o trabalho corretamente, ele faz da maneira mais eficiente e inteligente possível. Considere o código a seguir que imprime números pares entre 0 e 20:

```javascript
for (var i = 0; i <= 20; i++) {
  if ((i % 2) === 0) {
    console.log(i);
  }
}
```

Embora esse código esteja correto, um revisor pode fazer a seguinte sugestão:

```javascript
for (i = 0; i <= 20; i = i + 2) {
  console.log(i);
}
```

Note como a sugestão do revisor é muito mais eficiente uma vez que faz menos cálculos. O código inicial não estava errado, a sugestão é apenas oferecer uma alternativa melhorada.

Para o trabalho de _frontend_, revisões de código podem servir como _UI review_. Revisores podem sugerir melhorias nos projeto de UI. Tenha em mente que revisões de código são uma conversa. Tudo bem ter uma discussão se você tiver dúvidas ou preocupações sobre as sugestões do seu revisor. Mas lembre-se de manter a mente aberta quando receber críticas.

## Legibilidade

Uma vez que programar é um processo colaborativo, é importante que todos nós sejamos capazes de entender o código do outro. Revisores de código também avaliarão o quão fácil é entender seu código. Algumas coisas que eles estarão procurando:

- **Estilo** - O seu código atende ao código de estilo?
- **Nomeclatura** - Os nomes das suas variáveis e funções são claros e informativos?
- **Comentários** - Você adicionou comentários quando necessário para explicar seu código?
- **Documentação** - Você atualizou alguma documentação relevante para essa base de código?

Considere o exemplo a seguir:

```javascript
var classrooms = getClassrooms();
for (var i = 0; i < classrooms.length; i++) {
  classrooms[i].push({
    'name': 'Laura',
    'grade': 99
  });
}
```

Um revisor pode achar esse código meio nebuloso e sugerir adicionar um comentário, de forma que você pode fazer uma modificação como:
```javascript
var classrooms = getClassrooms();
// Itera sobre todas as salas de aula.
for (var i = 0; i < classrooms.length; i++) {
  // Adicionar um perfil de estudante como exemplo a cada sala de aula.
  classrooms[i].push({
    'name': 'Laura',
    'grade': 99
  });
}
```

Mas algumas sugestões de legibilidade podem vir em forma de mudança de código. Talvez um revisor faça uma sugestão de mudança do código para:

```javascript
var classrooms = getClassroomsOfStudents();
var sampleStudentProfile = {
  'name': 'Laura',
  'grade': 99
};
for (students in classrooms) {
  students.push(sampleStudentProfile);
}
```

Pequenas mudanças de código como essas podem não afetar o comportamento ou eficiência do código, mas deixam muito mais fácil para que futuros programadores entendam rapidamente o que o código está fazendo.

Lembre-se de que não existe uma resposta "certa" quando falamos de revisão de código. Revisões são uma conversa com muitas soluções em potencial. Ao mesmo tempo que existe muita ciência para criar um código bom, também há arte.

## Cobertura do Teste

Revisores de código estarão olhando também os seus testes. Aqui temos algumas coisas que eles considerarão quando revisarem os testes:

- **Qualidade do teste unitário** - Cada teste isola e verifica um componente específico do código? Cada teste verifica de fato o que ele diz testar? Você atualizou todos os testes que podem ser afetados por suas alterações?
- **Legibilidade** - Os nomes dos seus testes estão claros e precisos? O objetivo de cada teste é fácil de entender?
- **Alta cobertura de teste** - Você escreveu testes para o máximo de código possível?
- **Passing** - Os seus testes passam? Código com falhas nos testes não devem ser commitados.

## TODOs

Às vezes seu revisor de código pode perceber um problema no código que não precisa ser resolvido imediatamente mas não deve ser esquecido. Nesse caso, revisores podem sugerir adicionar um "_to-do_". _TODOs_ são comentários deixados no código para lembrar de coisas que devem ser implementadas em algum momento, de forma que não ficam esquecidos. Podem ser tarefas especificamente para você fazer, especificamente para o revisor fazer, ou normalmente para alguém da equipe fazer.

Imagine que o código de Laura utiliza uma biblioteca chamada `mathLibrary` que foi recentemente atualizada. Ela pode deixar para ela um _TODO_ como lembrete para em algum momento migrar o código utilizando a biblioteca atualizada. 

```javascript
// TODO(laura): Update mathLibrary to newest version.
var calculation = mathLibrary.calculate(a, b, c);
```

Normalmente _TODOs_ são reservados para quando há prazos ou o escopo da mudança sugerida é muito grande para a mudança de código sendo revisada.

## Encerramento

Revisões de código podem ser intimidadoras no início mas elas se tornam fáceis com o tempo. Tenha em mente que toda revisão de código é uma oportunidade para você crescer enquanto programadora e produzir o melhor código possível.