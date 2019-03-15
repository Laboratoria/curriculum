# Comunicação Cliente Servidor

- Tipo: `leitura`
- Formato: `individual`
- Duração: `30min`

***

## Objetivos de Aprendizagem

- Entender o fluxo de _request_ e _response_ e o que significa assíncrono.

## Requisição e Resposta

Para entender isso, primeiro precisamos lembrar que existe um protocolo de comunicação que deixa claro de que maneira um cliente (navegador) solicita informações/dados de um servidor. Levando em conta isso vamos revisar com a imagem a seguir:

![Comunicação](http://www.solocodigoweb.com/wp-content/uploads/2017/06/clientserver.jpg)

Na imagem podemos ver como um cliente (emissor) faz uma solicitação HTTP (**HTTP Request**) para um servidor (receptor) e este último responde ao pedido (**HTTP Response**).

Esses _request_ e _response_ são transportados pela internet como intermediário.

Quando fazemos isso normalmente o fazemos de forma **síncrona**, ou seja, necessitamos que cada solicitação tenha sua resposta antes de enviar outra petição.

> Quando o navegador faz uma petição de forma síncrona ele precisa esperar a resposta antes de continuar com o carregamento de uma página.

Mas isso em algum momento já não vai ser tão eficiente ou funcional, de maneira que podemos fazê-lo de forma **assíncrona** utilizando **AJAX**, podendo fazer mais de uma "tarefa" por vez.

> Quando o navegador faz petições de forma assíncrona, elas podem ocorrer por trás sem bloquear o carregamento de uma página.

No vídeo a seguir os amigos geniais da UDACITY explicam de maneira visual o conteúdo anterior. Está em inglês mas já sabemos que isso não é impedimento para que entendamos o conceito :muscle:

[![Client-server communication](https://img.youtube.com/vi/nozbz6J3_4w/0.jpg)](https://youtu.be/nozbz6J3_4w)
