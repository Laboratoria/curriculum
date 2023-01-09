---
type: read
duration: 15min
---

# Try...catch

O JavaScript suporta um conjunto compacto de declarações específicas para o
manejo de fluxo, que podem ser utilizadas para incorporar uma maior
interatividade entre suas aplicações.

A documentação do JavaScript contem muitos detalhes sobre as declarações
mencionadas nesta unidade. O ponto e vírgula (;) é utilizado para separar
sentenças no código JavaScript.

No JavaScript, qualquer expressão é também uma sentença. Uma sentença
condicional é um conjunto de comandos que são executados caso uma condição seja
verdadeira. São suportados dois tipos se sentenças condicionais: `if...else` e
`switch`.

Com todo o conteúdo que estudamos até agora, você já sabe quais são as sentenças
condicionais e também conhece os loops, que pertencem à parte de controle de
fluxo no JavaScript. A partir de agora vamos falar sobre as sentenças para
tratamento de exceções. Praticamente qualquer objeto pode ser lançado (_thrown_
em inglês) no JavaScript. Porém, nem todos os objetos lançados são criados da
mesma forma. Embora seja bastante comum o lançamento de números ou strings como
erros, normalmente é mais eficiente utilizar um dos tipos de exceção criados
especificamente com este propósito:

## Sentença throw

Utilize a sentença throw para gerar uma exceção, especificando a expressão que
contém o valor a ser lançado:

```js
throw expresión;
```

Pode lançar qualquer expressão, não apenas de um tipo específico. No código
abaixo utilizamos expressões de vários tipos:

```js
throw "Error2";   // Tipo string
throw 42;         // Tipo número
throw true;       // Tipo booleano
throw {toString: function() { return "¡Soy un objeto!"; } };
```

É possível especificar um objeto para gerar a exceção. Em seguida, pode-se
referenciar as propriedades deste objeto em um bloco catch. No exemplo seguinte,
é criado o objeto myUserException do tipo UserException, que é utilizado na
sentença throw.

```js
// Cria um tipo de objeto UserException
function UserException (aviso){
  this.aviso=aviso;
  this.nome="UserException";
}

// Make the exception convert to a pretty string when used as a string
// (e.g. by the error console)
UserException.prototype.toString = function () {
  return this.nombre + ': "' + this.aviso + '"';
}

// Create an instance of the object type and throw it
throw new UserException("Value too high");
```

## try...catch

A sentença `try...catch` marca um bloco de instruções que podem causar alguma
exceção, e declara uma ou mais respostas caso a exceção seja gerada. Neste caso,
a sentença `try...catch` trata de interceptá-la.

A `try...catch` consiste em um bloco `try`, que contém uma ou mais instruções, e
nenhum a vários blocos `catch`, contendo sentenças que especificam o que fazer
se uma exceção é pega no bloco `try`. É desejável que as instruções dentro do
bloco `try` sejam executadas com êxito, caso contrário cairão no bloco `catch`
para serem controladas. Se nenhuma instrução dentro do bloco `try` (ou em uma
função chamada dentro do bloco) gera uma exceção, o controle passa imediatamente
para o bloco `catch`. Caso nenhuma exceção seja gerada no bloco `try`, o bloco
`catch` é ignorado. Por último, se executa o bloco `finally` assim que os blocos
anteriores tenham sido executados, mas antes das instruções que estão em seguida
ao `try...catch`.

O exemplo abaixo utiliza a sentença `try...catch`. O exemplo chama uma função
que retorna o nome de um mês a partir de um array baseado em um valor que foi
passado como argumento para a função. Se o valor não corresponde com o número de
um mês (de `1` a `12`), a exceção é gerada com o valor `'InvalidMonthNo'` e as
instruções no bloco `catch` atribuirão à variável `monthName` o valor de
`unknown`.

```js
function getMonthName (mo) {
  mo = mo - 1; // Ajusta o índice do array para o array de meses (1=Jan, 12=Dec)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo] != null) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //Lança o termo "InvalidMonthNo" ao ocorrer uma exceção
  }
}

try { // instruções a testar
  monthName = getMonthName(myMonth); // A função pode gerar uma exceção
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // Passa o objeto da exceção para o tratamento do erro
}
```

## O bloco catch

Um bloco `catch` é utilizado para tratar todas as exceções que possam ser
geradas no bloco `try`.

O bloco `catch` especifica um identificador (catchID na sintaxe anterior) que
mantém o valor especificado pela sentença `throw`; este identificador pode ser
utilizado para obter informações a respeito da exceção gerada. O JavaScript cria
este identificador ao entrar no bloco `catch`; o identificador se mantém na
duração do bloco `catch`; após o término da execução do bloco `catch`, o
identificador já não estará mais disponível.

Por exemplo, o seguinte código gera uma exceção. Quando a exceção ocorre, o
controle é transferido para o bloco `catch`.

```js
try {
  throw "myException" // gera uma exceção
}
catch (e) {
  // instruções para tratar qualquer exceção gerada
  logMyErrors(e) // Passa o objeto de exceção para o tratamento de erros
}
```
