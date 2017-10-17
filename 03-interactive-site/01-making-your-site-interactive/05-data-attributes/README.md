# Atributos data

- Tipo: `lectura`
- Formato: `self-paced`
- Duración: `30min`

## Objetivos de Aprendizaje

En ésta unidad aprenderemos:

- ¿Qué son los atributos data y para qué me sirven?
- ¿Cómo se usan?

***

## ¿Qué son los atributos data?

Son atributos personalizados que nos permiten añadir datos a nuestros elementos
HTML, que no necesariamente son visibles pero que nos ayudan mucho al momento
de dar información adicional de dichos elementos.

## ¿Cómo se usan?

Usarlos es muy fácil, ya que su sintaxis e interacción es sencilla.

### Sintaxis

Se compone de un prefijo `data-` acompañado del nombre (*en minúsculas*) que
consideremos más apropiado para el valor que va a guardar:

```html
<elemento id="ejemplo" data-nombre="valor" data-otro-nombre="otro valor">
```

### Interacción con JavaScript

Para poder acceder a estos atributos hacemos uso del método `dataset`.

```javascript
  var ejemplo = document.getElementById("ejemplo");
  var valor = ejemplo.dataset.nombre;
  var otroValor = ejemplo.dataset.otroNombre;
```

En éste [link](https://cybmeta.com/los-atributos-data-y-el-dataset-api) podemos
encontrar información más detallada acerca de esto que acabamos de leer.

***

## Y ahora ¿Qué sigue?

Ya que tenemos una noción de qué son y el cómo se usan los atributos data, que
te parece si vemos el siguiente video en el que se muestra un ejercicio
haciendo uso de estos.

[![Atributos Data](https://img.youtube.com/vi/fnn6mqN1S8Q/0.jpg)](https://www.youtube.com/watch?v=fnn6mqN1S8Q)

Para leer más acerca de los atributos data, revisa éste [link](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
y éste otro [link](https://www.w3schools.com/tags/att_global_data.asp)
