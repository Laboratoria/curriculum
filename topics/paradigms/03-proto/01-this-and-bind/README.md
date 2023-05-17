---
type: read
duration: 10min
---

# this y bind

[![Paradigmas - Proto: this y bind](https://embedwistia-a.akamaihd.net/deliveries/0ccfe81dd7f51b5ed2055ff685f6f4ad94777525.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=f7b617e0)](https://laboratoria.wistia.com/medias/wuv699tbbx?wvideo=wuv699tbbx)

Entender el concepto de `this` es fundamental para entender el modelo de
objetos de JavaScript.

`this` es una pseudo-variable que existe dentro de las funciones. `this`
("esto") no significa nada por sí mismo, sino que depende del "contexto". El
valor de `this` debe ser "inferido" del contexto donde aparece, y por eso puede
ser motivo de confusión.

```js
function talk() {
  console.log(this.sound); // qué valor tiene `this`?
}
```

Si invocamos la función `talk` veremos que imprime `undefined`. Pero qué es
`this`? Inspeccionemos un poco...

```js
function talk() {
  console.log(this); // el objeto global!!
}

talk();
```

Cuando ejecutámos nustro código ahora veremos algo así:

```text
{ console: [Getter],
  DTRACE_NET_SERVER_CONNECTION: [Function],
  DTRACE_NET_STREAM_END: [Function],
  DTRACE_HTTP_SERVER_REQUEST: [Function],
  DTRACE_HTTP_SERVER_RESPONSE: [Function],
  DTRACE_HTTP_CLIENT_REQUEST: [Function],
  DTRACE_HTTP_CLIENT_RESPONSE: [Function],
  global: [Circular],
  process:
   process {
     title: 'node',
     version: 'v8.1.2',
     moduleLoadList:
      [ 'Binding contextify',
      ...
```

Qué es todo esto? De dónde salió? Cuando no se puede inferir el valor de `this`,
éste toma el valor del objeto global; `process` en Node.js o `window` en el
navegador.

En la lección anterior vimos cómo `this` tomaba un valor especial en caso de los
constructores. En ese contexto `this` hace referencia al nuevo objeto que crea
el constructor.

Pero hay otra manera más explícita de asignarle un valor a `this`:
`Function#bind`. Todas las funciones en JavaScript son objetos que heredan de
`Function.prototype`, y así heredan el método `bind()`, que nos permite crear
una copia de la función, pero con `this`, el "contexto", asignado
explícitamente a un valor.

"Bind" literalmente significa "ligar", "unir a" o "vincular con". Veamos un
ejemplo:

```js
const cat = { sound: 'meeow!' };
const boundToCat = talk.bind(cat);
boundToCat(); // meeow!
```

En este ejemplo `boundToCat` es una copia de `talk`, pero con su pseudo-variable
`this` asignada a `cat`. Por lo tanto, ahora siempre que invocamos `boundToCat`
el contexto está claro y no cambia dependiendo del contexto de invocación.

Pero qué pasaría si asignamos nuestra función `talk` a una propiedad de un
objeto?

```js
const cat = {
  talk: talk,
  sound: 'meeow!'
};

cat.talk(); // meeow!
talk(); // undefined
```

`talk` y `cat.talk` hacen referencia a exactamente la misma función, pero se
comportan de manera distinta por el contexto. Al asignar `talk` a una propiedad
de `cat`, ahora cuando invocamos `cat.talk()` JavaScript automáticamente infiere
que el contexto es `cat`. Nótese que la función `talk` no ha cambiado, sólo ha
cabiado el hecho de que ahora la estamos invocando como un método de un objeto.

Qué pasaría si ahora asignamos ese método a una variable?

```js
const balbucea = cat.talk
balbucea(); // undefined
```

Tanto `cat.talk` como `balbucea` hacen referencia a la misma función `talk`,
pero podemos ver claramente que se comportan de maneras distintas dependiendo
del contexto.

Veamos como `bind` nos puede ayudar a "aclarar" el contexto de una función y así
poder asegurar el valor de `this`:

```js
const cat = {
  sound: 'meeow!'
};

cat.talk = talk.bind(cat);

cat.talk(); // meeow!
talk(); // undefined

const catTalk = cat.talk;
catTalk(); // meeow!
```

Para terminar esta sección, veamos un último ejemplo confuso y enrevesado:

```js
function talk() {
  console.log(this.sound); // qué valor tiene `this`?
}

const cat = {
  talk: talk,
  sound: 'meeow!'
};

const dog = {
  talk: cat.talk,
  sound: 'woof!'
};

dog.talk(); // woof!
```

***

## Referencias

Capítulos de libros:

* [Eloquent JavaScript - Chapter 6: The Secret Life of Objects](http://eloquentjavascript.net/06_object.html)

Otros recursos:

* [MDN - instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
* [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [MDN - Function.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
* [MDN - Function.call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
