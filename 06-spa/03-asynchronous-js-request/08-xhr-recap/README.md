# Revisão XHR 

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Revisar o que foi aprendido sobre XHR.

## Como usamos XHR

Há uma série de passos que devemos seguir para enviar uma requisição HTTP de forma assíncrona com JavaScript.

### Para enviar una requisição

- Criamos um objeto XHR com a função do construtor XMLHttpRequest.

- Utilizamos o método `.open()` e configuramos o método HTTP e a UTL do recurso que vamos buscar.

- Estabelecemos a propriedade `.onload` ao nosso objeto e a ela atribuímos uma função que será executada se houver sucesso na pesquisa.

- Estabelecer a propriedade `.onerror` a nosso objeto e a esta atribuímos uma função que será executada se ocorrer um erro.

- Usamos o método `.send()` para que envie a requisição.

### Para usar a resposta

- Usamos a propriedade `.responseText`, que contém o texto da resposta da requisição assíncrona.

- Podemos usá-la como nos é retornada ou no caso de ser retornada como um JSON podemos convertê-la em Objeto JavaScript com `JSON.parse()`

## O que vem agora?

Provavelmente você está se perguntando se realmente é necessário escrever todos esses passos para conseguir nossas solicitações assíncronas. A resposta é **sim** mas não é necessário escrever todas essas linhas de código. Se fizermos uso de alguma biblioteca, como jQuery, ela pode fazer a requisição por nós. Já sabemos que, quando utilizamos uma biblioteca, usamos menos código e podemos ser um pouco mais eficientes.
