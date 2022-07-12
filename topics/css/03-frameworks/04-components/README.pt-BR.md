# Componentes e funcionalidade

- Tipo: `leitura`
- Formato: `individual`
- Duração: `20min`

***

## Objetivos de Aprendizagem

- Conhecer e aprender a usar componentes de frameworks com jQuery.

## Componentes com jQuery

Nas leituras anteriores já vimos as maravilhosas vantagens que nos oferecem os
frameworks de CSS, mas ainda há mais. Os frameworks não só nos permitem projetar
e dar estilos mais rapidamente como também possuem componentes que já contam com
essa funcionalidade. Isso é possível por meio do uso de **jQuery**.

jQuery é uma biblioteca de javascript (que por enquanto não vamos nos esforçar a
entender 100%), que por meio de nosso framework nos dá a facilidade de adicionar
nossa funcionalidade com poucas linhas.

Para isso também é preciso criar um *link* no nosso projeto para o CDN de JQuery
ou para o caminho de onde estiver, se baixarmos JQuery no nosso projeto.

![Bootstrap](https://user-images.githubusercontent.com/25912510/54452405-1435ac00-4723-11e9-975c-5ca69ad33274.png)

Ao fazer o passo anterior podemos começar a fazer uso do componente que
necessitamos. Para este exemplo usaremos um **modal** e um **Carousel**. Antes
de tudo é necessário mencionar que os *modais* e os *carrosséis* podem ser
criados utilizando CSS e javascript. Desta vez faremos que a magia do nosso
melhor amigo venha nos ajudar (sim, o framework que você decidiu testar).

Como já vimos (e praticamos) só precisamos ir à página de nosso framework,
escolher o modal que nos faz mais feliz e copiar o código necessário. Para a
funcionalidade copiaremos em nosso arquivo app.js as linhas que precisamos.

No nosso arquivo html:

```html
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="exampleModalLabel">New message</h4>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="control-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="control-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
```

E em nosso arquivo app.js:

```javascript
$('#myModal').modal('show');
```

Pronto!!! Já podemos testar nosso modal.

Agora vamos ver o código para criar nosso Carousel.

``` html
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

```

E em nosso arquivo app.js:

```js

$('.carousel').carousel()

```

E já temos nosso carrossel.

### E se decidir usar outro framework

Não há o que temer, é só revisar a documentação do framework escolhido e
praticar muito. Os passos a seguir são muito parecidos e em alguns caso, os
mesmos.

Lembre-se:

- Investigar
- Testar
- Perguntar!!
