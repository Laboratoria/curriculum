# Quiz #1

- Tipo: `quiz`
- Formato: `self-paced`
- Duración: `15min`

***

## Objetivos

- En esta sección tendrás la oportunidad de evaluarte para que pongas tus
  conocimientos a prueba. Es una oportunidad para que te calibres y valides que
  realmente estás aprendiendo. ¡Mucho éxito!

***

## Preguntas

### 1) ¿Qué es REACT?

#### Opciones

1. Lenguaje de programación
2. Es un framework
3. Hoja de estilo
4. Es una librería open source desarrollada por Facebook

<solution style="display:none;">4</solution>

### 2) ¿Cómo funciona el 'VIRTUAL DOM'?

#### Opciones

1. Propaga los efectos colaterales de esas acciones
2. Análiza los 'diff' para ver qué sub-árboles han cambiado en relación a
la "versión anterior"
3. realiza una "reconciliación", donde actualiza el 'DOM' con el resultado del
'diff'
4. Es una acción especial de React que sólo se ejecuta cuando hay cambios

<solution style="display:none;">1,2,3</solution>

### 3) ¿Cuáles son las etiquetas que no necesitan cierre?

#### Opciones

1. em
2. div
3. img
4. p

<solution style="display:none;">3</solution>

### 4) ¿Qué es JSX?

#### Opciones

1. Es un lenguaje de programación
2. Es la versión anterior a Javascript 
3. Es una extensión al lenguage JavaScript

<solution style="display:none;">3</solution>

### 5) ¿Cómo migras este código de React 'DOM' a 'JSX'?

```js
function Cabecera(props) {
  const titulo = 'Saludo';

  return React.DOM.div({ style: { borderColor: 'red' } },
    React.DOM.h2(null, titulo),
    React.DOM.p(null,
      "Hola ", React.DOM.b(null, props.saludo), ".", React.DOM.br(null),
      "Un link? ", React.DOM.br(null),
      React.DOM.a({ href:"http://laboratoria.la" }, "Laboratoria"), "!"
    )
  )
}

ReactDOM.render(
  Cabecera({ nombre: 'Mundo' }),
  document.getElementById('cabecera')
);
```

#### Opciones

1. ```js
function Cabecera(props) {
  const titulo = 'Saludo';

  return (
    <div style={{ borderColor: 'red' }}>
      <h2>{titulo}</h2>
      <p>
        Hola <b>{props.saludo}</b>. <br />
        Un link? <br />
        <a href="http://laboratoria.la">Laboratoria</a>
      </p>
    </div>
  )
}


  <Cabecera nombre="Mundo" />,
  document.getElementById('cabecera');
```

2. ```js
function Cabecera() {
  const titulo = 'Saludo';

  return (
    <div style={{ borderColor: 'red' }}>
      <h2>{titulo}</h2>
      <p>
        Hola <b>{saludo}</b>. <br />
        Un link? <br />
        <a href="http://laboratoria.la">Laboratoria</a>
      </p>
    </div>
  )
}

ReactDOM.render(
  <Cabecera nombre="Mundo" />,
  document.getElementById('cabecera')
);
```

3. ```js
function Cabecera(props) {
  const titulo = 'Saludo';

  return (
    <div style={{ borderColor: 'red' }}>
      <h2>{titulo}</h2>
      <p>
        Hola <b>{props.saludo.PROPS}</b>. <br />
        Un link? <br />
        <a href="http://laboratoria.la">Laboratoria</a>
      </p>
    </div>
  )
}

ReactDOM.render(
  <Cabecera nombre="Mundo" />,
  document.getElementById('cabecera.props')
);
```

4. ```js
function Cabecera(props) {
  const titulo = 'Saludo';

  return (
    <div style={{ borderColor: 'red' }}>
      <h2>{titulo}</h2>
      <p>
        Hola <b>{props.saludo}</b>. <br />
        Un link? <br />
        <a href="http://laboratoria.la">Laboratoria</a>
      </p>
    </div>
  )
}

ReactDOM.render(
  <Cabecera nombre="Mundo" />,
  document.getElementById('cabecera')
);
```
<solution style="display:none;">4</solution>