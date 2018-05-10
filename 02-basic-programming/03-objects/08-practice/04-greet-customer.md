# 04 - Greet Customer

## greetCustomer

Escreva uma função chamada `greetCustomer`.

Dado um nome, `greetCustomer`retorna uma saudação com base em quantas vezes o cliente visitou o restaurante. Consulte o objeto `customerData`.

A saudação deve ser diferente, dependendo do nome da reserva.

Caso 1 - Cliente desconhecido \(o nome não está presente nos dados do cliente\):

```text
var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'
```

Caso 2 - Cliente que visitou apenas uma vez \(o valor das visitas é 1\)

```text
var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'
```

Caso 3 - Repetir cliente: \(o valor de 'visitas' é maior que 1\)

```text
var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'
```

Notas:

* Sua função não deve alterar o objeto `customerData`para atualizar o número de visitas.
* Não codifique os dados exatos da amostra. Esta é uma má ideia:

```text
if (firstName === 'Joe') {
  // do something
}
```

