# DOM

- Tipo: `leitura`
- Formato: `individual`
- Duração: `60min`

***

## Objetivos de aprendizagem

- Aprender como podemos manipular o DOM por meio do jQuery

### Manipulação do DOM

jQuery nos proporciona muitos métodos para manipular elementos HTML. Os mais
simples, mas mais úteis são:

- `.text()`
- `.html()`
- `.val()`

Os equivalentes em JavaScript são:

- `.textContent`
- `.innerHTML`
- `.value`

A diferença é que em jQuery são funções e não propriedades.

![Exemplo-text-html-val](https://user-images.githubusercontent.com/25912510/54452672-b81f5780-4723-11e9-980e-cb74399e2863.png)

> Já sabemos que o HTML não deve conter nosso script aí mesmo, mas esta imagem é
> só para exemplificar o que mencionamos acima.

jQuery possui vários métodos para adicionar, eliminar ou modificar elementos do
DOM facilmente.

Vamos comprender um a um com seu exemplo.

![Métodos Jquery](https://imgur.com/cQe2gk3)

### Navegando pelo DOM

Para navegar por meio do DOM, jQuery também nos oferece vários métodos
maravilhosos:

![Manipulando DOM](https://imgur.com/grv7ZMA)

> **Nota:** Os métodos `.parents()` e `.parent()` são semelhantes, exceto que o
> último só desloca um nível na árvore DOM.
> Além disso, `$('html').parent()` retorna um conjunto que contém o documento,
> enquanto que `$('html').parents()` devolve um conjunto vazio.

### Isto é muita informação

Sim, pode parecer complicado, mas lembremos que não somos um USB para armazenar
toda a informação, **somos desenvolvedoras** que sabemos onde procurar quando
precisamos saber algo específico.

Também é importante lembrar que a lista completa de métodos pode ser encontrada
na [documentação oficial de jQuery](https://api.jquery.com/) na seção de
_manipulation_ y _traversing_.
