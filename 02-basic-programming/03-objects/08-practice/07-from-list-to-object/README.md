# 07 - From List to Object

Escreva uma função `fromListToObject` que receba uma matriz de matrizes e retorne um objeto com cada par de elementos na matriz como um par de valores-chave.

Exemplo de entrada:

```javascript
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
```

Valor de retorno da função \(saída\):

```javascript
{
  make: 'Ford'
  model: 'Mustang',
  year: 1964
}
```

Não mude a string de entrada. Suponha que todos os elementos da matriz sejam do tipo `string`.

Observe que a entrada pode ter um número diferente de elementos que a amostra fornecida. Por exemplo, se a entrada tiver 6 valores em vez de 4, seu código deve se adaptar de maneira flexível.

