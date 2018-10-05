# Abertura

* Tipo: `leitura`
* Formato: `individual`
* Duração: `5min`

***

## Por que aprender isto?

Até agora concentramos nossos esforços na implementação de componentes como funções, o que no mundo do `React` normalmente chamamos de _stateless components_. Mas a esta altura você provavelmente terá se dado conta de que muito dos exemplos do `React` na web mostram a implementação de componentes como classes (utilizando a _keyword_ `class`).

O motivo pelo qual começamos com componentes _stateless_ é porque sua implementação é mais simples e demonstra a funcionalidade e padrões comuns com muito menos _boilerplate_. De fato, no mundo real normalmente tratamos de evitar a implementação com classe a não ser que necessitemos de _features_ (funcionalidades) que as funções não nos oferecem. Em particular:

* Estado interno;
* _Life-cycle hooks_;
* Refs.

Nesta unidade veremos como usar classes para acessar estas _features_ nos casos em que forem necessárias.

## Guia de perguntas e conceitos-chave

Quando começamos a estudar um tema novo, é útil termos uma ideia dos conceitos mais importantes que vamos aprender e dos temas centrais aos quais devemos prestar atenção especial.

A seguir apresentamos uma série de perguntas que você deve ser capaz de responder ao terminar esta unidade. Use estas perguntas como guia para orientar seu esforço de aprendizagem. Retorne a elas constantemente a medida que avança para validar que está indo na direção correta. Que este guia sirva como um "checklist" que você vai riscando conforme avança.

* Como implementar um componente como classe (`class`)?
* Diferenças entre o estado global ou externo e estado interno.
* Qual é o _ciclo de vida_ de um componente?
* Como _interceptar_ eventos do ciclo de vida para executar código específico?
* O que é e como funciona a propriedade especial `ref` nos nós renderizados por um componente _statefull_?
* Quando usar referências (`refs`)?