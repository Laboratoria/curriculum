# Estado compartido

* Tipo: `lectura`
* Formato: `self-paced`
* Duración: `15min`

***

Habitualmente, varios componentes necesitar reflejar los cambios de la misma información.
En lugar de mantener una copia en el estado local de cada componente, la recomendación
es abstraer esa información al _primer ancenstro común_. Veamos como funcionaría
esto en la práctica.

Crearemos una calculadora de temperatura, que calcula
si el agua hervirá a cierta temperatura.

Comenzamos con un componente llamado `VeredictoHervor`. Recibe la temperatura
en una propiedad llamada `celsius`, e imprime si es lo suficientemente caliente
como para que el agua hierva:

```js
const VeredictoHervor = ({ celsius }) => (
  <p>El agua {celsius >= 100 ? '' : 'no'} hervirá</p>
);
```

Luego, crearemos un componente llamado `Calculadora`, que renderiza un
`<input>` que permite ingresar la temperatura y mantienen el valor
en `this.state.temperatura`.

Además, renderiza `VeredictoHervor` para el valor actual del input.

```js
class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperatura: '' };
  }

  handleChange(e) {
    this.setState({ temperatura: e.target.value });
  }

  render() {
    const { temperatura } = this.state;
    return (
      <fieldset>
        <legend>Ingresa temperatura en Celsius:</legend>
        <input
          value={temperatura}
          onChange={this.handleChange}
        />
        <VeredictoHervor celsius={parseFloat(temperatura)} />
      </fieldset>
    );
  }
}
```

