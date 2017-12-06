# DOM

- Tipo: `lectura`
- Formato: `self-learning`
- Duración: `60min`

***

## Objetivos de aprendizaje

- Aprender como podemos manipular el DOM a través de jQuery

### Manipulación del DOM

jQuery nos proporciona muchos métodos para manipular elementos HTML, los
más simples pero muy útiles son:

- text()
- html()
- val()

Equivalentes a lo que en JavaScript son:

- textContent
- innerHTML
- value

La diferencia es que en jQuery son funciones y no propiedades.

![Ejemplo-text-html-val](https://raw.githubusercontent.com/Laboratoria/curricula-js/30b2d37a0714ed52d2b1ce924951bf61f96916ef/04-social-network/02-jquery/03-dom/text-html-val.png)
*(Ya sabemos que el html no debe llevar nuestro script ahí mismo pero
  esta imagen es solo para ejemplificar lo arriba mencionado)*

jQuery tiene varios métodos para agregar, eliminar o modificar elementos
del DOM fácilmente.

Vamos a entenderlos uno a uno... con su ejemplo.

| Método | Descripción | Ejemplo |
| ------ | ----------- | ------- |
| .append() | Inserta contenido **al final** del elemento de destino que se especifica con el selector. | $('selector').append(contenido);|
| .prepend() | Inserta contenido **al principio** del elemento especificado. | $('selector').prepend('contenido'); |
| .before() | Inserta contenido (elementos nuevos o existentes en el DOM) **antes** del elemento de destino que se especifica con el selector. | $('selector').before(); |
| .after() | Inserta contenido (elementos nuevos o existentes en el DOM) **después** del elemento de destino que se especifica con el selector. | $('selector').after(); |
| .empty() | Elimina los hijos del elemento seleccionado. | $('selector').empty(); |
| .remove() | Remueve los elementos seleccionado especificados por el selector. | $('selector').remove(); |
| .replaceAll() | Sustituye a los elementos seleccionados con nuevos elementos HTML | $('contenido').replaceAll(selector); |
| .wrap() | El método **envuelve** el elemento HTML especificado alrededor de cada elemento seleccionado | $('p').wrap(' < div></ div>'); |

### Navegando el DOM

Para navegar a través del DOM, jQuery también nos ofrece varios métodos
maravillosos

| Método | Descripción | Ejemplo |
| ------ | ----------- | ------- |
| .children() | Devuelve un grupo de elementos que contienen **todos los hijos** inmediatos únicos de cada grupo de elementos previamente seleccionados | $('selector').children(); |
| .parent() | Devuelve el padre directo de un elemento. Si la selección es de un grupo de elementos obtiene un grupo de sus padres directos únicos | $('selector').parent(); |
| .parents() | Obtiene los ancestros de los elementos filtrados por el selector. | $('selector').parents(selector); |
| .find() | Devuelve una nueva selección que contiene aquellos elementos descendientes de la selección previa que cumplen la condición dada | $('selector').find(selector para encontrar); |
| .each() | Itera sobre cada elemento especificado (utilizando un selector) y ejecuta la función de devolución de llamada para cada elemento | $('selector').each(function); |
| .first() | Devuelve el **primer** elemento en el conjunto de los elementos coincidentes | $('selector').first(); |
| .next() | Devuelve el hermano **inmediatamente siguiente** del elemento en el conjunto de los elementos coincidentes | $('selector').next(); |
| .prev() | Devuelve el hermano **anterior** del elemento en el conjunto de los elementos coincidentes | $('selector').prev(); |
| .siblings() | Devuelve **todos** los hermanos del elemento especificado | $('selector').siblings(); |

**Nota:** los métodos parents() y parent() son similares, excepto que este ultimo sólo se desplaza un solo nivel en el árbol DOM.
Además, $('html').parent() devuelve un conjunto que contiene el documento, mientras que $('html').parents() devuelve un conjunto vacío.

### Esto es mucha información

Sí, puede parecer algo complejo, pero recordemos que no somos una usb para
almacenar toda la información, **somos desarrolladoras** que sabemos a
donde regresar cuando se necesita buscar algo especifico.
