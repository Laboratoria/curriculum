# Bubbling vs Capturing

type: read
duration: 15min

***

Cuando un evento es lanzado, este pasa por 3 fases, en el siguiente orden,
Capture phase, Target phase y Bubbling phase. El hecho de pasar por las 3
fases es denominado event flow.

Cuando se dispara un evento en un elemento que tiene elementos padres, los
navegadores modernos ejecutan dos fases diferentes, la fase de `capturing` y
la fase de `bubbling`.

En la fase de captura el navegador comprueba si el antepasado más externo del
elemento `<html>` tiene un controlador de eventos `onclick` registrado en él
en la fase de `capturing` y lo ejecuta si es así.
Luego pasa al siguiente elemento dentro de `<html>` y hace lo mismo, luego el
siguiente, y así sucesivamente hasta que alcanza el elemento en el que se hizo
`clic`.

En la fase de `bubbling` ocurre exactamente lo contrario, el navegador
comprueba si el elemento en el que se ha hecho `clic` tiene un controlador de
eventos `onclick` registrado en él en la fase de bubbling y lo ejecuta si es
así.
Luego se mueve al siguiente elemento que le sigue al antepasado y hace lo
mismo, luego el siguiente, y así sucesivamente hasta que alcanza el elemento `<
html>`.

En el event flow, cada evento lanzado en el DOM empieza en el contexto global
(es decir, `window`), pasa por el `nodo raíz` del `document` y sigue un
camino a través de una serie de nodos hijos (Capturing phase) que le permita
llegar al elemento que lanza dicho evento (Target phase).
En la `target phase`, el evento es lanzado. Luego, empieza la `bubbling phase`
siguiendo el mismo camino de la `capturing phase`, pero en sentido inverso,
hasta llegar al contexto global (`window`).

Cuando se registra un `listener`, se puede definir para que sea ejecutado en la
`capturing phase` o en la `bubbling phase`. El orden en que un `listener` es
ejecutado depende de la fase en la que está agregado.

```js
window.addEventListener('click', function() {
  console.log('Bubbling click event');
}, false);// Este listener se ejecutará segundo
window.addEventListener('click', function() {
  console.log('Capturing click event');
}, true);// Este listener se ejecutará primero
```

Para definir la fase en la que se ejecutará un `listener` se pasa un tercer
parámetro a `addEventListener`, el cual debe tener un valor `booleano`: si el
parámetro es `true`, el `listener` se ejecutará en la `capturing phase`, y si
es `false` el `listener` se ejecutará en la `bubbling phase`. Por defecto, el
valor de este parámetro es `false`. Cabe señalar que también debe ser pasado a
`removeEventListener` si existen dos listeners, uno para cada fase, que apunten
al mismo evento y elemento.
