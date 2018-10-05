# Referências

* Tipo: `leitura`
* Formato: `individual`
* Duração: `15min`

***

No fluxo padrão do `React`, as `props` são a única forma que os componentes pai possuem para interagir com seus `children`. Se você quiser modificar um nó filho, você o renderiza com novas `props` e pronto.

Contudo, existem certas situações nas quais você precisa poder modificar um nó filho de maneira imperativa. O nó a ser modificado pode ser tanto uma instância de um componente definido como classe, como um elemento `DOM`.

## Quando utilizar referências?

Existem alguns casos de uso válidos para utilização de `refs`:

* Manipular o foco, a seleção de texto ou a reprodução de conteúdo multimídia.
* Disparar animações imperativas.
* Integrar com bibliotecas externas.

> NOTA:
>
> Evite utilizar `refs` para qualquer coisa que você possa fazer de maneira declarativa.
>
> Por exemplo, se você tiver um componente `Dialogo`, no lugar de expor os métodos `abrir()` e `fechar()`, informe uma `prop` booleana `aberto`.

## Adicionar uma referência a um elemento DOM

`React` prevê suporte para um atributo especial que pode ser atribuído a qualquer componente implementado como classe: `ref`. O Atributo `ref` recebe uma função _callback_, que será executada imediatamente após o componente ser desmontado.

Quando o atributo `ref` é utilizado em um elemento `HTML`, a função _callback_ recebe o elemento `DOM` como argumento:

```js
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitamente damos o foco no input por meio da API do DOM:
    this.textInput.focus();
  }

  render() {
    // Usamos `ref` para capturar a referência ao elemento input do DOM
    // em um campo desta instância de `CustomTextInput`.
    return (
      <div>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}
```

O `React` será encarregado de executar o callback com o elemento DOM correspondente quando o componente for montado e o substituirá quando for desmontado.

## Adicionando uma referência a um componente `statefull`

Quando utilizamos `ref` em um componente declarado como uma classe, o _callback_ recebe como argumento a instância montada do componente. Por exemplo, se quisermos dar o foco no componente `CustomTextInput`, podemos renderizá-lo dentro de um componente pai que execute o método `CustomTextInput.focus()` quando for montado:

```js
class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render() {
    return (
      <CustomTextInput
        ref={(input) => { this.textInput = input; }} />
    );
  }
}
```

***

**NOTA**:

Tenha em mente que isso **só funciona** se `CustomTextInput` estiver declarado como classe.

Você **nunca** deveria usar `ref` em um componente `stateless` porque **eles não têm instâncias**. Se você precisar usar `ref` com um componente `stateless`, você deve convertê-lo em `statefull`.