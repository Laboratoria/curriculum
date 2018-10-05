# Abertura

* Tipo: `leitura`
* Formato: `individual`
* Duração: `5min`

***

## Por que aprender isto?

`React` é uma tecnologia elegante para compor interfaces, caracterizada por sua simplicidade e seu enfoque declarativo e funcional. `React` fornece ferramentas para construir interfaces utilizando componentes, e os componentes incluem funcionalidades (ou convenções) básicas para manipular o _estado_ interno dos componentes (implementando componentes como classes, que veremos mais adiante), assim como um mecanismo para propagar o estado por meio de `props`. Para casos de manipulação mais simples, isso muitas vezes é suficiente, mas no mundo real normalmente usamos outro padrão ("_UI Manager_" + "_State Manager_") para manipular o estado no nível de toda a aplicação e separar a manipulação do estado dos próprios componentes da interface.

Dentro deste contexto, no mundo real é muito comum encontrar aplicações que combinam `React` com `Redux`: um enfoque parecido (simplicidade, declarativo, funcional, ...) tanto em UI como em manipulação de estado.

Como desenvolvedora _Front End_, entender os conceitos de _estado_ e _manipulação de estado_ são fundamentais para poder construir interfaces dinâmicas e interativas.

Nesta unidade exploraremos o que é `Redux` e como usá-lo com `React`.

## Guia de perguntas e conceitos chave

Quando começamos a estudar um tema novo, é útil termos uma ideia dos conceitos mais importantes que vamos aprender e dos temas centrais aos quais devemos prestar atenção especial.

A seguir apresentamos uma série de perguntas que você deve ser capaz de responder ao terminar esta unidade. Use estas perguntas como guia para orientar seu esforço de aprendizagem. Retorne a elas constantemente a medida que avança para validar que está indo na direção correta. Que este guia sirva como um "checklist" que você vai riscando conforme avança.

* O que é `Redux`?
* O que é uma ação?
* O que é um redutor (_reducer_)?
* Os princípios de `Redux`:
  - _Single source of truth_.
  - _State is read-only_.
  - Mudanças de estado por meio de funções puras.
* Como integrar `Redux` e `React`?
* Como conectar componentes para acessar o *store global*?
* Domo definir e _disparar_ ações a partir de nossos componentes?
* Como implementar redutores para modificar o estado como resposta às ações?
