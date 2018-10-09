# O Produto

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

## Sobre o cliente

Somos **Burguer Queen**, uma rede de *fast food* 24h.

## Requisitos do negócio

Nossa proposta de serviço 24h tem sido muito bem recebida e para expandirmos precisamos de um sistema que nos ajude a registrar os pedidos dos clientes.

Teremos 2 cardápios: um para o café da manhã, que é bem simples:

| Item                      |Preço |
|---------------------------|------|
| Café americano            |    5 |
| Café com leite            |    7 |
| Misto                     |   10 |
| Suco natural              |    7 |

E um cardápio para o resto do dia:

<table width="100%">
  <tbody>
    <tr>
      <td colspan="2" rowspan="1">Hambúrgueres</td>
      <td>Acompanhamentos (S/.5)</td>
      <td colspan="3" rowspan="1">Bebidas</td>
    </tr>
    <tr>
      <td>Simples</td>
      <td>10</td>
      <td>Batata fritas</td>
      <td></td>
      <td>500ml</td>
      <td>750ml</td>
    </tr>
    <tr>
      <td>Duplo</td>
      <td>15</td>
      <td>*Onion Rings*</td>
      <td>Água</td>
      <td>5</td>
      <td>8</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>Refrigerante</td>
      <td>7</td>
      <td>10</td>
    </tr>
  </tbody>
</table>

Os clientes tem opção de escolher hambúrgueres bovinos, de frango ou vegetariano.
**E por S/. 1 pode adicionar queijo ou ovo.**

Nossos clientes são muito indecisos e é comum que mudem muitas vezes o pedidos antes de finalizá-lo.

## Projeto

Este projeto nos agrada porque nossos pedidos serão registrados por um tablet e não queremos um *app* nativo. O estado atual do pedido deve ser sempre visível para poder confirmar com o cliente seu pedido.

[missing image]

## Extras

Uma vez que tenhamos o sistema básico implementado, gostaríamos de explorar novas possibilidades e estamos abertos à qualquer sugestão que tenham. Algumas das ideias que nossos clientes sugeriram são: adicionar combos nos menus, cupons de desconto, desconto por pagamento em dinheiro, programa de fidelidade, etc.

***

## Requisitos técnicos

Sua "Single page app" deve respeitar os seguintes requisitos:

* Ser desenvolvida inteiramente com `ES6` e empacotada de maneira automatizada com `babel` ou `webpack`.
* Utilizar `React` e `Redux`.
* Conter pelo menos 10 componentes que especifiquem todas as suas `props`, 3 `reducers` não atômicos (JSON) e 3 `actions`.
* Conter scripts `run`, `build` e `deploy`, que se encarreguem de executar, empacotar e publicar a aplicação, respectivamente.
* Design *responsive* e *mobile*. O cliente usará o sistemas em um **navegador**, mas em **tablets**.
* Publicar nas Github pages.
* Ter gerenciado e documentado todo o processo de criação da aplicação no GitHub.
* No dia do demo, a aplicação deverá estar publicada em uma URL acessível universalmente.
* Não é necessário implementar rotas.
* Não é necessário implementar persistência.
* Não é necessário implementar conexões remotas.