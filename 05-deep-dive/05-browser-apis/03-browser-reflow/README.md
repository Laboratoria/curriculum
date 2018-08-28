# Redesenho do navegador

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

Com a chegada das aplicações ricas da internet (RIA: *Rich Internet Applications*), nossas páginas exigem uma melhor experiência para o usuário, o que leva a uma maior manipulação do DOM com muitas instruções `javascript`, animações, etc. Mas isto ocasiona um problema que nem sempre é previso antes do desenvolvimento e rapidamente tudo começa a funcionar lentamente ou consumindo muita memória na máquina do cliente.

O problema com a web não é o `javascript` e sim o DOM:

1. Cada vez que modificamos o DOM resultando em um lindo efeito visual, o navegador realiza o que é chamado de "*re-flow*", redesenhar o DOM.

2. Cada navegador manipula a memória de sua maneira. O DOM é manipulado na memória que nem sempre é liberada conforme o esperado, ou nem sequer pensamos no que vai acontecer depois que nossa maravilhosa função JS é executada.

Para o caso 1 o que podemos fazer é tentar reduzir as animações e modificações. Isso soluciona o problema do *re-flow* mas não o fato de que agora temos menos animações e efeitos visuais . Se você tiver a possiblidade de utilizar HTML5, é uma boa opção a utilização do Canvas, que é muito menos pesado para realizar animações. Podemos desenhar e interagir com os eventos do cliente, como uso do mouse e teclado mas sem o trabalho que requer um *re-flow* já que não usamos o DOM.

No caso 2, jQuery pode ser de grande ajuda com suas funções `empty()` e `remove()`, as quais nos deixam livres os elementos do DOM por meio dos seletores.

Um exemplo comum é realizar chamadas ajax e atualizar uma lista de elemento. Façamos uma simulação:

```js
var quantidadeDeExecucoes = 0;

function AdicionarElementos(){
    quantidadeDeExecucoes++;

    $('#unDiv').html('');

    for(let i=0; i<100; i++) {
       $('#unDiv').append($('<p>').text('texto'));
    }

    //Se executou menos de 5 vezes, executo novamente
    if (quantidadeDeExecucoes <= 5){
        setTimeout(function() {
            AdicionarElementos();
        }, 2000);
    }
}

AdicionarElementos();
```

A função anterior simula um carregamento de parágrafos e um div a cada 2 segundos, 5 vezes. À primeira vista a função é chamada, limpa o `div` e adiciona 100 parágrafos novos. O problema é que não estamos liberando os objetos da memória e cada vez que a função é executada, mais 100 são adicionados.

```js
var quantidadeDeExecucoes = 0;

function AdicionarElementos(){
    quantidadeDeExecucoes++;

    //Limpo o DOM dos elementos anteriores
    $('#unDiv p').empty().remove();

    for(let i=0; i<100; i++) {
       $('#unDiv').append($('<p>').text('texto'));
    }

    //Se executou menos de 5 vezes, executo novamente
    if (quantidadeDeExecucoes <= 5){
        setTimeout(function() {
            AdicionarElementos();
        }, 2000);
    }
}

AdicionarElementos();
```

Desta maneira, antes de adicionar os 100 novos parágrafos, limpamos o DOM utilizando `remove()`` de jQuery e assim também da memória.

## É útil entender quando os *re-flow*'s são ativados

1. Adição, eliminação ou mudança de elementos visíveis do DOM.

A primeira é obvia: o uso de JavaScript para trocar o DOM provocará um *re-flow*.

2. Adição, eliminação ou mudança de estilos CSS.

Da mesma forma, aplicar diretamente estilos CSS ou mudar a classe pode alterar o desenho. Mudar a largura de um elemento pode afetar a todos os elementos do mesmo galho do DOM que o cercam.

3. Animações e transições CSS3.

Cada mudança da animação causará um *re-fow*.

4. Uso de `offsetWidth` e `offsetHeight`.

Curiosamente, ler as propriedades `offsetWidth` e `offsetHeight` de um elemento pode disparar um *re-flow* inicial para calcular os valores.

5. Ações do usuário

Finalmente, o usuário pode ativar os *re-flow* ativando um efeito `hover`, digitando texto em um campo, trocando o tamanho da janela, mudando o tamanhos da fonte, mudando folhas de estilos ou fontes.

O fluxo de processamento do *re-flow* será variado. Alguns navegadores são melhores que outros em certas operações. Alguns elementos geram mais *re-flow* que outros. Felizmente, existem vários conselhos gerais que você pode utilizar para melhorar o desempenho, como o caso que vimos anteriormente.