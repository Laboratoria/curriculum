# Bubbling vs Capturing

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

Quando um evento é disparado, este passa por 3 fases, na seguinte ordem: *Capture phase*, *Target phase* e *Bubbling phase*. O fato de passar pelas 3 fases é chamado *event flow*.

Quando um evento é disparado em um elemento que possui elementos pais, os navegadores modernos executam duas fases diferentes, a fase de `capturing` e a fase de `bubbling`.

Na fase de captura o navegador comprova se o antepassado mais externo do elemento `<html>` tem um manipulador de eventos `onclick` registrando nele na fase de `capturing`, e o executa se sim. Logo passa para o elemento seguinte dentro do `<html>` e faz o mesmo, depois no seguinte e assim sucessivamente até que alcança o elemento no qual foi feito o `click`.

Na fase de `bubbling` ocorre exatamente o contrário. O navegador testa se o elemento no qual foi feito o `click` possui um manipulador de eventos `onclick` registrado nele na fase de `bubbling` e o executa se houver. Logo se move para o elemento seguinte do antepassado e faz o mesmo, depois o seguinte e assim sucessivamente até alcançar o elemento `<html>`

No *event flow*, cada evento disparado no DOM começa no contexto global (ou seja, `window`), passa pelo `nó raiz` do `document` e segue o caminho pelos nós filhos (*Capturing phase*) para chegar ao elemento que dispara o evento (*Target phase*). Na `target` phase, o evento é disparado. Logo, começa a `bubbling phase` seguindo o mesmo caminho da `capturing phase`, mas em sentido contrário, até chegar ao contexto global (`window`).

Quando registramos um `listener`, é possível definir que seja executado na `capturing phase` ou na `bubbling phase`. A ordem na qual um `listener` é executado depende da fase a qual está adicionado.
```js
window.addEventListener('click', function() {
  console.log('Bubbling click event');
}, false);// Este listener executará em segundo
window.addEventListener('click', function() {
  console.log('Capturing click event');
}, true);// Este listener executará primeiro
```

Para definir em qual fase será executado um `listener` é passado um terceiro parâmetro ao `addEventListener`, o qual deve conter um valor `booleano`: se o parâmetro é `true`, o `listener` será executado na `capturing phase` e se é `falso`, o `listener` será executado na `bubbling phase`. Por padrão, o valor desse parâmetro é `false`. Vale lembrar que também deve ser passado para o `removeEventListener` se existem dois `listeners`, um para cada fase, que apontem para o mesmo evento e elemento.
