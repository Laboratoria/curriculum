# Testes no navegador

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

Até este ponto estivemos executando nossos testes com Node.js, mas como
_front-end developers_ também é interessante executar nossos testes em um
ambiente de navegador, com um `window` e com um `DOM` de verdade. Isto nos
permitirá automatizar testes assim como fazer _cross-browser testing_ e validar
nosso código em navegadores diferentes.

Imagine que você tenha uma página web com uma lista ordenada (`ul`), algo assim:

```html
<ul>
  <li>Betty Snyder Holberton</li>
  <li>Jean Jennings Bartik</li>
  <li>Kathleen McNulty Mauchly Antonelli</li>
  <li>Marlyn Wescoff Meltzer</li>
  <li>Ruth Lichterman Teitelbaum</li>
  <li>Frances Bilas Spence</li>
</ul>
```

E os usuários estão solicitando uma _feature_ para que os textos que aparecem na
lista saiam com todas as vogais em maiúscula. É um pedido meio estranho, mas a
própria vida é muito estranha...

Para implementar esta _feature_ você combina com sua equipe que precisam de uma
função que receba uma string e retorna outra string na qual todas as vogais
tenham sido trocadas de minúsculas para maiúsculas. Precisamos de uma função com
a seguinte assinatura (_signature_):

```js
string makeVowelsUpperCase(string)
```

Se esta função existisse, sabemos que poderíamos selecionar os nós que queremos
(os `<li>`) e trocar seu conteúdo com o retorno de `makeVowelsUpperCase()`
passado o conteúdo original como argumento.

```js
[...document.querySelectorAll('li')]
  .forEach(el => el.innerHTML = makeVowelsUpperCase(el.innerHTML));
```

Antes de atribuir a alguém a implementação desta função, decidimos escrever
alguns testes para que sirvam de guia e descrevam o comportamento esperado. Em
uma nova pasta, crie um arquivo com o nome `makeVowelsUpperCase.spec.js` e
adicione os testes a seguir:

```js
describe('makeVowelsUpperCase()', () => {

  it('Deveria converter "olá mundo" em "OlÁ mUndO"', () => {
    assert.equal(makeVowelsUpperCase('olá mundo'), 'OlÁ mUndO');
  });

  it('Deveria converter "Betty Snyder Holberton" em "BEtty SnydEr HOlbErtOn"', () => {
    assert.equal(
      makeVowelsUpperCase('Betty Snyder Holberton'),
      'BEtty SnydEr HOlbErtOn'
    );
  });

});
```

Como ponto de partida para a implementação, por enquanto simplesmente criamos um
arquivo com o nome `makeVowelsUpperCase.js` na mesma pasta onde você criou o
arquivo anterior com os testes. Neste arquivo por enquanto só vamos declarar uma
função que recebe um argumento e retorna o argumento tal como o recebeu.

```js
const makeVowelsUpperCase = function (string) {
  return string;
};
```

Para poder executar os testes no navegador comecemos criando um arquivo HTML com
o nome `test.html`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.css" />
  </head>
  <body>
    <div id="mocha"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min.js"></script>
    <script src="./makeVowelsUpperCase.js"></script>
    <script>
      const { assert } = chai;
      mocha.setup('bdd');
    </script>
    <script src="./makeVowelsUpperCase.spec.js"></script>
    <script>mocha.run();</script>
  </body>
</html>
```

Neste arquivo HTML faça o seguinte:

1. Adicione a folha de estilo de `mocha` a partir do CDN de
   [cdnjs](https://cdnjs.com/):

   ```html
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.css"
   />
   ```

2. Adicione um `<div>` com `id="mocha"` para que o Mocha escreva os resultados:

   ```html
   <div id="mocha"></div>
   ```

3. Adicione `mocha` e `chai` a partir do CDN de [cdnjs](https://cdnjs.com/):

   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/4.1.0/mocha.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min.js"></script>
   ```

4. Incluímos o código que queremos testar (o arquivo `makeVowelsUpperCase.js`)
   que acabamos de criar:

   ```html
   <script src="./makeVowelsUpperCase.js"></script>
   ```

5. Criamos uma referência para o `chai.assert` na constante `assert` no ambiente
   global para podermos usar diretamente `assert` nos testes (ao invés de
   `chai.assert`):

   ```js
   const { assert } = chai;
   ```

6. Inicialize a interface BDD de `mocha`:

   ```js
   mocha.setup('bdd');
   ```

7. Incluímos todos os testes que queremos executar:

   ```html
   <script src="./makeVowelsUpperCase.spec.js"></script>
   ```

8. Finalmente executamos os testes:

   ```js
   mocha.run();
   ```

Já temos um ambiente para executar os estes no navegador. Abra o arquivo
`test.html` no seu navegador. Você deve ver algo assim:

![Output de Mocha no
navegador](https://user-images.githubusercontent.com/110297/34898926-a840563a-f7c3-11e7-8872-c3f3a1f5339d.png)

Isto nos mostra que nossos testes foram executados, mas a implementação atual de
`makeVowelsUpperCase` não passa nos testes já que não retorna os valores
esperados.

Já estamos prontas para atribuir-lhe o trabalho de implementar a função com uma
colega, a qual terá clara qual a intenção da função e seu comportamento
esperado. Os testes permitirão saber se a implementação se adequa aos
requerimentos.

Continuemos imaginando... digamos que alguns dias se passará e Pepita, uma
colega, envia-nos uma implementação de `makeVowelsUpperCase` para que revisemos.
Antes de sequer lermos o código, primeiro vamos executar os testes. Tenha
certeza de substituir o código no arquivo `makeVowelsUpperCase.js` com o enviado
por Pepita:

```js
const isVowel = function (char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }

  return false;
};

const makeVowelsUpperCase = function (string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      result += string[i].toUpperCase();
    } else {
      result += string[i];
    }
  }

  return result;
};
```

Se agora abrirmos outra vez o arquivo `test.html` veremos o seguinte:

![Output de Mocha no navegador com testes
aprovados](https://user-images.githubusercontent.com/110297/34899917-c8f6d402-f7c9-11e7-9e69-c00ed149d0e0.png)

Parece que o código de Pepita passa em todos os testes :tada:

***

Mas aqui não termina a história... mais uns dias se passaram, o código de Pepita
já está em produção e recebemos um chamado de um _bug_: as vogais com acento não
estão sendo trocadas por maiúsculas! Como temos testes para esta função, podemos
escrever rapidamente um novo teste para replicar e confirmar o problema
relatado, assim que adicionamos o seguinte teste em nosso arquivo
`makeVowelsUpperCase.spec.js`:

```js

it('Deveria converter vogais com acento', () => {
  assert.equal(makeVowelsUpperCase('como está?'), 'cOmO EstÁ?');
});
```

Se executarmos o testes podemos ver que de fato o novo teste não passa:

![imagem](https://user-images.githubusercontent.com/110297/34906409-37ba7ecc-f83b-11e7-9500-10b5d1b49842.png)

Na leitura seguinte veremos como consertar isso.
