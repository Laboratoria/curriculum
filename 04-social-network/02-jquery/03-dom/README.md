# DOM

- Tipo: `leitura`
- Formato: `individual`
- Duração: `60min`

***

## Objetivos de aprendizagem

- Aprender como podemos manipular o DOM por meio do jQuery

### Manipulação do DOM

jQuery nos proporciona muitos métodos para manipular elementos HTML. Os mais simples, mas mais úteis são:

- `.text()`
- `.html()`
- `.val()`

Os equivalentes em JavaScript são:

- `.textContent`
- `.innerHTML`
- `.value`

A diferença é que em jQuery são funções e não propriedades.

![Exemplo-text-html-val](https://raw.githubusercontent.com/Laboratoria/curricula-js/30b2d37a0714ed52d2b1ce924951bf61f96916ef/04-social-network/02-jquery/03-dom/text-html-val.png)

> Já sabemos que o HTML não deve conter nosso script aí mesmo, mas esta imagem é só para exemplificar o que mencionamos acima.

jQuery possui vários métodos para adicionar, eliminar ou modificar elementos do DOM facilmente.

Vamos comprender um a um com seu exemplo.

| Método | Descrição | Exemplo |
| ------ | ----------- | ------- |
| `.append()` | Insere conteúdo **ao final** do elemento de destino especificado no seletor. | `$('selector').append(conteudo);`
| `.prepend()` | Insere conteúdo **no início** do elemento especificado. | `$('selector').prepend('conteudo');`
| `.before()` | Insere conteúdo (elementos novos ou existentes no DOM) **antes** do elemento de destino especificado no seletor. | `$('selector').before();`
| `.after()` | Insere conteúdo (elementos novos ou existentes no DOM) **depois** do elemento de destino que especifica com o seletor. | `$('selector').after();`
| `.empty()` | Elimina os filhos do elemento selecionado. | `$('selector').empty();`
| `.remove()` | Remove os elementos selecionados especificados pelo seletor. | `$('selector').remove();`
| `.replaceAll()` | Substitue os elementos selecionados com novos elementos HTML. | `$('contenido').replaceAll(selector);`
| `.wrap()` | O método **envolve** o elemento HTML especificado ao redor de cada elemento selecionado. | `$('p').wrap(' < div></ div>');`

### Navegando pelo DOM

Para navegar por meio do DOM, jQuery também nos oferece vários métodos maravilhosos:

| Método | Descrição | Exemplo |
| ------ | ----------- | ------- |
| `.children()` | Devolve um grupo de elementos que contém **todos os filhos** imediatos únicos de cada grupos de elementos previamente selecionados. | `$('selector').children();`
| `.parent()` | Devolve o pai direto de um elemento. Se a seleção é de um grupo de elemento, obtém um grupo de seus pais diretos únicos. | `$('selector').parent();`
| `.parents()` | Obtém os elementos superiores filtrados pelo seletor. | `$('selector').parents(selector);`
| `.find()` | Retorna uma nova seleção que contenha os elementos descendentes da seleção prévia que satisfazem a condição dada. | `$('selector').find(seletor para encontrar);`
| `.each()` | Itera sobre cada elemento especificado (utilizando um seletor) e executa a função de devolução de chamada para cada elemento. | `$('selector').each(function);`
| `.first()` | Retorna o **primeiro** elemento no conjunto dos elementos coincidentes. | `$('selector').first();`
| `.next()` | Retorna o irmão **imediato** do elemento no conjunto dos elementos coincidentes. | `$('selector').next();`
| `.prev()` | Retorna o irmão **anterior** do elemento no conjunto dos elementos coincidentes. | `$('selector').prev();`
| `.siblings()` | Devolve **todos** os irmãos do elemento especificado. | `$('selector').siblings();`

> **Nota:** Os métodos `.parents()` e `.parent()` são semelhantes, exceto que o último só desloca um nível na árvore DOM.

> Além disso, `$('html').parent()` retorna um conjunto que contém o documento, enquanto que `$('html').parents()` devolve um conjunto vazio.

### Isto é muita informação

Sim, pode parecer complicado, mas lembremos que não somos um USB para armazenar toda a informação, **somos desenvolvedoras** que sabemos onde procurar quando precisamos saber algo específico.

Também é importante lembrar que a lista completa de métodos pode ser encontrada na [documentação oficial de jQuery](https://api.jquery.com/) na seção de _manipulation_ y _traversing_.
