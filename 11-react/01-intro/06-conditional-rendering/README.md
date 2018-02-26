# JSX: Renderizado condicional

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `10min`

***

En `React`, puedes construir distintos componentes para encapsular el
comportamiento que necesites. Luego, puedes renderizar solo algunos de esos
componentes, dependiendo del estado de tu aplicación.

> El *renderizado coindicional* funciona de la misma manera que funcionan las
condiciones en JavaScript. Usa sentencias como [`if`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else)
o el [operador condicional](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator)
para crear elementos que representen el estado actual, y deja que React
actualice la interfaz de usuario.

Considera los siguientes componentes:

```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
```

Vamos a crear un componente `Greeting` que muestre el componente que
corresponda, dependiendo de si el usuario esta loggeado o no:

```js
function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Cambia isLoggedIn={true} para ver qué pasa ;-)
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

[Pruébalo en CodePen](https://codepen.io/gaearon/pen/ZpVxNq?editors=0011)

Este ejemplo renderiza diferentes mensajes, dependiendo del valor de la prop
`isLoggedIn`.

## Elementos como variables

Al igual que en Javascript, puedes usar variables para guardar una referencia a
tus elementos. Esto puede ayudarte a renderizar condicionalmente una parte del
componente, mientras que el resto se mantiene igual.

Considera estos dos componente que representan botones de *Login* y *Logout*

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

En el ejemplo de abajo, vamos a crear un componente que renderice
`<LoginButton />` o `<LogoutButton />` según corresponda. Además renderizará un
`<Greeting />` del ejemplo anterior:

```js
function LoginControl = ({ isLoggedIn, handleLogoutClick, handleLoginClick}) => {
  let button = null; // aqui guardaremos nuestro elemento
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

Como ya vimos antes, puedes incrustar cualquier tipo de expresiones en JSX,
solo con colocarlas dentro de llaves `{}`. Esto tambien aplica para el operador
`&&`, el cual puede ser muy útil para incluir un elemento condicionalmente:

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

[Pruébalo en CodePen](https://codepen.io/gaearon/pen/ozJddz?editors=0010)

Esto funciona porque en JavaScript los operadores booleanos son *lazy*:
`true && expression` siempre evalúa a `expression`, y `false && expression`
siempre evalua a `false`.

Entonces, si la condición es `true`, el elemento a la derecha del `&&` aparece
en el output. En cambio si es`false`, React lo ignora.

## Operador condicional ternario

Otro método para renderizar condicionalmente elementos con una expresión, es
usando el operador ternario [`condition ? true : false`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Conditional_Operator).

En el ejemplo de abajo, lo utilizamos para renderizar condicionalmente sólo una
palabra.

```js
function Message(props) {
  return (
    <div>
      The user is <b>{props.isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

## Evitar que un componente se renderice

En algunos casos quizás quieras que un componente se oculte, inclusive si ha
sido renderizado desde afuera. Para lograr esto lo único que necesitas es
devolver `null`.

En el ejemplo de abajo, `<WarningBanner />` es renderizado dependiendo del valor
de la propiedad llamada `warn`. Si el valor de `warn` es `false`, entonces el
componente no aparecerá en la salida.

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

[Pruébalo en CodePen](https://codepen.io/merunga/pen/QMVPbb?editors=0010)