[**Pruébalo en CodePen**](https://codepen.io/gaearon/pen/ZXeOBm?editors=0010)

## Agregando un segundo input

Nuestro nuevo requerimiento es que, además de Celsius, aceptemos un input con
la temperatura en Fahrenheit, y mantengamos ambas temperaturas sincronizadas.

Comencemos extrayendo el componente `TemperaturaInput` de `Calculadora`.
Agregaremos una nueva prop `escala` que podrá tener los valores `"c"` or `"f"`:

```js
const escalaNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperaturaInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperatura: '' };
  }

  handleChange(e) {
    this.setState({ temperatura: e.target.value });
  }

  render() {
    const { temperatura } = this.state;
    const { escala } = this.props;
    return (
      <fieldset>
        <legend>Ingresa temperatura en {escalaNames[escala]}:</legend>
        <input
          value={temperatura}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
```

Ahora, podemos modificar `Calculadora` para que renderice dos inputs
de temperatura, uno para cada escala:

```js
class Calculadora extends React.Component {
  render() {
    return (
      <div>
        <TemperaturaInput escala="c" />
        <TemperaturaInput escala="f" />
      </div>
    );
  }
}
```

[**Pruébalo en CodePen**](https://codepen.io/gaearon/pen/jGBryx?editors=0010)

Ya tenemos 2 inputs, pero si cambias uno el otro no se actualiza, y según
nuestro requerimiento, necesitamos que estén sincronizados.

Además tampoco podemos mostrar `VeredictoHervor` desde `Calculadora`,
ya que `Calculadora` no conoce la temperatura actual ya que está _escondida_
dentro de `TemperaturaInput`.

## Funciones de conversión

Primero, vamos a escribir dos funciones, que nos permitan convertir
de Celsius a Fahrenheit y viceversa:

```js
const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
```

Estas dos funciones trabajan con números, asi que crearemos otra función
que recibe un string `temperatura` y una función de conversión como
argumentos y devuelve un string. La usaremos para calcular el valor de
un input en relación al otro.

Devuelve un string vacío si `temperatura` es inválida, y redondea
el resultado a 3 decimales:

```js
const tryConvert = (temperatura, convert) => {
  const input = parseFloat(temperatura);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
```

Por ejemplo, `tryConvert('abc', toCelsius)` retorna un string vacío,
y `tryConvert('10.22', toFahrenheit)` retorna `'50.396'`.

## Elevando el estado

Actualmente, ambos componentes `TemperaturaInput` mantienen sus valores
independientemente dentro de sus propios states locales:

```js
class TemperaturaInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperatura: '' };
  }

  handleChange(e) {
    this.setState({ temperatura: e.target.value });
  }

  render() {
    const { temperatura } = this.state;
    // ...
```

sin embargo, nosotros queremos que ambos inputs se sincronicen.

En React, los estados compartidos se consiguen _elevando_ los valores
del state local al **ancestro mas cercano en común dentro del Virtual DOM**.
A esta técnica se la conoce como "lifting state up": Convertiremos el
componente `TemperaturaInput` en stateless y moveremos su estado `Calculadora`
(el primer ancestro en común de ambos `TemperaturaInput`).

Ahora que `Calculadora` es dueña del estado compartido, se convierte en el
_"source of truth"_ de la temperatura, para ambos inputs.
Como las propiedades de ambos componentes `TemperaturaInput` vienen del mismo
componente padre `Calculadora`, ambos inputs estarán siempre sincronizados.

Veamos como funciona esto paso a paso.

Primero convertimos `TemperaturaInput` a stateless, reemplazando
`this.state.temperatura` con una prop `temperatura`.

Luego, necesitamos deshacernos del `this.handleChange`. Cuando la `temperatura`
estaba en el estado local, `TemperaturaInput` simplemente llamada a
`this.setState()` para cambiar su valor. Sin embardo, ahora que `temperatura`
viene desde el padre, `TemperaturaInput` ya no tiene control sobre su valor.

En React, esta situación se suele resolver convirtiendo al componente en
"controlado", y así como un `<input>` del DOM acepta tanto atributos
`value` como `onChange`, de la misma manera `TemperaturaInput`
acepta props `temperatura` y `onTemperaturaChange`.

```js
const TemperaturaInput = ({ temperatura, escala, onTemperaturaChange }) => (
  <fieldset>
    <legend>Ingresa temperatura en {escalaNames[escala]}:</legend>
    <input
      value={temperatura}
      onChange={(e) => onTemperaturaChange(e.target.value)}
    />
  </fieldset>
);
```

> Nota:
>
> No hay ningún significado especial para los nombres de las props
> `temperatura` o `onTemperaturaChange`.
> Les podríamos haber puesto el nombre que quisiéramos.

Ahora la prop `onTemperaturaChange` será provista conjuntamente con
`temperatura` por el componente padre `Calculadora`, quien se encargará
de manejar los cambios de los inputs, modificando su propio estado local.

Como te imaginarás guardaremos los valores del estado que elevamos,
`temperatura` y `escala` en su estado local.
Esta es la representación mínima de estado que necesitamos para mostrar
ambos inputs.

Por ejemplo, si ingresamos 37 en el input Celsius, el state
de `Calculadora` será:

```js
{
  temperatura: '37',
  escala: 'c'
}
```

Y luego, si editamos el input Fahrenheit a `212`, el state
de `Calculadora` será:

```js
{
  temperatura: '212',
  escala: 'f'
}
```

> Podríamos haber guardado el valor de ambos inputs, pero resulta
> que es innecesario: es suficiente con el valor del último input
> modificado y la escala que representa. Con esos datos, podemos
> inferir las props del otro input.

Ahora los inputs se mantiene sincronizados, porque los valores de
los inputs se computan usando el mismo estado:

```js
class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperatura: '', escala: 'c' };
  }

  handleCelsiusChange(temperatura) {
    this.setState({ escala: 'c', temperatura });
  }

  handleFahrenheitChange(temperatura) {
    this.setState({ escala: 'f', temperatura });
  }

  render() {
    const { temperatura, escala } = this.state;
    const celsius = escala === 'f' ? tryConvert(temperatura, toCelsius) : temperatura;
    const fahrenheit = escala === 'c' ? tryConvert(temperatura, toFahrenheit) : temperatura;

    return (
      <div>
        <TemperaturaInput
          escala="c"
          temperatura={celsius}
          onTemperaturaChange={this.handleCelsiusChange} />
        <TemperaturaInput
          escala="f"
          temperatura={fahrenheit}
          onTemperaturaChange={this.handleFahrenheitChange} />
        <VeredictoHervor
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
```

[**Pruébalo en CodePen**](https://codepen.io/gaearon/pen/WZpxpz?editors=0010)

Ahora, no importa qué input editemos, `this.state.temperatura` y
`this.state.escala` en `Calculadora` se actualizan.
Uno de los inputs recibe el valor tal cual lo ingresa el usuario,
y los valores para el otro se recalculan basados en esos datos.

Recapitulemos qué sucede cuando editamos un input:

* React llama a la función `onChange` del elemento `<input>`del DOM. En
  nuestro caso, es la prop `onTemperaturaChange` dentro del componente
  `TemperaturaInput`.
* `Calculadora` previamente ya especificó que `onTemperaturaChange` del
  `TemperaturaInput` para Celsius, es el método `handleCelsiusChange`.
  Análogamente `onTemperaturaChange` para el `TemperaturaInput`
  de Fahrenheit es el método `handleFahrenheitChange`. De esta manera,
  dependiendo del input que se modifique es el método que se llama.
* Dentro de estos métodos , el componente`Calculadora` solicita un
  re-renderizado al llamar `this.setState()` con el nuevo valor
  y la escala del input editado.
* React ejecuta el método `render` del componente `Calculadora` para
  averiguar cómo se debería ver la UI.
  Los valores de ambos inputs se recalculan basados en la `temperatura`
  actual y la `escala` activa.
  En este paso se realiza la conversión entre temperaturas.
* React llama los métodos `render` de cada componente `TemperaturaInput`
  con las nuevas props extraídas del state de `Calculadora`.
* React llama al método `render` de `VeredictoHervor`, pasando la temperatura
  en escala Celsius.
* React DOM alctualiza el DOM con el veredicto según la temperatura ingresada.

Con cada actualización del valor de los inputs, se repiten los mismos pasos
y así se mantienen los inputs sincronizados.

## ¿Qué hemos aprendido?

Debe existir una "single source of truth" (en lugar de "copias") para cada
pieza información que cambia dentro de una aplicación React.
En general, esta información se coloca en el state del primer componente que
la necesita, y luego, si otro componente necesita la misma
información, se **_eleva_** el estado al primer ancentro que estos componentes
tengan en común.
La recomendación es que en lugar de sumergirte en el infierno de intentar de
mantener sincornizadas copias de una misma información, deberías aprovechar en
el principio de _top-down data flow_ de React.

Los estados compartidos, requiren escribir más "boilerplate" pero como
beneficio, facilita la tarea de encontrar bugs: Como cada state "vive"
dentro de un y sólo un componente, y sólo ese componente puede modificarlo,
el área donde puede encontrarse el bug, se reduce considerablemente.
Adicionalmente, te permite implementar lógica a medida, para validar o
transformar input del usuario en un sólo lugar.

Si algo se puede inferir de las props o el state, entonces probablemente
no debería estar en el state. En nuestro ejemplo, en lugar de guardar
`temperaturaCelsius` y `temperaturaFahrenheit`, guardaos sólo la última
`temperatura` y su `escala`.
El valor del otro input siempre se puede calcular, a partir de esa
información en el método `render()`.

Cuando encuentres algo que está mal en la UI, puedes usar
[React Developer Tools](https://github.com/facebook/react-devtools)
para inspeccionar las props y trasladarte a través del árbol hasta que
encuentre el componente responsable de actualizar el state.
Esto te permite rastrear bugs hasta su origen:

![Monitoreando State en React DevTools](https://reactjs.org/react-devtools-state-ef94afc3447d75cdc245c77efb0d63be.gif)
