---
type: read
duration: 30min
---

# Revisão jQuery AJAX

## Objetivos de Aprendizagem

- Revisar o que foi aprendido sobre AJAX com jQuery.

## Conclusões

Nesta segunda parte da unidade, vimos como realizar uma requisição HTTP
assíncrona por meio de jQuery. As vantagens de usar uma biblioteca como esta é
que economizamos tempo e código para a configuração que faríamos nativamente por
meio do objeto `XMLHttpRequest`, além da configuração de compatibilidade entre
navegadores.

Em uma das leituras, mencionamos que é conveniente usar jQuery para esta
requisições assíncronas; isto porque esta biblioteca é dedicada a isto e nada
mais. A resposta é que atualmente é preferível utilizar micro-bibliotecas
(bibliotecas bem menores) dedicadas a um propósito específico, como manipular
requisições assíncronas. Além disso, HTML5 fornece uma nova API como
substituição a `XMLHttpRequest`, que faz a manipulação destas requisições.
Comece a brincar com elas! Você topa refatorar algum dos seus desafios com estas
novas ferramentas?

- **[Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)**:
  esta é a nova API que HTML5 fornece para executar requisições assíncronas e
  está baseada em `promises`.
- **[SuperAgent](https://github.com/visionmedia/superagent)**: é uma
  micro-biblioteca especializada em fazer requisições HTTP assíncronas.
- **[axios](https://github.com/axios/axios)**: é uma micro-biblioteca que,
  diferente da anterior, está baseada em promessas.

Estas não são as únicas ferramentas que existem para realizar requisições
assíncronas, mas sem dúvida são algumas das mais usadas hoje em dia. Você
perceberá que, ao usar uma, as outras são muito similares. Não perca a
oportunidade de testá-las para que você decida logo qual te chama mais a
atenção.
