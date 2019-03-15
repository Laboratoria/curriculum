# Projeto Demo XHR

- Tipo: `leitura`
- Formato: `individual`
- Duração: `120min`

***

## Objetivos de Aprendizagem

- Usar XHR para construir uma aplicação.

## Por onde começamos?

Primeiro e mais importante é saber o que queremos obter.

Para este exercício guiado queremos fazer uma requisição na página do NY Times e mostrar suas notícias.

### Mãos no teclado

1. Crie uma conta de desenvolvedor aqui https://developer.nytimes.com/
  Será enviada uma chave de acesso que usaremos nas requisições.

2. Crie um projeto com seus arquivos HTML, CSS e JS (Nosso HTML tem uma estrutura simples, mas você pode dar-lhe o estilo que preferir).

  ![index](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/index-inicial.png)  

  Assim é como você vê no navegador:

  ![tela](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/pantalla-inicial.png)

3. Em nosso arquivo app.js colocamos os elementos que usaremos e criamos um let sem atribuí-lo por enquanto.

  ![elementos](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/traemos-elementos.png)

4. No nosso formulário adicionamos o evento `submit` e as instruções a serem executadas.

  ![form](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/form-addEvent.png)

5. Como você já percebeu, está invocando a função `getNews()` e é nesta função que criaremos as requisições.

  ![getnews](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/getnews.png)

  - Criamos nosso objeto _(linha 14)_.

  - Usamos o método `.open()` e aqui é onde devemos colocar a chave que chegou no nosso e-mail, **substituindo* < SUA CHAVE> por sua chave _(linha 15)_.

  - As propriedades `.onload` e `.onerror` têm suas funções correspondentes atribuídas.

  - Enviamos a requisição com o método `.send()`.

6. A função `handleError()` ficará assim:

  ![handleError](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/handle-error.png)

7. Comecemos a trabalhar com a função `addNews()`.

  - Primeiro podemos fazer um console.log de `this.responseText` para saber o que será retornado nesta resposta (um JSON).

  - Após vermos que tipo de informação nos retornou, podemos proceder armazenando-o em uma constante e e fazer novamente um console.log para entender melhor a estrutura de dados.

    ![addNews](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/add-news1.png)

    ![consola-data](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/consola-data.png)

8. Observando em detalhe o que é retornado no console vemos que esse objeto possui a propriedade `response`.

  ![addNews](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/add-news2.png)

  ![consola-data](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/consola-data2.png)

9. A partir deste ponto já podemos brincar e investigar este JSON que temos no console e portanto podemos fazer uso de suas propriedades.

10. Criamos um `li`,  adicionamos uma classe que tenha estilos, adicionamos o texto que obtivemos do JSON e o anexamos no `ul`.

  ![addNews](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/add-news3.png)

11. Após fazer tudo isso, o navegador deveria aparecer assim:

  ![pantalla](https://raw.githubusercontent.com/AnaSalazar/curricula-js/ivandevp-06-spa/06-spa/02-asynchronous-js-request/05-xhr-demo/imagenes/pantalla-final.png)

> Lembre que neste exemplo nosso _html_ e o _li_ que criamos possuem estilos. Assim, não se preocupe se estiverem diferentes. O importante é que mostre na tela o elemento com os valores. 