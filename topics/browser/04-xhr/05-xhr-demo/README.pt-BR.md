# Projeto Demo XHR

- Tipo: `leitura`
- Formato: `individual`
- Duração: `120min`

***

## Objetivos de Aprendizagem

- Usar XHR para construir uma aplicação.

## Por onde começamos?

Primeiro e mais importante é saber o que queremos obter.

Para este exercício guiado queremos fazer uma requisição na página do NY Times e
mostrar suas notícias.

### Mãos no teclado

1. Crie uma conta de desenvolvedor [aqui](https://developer.nytimes.com/) Será
   enviada uma chave de acesso que usaremos nas requisições.

2. Crie um projeto com seus arquivos HTML, CSS e JS (Nosso HTML tem uma
   estrutura simples, mas você pode dar-lhe o estilo que preferir).

   ![index-inicial](https://user-images.githubusercontent.com/110297/41572825-5c3288ce-733f-11e8-86aa-c04d17ad2ad2.png)

   Assim é como você vê no navegador:

   ![pantalla-inicial](https://user-images.githubusercontent.com/110297/41572837-71a99922-733f-11e8-93a9-0819ca2998a8.png)

3. Em nosso arquivo app.js colocamos os elementos que usaremos e criamos um let
   sem atribuí-lo por enquanto.

   ![traemos-elementos](https://user-images.githubusercontent.com/110297/41572849-8319f602-733f-11e8-81a5-e5d66a65e26e.png)

4. No nosso formulário adicionamos o evento `submit` e as instruções a serem
   executadas.

   ![form-addevent](https://user-images.githubusercontent.com/110297/41572863-9229576e-733f-11e8-9d8b-66d0f8ace7bc.png)

5. Como você já percebeu, está invocando a função `getNews()` e é nesta função
   que criaremos as requisições.

   ![getnews](https://user-images.githubusercontent.com/110297/41572879-a16ae3c8-733f-11e8-85f6-b9a44caba985.png)

   * Criamos nosso objeto _(linha 14)_.

   * Usamos o método `.open()` e aqui é onde devemos colocar a chave que chegou
    no nosso e-mail, **substituindo** < SUA CHAVE> por sua chave _(linha 15)_.

   * As propriedades `.onload` e `.onerror` têm suas funções correspondentes
    atribuídas.

   * Enviamos a requisição com o método `.send()`.

6. A função `handleError()` ficará assim:

   ![handle-error](https://user-images.githubusercontent.com/110297/41572899-b6f9e98c-733f-11e8-9879-27588c37898c.png)

7. Comecemos a trabalhar com a função `addNews()`.

   * Primeiro podemos fazer um console.log de `this.responseText` para saber o
     que será retornado nesta resposta (um JSON).

   * Após vermos que tipo de informação nos retornou, podemos proceder
     armazenando-o em uma constante e e fazer novamente um console.log para
     entender melhor a estrutura de dados.

     ![add-news1](https://user-images.githubusercontent.com/110297/41572917-cd4a8fde-733f-11e8-8461-d26417c1b42c.png)

     ![consola-data](https://user-images.githubusercontent.com/110297/41572941-e442637e-733f-11e8-9c98-3df461487aa0.png)

8. Observando em detalhe o que é retornado no console vemos que esse objeto
   possui a propriedade `response`.

   ![add-news2](https://user-images.githubusercontent.com/110297/41572958-f386d82e-733f-11e8-9c68-9c52e0dc439d.png)

   ![consola-data2](https://user-images.githubusercontent.com/110297/41572975-0245f002-7340-11e8-9407-530a13f0ce2e.png)

9. A partir deste ponto já podemos brincar e investigar este JSON que temos no
   console e portanto podemos fazer uso de suas propriedades.

10. Criamos um `li`,  adicionamos uma classe que tenha estilos, adicionamos o
    texto que obtivemos do JSON e o anexamos no `ul`.

    ![add-news3](https://user-images.githubusercontent.com/110297/41572984-10d3e732-7340-11e8-8928-756abfb74a18.png)

11. Após fazer tudo isso, o navegador deveria aparecer assim:

    ![pantalla-final](https://user-images.githubusercontent.com/110297/41572997-20eef22e-7340-11e8-830b-8636312f1ad4.png)

> Lembre que neste exemplo nosso _html_ e o _li_ que criamos possuem estilos.
> Assim, não se preocupe se estiverem diferentes. O importante é que mostre na
> tela o elemento com os valores.
