# fromListToObject

Escreva uma função `fromListToObject` que receba um _array_ de _arrays_ e
retorne um objeto com cada par de elementos do _array_ como um par de
chave-valor.

Exemplo de entrada:

```javascript
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
```

Saída função:

```javascript
{
  make: 'Ford'
  model: 'Mustang',
  year: 1964
}
```

Não mude a string de entrada. Suponha que todos os elementos do _array_ sejam do
tipo `string`.

Observe que a entrada pode ter um número diferente de elementos do que a amostra
fornecida. Por exemplo, se a entrada tiver 6 valores em vez de 4, seu código
deve se adaptar de maneira flexível.
