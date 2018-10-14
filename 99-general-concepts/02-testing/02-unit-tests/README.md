# Unit Testing

- Tipo: `leitura`
- Formato: `individual`
- Duração: `40min`

***

## Objetivos de Aprendizagem

- Entender como escrever testes unitários efetivos
- Entender os princípios por trás do _Test Driven Development_

***

## Introdução

Você já deve ter reparado que ao final de cada desafio de código você teve que executar testes no seu código para verificar que ele funciona da forma esperada. Esses são chamados de testes unitários. Cada teste garante de forma programática que seu programa funciona como o esperado comparando o resultado do seu código com os valores esperados a partir de entradas estáticas.

Por exemplo, considere uma função que soma dois números: `soma(a, b)`.

Para testar `soma(a, b)`, podemos selecionar quaiquer dois números e atribuir que o resultado esperado é igual a soma dos dois:


```javascript
Assert.deepEqual(soma(2, 3), 5);
```

Se o resultado for falso, significa que `soma(2, 3)` é igual a alguma outra coisa que não 5, nós saberemos que precisamos depurar para descobrir o problema!

## Validando credenciais

Para explorar mais profundamente testes unitários, vamos analisar o desafio `areValidCredentials`

> Escreva uma função chamada `areValidCredentials`.
>
> Informando um usuário e uma senha, `areValidCredentials` retorna `true` se o nome tem mais que 3 caracteres E a senha tem ao menos 8 caracteres de comprimento. Do contrário, retorna `false`.

Vamos olhar o teste unitário associado a este desafio:

```javascript
describe('areValidCredentials()', () => {
  it('deveria retornar true quando as credenciais são válidas', () => {
    const output = areValidCredentials('Kemal', 'testtesttest');
    Assert.deepEqual(output, true);
  });

  it('deveria retornar false quando o usuário é muito curto', () => {
    const output = areValidCredentials('K', 'mylongpassword');
    Assert.deepEqual(output, false);
  });

  it('deveria retornar false quando a senha é muito curta', () => {
    const output = areValidCredentials('Kemal', 'aah');
    Assert.deepEqual(output, false);
  });
});
```

Cada função aqui começa com a palavra 'it', que em inglês significa 'isso'. O 'it' de cada teste se refere a `areValidCredentials()` conforme foi declarado na função _wrapping_ `describe`:

`describe('areValidCredentials()', function() {...});`.

Você pode ver que cada teste unitário é uma função que lemos como uma frase. Por exemplo, esta função...

```js
it('deveria retornar false quando a senha é muito curta', () => {
  // ...
});
```

... indica esta declaração...

> `areValidCredentials` deve retornar false quando a senha é muito curta.

O conteúdo do teste unitário deveria verificar a declaração fornecendo uma entrada com uma senha curta e verificando se a função retorna `false`.

Cada teste unitário deveria testar exatamente e somente o que está declarado no teste. Quando nós isolamos e testamos componentes de nosso código em **unidades** distintas, nós sabemos exatamente onde olhar no código quando nossos testes começarem a falhar.

## Testando um novo requisito

Vamos imaginar que um novo requisito foi adicionado a `areValidCredentials`. **Senha também devem conter ao menos um número.** Antes de considerar a implementação, vamos atualizar os testes unitários para refletir esse novo requisito.

Uma vez que estamos adicionando um novo comportamento ao código e cada comportamento deveria ser testado de forma independente, precisaremos adicionar um novo teste unitário para o novo requisito. Nosso novo teste deveria isolar e verificar somente o requisito do número, então o usuário e a senha devem considerar os requisitos de comprimento já definidos.

```javascript
it('deveria retornar false quando a senha na tem número', () => {
  const output = areValidCredentials('Kemal', 'senha');
  Assert.deepEqual(output, false);
});
```

Agora consideramos nossos testes existentes. Eles vão passar? Eles ainda isolam e verificam os comportamentos que eles dizem testar?

Nosso caso de sucesso original `deveria retornar true para credenciais válidas`, vai falhar agora, uma vez que não contempla o novo requisito. Vamos adicionar um número à senha.

Nossos casos de falha existentes (usuário muito curto, senha muito curta) continuarão falhando - mas eles ainda testam de forma isolada o comportamento que devem testar? Sem saber como nosso novo requisito será implementado, não podemos ter certeza. Para garantir que eles isolam e verificam os comportamentos esperados, precisamos adicionar números às senha dos dois testes também.

Aqui estão nossos testes unitários atualizados:

```javascript
describe('areValidCredentials()', () => {
  it('deveria retornar true para credenciais válidas', () => {
    const output = areValidCredentials('Kemal', 'testtesttest1');
    Assert.deepEqual(output, true);
  });

  it('deveria retornar false quando o nome é muito curto', () => {
    const output = areValidCredentials('K', 'mylongpassword1');
    Assert.deepEqual(output, false);
  });

  it('deveria retornar false quando a senha é muito curta', () => {
    const output = areValidCredentials('Kemal', 'aah1');
    Assert.deepEqual(output, false);
  });

  it('deveria retornar false quando a senha não tem número', () => {
    const output = areValidCredentials('Kemal', 'senha');
    Assert.deepEqual(output, false);
  });
});
```

## _Test Driven Development_

Com nossos testes unitários atualizados, nós podemos implementar o novo requisito em `areValidCredentials` com plena confiança de que nossa solução funcionará quando todos os testes unitários passarem. O que nós fizemos (escrever os testes para verificar os requisitos antes da implementação) é chamado de **Test Driven Development**. Você já tem feito Test Driven Development nos seus desafios de código.

Imagine se nós tivéssemos implementado um novo requisito antes de revisar nossos testes. Nós teríamos lembrado de atualizar o comprimento dos caracteres nos testes unitários? Talvez sim, talvez não. Quanto mais complexo nosso código e os testes se tornam, mais coisas teremos que lembrar e mais coisas serão inevitavelmente esquecidas. Test Driven Development é uma estratégia para garantir que nossos testes continuem atualizados sempre.

## Cobertura de teste

**Cobertura de teste** é a extensão à qual nossos testes verificam nosso código. Um programa com comportamentos a, b, c e d e testes verificando a, b, c e d possui 100% de cobertura de teste. Um programa com os comportamentos a, b, c e d com testes verificando somente a e b possuem uma cobertura de teste de 50%. Quando escrevemos testes para nosso código, nosso objetivo sempre é obter 100% de cobertura.
