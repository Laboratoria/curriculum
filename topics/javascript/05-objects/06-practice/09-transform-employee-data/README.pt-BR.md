# transformEmployeeData

Escreva uma função chamada "transformEmployeeData" que transforma alguns dados
de funcionários de um formato para outro.

O argumento ficará assim:

```javascript
[
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ]
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36 ], ['role', 'manager']
  ]
]
```

Dada a entrada, o valor de retorno deve ficar assim:

```javascript
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
```

Observe que a entrada pode ter um número diferente de linhas ou chaves
diferentes da amostra fornecida.

Por exemplo, digamos que o departamento de recursos humanos inclua um campo
"tshirtSize" em cada registro de funcionário. Seu código deve ser flexível para
tratar essa situação.
