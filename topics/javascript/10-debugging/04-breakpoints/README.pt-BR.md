# Como debuggar em JS?

- Tipo: `leitura`
- Formato: `individual`
- Duração: `40min`

***

## Objetivos de Aprendizagem

- Aprender a depurar com o Dev Tools.
- Aprender a usar o `debugger statement`.

***

Para depurar em JavaScript podemos utilizar 2 ferramentas: DevTools do navegador
e o `debugger statement`.

## DevTools

O DevTools (é chamado assim no Chrome mas existe o mesmo em outros navegadores)
é uma ferramenta utilizada para inspecionar e depurar tudo o que acontece em
nossa aplicação web.

Para acessá-la existem diversos métodos. Um dos mais simples é abrir a página
web que você deseja depurar, clicar com o botão direito em qualquer parte da
página e selecionar a opção _Inspect_ ou _Inspecionar_.

Por padrão, será aberta uma aba chamada _Elements_ ou _Elementos_; contudo, para
fazer o debug de nosso código JavaScript devemos mudar para a aba _Sources_ ou
_Fonte_.

Provavelmente, ao ver o conteúdo da aba _Sources_, você verá um arquivo HTML e
nenhum arquivo JS por mais que saibamos o que estamos utilizando. Para poder
visualizar os arquivos JS que nossa web app utiliza, só é necessário recarregar
a página.

Não ficou claro? Não se preocupe. Em seguida temos um GIF que mostra tudo o que
mencionamos acima.

![Chrome Dev Tools:
Sources](https://cdn-images-1.medium.com/max/800/1*JhVFiJNoGZAAmlnk00y6TA.gif)

Para a depuração do código JS, podemos fazer uso de **breakpoints**, que são
pontos onde queremos que nosso código pare durante o tempo de execução.

No exemplo a seguir, temos um código que verifica se o número digitado por um
usuário é zero, positivo ou negativo.

```javascript
let number = prompt('Digite um número');
number = Number(numero);

if (number === 0) {
  alert('Zero');
} else if (number > 0) {
  alert('Positivo');
} else {
  alert('Negativo');
}
```

Para adicionar um _breakpoint_ no DevTools você só tem que clicar no número
indicador da linha de código onde queremos parar o script. Uma vez colocado o
breakpoint, devemos recarregas a página para que pare onde indicamos.

Uma vez parado, a linha de código onde colocamos o _breakpoint_ ficará
destacada, enquanto que a página web ficará opaca e mostrará uma mensagem _Paused
in debugger_ ao lado de 2 botões. O primeiro (cor azul), chamado  _Resume Script
Execution_, determina que a execução continue até o próximo _breakpoint_ ou até
que termine o script. O segundo (cor cinza), chamado _Step over next function
call_, continua a seguir o fluxo de execução do programa.

A seguir você pode ver esse processo em um GIF:

![Chrome Dev Tools:
Breakpoints](https://cdn-images-1.medium.com/max/800/1*DbS6jAUYz3mPJjyv8MMU-w.gif)

Dois botões que nos ajudam a depurar nosso código são: _Step into next function
call_ e _Step out of current function_. O primeiro permite entrar no código de
uma função em tempo de execução, enquanto o segundo permite sair da função na
qual estamos depurando.

No exemplo a seguir, se tivéssemos um breakpoint na linha 8, e usássemos o botão
_Step over next function_, iríamos para a linha 9; contudo, se usamos o botão de
_Step into next function call_, entraria na linha de código número 2 já que esse
é o código que está dentro de nossa função.

Chegou a hora de testarmos:

```javascript
function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

const result = factorial(5);
console.log(result);
```

![Chrome Dev Tools:
Debugging](https://cdn-images-1.medium.com/max/800/1*C3k9ZTu-q9i8GFB2P47muQ.gif)

## Debugger Statement

O segundo método para depurar um código é utilizando uma palavra reservada em JS
chamada `debugger`. Esta palavra permite especificar no código a linha exata em
que queremos que nosso aplicativo web seja depurado.

> Nota: Para que o script pare na palavra `debugger`, precisamos ter o Dev Tools
> aberto e então recarregar a página.

A seguir temos uma demonstração usando o seguinte script:

```javascript
const number = parseInt(prompt('Digite um número (de 1 a 10):'));
const randomNumber = Math.floor(Math.random() * 10);

debugger;
if (randomNumber === number) {
    console.log('Adivinhou!');
} else {
    console.log('Perdeu! O número é ' + randomNumber);
}
```

![Debugger
statement](https://cdn-images-1.medium.com/max/800/1*RcPHfLBSK1Bh8FzfqJlqpQ.gif)

## Agora é sua vez

Para colocar em prática esta leitura, você pode depurar o código a seguir:

```javascript
/*
 * Corrija o seguinte código de maneira que obtenha o resultado esperado.
 * Utilize as técnicas de depuração que você conhece para encontrar e resolver
 * o erro.
 */

const reverse = (text) => {
  let reversedText = '';
  const textLength = text.length;

  for (let i = textLength; i > 0; i--) {
   reversedText += text.charAt(i);
  }

  return reversedText;
};

const result = reverse('Laboratoria');
// Resultado atual: airotaroba
// Resultado esperado: airotarobaL
console.log(result);

// HINT: São duas alterações para que fique correto ;)
```

Assim, a partir de agora...

![Debug all the
things](https://cdn-images-1.medium.com/max/800/1*znr2Wn2kXro7XkimgplRCg.jpeg)
