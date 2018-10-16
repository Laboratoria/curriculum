# Guia de estilos

- Tipo: `leitura`
- Formato: `individual`
- Duração: `60min`

***

## Objetivos de Aprendizagem

- Usar um guia de estilos para escrever código mais legível.

***

Um guia de estilo é uma lista de regras para formatar seu código. Muitas empresas usam um guia de estilo para que toda sua base de código pareça escrita pelo mesmo desenvolvedor, ao invés dos desenvolvedores projetarem o código de acordo com suas próprias preferências. Isso faz com que o código seja mais fácil de ler para todos.

## O guia de estilos da Laboratoria

Na Laboratoria, preparamos um guia de estilos para que você o siga a partir de agora em todos os seus exercícios. Você pode encontrá-lo [aqui](https://github.com/Laboratoria/js-style-guide). Por favor, leia-o agora. Não se preocupe, você não precisa memorizar tudo agora. Você pode usar um _linter_ (explicado na próxima seção) como ajuda. Mas você deve revisar todo o seu código com o guia de estilo antes de enviá-lo. Com o tempo, você se acostumará a seguir essas regras sem ter que pensar nelas.

### Código antes e depois

Aqui temos um exemplo de código que não segue o guia de estilo. Copie-o em seu editor e tente formatá-lo de acordo com o guia e então verifique o trabalho seguinte.

#### Exemplo

```javascript
var ASCII_UPPERCASE_A = 65;
var ASCII_UPPERCASE_Z = 90;
var ASCII_LOWERCASE_A = 97;
var ASCII_LOWERCASE_Z = 122;

function cipher (word,offset)
{
  var output=''
  for(var i = 0;i<word.length; i++)
  {
    var letterCode = word.charCodeAt(i);
    if(ASCII_UPPERCASE_A <= letterCode && letterCode <=ASCII_UPPERCASE_Z) {
      var newCode = (letterCode - ASCII_UPPERCASE_A + offset) %26+ASCII_UPPERCASE_A;
      output += String.fromCharCode(newCode);
    } else if(ASCII_LOWERCASE_A<=letterCode && letterCode<=ASCII_LOWERCASE_Z) {
      var newCode = (letterCode - ASCII_LOWERCASE_A + offset) %26+ASCII_LOWERCASE_A;
      output += String.fromCharCode(newCode);
    }
    else
    {
      alert('Digitar somente letras');
      return; // --> undefined
    }
  }

  return output;
}

cipher ('Olá', 33)
```

#### Solução

```javascript
var ASCII_UPPERCASE_A = 65;
var ASCII_UPPERCASE_Z = 90;
var ASCII_LOWERCASE_A = 97;
var ASCII_LOWERCASE_Z = 122;

function cipher(word, offset) {
  var output = '';
  for (var i = 0; i < word.length; i++) {
    var letterCode = word.charCodeAt(i);
    if (ASCII_UPPERCASE_A <= letterCode && letterCode <= ASCII_UPPERCASE_Z) {
      var newCode = (letterCode - ASCII_UPPERCASE_A + offset) % 26 +
        ASCII_UPPERCASE_A;
      output += String.fromCharCode(newCode);
    } else if (ASCII_LOWERCASE_A <= letterCode
      && letterCode <= ASCII_LOWERCASE_Z) {
        var newCode = (letterCode - ASCII_LOWERCASE_A + offset) % 26 +
          ASCII_LOWERCASE_A;
        output += String.fromCharCode(newCode);
    } else {
      alert('Ingresar solo letras');
      return; // --> undefined
    }
  }

  return output;
}

cipher('Olá', 33);
```

## Guias de estilos populares

Escrevemos o guia de estilo da Laboratoria para que seja uma versão mais simples de dois dos guias de estilos mais populares:

- [Guia de estilos JavaScript de AirBnb](https://github.com/paolocarrasco/javascript-style-guide)
- [Guia de estilos JavaScript de Google](https://google.github.io/styleguide/jsguide.html)

Quando você trabalha como desenvolvedora profissional, é muito provável que lhe peçam para seguir um desses dois guias e por isso escrevemos nossas regras como um subconjunto delas; é possível que você precise aprender algumas regras adicionas, mas você não deverá superar muitos hábitos velhos para consegui-lo. Uma vez que você se sinta confortável usando o guia de estilo da Laboratoria, você talvez queira voltar e dar uma olhada nesses guias e começar a adotar algumas destas práticas no seu código.