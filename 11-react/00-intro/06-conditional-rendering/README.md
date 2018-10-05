# JSX: Renderizado condicional

* Tipo: `leitura`
* Formato: `individual`
* Duração: `10min`

***

No `React`, você pode construir diferentes componentes para encapsular o comportamento necessário. Logo, você pode renderizar somente alguns desses componentes, dependendo do estado de sua aplicação.

> O *renderizado condicional* funciona da mesma forma que funcionam as condições em JavaScript. Utiliza sentenças como [`if`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else) ou o [operador condicional](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional) para criar elementos que representam o estado atual e deixa que o `React` atualize a interface do usuário.

Considere os seguintes componentes:

```js
function UserGreeting(props) {
  return <h1>Bem-vindo de volta!</h1>;
}

function GuestGreeting(props) {
  return <h1>Por favor, faça o login.</h1>;
}
```

Vamos criar um componente `Greeting` que mostre o componente correspondente dependendo se o usuário está logado ou não:

```js
function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Mude isLoggedIn={true} para ver o que acontece ;-)
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

[Teste no CodePen](https://codepen.io/gaearon/pen/ZpVxNq?editors=0011)

Este exemplo renderiza diferentes mensagens, dependendo do valor da `prop` `isLoggedin`.

## Elementos como variáveis

Como em JavaScript, você pode utilizar variáveis para armazenar uma referência aos seus elementos. Isso pode lhe ajudar a renderizar condicionalmente uma parte do componente, enquanto que o resto se mantém igual.

Considere estes dois componentes que representam os botões de *Login* e *Logout*:

```js
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
```

No exemplo abaixo, vamos criar um componente que renderize `<LoginButton />` ou `<LogoutButton />` de acordo com a necessidade. Além disso, renderizará um `<Greeting />` do exemplo anterior:

```js
function LoginControl = ({ isLoggedIn, handleLogoutClick, handleLoginClick}) => {
  let button = null; // aqui guardaremos nosso elemento:
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

## Operadores booleanos

Como já vimos antes, você pode adicionar qualquer tipo de expressão em `JSX`, basta colocar entre `{}`. Isso também se aplica para o operador `&&`, o que pode ser útil para incluir um elemento condicionalmente:

```js
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

[Teste no CodePen](https://codepen.io/gaearon/pen/ozJddz?editors=0010)

Isso funciona porque no JavaScript os operadores booleanos são *lazy*: `true && expression` sempre avalia a `expression`, e `false && expression`
sempre avalia para `false`.

Logo, se a condição é `true`, o elemento à direita do `&&` aparece no _output_. Em caso de ser `false`, `React` o ignora.

## Operador condicional ternário

Outro método para renderizar condicionalmente elementos com uma expressão é utilizando o operador ternário [`condition ? true : false`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional).

No exemplo abaixo, utilizamo-lo para renderizar condicionalmente só uma palavra.

```js
function Message(props) {
  return (
    <div>
      The user is <b>{props.isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

## Evitar que um componente renderize

Em alguns casos talvez você queira que um componente fique oculto, inclusive se tiver sido renderizado por fora. Para conseguir isso a única coisa que precisa é devolver `null`.

No exemplo abaixo, `<WarningBanner />` é renderizado dependendo do valor da propriedade chamada `warn`. Se o valor de `warn` é `false`, então o componente não aparecerá na saída.

```js
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      {props.warn}
    </div>
  );
}

ReactDOM.render(
  <WarningBanner warn="cuidado!" />,
  document.getElementById('root')
);
```

[Teste no CodePen](https://codepen.io/merunga/pen/QMVPbb?editors=0010)
